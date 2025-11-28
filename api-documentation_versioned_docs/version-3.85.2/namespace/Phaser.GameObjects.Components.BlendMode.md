---
visibility: public
slug: gameobjects-components-blendmode
title: Phaser.GameObjects.Components.BlendMode

seoTitle: Phaser.GameObjects.Components.BlendMode
seoDescription: Phaser v3.85.2 Documentation for 
ogImage: 
---




Scope: 
static
> Source: [src/gameobjects/components/BlendMode.js#L9](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/BlendMode.js#L9)  
Since: 3.0.0

# Static functions

## blendMode

### blendMode: [Phaser.BlendModes](../namespace/Phaser.BlendModes.md), string, number


**Description:**

Sets the Blend Mode being used by this Game Object.

This can be a const, such as `Phaser.BlendModes.SCREEN`, or an integer, such as 4 (for Overlay)

Under WebGL only the following Blend Modes are available:

* NORMAL
* ADD
* MULTIPLY
* SCREEN
* ERASE

Canvas has more available depending on browser support.

You can also create your own custom Blend Modes in WebGL.

Blend modes have different effects under Canvas and WebGL, and from browser to browser, depending
on support. Blend Modes also cause a WebGL batch flush should it encounter a new blend mode. For these
reasons try to be careful about the construction of your Scene and the frequency of which blend modes
are used.


> Source: [src/gameobjects/components/BlendMode.js#L30](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/BlendMode.js#L30)  
Since: 3.0.0


---

## _blendMode

### _blendMode: number


**Description:**

Private internal value. Holds the current blend mode.


**Access:** private


> Source: [src/gameobjects/components/BlendMode.js#L19](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/BlendMode.js#L19)  
Since: 3.0.0


---

# Static functions

## setBlendMode

### \<instance> setBlendMode(value)


**Description:**

Sets the Blend Mode being used by this Game Object.

This can be a const, such as `Phaser.BlendModes.SCREEN`, or an integer, such as 4 (for Overlay)

Under WebGL only the following Blend Modes are available:

* NORMAL
* ADD
* MULTIPLY
* SCREEN
* ERASE (only works when rendering to a framebuffer, like a Render Texture)

Canvas has more available depending on browser support.

You can also create your own custom Blend Modes in WebGL.

Blend modes have different effects under Canvas and WebGL, and from browser to browser, depending
on support. Blend Modes also cause a WebGL batch flush should it encounter a new blend mode. For these
reasons try to be careful about the construction of your Scene and the frequency in which blend modes
are used.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| value | string \| [Phaser.BlendModes](../namespace/Phaser.BlendModes.md) | number | No | The BlendMode value. Either a string, a CONST or a number. |


**Returns:** [Phaser.GameObjects.Components.BlendMode](../namespace/Phaser.GameObjects.Components.BlendMode.md) - This Game Object instance.


> Source: [src/gameobjects/components/BlendMode.js#L80](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/BlendMode.js#L80)  
Since: 3.0.0


---

