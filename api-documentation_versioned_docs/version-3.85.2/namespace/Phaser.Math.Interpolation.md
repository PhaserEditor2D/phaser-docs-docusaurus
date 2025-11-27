---
visibility: public
slug: namespace/math-interpolation
title: Phaser.Math.Interpolation

seoTitle: Phaser.Math.Interpolation
seoDescription: Phaser v3.85.2 Documentation for 
ogImage: 
---




Scope: 
static
> Source: [src/math/interpolation/index.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/math/interpolation/index.js#L7)  


# Static functions

## Bezier

### \<static> Bezier(v, k)


**Description:**

A bezier interpolation method.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| v | Array.\<number> | No | The input array of values to interpolate between. |
| k | number | No | The percentage of interpolation, between 0 and 1. |


**Returns:** number - The interpolated value.


> Source: [src/math/interpolation/BezierInterpolation.js#L9](https://github.com/phaserjs/phaser/blob/v3.85.2/src/math/interpolation/BezierInterpolation.js#L9)  
Since: 3.0.0


---

## CatmullRom

### \<static> CatmullRom(v, k)


**Description:**

A Catmull-Rom interpolation method.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| v | Array.\<number> | No | The input array of values to interpolate between. |
| k | number | No | The percentage of interpolation, between 0 and 1. |


**Returns:** number - The interpolated value.


> Source: [src/math/interpolation/CatmullRomInterpolation.js#L9](https://github.com/phaserjs/phaser/blob/v3.85.2/src/math/interpolation/CatmullRomInterpolation.js#L9)  
Since: 3.0.0


---

## CubicBezier

### \<static> CubicBezier(t, p0, p1, p2, p3)


**Description:**

A cubic bezier interpolation method.

[https://medium.com/@adrian_cooney/bezier-interpolation-13b68563313a](https://medium.com/@adrian_cooney/bezier-interpolation-13b68563313a)

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| t | number | No | The percentage of interpolation, between 0 and 1. |
| p0 | number | No | The start point. |
| p1 | number | No | The first control point. |
| p2 | number | No | The second control point. |
| p3 | number | No | The end point. |


**Returns:** number - The interpolated value.


> Source: [src/math/interpolation/CubicBezierInterpolation.js#L43](https://github.com/phaserjs/phaser/blob/v3.85.2/src/math/interpolation/CubicBezierInterpolation.js#L43)  
Since: 3.0.0


---

## Linear

### \<static> Linear(v, k)


**Description:**

A linear interpolation method.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| v | Array.\<number> | No | The input array of values to interpolate between. |
| k | number | No | The percentage of interpolation, between 0 and 1. |


**Returns:** number - The interpolated value.


> Source: [src/math/interpolation/LinearInterpolation.js#L9](https://github.com/phaserjs/phaser/blob/v3.85.2/src/math/interpolation/LinearInterpolation.js#L9)  
Since: 3.0.0


---

## QuadraticBezier

### \<static> QuadraticBezier(t, p0, p1, p2)


**Description:**

A quadratic bezier interpolation method.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| t | number | No | The percentage of interpolation, between 0 and 1. |
| p0 | number | No | The start point. |
| p1 | number | No | The control point. |
| p2 | number | No | The end point. |


**Returns:** number - The interpolated value.


> Source: [src/math/interpolation/QuadraticBezierInterpolation.js#L35](https://github.com/phaserjs/phaser/blob/v3.85.2/src/math/interpolation/QuadraticBezierInterpolation.js#L35)  
Since: 3.2.0


---

## SmootherStep

### \<static> SmootherStep(t, min, max)


**Description:**

A Smoother Step interpolation method.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| t | number | No | The percentage of interpolation, between 0 and 1. |
| min | number | No | The minimum value, also known as the 'left edge', assumed smaller than the 'right edge'. |
| max | number | No | The maximum value, also known as the 'right edge', assumed greater than the 'left edge'. |


**Returns:** number - The interpolated value.


> Source: [src/math/interpolation/SmootherStepInterpolation.js#L9](https://github.com/phaserjs/phaser/blob/v3.85.2/src/math/interpolation/SmootherStepInterpolation.js#L9)  
Since: 3.9.0


---

## SmoothStep

### \<static> SmoothStep(t, min, max)


**Description:**

A Smooth Step interpolation method.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| t | number | No | The percentage of interpolation, between 0 and 1. |
| min | number | No | The minimum value, also known as the 'left edge', assumed smaller than the 'right edge'. |
| max | number | No | The maximum value, also known as the 'right edge', assumed greater than the 'left edge'. |


**Returns:** number - The interpolated value.


> Source: [src/math/interpolation/SmoothStepInterpolation.js#L9](https://github.com/phaserjs/phaser/blob/v3.85.2/src/math/interpolation/SmoothStepInterpolation.js#L9)  
Since: 3.9.0


---

