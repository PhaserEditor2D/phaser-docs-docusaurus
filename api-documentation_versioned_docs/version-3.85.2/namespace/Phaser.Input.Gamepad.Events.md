---
visibility: public
slug: namespace/input-gamepad-events
title: Phaser.Input.Gamepad.Events

seoTitle: Phaser.Input.Gamepad.Events
seoDescription: Phaser v3.85.2 Documentation for 
ogImage: 
---




Scope: 
static
> Source: [src/input/gamepad/events/index.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/input/gamepad/events/index.js#L7)  


# Static functions

## BUTTON_DOWN

### BUTTON_DOWN


**Description:**

The Gamepad Button Down Event.

This event is dispatched by the Gamepad Plugin when a button has been pressed on any active Gamepad.

Listen to this event from within a Scene using: `this.input.gamepad.on('down', listener)`.

You can also listen for a DOWN event from a Gamepad instance. See the [``GAMEPAD_BUTTON_DOWN``](Phaser.Input.Gamepad.Events#event:GAMEPAD_BUTTON_DOWN) event for details.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| pad | [Phaser.Input.Gamepad](../namespace/Phaser.Input.Gamepad.md) | No | A reference to the Gamepad on which the button was pressed. |
| button | [Phaser.Input.Gamepad.Button](../class/Phaser.Input.Gamepad.Button.md) | No | A reference to the Button which was pressed. |
| value | number | No | The value of the button at the time it was pressed. Between 0 and 1. Some Gamepads have pressure-sensitive buttons. |


> Source: [src/input/gamepad/events/BUTTON_DOWN_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/input/gamepad/events/BUTTON_DOWN_EVENT.js#L7)  
Since: 3.10.0


---

## BUTTON_UP

### BUTTON_UP


**Description:**

The Gamepad Button Up Event.

This event is dispatched by the Gamepad Plugin when a button has been released on any active Gamepad.

Listen to this event from within a Scene using: `this.input.gamepad.on('up', listener)`.

You can also listen for an UP event from a Gamepad instance. See the [``GAMEPAD_BUTTON_UP``](Phaser.Input.Gamepad.Events#event:GAMEPAD_BUTTON_UP) event for details.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| pad | [Phaser.Input.Gamepad](../namespace/Phaser.Input.Gamepad.md) | No | A reference to the Gamepad on which the button was released. |
| button | [Phaser.Input.Gamepad.Button](../class/Phaser.Input.Gamepad.Button.md) | No | A reference to the Button which was released. |
| value | number | No | The value of the button at the time it was released. Between 0 and 1. Some Gamepads have pressure-sensitive buttons. |


> Source: [src/input/gamepad/events/BUTTON_UP_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/input/gamepad/events/BUTTON_UP_EVENT.js#L7)  
Since: 3.10.0


---

## CONNECTED

### CONNECTED


**Description:**

The Gamepad Connected Event.

This event is dispatched by the Gamepad Plugin when a Gamepad has been connected.

Listen to this event from within a Scene using: `this.input.gamepad.once('connected', listener)`.

Note that the browser may require you to press a button on a gamepad before it will allow you to access it,
this is for security reasons. However, it may also trust the page already, in which case you won't get the
'connected' event and instead should check `GamepadPlugin.total` to see if it thinks there are any gamepads
already connected.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| pad | [Phaser.Input.Gamepad](../namespace/Phaser.Input.Gamepad.md) | No | A reference to the Gamepad which was connected. |
| event | Event | No | The native DOM Event that triggered the connection. |


> Source: [src/input/gamepad/events/CONNECTED_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/input/gamepad/events/CONNECTED_EVENT.js#L7)  
Since: 3.0.0


---

## DISCONNECTED

### DISCONNECTED


**Description:**

The Gamepad Disconnected Event.

This event is dispatched by the Gamepad Plugin when a Gamepad has been disconnected.

Listen to this event from within a Scene using: `this.input.gamepad.once('disconnected', listener)`.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| pad | [Phaser.Input.Gamepad](../namespace/Phaser.Input.Gamepad.md) | No | A reference to the Gamepad which was disconnected. |
| event | Event | No | The native DOM Event that triggered the disconnection. |


> Source: [src/input/gamepad/events/DISCONNECTED_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/input/gamepad/events/DISCONNECTED_EVENT.js#L7)  
Since: 3.0.0


---

## GAMEPAD_BUTTON_DOWN

### GAMEPAD_BUTTON_DOWN


**Description:**

The Gamepad Button Down Event.

This event is dispatched by a Gamepad instance when a button has been pressed on it.

Listen to this event from a Gamepad instance. Once way to get this is from the `pad1`, `pad2`, etc properties on the Gamepad Plugin:
`this.input.gamepad.pad1.on('down', listener)`.

Note that you will not receive any Gamepad button events until the browser considers the Gamepad as being 'connected'.

You can also listen for a DOWN event from the Gamepad Plugin. See the [``BUTTON_DOWN``](Phaser.Input.Gamepad.Events#event:BUTTON_DOWN) event for details.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| index | number | No | The index of the button that was pressed. |
| value | number | No | The value of the button at the time it was pressed. Between 0 and 1. Some Gamepads have pressure-sensitive buttons. |
| button | [Phaser.Input.Gamepad.Button](../class/Phaser.Input.Gamepad.Button.md) | No | A reference to the Button which was pressed. |


> Source: [src/input/gamepad/events/GAMEPAD_BUTTON_DOWN_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/input/gamepad/events/GAMEPAD_BUTTON_DOWN_EVENT.js#L7)  
Since: 3.10.0


---

## GAMEPAD_BUTTON_UP

### GAMEPAD_BUTTON_UP


**Description:**

The Gamepad Button Up Event.

This event is dispatched by a Gamepad instance when a button has been released on it.

Listen to this event from a Gamepad instance. Once way to get this is from the `pad1`, `pad2`, etc properties on the Gamepad Plugin:
`this.input.gamepad.pad1.on('up', listener)`.

Note that you will not receive any Gamepad button events until the browser considers the Gamepad as being 'connected'.

You can also listen for an UP event from the Gamepad Plugin. See the [``BUTTON_UP``](Phaser.Input.Gamepad.Events#event:BUTTON_UP) event for details.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| index | number | No | The index of the button that was released. |
| value | number | No | The value of the button at the time it was released. Between 0 and 1. Some Gamepads have pressure-sensitive buttons. |
| button | [Phaser.Input.Gamepad.Button](../class/Phaser.Input.Gamepad.Button.md) | No | A reference to the Button which was released. |


> Source: [src/input/gamepad/events/GAMEPAD_BUTTON_UP_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/input/gamepad/events/GAMEPAD_BUTTON_UP_EVENT.js#L7)  
Since: 3.10.0


---

