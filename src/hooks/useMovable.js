import { useState, useCallback } from "react";

export default function useMovable( initialPosition ){
    const [position, setPosition] = useState(initialPosition);

    const moveLeft = useCallback((delta) => {
        setPosition(([x, y]) => [x-delta, y])
    }, [])

    const moveRight = useCallback((delta) => {
        setPosition(([x, y]) => [x+delta, y])
    }, [])

    return {
        position,
        moveLeft,
        moveRight
    };
}