---
visibility: public
slug: installation
title: Installing
description: How to install Phaser
seoTitle: Installing
seoDescription: How to install Phaser
---

## Create Phaser Game App

The easiest way to get started quickly with Phaser is our `create-phaser-game` app. This CLI tool presents an interactive selection of official project templates and demo games. Issue the command, answer some questions and the app will download and configure the right package for you.

```bash
npm create @phaserjs/game@latest
npx @phaserjs/create-game@latest
yarn create @phaserjs/game
pnpm create @phaserjs/game@latest
bun create @phaserjs/game@latest
```

We have a [create game app tutorial](https://phaser.io/tutorials/create-game-app) you can read to learn more about this tool and what it offers.

## Installing Phaser from NPM

Install via [npm](https://www.npmjs.com/package/phaser):

```bash
npm install phaser
```

## Cloning Phaser from GitHub

Phaser is available on GitHub at [https://github.com/phaserjs/phaser](https://github.com/phaserjs/phaser)

You can clone it via git with either:

```bash
https://github.com/phaserjs/phaser.git
# or
git@github.com:phaserjs/phaser.git
```

Or, you can use GitHub Desktop. See the [Phaser GitHub page](https://github.com/phaserjs/phaser) for details.

## Using Phaser from a CDN

[Phaser is on jsDelivr](https://www.jsdelivr.com/package/npm/phaser) which is a "super-fast CDN for developers". Include _either_ of the following in your html:

```html
<script src="//cdn.jsdelivr.net/npm/phaser@3.86.0/dist/phaser.js"></script>
<script src="//cdn.jsdelivr.net/npm/phaser@3.86.0/dist/phaser.min.js"></script>
```

It is also available from Cloudflare's [cdnjs](https://cdnjs.com/libraries/phaser):

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/phaser/3.86.0/phaser.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/phaser/3.86.0/phaser.min.js"></script>
```

## Phaser TypeScript Definitions

Full TypeScript definitions can be found inside the [types folder](https://github.com/phaserjs/phaser/tree/master/types). They are also referenced in the `types` entry in `package.json`, meaning modern editors such as VSCode will detect them automatically.

Depending on your project, you may need to add the following to your `tsconfig.json` file:

```json
"lib": ["es6", "dom", "dom.iterable", "scripthost"],
"typeRoots": ["./node_modules/phaser/types"],
"types": ["Phaser"]
```
