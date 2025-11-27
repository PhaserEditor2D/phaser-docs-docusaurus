---
visibility: public
slug: namespace/types-input
title: Phaser.Types.Input

seoTitle: Phaser.Types.Input
seoDescription: Phaser v3.86.0 Documentation for 
ogImage: 
---




Scope: 
static
> Source: [src/input/typedefs/index.js#L7](https://github.com/phaserjs/phaser/blob/v3.86.0/src/input/typedefs/index.js#L7)  


# Static functions

- [Gamepad](../namespace/types-input-gamepad)
- [Keyboard](../namespace/types-input-keyboard)
# Static functions

## EventData

### EventData


**Description:**

A Phaser Input Event Data object.



This object is passed to the registered event listeners and allows you to stop any further propagation.


> Source: [src/input/typedefs/EventData.js#L7](https://github.com/phaserjs/phaser/blob/v3.86.0/src/input/typedefs/EventData.js#L7)  
Since: 3.15.1


---

## HitAreaCallback

### HitAreaCallback

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| hitArea | any | No | The hit area object. |
| x | number | No | The translated x coordinate of the hit test event. |
| y | number | No | The translated y coordinate of the hit test event. |
| gameObject | [Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md) | No | The Game Object that invoked the hit test. |


**Returns:** boolean - `true` if the coordinates fall within the space of the hitArea, otherwise `false`.


> Source: [src/input/typedefs/HitAreaCallback.js#L1](https://github.com/phaserjs/phaser/blob/v3.86.0/src/input/typedefs/HitAreaCallback.js#L1)  
Since: 3.0.0


---

## InputConfiguration

### InputConfiguration


> Source: [src/input/typedefs/InputConfiguration.js#L1](https://github.com/phaserjs/phaser/blob/v3.86.0/src/input/typedefs/InputConfiguration.js#L1)  
Since: 3.0.0


---

## InputPluginContainer

### InputPluginContainer


> Source: [src/input/typedefs/InputPluginContainer.js#L1](https://github.com/phaserjs/phaser/blob/v3.86.0/src/input/typedefs/InputPluginContainer.js#L1)  
Since: 3.0.0


---

## InteractiveObject

### InteractiveObject


> Source: [src/input/typedefs/InteractiveObject.js#L1](https://github.com/phaserjs/phaser/blob/v3.86.0/src/input/typedefs/InteractiveObject.js#L1)  
Since: 3.0.0


---

