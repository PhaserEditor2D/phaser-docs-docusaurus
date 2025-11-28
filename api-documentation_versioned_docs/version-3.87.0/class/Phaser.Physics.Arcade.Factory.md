---
visibility: public
slug: physics-arcade-factory
title: Factory
description: Phaser.Physics.Arcade.Factory
seoTitle: Phaser.Physics.Arcade.Factory
seoDescription: Phaser v3.87.0 Documentation for Phaser.Physics.Arcade.Factory
ogImage: 
---


The Arcade Physics Factory allows you to easily create Arcade Physics enabled Game Objects.

Objects that are created by this Factory are automatically added to the physics world.

**Constructor**

`new Factory(world)`

**Parameters**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| world | [Phaser.Physics.Arcade.World](../class/Phaser.Physics.Arcade.World.md) | No | The Arcade Physics World instance. |

---


**Scope**: static

> Source: [src/physics/arcade/Factory.js#L16](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/arcade/Factory.js#L16)  
Since: 3.0.0

# Public Members

## scene

### scene: [Phaser.Scene](../class/Phaser.Scene.md)


**Description:**

A reference to the Scene this Arcade Physics instance belongs to.


> Source: [src/physics/arcade/Factory.js#L43](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/arcade/Factory.js#L43)  
Since: 3.0.0


---

## sys

### sys: [Phaser.Scenes.Systems](../class/Phaser.Scenes.Systems.md)


**Description:**

A reference to the Scene.Systems this Arcade Physics instance belongs to.


> Source: [src/physics/arcade/Factory.js#L52](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/arcade/Factory.js#L52)  
Since: 3.0.0


---

## world

### world: [Phaser.Physics.Arcade.World](../class/Phaser.Physics.Arcade.World.md)


**Description:**

A reference to the Arcade Physics World.


> Source: [src/physics/arcade/Factory.js#L34](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/arcade/Factory.js#L34)  
Since: 3.0.0


---

# Public Methods

## body

### \<instance> body(x, y, [width], [height])


**Description:**

Creates a new physics Body with the given position and size.



This Body is not associated with any Game Object, but still exists within the world

and can be tested for collision, have velocity, etc.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| x | number | No |  | The horizontal position of this Body in the physics world. |
| y | number | No |  | The vertical position of this Body in the physics world. |
| width | number | Yes | 64 | The width of the Body in pixels. Cannot be negative or zero. |
| height | number | Yes | 64 | The height of the Body in pixels. Cannot be negative or zero. |


**Returns:** [Phaser.Physics.Arcade.Body](../class/Phaser.Physics.Arcade.Body.md) - The Body that was created.


> Source: [src/physics/arcade/Factory.js#L254](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/arcade/Factory.js#L254)  
Since: 3.60.0


---

## collider

### \<instance> collider(object1, object2, [collideCallback], [processCallback], [callbackContext])


**Description:**

Creates a new Arcade Physics Collider object.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| object1 | [Phaser.Types.Physics.Arcade.ArcadeColliderType](../typedef/Phaser.Types.Physics.Arcade.md#ArcadeColliderType) | No | The first object to check for collision. |
| object2 | [Phaser.Types.Physics.Arcade.ArcadeColliderType](../typedef/Phaser.Types.Physics.Arcade.md#ArcadeColliderType) | No | The second object to check for collision. |
| collideCallback | [Phaser.Types.Physics.Arcade.ArcadePhysicsCallback](../typedef/Phaser.Types.Physics.Arcade.md#ArcadePhysicsCallback) | Yes | The callback to invoke when the two objects collide. |
| processCallback | [Phaser.Types.Physics.Arcade.ArcadePhysicsCallback](../typedef/Phaser.Types.Physics.Arcade.md#ArcadePhysicsCallback) | Yes | The callback to invoke when the two objects collide. Must return a boolean. |
| callbackContext | * | Yes | The scope in which to call the callbacks. |


**Returns:** [Phaser.Physics.Arcade.Collider](../class/Phaser.Physics.Arcade.Collider.md) - The Collider that was created.


> Source: [src/physics/arcade/Factory.js#L62](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/arcade/Factory.js#L62)  
Since: 3.0.0


---

## destroy

### \<instance> destroy()


**Description:**

Destroys this Factory.


> Source: [src/physics/arcade/Factory.js#L318](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/arcade/Factory.js#L318)  
Since: 3.5.0


---

## existing

### \<instance> existing(gameObject, [isStatic])


**Description:**

Adds an Arcade Physics Body to the given Game Object.

**Tags:**

 - generic

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| gameObject | [Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md) | No |  | A Game Object. |
| isStatic | boolean | Yes | false | Create a Static body (true) or Dynamic body (false). |


**Returns:** [Phaser.Types.Physics.Arcade.GameObjectWithBody](../typedef/Phaser.Types.Physics.Arcade.md#GameObjectWithBody) - The Game Object.


> Source: [src/physics/arcade/Factory.js#L100](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/arcade/Factory.js#L100)  
Since: 3.0.0


---

## group

### \<instance> group([children], [config])


**Description:**

Creates a Physics Group object.

All Game Objects created by this Group will automatically be dynamic Arcade Physics objects.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| children | Array.\<[Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md)> \| [Phaser.Types.Physics.Arcade.PhysicsGroupConfig](../typedef/Phaser.Types.Physics.Arcade.md#PhysicsGroupConfig) | [Phaser.Types.GameObjects.Group.GroupCreateConfig](../typedef/Phaser.Types.GameObjects.Group.md#GroupCreateConfig) | Yes | Game Objects to add to this group; or the `config` argument. |
| config | [Phaser.Types.Physics.Arcade.PhysicsGroupConfig](../typedef/Phaser.Types.Physics.Arcade.md#PhysicsGroupConfig) \| [Phaser.Types.GameObjects.Group.GroupCreateConfig](../typedef/Phaser.Types.GameObjects.Group.md#GroupCreateConfig) | Yes | Settings for this group. |


**Returns:** [Phaser.Physics.Arcade.Group](../class/Phaser.Physics.Arcade.Group.md) - The Group object that was created.


> Source: [src/physics/arcade/Factory.js#L237](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/arcade/Factory.js#L237)  
Since: 3.0.0


---

## image

### \<instance> image(x, y, texture, [frame])


**Description:**

Creates a new Arcade Image object with a Dynamic body.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| x | number | No | The horizontal position of this Game Object in the world. |
| y | number | No | The vertical position of this Game Object in the world. |
| texture | string \| [Phaser.Textures.Texture](../class/Phaser.Textures.Texture.md) | No | The key, or instance of the Texture this Game Object will use to render with, as stored in the Texture Manager. |
| frame | string \| number | Yes | An optional frame from the Texture this Game Object is rendering with. |


**Returns:** [Phaser.Types.Physics.Arcade.ImageWithDynamicBody](../typedef/Phaser.Types.Physics.Arcade.md#ImageWithDynamicBody) - The Image object that was created.


> Source: [src/physics/arcade/Factory.js#L146](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/arcade/Factory.js#L146)  
Since: 3.0.0


---

## overlap

### \<instance> overlap(object1, object2, [collideCallback], [processCallback], [callbackContext])


**Description:**

Creates a new Arcade Physics Collider Overlap object.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| object1 | [Phaser.Types.Physics.Arcade.ArcadeColliderType](../typedef/Phaser.Types.Physics.Arcade.md#ArcadeColliderType) | No | The first object to check for overlap. |
| object2 | [Phaser.Types.Physics.Arcade.ArcadeColliderType](../typedef/Phaser.Types.Physics.Arcade.md#ArcadeColliderType) | No | The second object to check for overlap. |
| collideCallback | [Phaser.Types.Physics.Arcade.ArcadePhysicsCallback](../typedef/Phaser.Types.Physics.Arcade.md#ArcadePhysicsCallback) | Yes | The callback to invoke when the two objects collide. |
| processCallback | [Phaser.Types.Physics.Arcade.ArcadePhysicsCallback](../typedef/Phaser.Types.Physics.Arcade.md#ArcadePhysicsCallback) | Yes | The callback to invoke when the two objects collide. Must return a boolean. |
| callbackContext | * | Yes | The scope in which to call the callbacks. |


**Returns:** [Phaser.Physics.Arcade.Collider](../class/Phaser.Physics.Arcade.Collider.md) - The Collider that was created.


> Source: [src/physics/arcade/Factory.js#L81](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/arcade/Factory.js#L81)  
Since: 3.0.0


---

## sprite

### \<instance> sprite(x, y, key, [frame])


**Description:**

Creates a new Arcade Sprite object with a Dynamic body.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| x | number | No | The horizontal position of this Game Object in the world. |
| y | number | No | The vertical position of this Game Object in the world. |
| key | string | No | The key of the Texture this Game Object will use to render with, as stored in the Texture Manager. |
| frame | string \| number | Yes | An optional frame from the Texture this Game Object is rendering with. |


**Returns:** [Phaser.Types.Physics.Arcade.SpriteWithDynamicBody](../typedef/Phaser.Types.Physics.Arcade.md#SpriteWithDynamicBody) - The Sprite object that was created.


> Source: [src/physics/arcade/Factory.js#L195](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/arcade/Factory.js#L195)  
Since: 3.0.0


---

## staticBody

### \<instance> staticBody(x, y, [width], [height])


**Description:**

Creates a new static physics Body with the given position and size.



This Body is not associated with any Game Object, but still exists within the world

and can be tested for collision, etc.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| x | number | No |  | The horizontal position of this Body in the physics world. |
| y | number | No |  | The vertical position of this Body in the physics world. |
| width | number | Yes | 64 | The width of the Body in pixels. Cannot be negative or zero. |
| height | number | Yes | 64 | The height of the Body in pixels. Cannot be negative or zero. |


**Returns:** [Phaser.Physics.Arcade.StaticBody](../class/Phaser.Physics.Arcade.StaticBody.md) - The Static Body that was created.


> Source: [src/physics/arcade/Factory.js#L286](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/arcade/Factory.js#L286)  
Since: 3.60.0


---

## staticGroup

### \<instance> staticGroup([children], [config])


**Description:**

Creates a Static Physics Group object.

All Game Objects created by this Group will automatically be static Arcade Physics objects.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| children | Array.\<[Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md)> \| [Phaser.Types.GameObjects.Group.GroupConfig](../typedef/Phaser.Types.GameObjects.Group.md#GroupConfig) | [Phaser.Types.GameObjects.Group.GroupCreateConfig](../typedef/Phaser.Types.GameObjects.Group.md#GroupCreateConfig) | Yes | Game Objects to add to this group; or the `config` argument. |
| config | [Phaser.Types.GameObjects.Group.GroupConfig](../typedef/Phaser.Types.GameObjects.Group.md#GroupConfig) \| [Phaser.Types.GameObjects.Group.GroupCreateConfig](../typedef/Phaser.Types.GameObjects.Group.md#GroupCreateConfig) | Yes | Settings for this group. |


**Returns:** [Phaser.Physics.Arcade.StaticGroup](../class/Phaser.Physics.Arcade.StaticGroup.md) - The Static Group object that was created.


> Source: [src/physics/arcade/Factory.js#L220](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/arcade/Factory.js#L220)  
Since: 3.0.0


---

## staticImage

### \<instance> staticImage(x, y, texture, [frame])


**Description:**

Creates a new Arcade Image object with a Static body.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| x | number | No | The horizontal position of this Game Object in the world. |
| y | number | No | The vertical position of this Game Object in the world. |
| texture | string \| [Phaser.Textures.Texture](../class/Phaser.Textures.Texture.md) | No | The key, or instance of the Texture this Game Object will use to render with, as stored in the Texture Manager. |
| frame | string \| number | Yes | An optional frame from the Texture this Game Object is rendering with. |


**Returns:** [Phaser.Types.Physics.Arcade.ImageWithStaticBody](../typedef/Phaser.Types.Physics.Arcade.md#ImageWithStaticBody) - The Image object that was created.


> Source: [src/physics/arcade/Factory.js#L122](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/arcade/Factory.js#L122)  
Since: 3.0.0


---

## staticSprite

### \<instance> staticSprite(x, y, texture, [frame])


**Description:**

Creates a new Arcade Sprite object with a Static body.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| x | number | No | The horizontal position of this Game Object in the world. |
| y | number | No | The vertical position of this Game Object in the world. |
| texture | string \| [Phaser.Textures.Texture](../class/Phaser.Textures.Texture.md) | No | The key, or instance of the Texture this Game Object will use to render with, as stored in the Texture Manager. |
| frame | string \| number | Yes | An optional frame from the Texture this Game Object is rendering with. |


**Returns:** [Phaser.Types.Physics.Arcade.SpriteWithStaticBody](../typedef/Phaser.Types.Physics.Arcade.md#SpriteWithStaticBody) - The Sprite object that was created.


> Source: [src/physics/arcade/Factory.js#L170](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/arcade/Factory.js#L170)  
Since: 3.0.0


---

