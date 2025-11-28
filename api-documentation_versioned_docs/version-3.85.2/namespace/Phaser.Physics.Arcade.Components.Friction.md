---
visibility: public
slug: physics-arcade-components-friction
title: Phaser.Physics.Arcade.Components.Friction

seoTitle: Phaser.Physics.Arcade.Components.Friction
seoDescription: Phaser v3.85.2 Documentation for 
ogImage: 
---




Scope: 
static
> Source: [src/physics/arcade/components/Friction.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/arcade/components/Friction.js#L7)  
Since: 3.0.0

# Static functions

## setFriction

### \<instance> setFriction(x, [y])


**Description:**

Sets the friction of this game object's physics body.
In Arcade Physics, friction is a special case of motion transfer from an "immovable" body to a riding body.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| x | number | No |  | The amount of horizontal friction to apply, [0, 1]. |
| y | number | Yes | "x" | The amount of vertical friction to apply, [0, 1]. |


**Returns:** [Phaser.Physics.Arcade.Components.Friction](../namespace/Phaser.Physics.Arcade.Components.Friction.md) - This Game Object.


> Source: [src/physics/arcade/components/Friction.js#L19](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/arcade/components/Friction.js#L19)  
Since: 3.0.0


---

## setFrictionX

### \<instance> setFrictionX(x)


**Description:**

Sets the horizontal friction of this game object's physics body.
This can move a riding body horizontally when it collides with this one on the vertical axis.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| x | number | No | The amount of friction to apply, [0, 1]. |


**Returns:** [Phaser.Physics.Arcade.Components.Friction](../namespace/Phaser.Physics.Arcade.Components.Friction.md) - This Game Object.


> Source: [src/physics/arcade/components/Friction.js#L40](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/arcade/components/Friction.js#L40)  
Since: 3.0.0


---

## setFrictionY

### \<instance> setFrictionY(y)


**Description:**

Sets the vertical friction of this game object's physics body.
This can move a riding body vertically when it collides with this one on the horizontal axis.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| y | number | No | The amount of friction to apply, [0, 1]. |


**Returns:** [Phaser.Physics.Arcade.Components.Friction](../namespace/Phaser.Physics.Arcade.Components.Friction.md) - This Game Object.


> Source: [src/physics/arcade/components/Friction.js#L60](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/arcade/components/Friction.js#L60)  
Since: 3.0.0


---

