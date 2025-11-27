---
visibility: public
slug: namespace/physics-matter
title: Phaser.Physics.Matter

seoTitle: Phaser.Physics.Matter
seoDescription: Phaser v3.85.2 Documentation for 
ogImage: 
---




Scope: 
static
> Source: [src/physics/matter-js/index.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/matter-js/index.js#L7)  


# Static functions

- [BodyBounds](../class/physics-matter-bodybounds)
- [Factory](../class/physics-matter-factory)
- [Image](../class/physics-matter-image)
- [MatterPhysics](../class/physics-matter-matterphysics)
- [PointerConstraint](../class/physics-matter-pointerconstraint)
- [Sprite](../class/physics-matter-sprite)
- [TileBody](../class/physics-matter-tilebody)
- [World](../class/physics-matter-world)
# Static functions

- [Components](../namespace/physics-matter-components)
- [Events](../namespace/physics-matter-events)
- [Matter](../namespace/physics-matter-matter)
- [PhysicsEditorParser](../namespace/physics-matter-physicseditorparser)
- [PhysicsJSONParser](../namespace/physics-matter-physicsjsonparser)
# Static functions

## MatterGameObject

### \<static> MatterGameObject(world, gameObject, [options], [addToWorld])


**Description:**

A Matter Game Object is a generic object that allows you to combine any Phaser Game Object,
including those you have extended or created yourself, with all of the Matter Components.

This enables you to use component methods such as `setVelocity` or `isSensor` directly from
this Game Object.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| world | [Phaser.Physics.Matter.World](../class/Phaser.Physics.Matter.World.md) | No |  | The Matter world to add the body to. |
| gameObject | [Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md) | No |  | The Game Object that will have the Matter body applied to it. |
| options | [Phaser.Types.Physics.Matter.MatterBodyConfig](../typedef/Phaser.Types.Physics.Matter.md#MatterBodyConfig) \| MatterJS.Body | Yes |  | A Matter Body configuration object, or an instance of a Matter Body. |
| addToWorld | boolean | Yes | true | Should the newly created body be immediately added to the World? |


**Returns:** [Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md) - The Game Object that was created with the Matter body.


> Source: [src/physics/matter-js/MatterGameObject.js#L26](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/matter-js/MatterGameObject.js#L26)  
Since: 3.3.0


---

