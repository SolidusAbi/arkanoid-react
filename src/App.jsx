import react from 'react'
import { useState } from 'react'
import './App.css'
import Paddle from './components/Paddle'

function App() {
  return (
    <div className="game-container">
      <Paddle width="600"></Paddle>
      <div className="ball"></div>
    </div>
  );
}

export default App
