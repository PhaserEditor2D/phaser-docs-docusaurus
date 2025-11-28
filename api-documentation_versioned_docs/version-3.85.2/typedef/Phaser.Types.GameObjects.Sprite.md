---
visibility: public
slug: types-gameobjects-sprite
title: Types.GameObjects.Sprite
description: Phaser.Types.GameObjects.Sprite
seoTitle: Types.GameObjects.Sprite
seoDescription: Phaser v3.85.2 Documentation for Phaser.Types.GameObjects.Sprite
ogImage: 
---

## SpriteConfig

### \<static> SpriteConfig

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| key | string \| [Phaser.Textures.Texture](../class/Phaser.Textures.Texture.md) | Yes | The key, or instance of the Texture this Game Object will use to render with, as stored in the Texture Manager. |
| frame | string \| number | Yes | An optional frame from the Texture this Game Object is rendering with. |
| anims | string \| [Phaser.Animations.Animation](../class/Phaser.Animations.Animation.md) | [Phaser.Types.Animations.PlayAnimationConfig](../typedef/Phaser.Types.Animations.md#PlayAnimationConfig) | Yes | The string-based key of the animation to play, or an Animation instance, or a `PlayAnimationConfig` object. |
| useSpriteSheet | boolean | Yes | This property is used exclusively by `Tilemap.createFromTiles`. Set to `true` if this Sprite is being created by a Tilemap and is part of a spritesheet. |

**Type**: object

**Member of**: Phaser.Types.GameObjects.Sprite
> Source: [src/gameobjects/sprite/typedefs/SpriteConfig.js#L1](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/sprite/typedefs/SpriteConfig.js#L1)  
Since: 3.0.0

---
