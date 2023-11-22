// config for loading-screen graphics
const titleText: string = 'working'
const titleFont: string = '20px monospace'
const progressFont: string = '18px monospace'
const assetFont: string = '9px monospace'
const colorWhite: string = '#fff'
const colorCyan: number = 3905712
const greyColor: number = 0x222222
const progressBarOpacity: number = 0.8
const progressOpacity: number = 0.75
const progressBarHeight: number = 10
const progressSpacing: number = 4
const elementSpacing: number = 50
const half: number = 2
const third: number = 3

// test asset location and count (must be in public/)
const testAsset: string = 'assets/bone.png'
const spriteCount: number = 50

export default class PreloadAssets extends Phaser.Scene {
  constructor() {
    super({
      key: 'PreloadAssets',
    })
  }

  preload(): void {
    const { width }: { width: number } = this.cameras.main
    const { height }: { height: number } = this.cameras.main
    const middleX: number = width / half
    const middleY: number = height / half
    const progressBarWidth: number = width / third

    const progressContainer: Phaser.GameObjects.Graphics = this.add.graphics()
    const progressBar: Phaser.GameObjects.Graphics = this.add.graphics()

    progressContainer.fillStyle(greyColor, progressBarOpacity)
    progressContainer
      .fillRect(
        middleX - progressBarWidth / half,
        middleY + elementSpacing,
        progressBarWidth,
        progressBarHeight
      )
      .setDepth(0)

    const titleObject: Phaser.GameObjects.Text = this.make.text({
      x: middleX,
      y: middleY - elementSpacing,
      text: titleText,
      style: {
        font: titleFont,
        color: colorWhite,
      },
    })
    titleObject.setOrigin()

    const progressObject: Phaser.GameObjects.Text = this.make.text({
      x: middleX,
      y: middleY,
      style: {
        font: progressFont,
        color: colorWhite,
      },
    })
    progressObject.setOrigin()

    const assetObject: Phaser.GameObjects.Text = this.make.text({
      x: middleX,
      y: middleY + elementSpacing / half,
      style: {
        font: assetFont,
        color: colorWhite,
      },
    })
    assetObject.setOrigin()

    this.load.on('progress', (val: number): void => {
      progressObject.setText(`${Math.floor(val * 100)}%`)
      progressBar.clear()
      progressBar.fillStyle(colorCyan, progressOpacity)
      progressBar
        .fillRect(
          middleX - progressBarWidth / half,
          middleY + elementSpacing + progressSpacing / half,
          progressBarWidth * val,
          progressBarHeight - progressSpacing
        )
        .setDepth(1)
    })

    this.load.on('fileprogress', (file: Phaser.Loader.File): void => {
      assetObject.setText(`${file.type} - ${file.key}`)
    })

    this.load.on('complete', (): void => {
      progressBar.destroy()
      progressContainer.destroy()
      titleObject.destroy()
      progressObject.destroy()
      assetObject.destroy()
    })

    for (let i = 0; i < spriteCount; i += 1) {
      // @param - texture's key
      // @param - file location
      this.load.image(`tex-${i}`, testAsset)
    }

    this.load.on('complete', () => {
      this.scene.start('InitGame')
    })
  }
}
