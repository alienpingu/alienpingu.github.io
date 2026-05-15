import { useRef, useState, useMemo, Suspense, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, Environment, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";

interface Product {
  id: number;
  symbol: string;
  name: string;
  category: string;
  col: number;
  row: number;
  color: string;
}

const products: Product[] = [
  { id: 1, symbol: "AI", name: "AI Engine", category: "Core", col: 1, row: 1, color: "#22d3ee" },
  { id: 2, symbol: "CL", name: "Cloud", category: "Infra", col: 18, row: 1, color: "#e8a020" },
  { id: 3, symbol: "DB", name: "Database", category: "Storage", col: 1, row: 2, color: "#a855f7" },
  { id: 4, symbol: "API", name: "REST API", category: "Backend", col: 2, row: 2, color: "#22c55e" },
  { id: 5, symbol: "UI", name: "Interface", category: "Frontend", col: 13, row: 2, color: "#f472b6" },
  { id: 6, symbol: "TX", name: "Taxonomy", category: "Data", col: 14, row: 2, color: "#fb923c" },
  { id: 7, symbol: "NS", name: "Namespace", category: "Org", col: 15, row: 2, color: "#60a5fa" },
  { id: 8, symbol: "FX", name: "Effects", category: "Visual", col: 16, row: 2, color: "#c084fc" },
  { id: 9, symbol: "SC", name: "Security", category: "Auth", col: 17, row: 2, color: "#f87171" },
  { id: 10, symbol: "NE", name: "Network", category: "Infra", col: 18, row: 2, color: "#34d399" },
  { id: 11, symbol: "LG", name: "Logging", category: "DevOps", col: 1, row: 3, color: "#94a3b8" },
  { id: 12, symbol: "MT", name: "Metrics", category: "Monitor", col: 2, row: 3, color: "#38bdf8" },
  { id: 13, symbol: "OR", name: "Orchestrator", category: "Infra", col: 13, row: 3, color: "#818cf8" },
  { id: 14, symbol: "SS", name: "Session", category: "Auth", col: 14, row: 3, color: "#fbbf24" },
  { id: 15, symbol: "CP", name: "Composer", category: "Builder", col: 15, row: 3, color: "#a78bfa" },
  { id: 16, symbol: "ST", name: "Storage", category: "Data", col: 16, row: 3, color: "#2dd4bf" },
  { id: 17, symbol: "EV", name: "Events", category: "Queue", col: 17, row: 3, color: "#f472b6" },
  { id: 18, symbol: "CH", name: "Cache", category: "Perf", col: 18, row: 3, color: "#fb7185" },
  { id: 19, symbol: "SL", name: "Search", category: "Data", col: 1, row: 4, color: "#a3e635" },
  { id: 20, symbol: "ML", name: "ML Model", category: "AI", col: 2, row: 4, color: "#67e8f9" },
  { id: 21, symbol: "TF", name: "Transform", category: "ETL", col: 3, row: 4, color: "#c084fc" },
  { id: 22, symbol: "TN", name: "Tensor", category: "AI", col: 4, row: 4, color: "#22d3ee" },
  { id: 23, symbol: "VN", name: "Vision", category: "AI", col: 5, row: 4, color: "#818cf8" },
  { id: 24, symbol: "LP", name: "Language", category: "NLP", col: 6, row: 4, color: "#34d399" },
  { id: 25, symbol: "AU", name: "Audio", category: "Media", col: 7, row: 4, color: "#f472b6" },
  { id: 26, symbol: "VD", name: "Video", category: "Media", col: 8, row: 4, color: "#fb923c" },
  { id: 27, symbol: "IM", name: "Image", category: "Media", col: 9, row: 4, color: "#60a5fa" },
  { id: 28, symbol: "DM", name: "Document", category: "Data", col: 10, row: 4, color: "#a78bfa" },
  { id: 29, symbol: "WS", name: "Websocket", category: "Real-time", col: 11, row: 4, color: "#2dd4bf" },
  { id: 30, symbol: "GR", name: "Graph", category: "Data", col: 12, row: 4, color: "#fbbf24" },
  { id: 31, symbol: "TS", name: "TimeSeries", category: "Data", col: 13, row: 4, color: "#94a3b8" },
  { id: 32, symbol: "GF", name: "Geo", category: "Location", col: 14, row: 4, color: "#38bdf8" },
  { id: 33, symbol: "NT", name: "Notification", category: "Comms", col: 15, row: 4, color: "#818cf8" },
  { id: 34, symbol: "PM", name: "Payment", category: "Commerce", col: 16, row: 4, color: "#34d399" },
  { id: 35, symbol: "AN", name: "Analytics", category: "Insight", col: 17, row: 4, color: "#f472b6" },
  { id: 36, symbol: "BL", name: "Billing", category: "Commerce", col: 18, row: 4, color: "#fb7185" },
];

const CELL_WIDTH = 90;
const CELL_HEIGHT = 110;
const TABLE_OFFSET_X = -850;
const TABLE_OFFSET_Y = 350;

function ProductCard({
  product,
  position,
  rotation,
  isFocused,
  isDimmed,
  onClick,
}: {
  product: Product;
  position: THREE.Vector3;
  rotation: THREE.Euler;
  isFocused: boolean;
  isDimmed: boolean;
  onClick: () => void;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const [isHovered, setIsHovered] = useState(false);

  useFrame(() => {
    if (!groupRef.current) return;
    
    groupRef.current.position.lerp(position, 0.08);
    
    const targetRotation = new THREE.Quaternion().setFromEuler(rotation);
    groupRef.current.quaternion.slerp(targetRotation, 0.08);
    
    const targetScale = isFocused ? 1.8 : isHovered ? 1.15 : 1;
    groupRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      0.1
    );
  });

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <group ref={groupRef} position={position} rotation={rotation}>
      <Html
        transform
        occlude
        style={{
          width: `${CELL_WIDTH}px`,
          height: `${CELL_HEIGHT}px`,
          opacity: isDimmed ? 0.3 : 1,
          transition: "opacity 0.3s ease",
          pointerEvents: isDimmed ? "none" : "auto",
        }}
      >
        <motion.div
          className="w-full h-full rounded-lg overflow-hidden cursor-pointer"
          style={{
            backgroundColor: `${product.color}20`,
            border: `1px solid ${isHovered || isFocused ? product.color : `${product.color}50`}`,
            boxShadow: isHovered || isFocused 
              ? `0 0 30px ${product.color}60, inset 0 0 20px ${product.color}20`
              : `0 0 10px ${product.color}30`,
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleClick}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative w-full h-full p-2 flex flex-col items-center justify-between">
            <span 
              className="absolute top-2 right-2 text-xs font-mono"
              style={{ color: `${product.color}90` }}
            >
              {product.id}
            </span>
            
            <span 
              className="text-3xl font-bold mt-4"
              style={{ 
                color: product.color,
                textShadow: `0 0 20px ${product.color}80`,
              }}
            >
              {product.symbol}
            </span>
            
            <div className="text-center">
              <p className="text-[10px] uppercase tracking-wider font-medium" style={{ color: `${product.color}bb` }}>
                {product.name}
              </p>
              <p className="text-[8px] mt-0.5" style={{ color: `${product.color}70` }}>
                {product.category}
              </p>
            </div>
          </div>
        </motion.div>
      </Html>
    </group>
  );
}

interface SceneProps {
  onFocusChange: (product: Product | null) => void;
}

function Scene({ onFocusChange }: SceneProps) {
  const [focusedId, setFocusedId] = useState<number | null>(null);
  const { camera, size } = useThree();
  const isMobile = size.width < 768;
  
  const scale = isMobile ? 0.6 : 1;
  const cellWidth = CELL_WIDTH * scale;
  const cellHeight = CELL_HEIGHT * scale;
  const offsetX = isMobile ? -250 : TABLE_OFFSET_X;
  const offsetY = isMobile ? 200 : TABLE_OFFSET_Y;

  const targets = useMemo(() => {
    return products.map((product) => {
      const x = product.col * cellWidth + offsetX;
      const y = -(product.row * cellHeight) + offsetY;
      return new THREE.Vector3(x, y, 0);
    });
  }, [cellWidth, cellHeight, offsetX, offsetY, isMobile]);

  const rotations = useMemo(() => {
    return products.map(() => new THREE.Euler(0, 0, 0));
  }, []);

  const focusedTarget = useMemo(() => {
    return new THREE.Vector3(0, 0, 400);
  }, []);

  const focusedRotation = useMemo(() => {
    return new THREE.Euler(0, 0, 0);
  }, []);

  useFrame(() => {
    const targetCamPos = focusedId !== null 
      ? new THREE.Vector3(0, 0, 1200)
      : new THREE.Vector3(0, 0, isMobile ? 1800 : 1400);
    
    camera.position.lerp(targetCamPos, 0.05);
  });

  const handleCardClick = useCallback((id: number) => {
    setFocusedId((prev) => {
      const newId = prev === id ? null : id;
      const product = newId ? products.find((p) => p.id === newId) || null : null;
      onFocusChange(product);
      return newId;
    });
  }, [onFocusChange]);

  const handleBackgroundClick = useCallback(() => {
    setFocusedId(null);
    onFocusChange(null);
  }, [onFocusChange]);

  return (
    <>
      <Environment preset="city" />
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} />
      
      <mesh onClick={handleBackgroundClick} visible={false}>
        <planeGeometry args={[5000, 5000]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>

      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          position={focusedId === product.id ? focusedTarget : targets[index]}
          rotation={focusedId === product.id ? focusedRotation : rotations[index]}
          isFocused={focusedId === product.id}
          isDimmed={focusedId !== null && focusedId !== product.id}
          onClick={() => handleCardClick(product.id)}
        />
      ))}
    </>
  );
}

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-12 h-12 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
    </div>
  );
}

export default function ProductShowcase3D() {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  const handleFocusChange = useCallback((product: Product | null) => {
    setActiveProduct(product);
  }, []);

  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/3 via-transparent to-transparent" />
      
      <div className="relative z-10 container mx-auto px-6 pt-16 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-primary font-medium text-xs tracking-[0.3em] uppercase mb-3">
            Tech Stack
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            <span className="text-gradient">Product Ecosystem</span>
          </h2>
          <p className="text-muted-foreground text-base mt-4 max-w-lg mx-auto">
            Click any element to explore. The periodic table of digital capabilities.
          </p>
        </motion.div>
      </div>

      <div className="relative z-10 h-[500px] md:h-[600px] lg:h-[700px] cursor-move">
        <Suspense fallback={<LoadingSpinner />}>
          <Canvas
            camera={{ position: [0, 0, 1400], fov: 45 }}
            dpr={[1, 2]}
            gl={{ antialias: true, alpha: true }}
          >
            <PerspectiveCamera makeDefault position={[0, 0, 1400]} fov={45} />
            <Scene onFocusChange={handleFocusChange} />
          </Canvas>
        </Suspense>
      </div>

      <div className="relative z-10 container mx-auto px-6 pb-16">
        <AnimatePresence mode="wait">
          {activeProduct && (
            <motion.div
              key={activeProduct.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-md mx-auto"
            >
              <div 
                className="p-6 rounded-2xl border backdrop-blur-sm"
                style={{ 
                  backgroundColor: `${activeProduct.color}10`,
                  borderColor: `${activeProduct.color}40`,
                }}
              >
                <div className="flex items-center gap-4">
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold"
                    style={{ 
                      backgroundColor: `${activeProduct.color}20`,
                      color: activeProduct.color,
                      boxShadow: `0 0 20px ${activeProduct.color}30`,
                    }}
                  >
                    {activeProduct.symbol}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{activeProduct.name}</h3>
                    <p className="text-sm text-muted-foreground">{activeProduct.category}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-foreground/70">
                  Part of the BRTSML ecosystem. This component provides essential functionality 
                  for modern digital products and scalable architectures.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!activeProduct && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-sm text-muted-foreground"
          >
            <p>36 elements • 6 categories • Infinite combinations</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
