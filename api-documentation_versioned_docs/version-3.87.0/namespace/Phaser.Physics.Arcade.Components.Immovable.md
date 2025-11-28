---
visibility: public
slug: physics-arcade-components-immovable
title: Phaser.Physics.Arcade.Components.Immovable

seoTitle: Phaser.Physics.Arcade.Components.Immovable
seoDescription: Phaser v3.87.0 Documentation for 
ogImage: 
---




Scope: 
static
> Source: [src/physics/arcade/components/Immovable.js#L7](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/arcade/components/Immovable.js#L7)  
Since: 3.0.0

# Static functions

## setImmovable

### \<instance> setImmovable([value])


**Description:**

Sets if this Body can be separated during collisions with other bodies.



When a body is immovable it means it won't move at all, not even to separate it from collision

overlap. If you just wish to prevent a body from being knocked around by other bodies, see

the `setPushable` method instead.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| value | boolean | Yes | true | Sets if this body will be separated during collisions with other bodies. |


**Returns:** [Phaser.Physics.Arcade.Components.Immovable](../namespace/Phaser.Physics.Arcade.Components.Immovable.md) - This Game Object.


> Source: [src/physics/arcade/components/Immovable.js#L15](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/arcade/components/Immovable.js#L15)  
Since: 3.0.0


---

