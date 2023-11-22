import Phaser from 'phaser'

import { gameConfig as config } from './config'

export default function Game(): Phaser.Game {
  return new Phaser.Game(config)
}
