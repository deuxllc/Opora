import { useEffect, useRef } from 'react';

interface Sparkle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  opacity: number;
  life: number;
  maxLife: number;
}

export default function SparkleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparklesRef = useRef<Sparkle[]>([]);
  const animIdRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    const MAX_SPARKLES = 40;

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    function createSparkle(): Sparkle {
      return {
        x: Math.random() * canvas!.width,
        y: canvas!.height + 10,
        size: Math.random() * 3 + 1,
        speedY: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.4 + 0.2,
        life: 0,
        maxLife: Math.random() * 300 + 200,
      };
    }

    function updateAndDraw() {
      ctx.clearRect(0, 0, canvas!.width, canvas!.height);

      if (sparklesRef.current.length < MAX_SPARKLES) {
        sparklesRef.current.push(createSparkle());
      }

      for (let i = sparklesRef.current.length - 1; i >= 0; i--) {
        const s = sparklesRef.current[i];
        s.y -= s.speedY;
        s.life++;
        const lifeRatio = s.life / s.maxLife;
        const currentOpacity = s.opacity * (1 - lifeRatio) * (lifeRatio < 0.1 ? lifeRatio / 0.1 : 1);

        if (s.life >= s.maxLife) {
          sparklesRef.current.splice(i, 1);
          continue;
        }

        ctx.fillStyle = `rgba(194, 91, 69, ${currentOpacity})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animIdRef.current = requestAnimationFrame(updateAndDraw);
    }

    updateAndDraw();

    return () => {
      cancelAnimationFrame(animIdRef.current);
      window.removeEventListener('resize', resize);
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
        zIndex: 1,
        pointerEvents: 'none',
      }}
    />
  );
}
