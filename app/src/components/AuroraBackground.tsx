import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const vertexShader = `
  precision mediump float;
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const fragmentShader = `
  precision mediump float;
  uniform float u_time;

  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }

  float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }

  void main() {
    vec2 st = gl_FragCoord.xy / vec2(800.0, 600.0);
    float t = u_time * 0.05;

    float n1 = noise(st * 1.5 + t);
    float n2 = noise(st * 2.0 - t * 0.8);
    float n3 = noise(st * 0.8 + t * 1.2);

    float pattern = n1 * 0.5 + n2 * 0.3 + n3 * 0.2;

    vec3 color1 = vec3(0.976, 0.965, 0.945);
    vec3 color2 = vec3(0.95, 0.88, 0.82);
    vec3 color3 = vec3(0.92, 0.85, 0.80);

    vec3 finalColor = mix(mix(color1, color2, pattern), color3, n3 * 0.4);
    float alpha = 0.6 + pattern * 0.3;

    gl_FragColor = vec4(finalColor, alpha);
  }
`;

export default function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    const geometry = new THREE.PlaneGeometry(2, 2);
    const uniforms = { u_time: { value: 0.0 } };
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    function animate(time: number) {
      animationIdRef.current = requestAnimationFrame(animate);
      uniforms.u_time.value = time * 0.001;
      renderer.render(scene, camera);
    }
    animate(0);

    function handleResize() {
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationIdRef.current);
      window.removeEventListener('resize', handleResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
