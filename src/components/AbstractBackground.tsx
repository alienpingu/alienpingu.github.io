import { useEffect, useRef } from "react";
import * as THREE from "three";
import { getVariant, type VariantKey } from "./abstract-variants";

interface AbstractBackgroundProps {
  variant: VariantKey;
}

const AbstractBackground = ({ variant }: AbstractBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const config = getVariant(variant);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";
    container.appendChild(renderer.domElement);

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 6);

    // Uniforms
    const uniforms = {
      uTime: { value: 0 },
      uScroll: { value: 0 },
      uResolution: {
        value: new THREE.Vector2(window.innerWidth, window.innerHeight),
      },
    };

    // Geometry & Material
    let mesh: THREE.Mesh | THREE.InstancedMesh;

    const material = new THREE.ShaderMaterial({
      vertexShader: config.vertexShader,
      fragmentShader: config.fragmentShader,
      uniforms,
      wireframe: config.wireframe ?? false,
      transparent: true,
      side: THREE.DoubleSide,
    });

    if (config.geometryType === "torusKnot") {
      const geometry = new THREE.TorusKnotGeometry(1.2, 0.35, 150, 20);
      mesh = new THREE.Mesh(geometry, material);
    } else if (config.geometryType === "icosahedron") {
      const geometry = new THREE.IcosahedronGeometry(1.5, 2);

      if (config.instanceCount && config.instanceCount > 1) {
        mesh = new THREE.InstancedMesh(geometry, material, config.instanceCount);
        const dummy = new THREE.Object3D();
        for (let i = 0; i < config.instanceCount; i++) {
          const angle = (i / config.instanceCount) * Math.PI * 2;
          const radius = 2.5;
          dummy.position.set(
            Math.cos(angle) * radius,
            Math.sin(angle * 1.3) * 1.2,
            Math.sin(angle) * radius
          );
          dummy.rotation.set(
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            0
          );
          dummy.scale.setScalar(0.4 + Math.random() * 0.4);
          dummy.updateMatrix();
          mesh.setMatrixAt(i, dummy.matrix);
        }
        mesh.instanceMatrix.needsUpdate = true;
      } else {
        mesh = new THREE.Mesh(geometry, material);
      }
    } else if (config.geometryType === "sphere") {
      const geometry = new THREE.SphereGeometry(1.8, 64, 64);
      mesh = new THREE.Mesh(geometry, material);
    } else if (config.geometryType === "rings") {
      const geometry = new THREE.PlaneGeometry(10, 10, 1, 1);
      mesh = new THREE.Mesh(geometry, material);
    } else {
      const geometry = new THREE.IcosahedronGeometry(1.5, 2);
      mesh = new THREE.Mesh(geometry, material);
    }

    scene.add(mesh);

    // Scroll tracking
    const scrollFactor = 0.0008 * config.scrollMultiplier;
    let targetScroll = 0;
    let currentScroll = 0;

    const onScroll = () => {
      targetScroll = Math.min(window.scrollY * scrollFactor, 1);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Resize
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    // Visibility
    let isVisible = true;
    let frameId = 0;

    const onVisibilityChange = () => {
      isVisible = document.visibilityState === "visible";
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    // Animation
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const elapsed = clock.getElapsedTime();
      uniforms.uTime.value = elapsed;

      // Smooth scroll interpolation
      currentScroll += (targetScroll - currentScroll) * 0.04;
      uniforms.uScroll.value = currentScroll;

      // Slow rotation
      if (config.geometryType === "torusKnot") {
        mesh.rotation.y = elapsed * 0.1 + currentScroll * 0.5;
        mesh.rotation.x = Math.sin(elapsed * 0.2) * 0.2;
      } else if (config.geometryType === "icosahedron" && !config.instanceCount) {
        mesh.rotation.y = elapsed * 0.15 + currentScroll * 0.3;
        mesh.rotation.x = elapsed * 0.08;
      } else if (config.geometryType === "sphere") {
        mesh.rotation.y = elapsed * 0.05 + currentScroll * 0.2;
        mesh.rotation.x = elapsed * 0.03;
      } else if (config.geometryType === "rings") {
        mesh.rotation.z = elapsed * 0.05;
      }

      // Instance rotation for projects
      if (config.instanceCount && mesh instanceof THREE.InstancedMesh) {
        const dummy = new THREE.Object3D();
        for (let i = 0; i < config.instanceCount; i++) {
          mesh.getMatrixAt(i, dummy.matrix);
          dummy.matrix.decompose(dummy.position, dummy.quaternion, dummy.scale);
          dummy.rotation.y += 0.005 + i * 0.001;
          dummy.rotation.x += 0.003;
          dummy.updateMatrix();
          mesh.setMatrixAt(i, dummy.matrix);
        }
        mesh.instanceMatrix.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      renderer.dispose();
      if (mesh instanceof THREE.Mesh || mesh instanceof THREE.InstancedMesh) {
        mesh.geometry.dispose();
      }
      material.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [variant]);

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

export default AbstractBackground;
