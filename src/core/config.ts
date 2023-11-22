import PreloadAssets from './preload'
import InitGame from './init'

export const scaleObject: Phaser.Types.Core.ScaleConfig = {
  mode: Phaser.Scale.FIT,
  autoCenter: Phaser.Scale.CENTER_BOTH,
  parent: 'phaser', // matches App.jsx
  width: '100%',
  height: '100%',
}

export const gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  backgroundColor: 0x000000,
  seed: [(Date.now() * Math.random()).toString()],
  scale: scaleObject,
  scene: [PreloadAssets, InitGame],
  physics: {
    default: 'arcade',
  },
  pixelArt: true,
}
