---
visibility: public
slug: physics-matter-tilebody
title: TileBody
description: Phaser.Physics.Matter.TileBody
seoTitle: Phaser.Physics.Matter.TileBody
seoDescription: Phaser v3.85.2 Documentation for Phaser.Physics.Matter.TileBody
ogImage: 
---


A wrapper around a Tile that provides access to a corresponding Matter body. A tile can only
have one Matter body associated with it. You can either pass in an existing Matter body for
the tile or allow the constructor to create the corresponding body for you. If the Tile has a
collision group (defined in Tiled), those shapes will be used to create the body. If not, the
tile's rectangle bounding box will be used.

The corresponding body will be accessible on the Tile itself via Tile.physics.matterBody.

Note: not all Tiled collision shapes are supported. See
Phaser.Physics.Matter.TileBody#setFromTileCollision for more information.

**Constructor**

`new TileBody(world, tile, [options])`

**Parameters**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| world | [Phaser.Physics.Matter.World](../class/Phaser.Physics.Matter.World.md) | No | The Matter world instance this body belongs to. |
| tile | [Phaser.Tilemaps.Tile](../class/Phaser.Tilemaps.Tile.md) | No | The target tile that should have a Matter body. |
| options | [Phaser.Types.Physics.Matter.MatterTileOptions](../typedef/Phaser.Types.Physics.Matter.md#MatterTileOptions) | Yes | Options to be used when creating the Matter body. |

---


**Scope**: static


**Extends**

> [Phaser.Events.EventEmitter](../class/Phaser.Events.EventEmitter.md)  
> [Phaser.Physics.Matter.Components.Bounce](../namespace/Phaser.Physics.Matter.Components.Bounce.md)  
> [Phaser.Physics.Matter.Components.Collision](../namespace/Phaser.Physics.Matter.Components.Collision.md)  
> [Phaser.Physics.Matter.Components.Friction](../namespace/Phaser.Physics.Matter.Components.Friction.md)  
> [Phaser.Physics.Matter.Components.Gravity](../namespace/Phaser.Physics.Matter.Components.Gravity.md)  
> [Phaser.Physics.Matter.Components.Mass](../namespace/Phaser.Physics.Matter.Components.Mass.md)  
> [Phaser.Physics.Matter.Components.Sensor](../namespace/Phaser.Physics.Matter.Components.Sensor.md)  
> [Phaser.Physics.Matter.Components.Sleep](../namespace/Phaser.Physics.Matter.Components.Sleep.md)  
> [Phaser.Physics.Matter.Components.Static](../namespace/Phaser.Physics.Matter.Components.Static.md)  



> Source: [src/physics/matter-js/MatterTileBody.js#L17](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/matter-js/MatterTileBody.js#L17)  
Since: 3.0.0

# Public Members

## centerOfMass

### centerOfMass: [Phaser.Math.Vector2](../class/Phaser.Math.Vector2.md)


**Description:**

The body's center of mass.

Calling this creates a new `Vector2 each time to avoid mutation.

If you only need to read the value and won't change it, you can get it from `GameObject.body.centerOfMass`.


**Returns:** [Phaser.Math.Vector2](../class/Phaser.Math.Vector2.md) - The center of mass.


**Inherits:** [Phaser.Physics.Matter.Components.Mass#centerOfMass](../namespace/Phaser.Physics.Matter.Components.Mass.md#centerOfMass)


> Source: [src/physics/matter-js/components/Mass.js#L52](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/matter-js/components/Mass.js#L52)  
Since: 3.10.0


---

## tile

### tile: [Phaser.Tilemaps.Tile](../class/Phaser.Tilemaps.Tile.md)


**Description:**

The tile object the body is associated with.


> Source: [src/physics/matter-js/MatterTileBody.js#L70](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/matter-js/MatterTileBody.js#L70)  
Since: 3.0.0


---

## world

### world: [Phaser.Physics.Matter.World](../class/Phaser.Physics.Matter.World.md)


**Description:**

The Matter world the body exists within.


> Source: [src/physics/matter-js/MatterTileBody.js#L79](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/matter-js/MatterTileBody.js#L79)  
Since: 3.0.0


---

# Public Methods

## addListener

### \<instance> addListener(event, fn, [context])


**Description:**

Add a listener for a given event.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| event | string \| symbol | No |  | The event name. |
| fn | function | No |  | The listener function. |
| context | * | Yes | "this" | The context to invoke the listener with. |


**Returns:** [Phaser.Physics.Matter.TileBody](../class/Phaser.Physics.Matter.TileBody.md) - `this`.


**Inherits:** [Phaser.Events.EventEmitter#addListener](../class/Phaser.Events.EventEmitter.md#addListener)


> Source: [src/events/EventEmitter.js#L111](https://github.com/phaserjs/phaser/blob/v3.85.2/src/events/EventEmitter.js#L111)  
Since: 3.0.0


---

## destroy

### \<instance> destroy()


**Description:**

Removes the current body from the tile and the world.


**Overrides:** Phaser.Events.EventEmitter#destroy


**Returns:** [Phaser.Physics.Matter.TileBody](../class/Phaser.Physics.Matter.TileBody.md) - This TileBody object.


> Source: [src/physics/matter-js/MatterTileBody.js#L310](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/matter-js/MatterTileBody.js#L310)  
Since: 3.0.0


---

## emit

### \<instance> emit(event, [args])


**Description:**

Calls each of the listeners registered for a given event.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| event | string \| symbol | No | The event name. |
| args | * | Yes | Additional arguments that will be passed to the event handler. |


**Returns:** boolean - `true` if the event had listeners, else `false`.


**Inherits:** [Phaser.Events.EventEmitter#emit](../class/Phaser.Events.EventEmitter.md#emit)


> Source: [src/events/EventEmitter.js#L86](https://github.com/phaserjs/phaser/blob/v3.85.2/src/events/EventEmitter.js#L86)  
Since: 3.0.0


---

## eventNames

### \<instance> eventNames()


**Description:**

Return an array listing the events for which the emitter has registered listeners.


**Returns:** Array.\<(string | symbol)> - undefined


**Inherits:** [Phaser.Events.EventEmitter#eventNames](../class/Phaser.Events.EventEmitter.md#eventNames)


> Source: [src/events/EventEmitter.js#L55](https://github.com/phaserjs/phaser/blob/v3.85.2/src/events/EventEmitter.js#L55)  
Since: 3.0.0


---

## isSensor

### \<instance> isSensor()


**Description:**

Is the body belonging to this Game Object a sensor or not?


**Returns:** boolean - `true` if the body is a sensor, otherwise `false`.


**Inherits:** [Phaser.Physics.Matter.Components.Sensor#isSensor](../namespace/Phaser.Physics.Matter.Components.Sensor.md#isSensor)


> Source: [src/physics/matter-js/components/Sensor.js#L33](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/matter-js/components/Sensor.js#L33)  
Since: 3.0.0


---

## isStatic

### \<instance> isStatic()


**Description:**

Returns `true` if the body is static, otherwise `false` for a dynamic body.


**Returns:** boolean - `true` if the body is static, otherwise `false`.


**Inherits:** [Phaser.Physics.Matter.Components.Static#isStatic](../namespace/Phaser.Physics.Matter.Components.Static.md#isStatic)


> Source: [src/physics/matter-js/components/Static.js#L34](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/matter-js/components/Static.js#L34)  
Since: 3.0.0


---

## listenerCount

### \<instance> listenerCount(event)


**Description:**

Return the number of listeners listening to a given event.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| event | string \| symbol | No | The event name. |


**Returns:** number - The number of listeners.


**Inherits:** [Phaser.Events.EventEmitter#listenerCount](../class/Phaser.Events.EventEmitter.md#listenerCount)


> Source: [src/events/EventEmitter.js#L75](https://github.com/phaserjs/phaser/blob/v3.85.2/src/events/EventEmitter.js#L75)  
Since: 3.0.0


---

## listeners

### \<instance> listeners(event)


**Description:**

Return the listeners registered for a given event.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| event | string \| symbol | No | The event name. |


**Returns:** Array.\<function()> - The registered listeners.


**Inherits:** [Phaser.Events.EventEmitter#listeners](../class/Phaser.Events.EventEmitter.md#listeners)


> Source: [src/events/EventEmitter.js#L64](https://github.com/phaserjs/phaser/blob/v3.85.2/src/events/EventEmitter.js#L64)  
Since: 3.0.0


---

## off

### \<instance> off(event, [fn], [context], [once])


**Description:**

Remove the listeners of a given event.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| event | string \| symbol | No | The event name. |
| fn | function | Yes | Only remove the listeners that match this function. |
| context | * | Yes | Only remove the listeners that have this context. |
| once | boolean | Yes | Only remove one-time listeners. |


**Returns:** [Phaser.Physics.Matter.TileBody](../class/Phaser.Physics.Matter.TileBody.md) - `this`.


**Inherits:** [Phaser.Events.EventEmitter#off](../class/Phaser.Events.EventEmitter.md#off)


> Source: [src/events/EventEmitter.js#L151](https://github.com/phaserjs/phaser/blob/v3.85.2/src/events/EventEmitter.js#L151)  
Since: 3.0.0


---

## on

### \<instance> on(event, fn, [context])


**Description:**

Add a listener for a given event.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| event | string \| symbol | No |  | The event name. |
| fn | function | No |  | The listener function. |
| context | * | Yes | "this" | The context to invoke the listener with. |


**Returns:** [Phaser.Physics.Matter.TileBody](../class/Phaser.Physics.Matter.TileBody.md) - `this`.


**Inherits:** [Phaser.Events.EventEmitter#on](../class/Phaser.Events.EventEmitter.md#on)


> Source: [src/events/EventEmitter.js#L98](https://github.com/phaserjs/phaser/blob/v3.85.2/src/events/EventEmitter.js#L98)  
Since: 3.0.0


---

## once

### \<instance> once(event, fn, [context])


**Description:**

Add a one-time listener for a given event.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| event | string \| symbol | No |  | The event name. |
| fn | function | No |  | The listener function. |
| context | * | Yes | "this" | The context to invoke the listener with. |


**Returns:** [Phaser.Physics.Matter.TileBody](../class/Phaser.Physics.Matter.TileBody.md) - `this`.


**Inherits:** [Phaser.Events.EventEmitter#once](../class/Phaser.Events.EventEmitter.md#once)


> Source: [src/events/EventEmitter.js#L124](https://github.com/phaserjs/phaser/blob/v3.85.2/src/events/EventEmitter.js#L124)  
Since: 3.0.0


---

## removeAllListeners

### \<instance> removeAllListeners([event])


**Description:**

Remove all listeners, or those of the specified event.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| event | string \| symbol | Yes | The event name. |


**Returns:** [Phaser.Physics.Matter.TileBody](../class/Phaser.Physics.Matter.TileBody.md) - `this`.


**Inherits:** [Phaser.Events.EventEmitter#removeAllListeners](../class/Phaser.Events.EventEmitter.md#removeAllListeners)


> Source: [src/events/EventEmitter.js#L165](https://github.com/phaserjs/phaser/blob/v3.85.2/src/events/EventEmitter.js#L165)  
Since: 3.0.0


---

## removeBody

### \<instance> removeBody()


**Description:**

Removes the current body from the TileBody and from the Matter world


**Returns:** [Phaser.Physics.Matter.TileBody](../class/Phaser.Physics.Matter.TileBody.md) - This TileBody object.


> Source: [src/physics/matter-js/MatterTileBody.js#L290](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/matter-js/MatterTileBody.js#L290)  
Since: 3.0.0


---

## removeListener

### \<instance> removeListener(event, [fn], [context], [once])


**Description:**

Remove the listeners of a given event.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| event | string \| symbol | No | The event name. |
| fn | function | Yes | Only remove the listeners that match this function. |
| context | * | Yes | Only remove the listeners that have this context. |
| once | boolean | Yes | Only remove one-time listeners. |


**Returns:** [Phaser.Physics.Matter.TileBody](../class/Phaser.Physics.Matter.TileBody.md) - `this`.


**Inherits:** [Phaser.Events.EventEmitter#removeListener](../class/Phaser.Events.EventEmitter.md#removeListener)


> Source: [src/events/EventEmitter.js#L137](https://github.com/phaserjs/phaser/blob/v3.85.2/src/events/EventEmitter.js#L137)  
Since: 3.0.0


---

## setAwake

### \<instance> setAwake()


**Description:**

Wakes this Body if asleep.


**Returns:** [Phaser.Physics.Matter.TileBody](../class/Phaser.Physics.Matter.TileBody.md) - This Game Object instance.


**Inherits:** [Phaser.Physics.Matter.Components.Sleep#setAwake](../namespace/Phaser.Physics.Matter.Components.Sleep.md#setAwake)


> Source: [src/physics/matter-js/components/Sleep.js#L34](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/matter-js/components/Sleep.js#L34)  
Since: 3.22.0


---

## setBody

### \<instance> setBody(body, [addToWorld])


**Description:**

Sets the current body to the given body. This will remove the previous body, if one already
exists.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| body | MatterJS.BodyType | No |  | The new Matter body to use. |
| addToWorld | boolean | Yes | true | Whether or not to add the body to the Matter world. |


**Returns:** [Phaser.Physics.Matter.TileBody](../class/Phaser.Physics.Matter.TileBody.md) - This TileBody object.


> Source: [src/physics/matter-js/MatterTileBody.js#L258](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/matter-js/MatterTileBody.js#L258)  
Since: 3.0.0


---

## setBounce

### \<instance> setBounce(value)


**Description:**

Sets the restitution on the physics object.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| value | number | No | A Number that defines the restitution (elasticity) of the body. The value is always positive and is in the range (0, 1). A value of 0 means collisions may be perfectly inelastic and no bouncing may occur. A value of 0.8 means the body may bounce back with approximately 80% of its kinetic energy. Note that collision response is based on pairs of bodies, and that restitution values are combined with the following formula: `Math.max(bodyA.restitution, bodyB.restitution)` |


**Returns:** [Phaser.Physics.Matter.TileBody](../class/Phaser.Physics.Matter.TileBody.md) - This Game Object instance.


**Inherits:** [Phaser.Physics.Matter.Components.Bounce#setBounce](../namespace/Phaser.Physics.Matter.Components.Bounce.md#setBounce)


> Source: [src/physics/matter-js/components/Bounce.js#L15](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/matter-js/components/Bounce.js#L15)  
Since: 3.0.0


---

## setCollidesWith

### \<instance> setCollidesWith(categories)


**Description:**

Sets the collision mask for this Game Object's Matter Body. Two Matter Bodies with different collision groups will only
collide if each one includes the other's category in its mask based on a bitwise AND, i.e. `(categoryA & maskB) !== 0`
and `(categoryB & maskA) !== 0` are both true.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| categories | number \| Array.\<number> | No | A unique category bitfield, or an array of them. |


**Returns:** [Phaser.Physics.Matter.TileBody](../class/Phaser.Physics.Matter.TileBody.md) - This Game Object instance.


**Inherits:** [Phaser.Physics.Matter.Components.Collision#setCollidesWith](../namespace/Phaser.Physics.Matter.Components.Collision.md#setCollidesWith)


> Source: [src/physics/matter-js/components/Collision.js#L54](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/matter-js/components/Collision.js#L54)  
Since: 3.0.0


---

## setCollisionCategory

### \<instance> setCollisionCategory(value)


**Description:**

Sets the collision category of this Game Object's Matter Body. This number must be a power of two between 2^0 (= 1) and 2^31.
Two bodies with different collision groups (see [#setCollisionGroup](#setCollisionGroup)) will only collide if their collision
categories are included in their collision masks (see [#setCollidesWith](#setCollidesWith)).

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| value | number | No | Unique category bitfield. |


**Returns:** [Phaser.Physics.Matter.TileBody](../class/Phaser.Physics.Matter.TileBody.md) - This Game Object instance.


**Inherits:** [Phaser.Physics.Matter.Components.Collision#setCollisionCategory](../namespace/Phaser.Physics.Matter.Components.Collision.md#setCollisionCategory)


> Source: [src/physics/matter-js/components/Collision.js#L15](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/matter-js/components/Collision.js#L15)  
Since: 3.0.0


---

## setCollisionGroup

### \<instance> setCollisionGroup(value)


**Description:**

Sets the collision group of this Game Object's Matter Body. If this is zero or two Matter Bodies have different values,
they will collide according to the usual rules (see [#setCollisionCategory](#setCollisionCategory) and [#setCollisionGroup](#setCollisionGroup)).
If two Matter Bodies have the same positive value, they will always collide; if they have the same negative value,
they will never collide.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| value | number | No | Unique group index. |


**Returns:** [Phaser.Physics.Matter.TileBody](../class/Phaser.Physics.Matter.TileBody.md) - This Game Object instance.


**Inherits:** [Phaser.Physics.Matter.Components.Collision#setCollisionGroup](../namespace/Phaser.Physics.Matter.Components.Collision.md#setCollisionGroup)


> Source: [src/physics/matter-js/components/Collision.js#L34](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/matter-js/components/Collision.js#L34)  
Since: 3.0.0


---

## setDensity

### \<instance> setDensity(value)


**Description:**

Sets density of the body.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| value | number | No | The new density of the body. |


**Returns:** [Phaser.Physics.Matter.TileBody](../class/Phaser.Physics.Matter.TileBody.md) - This Game Object instance.


**Inherits:** [Phaser.Physics.Matter.Components.Mass#setDensity](../namespace/Phaser.Physics.Matter.Components.Mass.md#setDensity)


> Source: [src/physics/matter-js/components/Mass.js#L35](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/matter-js/components/Mass.js#L35)  
Since: 3.0.0


---

## setFriction

### \<instance> setFriction(value, [air], [fstatic])


**Description:**

Sets new friction values for this Game Object's Matter Body.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| value | number | No | The new friction of the body, between 0 and 1, where 0 allows the Body to slide indefinitely, while 1 allows it to stop almost immediately after a force is applied. |
| air | number | Yes | If provided, the new air resistance of the Body. The higher the value, the faster the Body will slow as it moves through space. 0 means the body has no air resistance. |
| fstatic | number | Yes | If provided, the new static friction of the Body. The higher the value (e.g. 10), the more force it will take to initially get the Body moving when it is nearly stationary. 0 means the body will never "stick" when it is nearly stationary. |


**Returns:** [Phaser.Physics.Matter.TileBody](../class/Phaser.Physics.Matter.TileBody.md) - This Game Object instance.


**Inherits:** [Phaser.Physics.Matter.Components.Friction#setFriction](../namespace/Phaser.Physics.Matter.Components.Friction.md#setFriction)


> Source: [src/physics/matter-js/components/Friction.js#L15](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/matter-js/components/Friction.js#L15)  
Since: 3.0.0


---

## setFrictionAir

### \<instance> setFrictionAir(value)


**Description:**

Sets a new air resistance for this Game Object's Matter Body.
A value of 0 means the Body will never slow as it moves through space.
The higher the value, the faster a Body slows when moving through space.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| value | number | No | The new air resistance for the Body. |


**Returns:** [Phaser.Physics.Matter.TileBody](../class/Phaser.Physics.Matter.TileBody.md) - This Game Object instance.


**Inherits:** [Phaser.Physics.Matter.Components.Friction#setFrictionAir](../namespace/Phaser.Physics.Matter.Components.Friction.md#setFrictionAir)


> Source: [src/physics/matter-js/components/Friction.js#L44](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/matter-js/components/Friction.js#L44)  
Since: 3.0.0


---

## setFrictionStatic

### \<instance> setFrictionStatic(value)


**Description:**

Sets a new static friction for this Game Object's Matter Body.
A value of 0 means the Body will never "stick" when it is nearly stationary.
The higher the value (e.g. 10), the more force it will take to initially get the Body moving when it is nearly stationary.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| value | number | No | The new static friction for the Body. |


**Returns:** [Phaser.Physics.Matter.TileBody](../class/Phaser.Physics.Matter.TileBody.md) - This Game Object instance.


**Inherits:** [Phaser.Physics.Matter.Components.Friction#setFrictionStatic](../namespace/Phaser.Physics.Matter.Components.Friction.md#setFrictionStatic)


> Source: [src/physics/matter-js/components/Friction.js#L63](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/matter-js/components/Friction.js#L63)  
Since: 3.0.0


---

## setFromTileCollision

### \<instance> setFromTileCollision([options])


**Description:**

Sets the current body from the collision group associated with the Tile. This is typically
set up in Tiled's collision editor.

Note: Matter doesn't support all shapes from Tiled. Rectangles and polygons are directly
supported. Ellipses are converted into circle bodies. Polylines are treated as if they are
closed polygons. If a tile has multiple shapes, a multi-part body will be created. Concave
shapes are supported if poly-decomp library is included. Decomposition is not guaranteed to
work for complex shapes (e.g. holes), so it's often best to manually decompose a concave
polygon into multiple convex polygons yourself.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| options | [Phaser.Types.Physics.Matter.MatterBodyTileOptions](../typedef/Phaser.Types.Physics.Matter.md#MatterBodyTileOptions) | Yes | Options to be used when creating the Matter body. See MatterJS.Body for a list of what Matter accepts. |


**Returns:** [Phaser.Physics.Matter.TileBody](../class/Phaser.Physics.Matter.TileBody.md) - This TileBody object.


> Source: [src/physics/matter-js/MatterTileBody.js#L158](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/matter-js/MatterTileBody.js#L158)  
Since: 3.0.0


---

## setFromTileRectangle

### \<instance> setFromTileRectangle([options])


**Description:**

Sets the current body to a rectangle that matches the bounds of the tile.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| options | [Phaser.Types.Physics.Matter.MatterBodyTileOptions](../typedef/Phaser.Types.Physics.Matter.md#MatterBodyTileOptions) | Yes | Options to be used when creating the Matter body. See MatterJS.Body for a list of what Matter accepts. |


**Returns:** [Phaser.Physics.Matter.TileBody](../class/Phaser.Physics.Matter.TileBody.md) - This TileBody object.


> Source: [src/physics/matter-js/MatterTileBody.js#L132](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/matter-js/MatterTileBody.js#L132)  
Since: 3.0.0


---

## setIgnoreGravity

### \<instance> setIgnoreGravity(value)


**Description:**

A togglable function for ignoring world gravity in real-time on the current body.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| value | boolean | No | Set to true to ignore the effect of world gravity, or false to not ignore it. |


**Returns:** [Phaser.Physics.Matter.TileBody](../class/Phaser.Physics.Matter.TileBody.md) - This Game Object instance.


**Inherits:** [Phaser.Physics.Matter.Components.Gravity#setIgnoreGravity](../namespace/Phaser.Physics.Matter.Components.Gravity.md#setIgnoreGravity)


> Source: [src/physics/matter-js/components/Gravity.js#L15](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/matter-js/components/Gravity.js#L15)  
Since: 3.0.0


---

## setMass

### \<instance> setMass(value)


**Description:**

Sets the mass of the Game Object's Matter Body.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| value | number | No | The new mass of the body. |


**Returns:** [Phaser.Physics.Matter.TileBody](../class/Phaser.Physics.Matter.TileBody.md) - This Game Object instance.


**Inherits:** [Phaser.Physics.Matter.Components.Mass#setMass](../namespace/Phaser.Physics.Matter.Components.Mass.md#setMass)


> Source: [src/physics/matter-js/components/Mass.js#L18](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/matter-js/components/Mass.js#L18)  
Since: 3.0.0


---

## setOnCollide

### \<instance> setOnCollide(callback)


**Description:**

The callback is sent a `Phaser.Types.Physics.Matter.MatterCollisionData` object.

This does not change the bodies collision category, group or filter. Those must be set in addition
to the callback.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| callback | function | No | The callback to invoke when this body starts colliding with another. |


**Returns:** [Phaser.Physics.Matter.TileBody](../class/Phaser.Physics.Matter.TileBody.md) - This Game Object instance.


**Inherits:** [Phaser.Physics.Matter.Components.Collision#setOnCollide](../namespace/Phaser.Physics.Matter.Components.Collision.md#setOnCollide)


> Source: [src/physics/matter-js/components/Collision.js#L87](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/matter-js/components/Collision.js#L87)  
Since: 3.22.0


---

## setOnCollideActive

### \<instance> setOnCollideActive(callback)


**Description:**

The callback is sent a `Phaser.Types.Physics.Matter.MatterCollisionData` object.

This does not change the bodies collision category, group or filter. Those must be set in addition
to the callback.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| callback | function | No | The callback to invoke for the duration of this body colliding with another. |


**Returns:** [Phaser.Physics.Matter.TileBody](../class/Phaser.Physics.Matter.TileBody.md) - This Game Object instance.


**Inherits:** [Phaser.Physics.Matter.Components.Collision#setOnCollideActive](../namespace/Phaser.Physics.Matter.Components.Collision.md#setOnCollideActive)


> Source: [src/physics/matter-js/components/Collision.js#L127](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/matter-js/components/Collision.js#L127)  
Since: 3.22.0


---

## setOnCollideEnd

### \<instance> setOnCollideEnd(callback)


**Description:**

The callback is sent a `Phaser.Types.Physics.Matter.MatterCollisionData` object.

This does not change the bodies collision category, group or filter. Those must be set in addition
to the callback.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| callback | function | No | The callback to invoke when this body stops colliding with another. |


**Returns:** [Phaser.Physics.Matter.TileBody](../class/Phaser.Physics.Matter.TileBody.md) - This Game Object instance.


**Inherits:** [Phaser.Physics.Matter.Components.Collision#setOnCollideEnd](../namespace/Phaser.Physics.Matter.Components.Collision.md#setOnCollideEnd)


> Source: [src/physics/matter-js/components/Collision.js#L107](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/matter-js/components/Collision.js#L107)  
Since: 3.22.0


---

## setOnCollideWith

### \<instance> setOnCollideWith(body, callback)


**Description:**

The callback is sent a reference to the other body, along with a `Phaser.Types.Physics.Matter.MatterCollisionData` object.

This does not change the bodies collision category, group or filter. Those must be set in addition
to the callback.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| body | MatterJS.Body \| Array.\<MatterJS.Body> | No | The body, or an array of bodies, to test for collisions with. |
| callback | function | No | The callback to invoke when this body collides with the given body or bodies. |


**Returns:** [Phaser.Physics.Matter.TileBody](../class/Phaser.Physics.Matter.TileBody.md) - This Game Object instance.


**Inherits:** [Phaser.Physics.Matter.Components.Collision#setOnCollideWith](../namespace/Phaser.Physics.Matter.Components.Collision.md#setOnCollideWith)


> Source: [src/physics/matter-js/components/Collision.js#L147](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/matter-js/components/Collision.js#L147)  
Since: 3.22.0


---

## setSensor

### \<instance> setSensor(value)


**Description:**

Set the body belonging to this Game Object to be a sensor.
Sensors trigger collision events, but don't react with colliding body physically.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| value | boolean | No | `true` to set the body as a sensor, or `false` to disable it. |


**Returns:** [Phaser.Physics.Matter.TileBody](../class/Phaser.Physics.Matter.TileBody.md) - This Game Object instance.


**Inherits:** [Phaser.Physics.Matter.Components.Sensor#setSensor](../namespace/Phaser.Physics.Matter.Components.Sensor.md#setSensor)


> Source: [src/physics/matter-js/components/Sensor.js#L15](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/matter-js/components/Sensor.js#L15)  
Since: 3.0.0


---

## setSleepEndEvent

### \<instance> setSleepEndEvent(value)


**Description:**

Enables or disables the Sleep End event for this body.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| value | boolean | No | `true` to enable the sleep event, or `false` to disable it. |


**Returns:** [Phaser.Physics.Matter.TileBody](../class/Phaser.Physics.Matter.TileBody.md) - This Game Object instance.


**Inherits:** [Phaser.Physics.Matter.Components.Sleep#setSleepEndEvent](../namespace/Phaser.Physics.Matter.Components.Sleep.md#setSleepEndEvent)


> Source: [src/physics/matter-js/components/Sleep.js#L121](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/matter-js/components/Sleep.js#L121)  
Since: 3.0.0


---

## setSleepEvents

### \<instance> setSleepEvents(start, end)


**Description:**

Enable sleep and wake events for this body.

By default when a body goes to sleep, or wakes up, it will not emit any events.

The events are emitted by the Matter World instance and can be listened to via
the `SLEEP_START` and `SLEEP_END` events.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| start | boolean | No | `true` if you want the sleep start event to be emitted for this body. |
| end | boolean | No | `true` if you want the sleep end event to be emitted for this body. |


**Returns:** [Phaser.Physics.Matter.TileBody](../class/Phaser.Physics.Matter.TileBody.md) - This Game Object instance.


**Inherits:** [Phaser.Physics.Matter.Components.Sleep#setSleepEvents](../namespace/Phaser.Physics.Matter.Components.Sleep.md#setSleepEvents)


> Source: [src/physics/matter-js/components/Sleep.js#L68](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/matter-js/components/Sleep.js#L68)  
Since: 3.0.0


---

## setSleepStartEvent

### \<instance> setSleepStartEvent(value)


**Description:**

Enables or disables the Sleep Start event for this body.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| value | boolean | No | `true` to enable the sleep event, or `false` to disable it. |


**Returns:** [Phaser.Physics.Matter.TileBody](../class/Phaser.Physics.Matter.TileBody.md) - This Game Object instance.


**Inherits:** [Phaser.Physics.Matter.Components.Sleep#setSleepStartEvent](../namespace/Phaser.Physics.Matter.Components.Sleep.md#setSleepStartEvent)


> Source: [src/physics/matter-js/components/Sleep.js#L92](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/matter-js/components/Sleep.js#L92)  
Since: 3.0.0


---

## setSleepThreshold

### \<instance> setSleepThreshold([value])


**Description:**

Sets the number of updates in which this body must have near-zero velocity before it is set as sleeping (if sleeping is enabled by the engine).

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| value | number | Yes | 60 | A `Number` that defines the number of updates in which this body must have near-zero velocity before it is set as sleeping. |


**Returns:** [Phaser.Physics.Matter.TileBody](../class/Phaser.Physics.Matter.TileBody.md) - This Game Object instance.


**Inherits:** [Phaser.Physics.Matter.Components.Sleep#setSleepThreshold](../namespace/Phaser.Physics.Matter.Components.Sleep.md#setSleepThreshold)


> Source: [src/physics/matter-js/components/Sleep.js#L49](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/matter-js/components/Sleep.js#L49)  
Since: 3.0.0


---

## setStatic

### \<instance> setStatic(value)


**Description:**

Changes the physics body to be either static `true` or dynamic `false`.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| value | boolean | No | `true` to set the body as being static, or `false` to make it dynamic. |


**Returns:** [Phaser.Physics.Matter.TileBody](../class/Phaser.Physics.Matter.TileBody.md) - This Game Object instance.


**Inherits:** [Phaser.Physics.Matter.Components.Static#setStatic](../namespace/Phaser.Physics.Matter.Components.Static.md#setStatic)


> Source: [src/physics/matter-js/components/Static.js#L17](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/matter-js/components/Static.js#L17)  
Since: 3.0.0


---

## setToSleep

### \<instance> setToSleep()


**Description:**

Sets this Body to sleep.


**Returns:** [Phaser.Physics.Matter.TileBody](../class/Phaser.Physics.Matter.TileBody.md) - This Game Object instance.


**Inherits:** [Phaser.Physics.Matter.Components.Sleep#setToSleep](../namespace/Phaser.Physics.Matter.Components.Sleep.md#setToSleep)


> Source: [src/physics/matter-js/components/Sleep.js#L19](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/matter-js/components/Sleep.js#L19)  
Since: 3.22.0


---

## shutdown

### \<instance> shutdown()


**Description:**

Removes all listeners.


**Inherits:** [Phaser.Events.EventEmitter#shutdown](../class/Phaser.Events.EventEmitter.md#shutdown)


> Source: [src/events/EventEmitter.js#L31](https://github.com/phaserjs/phaser/blob/v3.85.2/src/events/EventEmitter.js#L31)  
Since: 3.0.0


---

