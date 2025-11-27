---
slug: sprite-object
title: Sprite
---

The Sprite is a built-in Phaser object type: [Phaser.GameObjects.Sprite](https://docs.phaser.io/api-documentation/class/gameobjects-sprite). It is like the [Image](./image-object) type, but also it can play [sprite animations](https://docs.phaser.io/api-documentation/class/gameobjects-sprite#play). This means, that you may use a Sprite object only if it will be animated in the game, otherwise, the better is to use an [Image](./image-object).

A Sprite is created in code using the [sprite factory](https://docs.phaser.io/api-documentation/class/gameobjects-gameobjectfactory#sprite). This is how the [scene compiler](../scene-compiler) generates the code of a [Sprite](./sprite-object):

```javascript
const player = this.add.sprite(192, 512, "dragon-atlas", "idle-000");
```

To create a Sprite object, you can:

* Drop a Sprite built-in block on the scene:
  ![Create an empty Sprite.](https://cdn.phaser.io/editor-docs/scene-editor-sprite-create-20231023.webp)
* Drop an [animation block](../sprite-animations) on the scene:
  ![Create a Sprite object from an animation block.](https://cdn.phaser.io/editor-docs/scene-editor-sprite-create-from-animation-block-20231023.webp)
* Or you can convert an [Image](./image-object) or [TileSprite](tile-sprite-object) into a Sprite.

[Learn more about type conversion](replace-object-type)

If you create a sprite, probably you want to play an animation with it. To do this you can set the [Animation properties](./common-object-properties#animation-properties).

The Sprite type has properties common to other object types:

* [Variable properties](./common-object-properties#variable-properties)
* [Lists properties](./common-object-properties#lists-properties)
* [Transform properties](./common-object-properties#transform-properties)
* [Origin properties](./common-object-properties#origin-properties)
* [Flip properties](./common-object-properties#flip-properties)
* [Visible property](./common-object-properties#visible-property)
* [Alpha properties](./common-object-properties#alpha-properties)
* [Animation properties](./common-object-properties#animation-properties)
* [Texture property](./common-object-properties#texture-property)
