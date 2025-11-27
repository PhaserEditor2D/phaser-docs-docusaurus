---
visibility: public
slug: namespace/physics-arcade-components-angular
title: Phaser.Physics.Arcade.Components.Angular

seoTitle: Phaser.Physics.Arcade.Components.Angular
seoDescription: Phaser v3.85.2 Documentation for 
ogImage: 
---




Scope: 
static
> Source: [src/physics/arcade/components/Angular.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/arcade/components/Angular.js#L7)  
Since: 3.0.0

# Static functions

## setAngularAcceleration

### \<instance> setAngularAcceleration(value)


**Description:**

Sets the angular acceleration of the body.

In Arcade Physics, bodies cannot rotate. They are always axis-aligned.
However, they can have angular motion, which is passed on to the Game Object bound to the body,
causing them to visually rotate, even though the body remains axis-aligned.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| value | number | No | The amount of angular acceleration. |


**Returns:** [Phaser.Physics.Arcade.Components.Angular](../namespace/Phaser.Physics.Arcade.Components.Angular.md) - This Game Object.


> Source: [src/physics/arcade/components/Angular.js#L36](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/arcade/components/Angular.js#L36)  
Since: 3.0.0


---

## setAngularDrag

### \<instance> setAngularDrag(value)


**Description:**

Sets the angular drag of the body. Drag is applied to the current velocity, providing a form of deceleration.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| value | number | No | The amount of drag. |


**Returns:** [Phaser.Physics.Arcade.Components.Angular](../namespace/Phaser.Physics.Arcade.Components.Angular.md) - This Game Object.


> Source: [src/physics/arcade/components/Angular.js#L57](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/arcade/components/Angular.js#L57)  
Since: 3.0.0


---

## setAngularVelocity

### \<instance> setAngularVelocity(value)


**Description:**

Sets the angular velocity of the body.

In Arcade Physics, bodies cannot rotate. They are always axis-aligned.
However, they can have angular motion, which is passed on to the Game Object bound to the body,
causing them to visually rotate, even though the body remains axis-aligned.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| value | number | No | The amount of angular velocity. |


**Returns:** [Phaser.Physics.Arcade.Components.Angular](../namespace/Phaser.Physics.Arcade.Components.Angular.md) - This Game Object.


> Source: [src/physics/arcade/components/Angular.js#L15](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/arcade/components/Angular.js#L15)  
Since: 3.0.0


---

