import React, { useEffect, ReactElement } from 'react'
import Game from './core/game'

import './styles/styles.css'
import './styles/phaser-styles.css'

function App(): ReactElement {
  useEffect(() => {
    const game: Phaser.Game = Game()

    return (): void => {
      game.destroy(true)
    }
  }, [])

  return <div id="phaser" />
}

export default App
