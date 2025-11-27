---
visibility: public
slug: event/cameras-scene2d-events
title: Cameras.Scene2D.Events
description: Phaser.Cameras.Scene2D.Events
seoTitle: Cameras.Scene2D.Events
seoDescription: Phaser v3.85.2 Documentation for Phaser.Cameras.Scene2D.Events
ogImage: 
---

## DESTROY


**Description:** The Destroy Camera Event.

This event is dispatched by a Camera instance when it is destroyed by the Camera Manager.

Listen for it via either of the following:

```js
this.cameras.main.on('cameradestroy', () => {});
```

or use the constant, to avoid having to remember the correct event string:

```js
this.cameras.main.on(Phaser.Cameras.Scene2D.Events.DESTROY, () => {});
```

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| camera | [Phaser.Cameras.Scene2D.BaseCamera](../class/Phaser.Cameras.Scene2D.BaseCamera.md) | No | The camera that was destroyed. |

**Member of:** [Phaser.Cameras.Scene2D.Events](../namespace/Phaser.Cameras.Scene2D.Events.md)
> Source: [src/cameras/2d/events/DESTROY_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/cameras/2d/events/DESTROY_EVENT.js#L7)  
Since: 3.0.0

## FADE_IN_COMPLETE


**Description:** The Camera Fade In Complete Event.

This event is dispatched by a Camera instance when the Fade In Effect completes.

Listen to it from a Camera instance using `Camera.on('camerafadeincomplete', listener)`.

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| camera | [Phaser.Cameras.Scene2D.Camera](../class/Phaser.Cameras.Scene2D.Camera.md) | No | The camera that the effect began on. |
| effect | [Phaser.Cameras.Scene2D.Effects.Fade](../class/Phaser.Cameras.Scene2D.Effects.Fade.md) | No | A reference to the effect instance. |

**Member of:** [Phaser.Cameras.Scene2D.Events](../namespace/Phaser.Cameras.Scene2D.Events.md)
> Source: [src/cameras/2d/events/FADE_IN_COMPLETE_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/cameras/2d/events/FADE_IN_COMPLETE_EVENT.js#L7)  
Since: 3.3.0

## FADE_IN_START


**Description:** The Camera Fade In Start Event.

This event is dispatched by a Camera instance when the Fade In Effect starts.

Listen to it from a Camera instance using `Camera.on('camerafadeinstart', listener)`.

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| camera | [Phaser.Cameras.Scene2D.Camera](../class/Phaser.Cameras.Scene2D.Camera.md) | No | The camera that the effect began on. |
| effect | [Phaser.Cameras.Scene2D.Effects.Fade](../class/Phaser.Cameras.Scene2D.Effects.Fade.md) | No | A reference to the effect instance. |
| duration | number | No | The duration of the effect. |
| red | number | No | The red color channel value. |
| green | number | No | The green color channel value. |
| blue | number | No | The blue color channel value. |

**Member of:** [Phaser.Cameras.Scene2D.Events](../namespace/Phaser.Cameras.Scene2D.Events.md)
> Source: [src/cameras/2d/events/FADE_IN_START_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/cameras/2d/events/FADE_IN_START_EVENT.js#L7)  
Since: 3.3.0

## FADE_OUT_COMPLETE


**Description:** The Camera Fade Out Complete Event.

This event is dispatched by a Camera instance when the Fade Out Effect completes.

Listen to it from a Camera instance using `Camera.on('camerafadeoutcomplete', listener)`.

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| camera | [Phaser.Cameras.Scene2D.Camera](../class/Phaser.Cameras.Scene2D.Camera.md) | No | The camera that the effect began on. |
| effect | [Phaser.Cameras.Scene2D.Effects.Fade](../class/Phaser.Cameras.Scene2D.Effects.Fade.md) | No | A reference to the effect instance. |

**Member of:** [Phaser.Cameras.Scene2D.Events](../namespace/Phaser.Cameras.Scene2D.Events.md)
> Source: [src/cameras/2d/events/FADE_OUT_COMPLETE_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/cameras/2d/events/FADE_OUT_COMPLETE_EVENT.js#L7)  
Since: 3.3.0

## FADE_OUT_START


**Description:** The Camera Fade Out Start Event.

This event is dispatched by a Camera instance when the Fade Out Effect starts.

Listen to it from a Camera instance using `Camera.on('camerafadeoutstart', listener)`.

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| camera | [Phaser.Cameras.Scene2D.Camera](../class/Phaser.Cameras.Scene2D.Camera.md) | No | The camera that the effect began on. |
| effect | [Phaser.Cameras.Scene2D.Effects.Fade](../class/Phaser.Cameras.Scene2D.Effects.Fade.md) | No | A reference to the effect instance. |
| duration | number | No | The duration of the effect. |
| red | number | No | The red color channel value. |
| green | number | No | The green color channel value. |
| blue | number | No | The blue color channel value. |

**Member of:** [Phaser.Cameras.Scene2D.Events](../namespace/Phaser.Cameras.Scene2D.Events.md)
> Source: [src/cameras/2d/events/FADE_OUT_START_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/cameras/2d/events/FADE_OUT_START_EVENT.js#L7)  
Since: 3.3.0

## FLASH_COMPLETE


**Description:** The Camera Flash Complete Event.

This event is dispatched by a Camera instance when the Flash Effect completes.

Listen for it via either of the following:

```js
this.cameras.main.on('cameraflashcomplete', () => {});
```

or use the constant, to avoid having to remember the correct event string:

```js
this.cameras.main.on(Phaser.Cameras.Scene2D.Events.FLASH_COMPLETE, () => {});
```

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| camera | [Phaser.Cameras.Scene2D.Camera](../class/Phaser.Cameras.Scene2D.Camera.md) | No | The camera that the effect began on. |
| effect | [Phaser.Cameras.Scene2D.Effects.Flash](../class/Phaser.Cameras.Scene2D.Effects.Flash.md) | No | A reference to the effect instance. |

**Member of:** [Phaser.Cameras.Scene2D.Events](../namespace/Phaser.Cameras.Scene2D.Events.md)
> Source: [src/cameras/2d/events/FLASH_COMPLETE_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/cameras/2d/events/FLASH_COMPLETE_EVENT.js#L7)  
Since: 3.3.0

## FLASH_START


**Description:** The Camera Flash Start Event.

This event is dispatched by a Camera instance when the Flash Effect starts.

Listen for it via either of the following:

```js
this.cameras.main.on('cameraflashstart', () => {});
```

or use the constant, to avoid having to remember the correct event string:

```js
this.cameras.main.on(Phaser.Cameras.Scene2D.Events.FLASH_START, () => {});
```

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| camera | [Phaser.Cameras.Scene2D.Camera](../class/Phaser.Cameras.Scene2D.Camera.md) | No | The camera that the effect began on. |
| effect | [Phaser.Cameras.Scene2D.Effects.Flash](../class/Phaser.Cameras.Scene2D.Effects.Flash.md) | No | A reference to the effect instance. |
| duration | number | No | The duration of the effect. |
| red | number | No | The red color channel value. |
| green | number | No | The green color channel value. |
| blue | number | No | The blue color channel value. |

**Member of:** [Phaser.Cameras.Scene2D.Events](../namespace/Phaser.Cameras.Scene2D.Events.md)
> Source: [src/cameras/2d/events/FLASH_START_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/cameras/2d/events/FLASH_START_EVENT.js#L7)  
Since: 3.3.0

## FOLLOW_UPDATE


**Description:** The Camera Follower Update Event.

This event is dispatched by a Camera instance when it is following a
Game Object and the Camera position has been updated as a result of
that following.

Listen to it from a Camera instance using: `camera.on('followupdate', listener)`.

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| camera | [Phaser.Cameras.Scene2D.BaseCamera](../class/Phaser.Cameras.Scene2D.BaseCamera.md) | No | The camera that emitted the event. |
| gameObject | [Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md) | No | The Game Object the camera is following. |

**Member of:** [Phaser.Cameras.Scene2D.Events](../namespace/Phaser.Cameras.Scene2D.Events.md)
> Source: [src/cameras/2d/events/FOLLOW_UPDATE_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/cameras/2d/events/FOLLOW_UPDATE_EVENT.js#L7)  
Since: 3.50.0

## PAN_COMPLETE


**Description:** The Camera Pan Complete Event.

This event is dispatched by a Camera instance when the Pan Effect completes.

Listen for it via either of the following:

```js
this.cameras.main.on('camerapancomplete', () => {});
```

or use the constant, to avoid having to remember the correct event string:

```js
this.cameras.main.on(Phaser.Cameras.Scene2D.Events.PAN_COMPLETE, () => {});
```

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| camera | [Phaser.Cameras.Scene2D.Camera](../class/Phaser.Cameras.Scene2D.Camera.md) | No | The camera that the effect began on. |
| effect | [Phaser.Cameras.Scene2D.Effects.Pan](../class/Phaser.Cameras.Scene2D.Effects.Pan.md) | No | A reference to the effect instance. |

**Member of:** [Phaser.Cameras.Scene2D.Events](../namespace/Phaser.Cameras.Scene2D.Events.md)
> Source: [src/cameras/2d/events/PAN_COMPLETE_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/cameras/2d/events/PAN_COMPLETE_EVENT.js#L7)  
Since: 3.3.0

## PAN_START


**Description:** The Camera Pan Start Event.

This event is dispatched by a Camera instance when the Pan Effect starts.

Listen for it via either of the following:

```js
this.cameras.main.on('camerapanstart', () => {});
```

or use the constant, to avoid having to remember the correct event string:

```js
this.cameras.main.on(Phaser.Cameras.Scene2D.Events.PAN_START, () => {});
```

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| camera | [Phaser.Cameras.Scene2D.Camera](../class/Phaser.Cameras.Scene2D.Camera.md) | No | The camera that the effect began on. |
| effect | [Phaser.Cameras.Scene2D.Effects.Pan](../class/Phaser.Cameras.Scene2D.Effects.Pan.md) | No | A reference to the effect instance. |
| duration | number | No | The duration of the effect. |
| x | number | No | The destination scroll x coordinate. |
| y | number | No | The destination scroll y coordinate. |

**Member of:** [Phaser.Cameras.Scene2D.Events](../namespace/Phaser.Cameras.Scene2D.Events.md)
> Source: [src/cameras/2d/events/PAN_START_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/cameras/2d/events/PAN_START_EVENT.js#L7)  
Since: 3.3.0

## POST_RENDER


**Description:** The Camera Post-Render Event.

This event is dispatched by a Camera instance after is has finished rendering.
It is only dispatched if the Camera is rendering to a texture.

Listen to it from a Camera instance using: `camera.on('postrender', listener)`.

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| camera | [Phaser.Cameras.Scene2D.BaseCamera](../class/Phaser.Cameras.Scene2D.BaseCamera.md) | No | The camera that has finished rendering to a texture. |

**Member of:** [Phaser.Cameras.Scene2D.Events](../namespace/Phaser.Cameras.Scene2D.Events.md)
> Source: [src/cameras/2d/events/POST_RENDER_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/cameras/2d/events/POST_RENDER_EVENT.js#L7)  
Since: 3.0.0

## PRE_RENDER


**Description:** The Camera Pre-Render Event.

This event is dispatched by a Camera instance when it is about to render.
It is only dispatched if the Camera is rendering to a texture.

Listen to it from a Camera instance using: `camera.on('prerender', listener)`.

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| camera | [Phaser.Cameras.Scene2D.BaseCamera](../class/Phaser.Cameras.Scene2D.BaseCamera.md) | No | The camera that is about to render to a texture. |

**Member of:** [Phaser.Cameras.Scene2D.Events](../namespace/Phaser.Cameras.Scene2D.Events.md)
> Source: [src/cameras/2d/events/PRE_RENDER_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/cameras/2d/events/PRE_RENDER_EVENT.js#L7)  
Since: 3.0.0

## ROTATE_COMPLETE


**Description:** The Camera Rotate Complete Event.

This event is dispatched by a Camera instance when the Rotate Effect completes.

Listen for it via either of the following:

```js
this.cameras.main.on('camerarotatecomplete', () => {});
```

or use the constant, to avoid having to remember the correct event string:

```js
this.cameras.main.on(Phaser.Cameras.Scene2D.Events.ROTATE_COMPLETE, () => {});
```

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| camera | [Phaser.Cameras.Scene2D.Camera](../class/Phaser.Cameras.Scene2D.Camera.md) | No | The camera that the effect began on. |
| effect | [Phaser.Cameras.Scene2D.Effects.RotateTo](../class/Phaser.Cameras.Scene2D.Effects.RotateTo.md) | No | A reference to the effect instance. |

**Member of:** [Phaser.Cameras.Scene2D.Events](../namespace/Phaser.Cameras.Scene2D.Events.md)
> Source: [src/cameras/2d/events/ROTATE_COMPLETE_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/cameras/2d/events/ROTATE_COMPLETE_EVENT.js#L7)  
Since: 3.23.0

## ROTATE_START


**Description:** The Camera Rotate Start Event.

This event is dispatched by a Camera instance when the Rotate Effect starts.

Listen for it via either of the following:

```js
this.cameras.main.on('camerarotatestart', () => {});
```

or use the constant, to avoid having to remember the correct event string:

```js
this.cameras.main.on(Phaser.Cameras.Scene2D.Events.ROTATE_START, () => {});
```

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| camera | [Phaser.Cameras.Scene2D.Camera](../class/Phaser.Cameras.Scene2D.Camera.md) | No | The camera that the effect began on. |
| effect | [Phaser.Cameras.Scene2D.Effects.RotateTo](../class/Phaser.Cameras.Scene2D.Effects.RotateTo.md) | No | A reference to the effect instance. |
| duration | number | No | The duration of the effect. |
| destination | number | No | The destination value. |

**Member of:** [Phaser.Cameras.Scene2D.Events](../namespace/Phaser.Cameras.Scene2D.Events.md)
> Source: [src/cameras/2d/events/ROTATE_START_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/cameras/2d/events/ROTATE_START_EVENT.js#L7)  
Since: 3.23.0

## SHAKE_COMPLETE


**Description:** The Camera Shake Complete Event.

This event is dispatched by a Camera instance when the Shake Effect completes.

Listen for it via either of the following:

```js
this.cameras.main.on('camerashakecomplete', () => {});
```

or use the constant, to avoid having to remember the correct event string:

```js
this.cameras.main.on(Phaser.Cameras.Scene2D.Events.SHAKE_COMPLETE, () => {});
```

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| camera | [Phaser.Cameras.Scene2D.Camera](../class/Phaser.Cameras.Scene2D.Camera.md) | No | The camera that the effect began on. |
| effect | [Phaser.Cameras.Scene2D.Effects.Shake](../class/Phaser.Cameras.Scene2D.Effects.Shake.md) | No | A reference to the effect instance. |

**Member of:** [Phaser.Cameras.Scene2D.Events](../namespace/Phaser.Cameras.Scene2D.Events.md)
> Source: [src/cameras/2d/events/SHAKE_COMPLETE_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/cameras/2d/events/SHAKE_COMPLETE_EVENT.js#L7)  
Since: 3.3.0

## SHAKE_START


**Description:** The Camera Shake Start Event.

This event is dispatched by a Camera instance when the Shake Effect starts.

Listen for it via either of the following:

```js
this.cameras.main.on('camerashakestart', () => {});
```

or use the constant, to avoid having to remember the correct event string:

```js
this.cameras.main.on(Phaser.Cameras.Scene2D.Events.SHAKE_START, () => {});
```

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| camera | [Phaser.Cameras.Scene2D.Camera](../class/Phaser.Cameras.Scene2D.Camera.md) | No | The camera that the effect began on. |
| effect | [Phaser.Cameras.Scene2D.Effects.Shake](../class/Phaser.Cameras.Scene2D.Effects.Shake.md) | No | A reference to the effect instance. |
| duration | number | No | The duration of the effect. |
| intensity | number | No | The intensity of the effect. |

**Member of:** [Phaser.Cameras.Scene2D.Events](../namespace/Phaser.Cameras.Scene2D.Events.md)
> Source: [src/cameras/2d/events/SHAKE_START_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/cameras/2d/events/SHAKE_START_EVENT.js#L7)  
Since: 3.3.0

## ZOOM_COMPLETE


**Description:** The Camera Zoom Complete Event.

This event is dispatched by a Camera instance when the Zoom Effect completes.

Listen for it via either of the following:

```js
this.cameras.main.on('camerazoomcomplete', () => {});
```

or use the constant, to avoid having to remember the correct event string:

```js
this.cameras.main.on(Phaser.Cameras.Scene2D.Events.ZOOM_COMPLETE, () => {});
```

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| camera | [Phaser.Cameras.Scene2D.Camera](../class/Phaser.Cameras.Scene2D.Camera.md) | No | The camera that the effect began on. |
| effect | [Phaser.Cameras.Scene2D.Effects.Zoom](../class/Phaser.Cameras.Scene2D.Effects.Zoom.md) | No | A reference to the effect instance. |

**Member of:** [Phaser.Cameras.Scene2D.Events](../namespace/Phaser.Cameras.Scene2D.Events.md)
> Source: [src/cameras/2d/events/ZOOM_COMPLETE_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/cameras/2d/events/ZOOM_COMPLETE_EVENT.js#L7)  
Since: 3.3.0

## ZOOM_START


**Description:** The Camera Zoom Start Event.

This event is dispatched by a Camera instance when the Zoom Effect starts.

Listen for it via either of the following:

```js
this.cameras.main.on('camerazoomstart', () => {});
```

or use the constant, to avoid having to remember the correct event string:

```js
this.cameras.main.on(Phaser.Cameras.Scene2D.Events.ZOOM_START, () => {});
```

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| camera | [Phaser.Cameras.Scene2D.Camera](../class/Phaser.Cameras.Scene2D.Camera.md) | No | The camera that the effect began on. |
| effect | [Phaser.Cameras.Scene2D.Effects.Zoom](../class/Phaser.Cameras.Scene2D.Effects.Zoom.md) | No | A reference to the effect instance. |
| duration | number | No | The duration of the effect. |
| zoom | number | No | The destination zoom value. |

**Member of:** [Phaser.Cameras.Scene2D.Events](../namespace/Phaser.Cameras.Scene2D.Events.md)
> Source: [src/cameras/2d/events/ZOOM_START_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/cameras/2d/events/ZOOM_START_EVENT.js#L7)  
Since: 3.3.0
