// components/SnowAnimation.tsx
"use client";

const FLAKES = 40;

export default function SnowAnimation() {
  const flakes = Array.from({ length: FLAKES }, (_, i) => i);

  return (
    <div className="snow-overlay" aria-hidden="true">
      {flakes.map((i) => {
        const left = Math.random() * 100;
        const duration = 10 + Math.random() * 10; // 10–20s
        const delay = Math.random() * 10;
        const size = 10 + Math.random() * 10; // px

        const style: React.CSSProperties = {
          left: `${left}%`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
          fontSize: `${size}px`,
        };

        return (
          <div key={i} className="snowflake" style={style}>
            ❄
          </div>
        );
      })}
    </div>
  );
}

