"use client";
import { useEffect, useRef } from 'react';

export function SnowfallEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Ajustar el tamaño del canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Crear copos de nieve
    interface Snowflake {
      x: number;
      y: number;
      radius: number;
      speed: number;
      drift: number;
      opacity: number;
    }

    const snowflakes: Snowflake[] = [];
    const numberOfSnowflakes = 40;

    for (let i = 0; i < numberOfSnowflakes; i++) {
      snowflakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 2,
        speed: Math.random() * 1 + 0.5,
        drift: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.4 + 0.4
      });
    }

    // Animar los copos
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      snowflakes.forEach((flake) => {
        // Dibujar copo de nieve (❄)
        ctx.font = `${flake.radius * 6}px Arial`;
        ctx.fillStyle = `rgba(220, 38, 38, ${flake.opacity})`; // Rojo (#dc2626)
        ctx.fillText('❄', flake.x, flake.y);

        // Actualizar posición
        flake.y += flake.speed;
        flake.x += flake.drift;

        // Reiniciar copo cuando sale de la pantalla
        if (flake.y > canvas.height) {
          flake.y = -10;
          flake.x = Math.random() * canvas.width;
        }

        // Mantener copos dentro del ancho de pantalla
        if (flake.x > canvas.width) {
          flake.x = 0;
        } else if (flake.x < 0) {
          flake.x = canvas.width;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{ width: '100%', height: '100%' }}
    />
  );
}
