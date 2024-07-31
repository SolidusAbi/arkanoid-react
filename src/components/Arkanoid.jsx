import { useState } from "react";
import Paddle from "./Paddle";
import Ball from "./Ball"
import KeyboardController from "./KeyboardController";

import useMovable from "../hooks/useMovable";
import useAnimation from "../hooks/useAnimation";

export default function Arkanoid({width, height}) {
    const ballRadius = 20;
    const paddleLength = 100;
    const initialPaddlePosition = [Math.floor(width/2) - paddleLength/2, 45]
    const initialBallPosition = [Math.floor(width/2) - ballRadius/2, Math.floor(height/2) - ballRadius/2]
    const delta = 10 // 'Speed'

    // Custom Hooks
    const { position: pPosition, moveLeft: pMoveLeft, moveRight: pMoveRight } = useMovable(initialPaddlePosition);
    const { position: bPosition,  moveLeft: bMoveLeft, moveRight: bMoveRight} = useMovable(initialBallPosition)

    useAnimation(() => bMoveLeft(delta), 300)

    const handlePaddleMoveLeft = () => {
      if (pPosition[0] - delta >= 0)
        pMoveLeft(delta)
    }

    const handlePaddleMoveRight = () => {
      if (pPosition[0] + delta <= width - paddleLength)
        pMoveRight(delta)
    }

    return (
        <div className="game-container">
          <Paddle width={width} position={pPosition}></Paddle>
          <Ball position={bPosition}></Ball>
          <KeyboardController 
            onMoveLeft={handlePaddleMoveLeft}
            onMoveRight={handlePaddleMoveRight}
          />
        </div>
      );
};