---
visibility: public
slug: event/renderer-webgl-pipelines-events
title: Renderer.WebGL.Pipelines.Events
description: Phaser.Renderer.WebGL.Pipelines.Events
seoTitle: Renderer.WebGL.Pipelines.Events
seoDescription: Phaser v3.85.2 Documentation for Phaser.Renderer.WebGL.Pipelines.Events
ogImage: 
---

## AFTER_FLUSH


**Description:** The WebGLPipeline After Flush Event.

This event is dispatched by a WebGLPipeline right after it has issued a drawArrays command
and cleared its vertex count.

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| pipeline | [Phaser.Renderer.WebGL.WebGLPipeline](../class/Phaser.Renderer.WebGL.WebGLPipeline.md) | No | The pipeline that has flushed. |
| isPostFlush | boolean | No | Was this flush invoked as part of a post-process, or not? |

**Member of:** [Phaser.Renderer.WebGL.Pipelines.Events](../namespace/Phaser.Renderer.WebGL.Pipelines.Events.md)
> Source: [src/renderer/webgl/pipelines/events/AFTER_FLUSH_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/renderer/webgl/pipelines/events/AFTER_FLUSH_EVENT.js#L7)  
Since: 3.50.0

## BEFORE_FLUSH


**Description:** The WebGLPipeline Before Flush Event.

This event is dispatched by a WebGLPipeline right before it is about to
flush and issue a bufferData and drawArrays command.

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| pipeline | [Phaser.Renderer.WebGL.WebGLPipeline](../class/Phaser.Renderer.WebGL.WebGLPipeline.md) | No | The pipeline that is about to flush. |
| isPostFlush | boolean | No | Was this flush invoked as part of a post-process, or not? |

**Member of:** [Phaser.Renderer.WebGL.Pipelines.Events](../namespace/Phaser.Renderer.WebGL.Pipelines.Events.md)
> Source: [src/renderer/webgl/pipelines/events/BEFORE_FLUSH_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/renderer/webgl/pipelines/events/BEFORE_FLUSH_EVENT.js#L7)  
Since: 3.50.0

## BIND


**Description:** The WebGLPipeline Bind Event.

This event is dispatched by a WebGLPipeline when it is bound by the Pipeline Manager.

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| pipeline | [Phaser.Renderer.WebGL.WebGLPipeline](../class/Phaser.Renderer.WebGL.WebGLPipeline.md) | No | The pipeline that was bound. |
| currentShader | [Phaser.Renderer.WebGL.WebGLShader](../class/Phaser.Renderer.WebGL.WebGLShader.md) | No | The shader that was set as being current. |

**Member of:** [Phaser.Renderer.WebGL.Pipelines.Events](../namespace/Phaser.Renderer.WebGL.Pipelines.Events.md)
> Source: [src/renderer/webgl/pipelines/events/BIND_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/renderer/webgl/pipelines/events/BIND_EVENT.js#L7)  
Since: 3.50.0

## BOOT


**Description:** The WebGLPipeline Boot Event.

This event is dispatched by a WebGLPipeline when it has completed its `boot` phase.

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| pipeline | [Phaser.Renderer.WebGL.WebGLPipeline](../class/Phaser.Renderer.WebGL.WebGLPipeline.md) | No | The pipeline that booted. |

**Member of:** [Phaser.Renderer.WebGL.Pipelines.Events](../namespace/Phaser.Renderer.WebGL.Pipelines.Events.md)
> Source: [src/renderer/webgl/pipelines/events/BOOT_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/renderer/webgl/pipelines/events/BOOT_EVENT.js#L7)  
Since: 3.50.0

## DESTROY


**Description:** The WebGLPipeline Destroy Event.

This event is dispatched by a WebGLPipeline when it is starting its destroy process.

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| pipeline | [Phaser.Renderer.WebGL.WebGLPipeline](../class/Phaser.Renderer.WebGL.WebGLPipeline.md) | No | The pipeline that has flushed. |

**Member of:** [Phaser.Renderer.WebGL.Pipelines.Events](../namespace/Phaser.Renderer.WebGL.Pipelines.Events.md)
> Source: [src/renderer/webgl/pipelines/events/DESTROY_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/renderer/webgl/pipelines/events/DESTROY_EVENT.js#L7)  
Since: 3.50.0

## REBIND


**Description:** The WebGLPipeline ReBind Event.

This event is dispatched by a WebGLPipeline when it is re-bound by the Pipeline Manager.

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| pipeline | [Phaser.Renderer.WebGL.WebGLPipeline](../class/Phaser.Renderer.WebGL.WebGLPipeline.md) | No | The pipeline that was rebound. |
| currentShader | [Phaser.Renderer.WebGL.WebGLShader](../class/Phaser.Renderer.WebGL.WebGLShader.md) | No | The shader that was set as being current. |

**Member of:** [Phaser.Renderer.WebGL.Pipelines.Events](../namespace/Phaser.Renderer.WebGL.Pipelines.Events.md)
> Source: [src/renderer/webgl/pipelines/events/REBIND_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/renderer/webgl/pipelines/events/REBIND_EVENT.js#L7)  
Since: 3.50.0

## RESIZE


**Description:** The WebGLPipeline Resize Event.

This event is dispatched by a WebGLPipeline when it is resized, usually as a result
of the Renderer resizing.

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| width | number | No | The new width of the pipeline. |
| height | number | No | The new height of the pipeline. |
| pipeline | [Phaser.Renderer.WebGL.WebGLPipeline](../class/Phaser.Renderer.WebGL.WebGLPipeline.md) | No | The pipeline that was resized. |

**Member of:** [Phaser.Renderer.WebGL.Pipelines.Events](../namespace/Phaser.Renderer.WebGL.Pipelines.Events.md)
> Source: [src/renderer/webgl/pipelines/events/RESIZE_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/renderer/webgl/pipelines/events/RESIZE_EVENT.js#L7)  
Since: 3.50.0
