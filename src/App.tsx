import React, { useEffect, ReactElement } from 'react'
import Game from './core/game'

import './styles/styles.css'
import './styles/phaser-styles.css'

function App(): ReactElement {
  useEffect(() => {
    const game = Game()

    return () => {
      game.destroy(true)
    }
  }, [])

  return <div id="phaser" />
}

export default App
