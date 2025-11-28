---
visibility: public
slug: fx-displacement
title: Displacement
description: Phaser.FX.Displacement
seoTitle: Phaser.FX.Displacement
seoDescription: Phaser v3.87.0 Documentation for Phaser.FX.Displacement
ogImage: 
---


The Displacement FX Controller.



This FX controller manages the displacement effect for a Game Object.



The displacement effect is a visual technique that alters the position of pixels in an image

or texture based on the values of a displacement map. This effect is used to create the illusion

of depth, surface irregularities, or distortion in otherwise flat elements. It can be applied to

characters, objects, or backgrounds to enhance realism, convey movement, or achieve various

stylistic appearances.



A Displacement effect is added to a Game Object via the FX component:



```js

const sprite = this.add.sprite();



sprite.preFX.addDisplacement();

sprite.postFX.addDisplacement();

```

**Constructor**

`new Displacement(gameObject, [texture], [x], [y])`

**Parameters**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| gameObject | [Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md) | No |  | A reference to the Game Object that has this fx. |
| texture | string | Yes | "'__WHITE'" | The unique string-based key of the texture to use for displacement, which must exist in the Texture Manager. |
| x | number | Yes | 0.005 | The amount of horizontal displacement to apply. A very small float number, such as 0.005. |
| y | number | Yes | 0.005 | The amount of vertical displacement to apply. A very small float number, such as 0.005. |

---


**Scope**: static


**Extends**

> [Phaser.FX.Controller](../class/Phaser.FX.Controller.md)  



> Source: [src/fx/Displacement.js#L11](https://github.com/phaserjs/phaser/blob/v3.87.0/src/fx/Displacement.js#L11)  
Since: 3.60.0

# Public Members

## active

### active: boolean


**Description:**

Toggle this boolean to enable or disable this effect,

without removing and adding it from the Game Object.



Only works for Pre FX.



Post FX are always active.


**Inherits:** [Phaser.FX.Controller#active](../class/Phaser.FX.Controller.md#active)


> Source: [src/fx/Controller.js#L47](https://github.com/phaserjs/phaser/blob/v3.87.0/src/fx/Controller.js#L47)  
Since: 3.60.0


---

## gameObject

### gameObject: [Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md)


**Description:**

A reference to the Game Object that owns this effect.


**Inherits:** [Phaser.FX.Controller#gameObject](../class/Phaser.FX.Controller.md#gameObject)


> Source: [src/fx/Controller.js#L38](https://github.com/phaserjs/phaser/blob/v3.87.0/src/fx/Controller.js#L38)  
Since: 3.60.0


---

## glTexture

### glTexture: [Phaser.Renderer.WebGL.Wrappers.WebGLTextureWrapper](../class/Phaser.Renderer.WebGL.Wrappers.WebGLTextureWrapper.md)


**Description:**

The underlying texture used for displacement.


> Source: [src/fx/Displacement.js#L75](https://github.com/phaserjs/phaser/blob/v3.87.0/src/fx/Displacement.js#L75)  
Since: 3.60.0


---

## type

### type: number


**Description:**

The FX_CONST type of this effect.


**Inherits:** [Phaser.FX.Controller#type](../class/Phaser.FX.Controller.md#type)


> Source: [src/fx/Controller.js#L29](https://github.com/phaserjs/phaser/blob/v3.87.0/src/fx/Controller.js#L29)  
Since: 3.60.0


---

## x

### x: number


**Description:**

The amount of horizontal displacement to apply.


> Source: [src/fx/Displacement.js#L57](https://github.com/phaserjs/phaser/blob/v3.87.0/src/fx/Displacement.js#L57)  
Since: 3.60.0


---

## y

### y: number


**Description:**

The amount of vertical displacement to apply.


> Source: [src/fx/Displacement.js#L66](https://github.com/phaserjs/phaser/blob/v3.87.0/src/fx/Displacement.js#L66)  
Since: 3.60.0


---

# Public Methods

## destroy

### \<instance> destroy()


**Description:**

Destroys this FX Controller.


**Inherits:** [Phaser.FX.Controller#destroy](../class/Phaser.FX.Controller.md#destroy)


> Source: [src/fx/Controller.js#L81](https://github.com/phaserjs/phaser/blob/v3.87.0/src/fx/Controller.js#L81)  
Since: 3.60.0


---

## setActive

### \<instance> setActive(value)


**Description:**

Sets the active state of this FX Controller.



A disabled FX Controller will not be updated.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| value | boolean | No | `true` to enable this FX Controller, or `false` to disable it. |


**Returns:** [Phaser.FX.Displacement](../class/Phaser.FX.Displacement.md) - This FX Controller instance.


**Inherits:** [Phaser.FX.Controller#setActive](../class/Phaser.FX.Controller.md#setActive)


> Source: [src/fx/Controller.js#L62](https://github.com/phaserjs/phaser/blob/v3.87.0/src/fx/Controller.js#L62)  
Since: 3.60.0


---

## setTexture

### \<instance> setTexture([texture])


**Description:**

Sets the Texture to be used for the displacement effect.



You can only use a whole texture, not a frame from a texture atlas or sprite sheet.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| texture | string | Yes | "'__WHITE'" | The unique string-based key of the texture to use for displacement, which must exist in the Texture Manager. |


**Returns:** [Phaser.FX.Displacement](../class/Phaser.FX.Displacement.md) - This FX Controller.


> Source: [src/fx/Displacement.js#L87](https://github.com/phaserjs/phaser/blob/v3.87.0/src/fx/Displacement.js#L87)  
Since: 3.60.0


---

