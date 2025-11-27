---
visibility: public
slug: typedef/types-gameobjects-graphics
title: Types.GameObjects.Graphics
description: Phaser.Types.GameObjects.Graphics
seoTitle: Types.GameObjects.Graphics
seoDescription: Phaser v3.86.0 Documentation for Phaser.Types.GameObjects.Graphics
ogImage: 
---

## FillStyle

### \<static> FillStyle


Graphics fill style settings.

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| color | number | Yes | The fill color. |
| alpha | number | Yes | The fill alpha. |

**Type**: object

**Member of**: Phaser.Types.GameObjects.Graphics
> Source: [src/gameobjects/graphics/typedefs/FillStyle.js#L1](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/graphics/typedefs/FillStyle.js#L1)  
Since: 3.0.0

---

## LineStyle

### \<static> LineStyle


Graphics line style (or stroke style) settings.

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| width | number | Yes | The stroke width. |
| color | number | Yes | The stroke color. |
| alpha | number | Yes | The stroke alpha. |

**Type**: object

**Member of**: Phaser.Types.GameObjects.Graphics
> Source: [src/gameobjects/graphics/typedefs/LineStyle.js#L1](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/graphics/typedefs/LineStyle.js#L1)  
Since: 3.0.0

---

## Options

### \<static> Options


Options for the Graphics Game Object.

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| x | number | Yes | The x coordinate of the Graphics. |
| y | number | Yes | The y coordinate of the Graphics. |

**Type**: object

**Member of**: Phaser.Types.GameObjects.Graphics
> Source: [src/gameobjects/graphics/typedefs/Options.js#L1](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/graphics/typedefs/Options.js#L1)  
Since: 3.0.0

---

## RoundedRectRadius

### \<static> RoundedRectRadius

| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| tl | number | Yes | 20 | Top left corner radius. Draw concave arc if this radius is negative. |
| tr | number | Yes | 20 | Top right corner radius. Draw concave arc if this radius is negative. |
| br | number | Yes | 20 | Bottom right corner radius. Draw concave arc if this radius is negative. |
| bl | number | Yes | 20 | Bottom left corner radius. Draw concave arc if this radius is negative. |

**Type**: object

**Member of**: Phaser.Types.GameObjects.Graphics
> Source: [src/gameobjects/graphics/typedefs/RoundedRectRadius.js#L1](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/graphics/typedefs/RoundedRectRadius.js#L1)  
Since: 3.11.0

---

## Styles

### \<static> Styles


Graphics style settings.

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| lineStyle | [Phaser.Types.GameObjects.Graphics.LineStyle](../typedef/Phaser.Types.GameObjects.Graphics.md#LineStyle) | Yes | The style applied to shape outlines. |
| fillStyle | [Phaser.Types.GameObjects.Graphics.FillStyle](../typedef/Phaser.Types.GameObjects.Graphics.md#FillStyle) | Yes | The style applied to shape areas. |

**Type**: object

**Member of**: Phaser.Types.GameObjects.Graphics
> Source: [src/gameobjects/graphics/typedefs/Styles.js#L1](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/graphics/typedefs/Styles.js#L1)  
Since: 3.0.0

---
