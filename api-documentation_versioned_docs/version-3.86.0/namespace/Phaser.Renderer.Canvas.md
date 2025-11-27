---
visibility: public
slug: namespace/renderer-canvas
title: Phaser.Renderer.Canvas

seoTitle: Phaser.Renderer.Canvas
seoDescription: Phaser v3.86.0 Documentation for 
ogImage: 
---




Scope: 
static
> Source: [src/renderer/canvas/index.js#L7](https://github.com/phaserjs/phaser/blob/v3.86.0/src/renderer/canvas/index.js#L7)  


# Static functions

- [CanvasRenderer](../class/renderer-canvas-canvasrenderer)
# Static functions

## GetBlendModes

### \<static> GetBlendModes()


**Description:**

Returns an array which maps the default blend modes to supported Canvas blend modes.



If the browser doesn't support a blend mode, it will default to the normal `source-over` blend mode.


**Returns:** array - Which Canvas blend mode corresponds to which default Phaser blend mode.


> Source: [src/renderer/canvas/utils/GetBlendModes.js#L10](https://github.com/phaserjs/phaser/blob/v3.86.0/src/renderer/canvas/utils/GetBlendModes.js#L10)  
Since: 3.0.0


---

## SetTransform

### \<static> SetTransform(renderer, ctx, src, camera, [parentMatrix])


**Description:**

Takes a reference to the Canvas Renderer, a Canvas Rendering Context, a Game Object, a Camera and a parent matrix

and then performs the following steps:



1. Checks the alpha of the source combined with the Camera alpha. If 0 or less it aborts.

2. Takes the Camera and Game Object matrix and multiplies them, combined with the parent matrix if given.

3. Sets the blend mode of the context to be that used by the Game Object.

4. Sets the alpha value of the context to be that used by the Game Object combined with the Camera.

5. Saves the context state.

6. Sets the final matrix values into the context via setTransform.

7. If the Game Object has a texture frame, imageSmoothingEnabled is set based on frame.source.scaleMode.

8. If the Game Object does not have a texture frame, imageSmoothingEnabled is set based on Renderer.antialias.



This function is only meant to be used internally. Most of the Canvas Renderer classes use it.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| renderer | [Phaser.Renderer.Canvas.CanvasRenderer](../class/Phaser.Renderer.Canvas.CanvasRenderer.md) | No | A reference to the current active Canvas renderer. |
| ctx | CanvasRenderingContext2D | No | The canvas context to set the transform on. |
| src | [Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md) | No | The Game Object being rendered. Can be any type that extends the base class. |
| camera | [Phaser.Cameras.Scene2D.Camera](../class/Phaser.Cameras.Scene2D.Camera.md) | No | The Camera that is rendering the Game Object. |
| parentMatrix | [Phaser.GameObjects.Components.TransformMatrix](../class/Phaser.GameObjects.Components.TransformMatrix.md) | Yes | A parent transform matrix to apply to the Game Object before rendering. |


**Returns:** boolean - `true` if the Game Object context was set, otherwise `false`.


> Source: [src/renderer/canvas/utils/SetTransform.js#L9](https://github.com/phaserjs/phaser/blob/v3.86.0/src/renderer/canvas/utils/SetTransform.js#L9)  
Since: 3.12.0


---

