import { useEffect } from 'react';

const KeyboardController = ({ onMoveLeft, onMoveRight }) => {
  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      onMoveLeft();
    } else if (event.key === 'ArrowRight') {
      onMoveRight();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onMoveLeft, onMoveRight]);

  return null;
};

export default KeyboardController;