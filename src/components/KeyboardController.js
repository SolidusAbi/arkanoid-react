import { useEffect } from 'react';

export default function KeyboardController({ onMove }) {
  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      onMove(-10);
    } else if (event.key === 'ArrowRight') {
      onMove(10);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null;
}