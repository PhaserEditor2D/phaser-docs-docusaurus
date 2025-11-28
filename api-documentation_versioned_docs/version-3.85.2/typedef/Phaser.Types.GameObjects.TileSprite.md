---
visibility: public
slug: types-gameobjects-tilesprite
title: Types.GameObjects.TileSprite
description: Phaser.Types.GameObjects.TileSprite
seoTitle: Types.GameObjects.TileSprite
seoDescription: Phaser v3.85.2 Documentation for Phaser.Types.GameObjects.TileSprite
ogImage: 
---

## TileSpriteConfig

### \<static> TileSpriteConfig

| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| x | number | Yes | 0 | The x coordinate of the Tile Sprite. |
| y | number | Yes | 0 | The y coordinate of the Tile Sprite. |
| width | number | Yes | 512 | The width of the Tile Sprite. If zero it will use the size of the texture frame. |
| height | number | Yes | 512 | The height of the Tile Sprite. If zero it will use the size of the texture frame. |
| key | string | Yes | "''" | The key of the Texture this Tile Sprite will use to render with, as stored in the Texture Manager. |
| frame | number \| string | [Phaser.Textures.Frame](../class/Phaser.Textures.Frame.md) | Yes | "''" | An optional frame from the Texture this Tile Sprite is rendering with. |

**Type**: object

**Member of**: Phaser.Types.GameObjects.TileSprite
> Source: [src/gameobjects/tilesprite/typedefs/TileSpriteConfig.js#L1](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/tilesprite/typedefs/TileSpriteConfig.js#L1)  
Since: 3.0.0

---
