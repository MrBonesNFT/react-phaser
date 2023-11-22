
# React & Phaser

A simple CRA that combines [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/) and [Phaser](https://phaser.io/).


![Logo](https://www.imghost.net/ib/N9kAiJZSXS03trA_1700626424.png)


## Authors

- [@MrBonesNFT](https://github.com/MrBonesNFT)


## Intro

Combine Phaser's rendering power with React's UI capabilities. Fork the repository and start writing your game's core code.

![Screenshot](https://www.imghost.net/ib/fRbrkgawbizCfdn_1700625584.png)
## Installation

- [Install Yarn package manager.](https://yarnpkg.com/getting-started/install)
- [Install Node Version Manager.](https://github.com/nvm-sh/nvm)

```bash
  nvm use && yarn && yarn start
```
    
## Local Commands

Starting the dev server

```bash
  nvm use && yarn start
```

Testing the UI

```bash
  nvm use && yarn test
```

Building the project

```bash
  nvm use && yarn build
```


## Usage

Extend the game's functionality starting in this file. Check [Phaser's Tutorial](https://phaser.io/tutorials/making-your-first-phaser-3-game/part3) for more info how these two functions work.

*`src/core/init.ts`*

```javascript
...
create(): void {}
...
update(): void {}
...
```

Extend the game's pre-loader starting in this file. Check [Phaser's Tutorial](https://phaser.io/tutorials/making-your-first-phaser-3-game/part2) for more info on loading assets.

*`src/core/preload.ts`*

```javascript
...
preload(): void {}
...
```

## Tech Stack

**Environment:** TypeScript, ESLint, Prettier, Jest

**Client:** React, Phaser

**Server:** Node, Express


## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


## Acknowledgements

 - [Emanuele Feronato](https://www.emanueleferonato.com/)
 - [@ArvoBevvies](https://github.com/arvobevvies)


## License

[MIT](https://choosealicense.com/licenses/mit/)

