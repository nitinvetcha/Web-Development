import React, { useEffect, useState } from 'react';

const HeartRain: React.FC = () => {
  const [hearts, setHearts] = useState<number[]>([]);

  useEffect(() => {
    // Create a static array of hearts to render
    const initialHearts = Array.from({ length: 20 }, (_, i) => i);
    setHearts(initialHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((i) => (
        <div
          key={i}
          className="absolute text-pink-300 opacity-30 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 2 + 1}rem`,
            animationDuration: `${Math.random() * 3 + 2}s`,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

export default HeartRain;