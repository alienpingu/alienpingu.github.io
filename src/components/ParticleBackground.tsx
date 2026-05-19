import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GPUComputationRenderer } from "three/examples/jsm/misc/GPUComputationRenderer.js";

const PARTICLE_COUNT_DESKTOP = 50000;
const PARTICLE_COUNT_MOBILE = 15000;

const DARK_COLOR = new THREE.Color("#e8a020");
const LIGHT_COLOR = new THREE.Color("#c47a10");

const simulationFragmentShader = /* glsl */ `
  uniform float uDelta;
  uniform vec3 uMouse;
  uniform float uMouseActive;
  uniform float uGravity;
  uniform float uBounce;
  uniform float uFriction;
  uniform float uRepulsion;

  void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    vec4 posData = texture2D(texturePosition, uv);
    vec4 velData = texture2D(textureVelocity, uv);

    vec3 pos = posData.xyz;
    vec3 vel = velData.xyz;

    vel.y += uGravity * uDelta;
    pos += vel * uDelta;

    if (pos.y < 0.0) {
      pos.y = 0.0;
      vel.y = -vel.y * uBounce;
      vel.x *= 0.9;
      vel.z *= 0.9;
    }

    if (uMouseActive > 0.5) {
      vec3 toMouse = pos - uMouse;
      float dist = length(toMouse);
      float radius = 4.0;
      if (dist < radius && dist > 0.01) {
        float force = (1.0 - dist / radius) * uRepulsion;
        vel += normalize(toMouse) * force * uDelta;
      }
    }

    vel *= uFriction;
    vel = clamp(vel, vec3(-15.0), vec3(15.0));

    gl_FragColor = vec4(pos, 1.0);
  }
`;

const velocityFragmentShader = /* glsl */ `
  uniform float uDelta;
  uniform vec3 uMouse;
  uniform float uMouseActive;
  uniform float uGravity;
  uniform float uBounce;
  uniform float uFriction;
  uniform float uRepulsion;

  void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    vec4 posData = texture2D(texturePosition, uv);
    vec4 velData = texture2D(textureVelocity, uv);

    vec3 pos = posData.xyz;
    vec3 vel = velData.xyz;

    vel.y += uGravity * uDelta;

    if (pos.y < 0.0) {
      vel.y = -vel.y * uBounce;
      vel.x *= 0.9;
      vel.z *= 0.9;
    }

    if (uMouseActive > 0.5) {
      vec3 toMouse = pos - uMouse;
      float dist = length(toMouse);
      float radius = 4.0;
      if (dist < radius && dist > 0.01) {
        float force = (1.0 - dist / radius) * uRepulsion;
        vel += normalize(toMouse) * force;
      }
    }

    vel *= uFriction;
    vel = clamp(vel, vec3(-15.0), vec3(15.0));

    gl_FragColor = vec4(vel, 1.0);
  }
`;

function getInitialPositionData(width: number, height: number): Float32Array {
  const count = width * height;
  const data = new Float32Array(count * 4);
  const separation = 0.25;
  const offsetX = (width * separation) / 2;
  const offsetZ = (height * separation) / 2;

  for (let i = 0; i < count; i++) {
    data[i * 4] = (i % width) * separation - offsetX;
    data[i * 4 + 1] = Math.random() * 2 + 0.5;
    data[i * 4 + 2] = Math.floor(i / width) * separation - offsetZ;
    data[i * 4 + 3] = 1;
  }
  return data;
}

function getInitialVelocityData(width: number, height: number): Float32Array {
  const count = width * height;
  const data = new Float32Array(count * 4);
  for (let i = 0; i < count; i++) {
    data[i * 4] = (Math.random() - 0.5) * 0.01;
    data[i * 4 + 1] = 0;
    data[i * 4 + 2] = (Math.random() - 0.5) * 0.01;
    data[i * 4 + 3] = 1;
  }
  return data;
}

const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const errorRef = useRef<string | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL2
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2");
    if (!gl) {
      console.error("WebGL2 not supported");
      errorRef.current = "WebGL2 not supported";
      return;
    }

    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP;
    const textureWidth = Math.ceil(Math.sqrt(particleCount));
    const textureHeight = Math.ceil(particleCount / textureWidth);
    const actualCount = textureWidth * textureHeight;

    console.log(`[Particles] Init: ${actualCount} particles, texture ${textureWidth}x${textureHeight}`);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";
    container.appendChild(renderer.domElement);

    // Scene & Camera (top-down)
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      200
    );
    const orbitRadius = 25;
    const scrollFactor = 0.0008;
    const lerpFactor = 0.04;
    const maxAngle = (80 * Math.PI) / 180; // ~80deg max inclination

    let targetAngle = 0;
    let currentAngle = 0;

    camera.position.set(0, orbitRadius, 0);
    camera.lookAt(0, 0, 0);

    // GPU Computation
    const gpuCompute = new GPUComputationRenderer(textureWidth, textureHeight, renderer);
    if (!renderer.capabilities.isWebGL2) {
      gpuCompute.setDataType(THREE.HalfFloatType);
    }

    const posTexture = gpuCompute.createTexture();
    posTexture.image.data.set(getInitialPositionData(textureWidth, textureHeight));

    const velTexture = gpuCompute.createTexture();
    velTexture.image.data.set(getInitialVelocityData(textureWidth, textureHeight));

    const posVariable = gpuCompute.addVariable(
      "texturePosition",
      simulationFragmentShader,
      posTexture
    );
    const velVariable = gpuCompute.addVariable(
      "textureVelocity",
      velocityFragmentShader,
      velTexture
    );

    gpuCompute.setVariableDependencies(posVariable, [posVariable, velVariable]);
    gpuCompute.setVariableDependencies(velVariable, [posVariable, velVariable]);

    const simUniforms = {
      uDelta: { value: 0.016 },
      uMouse: { value: new THREE.Vector3(0, -1, 0) },
      uMouseActive: { value: 0 },
      uGravity: { value: -9.8 },
      uBounce: { value: 0.7 },
      uFriction: { value: 0.995 },
      uRepulsion: { value: 25.0 },
    };

    Object.assign(posVariable.material.uniforms, simUniforms);
    Object.assign(velVariable.material.uniforms, simUniforms);

    const initError = gpuCompute.init();
    if (initError !== null) {
      console.error("[Particles] GPUComputationRenderer init error:", initError);
      errorRef.current = initError;
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      return;
    }

    console.log("[Particles] GPUComputationRenderer initialized successfully");

    // Particle geometry
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(actualCount * 3);
    for (let i = 0; i < actualCount; i++) {
      positions[i * 3] = 0;
      positions[i * 3 + 1] = 0;
      positions[i * 3 + 2] = 0;
    }
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const isDark = document.documentElement.classList.contains("dark");
    const material = new THREE.PointsMaterial({
      color: isDark ? DARK_COLOR : LIGHT_COLOR,
      size: isMobile ? 0.35 : 0.3,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Invisible plane for raycasting
    const planeGeometry = new THREE.PlaneGeometry(200, 200);
    planeGeometry.rotateX(-Math.PI / 2);
    const plane = new THREE.Mesh(
      planeGeometry,
      new THREE.MeshBasicMaterial({ visible: false })
    );
    scene.add(plane);

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    const mouseWorldPos = new THREE.Vector3();

    // Mouse interaction
    const onPointerMove = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(pointer, camera);
      const intersects = raycaster.intersectObject(plane, false);

      if (intersects.length > 0) {
        mouseWorldPos.copy(intersects[0].point);
        mouseWorldPos.y = -1;
        simUniforms.uMouse.value.copy(mouseWorldPos);
        simUniforms.uMouseActive.value = 1;
      }
    };

    const onPointerLeave = () => {
      simUniforms.uMouseActive.value = 0;
    };

    document.addEventListener("pointermove", onPointerMove);
    document.addEventListener("pointerleave", onPointerLeave);

    // Theme detection
    const updateThemeColor = () => {
      const dark = document.documentElement.classList.contains("dark");
      material.color = dark ? DARK_COLOR : LIGHT_COLOR;
    };
    updateThemeColor();
    const observer = new MutationObserver(updateThemeColor);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Resize
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    // Scroll-driven orbit (clamped 0 -> maxAngle)
    const onScroll = () => {
      targetAngle = Math.min(Math.max(window.scrollY * scrollFactor, 0), maxAngle);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Animation
    const clock = new THREE.Clock();
    let isVisible = true;
    let frameId = 0;
    const readBuffer = new Float32Array(textureWidth * textureHeight * 4);

    const onVisibilityChange = () => {
      isVisible = document.visibilityState === "visible";
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const delta = Math.min(clock.getDelta(), 0.05);
      simUniforms.uDelta.value = delta;

      // Smoothly interpolate camera orbit angle based on scroll (orbit around X-axis)
      currentAngle += (targetAngle - currentAngle) * lerpFactor;
      camera.position.x = 0;
      camera.position.y = orbitRadius * Math.cos(currentAngle);
      camera.position.z = orbitRadius * Math.sin(currentAngle);
      camera.lookAt(0, 0, 0);

      // Run GPU simulation
      gpuCompute.compute();

      // Read positions back from GPU
      renderer.readRenderTargetPixels(
        gpuCompute.getCurrentRenderTarget(posVariable),
        0,
        0,
        textureWidth,
        textureHeight,
        readBuffer
      );

      // Update geometry
      const posArray = geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < actualCount; i++) {
        posArray[i * 3] = readBuffer[i * 4];
        posArray[i * 3 + 1] = readBuffer[i * 4 + 1];
        posArray[i * 3 + 2] = readBuffer[i * 4 + 2];
      }
      geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(frameId);
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      planeGeometry.dispose();
      (plane.material as THREE.Material).dispose();
      gpuCompute.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
};

export default ParticleBackground;
