---
visibility: public
slug: display-rgb
title: RGB
description: Phaser.Display.RGB
seoTitle: Phaser.Display.RGB
seoDescription: Phaser v3.87.0 Documentation for Phaser.Display.RGB
ogImage: 
---


The RGB class holds a single color value and allows for easy modification and reading of it,

with optional on-change callback notification and a dirty flag.

**Constructor**

`new RGB([red], [green], [blue])`

**Parameters**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| red | number | Yes | 0 | The red color value. A number between 0 and 1. |
| green | number | Yes | 0 | The green color value. A number between 0 and 1. |
| blue | number | Yes | 0 | The blue color value. A number between 0 and 1. |

---


**Scope**: static

> Source: [src/display/RGB.js#L10](https://github.com/phaserjs/phaser/blob/v3.87.0/src/display/RGB.js#L10)  
Since: 3.50.0

# Public Members

## b

### b: number


**Description:**

The blue color value. Between 0 and 1.



Changing this property will flag this RGB object as being dirty

and invoke the `onChangeCallback` , if set.


> Source: [src/display/RGB.js#L176](https://github.com/phaserjs/phaser/blob/v3.87.0/src/display/RGB.js#L176)  
Since: 3.50.0


---

## dirty

### dirty: boolean


**Description:**

Is this color dirty?


> Source: [src/display/RGB.js#L51](https://github.com/phaserjs/phaser/blob/v3.87.0/src/display/RGB.js#L51)  
Since: 3.50.0


---

## g

### g: number


**Description:**

The green color value. Between 0 and 1.



Changing this property will flag this RGB object as being dirty

and invoke the `onChangeCallback` , if set.


> Source: [src/display/RGB.js#L151](https://github.com/phaserjs/phaser/blob/v3.87.0/src/display/RGB.js#L151)  
Since: 3.50.0


---

## onChangeCallback

### onChangeCallback: function


**Description:**

This callback will be invoked each time one of the RGB color values change.



The callback is sent the new color values as the parameters.


> Source: [src/display/RGB.js#L40](https://github.com/phaserjs/phaser/blob/v3.87.0/src/display/RGB.js#L40)  
Since: 3.50.0


---

## r

### r: number


**Description:**

The red color value. Between 0 and 1.



Changing this property will flag this RGB object as being dirty

and invoke the `onChangeCallback` , if set.


> Source: [src/display/RGB.js#L126](https://github.com/phaserjs/phaser/blob/v3.87.0/src/display/RGB.js#L126)  
Since: 3.50.0


---

# Private Members

## _rgb

### _rgb: Array.\<number>


**Description:**

Cached RGB values.


**Access:** private


> Source: [src/display/RGB.js#L30](https://github.com/phaserjs/phaser/blob/v3.87.0/src/display/RGB.js#L30)  
Since: 3.50.0


---

# Public Methods

## destroy

### \<instance> destroy()


**Description:**

Nulls any external references this object contains.


> Source: [src/display/RGB.js#L201](https://github.com/phaserjs/phaser/blob/v3.87.0/src/display/RGB.js#L201)  
Since: 3.50.0


---

## equals

### \<instance> equals(red, green, blue)


**Description:**

Compares the given rgb parameters with those in this object and returns

a boolean `true` value if they are equal, otherwise it returns `false`.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| red | number | No | The red value to compare with this object. |
| green | number | No | The green value to compare with this object. |
| blue | number | No | The blue value to compare with this object. |


**Returns:** boolean - `true` if the given values match those in this object, otherwise `false`.


> Source: [src/display/RGB.js#L89](https://github.com/phaserjs/phaser/blob/v3.87.0/src/display/RGB.js#L89)  
Since: 3.50.0


---

## onChange

### \<instance> onChange()


**Description:**

Internal on change handler. Sets this object as being dirty and

then invokes the `onChangeCallback`, if set, passing in the

new RGB values.


> Source: [src/display/RGB.js#L109](https://github.com/phaserjs/phaser/blob/v3.87.0/src/display/RGB.js#L109)  
Since: 3.50.0


---

## set

### \<instance> set([red], [green], [blue])


**Description:**

Sets the red, green and blue values of this RGB object, flags it as being

dirty and then invokes the `onChangeCallback`, if set.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| red | number | Yes | 0 | The red color value. A number between 0 and 1. |
| green | number | Yes | 0 | The green color value. A number between 0 and 1. |
| blue | number | Yes | 0 | The blue color value. A number between 0 and 1. |


**Returns:** [Phaser.Display.RGB](../class/Phaser.Display.RGB.md) - This RGB instance.


> Source: [src/display/RGB.js#L63](https://github.com/phaserjs/phaser/blob/v3.87.0/src/display/RGB.js#L63)  
Since: 3.50.0


---

