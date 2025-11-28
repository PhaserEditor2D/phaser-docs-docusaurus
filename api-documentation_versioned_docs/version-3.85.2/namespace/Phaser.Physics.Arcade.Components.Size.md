---
visibility: public
slug: physics-arcade-components-size
title: Phaser.Physics.Arcade.Components.Size

seoTitle: Phaser.Physics.Arcade.Components.Size
seoDescription: Phaser v3.85.2 Documentation for 
ogImage: 
---




Scope: 
static
> Source: [src/physics/arcade/components/Size.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/arcade/components/Size.js#L7)  
Since: 3.0.0

# Static functions

## setBodySize

### \<instance> setBodySize(width, height, [center])


**Description:**

Sets the size of this physics body. Setting the size does not adjust the dimensions of the parent Game Object.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| width | number | No |  | The new width of the physics body, in pixels. |
| height | number | No |  | The new height of the physics body, in pixels. |
| center | boolean | Yes | true | Should the body be re-positioned so its center aligns with the parent Game Object? |


**Returns:** [Phaser.Physics.Arcade.Components.Size](../namespace/Phaser.Physics.Arcade.Components.Size.md) - This Game Object.


> Source: [src/physics/arcade/components/Size.js#L57](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/arcade/components/Size.js#L57)  
Since: 3.24.0


---

## setCircle

### \<instance> setCircle(radius, [offsetX], [offsetY])


**Description:**

Sets this physics body to use a circle for collision instead of a rectangle.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| radius | number | No | The radius of the physics body, in pixels. |
| offsetX | number | Yes | The amount to offset the body from the parent Game Object along the x-axis. |
| offsetY | number | Yes | The amount to offset the body from the parent Game Object along the y-axis. |


**Returns:** [Phaser.Physics.Arcade.Components.Size](../namespace/Phaser.Physics.Arcade.Components.Size.md) - This Game Object.


> Source: [src/physics/arcade/components/Size.js#L76](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/arcade/components/Size.js#L76)  
Since: 3.0.0


---

## setOffset

### \<instance> setOffset(x, [y])


**Description:**

Sets the body offset. This allows you to adjust the difference between the center of the body
and the x and y coordinates of the parent Game Object.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| x | number | No |  | The amount to offset the body from the parent Game Object along the x-axis. |
| y | number | Yes | "x" | The amount to offset the body from the parent Game Object along the y-axis. Defaults to the value given for the x-axis. |


**Returns:** [Phaser.Physics.Arcade.Components.Size](../namespace/Phaser.Physics.Arcade.Components.Size.md) - This Game Object.


> Source: [src/physics/arcade/components/Size.js#L16](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/arcade/components/Size.js#L16)  
Since: 3.0.0


---

## setSize

### \<instance> setSize(width, height, [center])


**Description:**

**DEPRECATED**: Please use `setBodySize` instead.

Sets the size of this physics body. Setting the size does not adjust the dimensions of the parent Game Object.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| width | number | No |  | The new width of the physics body, in pixels. |
| height | number | No |  | The new height of the physics body, in pixels. |
| center | boolean | Yes | true | Should the body be re-positioned so its center aligns with the parent Game Object? |


**Returns:** [Phaser.Physics.Arcade.Components.Size](../namespace/Phaser.Physics.Arcade.Components.Size.md) - This Game Object.


> Source: [src/physics/arcade/components/Size.js#L35](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/arcade/components/Size.js#L35)  
Since: 3.0.0


---

