---
visibility: public
slug: physics-arcade-components-pushable
title: Phaser.Physics.Arcade.Components.Pushable

seoTitle: Phaser.Physics.Arcade.Components.Pushable
seoDescription: Phaser v3.85.2 Documentation for 
ogImage: 
---




Scope: 
static
> Source: [src/physics/arcade/components/Pushable.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/arcade/components/Pushable.js#L7)  
Since: 3.50.0

# Static functions

## setPushable

### \<instance> setPushable([value])


**Description:**

Sets if this Body can be pushed by another Body.

A body that cannot be pushed will reflect back all of the velocity it is given to the
colliding body. If that body is also not pushable, then the separation will be split
between them evenly.

If you want your body to never move or seperate at all, see the `setImmovable` method.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| value | boolean | Yes | true | Sets if this body can be pushed by collisions with another Body. |


**Returns:** [Phaser.Physics.Arcade.Components.Pushable](../namespace/Phaser.Physics.Arcade.Components.Pushable.md) - This Game Object.


> Source: [src/physics/arcade/components/Pushable.js#L15](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/arcade/components/Pushable.js#L15)  
Since: 3.50.0


---

