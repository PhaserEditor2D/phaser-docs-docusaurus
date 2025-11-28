---
visibility: public
slug: gameobjects-components-computedsize
title: Phaser.GameObjects.Components.ComputedSize

seoTitle: Phaser.GameObjects.Components.ComputedSize
seoDescription: Phaser v3.86.0 Documentation for 
ogImage: 
---




Scope: 
static
> Source: [src/gameobjects/components/ComputedSize.js#L7](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/components/ComputedSize.js#L7)  
Since: 3.0.0

# Static functions

## displayHeight

### displayHeight: number


**Description:**

The displayed height of this Game Object.



This value takes into account the scale factor.



Setting this value will adjust the Game Object's scale property.


> Source: [src/gameobjects/components/ComputedSize.js#L68](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/components/ComputedSize.js#L68)  
Since: 3.0.0


---

## displayWidth

### displayWidth: number


**Description:**

The displayed width of this Game Object.



This value takes into account the scale factor.



Setting this value will adjust the Game Object's scale property.


> Source: [src/gameobjects/components/ComputedSize.js#L43](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/components/ComputedSize.js#L43)  
Since: 3.0.0


---

## height

### height: number


**Description:**

The native (un-scaled) height of this Game Object.



Changing this value will not change the size that the Game Object is rendered in-game.

For that you need to either set the scale of the Game Object (`setScale`) or use

the `displayHeight` property.


> Source: [src/gameobjects/components/ComputedSize.js#L30](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/components/ComputedSize.js#L30)  
Since: 3.0.0


---

## width

### width: number


**Description:**

The native (un-scaled) width of this Game Object.



Changing this value will not change the size that the Game Object is rendered in-game.

For that you need to either set the scale of the Game Object (`setScale`) or use

the `displayWidth` property.


> Source: [src/gameobjects/components/ComputedSize.js#L17](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/components/ComputedSize.js#L17)  
Since: 3.0.0


---

# Static functions

## setDisplaySize

### \<instance> setDisplaySize(width, height)


**Description:**

Sets the display size of this Game Object.



Calling this will adjust the scale.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| width | number | No | The width of this Game Object. |
| height | number | No | The height of this Game Object. |


**Returns:** [Phaser.GameObjects.Components.ComputedSize](../namespace/Phaser.GameObjects.Components.ComputedSize.md) - This Game Object instance.


> Source: [src/gameobjects/components/ComputedSize.js#L120](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/components/ComputedSize.js#L120)  
Since: 3.4.0


---

## setSize

### \<instance> setSize(width, height)


**Description:**

Sets the internal size of this Game Object, as used for frame or physics body creation.



This will not change the size that the Game Object is rendered in-game.

For that you need to either set the scale of the Game Object (`setScale`) or call the

`setDisplaySize` method, which is the same thing as changing the scale but allows you

to do so by giving pixel values.



If you have enabled this Game Object for input, changing the size will _not_ change the

size of the hit area. To do this you should adjust the `input.hitArea` object directly.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| width | number | No | The width of this Game Object. |
| height | number | No | The height of this Game Object. |


**Returns:** [Phaser.GameObjects.Components.ComputedSize](../namespace/Phaser.GameObjects.Components.ComputedSize.md) - This Game Object instance.


> Source: [src/gameobjects/components/ComputedSize.js#L93](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/components/ComputedSize.js#L93)  
Since: 3.4.0


---

