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

    // Crear dientes y muelas
    interface Tooth {
      x: number;
      y: number;
      radius: number;
      speed: number;
      drift: number;
      opacity: number;
      emoji: string;
    }

    const teeth: Tooth[] = [];
    const numberOfTeeth = 30;

    const toothEmojis = ['🦷', '😁'];
    for (let i = 0; i < numberOfTeeth; i++) {
      teeth.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 2,
        speed: Math.random() * 1 + 0.5,
        drift: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.4 + 0.4,
        emoji: toothEmojis[Math.floor(Math.random() * toothEmojis.length)]
      });
    }

    // Animar los dientes
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      teeth.forEach((tooth) => {
        // Dibujar diente o muela
        ctx.font = `${tooth.radius * 6}px Arial`;
        ctx.fillStyle = `rgba(220, 38, 38, ${tooth.opacity})`; // Rojo (#dc2626)
        ctx.fillText(tooth.emoji, tooth.x, tooth.y);

        // Actualizar posición
        tooth.y += tooth.speed;
        tooth.x += tooth.drift;

        // Reiniciar diente cuando sale de la pantalla
        if (tooth.y > canvas.height) {
          tooth.y = -10;
          tooth.x = Math.random() * canvas.width;
        }

        // Mantener dientes dentro del ancho de pantalla
        if (tooth.x > canvas.width) {
          tooth.x = 0;
        } else if (tooth.x < 0) {
          tooth.x = canvas.width;
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
