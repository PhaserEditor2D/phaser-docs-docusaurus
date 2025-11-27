---
visibility: public
slug: class/input-gamepad-button
title: Button
description: Phaser.Input.Gamepad.Button
seoTitle: Phaser.Input.Gamepad.Button
seoDescription: Phaser v3.87.0 Documentation for Phaser.Input.Gamepad.Button
ogImage: 
---


Contains information about a specific button on a Gamepad.

Button objects are created automatically by the Gamepad as they are needed.

**Constructor**

`new Button(pad, index)`

**Parameters**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| pad | [Phaser.Input.Gamepad.Gamepad](../class/Phaser.Input.Gamepad.Gamepad.md) | No | A reference to the Gamepad that this Button belongs to. |
| index | number | No | The index of this Button. |

---


**Scope**: static

> Source: [src/input/gamepad/Button.js#L10](https://github.com/phaserjs/phaser/blob/v3.87.0/src/input/gamepad/Button.js#L10)  
Since: 3.0.0

# Public Members

## events

### events: [Phaser.Events.EventEmitter](../class/Phaser.Events.EventEmitter.md)


**Description:**

An event emitter to use to emit the button events.


> Source: [src/input/gamepad/Button.js#L38](https://github.com/phaserjs/phaser/blob/v3.87.0/src/input/gamepad/Button.js#L38)  
Since: 3.0.0


---

## index

### index: number


**Description:**

The index of this Button.


> Source: [src/input/gamepad/Button.js#L47](https://github.com/phaserjs/phaser/blob/v3.87.0/src/input/gamepad/Button.js#L47)  
Since: 3.0.0


---

## pad

### pad: [Phaser.Input.Gamepad.Gamepad](../class/Phaser.Input.Gamepad.Gamepad.md)


**Description:**

A reference to the Gamepad that this Button belongs to.


> Source: [src/input/gamepad/Button.js#L29](https://github.com/phaserjs/phaser/blob/v3.87.0/src/input/gamepad/Button.js#L29)  
Since: 3.0.0


---

## pressed

### pressed: boolean


**Description:**

Is the Button being pressed down or not?


> Source: [src/input/gamepad/Button.js#L77](https://github.com/phaserjs/phaser/blob/v3.87.0/src/input/gamepad/Button.js#L77)  
Since: 3.0.0


---

## threshold

### threshold: number


**Description:**

Can be set for analogue buttons to enable a 'pressure' threshold,

before a button is considered as being 'pressed'.


> Source: [src/input/gamepad/Button.js#L66](https://github.com/phaserjs/phaser/blob/v3.87.0/src/input/gamepad/Button.js#L66)  
Since: 3.0.0


---

## value

### value: number


**Description:**

Between 0 and 1.


> Source: [src/input/gamepad/Button.js#L56](https://github.com/phaserjs/phaser/blob/v3.87.0/src/input/gamepad/Button.js#L56)  
Since: 3.0.0


---

# Public Methods

## destroy

### \<instance> destroy()


**Description:**

Destroys this Button instance and releases external references it holds.


> Source: [src/input/gamepad/Button.js#L126](https://github.com/phaserjs/phaser/blob/v3.87.0/src/input/gamepad/Button.js#L126)  
Since: 3.10.0


---

# Private Methods

## update

### \<instance> update(value)


**Description:**

Internal update handler for this Button.

Called automatically by the Gamepad as part of its update.


**Access:** private

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| value | number | No | The value of the button. Between 0 and 1. |


**Fires:** [Phaser.Input.Gamepad.Events#event:BUTTON_DOWN](../event/Phaser.Input.Gamepad.Events.md#BUTTON_DOWN), [Phaser.Input.Gamepad.Events#event:BUTTON_UP](../event/Phaser.Input.Gamepad.Events.md#BUTTON_UP), [Phaser.Input.Gamepad.Events#event:GAMEPAD_BUTTON_DOWN](../event/Phaser.Input.Gamepad.Events.md#GAMEPAD_BUTTON_DOWN), [Phaser.Input.Gamepad.Events#event:GAMEPAD_BUTTON_UP](../event/Phaser.Input.Gamepad.Events.md#GAMEPAD_BUTTON_UP)


> Source: [src/input/gamepad/Button.js#L88](https://github.com/phaserjs/phaser/blob/v3.87.0/src/input/gamepad/Button.js#L88)  
Since: 3.0.0


---

