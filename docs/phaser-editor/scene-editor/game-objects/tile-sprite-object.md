---
slug: tile-sprite-object
title: TileSprite
---

The Tile Sprite is a built-in Phaser object type: [Phaser.GameObjects.TileSprite](https://docs.phaser.io/api-documentation/class/gameobjects-tilesprite). This type allows creating objects with repeating textures, like background elements.

A Tile Sprite is created in code using the [tileSprite factory](https://docs.phaser.io/api-documentation/class/gameobjects-gameobjectfactory#tilesprite). This is how the [scene compiler](../scene-compiler) generates the code of a Tile Sprite:

```javascript
// x = 0, y = 600, width = 600, height = 800, texture = "rocks_1"
const rocks = this.add.tileSprite(0, 600, 800, 225, "rocks_1");
```

To create a Tile Sprite object in the scene, you can drop a TileSprite built-in block on the scene.

![Create default TileSprite object.](https://cdn.phaser.io/editor-docs/scene-editor-tile-sprite-block-09252020.webp)

Or [convert an Image or Sprite into a Tile Sprite](replace-object-type).


## Tile Sprite properties

The Tile Sprite type shares properties with other object types:

* [Variable properties](./common-object-properties#variable-properties)
* [Lists properties](./common-object-properties#lists-properties)
* [Transform properties](./common-object-properties#transform-properties)
* [Origin properties](./common-object-properties#origin-properties)
* [Size properties](./common-object-properties#size-properties)
* [Flip properties](./common-object-properties#flip-properties)
* [Visible property](./common-object-properties#visible-property)
* [Alpha properties](./common-object-properties#alpha-properties)
* [Texture property](./common-object-properties#texture-property)

But also it has particular properties:

![Tile sprite object.](https://cdn.phaser.io/editor-docs/scene-editor-tile-sprite-props-04152020.webp)
* The [width](https://docs.phaser.io/api-documentation/class/gameobjects-tilesprite#width) and [height](https://docs.phaser.io/api-documentation/class/gameobjects-tilesprite#height) size properties. If the size of the object is bigger than the original texture, then the object is rendered repeating the texture. You can change these properties in the Inspector view or using the [Resize manipulator tool](../manipulation-tools#resize-tool): press the `Z` key or select **Tools** → **Resize Tool** in the context menu.
* The [tilePositionX](https://docs.phaser.io/api-documentation/class/gameobjects-tilesprite#tilepositionx) and [tilePositionY](https://docs.phaser.io/api-documentation/class/gameobjects-tilesprite#tilepositiony) properties. It changes the offset of the original texture rendering. You can modify it in the Inspector view.
* The [tileScaleX](https://docs.phaser.io/api-documentation/class/gameobjects-tilesprite#tilescalex) and [tileScaleY](https://docs.phaser.io/api-documentation/class/gameobjects-tilesprite#tilescaley) properties. It changes the scale of the original texture rendering (not the scale of the object). You can modify it in the Inspector view.
