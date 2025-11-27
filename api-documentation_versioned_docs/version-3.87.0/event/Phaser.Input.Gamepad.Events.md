---
visibility: public
slug: event/input-gamepad-events
title: Input.Gamepad.Events
description: Phaser.Input.Gamepad.Events
seoTitle: Input.Gamepad.Events
seoDescription: Phaser v3.87.0 Documentation for Phaser.Input.Gamepad.Events
ogImage: 
---

## BUTTON_DOWN


**Description:** The Gamepad Button Down Event.



This event is dispatched by the Gamepad Plugin when a button has been pressed on any active Gamepad.



Listen to this event from within a Scene using: `this.input.gamepad.on('down', listener)`.



You can also listen for a DOWN event from a Gamepad instance. See the [GAMEPAD_BUTTON_DOWN]{@linkcode Phaser.Input.Gamepad.Events#event:GAMEPAD_BUTTON_DOWN} event for details.

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| pad | [Phaser.Input.Gamepad](../namespace/Phaser.Input.Gamepad.md) | No | A reference to the Gamepad on which the button was pressed. |
| button | [Phaser.Input.Gamepad.Button](../class/Phaser.Input.Gamepad.Button.md) | No | A reference to the Button which was pressed. |
| value | number | No | The value of the button at the time it was pressed. Between 0 and 1. Some Gamepads have pressure-sensitive buttons. |

**Member of:** [Phaser.Input.Gamepad.Events](../namespace/Phaser.Input.Gamepad.Events.md)
> Source: [src/input/gamepad/events/BUTTON_DOWN_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.87.0/src/input/gamepad/events/BUTTON_DOWN_EVENT.js#L7)  
Since: 3.10.0

## BUTTON_UP


**Description:** The Gamepad Button Up Event.



This event is dispatched by the Gamepad Plugin when a button has been released on any active Gamepad.



Listen to this event from within a Scene using: `this.input.gamepad.on('up', listener)`.



You can also listen for an UP event from a Gamepad instance. See the [GAMEPAD_BUTTON_UP]{@linkcode Phaser.Input.Gamepad.Events#event:GAMEPAD_BUTTON_UP} event for details.

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| pad | [Phaser.Input.Gamepad](../namespace/Phaser.Input.Gamepad.md) | No | A reference to the Gamepad on which the button was released. |
| button | [Phaser.Input.Gamepad.Button](../class/Phaser.Input.Gamepad.Button.md) | No | A reference to the Button which was released. |
| value | number | No | The value of the button at the time it was released. Between 0 and 1. Some Gamepads have pressure-sensitive buttons. |

**Member of:** [Phaser.Input.Gamepad.Events](../namespace/Phaser.Input.Gamepad.Events.md)
> Source: [src/input/gamepad/events/BUTTON_UP_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.87.0/src/input/gamepad/events/BUTTON_UP_EVENT.js#L7)  
Since: 3.10.0

## CONNECTED


**Description:** The Gamepad Connected Event.



This event is dispatched by the Gamepad Plugin when a Gamepad has been connected.



Listen to this event from within a Scene using: `this.input.gamepad.once('connected', listener)`.



Note that the browser may require you to press a button on a gamepad before it will allow you to access it,

this is for security reasons. However, it may also trust the page already, in which case you won't get the

'connected' event and instead should check `GamepadPlugin.total` to see if it thinks there are any gamepads

already connected.

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| pad | [Phaser.Input.Gamepad](../namespace/Phaser.Input.Gamepad.md) | No | A reference to the Gamepad which was connected. |
| event | Event | No | The native DOM Event that triggered the connection. |

**Member of:** [Phaser.Input.Gamepad.Events](../namespace/Phaser.Input.Gamepad.Events.md)
> Source: [src/input/gamepad/events/CONNECTED_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.87.0/src/input/gamepad/events/CONNECTED_EVENT.js#L7)  
Since: 3.0.0

## DISCONNECTED


**Description:** The Gamepad Disconnected Event.



This event is dispatched by the Gamepad Plugin when a Gamepad has been disconnected.



Listen to this event from within a Scene using: `this.input.gamepad.once('disconnected', listener)`.

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| pad | [Phaser.Input.Gamepad](../namespace/Phaser.Input.Gamepad.md) | No | A reference to the Gamepad which was disconnected. |
| event | Event | No | The native DOM Event that triggered the disconnection. |

**Member of:** [Phaser.Input.Gamepad.Events](../namespace/Phaser.Input.Gamepad.Events.md)
> Source: [src/input/gamepad/events/DISCONNECTED_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.87.0/src/input/gamepad/events/DISCONNECTED_EVENT.js#L7)  
Since: 3.0.0

## GAMEPAD_BUTTON_DOWN


**Description:** The Gamepad Button Down Event.



This event is dispatched by a Gamepad instance when a button has been pressed on it.



Listen to this event from a Gamepad instance. Once way to get this is from the `pad1`, `pad2`, etc properties on the Gamepad Plugin:

`this.input.gamepad.pad1.on('down', listener)`.



Note that you will not receive any Gamepad button events until the browser considers the Gamepad as being 'connected'.



You can also listen for a DOWN event from the Gamepad Plugin. See the [BUTTON_DOWN]{@linkcode Phaser.Input.Gamepad.Events#event:BUTTON_DOWN} event for details.

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| index | number | No | The index of the button that was pressed. |
| value | number | No | The value of the button at the time it was pressed. Between 0 and 1. Some Gamepads have pressure-sensitive buttons. |
| button | [Phaser.Input.Gamepad.Button](../class/Phaser.Input.Gamepad.Button.md) | No | A reference to the Button which was pressed. |

**Member of:** [Phaser.Input.Gamepad.Events](../namespace/Phaser.Input.Gamepad.Events.md)
> Source: [src/input/gamepad/events/GAMEPAD_BUTTON_DOWN_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.87.0/src/input/gamepad/events/GAMEPAD_BUTTON_DOWN_EVENT.js#L7)  
Since: 3.10.0

## GAMEPAD_BUTTON_UP


**Description:** The Gamepad Button Up Event.



This event is dispatched by a Gamepad instance when a button has been released on it.



Listen to this event from a Gamepad instance. Once way to get this is from the `pad1`, `pad2`, etc properties on the Gamepad Plugin:

`this.input.gamepad.pad1.on('up', listener)`.



Note that you will not receive any Gamepad button events until the browser considers the Gamepad as being 'connected'.



You can also listen for an UP event from the Gamepad Plugin. See the [BUTTON_UP]{@linkcode Phaser.Input.Gamepad.Events#event:BUTTON_UP} event for details.

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| index | number | No | The index of the button that was released. |
| value | number | No | The value of the button at the time it was released. Between 0 and 1. Some Gamepads have pressure-sensitive buttons. |
| button | [Phaser.Input.Gamepad.Button](../class/Phaser.Input.Gamepad.Button.md) | No | A reference to the Button which was released. |

**Member of:** [Phaser.Input.Gamepad.Events](../namespace/Phaser.Input.Gamepad.Events.md)
> Source: [src/input/gamepad/events/GAMEPAD_BUTTON_UP_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.87.0/src/input/gamepad/events/GAMEPAD_BUTTON_UP_EVENT.js#L7)  
Since: 3.10.0
