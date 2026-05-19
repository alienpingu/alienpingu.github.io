export type VariantKey =
  | "services"
  | "projects"
  | "about"
  | "contact"
  | "serviceDetail"
  | "notFound";

interface VariantConfig {
  vertexShader: string;
  fragmentShader: string;
  geometryType: "torusKnot" | "icosahedron" | "sphere" | "rings";
  wireframe?: boolean;
  instanceCount?: number;
  scrollMultiplier: number;
}

const baseVertex = /* glsl */ `
  uniform float uTime;
  uniform float uScroll;
  varying vec2 vUv;
  varying float vDisplacement;
  varying vec3 vNormal;
  varying vec3 vPosition;

  // Simplex 3D noise
  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

  float snoise(vec3 v){
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod(i, 289.0);
    vec4 p = permute(permute(permute(
      i.z + vec4(0.0, i1.z, i2.z, 1.0))
      + i.y + vec4(0.0, i1.y, i2.y, 1.0))
      + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 1.0/7.0;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }
`;

const baseFragment = /* glsl */ `
  uniform float uTime;
  uniform float uScroll;
  varying vec2 vUv;
  varying float vDisplacement;
  varying vec3 vNormal;
  varying vec3 vPosition;
`;

export const variants: Record<VariantKey, VariantConfig> = {
  services: {
    geometryType: "torusKnot",
    wireframe: true,
    scrollMultiplier: 2.0,
    vertexShader: baseVertex + /* glsl */ `
      void main() {
        vUv = uv;
        vNormal = normal;

        float noise = snoise(position * 0.5 + uTime * 0.3);
        float wave = sin(position.y * 3.0 + uTime * 0.5 + uScroll * 6.0) * 0.3;
        float displacement = noise * 0.4 + wave * (0.5 + uScroll);

        vec3 newPos = position + normal * displacement;
        vDisplacement = displacement;
        vPosition = newPos;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
      }
    `,
    fragmentShader: baseFragment + /* glsl */ `
      void main() {
        vec3 colorA = vec3(0.91, 0.63, 0.13); // gold
        vec3 colorB = vec3(0.77, 0.48, 0.06); // dark gold

        float mixVal = vDisplacement * 2.0 + 0.5;
        vec3 finalColor = mix(colorB, colorA, mixVal);

        // Fresnel edge glow
        vec3 viewDir = normalize(cameraPosition - vPosition);
        float fresnel = pow(1.0 - max(dot(vNormal, viewDir), 0.0), 3.0);
        finalColor += fresnel * 0.4;

        gl_FragColor = vec4(finalColor, 0.7 + uScroll * 0.3);
      }
    `,
  },

  projects: {
    geometryType: "icosahedron",
    wireframe: true,
    instanceCount: 5,
    scrollMultiplier: 1.5,
    vertexShader: baseVertex + /* glsl */ `
      void main() {
        vUv = uv;
        vNormal = normal;

        float noise = snoise(position * 0.8 + uTime * 0.2);
        float pulse = 1.0 + sin(uTime * 0.8 + uScroll * 4.0) * 0.15;
        float displacement = noise * 0.2;

        vec3 newPos = position * pulse + normal * displacement;
        vDisplacement = displacement;
        vPosition = newPos;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
      }
    `,
    fragmentShader: baseFragment + /* glsl */ `
      void main() {
        vec3 colorA = vec3(0.95, 0.70, 0.20); // bright gold
        vec3 colorB = vec3(0.60, 0.35, 0.05); // amber

        float mixVal = sin(vUv.y * 3.0 + uTime) * 0.5 + 0.5;
        vec3 finalColor = mix(colorB, colorA, mixVal);

        // Edge highlight
        vec3 viewDir = normalize(cameraPosition - vPosition);
        float fresnel = pow(1.0 - max(dot(vNormal, viewDir), 0.0), 2.0);
        finalColor += fresnel * 0.5;

        gl_FragColor = vec4(finalColor, 0.6);
      }
    `,
  },

  about: {
    geometryType: "sphere",
    wireframe: false,
    scrollMultiplier: 1.0,
    vertexShader: baseVertex + /* glsl */ `
      void main() {
        vUv = uv;
        vNormal = normal;

        float noise = snoise(position * 0.4 + uTime * 0.15);
        float morph = smoothstep(0.0, 1.0, uScroll);
        float displacement = noise * (0.5 + morph * 1.5);

        vec3 newPos = position + normal * displacement;
        vDisplacement = displacement;
        vPosition = newPos;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
      }
    `,
    fragmentShader: baseFragment + /* glsl */ `
      void main() {
        vec3 colorA = vec3(0.91, 0.63, 0.13); // gold
        vec3 colorB = vec3(0.50, 0.30, 0.10); // deep brown

        float light = dot(vNormal, normalize(vec3(1.0, 1.0, 0.5)));
        float mixVal = light * 0.5 + 0.5 + vDisplacement * 0.3;
        vec3 finalColor = mix(colorB, colorA, mixVal);

        // Specular
        vec3 viewDir = normalize(cameraPosition - vPosition);
        vec3 halfDir = normalize(vec3(1.0, 1.0, 0.5) + viewDir);
        float spec = pow(max(dot(vNormal, halfDir), 0.0), 32.0);
        finalColor += spec * 0.3;

        gl_FragColor = vec4(finalColor, 0.85);
      }
    `,
  },

  contact: {
    geometryType: "rings",
    wireframe: false,
    scrollMultiplier: 2.5,
    vertexShader: baseVertex + /* glsl */ `
      void main() {
        vUv = uv;
        float ringPulse = sin(length(position.xy) * 5.0 - uTime * 2.0 - uScroll * 8.0) * 0.5 + 0.5;
        float zOffset = ringPulse * 0.3;

        vec3 newPos = position + vec3(0.0, 0.0, zOffset);
        vPosition = newPos;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
      }
    `,
    fragmentShader: baseFragment + /* glsl */ `
      void main() {
        vec3 colorA = vec3(0.91, 0.63, 0.13); // gold
        vec3 colorB = vec3(0.20, 0.15, 0.08); // dark

        float dist = length(vPosition.xy);
        float ring = sin(dist * 8.0 - uTime * 2.0 - uScroll * 10.0) * 0.5 + 0.5;

        vec3 finalColor = mix(colorB, colorA, ring * 0.7);
        float alpha = smoothstep(0.0, 0.3, ring) * 0.5;

        gl_FragColor = vec4(finalColor, alpha);
      }
    `,
  },

  serviceDetail: {
    geometryType: "icosahedron",
    wireframe: true,
    scrollMultiplier: 1.2,
    vertexShader: baseVertex + /* glsl */ `
      void main() {
        vUv = uv;
        vNormal = normal;

        float pulse = 1.0 + sin(uTime * 0.5 + uScroll * 3.0) * 0.1;
        vec3 newPos = position * pulse;
        vPosition = newPos;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
      }
    `,
    fragmentShader: baseFragment + /* glsl */ `
      void main() {
        vec3 colorA = vec3(0.91, 0.63, 0.13); // gold
        vec3 colorB = vec3(0.60, 0.40, 0.10); // warm amber

        float mixVal = sin(vUv.x * 2.0 + uTime) * 0.5 + 0.5;
        vec3 finalColor = mix(colorB, colorA, mixVal);

        // Wireframe edge glow
        vec3 viewDir = normalize(cameraPosition - vPosition);
        float fresnel = pow(1.0 - max(dot(vNormal, viewDir), 0.0), 2.0);
        finalColor += fresnel * 0.6;

        gl_FragColor = vec4(finalColor, 0.5 + uScroll * 0.3);
      }
    `,
  },

  notFound: {
    geometryType: "icosahedron",
    wireframe: true,
    scrollMultiplier: 3.0,
    vertexShader: baseVertex + /* glsl */ `
      void main() {
        vUv = uv;
        vNormal = normal;

        float glitch = step(0.95, sin(uTime * 5.0 + position.x * 10.0));
        float noise = snoise(position * 1.5 + uTime);
        float displacement = noise * 0.3 + glitch * 0.5;

        vec3 newPos = position + normal * displacement;
        vDisplacement = displacement;
        vPosition = newPos;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
      }
    `,
    fragmentShader: baseFragment + /* glsl */ `
      void main() {
        vec3 colorA = vec3(0.91, 0.63, 0.13); // gold
        vec3 colorB = vec3(0.30, 0.20, 0.05); // dark
        vec3 colorC = vec3(0.95, 0.20, 0.20); // red glitch

        float mixVal = vDisplacement * 3.0 + 0.5;
        vec3 finalColor = mix(colorB, colorA, mixVal);

        // Glitch red flash
        float glitch = step(0.9, sin(vUv.x * 20.0 + uTime * 8.0));
        finalColor = mix(finalColor, colorC, glitch * 0.4);

        // Edge glow
        vec3 viewDir = normalize(cameraPosition - vPosition);
        float fresnel = pow(1.0 - max(dot(vNormal, viewDir), 0.0), 1.5);
        finalColor += fresnel * 0.5;

        gl_FragColor = vec4(finalColor, 0.6 + glitch * 0.2);
      }
    `,
  },
};

export const getVariant = (key: VariantKey): VariantConfig => variants[key];
