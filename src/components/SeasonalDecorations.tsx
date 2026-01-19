"use client";
import { useEffect, useRef, useMemo } from 'react';

type Season = 'navidad' | 'anio-nuevo' | 'reyes' | 'dental' | 'none';

interface SeasonalDecorationsProps {
  season?: Season;
}

const seasonConfig = {
  navidad: {
    fallingIcon: '❄',
    fallingColor: 'rgba(220, 38, 38, 0.8)', // Rojo
    staticIcon: '❄️',
    staticColor: 'text-white',
    fallingCount: 40,
    staticCount: 60,
  },
  'anio-nuevo': {
    fallingIcon: '✨',
    fallingColor: 'rgba(234, 179, 8, 0.8)', // Dorado
    staticIcon: '🎊',
    staticColor: 'text-yellow-400',
    fallingCount: 50,
    staticCount: 20,
  },
  reyes: {
    fallingIcon: '⭐',
    fallingColor: 'rgba(59, 130, 246, 0.8)', // Azul
    staticIcon: '👑',
    staticColor: 'text-blue-400',
    fallingCount: 35,
    staticCount: 15,
  },
  dental: {
    fallingIcon: '🦷',
    fallingColor: 'rgba(220, 38, 38, 0.8)', // Rojo
    staticIcon: '😁',
    staticColor: 'text-red-600',
    fallingCount: 30,
    staticCount: 0,
  },
  none: {
    fallingIcon: '',
    fallingColor: '',
    staticIcon: '',
    staticColor: '',
    fallingCount: 0,
    staticCount: 0,
  }
};

export function SeasonalDecorations({ season = 'navidad' }: SeasonalDecorationsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const config = seasonConfig[season];

  useEffect(() => {
    if (season === 'none' || !config.fallingCount) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    interface Particle {
      x: number;
      y: number;
      radius: number;
      speed: number;
      drift: number;
      opacity: number;
      emoji?: string;
    }

    const particles: Particle[] = [];
    const dentalEmojis = season === 'dental' ? ['🦷', '😁'] : null;

    for (let i = 0; i < config.fallingCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 2,
        speed: Math.random() * 1 + 0.5,
        drift: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.4 + 0.4,
        emoji: dentalEmojis ? dentalEmojis[Math.floor(Math.random() * dentalEmojis.length)] : undefined
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.font = `${particle.radius * 6}px Arial`;
        ctx.fillStyle = config.fallingColor.replace('0.8', particle.opacity.toString());
        const icon = particle.emoji || config.fallingIcon;
        ctx.fillText(icon, particle.x, particle.y);

        particle.y += particle.speed;
        particle.x += particle.drift;

        if (particle.y > canvas.height) {
          particle.y = -10;
          particle.x = Math.random() * canvas.width;
          // Cambiar emoji al reiniciar si es dental
          if (dentalEmojis) {
            particle.emoji = dentalEmojis[Math.floor(Math.random() * dentalEmojis.length)];
          }
        }

        if (particle.x > canvas.width) {
          particle.x = 0;
        } else if (particle.x < 0) {
          particle.x = canvas.width;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [season, config]);

  if (season === 'none') return null;

  return (
    <>
      {/* Partículas cayendo */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9999]"
        style={{ width: '100%', height: '100%' }}
      />
    </>
  );
}

// Componente para decoraciones estáticas de fondo en secciones
export function SeasonalBackground({ season = 'navidad' }: SeasonalDecorationsProps) {
  const config = seasonConfig[season];

  // Generar posiciones estáticas de forma consistente para evitar error de hidratación
  const staticPositions = useMemo(() => {
    return [...Array(config.staticCount)].map((_, i) => ({
      left: (i * 37 + 17) % 100,
      top: (i * 53 + 23) % 100,
    }));
  }, [config.staticCount]);

  if (season === 'none' || !config.staticCount) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
      {staticPositions.map((pos, i) => (
        <div
          key={i}
          className={`absolute text-2xl sm:text-3xl ${config.staticColor}`}
          style={{
            left: `${pos.left}%`,
            top: `${pos.top}%`,
          }}
        >
          {config.staticIcon}
        </div>
      ))}
    </div>
  );
}
