---
visibility: public
slug: cameras-scene2d-effects-zoom
title: Zoom
description: Phaser.Cameras.Scene2D.Effects.Zoom
seoTitle: Phaser.Cameras.Scene2D.Effects.Zoom
seoDescription: Phaser v3.87.0 Documentation for Phaser.Cameras.Scene2D.Effects.Zoom
ogImage: 
---


A Camera Zoom effect.



This effect will zoom the Camera to the given scale, over the duration and with the ease specified.



The effect will dispatch several events on the Camera itself and you can also specify an `onUpdate` callback,

which is invoked each frame for the duration of the effect if required.

**Constructor**

`new Zoom(camera)`

**Parameters**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| camera | [Phaser.Cameras.Scene2D.Camera](../class/Phaser.Cameras.Scene2D.Camera.md) | No | The camera this effect is acting upon. |

---


**Scope**: static

> Source: [src/cameras/2d/effects/Zoom.js#L12](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/effects/Zoom.js#L12)  
Since: 3.11.0

# Public Members

## camera

### camera: [Phaser.Cameras.Scene2D.Camera](../class/Phaser.Cameras.Scene2D.Camera.md)


**Description:**

The Camera this effect belongs to.


> Source: [src/cameras/2d/effects/Zoom.js#L34](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/effects/Zoom.js#L34)  
Since: 3.11.0


---

## destination

### destination: number


**Description:**

The destination zoom value.


> Source: [src/cameras/2d/effects/Zoom.js#L75](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/effects/Zoom.js#L75)  
Since: 3.11.0


---

## duration

### duration: number


**Description:**

The duration of the effect, in milliseconds.


> Source: [src/cameras/2d/effects/Zoom.js#L55](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/effects/Zoom.js#L55)  
Since: 3.11.0


---

## ease

### ease: function


**Description:**

The ease function to use during the zoom.


> Source: [src/cameras/2d/effects/Zoom.js#L84](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/effects/Zoom.js#L84)  
Since: 3.11.0


---

## isRunning

### isRunning: boolean


**Description:**

Is this effect actively running?


> Source: [src/cameras/2d/effects/Zoom.js#L44](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/effects/Zoom.js#L44)  
Since: 3.11.0


---

## progress

### progress: number


**Description:**

If this effect is running this holds the current percentage of the progress, a value between 0 and 1.


> Source: [src/cameras/2d/effects/Zoom.js#L93](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/effects/Zoom.js#L93)  
Since: 3.11.0


---

## source

### source: number


**Description:**

The starting zoom value;


> Source: [src/cameras/2d/effects/Zoom.js#L66](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/effects/Zoom.js#L66)  
Since: 3.11.0


---

# Private Members

## _elapsed

### _elapsed: number


**Description:**

Effect elapsed timer.


**Access:** private


> Source: [src/cameras/2d/effects/Zoom.js#L102](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/effects/Zoom.js#L102)  
Since: 3.11.0


---

## _onUpdate

### _onUpdate: [Phaser.Types.Cameras.Scene2D.CameraZoomCallback](../typedef/Phaser.Types.Cameras.Scene2D.md#CameraZoomCallback)


**Description:**

This callback is invoked every frame for the duration of the effect.


**Access:** private


> Source: [src/cameras/2d/effects/Zoom.js#L112](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/effects/Zoom.js#L112)  
Since: 3.11.0


---

## _onUpdateScope

### _onUpdateScope: any


**Description:**

On Complete callback scope.


**Access:** private


> Source: [src/cameras/2d/effects/Zoom.js#L123](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/effects/Zoom.js#L123)  
Since: 3.11.0


---

# Public Methods

## destroy

### \<instance> destroy()


**Description:**

Destroys this effect, releasing it from the Camera.


> Source: [src/cameras/2d/effects/Zoom.js#L272](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/effects/Zoom.js#L272)  
Since: 3.11.0


---

## effectComplete

### \<instance> effectComplete()


**Description:**

Called internally when the effect completes.


**Fires:** [Phaser.Cameras.Scene2D.Events#event:ZOOM_COMPLETE](../event/Phaser.Cameras.Scene2D.Events.md#ZOOM_COMPLETE)


> Source: [src/cameras/2d/effects/Zoom.js#L240](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/effects/Zoom.js#L240)  
Since: 3.11.0


---

## reset

### \<instance> reset()


**Description:**

Resets this camera effect.

If it was previously running, it stops instantly without calling its onComplete callback or emitting an event.


> Source: [src/cameras/2d/effects/Zoom.js#L257](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/effects/Zoom.js#L257)  
Since: 3.11.0


---

## start

### \<instance> start(zoom, [duration], [ease], [force], [callback], [context])


**Description:**

This effect will zoom the Camera to the given scale, over the duration and with the ease specified.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| zoom | number | No |  | The target Camera zoom value. |
| duration | number | Yes | 1000 | The duration of the effect in milliseconds. |
| ease | string \| function | Yes | "'Linear'" | The ease to use for the Zoom. Can be any of the Phaser Easing constants or a custom function. |
| force | boolean | Yes | false | Force the zoom effect to start immediately, even if already running. |
| callback | [Phaser.Types.Cameras.Scene2D.CameraZoomCallback](../typedef/Phaser.Types.Cameras.Scene2D.md#CameraZoomCallback) | Yes |  | This callback will be invoked every frame for the duration of the effect. It is sent three arguments: A reference to the camera, a progress amount between 0 and 1 indicating how complete the effect is, and the current camera zoom value. |
| context | any | Yes |  | The context in which the callback is invoked. Defaults to the Scene to which the Camera belongs. |


**Returns:** [Phaser.Cameras.Scene2D.Camera](../class/Phaser.Cameras.Scene2D.Camera.md) - The Camera on which the effect was started.


**Fires:** [Phaser.Cameras.Scene2D.Events#event:ZOOM_START](../event/Phaser.Cameras.Scene2D.Events.md#ZOOM_START), [Phaser.Cameras.Scene2D.Events#event:ZOOM_COMPLETE](../event/Phaser.Cameras.Scene2D.Events.md#ZOOM_COMPLETE)


> Source: [src/cameras/2d/effects/Zoom.js#L134](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/effects/Zoom.js#L134)  
Since: 3.11.0


---

## update

### \<instance> update(time, delta)


**Description:**

The main update loop for this effect. Called automatically by the Camera.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| time | number | No | The current timestamp as generated by the Request Animation Frame or SetTimeout. |
| delta | number | No | The delta time, in ms, elapsed since the last frame. |


> Source: [src/cameras/2d/effects/Zoom.js#L198](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/effects/Zoom.js#L198)  
Since: 3.11.0


---

