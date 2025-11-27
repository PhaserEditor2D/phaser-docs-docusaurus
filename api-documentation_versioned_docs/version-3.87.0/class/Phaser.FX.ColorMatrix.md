---
visibility: public
slug: class/fx-colormatrix
title: ColorMatrix
description: Phaser.FX.ColorMatrix
seoTitle: Phaser.FX.ColorMatrix
seoDescription: Phaser v3.87.0 Documentation for Phaser.FX.ColorMatrix
ogImage: 
---


The ColorMatrix FX Controller.



This FX controller manages the color matrix effect for a Game Object.



The color matrix effect is a visual technique that involves manipulating the colors of an image

or scene using a mathematical matrix. This process can adjust hue, saturation, brightness, and contrast,

allowing developers to create various stylistic appearances or mood settings within the game.

Common applications include simulating different lighting conditions, applying color filters,

or achieving a specific visual style.



A ColorMatrix effect is added to a Game Object via the FX component:



```js

const sprite = this.add.sprite();



sprite.preFX.addColorMatrix();

sprite.postFX.addColorMatrix();

```

**Constructor**

`new ColorMatrix(gameObject)`

**Parameters**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| gameObject | [Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md) | No | A reference to the Game Object that has this fx. |

---


**Scope**: static


**Extends**

> [Phaser.Display.ColorMatrix](../class/Phaser.Display.ColorMatrix.md)  



> Source: [src/fx/ColorMatrix.js#L11](https://github.com/phaserjs/phaser/blob/v3.87.0/src/fx/ColorMatrix.js#L11)  
Since: 3.60.0

# Public Members

## active

### active: boolean


**Description:**

Toggle this boolean to enable or disable this effect,

without removing and adding it from the Game Object.


> Source: [src/fx/ColorMatrix.js#L68](https://github.com/phaserjs/phaser/blob/v3.87.0/src/fx/ColorMatrix.js#L68)  
Since: 3.60.0


---

## alpha

### alpha: number


**Description:**

The value that determines how much of the original color is used

when mixing the colors. A value between 0 (all original) and 1 (all final)


**Inherits:** [Phaser.Display.ColorMatrix#alpha](../class/Phaser.Display.ColorMatrix.md#alpha)


> Source: [src/display/ColorMatrix.js#L40](https://github.com/phaserjs/phaser/blob/v3.87.0/src/display/ColorMatrix.js#L40)  
Since: 3.50.0


---

## gameObject

### gameObject: [Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md)


**Description:**

A reference to the Game Object that owns this effect.


> Source: [src/fx/ColorMatrix.js#L59](https://github.com/phaserjs/phaser/blob/v3.87.0/src/fx/ColorMatrix.js#L59)  
Since: 3.60.0


---

## type

### type: number


**Description:**

The FX_CONST type of this effect.


> Source: [src/fx/ColorMatrix.js#L50](https://github.com/phaserjs/phaser/blob/v3.87.0/src/fx/ColorMatrix.js#L50)  
Since: 3.60.0


---

# Private Members

## _dirty

### _dirty: boolean


**Description:**

Is the ColorMatrix array dirty?


**Access:** private


**Inherits:** [Phaser.Display.ColorMatrix#_dirty](../class/Phaser.Display.ColorMatrix.md#_dirty)


> Source: [src/display/ColorMatrix.js#L50](https://github.com/phaserjs/phaser/blob/v3.87.0/src/display/ColorMatrix.js#L50)  
Since: 3.50.0


---

## _matrix

### _matrix: Float32Array


**Description:**

Internal ColorMatrix array.


**Access:** private


**Inherits:** [Phaser.Display.ColorMatrix#_matrix](../class/Phaser.Display.ColorMatrix.md#_matrix)


> Source: [src/display/ColorMatrix.js#L30](https://github.com/phaserjs/phaser/blob/v3.87.0/src/display/ColorMatrix.js#L30)  
Since: 3.50.0


---

## data

### data: Float32Array


**Description:**

The matrix data as a Float32Array.



Returned by the `getData` method.


**Access:** private


**Inherits:** [Phaser.Display.ColorMatrix#data](../class/Phaser.Display.ColorMatrix.md#data)


> Source: [src/display/ColorMatrix.js#L60](https://github.com/phaserjs/phaser/blob/v3.87.0/src/display/ColorMatrix.js#L60)  
Since: 3.50.0


---

# Public Methods

## blackWhite

### \<instance> blackWhite([multiply])


**Description:**

Sets this ColorMatrix to be black and white.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| multiply | boolean | Yes | false | Multiply the resulting ColorMatrix (`true`), or set it (`false`) ? |


**Returns:** [Phaser.FX.ColorMatrix](../class/Phaser.FX.ColorMatrix.md) - This ColorMatrix instance.


**Inherits:** [Phaser.Display.ColorMatrix#blackWhite](../class/Phaser.Display.ColorMatrix.md#blackWhite)


> Source: [src/display/ColorMatrix.js#L271](https://github.com/phaserjs/phaser/blob/v3.87.0/src/display/ColorMatrix.js#L271)  
Since: 3.50.0


---

## brightness

### \<instance> brightness([value], [multiply])


**Description:**

Changes the brightness of this ColorMatrix by the given amount.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| value | number | Yes | 0 | The amount of brightness to apply to this ColorMatrix. Between 0 (black) and 1. |
| multiply | boolean | Yes | false | Multiply the resulting ColorMatrix (`true`), or set it (`false`) ? |


**Returns:** [Phaser.FX.ColorMatrix](../class/Phaser.FX.ColorMatrix.md) - This ColorMatrix instance.


**Inherits:** [Phaser.Display.ColorMatrix#brightness](../class/Phaser.Display.ColorMatrix.md#brightness)


> Source: [src/display/ColorMatrix.js#L150](https://github.com/phaserjs/phaser/blob/v3.87.0/src/display/ColorMatrix.js#L150)  
Since: 3.50.0


---

## brown

### \<instance> brown([multiply])


**Description:**

Applies a brown tone to this ColorMatrix.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| multiply | boolean | Yes | false | Multiply the resulting ColorMatrix (`true`), or set it (`false`) ? |


**Returns:** [Phaser.FX.ColorMatrix](../class/Phaser.FX.ColorMatrix.md) - This ColorMatrix instance.


**Inherits:** [Phaser.Display.ColorMatrix#brown](../class/Phaser.Display.ColorMatrix.md#brown)


> Source: [src/display/ColorMatrix.js#L407](https://github.com/phaserjs/phaser/blob/v3.87.0/src/display/ColorMatrix.js#L407)  
Since: 3.50.0


---

## contrast

### \<instance> contrast([value], [multiply])


**Description:**

Change the contrast of this ColorMatrix by the amount given.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| value | number | Yes | 0 | The amount of contrast to apply to this ColorMatrix. |
| multiply | boolean | Yes | false | Multiply the resulting ColorMatrix (`true`), or set it (`false`) ? |


**Returns:** [Phaser.FX.ColorMatrix](../class/Phaser.FX.ColorMatrix.md) - This ColorMatrix instance.


**Inherits:** [Phaser.Display.ColorMatrix#contrast](../class/Phaser.Display.ColorMatrix.md#contrast)


> Source: [src/display/ColorMatrix.js#L288](https://github.com/phaserjs/phaser/blob/v3.87.0/src/display/ColorMatrix.js#L288)  
Since: 3.50.0


---

## desaturateLuminance

### \<instance> desaturateLuminance([multiply])


**Description:**

Apply a desaturated luminance to this ColorMatrix.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| multiply | boolean | Yes | false | Multiply the resulting ColorMatrix (`true`), or set it (`false`) ? |


**Returns:** [Phaser.FX.ColorMatrix](../class/Phaser.FX.ColorMatrix.md) - This ColorMatrix instance.


**Inherits:** [Phaser.Display.ColorMatrix#desaturateLuminance](../class/Phaser.Display.ColorMatrix.md#desaturateLuminance)


> Source: [src/display/ColorMatrix.js#L332](https://github.com/phaserjs/phaser/blob/v3.87.0/src/display/ColorMatrix.js#L332)  
Since: 3.50.0


---

## getData

### \<instance> getData()


**Description:**

Gets the ColorMatrix as a Float32Array.



Can be used directly as a 1fv shader uniform value.


**Returns:** Float32Array - The ColorMatrix as a Float32Array.


**Inherits:** [Phaser.Display.ColorMatrix#getData](../class/Phaser.Display.ColorMatrix.md#getData)


> Source: [src/display/ColorMatrix.js#L121](https://github.com/phaserjs/phaser/blob/v3.87.0/src/display/ColorMatrix.js#L121)  
Since: 3.50.0


---

## grayscale

### \<instance> grayscale([value], [multiply])


**Description:**

Sets this ColorMatrix to be grayscale.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| value | number | Yes | 1 | The grayscale scale (0 is black). |
| multiply | boolean | Yes | false | Multiply the resulting ColorMatrix (`true`), or set it (`false`) ? |


**Returns:** [Phaser.FX.ColorMatrix](../class/Phaser.FX.ColorMatrix.md) - This ColorMatrix instance.


**Inherits:** [Phaser.Display.ColorMatrix#grayscale](../class/Phaser.Display.ColorMatrix.md#grayscale)


> Source: [src/display/ColorMatrix.js#L252](https://github.com/phaserjs/phaser/blob/v3.87.0/src/display/ColorMatrix.js#L252)  
Since: 3.50.0


---

## hue

### \<instance> hue([rotation], [multiply])


**Description:**

Rotates the hues of this ColorMatrix by the value given.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| rotation | number | Yes | 0 | The amount of hue rotation to apply to this ColorMatrix, in degrees. |
| multiply | boolean | Yes | false | Multiply the resulting ColorMatrix (`true`), or set it (`false`) ? |


**Returns:** [Phaser.FX.ColorMatrix](../class/Phaser.FX.ColorMatrix.md) - This ColorMatrix instance.


**Inherits:** [Phaser.Display.ColorMatrix#hue](../class/Phaser.Display.ColorMatrix.md#hue)


> Source: [src/display/ColorMatrix.js#L220](https://github.com/phaserjs/phaser/blob/v3.87.0/src/display/ColorMatrix.js#L220)  
Since: 3.50.0


---

## kodachrome

### \<instance> kodachrome([multiply])


**Description:**

Applies a kodachrome color effect to this ColorMatrix.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| multiply | boolean | Yes | false | Multiply the resulting ColorMatrix (`true`), or set it (`false`) ? |


**Returns:** [Phaser.FX.ColorMatrix](../class/Phaser.FX.ColorMatrix.md) - This ColorMatrix instance.


**Inherits:** [Phaser.Display.ColorMatrix#kodachrome](../class/Phaser.Display.ColorMatrix.md#kodachrome)


> Source: [src/display/ColorMatrix.js#L441](https://github.com/phaserjs/phaser/blob/v3.87.0/src/display/ColorMatrix.js#L441)  
Since: 3.50.0


---

## lsd

### \<instance> lsd([multiply])


**Description:**

Applies a trippy color tone to this ColorMatrix.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| multiply | boolean | Yes | false | Multiply the resulting ColorMatrix (`true`), or set it (`false`) ? |


**Returns:** [Phaser.FX.ColorMatrix](../class/Phaser.FX.ColorMatrix.md) - This ColorMatrix instance.


**Inherits:** [Phaser.Display.ColorMatrix#lsd](../class/Phaser.Display.ColorMatrix.md#lsd)


> Source: [src/display/ColorMatrix.js#L390](https://github.com/phaserjs/phaser/blob/v3.87.0/src/display/ColorMatrix.js#L390)  
Since: 3.50.0


---

## multiply

### \<instance> multiply(a, [multiply])


**Description:**

Multiplies the two given matrices.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| a | Array.\<number> | No |  | The 5x4 array to multiply with ColorMatrix._matrix. |
| multiply | boolean | Yes | false | Multiply the resulting ColorMatrix (`true`), or set it (`false`) ? |


**Returns:** [Phaser.FX.ColorMatrix](../class/Phaser.FX.ColorMatrix.md) - This ColorMatrix instance.


**Inherits:** [Phaser.Display.ColorMatrix#multiply](../class/Phaser.Display.ColorMatrix.md#multiply)


> Source: [src/display/ColorMatrix.js#L509](https://github.com/phaserjs/phaser/blob/v3.87.0/src/display/ColorMatrix.js#L509)  
Since: 3.50.0


---

## negative

### \<instance> negative([multiply])


**Description:**

Converts this ColorMatrix to have negative values.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| multiply | boolean | Yes | false | Multiply the resulting ColorMatrix (`true`), or set it (`false`) ? |


**Returns:** [Phaser.FX.ColorMatrix](../class/Phaser.FX.ColorMatrix.md) - This ColorMatrix instance.


**Inherits:** [Phaser.Display.ColorMatrix#negative](../class/Phaser.Display.ColorMatrix.md#negative)


> Source: [src/display/ColorMatrix.js#L315](https://github.com/phaserjs/phaser/blob/v3.87.0/src/display/ColorMatrix.js#L315)  
Since: 3.50.0


---

## night

### \<instance> night([intensity], [multiply])


**Description:**

Applies a night vision tone to this ColorMatrix.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| intensity | number | Yes | 0.1 | The intensity of this effect. |
| multiply | boolean | Yes | false | Multiply the resulting ColorMatrix (`true`), or set it (`false`) ? |


**Returns:** [Phaser.FX.ColorMatrix](../class/Phaser.FX.ColorMatrix.md) - This ColorMatrix instance.


**Inherits:** [Phaser.Display.ColorMatrix#night](../class/Phaser.Display.ColorMatrix.md#night)


> Source: [src/display/ColorMatrix.js#L366](https://github.com/phaserjs/phaser/blob/v3.87.0/src/display/ColorMatrix.js#L366)  
Since: 3.50.0


---

## polaroid

### \<instance> polaroid([multiply])


**Description:**

Applies a polaroid color effect to this ColorMatrix.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| multiply | boolean | Yes | false | Multiply the resulting ColorMatrix (`true`), or set it (`false`) ? |


**Returns:** [Phaser.FX.ColorMatrix](../class/Phaser.FX.ColorMatrix.md) - This ColorMatrix instance.


**Inherits:** [Phaser.Display.ColorMatrix#polaroid](../class/Phaser.Display.ColorMatrix.md#polaroid)


> Source: [src/display/ColorMatrix.js#L475](https://github.com/phaserjs/phaser/blob/v3.87.0/src/display/ColorMatrix.js#L475)  
Since: 3.50.0


---

## reset

### \<instance> reset()


**Description:**

Resets the ColorMatrix to default values and also resets

the `alpha` property back to 1.


**Returns:** [Phaser.FX.ColorMatrix](../class/Phaser.FX.ColorMatrix.md) - This ColorMatrix instance.


**Inherits:** [Phaser.Display.ColorMatrix#reset](../class/Phaser.Display.ColorMatrix.md#reset)


> Source: [src/display/ColorMatrix.js#L94](https://github.com/phaserjs/phaser/blob/v3.87.0/src/display/ColorMatrix.js#L94)  
Since: 3.50.0


---

## saturate

### \<instance> saturate([value], [multiply])


**Description:**

Changes the saturation of this ColorMatrix by the given amount.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| value | number | Yes | 0 | The amount of saturation to apply to this ColorMatrix. |
| multiply | boolean | Yes | false | Multiply the resulting ColorMatrix (`true`), or set it (`false`) ? |


**Returns:** [Phaser.FX.ColorMatrix](../class/Phaser.FX.ColorMatrix.md) - This ColorMatrix instance.


**Inherits:** [Phaser.Display.ColorMatrix#saturate](../class/Phaser.Display.ColorMatrix.md#saturate)


> Source: [src/display/ColorMatrix.js#L176](https://github.com/phaserjs/phaser/blob/v3.87.0/src/display/ColorMatrix.js#L176)  
Since: 3.50.0


---

## saturation

### \<instance> saturation([multiply])


**Description:**

Desaturates this ColorMatrix (removes color from it).

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| multiply | boolean | Yes | false | Multiply the resulting ColorMatrix (`true`), or set it (`false`) ? |


**Returns:** [Phaser.FX.ColorMatrix](../class/Phaser.FX.ColorMatrix.md) - This ColorMatrix instance.


**Inherits:** [Phaser.Display.ColorMatrix#saturation](../class/Phaser.Display.ColorMatrix.md#saturation)


> Source: [src/display/ColorMatrix.js#L203](https://github.com/phaserjs/phaser/blob/v3.87.0/src/display/ColorMatrix.js#L203)  
Since: 3.50.0


---

## sepia

### \<instance> sepia([multiply])


**Description:**

Applies a sepia tone to this ColorMatrix.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| multiply | boolean | Yes | false | Multiply the resulting ColorMatrix (`true`), or set it (`false`) ? |


**Returns:** [Phaser.FX.ColorMatrix](../class/Phaser.FX.ColorMatrix.md) - This ColorMatrix instance.


**Inherits:** [Phaser.Display.ColorMatrix#sepia](../class/Phaser.Display.ColorMatrix.md#sepia)


> Source: [src/display/ColorMatrix.js#L349](https://github.com/phaserjs/phaser/blob/v3.87.0/src/display/ColorMatrix.js#L349)  
Since: 3.50.0


---

## set

### \<instance> set(value)


**Description:**

Sets this ColorMatrix from the given array of color values.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| value | Array.\<number> \| Float32Array | No | The ColorMatrix values to set. Must have 20 elements. |


**Returns:** [Phaser.FX.ColorMatrix](../class/Phaser.FX.ColorMatrix.md) - This ColorMatrix instance.


**Inherits:** [Phaser.Display.ColorMatrix#set](../class/Phaser.Display.ColorMatrix.md#set)


> Source: [src/display/ColorMatrix.js#L75](https://github.com/phaserjs/phaser/blob/v3.87.0/src/display/ColorMatrix.js#L75)  
Since: 3.50.0


---

## shiftToBGR

### \<instance> shiftToBGR([multiply])


**Description:**

Shifts the values of this ColorMatrix into BGR order.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| multiply | boolean | Yes | false | Multiply the resulting ColorMatrix (`true`), or set it (`false`) ? |


**Returns:** [Phaser.FX.ColorMatrix](../class/Phaser.FX.ColorMatrix.md) - This ColorMatrix instance.


**Inherits:** [Phaser.Display.ColorMatrix#shiftToBGR](../class/Phaser.Display.ColorMatrix.md#shiftToBGR)


> Source: [src/display/ColorMatrix.js#L492](https://github.com/phaserjs/phaser/blob/v3.87.0/src/display/ColorMatrix.js#L492)  
Since: 3.50.0


---

## technicolor

### \<instance> technicolor([multiply])


**Description:**

Applies a technicolor color effect to this ColorMatrix.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| multiply | boolean | Yes | false | Multiply the resulting ColorMatrix (`true`), or set it (`false`) ? |


**Returns:** [Phaser.FX.ColorMatrix](../class/Phaser.FX.ColorMatrix.md) - This ColorMatrix instance.


**Inherits:** [Phaser.Display.ColorMatrix#technicolor](../class/Phaser.Display.ColorMatrix.md#technicolor)


> Source: [src/display/ColorMatrix.js#L458](https://github.com/phaserjs/phaser/blob/v3.87.0/src/display/ColorMatrix.js#L458)  
Since: 3.50.0


---

## vintagePinhole

### \<instance> vintagePinhole([multiply])


**Description:**

Applies a vintage pinhole color effect to this ColorMatrix.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| multiply | boolean | Yes | false | Multiply the resulting ColorMatrix (`true`), or set it (`false`) ? |


**Returns:** [Phaser.FX.ColorMatrix](../class/Phaser.FX.ColorMatrix.md) - This ColorMatrix instance.


**Inherits:** [Phaser.Display.ColorMatrix#vintagePinhole](../class/Phaser.Display.ColorMatrix.md#vintagePinhole)


> Source: [src/display/ColorMatrix.js#L424](https://github.com/phaserjs/phaser/blob/v3.87.0/src/display/ColorMatrix.js#L424)  
Since: 3.50.0


---

