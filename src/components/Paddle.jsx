import { useState, useEffect } from 'react'
import KeyboardController from './KeyboardController';
import './Paddle.css'

export default function Paddle(props){
    const [position, setPosition] = useState(300); // Initialize 0
    const { width } = props;

    const handleKeyDown = (event) => {
        if (event.key === 'ArrowLeft') {
            // Mueve la pala hacia la izquierda
            setPosition(prevPosition => Math.max(prevPosition -20, 0));
        } else if (event.key === 'ArrowRight') {
            // Mueve la pala hacia la derecha
            setPosition(prevPosition => Math.min(prevPosition + 20, width - 100));
        }
    };

    useEffect(() => {
        // Añade el event listener al montar el componente
        window.addEventListener('keydown', handleKeyDown);
    
        // Limpia el event listener al desmontar el componente
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
    }, [width]); // Dependencia en `width` para que se actualice si cambia

    return (
        <div 
            className="paddle"
            style={{ left: `${position}px` }}
        > 
            {position} 
        </div>
    );
}