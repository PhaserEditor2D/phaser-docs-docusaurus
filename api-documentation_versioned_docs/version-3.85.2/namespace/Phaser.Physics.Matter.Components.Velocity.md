---
visibility: public
slug: physics-matter-components-velocity
title: Phaser.Physics.Matter.Components.Velocity

seoTitle: Phaser.Physics.Matter.Components.Velocity
seoDescription: Phaser v3.85.2 Documentation for 
ogImage: 
---




Scope: 
static
> Source: [src/physics/matter-js/components/Velocity.js#L9](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/matter-js/components/Velocity.js#L9)  
Since: 3.0.0

# Static functions

## getAngularSpeed

### \<instance> getAngularSpeed()


**Description:**

Gets the current rotational speed of the body.
Equivalent to the magnitude of its angular velocity.


**Returns:** number - The current angular velocity of the body.


> Source: [src/physics/matter-js/components/Velocity.js#L137](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/matter-js/components/Velocity.js#L137)  
Since: 3.60.0


---

## getAngularVelocity

### \<instance> getAngularVelocity()


**Description:**

Gets the current rotational velocity of the body.


**Returns:** number - The current angular velocity of the body.


> Source: [src/physics/matter-js/components/Velocity.js#L106](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/matter-js/components/Velocity.js#L106)  
Since: 3.60.0


---

## getVelocity

### \<instance> getVelocity()


**Description:**

Gets the current linear velocity of the physics body.


**Returns:** [Phaser.Types.Math.Vector2Like](../typedef/Phaser.Types.Math.md#Vector2Like) - The current linear velocity of the body.


> Source: [src/physics/matter-js/components/Velocity.js#L75](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/matter-js/components/Velocity.js#L75)  
Since: 3.60.0


---

## setAngularSpeed

### \<instance> setAngularSpeed(speed)


**Description:**

Sets the current rotational speed of the body.
Direction is maintained. Affects body angular velocity.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| speed | number | No | The angular speed. |


**Returns:** [Phaser.Physics.Matter.Components.Velocity](../namespace/Phaser.Physics.Matter.Components.Velocity.md) - This Game Object instance.


> Source: [src/physics/matter-js/components/Velocity.js#L119](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/matter-js/components/Velocity.js#L119)  
Since: 3.60.0


---

## setAngularVelocity

### \<instance> setAngularVelocity(velocity)


**Description:**

Sets the angular velocity of the body instantly.
Position, angle, force etc. are unchanged.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| velocity | number | No | The angular velocity. |


**Returns:** [Phaser.Physics.Matter.Components.Velocity](../namespace/Phaser.Physics.Matter.Components.Velocity.md) - This Game Object instance.


> Source: [src/physics/matter-js/components/Velocity.js#L88](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/matter-js/components/Velocity.js#L88)  
Since: 3.0.0


---

## setVelocity

### \<instance> setVelocity(x, [y])


**Description:**

Sets both the horizontal and vertical velocity of the physics body.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| x | number | No |  | The horizontal velocity value. |
| y | number | Yes | "x" | The vertical velocity value, it can be either positive or negative. If not given, it will be the same as the `x` value. |


**Returns:** [Phaser.Physics.Matter.Components.Velocity](../namespace/Phaser.Physics.Matter.Components.Velocity.md) - This Game Object instance.


> Source: [src/physics/matter-js/components/Velocity.js#L55](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/matter-js/components/Velocity.js#L55)  
Since: 3.0.0


---

## setVelocityX

### \<instance> setVelocityX(x)


**Description:**

Sets the horizontal velocity of the physics body.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| x | number | No | The horizontal velocity value. |


**Returns:** [Phaser.Physics.Matter.Components.Velocity](../namespace/Phaser.Physics.Matter.Components.Velocity.md) - This Game Object instance.


> Source: [src/physics/matter-js/components/Velocity.js#L17](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/matter-js/components/Velocity.js#L17)  
Since: 3.0.0


---

## setVelocityY

### \<instance> setVelocityY(y)


**Description:**

Sets vertical velocity of the physics body.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| y | number | No | The vertical velocity value. |


**Returns:** [Phaser.Physics.Matter.Components.Velocity](../namespace/Phaser.Physics.Matter.Components.Velocity.md) - This Game Object instance.


> Source: [src/physics/matter-js/components/Velocity.js#L36](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/matter-js/components/Velocity.js#L36)  
Since: 3.0.0


---

