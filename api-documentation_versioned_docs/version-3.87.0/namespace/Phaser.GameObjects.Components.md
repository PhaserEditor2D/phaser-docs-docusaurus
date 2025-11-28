---
visibility: public
slug: gameobjects-components
title: Phaser.GameObjects.Components

seoTitle: Phaser.GameObjects.Components
seoDescription: Phaser v3.87.0 Documentation for 
ogImage: 
---




Scope: 
static
> Source: [src/gameobjects/components/index.js#L7](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/components/index.js#L7)  


# Static functions

- [FX](../class/gameobjects-components-fx)
- [TransformMatrix](../class/gameobjects-components-transformmatrix)
# Static functions

- [Alpha](../namespace/gameobjects-components-alpha)
- [AlphaSingle](../namespace/gameobjects-components-alphasingle)
- [BlendMode](../namespace/gameobjects-components-blendmode)
- [ComputedSize](../namespace/gameobjects-components-computedsize)
- [Crop](../namespace/gameobjects-components-crop)
- [Depth](../namespace/gameobjects-components-depth)
- [Flip](../namespace/gameobjects-components-flip)
- [GetBounds](../namespace/gameobjects-components-getbounds)
- [Mask](../namespace/gameobjects-components-mask)
- [Origin](../namespace/gameobjects-components-origin)
- [PathFollower](../namespace/gameobjects-components-pathfollower)
- [Pipeline](../namespace/gameobjects-components-pipeline)
- [PostPipeline](../namespace/gameobjects-components-postpipeline)
- [ScrollFactor](../namespace/gameobjects-components-scrollfactor)
- [Size](../namespace/gameobjects-components-size)
- [Texture](../namespace/gameobjects-components-texture)
- [TextureCrop](../namespace/gameobjects-components-texturecrop)
- [Tint](../namespace/gameobjects-components-tint)
- [Transform](../namespace/gameobjects-components-transform)
- [Visible](../namespace/gameobjects-components-visible)
# Static functions

## ToJSON

### \<static> ToJSON(gameObject)


**Description:**

Build a JSON representation of the given Game Object.



This is typically extended further by Game Object specific implementations.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| gameObject | [Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md) | No | The Game Object to export as JSON. |


**Returns:** [Phaser.Types.GameObjects.JSONGameObject](../typedef/Phaser.Types.GameObjects.md#JSONGameObject) - A JSON representation of the Game Object.


> Source: [src/gameobjects/components/ToJSON.js#L7](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/components/ToJSON.js#L7)  
Since: 3.0.0


---

