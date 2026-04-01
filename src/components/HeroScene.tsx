import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 800;

function Particles() {
  const mesh = useRef<THREE.Points>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  const [positions, basePositions, sizes] = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const base = new Float32Array(PARTICLE_COUNT * 3);
    const sz = new Float32Array(PARTICLE_COUNT);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = (Math.random() - 0.5) * 12;
      const y = (Math.random() - 0.5) * 8;
      const z = (Math.random() - 0.5) * 6;
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
      base[i * 3] = x;
      base[i * 3 + 1] = y;
      base[i * 3 + 2] = z;
      sz[i] = Math.random() * 3 + 1;
    }
    return [pos, base, sz];
  }, []);

  useFrame(({ clock, pointer }) => {
    if (!mesh.current) return;
    const t = clock.getElapsedTime();
    mouse.current.x += (pointer.x * viewport.width * 0.5 - mouse.current.x) * 0.05;
    mouse.current.y += (pointer.y * viewport.height * 0.5 - mouse.current.y) * 0.05;

    const posAttr = mesh.current.geometry.attributes.position;
    const arr = posAttr.array as Float32Array;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const bx = basePositions[i * 3];
      const by = basePositions[i * 3 + 1];
      const bz = basePositions[i * 3 + 2];

      const dx = mouse.current.x - bx;
      const dy = mouse.current.y - by;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const influence = Math.max(0, 1 - dist / 3);

      arr[i * 3] = bx + Math.sin(t * 0.3 + i * 0.01) * 0.15 + dx * influence * 0.3;
      arr[i * 3 + 1] = by + Math.cos(t * 0.2 + i * 0.015) * 0.15 + dy * influence * 0.3;
      arr[i * 3 + 2] = bz + Math.sin(t * 0.4 + i * 0.02) * 0.1;
    }
    posAttr.needsUpdate = true;
    mesh.current.rotation.z = t * 0.02;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={PARTICLE_COUNT}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#e8a020"
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function Lines() {
  const ref = useRef<THREE.LineSegments>(null);
  const { pointer, viewport } = useThree();

  const positions = useMemo(() => {
    const arr = new Float32Array(60 * 6);
    for (let i = 0; i < 60; i++) {
      const x1 = (Math.random() - 0.5) * 14;
      const y1 = (Math.random() - 0.5) * 10;
      const angle = Math.random() * Math.PI * 2;
      const len = Math.random() * 3 + 1;
      arr[i * 6] = x1;
      arr[i * 6 + 1] = y1;
      arr[i * 6 + 2] = (Math.random() - 0.5) * 2;
      arr[i * 6 + 3] = x1 + Math.cos(angle) * len;
      arr[i * 6 + 4] = y1 + Math.sin(angle) * len;
      arr[i * 6 + 5] = (Math.random() - 0.5) * 2;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.z = Math.sin(t * 0.1) * 0.05;
    ref.current.position.x = pointer.x * viewport.width * 0.03;
    ref.current.position.y = pointer.y * viewport.height * 0.03;
  });

  return (
    <lineSegments ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={120}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#e8a020" transparent opacity={0.08} />
    </lineSegments>
  );
}

const HeroScene = () => (
  <div className="absolute inset-0">
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      style={{ background: "transparent" }}
      dpr={[1, 1.5]}
    >
      <Particles />
      <Lines />
    </Canvas>
  </div>
);

export default HeroScene;
