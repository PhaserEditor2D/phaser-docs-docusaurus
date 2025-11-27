---
visibility: public
slug: namespace/physics-matter-components-force
title: Phaser.Physics.Matter.Components.Force

seoTitle: Phaser.Physics.Matter.Components.Force
seoDescription: Phaser v3.87.0 Documentation for 
ogImage: 
---




Scope: 
static
> Source: [src/physics/matter-js/components/Force.js#L9](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/matter-js/components/Force.js#L9)  
Since: 3.0.0

# Static functions

## applyForce

### \<instance> applyForce(force)


**Description:**

Applies a force to a body.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| force | [Phaser.Math.Vector2](../class/Phaser.Math.Vector2.md) | No | A Vector that specifies the force to apply. |


**Returns:** [Phaser.Physics.Matter.Components.Force](../namespace/Phaser.Physics.Matter.Components.Force.md) - This Game Object instance.


> Source: [src/physics/matter-js/components/Force.js#L19](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/matter-js/components/Force.js#L19)  
Since: 3.0.0


---

## applyForceFrom

### \<instance> applyForceFrom(position, force)


**Description:**

Applies a force to a body from a given position.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| position | [Phaser.Math.Vector2](../class/Phaser.Math.Vector2.md) | No | The position in which the force comes from. |
| force | [Phaser.Math.Vector2](../class/Phaser.Math.Vector2.md) | No | A Vector that specifies the force to apply. |


**Returns:** [Phaser.Physics.Matter.Components.Force](../namespace/Phaser.Physics.Matter.Components.Force.md) - This Game Object instance.


> Source: [src/physics/matter-js/components/Force.js#L38](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/matter-js/components/Force.js#L38)  
Since: 3.0.0


---

## thrust

### \<instance> thrust(speed)


**Description:**

Apply thrust to the forward position of the body.



Use very small values, such as 0.1, depending on the mass and required speed.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| speed | number | No | A speed value to be applied to a directional force. |


**Returns:** [Phaser.Physics.Matter.Components.Force](../namespace/Phaser.Physics.Matter.Components.Force.md) - This Game Object instance.


> Source: [src/physics/matter-js/components/Force.js#L56](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/matter-js/components/Force.js#L56)  
Since: 3.0.0


---

## thrustBack

### \<instance> thrustBack(speed)


**Description:**

Apply thrust to the back position of the body.



Use very small values, such as 0.1, depending on the mass and required speed.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| speed | number | No | A speed value to be applied to a directional force. |


**Returns:** [Phaser.Physics.Matter.Components.Force](../namespace/Phaser.Physics.Matter.Components.Force.md) - This Game Object instance.


> Source: [src/physics/matter-js/components/Force.js#L125](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/matter-js/components/Force.js#L125)  
Since: 3.0.0


---

## thrustLeft

### \<instance> thrustLeft(speed)


**Description:**

Apply thrust to the left position of the body.



Use very small values, such as 0.1, depending on the mass and required speed.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| speed | number | No | A speed value to be applied to a directional force. |


**Returns:** [Phaser.Physics.Matter.Components.Force](../namespace/Phaser.Physics.Matter.Components.Force.md) - This Game Object instance.


> Source: [src/physics/matter-js/components/Force.js#L79](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/matter-js/components/Force.js#L79)  
Since: 3.0.0


---

## thrustRight

### \<instance> thrustRight(speed)


**Description:**

Apply thrust to the right position of the body.



Use very small values, such as 0.1, depending on the mass and required speed.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| speed | number | No | A speed value to be applied to a directional force. |


**Returns:** [Phaser.Physics.Matter.Components.Force](../namespace/Phaser.Physics.Matter.Components.Force.md) - This Game Object instance.


> Source: [src/physics/matter-js/components/Force.js#L102](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/matter-js/components/Force.js#L102)  
Since: 3.0.0


---

