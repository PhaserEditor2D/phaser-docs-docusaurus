---
visibility: public
slug: namespace/types-gameobjects-group
title: Phaser.Types.GameObjects.Group

seoTitle: Phaser.Types.GameObjects.Group
seoDescription: Phaser v3.86.0 Documentation for 
ogImage: 
---




Scope: 
static
> Source: [src/gameobjects/group/typedefs/index.js#L7](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/group/typedefs/index.js#L7)  


# Static functions

## GroupCallback

### GroupCallback

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| item | [Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md) | No | A group member |


> Source: [src/gameobjects/group/typedefs/GroupCallback.js#L1](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/group/typedefs/GroupCallback.js#L1)  
Since: 3.0.0


---

## GroupClassTypeConstructor

### GroupClassTypeConstructor

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| scene | [Phaser.Scene](../class/Phaser.Scene.md) | No | The Scene to which this Game Object belongs. |
| x | number | No | The horizontal position of this Game Object in the world. |
| y | number | No | The vertical position of this Game Object in the world. |
| texture | string \| [Phaser.Textures.Texture](../class/Phaser.Textures.Texture.md) | No | The key, or instance of the Texture this Game Object will use to render with, as stored in the Texture Manager. |
| frame | string \| number | Yes | An optional frame from the Texture this Game Object is rendering with. |


> Source: [src/gameobjects/group/typedefs/GroupClassTypeConstructor.js#L1](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/group/typedefs/GroupClassTypeConstructor.js#L1)  
Since: 3.0.0


---

## GroupConfig

### GroupConfig


> Source: [src/gameobjects/group/typedefs/GroupConfig.js#L1](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/group/typedefs/GroupConfig.js#L1)  
Since: 3.0.0


---

## GroupCreateConfig

### GroupCreateConfig


**Description:**

The total number of objects created will be



    key.length * frame.length * frameQuantity * (yoyo ? 2 : 1) * (1 + repeat)



If `max` is nonzero, then the total created will not exceed `max`.



`key` is required. [Phaser.GameObjects.Group#defaultKey](../class/Phaser.GameObjects.Group.md#defaultKey) is not used.


> Source: [src/gameobjects/group/typedefs/GroupCreateConfig.js#L1](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/group/typedefs/GroupCreateConfig.js#L1)  
Since: 3.0.0


---

## GroupMultipleCreateCallback

### GroupMultipleCreateCallback

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| items | Array.\<[Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md)> | No | The newly created group members |


> Source: [src/gameobjects/group/typedefs/GroupMultipleCreateCallback.js#L1](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/group/typedefs/GroupMultipleCreateCallback.js#L1)  
Since: 3.0.0


---

