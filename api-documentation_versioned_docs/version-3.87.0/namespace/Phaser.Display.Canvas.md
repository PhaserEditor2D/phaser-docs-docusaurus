---
visibility: public
slug: namespace/display-canvas
title: Phaser.Display.Canvas

seoTitle: Phaser.Display.Canvas
seoDescription: Phaser v3.87.0 Documentation for 
ogImage: 
---




Scope: 
static
> Source: [src/display/canvas/index.js#L7](https://github.com/phaserjs/phaser/blob/v3.87.0/src/display/canvas/index.js#L7)  


# Static functions

- [CanvasInterpolation](../namespace/display-canvas-canvasinterpolation)
- [CanvasPool](../namespace/display-canvas-canvaspool)
- [Smoothing](../namespace/display-canvas-smoothing)
# Static functions

## TouchAction

### \<static> TouchAction(canvas, [value])


**Description:**

Sets the touch-action property on the canvas style. Can be used to disable default browser touch actions.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| canvas | HTMLCanvasElement | No |  | The canvas element to have the style applied to. |
| value | string | Yes | "'none'" | The touch action value to set on the canvas. Set to `none` to disable touch actions. |


**Returns:** HTMLCanvasElement - The canvas element.


> Source: [src/display/canvas/TouchAction.js#L7](https://github.com/phaserjs/phaser/blob/v3.87.0/src/display/canvas/TouchAction.js#L7)  
Since: 3.0.0


---

## UserSelect

### \<static> UserSelect(canvas, [value])


**Description:**

Sets the user-select property on the canvas style. Can be used to disable default browser selection actions.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| canvas | HTMLCanvasElement | No |  | The canvas element to have the style applied to. |
| value | string | Yes | "'none'" | The touch callout value to set on the canvas. Set to `none` to disable touch callouts. |


**Returns:** HTMLCanvasElement - The canvas element.


> Source: [src/display/canvas/UserSelect.js#L7](https://github.com/phaserjs/phaser/blob/v3.87.0/src/display/canvas/UserSelect.js#L7)  
Since: 3.0.0


---

