import { useEffect } from 'react';

export const useCursorLightEffect = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.id = 'cursor-light-effect';
    cursor.className = 'pointer-events-none fixed inset-0 transition duration-300 lg:absolute';

    document.body.appendChild(cursor);

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.background = `radial-gradient(600px at ${e.clientX}px ${e.clientY}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.body.removeChild(cursor);
    };
  }, []);
};
