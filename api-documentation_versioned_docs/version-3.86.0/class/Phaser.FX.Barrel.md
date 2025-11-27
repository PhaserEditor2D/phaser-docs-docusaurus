---
visibility: public
slug: class/fx-barrel
title: Barrel
description: Phaser.FX.Barrel
seoTitle: Phaser.FX.Barrel
seoDescription: Phaser v3.86.0 Documentation for Phaser.FX.Barrel
ogImage: 
---


The Barrel FX Controller.



This FX controller manages the barrel distortion effect for a Game Object.



A barrel effect allows you to apply either a 'pinch' or 'expand' distortion to

a Game Object. The amount of the effect can be modified in real-time.



A Barrel effect is added to a Game Object via the FX component:



```js

const sprite = this.add.sprite();



sprite.preFX.addBarrel();

sprite.postFX.addBarrel();

```

**Constructor**

`new Barrel(gameObject, [amount])`

**Parameters**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| gameObject | [Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md) | No |  | A reference to the Game Object that has this fx. |
| amount | number | Yes | 1 | The amount of distortion applied to the barrel effect. A value of 1 is no distortion. Typically keep this within +- 1. |

---


**Scope**: static


**Extends**

> [Phaser.FX.Controller](../class/Phaser.FX.Controller.md)  



> Source: [src/fx/Barrel.js#L11](https://github.com/phaserjs/phaser/blob/v3.86.0/src/fx/Barrel.js#L11)  
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

The amount of distortion applied to the barrel effect.



Typically keep this within the range 1 (no distortion) to +- 1.


> Source: [src/fx/Barrel.js#L50](https://github.com/phaserjs/phaser/blob/v3.86.0/src/fx/Barrel.js#L50)  
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


**Returns:** [Phaser.FX.Barrel](../class/Phaser.FX.Barrel.md) - This FX Controller instance.


**Inherits:** [Phaser.FX.Controller#setActive](../class/Phaser.FX.Controller.md#setActive)


> Source: [src/fx/Controller.js#L62](https://github.com/phaserjs/phaser/blob/v3.86.0/src/fx/Controller.js#L62)  
Since: 3.60.0


---

