---
visibility: public
slug: gameobjects-retrofont
title: Phaser.GameObjects.RetroFont

seoTitle: Phaser.GameObjects.RetroFont
seoDescription: Phaser v3.86.0 Documentation for 
ogImage: 
---




Scope: 
static
> Source: [src/gameobjects/bitmaptext/RetroFont.js#L10](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/bitmaptext/RetroFont.js#L10)  
Since: 3.6.0

# Static functions

## TEXT_SET1

### TEXT_SET1: string


**Description:**

Text Set 1 =  !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~


> Source: [src/gameobjects/bitmaptext/const.js#L9](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/bitmaptext/const.js#L9)  
Since: 3.6.0


---

## TEXT_SET10

### TEXT_SET10: string


**Description:**

Text Set 10 = ABCDEFGHIJKLMNOPQRSTUVWXYZ


> Source: [src/gameobjects/bitmaptext/const.js#L90](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/bitmaptext/const.js#L90)  
Since: 3.6.0


---

## TEXT_SET11

### TEXT_SET11: string


**Description:**

Text Set 11 = ABCDEFGHIJKLMNOPQRSTUVWXYZ.,"-+!?()':;0123456789


> Source: [src/gameobjects/bitmaptext/const.js#L99](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/bitmaptext/const.js#L99)  
Since: 3.6.0


---

## TEXT_SET2

### TEXT_SET2: string


**Description:**

Text Set 2 =  !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ


> Source: [src/gameobjects/bitmaptext/const.js#L18](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/bitmaptext/const.js#L18)  
Since: 3.6.0


---

## TEXT_SET3

### TEXT_SET3: string


**Description:**

Text Set 3 = ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789


> Source: [src/gameobjects/bitmaptext/const.js#L27](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/bitmaptext/const.js#L27)  
Since: 3.6.0


---

## TEXT_SET4

### TEXT_SET4: string


**Description:**

Text Set 4 = ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789


> Source: [src/gameobjects/bitmaptext/const.js#L36](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/bitmaptext/const.js#L36)  
Since: 3.6.0


---

## TEXT_SET5

### TEXT_SET5: string


**Description:**

Text Set 5 = ABCDEFGHIJKLMNOPQRSTUVWXYZ.,/() '!?-*:0123456789


> Source: [src/gameobjects/bitmaptext/const.js#L45](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/bitmaptext/const.js#L45)  
Since: 3.6.0


---

## TEXT_SET6

### TEXT_SET6: string


**Description:**

Text Set 6 = ABCDEFGHIJKLMNOPQRSTUVWXYZ!?:;0123456789"(),-.'


> Source: [src/gameobjects/bitmaptext/const.js#L54](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/bitmaptext/const.js#L54)  
Since: 3.6.0


---

## TEXT_SET7

### TEXT_SET7: string


**Description:**

Text Set 7 = AGMSY+:4BHNTZ!;5CIOU.?06DJPV,(17EKQW")28FLRX-'39


> Source: [src/gameobjects/bitmaptext/const.js#L63](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/bitmaptext/const.js#L63)  
Since: 3.6.0


---

## TEXT_SET8

### TEXT_SET8: string


**Description:**

Text Set 8 = 0123456789 .ABCDEFGHIJKLMNOPQRSTUVWXYZ


> Source: [src/gameobjects/bitmaptext/const.js#L72](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/bitmaptext/const.js#L72)  
Since: 3.6.0


---

## TEXT_SET9

### TEXT_SET9: string


**Description:**

Text Set 9 = ABCDEFGHIJKLMNOPQRSTUVWXYZ()-0123456789.:,'"?!


> Source: [src/gameobjects/bitmaptext/const.js#L81](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/bitmaptext/const.js#L81)  
Since: 3.6.0


---

# Static functions

## Parse

### \<static> Parse(scene, config)


**Description:**

Parses a Retro Font configuration object so you can pass it to the BitmapText constructor

and create a BitmapText object using a fixed-width retro font.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| scene | [Phaser.Scene](../class/Phaser.Scene.md) | No | A reference to the Phaser Scene. |
| config | [Phaser.Types.GameObjects.BitmapText.RetroFontConfig](../typedef/Phaser.Types.GameObjects.BitmapText.md#RetroFontConfig) | No | The font configuration object. |


**Returns:** [Phaser.Types.GameObjects.BitmapText.BitmapFontData](../typedef/Phaser.Types.GameObjects.BitmapText.md#BitmapFontData) - A parsed Bitmap Font data entry for the Bitmap Font cache.


> Source: [src/gameobjects/bitmaptext/ParseRetroFont.js#L9](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/bitmaptext/ParseRetroFont.js#L9)  
Since: 3.0.0


---

