---
visibility: public
slug: math-fuzzy
title: Phaser.Math.Fuzzy

seoTitle: Phaser.Math.Fuzzy
seoDescription: Phaser v3.87.0 Documentation for 
ogImage: 
---




Scope: 
static
> Source: [src/math/fuzzy/index.js#L7](https://github.com/phaserjs/phaser/blob/v3.87.0/src/math/fuzzy/index.js#L7)  


# Static functions

## Ceil

### \<static> Ceil(value, [epsilon])


**Description:**

Calculate the fuzzy ceiling of the given value.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| value | number | No |  | The value. |
| epsilon | number | Yes | 0.0001 | The epsilon. |


**Returns:** number - The fuzzy ceiling of the value.


> Source: [src/math/fuzzy/Ceil.js#L7](https://github.com/phaserjs/phaser/blob/v3.87.0/src/math/fuzzy/Ceil.js#L7)  
Since: 3.0.0


---

## Equal

### \<static> Equal(a, b, [epsilon])


**Description:**

Check whether the given values are fuzzily equal.



Two numbers are fuzzily equal if their difference is less than `epsilon`.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| a | number | No |  | The first value. |
| b | number | No |  | The second value. |
| epsilon | number | Yes | 0.0001 | The epsilon. |


**Returns:** boolean - `true` if the values are fuzzily equal, otherwise `false`.


> Source: [src/math/fuzzy/Equal.js#L7](https://github.com/phaserjs/phaser/blob/v3.87.0/src/math/fuzzy/Equal.js#L7)  
Since: 3.0.0


---

## Floor

### \<static> Floor(value, [epsilon])


**Description:**

Calculate the fuzzy floor of the given value.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| value | number | No |  | The value. |
| epsilon | number | Yes | 0.0001 | The epsilon. |


**Returns:** number - The floor of the value.


> Source: [src/math/fuzzy/Floor.js#L7](https://github.com/phaserjs/phaser/blob/v3.87.0/src/math/fuzzy/Floor.js#L7)  
Since: 3.0.0


---

## GreaterThan

### \<static> GreaterThan(a, b, [epsilon])


**Description:**

Check whether `a` is fuzzily greater than `b`.



`a` is fuzzily greater than `b` if it is more than `b - epsilon`.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| a | number | No |  | The first value. |
| b | number | No |  | The second value. |
| epsilon | number | Yes | 0.0001 | The epsilon. |


**Returns:** boolean - `true` if `a` is fuzzily greater than than `b`, otherwise `false`.


> Source: [src/math/fuzzy/GreaterThan.js#L7](https://github.com/phaserjs/phaser/blob/v3.87.0/src/math/fuzzy/GreaterThan.js#L7)  
Since: 3.0.0


---

## LessThan

### \<static> LessThan(a, b, [epsilon])


**Description:**

Check whether `a` is fuzzily less than `b`.



`a` is fuzzily less than `b` if it is less than `b + epsilon`.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| a | number | No |  | The first value. |
| b | number | No |  | The second value. |
| epsilon | number | Yes | 0.0001 | The epsilon. |


**Returns:** boolean - `true` if `a` is fuzzily less than `b`, otherwise `false`.


> Source: [src/math/fuzzy/LessThan.js#L7](https://github.com/phaserjs/phaser/blob/v3.87.0/src/math/fuzzy/LessThan.js#L7)  
Since: 3.0.0


---

