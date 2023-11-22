const DEFAULT_KEYS: string[] = ['__DEFAULT, __MISSING, __WHITE']

export default class InitGame extends Phaser.Scene {
  private OBJ_GROUP?: Phaser.Physics.Arcade.Group

  private FPS_COUNTER?: Phaser.GameObjects.Text

  constructor() {
    super({ key: 'InitGame' })
  }

  create(): void {
    // Welcome text & FPS counter
    this.add.text(10, 10, 'Welcome to React + Phaser').setShadow(2).setDepth(1)
    this.FPS_COUNTER = this.add
      .text(this.cameras.main.width - 45, 10, 'FPS: ', {
        align: 'right',
        fontFamily: 'monospace 10px',
      })
      .setShadow(2)
      .setDepth(1)
    // Welcome text & FPS counter

    this.OBJ_GROUP = this.physics.add.group({
      defaultKey: 'tex-0',
    })

    const spriteCount: number = this.game.textures
      .getTextureKeys()
      .map((t) => !DEFAULT_KEYS.includes(t)).length
    for (let i = 0; i < spriteCount; i += 1) {
      const xSpawn: number = Phaser.Math.Between(0, 1) * this.cameras.main.width
      const ySpawn: number =
        Phaser.Math.Between(0, 1) * this.cameras.main.height
      this.spawnObject(xSpawn, ySpawn, `tex-${i}`)
    }
  }

  private spawnObject(
    _x: number,
    _y: number,
    texture: string
  ): Phaser.Physics.Arcade.Sprite | null {
    if (!this.OBJ_GROUP) return null

    const randomScale: number = Math.min(_x, _y) / Math.max(_x, _y) / 15

    const randomDirection: number = Phaser.Math.Between(0, 1) ? 0 : 180

    const vel: Phaser.Math.Vector2 = this.physics.velocityFromAngle(
      Phaser.Math.Between(randomDirection - _x, randomDirection + _y)
    )

    const Bone: Phaser.Physics.Arcade.Sprite = this.OBJ_GROUP.get(
      _x,
      _y,
      texture
    )

    Bone.setVelocity(vel.x, vel.y)
    Bone.setCollideWorldBounds(true)
    Bone.setBounce(1)
    Bone.setScale(0.06 + randomScale, 0.06 + randomScale)

    return Bone
  }

  update(): void {
    this.FPS_COUNTER?.setText(
      `FPS: ${Phaser.Math.RoundTo(this.game.loop.actualFps)}`
    )
  }
}
