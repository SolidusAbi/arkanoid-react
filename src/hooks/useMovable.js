import { useState, useRef, useCallback } from "react";

export const Direction = { // Enum for controlling direction
    Left:        [-1,  0],
    Right:       [ 1,  0],
    UpLeft:      [-1,  1],
    UpRight:     [ 1,  1],
    BottomLeft:  [-1, -1],
    BottomRight: [ 1, -1],
  }

export default function useMovable( initialPosition ){
    const [position, setPosition] = useState(initialPosition);

    const moveLeft = useCallback((delta) => {
        setPosition(([x, y]) => [x-delta, y])
    }, [])

    const moveRight = useCallback((delta) => {
        setPosition(([x, y]) => [x+delta, y])
    }, [])

    const move = useCallback((delta, dx, dy) => {
        setPosition(([x, y]) => [x+(delta*dx), y+(delta*dy)])
    },[]);

    return {
        position,
        moveLeft,
        moveRight,
        move
    };
}