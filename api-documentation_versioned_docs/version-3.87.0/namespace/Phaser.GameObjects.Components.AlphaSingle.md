---
visibility: public
slug: namespace/gameobjects-components-alphasingle
title: Phaser.GameObjects.Components.AlphaSingle

seoTitle: Phaser.GameObjects.Components.AlphaSingle
seoDescription: Phaser v3.87.0 Documentation for 
ogImage: 
---




Scope: 
static
> Source: [src/gameobjects/components/AlphaSingle.js#L12](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/components/AlphaSingle.js#L12)  
Since: 3.22.0

# Static functions

## alpha

### alpha: number


**Description:**

The alpha value of the Game Object.



This is a global value, impacting the entire Game Object, not just a region of it.


> Source: [src/gameobjects/components/AlphaSingle.js#L68](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/components/AlphaSingle.js#L68)  
Since: 3.0.0


---

## _alpha

### _alpha: number


**Description:**

Private internal value. Holds the global alpha value.


**Access:** private


> Source: [src/gameobjects/components/AlphaSingle.js#L22](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/components/AlphaSingle.js#L22)  
Since: 3.0.0


---

# Static functions

## clearAlpha

### \<instance> clearAlpha()


**Description:**

Clears all alpha values associated with this Game Object.



Immediately sets the alpha levels back to 1 (fully opaque).


**Returns:** [Phaser.GameObjects.Components.AlphaSingle](../namespace/Phaser.GameObjects.Components.AlphaSingle.md) - This Game Object instance.


> Source: [src/gameobjects/components/AlphaSingle.js#L33](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/components/AlphaSingle.js#L33)  
Since: 3.0.0


---

## setAlpha

### \<instance> setAlpha([value])


**Description:**

Set the Alpha level of this Game Object. The alpha controls the opacity of the Game Object as it renders.

Alpha values are provided as a float between 0, fully transparent, and 1, fully opaque.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| value | number | Yes | 1 | The alpha value applied across the whole Game Object. |


**Returns:** [Phaser.GameObjects.Components.AlphaSingle](../namespace/Phaser.GameObjects.Components.AlphaSingle.md) - This Game Object instance.


> Source: [src/gameobjects/components/AlphaSingle.js#L48](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/components/AlphaSingle.js#L48)  
Since: 3.0.0


---

