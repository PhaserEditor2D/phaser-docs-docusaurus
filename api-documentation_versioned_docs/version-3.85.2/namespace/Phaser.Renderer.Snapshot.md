---
visibility: public
slug: renderer-snapshot
title: Phaser.Renderer.Snapshot

seoTitle: Phaser.Renderer.Snapshot
seoDescription: Phaser v3.85.2 Documentation for 
ogImage: 
---




Scope: 
static
> Source: [src/renderer/snapshot/index.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/renderer/snapshot/index.js#L7)  


# Static functions

## Canvas

### \<static> Canvas(sourceCanvas, config)


**Description:**

Takes a snapshot of an area from the current frame displayed by a canvas.

This is then copied to an Image object. When this loads, the results are sent
to the callback provided in the Snapshot Configuration object.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| sourceCanvas | HTMLCanvasElement | No | The canvas to take a snapshot of. |
| config | [Phaser.Types.Renderer.Snapshot.SnapshotState](../typedef/Phaser.Types.Renderer.Snapshot.md#SnapshotState) | No | The snapshot configuration object. |


> Source: [src/renderer/snapshot/CanvasSnapshot.js#L11](https://github.com/phaserjs/phaser/blob/v3.85.2/src/renderer/snapshot/CanvasSnapshot.js#L11)  
Since: 3.0.0


---

## WebGL

### \<static> WebGL(sourceContext, config)


**Description:**

Takes a snapshot of an area from the current frame displayed by a WebGL canvas.

This is then copied to an Image object. When this loads, the results are sent
to the callback provided in the Snapshot Configuration object.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| sourceContext | WebGLRenderingContext | No | The WebGL context to take a snapshot of. |
| config | [Phaser.Types.Renderer.Snapshot.SnapshotState](../typedef/Phaser.Types.Renderer.Snapshot.md#SnapshotState) | No | The snapshot configuration object. |


> Source: [src/renderer/snapshot/WebGLSnapshot.js#L11](https://github.com/phaserjs/phaser/blob/v3.85.2/src/renderer/snapshot/WebGLSnapshot.js#L11)  
Since: 3.0.0


---

