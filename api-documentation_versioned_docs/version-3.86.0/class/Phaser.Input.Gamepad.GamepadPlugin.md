---
visibility: public
slug: input-gamepad-gamepadplugin
title: GamepadPlugin
description: Phaser.Input.Gamepad.GamepadPlugin
seoTitle: Phaser.Input.Gamepad.GamepadPlugin
seoDescription: Phaser v3.86.0 Documentation for Phaser.Input.Gamepad.GamepadPlugin
ogImage: 
---


The Gamepad Plugin is an input plugin that belongs to the Scene-owned Input system.



Its role is to listen for native DOM Gamepad Events and then process them.



You do not need to create this class directly, the Input system will create an instance of it automatically.



You can access it from within a Scene using `this.input.gamepad`.



To listen for a gamepad being connected:



```javascript

this.input.gamepad.once('connected', function (pad) {

    //   'pad' is a reference to the gamepad that was just connected

});

```



Note that the browser may require you to press a button on a gamepad before it will allow you to access it,

this is for security reasons. However, it may also trust the page already, in which case you won't get the

'connected' event and instead should check `GamepadPlugin.total` to see if it thinks there are any gamepads

already connected.



Once you have received the connected event, or polled the gamepads and found them enabled, you can access

them via the built-in properties `GamepadPlugin.pad1` to `pad4`, for up to 4 game pads. With a reference

to the gamepads you can poll its buttons and axis sticks. See the properties and methods available on

the `Gamepad` class for more details.



As of September 2020 Chrome, and likely other browsers, will soon start to require that games requesting

access to the Gamepad API are running under SSL. They will actively block API access if they are not.



For more information about Gamepad support in browsers see the following resources:



[https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API)

[https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)

[https://www.smashingmagazine.com/2015/11/gamepad-api-in-web-games/](https://www.smashingmagazine.com/2015/11/gamepad-api-in-web-games/)

[http://html5gamepad.com/](http://html5gamepad.com/)

**Constructor**

`new GamepadPlugin(sceneInputPlugin)`

**Parameters**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| sceneInputPlugin | [Phaser.Input.InputPlugin](../class/Phaser.Input.InputPlugin.md) | No | A reference to the Scene Input Plugin that the KeyboardPlugin belongs to. |

---


**Scope**: static


**Extends**

> [Phaser.Events.EventEmitter](../class/Phaser.Events.EventEmitter.md)  



> Source: [src/input/gamepad/GamepadPlugin.js#L15](https://github.com/phaserjs/phaser/blob/v3.86.0/src/input/gamepad/GamepadPlugin.js#L15)  
Since: 3.10.0

# Public Members

## enabled

### enabled: boolean


**Description:**

A boolean that controls if the Gamepad Manager is enabled or not.

Can be toggled on the fly.


> Source: [src/input/gamepad/GamepadPlugin.js#L98](https://github.com/phaserjs/phaser/blob/v3.86.0/src/input/gamepad/GamepadPlugin.js#L98)  
Since: 3.10.0


---

## gamepads

### gamepads: Array.\<[Phaser.Input.Gamepad.Gamepad](../class/Phaser.Input.Gamepad.Gamepad.md)>


**Description:**

An array of the connected Gamepads.


> Source: [src/input/gamepad/GamepadPlugin.js#L119](https://github.com/phaserjs/phaser/blob/v3.86.0/src/input/gamepad/GamepadPlugin.js#L119)  
Since: 3.10.0


---

## pad1

### pad1: [Phaser.Input.Gamepad.Gamepad](../class/Phaser.Input.Gamepad.Gamepad.md)


**Description:**

A reference to the first connected Gamepad.



This will be undefined if either no pads are connected, or the browser

has not yet issued a gamepadconnect, which can happen even if a Gamepad

is plugged in, but hasn't yet had any buttons pressed on it.


> Source: [src/input/gamepad/GamepadPlugin.js#L548](https://github.com/phaserjs/phaser/blob/v3.86.0/src/input/gamepad/GamepadPlugin.js#L548)  
Since: 3.10.0


---

## pad2

### pad2: [Phaser.Input.Gamepad.Gamepad](../class/Phaser.Input.Gamepad.Gamepad.md)


**Description:**

A reference to the second connected Gamepad.



This will be undefined if either no pads are connected, or the browser

has not yet issued a gamepadconnect, which can happen even if a Gamepad

is plugged in, but hasn't yet had any buttons pressed on it.


> Source: [src/input/gamepad/GamepadPlugin.js#L568](https://github.com/phaserjs/phaser/blob/v3.86.0/src/input/gamepad/GamepadPlugin.js#L568)  
Since: 3.10.0


---

## pad3

### pad3: [Phaser.Input.Gamepad.Gamepad](../class/Phaser.Input.Gamepad.Gamepad.md)


**Description:**

A reference to the third connected Gamepad.



This will be undefined if either no pads are connected, or the browser

has not yet issued a gamepadconnect, which can happen even if a Gamepad

is plugged in, but hasn't yet had any buttons pressed on it.


> Source: [src/input/gamepad/GamepadPlugin.js#L588](https://github.com/phaserjs/phaser/blob/v3.86.0/src/input/gamepad/GamepadPlugin.js#L588)  
Since: 3.10.0


---

## pad4

### pad4: [Phaser.Input.Gamepad.Gamepad](../class/Phaser.Input.Gamepad.Gamepad.md)


**Description:**

A reference to the fourth connected Gamepad.



This will be undefined if either no pads are connected, or the browser

has not yet issued a gamepadconnect, which can happen even if a Gamepad

is plugged in, but hasn't yet had any buttons pressed on it.


> Source: [src/input/gamepad/GamepadPlugin.js#L608](https://github.com/phaserjs/phaser/blob/v3.86.0/src/input/gamepad/GamepadPlugin.js#L608)  
Since: 3.10.0


---

## scene

### scene: [Phaser.Scene](../class/Phaser.Scene.md)


**Description:**

A reference to the Scene that this Input Plugin is responsible for.


> Source: [src/input/gamepad/GamepadPlugin.js#L71](https://github.com/phaserjs/phaser/blob/v3.86.0/src/input/gamepad/GamepadPlugin.js#L71)  
Since: 3.10.0


---

## sceneInputPlugin

### sceneInputPlugin: [Phaser.Input.InputPlugin](../class/Phaser.Input.InputPlugin.md)


**Description:**

A reference to the Scene Input Plugin that created this Keyboard Plugin.


> Source: [src/input/gamepad/GamepadPlugin.js#L89](https://github.com/phaserjs/phaser/blob/v3.86.0/src/input/gamepad/GamepadPlugin.js#L89)  
Since: 3.10.0


---

## settings

### settings: [Phaser.Types.Scenes.SettingsObject](../typedef/Phaser.Types.Scenes.md#SettingsObject)


**Description:**

A reference to the Scene Systems Settings.


> Source: [src/input/gamepad/GamepadPlugin.js#L80](https://github.com/phaserjs/phaser/blob/v3.86.0/src/input/gamepad/GamepadPlugin.js#L80)  
Since: 3.10.0


---

## target

### target: any


**Description:**

The Gamepad Event target, as defined in the Game Config.

Typically the browser window, but can be any interactive DOM element.


> Source: [src/input/gamepad/GamepadPlugin.js#L109](https://github.com/phaserjs/phaser/blob/v3.86.0/src/input/gamepad/GamepadPlugin.js#L109)  
Since: 3.10.0


---

## total

### total: number


**Description:**

The total number of connected game pads.


> Source: [src/input/gamepad/GamepadPlugin.js#L532](https://github.com/phaserjs/phaser/blob/v3.86.0/src/input/gamepad/GamepadPlugin.js#L532)  
Since: 3.10.0


---

# Private Members

## _pad1

### _pad1: [Phaser.Input.Gamepad.Gamepad](../class/Phaser.Input.Gamepad.Gamepad.md)


**Description:**

Internal Gamepad reference.


**Access:** private


> Source: [src/input/gamepad/GamepadPlugin.js#L149](https://github.com/phaserjs/phaser/blob/v3.86.0/src/input/gamepad/GamepadPlugin.js#L149)  
Since: 3.10.0


---

## _pad2

### _pad2: [Phaser.Input.Gamepad.Gamepad](../class/Phaser.Input.Gamepad.Gamepad.md)


**Description:**

Internal Gamepad reference.


**Access:** private


> Source: [src/input/gamepad/GamepadPlugin.js#L159](https://github.com/phaserjs/phaser/blob/v3.86.0/src/input/gamepad/GamepadPlugin.js#L159)  
Since: 3.10.0


---

## _pad3

### _pad3: [Phaser.Input.Gamepad.Gamepad](../class/Phaser.Input.Gamepad.Gamepad.md)


**Description:**

Internal Gamepad reference.


**Access:** private


> Source: [src/input/gamepad/GamepadPlugin.js#L169](https://github.com/phaserjs/phaser/blob/v3.86.0/src/input/gamepad/GamepadPlugin.js#L169)  
Since: 3.10.0


---

## _pad4

### _pad4: [Phaser.Input.Gamepad.Gamepad](../class/Phaser.Input.Gamepad.Gamepad.md)


**Description:**

Internal Gamepad reference.


**Access:** private


> Source: [src/input/gamepad/GamepadPlugin.js#L179](https://github.com/phaserjs/phaser/blob/v3.86.0/src/input/gamepad/GamepadPlugin.js#L179)  
Since: 3.10.0


---

## onGamepadHandler

### onGamepadHandler: function


**Description:**

Internal event handler.


**Access:** private


> Source: [src/input/gamepad/GamepadPlugin.js#L139](https://github.com/phaserjs/phaser/blob/v3.86.0/src/input/gamepad/GamepadPlugin.js#L139)  
Since: 3.10.0


---

## queue

### queue: Array.\<GamepadEvent>


**Description:**

An internal event queue.


**Access:** private


> Source: [src/input/gamepad/GamepadPlugin.js#L129](https://github.com/phaserjs/phaser/blob/v3.86.0/src/input/gamepad/GamepadPlugin.js#L129)  
Since: 3.10.0


---

# Public Methods

## addListener

### \<instance> addListener(event, fn, [context])


**Description:**

Add a listener for a given event.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| event | string \| symbol | No |  | The event name. |
| fn | function | No |  | The listener function. |
| context | * | Yes | "this" | The context to invoke the listener with. |


**Returns:** [Phaser.Input.Gamepad.GamepadPlugin](../class/Phaser.Input.Gamepad.GamepadPlugin.md) - `this`.


**Inherits:** [Phaser.Events.EventEmitter#addListener](../class/Phaser.Events.EventEmitter.md#addListener)


> Source: [src/events/EventEmitter.js#L111](https://github.com/phaserjs/phaser/blob/v3.86.0/src/events/EventEmitter.js#L111)  
Since: 3.0.0


---

## disconnectAll

### \<instance> disconnectAll()


**Description:**

Disconnects all current Gamepads.


> Source: [src/input/gamepad/GamepadPlugin.js#L307](https://github.com/phaserjs/phaser/blob/v3.86.0/src/input/gamepad/GamepadPlugin.js#L307)  
Since: 3.10.0


---

## emit

### \<instance> emit(event, [args])


**Description:**

Calls each of the listeners registered for a given event.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| event | string \| symbol | No | The event name. |
| args | * | Yes | Additional arguments that will be passed to the event handler. |


**Returns:** boolean - `true` if the event had listeners, else `false`.


**Inherits:** [Phaser.Events.EventEmitter#emit](../class/Phaser.Events.EventEmitter.md#emit)


> Source: [src/events/EventEmitter.js#L86](https://github.com/phaserjs/phaser/blob/v3.86.0/src/events/EventEmitter.js#L86)  
Since: 3.0.0


---

## eventNames

### \<instance> eventNames()


**Description:**

Return an array listing the events for which the emitter has registered listeners.


**Returns:** Array.\<(string | symbol)> - undefined


**Inherits:** [Phaser.Events.EventEmitter#eventNames](../class/Phaser.Events.EventEmitter.md#eventNames)


> Source: [src/events/EventEmitter.js#L55](https://github.com/phaserjs/phaser/blob/v3.86.0/src/events/EventEmitter.js#L55)  
Since: 3.0.0


---

## getAll

### \<instance> getAll()


**Description:**

Returns an array of all currently connected Gamepads.


**Returns:** Array.\<[Phaser.Input.Gamepad.Gamepad](../class/Phaser.Input.Gamepad.Gamepad.md)> - An array of all currently connected Gamepads.


> Source: [src/input/gamepad/GamepadPlugin.js#L397](https://github.com/phaserjs/phaser/blob/v3.86.0/src/input/gamepad/GamepadPlugin.js#L397)  
Since: 3.10.0


---

## getPad

### \<instance> getPad(index)


**Description:**

Looks-up a single Gamepad based on the given index value.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| index | number | No | The index of the Gamepad to get. |


**Returns:** [Phaser.Input.Gamepad.Gamepad](../class/Phaser.Input.Gamepad.Gamepad.md) - The Gamepad matching the given index, or undefined if none were found.


> Source: [src/input/gamepad/GamepadPlugin.js#L421](https://github.com/phaserjs/phaser/blob/v3.86.0/src/input/gamepad/GamepadPlugin.js#L421)  
Since: 3.10.0


---

## isActive

### \<instance> isActive()


**Description:**

Checks to see if both this plugin and the Scene to which it belongs is active.


**Returns:** boolean - `true` if the plugin and the Scene it belongs to is active.


> Source: [src/input/gamepad/GamepadPlugin.js#L234](https://github.com/phaserjs/phaser/blob/v3.86.0/src/input/gamepad/GamepadPlugin.js#L234)  
Since: 3.10.0


---

## listenerCount

### \<instance> listenerCount(event)


**Description:**

Return the number of listeners listening to a given event.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| event | string \| symbol | No | The event name. |


**Returns:** number - The number of listeners.


**Inherits:** [Phaser.Events.EventEmitter#listenerCount](../class/Phaser.Events.EventEmitter.md#listenerCount)


> Source: [src/events/EventEmitter.js#L75](https://github.com/phaserjs/phaser/blob/v3.86.0/src/events/EventEmitter.js#L75)  
Since: 3.0.0


---

## listeners

### \<instance> listeners(event)


**Description:**

Return the listeners registered for a given event.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| event | string \| symbol | No | The event name. |


**Returns:** Array.\<function()> - The registered listeners.


**Inherits:** [Phaser.Events.EventEmitter#listeners](../class/Phaser.Events.EventEmitter.md#listeners)


> Source: [src/events/EventEmitter.js#L64](https://github.com/phaserjs/phaser/blob/v3.86.0/src/events/EventEmitter.js#L64)  
Since: 3.0.0


---

## off

### \<instance> off(event, [fn], [context], [once])


**Description:**

Remove the listeners of a given event.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| event | string \| symbol | No | The event name. |
| fn | function | Yes | Only remove the listeners that match this function. |
| context | * | Yes | Only remove the listeners that have this context. |
| once | boolean | Yes | Only remove one-time listeners. |


**Returns:** [Phaser.Input.Gamepad.GamepadPlugin](../class/Phaser.Input.Gamepad.GamepadPlugin.md) - `this`.


**Inherits:** [Phaser.Events.EventEmitter#off](../class/Phaser.Events.EventEmitter.md#off)


> Source: [src/events/EventEmitter.js#L151](https://github.com/phaserjs/phaser/blob/v3.86.0/src/events/EventEmitter.js#L151)  
Since: 3.0.0


---

## on

### \<instance> on(event, fn, [context])


**Description:**

Add a listener for a given event.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| event | string \| symbol | No |  | The event name. |
| fn | function | No |  | The listener function. |
| context | * | Yes | "this" | The context to invoke the listener with. |


**Returns:** [Phaser.Input.Gamepad.GamepadPlugin](../class/Phaser.Input.Gamepad.GamepadPlugin.md) - `this`.


**Inherits:** [Phaser.Events.EventEmitter#on](../class/Phaser.Events.EventEmitter.md#on)


> Source: [src/events/EventEmitter.js#L98](https://github.com/phaserjs/phaser/blob/v3.86.0/src/events/EventEmitter.js#L98)  
Since: 3.0.0


---

## once

### \<instance> once(event, fn, [context])


**Description:**

Add a one-time listener for a given event.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| event | string \| symbol | No |  | The event name. |
| fn | function | No |  | The listener function. |
| context | * | Yes | "this" | The context to invoke the listener with. |


**Returns:** [Phaser.Input.Gamepad.GamepadPlugin](../class/Phaser.Input.Gamepad.GamepadPlugin.md) - `this`.


**Inherits:** [Phaser.Events.EventEmitter#once](../class/Phaser.Events.EventEmitter.md#once)


> Source: [src/events/EventEmitter.js#L124](https://github.com/phaserjs/phaser/blob/v3.86.0/src/events/EventEmitter.js#L124)  
Since: 3.0.0


---

## removeAllListeners

### \<instance> removeAllListeners([event])


**Description:**

Remove all listeners, or those of the specified event.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| event | string \| symbol | Yes | The event name. |


**Returns:** [Phaser.Input.Gamepad.GamepadPlugin](../class/Phaser.Input.Gamepad.GamepadPlugin.md) - `this`.


**Inherits:** [Phaser.Events.EventEmitter#removeAllListeners](../class/Phaser.Events.EventEmitter.md#removeAllListeners)


> Source: [src/events/EventEmitter.js#L165](https://github.com/phaserjs/phaser/blob/v3.86.0/src/events/EventEmitter.js#L165)  
Since: 3.0.0


---

## removeListener

### \<instance> removeListener(event, [fn], [context], [once])


**Description:**

Remove the listeners of a given event.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| event | string \| symbol | No | The event name. |
| fn | function | Yes | Only remove the listeners that match this function. |
| context | * | Yes | Only remove the listeners that have this context. |
| once | boolean | Yes | Only remove one-time listeners. |


**Returns:** [Phaser.Input.Gamepad.GamepadPlugin](../class/Phaser.Input.Gamepad.GamepadPlugin.md) - `this`.


**Inherits:** [Phaser.Events.EventEmitter#removeListener](../class/Phaser.Events.EventEmitter.md#removeListener)


> Source: [src/events/EventEmitter.js#L137](https://github.com/phaserjs/phaser/blob/v3.86.0/src/events/EventEmitter.js#L137)  
Since: 3.0.0


---

# Private Methods

## boot

### \<instance> boot()


**Description:**

This method is called automatically, only once, when the Scene is first created.

Do not invoke it directly.


**Access:** private


> Source: [src/input/gamepad/GamepadPlugin.js#L193](https://github.com/phaserjs/phaser/blob/v3.86.0/src/input/gamepad/GamepadPlugin.js#L193)  
Since: 3.10.0


---

## destroy

### \<instance> destroy()


**Description:**

Destroys this Gamepad Plugin, disconnecting all Gamepads and releasing internal references.


**Access:** private


**Overrides:** Phaser.Events.EventEmitter#destroy


> Source: [src/input/gamepad/GamepadPlugin.js#L505](https://github.com/phaserjs/phaser/blob/v3.86.0/src/input/gamepad/GamepadPlugin.js#L505)  
Since: 3.10.0


---

## refreshPads

### \<instance> refreshPads()


**Description:**

Refreshes the list of connected Gamepads.



This is called automatically when a gamepad is connected or disconnected,

and during the update loop.


**Access:** private


> Source: [src/input/gamepad/GamepadPlugin.js#L321](https://github.com/phaserjs/phaser/blob/v3.86.0/src/input/gamepad/GamepadPlugin.js#L321)  
Since: 3.10.0


---

## shutdown

### \<instance> shutdown()


**Description:**

Shuts the Gamepad Plugin down.

All this does is remove any listeners bound to it.


**Access:** private


**Overrides:** Phaser.Events.EventEmitter#shutdown


> Source: [src/input/gamepad/GamepadPlugin.js#L490](https://github.com/phaserjs/phaser/blob/v3.86.0/src/input/gamepad/GamepadPlugin.js#L490)  
Since: 3.10.0


---

## start

### \<instance> start()


**Description:**

This method is called automatically by the Scene when it is starting up.

It is responsible for creating local systems, properties and listening for Scene events.

Do not invoke it directly.


**Access:** private


> Source: [src/input/gamepad/GamepadPlugin.js#L213](https://github.com/phaserjs/phaser/blob/v3.86.0/src/input/gamepad/GamepadPlugin.js#L213)  
Since: 3.10.0


---

## startListeners

### \<instance> startListeners()


**Description:**

Starts the Gamepad Event listeners running.

This is called automatically and does not need to be manually invoked.


**Access:** private


> Source: [src/input/gamepad/GamepadPlugin.js#L247](https://github.com/phaserjs/phaser/blob/v3.86.0/src/input/gamepad/GamepadPlugin.js#L247)  
Since: 3.10.0


---

## stopListeners

### \<instance> stopListeners()


**Description:**

Stops the Gamepad Event listeners.

This is called automatically and does not need to be manually invoked.


**Access:** private


> Source: [src/input/gamepad/GamepadPlugin.js#L286](https://github.com/phaserjs/phaser/blob/v3.86.0/src/input/gamepad/GamepadPlugin.js#L286)  
Since: 3.10.0


---

## update

### \<instance> update()


**Description:**

The internal update loop. Refreshes all connected gamepads and processes their events.



Called automatically by the Input Manager, invoked from the Game step.


**Access:** private


**Fires:** [Phaser.Input.Gamepad.Events#event:CONNECTED](../event/Phaser.Input.Gamepad.Events.md#CONNECTED), [Phaser.Input.Gamepad.Events#event:DISCONNECTED](../event/Phaser.Input.Gamepad.Events.md#DISCONNECTED)


> Source: [src/input/gamepad/GamepadPlugin.js#L444](https://github.com/phaserjs/phaser/blob/v3.86.0/src/input/gamepad/GamepadPlugin.js#L444)  
Since: 3.10.0


---

