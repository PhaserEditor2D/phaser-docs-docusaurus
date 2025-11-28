---
visibility: public
slug: fx-pixelate
title: Pixelate
description: Phaser.FX.Pixelate
seoTitle: Phaser.FX.Pixelate
seoDescription: Phaser v3.86.0 Documentation for Phaser.FX.Pixelate
ogImage: 
---


The Pixelate FX Controller.



This FX controller manages the pixelate effect for a Game Object.



The pixelate effect is a visual technique that deliberately reduces the resolution or detail of an image,

creating a blocky or mosaic appearance composed of large, visible pixels. This effect can be used for stylistic

purposes, as a homage to retro gaming, or as a means to obscure certain elements within the game, such as

during a transition or to censor specific content.



A Pixelate effect is added to a Game Object via the FX component:



```js

const sprite = this.add.sprite();



sprite.preFX.addPixelate();

sprite.postFX.addPixelate();

```

**Constructor**

`new Pixelate(gameObject, [amount])`

**Parameters**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| gameObject | [Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md) | No |  | A reference to the Game Object that has this fx. |
| amount | number | Yes | 1 | The amount of pixelation to apply. |

---


**Scope**: static


**Extends**

> [Phaser.FX.Controller](../class/Phaser.FX.Controller.md)  



> Source: [src/fx/Pixelate.js#L11](https://github.com/phaserjs/phaser/blob/v3.86.0/src/fx/Pixelate.js#L11)  
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


> Source: [src/fx/Controller.js#L47](https://github.com/phaserjs/phaser/blob/v3.86.0/src/fx/Controller.js#L47)  
Since: 3.60.0


---

## amount

### amount: number


**Description:**

The amount of pixelation to apply.


> Source: [src/fx/Pixelate.js#L52](https://github.com/phaserjs/phaser/blob/v3.86.0/src/fx/Pixelate.js#L52)  
Since: 3.60.0


---

## gameObject

### gameObject: [Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md)


**Description:**

A reference to the Game Object that owns this effect.


**Inherits:** [Phaser.FX.Controller#gameObject](../class/Phaser.FX.Controller.md#gameObject)


> Source: [src/fx/Controller.js#L38](https://github.com/phaserjs/phaser/blob/v3.86.0/src/fx/Controller.js#L38)  
Since: 3.60.0


---

## type

### type: number


**Description:**

The FX_CONST type of this effect.


**Inherits:** [Phaser.FX.Controller#type](../class/Phaser.FX.Controller.md#type)


> Source: [src/fx/Controller.js#L29](https://github.com/phaserjs/phaser/blob/v3.86.0/src/fx/Controller.js#L29)  
Since: 3.60.0


---

# Public Methods

## destroy

### \<instance> destroy()


**Description:**

Destroys this FX Controller.


**Inherits:** [Phaser.FX.Controller#destroy](../class/Phaser.FX.Controller.md#destroy)


> Source: [src/fx/Controller.js#L81](https://github.com/phaserjs/phaser/blob/v3.86.0/src/fx/Controller.js#L81)  
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


**Returns:** [Phaser.FX.Pixelate](../class/Phaser.FX.Pixelate.md) - This FX Controller instance.


**Inherits:** [Phaser.FX.Controller#setActive](../class/Phaser.FX.Controller.md#setActive)


> Source: [src/fx/Controller.js#L62](https://github.com/phaserjs/phaser/blob/v3.86.0/src/fx/Controller.js#L62)  
Since: 3.60.0


---

