import { useState } from 'react'
import './App.css'
import {GameState, initialState} from './tictactoe'

export default function App() {
  const [gameState, setGameState] = useState<GameState>(initialState)
  
  function makeMove(prev, index) {
    console.log(prev)
    console.log(index)
  }

  return <>
    <h1>TIC-TAC-TOE</h1>
    <div className='grid'>
      {gameState.board.map((cell, index) => <button key={index} onClick={() => makeMove(gameState, index)}>{cell}</button>)}
    </div>
  </>
}