---
visibility: public
slug: physics-matter-components-bounce
title: Phaser.Physics.Matter.Components.Bounce

seoTitle: Phaser.Physics.Matter.Components.Bounce
seoDescription: Phaser v3.87.0 Documentation for 
ogImage: 
---




Scope: 
static
> Source: [src/physics/matter-js/components/Bounce.js#L7](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/matter-js/components/Bounce.js#L7)  
Since: 3.0.0

# Static functions

## setBounce

### \<instance> setBounce(value)


**Description:**

Sets the restitution on the physics object.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| value | number | No | A Number that defines the restitution (elasticity) of the body. The value is always positive and is in the range (0, 1). A value of 0 means collisions may be perfectly inelastic and no bouncing may occur. A value of 0.8 means the body may bounce back with approximately 80% of its kinetic energy. Note that collision response is based on pairs of bodies, and that restitution values are combined with the following formula: `Math.max(bodyA.restitution, bodyB.restitution)` |


**Returns:** [Phaser.Physics.Matter.Components.Bounce](../namespace/Phaser.Physics.Matter.Components.Bounce.md) - This Game Object instance.


> Source: [src/physics/matter-js/components/Bounce.js#L15](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/matter-js/components/Bounce.js#L15)  
Since: 3.0.0


---

