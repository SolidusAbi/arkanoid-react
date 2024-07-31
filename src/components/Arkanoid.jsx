import { useRef, useState } from "react";
import Paddle from "./Paddle";
import Ball from "./Ball"
import KeyboardController from "./KeyboardController";

import useMovable, { Direction } from "../hooks/useMovable";
import useAnimation from "../hooks/useAnimation";

export default function Arkanoid({width, height}) {
    const ballRadius = 20;
    const paddleLength = 100;
    const initialPaddlePosition = [Math.floor(width/2) - paddleLength/2, 45]
    const initialBallPosition = [Math.floor(width/2) - ballRadius/2, Math.floor(height/2) - ballRadius/2]
    const delta = 10 // 'Speed'

    // Custom Hooks
    const { position: pPosition, moveLeft: pMoveLeft, moveRight: pMoveRight, move:pMove } = useMovable(initialPaddlePosition);
    const { position: bPosition,  moveLeft: bMoveLeft, moveRight: bMoveRight, move:bMove} = useMovable(initialBallPosition)

    const directionBall = useRef(Direction.Left)
    const handleBallAnimation = () => {
      const [dx, dy] = directionBall.current
      console.log(bPosition[0])
      if (bPosition[0] <= 0 + ballRadius)
        directionBall.current = Direction.Right;
      
      if (bPosition[0] >= width - ballRadius)
        directionBall.current = Direction.Left;
    }

    useAnimation(() => { 
      bMove(delta, ...directionBall.current);
      handleBallAnimation();
    }, 50)

    const handlePaddleMoveLeft = () => {
      if (pPosition[0] - delta >= 0)
        pMove(delta, ...Direction.Left)
    }

    const handlePaddleMoveRight = () => {
      if (pPosition[0] + delta <= width - paddleLength)
        pMove(delta, ...Direction.Right)
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