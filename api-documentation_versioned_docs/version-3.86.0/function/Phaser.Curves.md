---
visibility: public
slug: function/curves
title: Phaser.Curves

seoTitle: Phaser.Curves
seoDescription: Phaser v3.86.0 Documentation for Phaser.Curves
ogImage: 
---

# Phaser.Curves.CubicBezier

## fromJSON

### \<static> fromJSON(data)


**Description:**

Generates a curve from a JSON object.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| data | [Phaser.Types.Curves.JSONCurve](../typedef/Phaser.Types.Curves.md#JSONCurve) | No | The JSON object containing this curve data. |


**Returns:** [Phaser.Curves.CubicBezier](../class/Phaser.Curves.CubicBezier.md) - The curve generated from the JSON object.


> Source: [src/curves/CubicBezierCurve.js#L199](https://github.com/phaserjs/phaser/blob/v3.86.0/src/curves/CubicBezierCurve.js#L199)  
Since: 3.0.0


# Phaser.Curves.Ellipse

## fromJSON

### \<static> fromJSON(data)


**Description:**

Creates a curve from the provided Ellipse Curve Configuration object.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| data | [Phaser.Types.Curves.JSONEllipseCurve](../typedef/Phaser.Types.Curves.md#JSONEllipseCurve) | No | The JSON object containing this curve data. |


**Returns:** [Phaser.Curves.Ellipse](../class/Phaser.Curves.Ellipse.md) - The ellipse curve constructed from the configuration object.


> Source: [src/curves/EllipseCurve.js#L603](https://github.com/phaserjs/phaser/blob/v3.86.0/src/curves/EllipseCurve.js#L603)  
Since: 3.0.0


# Phaser.Curves.Line

## fromJSON

### \<static> fromJSON(data)


**Description:**

Configures this line from a JSON representation.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| data | [Phaser.Types.Curves.JSONCurve](../typedef/Phaser.Types.Curves.md#JSONCurve) | No | The JSON object containing this curve data. |


**Returns:** [Phaser.Curves.Line](../class/Phaser.Curves.Line.md) - A new LineCurve object.


> Source: [src/curves/LineCurve.js#L280](https://github.com/phaserjs/phaser/blob/v3.86.0/src/curves/LineCurve.js#L280)  
Since: 3.0.0


# Phaser.Curves.QuadraticBezier

## fromJSON

### \<static> fromJSON(data)


**Description:**

Creates a curve from a JSON object, e. g. created by `toJSON`.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| data | [Phaser.Types.Curves.JSONCurve](../typedef/Phaser.Types.Curves.md#JSONCurve) | No | The JSON object containing this curve data. |


**Returns:** [Phaser.Curves.QuadraticBezier](../class/Phaser.Curves.QuadraticBezier.md) - The created curve instance.


> Source: [src/curves/QuadraticBezierCurve.js#L190](https://github.com/phaserjs/phaser/blob/v3.86.0/src/curves/QuadraticBezierCurve.js#L190)  
Since: 3.2.0


# Phaser.Curves.Spline

## fromJSON

### \<static> fromJSON(data)


**Description:**

Imports a JSON object containing this curve data.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| data | [Phaser.Types.Curves.JSONCurve](../typedef/Phaser.Types.Curves.md#JSONCurve) | No | The JSON object containing this curve data. |


**Returns:** [Phaser.Curves.Spline](../class/Phaser.Curves.Spline.md) - The spline curve created.


> Source: [src/curves/SplineCurve.js#L204](https://github.com/phaserjs/phaser/blob/v3.86.0/src/curves/SplineCurve.js#L204)  
Since: 3.0.0

