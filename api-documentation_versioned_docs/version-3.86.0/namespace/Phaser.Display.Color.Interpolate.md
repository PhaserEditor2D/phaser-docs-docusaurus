---
visibility: public
slug: display-color-interpolate
title: Phaser.Display.Color.Interpolate

seoTitle: Phaser.Display.Color.Interpolate
seoDescription: Phaser v3.86.0 Documentation for 
ogImage: 
---




Scope: 
static
> Source: [src/display/color/Interpolate.js#L9](https://github.com/phaserjs/phaser/blob/v3.86.0/src/display/color/Interpolate.js#L9)  
Since: 3.0.0

# Static functions

## ColorWithColor

### \<static> ColorWithColor(color1, color2, [length], [index])


**Description:**

Interpolates between the two given color objects over the length supplied.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| color1 | [Phaser.Display.Color](../namespace/Phaser.Display.Color.md) | No |  | The first Color object. |
| color2 | [Phaser.Display.Color](../namespace/Phaser.Display.Color.md) | No |  | The second Color object. |
| length | number | Yes | 100 | Distance to interpolate over. |
| index | number | Yes | 0 | Index to start from. |


**Returns:** [Phaser.Types.Display.ColorObject](../typedef/Phaser.Types.Display.md#ColorObject) - An object containing the interpolated color values.


> Source: [src/display/color/Interpolate.js#L48](https://github.com/phaserjs/phaser/blob/v3.86.0/src/display/color/Interpolate.js#L48)  
Since: 3.0.0


---

## ColorWithRGB

### \<static> ColorWithRGB(color1, r, g, b, [length], [index])


**Description:**

Interpolates between the Color object and color values over the length supplied.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| color1 | [Phaser.Display.Color](../namespace/Phaser.Display.Color.md) | No |  | The first Color object. |
| r | number | No |  | Red value. |
| g | number | No |  | Blue value. |
| b | number | No |  | Green value. |
| length | number | Yes | 100 | Distance to interpolate over. |
| index | number | Yes | 0 | Index to start from. |


**Returns:** [Phaser.Types.Display.ColorObject](../typedef/Phaser.Types.Display.md#ColorObject) - An object containing the interpolated color values.


> Source: [src/display/color/Interpolate.js#L71](https://github.com/phaserjs/phaser/blob/v3.86.0/src/display/color/Interpolate.js#L71)  
Since: 3.0.0


---

## RGBWithRGB

### \<static> RGBWithRGB(r1, g1, b1, r2, g2, b2, [length], [index])


**Description:**

Interpolates between the two given color ranges over the length supplied.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| r1 | number | No |  | Red value. |
| g1 | number | No |  | Blue value. |
| b1 | number | No |  | Green value. |
| r2 | number | No |  | Red value. |
| g2 | number | No |  | Blue value. |
| b2 | number | No |  | Green value. |
| length | number | Yes | 100 | Distance to interpolate over. |
| index | number | Yes | 0 | Index to start from. |


**Returns:** [Phaser.Types.Display.ColorObject](../typedef/Phaser.Types.Display.md#ColorObject) - An object containing the interpolated color values.


> Source: [src/display/color/Interpolate.js#L15](https://github.com/phaserjs/phaser/blob/v3.86.0/src/display/color/Interpolate.js#L15)  
Since: 3.0.0


---

