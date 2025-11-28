---
visibility: public
slug: physics-arcade-group
title: Group
description: Phaser.Physics.Arcade.Group
seoTitle: Phaser.Physics.Arcade.Group
seoDescription: Phaser v3.87.0 Documentation for Phaser.Physics.Arcade.Group
ogImage: 
---


An Arcade Physics Group object.



The primary use of a Physics Group is a way to collect together physics enable objects

that share the same intrinsic structure into a single pool. They can they be easily

compared against other Groups, or Game Objects.



All Game Objects created by, or added to this Group will automatically be given **dynamic**

Arcade Physics bodies (if they have no body already) and the bodies will receive the

Groups [default](../class/Phaser.Physics.Arcade.Group.md#defaults).



You should not pass objects into this Group that should not receive a body. For example,

do not add basic Geometry or Tilemap Layers into a Group, as they will not behave in the

way you may expect. Groups should all ideally have objects of the same type in them.



If you wish to create a Group filled with Static Bodies, please see [Phaser.Physics.Arcade.StaticGroup](../class/Phaser.Physics.Arcade.StaticGroup).

**Constructor**

`new Group(world, scene, [children], [config])`

**Parameters**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| world | [Phaser.Physics.Arcade.World](../class/Phaser.Physics.Arcade.World.md) | No | The physics simulation. |
| scene | [Phaser.Scene](../class/Phaser.Scene.md) | No | The scene this group belongs to. |
| children | Array.\<[Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md)> \| [Phaser.Types.Physics.Arcade.PhysicsGroupConfig](../typedef/Phaser.Types.Physics.Arcade.md#PhysicsGroupConfig) | [Phaser.Types.GameObjects.Group.GroupCreateConfig](../typedef/Phaser.Types.GameObjects.Group.md#GroupCreateConfig) | Yes | Game Objects to add to this group; or the `config` argument. |
| config | [Phaser.Types.Physics.Arcade.PhysicsGroupConfig](../typedef/Phaser.Types.Physics.Arcade.md#PhysicsGroupConfig) \| [Phaser.Types.GameObjects.Group.GroupCreateConfig](../typedef/Phaser.Types.GameObjects.Group.md#GroupCreateConfig) | Yes | Settings for this group. |

---


**Scope**: static


**Extends**

> [Phaser.GameObjects.Group](../class/Phaser.GameObjects.Group.md)  
> [Phaser.Physics.Arcade.Components.Collision](../namespace/Phaser.Physics.Arcade.Components.Collision.md)  



> Source: [src/physics/arcade/PhysicsGroup.js#L15](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/arcade/PhysicsGroup.js#L15)  
Since: 3.0.0

# Public Members

## active

### active: boolean


**Description:**

Whether this group runs its [Phaser.GameObjects.Group#preUpdate](../class/Phaser.GameObjects.Group.md#preUpdate) method (which may update any members).


**Inherits:** [Phaser.GameObjects.Group#active](../class/Phaser.GameObjects.Group.md#active)


> Source: [src/gameobjects/group/Group.js#L147](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L147)  
Since: 3.0.0


---

## children

### children: Phaser.Structs.Set.\<Phaser.GameObjects.GameObject>


**Description:**

Members of this group.


**Inherits:** [Phaser.GameObjects.Group#children](../class/Phaser.GameObjects.Group.md#children)


> Source: [src/gameobjects/group/Group.js#L95](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L95)  
Since: 3.0.0


---

## classType

### classType: function


**Description:**

The class to create new Group members from.



This should be either `Phaser.Physics.Arcade.Image`, `Phaser.Physics.Arcade.Sprite`, or a class extending one of those.


**Overrides:** Phaser.GameObjects.Group#classType


> Source: [src/physics/arcade/PhysicsGroup.js#L106](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/arcade/PhysicsGroup.js#L106)  
Since: 3.0.0


---

## collisionCategory

### collisionCategory: number


**Description:**

The Arcade Physics Group Collision Category.



This can be set to any valid collision bitfield value.



See the `setCollisionCategory` method for more details.


> Source: [src/physics/arcade/PhysicsGroup.js#L132](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/arcade/PhysicsGroup.js#L132)  
Since: 3.70.0


---

## collisionMask

### collisionMask: number


**Description:**

The Arcade Physics Group Collision Mask.



See the `setCollidesWith` method for more details.


> Source: [src/physics/arcade/PhysicsGroup.js#L145](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/arcade/PhysicsGroup.js#L145)  
Since: 3.70.0


---

## createCallback

### createCallback: [Phaser.Types.GameObjects.Group.GroupCallback](../typedef/Phaser.Types.GameObjects.Group.md#GroupCallback)


**Description:**

A function to be called when adding or creating group members.


**Inherits:** [Phaser.GameObjects.Group#createCallback](../class/Phaser.GameObjects.Group.md#createCallback)


> Source: [src/gameobjects/group/Group.js#L198](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L198)  
Since: 3.0.0


---

## createMultipleCallback

### createMultipleCallback: [Phaser.Types.GameObjects.Group.GroupMultipleCreateCallback](../typedef/Phaser.Types.GameObjects.Group.md#GroupMultipleCreateCallback)


**Description:**

A function to be called when creating several group members at once.


**Inherits:** [Phaser.GameObjects.Group#createMultipleCallback](../class/Phaser.GameObjects.Group.md#createMultipleCallback)


> Source: [src/gameobjects/group/Group.js#L216](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L216)  
Since: 3.0.0


---

## defaultFrame

### defaultFrame: string, number


**Description:**

A default texture frame to use when creating new group members.


**Inherits:** [Phaser.GameObjects.Group#defaultFrame](../class/Phaser.GameObjects.Group.md#defaultFrame)


> Source: [src/gameobjects/group/Group.js#L178](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L178)  
Since: 3.0.0


---

## defaultKey

### defaultKey: string


**Description:**

A default texture key to use when creating new group members.



This is used in [Phaser.GameObjects.Group#create](../class/Phaser.GameObjects.Group.md#create)

but not in [Phaser.GameObjects.Group#createMultiple](../class/Phaser.GameObjects.Group.md#createMultiple).


**Inherits:** [Phaser.GameObjects.Group#defaultKey](../class/Phaser.GameObjects.Group.md#defaultKey)


> Source: [src/gameobjects/group/Group.js#L166](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L166)  
Since: 3.0.0


---

## defaults

### defaults: [Phaser.Types.Physics.Arcade.PhysicsGroupDefaults](../typedef/Phaser.Types.Physics.Arcade.md#PhysicsGroupDefaults)


**Description:**

Default physics properties applied to Game Objects added to the Group or created by the Group. Derived from the `config` argument.



You can remove the default values by setting this property to `{}`.


> Source: [src/physics/arcade/PhysicsGroup.js#L156](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/arcade/PhysicsGroup.js#L156)  
Since: 3.0.0


---

## isParent

### isParent: boolean


**Description:**

A flag identifying this object as a group.


**Inherits:** [Phaser.GameObjects.Group#isParent](../class/Phaser.GameObjects.Group.md#isParent)


> Source: [src/gameobjects/group/Group.js#L104](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L104)  
Since: 3.0.0


---

## maxSize

### maxSize: number


**Description:**

The maximum size of this group, if used as a pool. -1 is no limit.


**Inherits:** [Phaser.GameObjects.Group#maxSize](../class/Phaser.GameObjects.Group.md#maxSize)


> Source: [src/gameobjects/group/Group.js#L156](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L156)  
Since: 3.0.0


---

## name

### name: string


**Description:**

The name of this group.

Empty by default and never populated by Phaser, this is left for developers to use.


**Inherits:** [Phaser.GameObjects.Group#name](../class/Phaser.GameObjects.Group.md#name)


> Source: [src/gameobjects/group/Group.js#L136](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L136)  
Since: 3.18.0


---

## physicsType

### physicsType: number


**Description:**

The physics type of the Group's members.


> Source: [src/physics/arcade/PhysicsGroup.js#L122](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/arcade/PhysicsGroup.js#L122)  
Since: 3.0.0


---

## removeCallback

### removeCallback: [Phaser.Types.GameObjects.Group.GroupCallback](../typedef/Phaser.Types.GameObjects.Group.md#GroupCallback)


**Description:**

A function to be called when removing group members.


**Inherits:** [Phaser.GameObjects.Group#removeCallback](../class/Phaser.GameObjects.Group.md#removeCallback)


> Source: [src/gameobjects/group/Group.js#L207](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L207)  
Since: 3.0.0


---

## runChildUpdate

### runChildUpdate: boolean


**Description:**

Whether to call the update method of any members.


**Inherits:** [Phaser.GameObjects.Group#runChildUpdate](../class/Phaser.GameObjects.Group.md#runChildUpdate)


> Source: [src/gameobjects/group/Group.js#L187](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L187)  
Since: 3.0.0


---

## scene

### scene: [Phaser.Scene](../class/Phaser.Scene.md)


**Description:**

This scene this group belongs to.


**Inherits:** [Phaser.GameObjects.Group#scene](../class/Phaser.GameObjects.Group.md#scene)


> Source: [src/gameobjects/group/Group.js#L86](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L86)  
Since: 3.0.0


---

## type

### type: string


**Description:**

A textual representation of this Game Object.

Used internally by Phaser but is available for your own custom classes to populate.


**Overrides:** Phaser.GameObjects.Group#type


> Source: [src/physics/arcade/PhysicsGroup.js#L197](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/arcade/PhysicsGroup.js#L197)  
Since: 3.21.0


---

## world

### world: [Phaser.Physics.Arcade.World](../class/Phaser.Physics.Arcade.World.md)


**Description:**

The physics simulation.


> Source: [src/physics/arcade/PhysicsGroup.js#L97](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/arcade/PhysicsGroup.js#L97)  
Since: 3.0.0


---

# Private Members

## internalCreateCallback

### internalCreateCallback: [Phaser.Types.GameObjects.Group.GroupCallback](../typedef/Phaser.Types.GameObjects.Group.md#GroupCallback)


**Description:**

A function to be called when adding or creating group members.

For internal use only by a Group, or any class that extends it.


**Access:** private


**Inherits:** [Phaser.GameObjects.Group#internalCreateCallback](../class/Phaser.GameObjects.Group.md#internalCreateCallback)


> Source: [src/gameobjects/group/Group.js#L225](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L225)  
Since: 3.22.0


---

## internalRemoveCallback

### internalRemoveCallback: [Phaser.Types.GameObjects.Group.GroupCallback](../typedef/Phaser.Types.GameObjects.Group.md#GroupCallback)


**Description:**

A function to be called when removing group members.

For internal use only by a Group, or any class that extends it.


**Access:** private


**Inherits:** [Phaser.GameObjects.Group#internalRemoveCallback](../class/Phaser.GameObjects.Group.md#internalRemoveCallback)


> Source: [src/gameobjects/group/Group.js#L236](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L236)  
Since: 3.22.0


---

# Public Methods

## add

### \<instance> add(child, [addToScene])


**Description:**

Adds a Game Object to this group.



Calls [Phaser.GameObjects.Group#createCallback](../class/Phaser.GameObjects.Group.md#createCallback).

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| child | [Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md) | No |  | The Game Object to add. |
| addToScene | boolean | Yes | false | Also add the Game Object to the scene. |


**Returns:** [Phaser.Physics.Arcade.Group](../class/Phaser.Physics.Arcade.Group.md) - This Group object.


**Inherits:** [Phaser.GameObjects.Group#add](../class/Phaser.GameObjects.Group.md#add)


> Source: [src/gameobjects/group/Group.js#L575](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L575)  
Since: 3.0.0


---

## addCollidesWith

### \<instance> addCollidesWith(category)


**Description:**

Adds the given Collision Category to the list of those that this

Arcade Physics Body will collide with.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| category | number | No | The collision category to add. |


**Returns:** [Phaser.Physics.Arcade.Group](../class/Phaser.Physics.Arcade.Group.md) - This Game Object.


**Inherits:** [Phaser.Physics.Arcade.Components.Collision#addCollidesWith](../namespace/Phaser.Physics.Arcade.Components.Collision.md#addCollidesWith)


> Source: [src/physics/arcade/components/Collision.js#L60](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/arcade/components/Collision.js#L60)  
Since: 3.70.0


---

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


**Returns:** [Phaser.Physics.Arcade.Group](../class/Phaser.Physics.Arcade.Group.md) - `this`.


**Inherits:** [Phaser.Events.EventEmitter#addListener](../class/Phaser.Events.EventEmitter.md#addListener)


> Source: [src/events/EventEmitter.js#L111](https://github.com/phaserjs/phaser/blob/v3.87.0/src/events/EventEmitter.js#L111)  
Since: 3.0.0


---

## addMultiple

### \<instance> addMultiple(children, [addToScene])


**Description:**

Adds several Game Objects to this group.



Calls [Phaser.GameObjects.Group#createCallback](../class/Phaser.GameObjects.Group.md#createCallback).

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| children | Array.\<[Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md)> | No |  | The Game Objects to add. |
| addToScene | boolean | Yes | false | Also add the Game Objects to the scene. |


**Returns:** [Phaser.Physics.Arcade.Group](../class/Phaser.Physics.Arcade.Group.md) - This group.


**Inherits:** [Phaser.GameObjects.Group#addMultiple](../class/Phaser.GameObjects.Group.md#addMultiple)


> Source: [src/gameobjects/group/Group.js#L620](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L620)  
Since: 3.0.0


---

## angle

### \<instance> angle(value, [step])


**Description:**

Sets the angle of each group member.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| value | number | No |  | The amount to set the angle to, in degrees. |
| step | number | Yes | 0 | This is added to the `value` amount, multiplied by the iteration counter. |


**Returns:** [Phaser.Physics.Arcade.Group](../class/Phaser.Physics.Arcade.Group.md) - This Group object.


**Inherits:** [Phaser.GameObjects.Group#angle](../class/Phaser.GameObjects.Group.md#angle)


> Source: [src/gameobjects/group/Group.js#L1392](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L1392)  
Since: 3.21.0


---

## clear

### \<instance> clear([removeFromScene], [destroyChild])


**Description:**

Removes all members of this Group and optionally removes them from the Scene and / or destroys them.



Does not call [Phaser.GameObjects.Group#removeCallback](../class/Phaser.GameObjects.Group.md#removeCallback).

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| removeFromScene | boolean | Yes | false | Optionally remove each Group member from the Scene. |
| destroyChild | boolean | Yes | false | Optionally call destroy on the removed Group members. |


**Returns:** [Phaser.Physics.Arcade.Group](../class/Phaser.Physics.Arcade.Group.md) - This group.


**Inherits:** [Phaser.GameObjects.Group#clear](../class/Phaser.GameObjects.Group.md#clear)


> Source: [src/gameobjects/group/Group.js#L699](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L699)  
Since: 3.0.0


---

## contains

### \<instance> contains(child)


**Description:**

Tests if a Game Object is a member of this group.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| child | [Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md) | No | A Game Object. |


**Returns:** boolean - True if the Game Object is a member of this group.


**Inherits:** [Phaser.GameObjects.Group#contains](../class/Phaser.GameObjects.Group.md#contains)


> Source: [src/gameobjects/group/Group.js#L741](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L741)  
Since: 3.0.0


---

## countActive

### \<instance> countActive([value])


**Description:**

Counts the number of active (or inactive) group members.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| value | boolean | Yes | true | Count active (true) or inactive (false) group members. |


**Returns:** number - The number of group members with an active state matching the `active` argument.


**Inherits:** [Phaser.GameObjects.Group#countActive](../class/Phaser.GameObjects.Group.md#countActive)


> Source: [src/gameobjects/group/Group.js#L1122](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L1122)  
Since: 3.0.0


---

## create

### \<instance> create([x], [y], [key], [frame], [visible], [active])


**Description:**

Creates a new Game Object and adds it to this group, unless the group [is](../class/Phaser.GameObjects.Group.md#isFull).



Calls [Phaser.GameObjects.Group#createCallback](../class/Phaser.GameObjects.Group.md#createCallback).

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| x | number | Yes | 0 | The horizontal position of the new Game Object in the world. |
| y | number | Yes | 0 | The vertical position of the new Game Object in the world. |
| key | string | Yes | "defaultKey" | The texture key of the new Game Object. |
| frame | string \| number | Yes | "defaultFrame" | The texture frame of the new Game Object. |
| visible | boolean | Yes | true | The {@link Phaser.GameObjects.Components.Visible#visible} state of the new Game Object. |
| active | boolean | Yes | true | The {@link Phaser.GameObjects.GameObject#active} state of the new Game Object. |


**Returns:** any - The new Game Object (usually a Sprite, etc.).


**Inherits:** [Phaser.GameObjects.Group#create](../class/Phaser.GameObjects.Group.md#create)


> Source: [src/gameobjects/group/Group.js#L273](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L273)  
Since: 3.0.0


---

## createCallbackHandler

### \<instance> createCallbackHandler(child)


**Description:**

Enables a Game Object's Body and assigns `defaults`. Called when a Group member is added or created.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| child | [Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md) | No | The Game Object being added. |


> Source: [src/physics/arcade/PhysicsGroup.js#L209](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/arcade/PhysicsGroup.js#L209)  
Since: 3.0.0


---

## createFromConfig

### \<instance> createFromConfig(options)


**Description:**

A helper for [Phaser.GameObjects.Group#createMultiple](../class/Phaser.GameObjects.Group.md#createMultiple).

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| options | [Phaser.Types.GameObjects.Group.GroupCreateConfig](../typedef/Phaser.Types.GameObjects.Group.md#GroupCreateConfig) | No | Creation settings. |


**Returns:** Array.\<any> - The newly created Game Objects.


**Inherits:** [Phaser.GameObjects.Group#createFromConfig](../class/Phaser.GameObjects.Group.md#createFromConfig)


> Source: [src/gameobjects/group/Group.js#L359](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L359)  
Since: 3.0.0


---

## createMultiple

### \<instance> createMultiple(config)


**Description:**

Creates several Game Objects and adds them to this group.



If the group becomes [Phaser.GameObjects.Group#isFull](../class/Phaser.GameObjects.Group.md#isFull), no further Game Objects are created.



Calls [Phaser.GameObjects.Group#createMultipleCallback](../class/Phaser.GameObjects.Group.md#createMultipleCallback) and [Phaser.GameObjects.Group#createCallback](../class/Phaser.GameObjects.Group.md#createCallback).

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| config | [Phaser.Types.GameObjects.Group.GroupCreateConfig](../typedef/Phaser.Types.GameObjects.Group.md#GroupCreateConfig) \| Array.\<[Phaser.Types.GameObjects.Group.GroupCreateConfig](../typedef/Phaser.Types.GameObjects.Group.md#GroupCreateConfig)> | No | Creation settings. This can be a single configuration object or an array of such objects, which will be applied in turn. |


**Returns:** Array.\<any> - The newly created Game Objects.


**Inherits:** [Phaser.GameObjects.Group#createMultiple](../class/Phaser.GameObjects.Group.md#createMultiple)


> Source: [src/gameobjects/group/Group.js#L318](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L318)  
Since: 3.0.0


---

## destroy

### \<instance> destroy([destroyChildren], [removeFromScene])


**Description:**

Empties this Group of all children and removes it from the Scene.



Does not call [Phaser.GameObjects.Group#removeCallback](../class/Phaser.GameObjects.Group.md#removeCallback).



Children of this Group will _not_ be removed from the Scene by calling this method

unless you specify the `removeFromScene` parameter.



Children of this Group will also _not_ be destroyed by calling this method

unless you specify the `destroyChildren` parameter.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| destroyChildren | boolean | Yes | false | Also {@link Phaser.GameObjects.GameObject#destroy} each Group member. |
| removeFromScene | boolean | Yes | false | Optionally remove each Group member from the Scene. |


**Inherits:** [Phaser.GameObjects.Group#destroy](../class/Phaser.GameObjects.Group.md#destroy)


> Source: [src/gameobjects/group/Group.js#L1714](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L1714)  
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


> Source: [src/events/EventEmitter.js#L86](https://github.com/phaserjs/phaser/blob/v3.87.0/src/events/EventEmitter.js#L86)  
Since: 3.0.0


---

## eventNames

### \<instance> eventNames()


**Description:**

Return an array listing the events for which the emitter has registered listeners.


**Returns:** Array.\<(string | symbol)> - undefined


**Inherits:** [Phaser.Events.EventEmitter#eventNames](../class/Phaser.Events.EventEmitter.md#eventNames)


> Source: [src/events/EventEmitter.js#L55](https://github.com/phaserjs/phaser/blob/v3.87.0/src/events/EventEmitter.js#L55)  
Since: 3.0.0


---

## get

### \<instance> get([x], [y], [key], [frame], [visible])


**Description:**

Scans the group for the first member that has an [Phaser.GameObjects.GameObject#active](../class/Phaser.GameObjects.GameObject.md#active) state set to `false`,

assigns `x` and `y`, and returns the member.



If no inactive member is found and the group isn't full then it will create a new Game Object using `x`, `y`, `key`, `frame`, and `visible`.

The new Game Object will have its active state set to `true`.

Unless a new member is created, `key`, `frame`, and `visible` are ignored.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| x | number | Yes |  | The horizontal position of the Game Object in the world. |
| y | number | Yes |  | The vertical position of the Game Object in the world. |
| key | string | Yes | "defaultKey" | The texture key assigned to a new Game Object (if one is created). |
| frame | string \| number | Yes | "defaultFrame" | A texture frame assigned to a new Game Object (if one is created). |
| visible | boolean | Yes | true | The {@link Phaser.GameObjects.Components.Visible#visible} state of a new Game Object (if one is created). |


**Returns:** any - The first inactive group member, or a newly created member, or null.


**Inherits:** [Phaser.GameObjects.Group#get](../class/Phaser.GameObjects.Group.md#get)


> Source: [src/gameobjects/group/Group.js#L1011](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L1011)  
Since: 3.0.0


---

## getChildren

### \<instance> getChildren()


**Description:**

All members of the group.


**Returns:** Array.\<[Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md)> - The group members.


**Inherits:** [Phaser.GameObjects.Group#getChildren](../class/Phaser.GameObjects.Group.md#getChildren)


> Source: [src/gameobjects/group/Group.js#L756](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L756)  
Since: 3.0.0


---

## getFirst

### \<instance> getFirst([state], [createIfNull], [x], [y], [key], [frame], [visible])


**Description:**

Scans the Group, from top to bottom, for the first member that has an [Phaser.GameObjects.GameObject#active](../class/Phaser.GameObjects.GameObject.md#active) state matching the argument,

assigns `x` and `y`, and returns the member.



If no matching member is found and `createIfNull` is true and the group isn't full then it will create a new Game Object using `x`, `y`, `key`, `frame`, and `visible`.

Unless a new member is created, `key`, `frame`, and `visible` are ignored.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| state | boolean | Yes | false | The {@link Phaser.GameObjects.GameObject#active} value to match. |
| createIfNull | boolean | Yes | false | Create a new Game Object if no matching members are found, using the following arguments. |
| x | number | Yes |  | The horizontal position of the Game Object in the world. |
| y | number | Yes |  | The vertical position of the Game Object in the world. |
| key | string | Yes | "defaultKey" | The texture key assigned to a new Game Object (if one is created). |
| frame | string \| number | Yes | "defaultFrame" | A texture frame assigned to a new Game Object (if one is created). |
| visible | boolean | Yes | true | The {@link Phaser.GameObjects.Components.Visible#visible} state of a new Game Object (if one is created). |


**Returns:** any - The first matching group member, or a newly created member, or null.


**Inherits:** [Phaser.GameObjects.Group#getFirst](../class/Phaser.GameObjects.Group.md#getFirst)


> Source: [src/gameobjects/group/Group.js#L806](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L806)  
Since: 3.0.0


---

## getFirstAlive

### \<instance> getFirstAlive([createIfNull], [x], [y], [key], [frame], [visible])


**Description:**

Scans the group for the first member that has an [Phaser.GameObjects.GameObject#active](../class/Phaser.GameObjects.GameObject.md#active) state set to `true`,

assigns `x` and `y`, and returns the member.



If no active member is found and `createIfNull` is `true` and the group isn't full then it will create a new one using `x`, `y`, `key`, `frame`, and `visible`.

Unless a new member is created, `key`, `frame`, and `visible` are ignored.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| createIfNull | boolean | Yes | false | Create a new Game Object if no matching members are found, using the following arguments. |
| x | number | Yes |  | The horizontal position of the Game Object in the world. |
| y | number | Yes |  | The vertical position of the Game Object in the world. |
| key | string | Yes | "defaultKey" | The texture key assigned to a new Game Object (if one is created). |
| frame | string \| number | Yes | "defaultFrame" | A texture frame assigned to a new Game Object (if one is created). |
| visible | boolean | Yes | true | The {@link Phaser.GameObjects.Components.Visible#visible} state of a new Game Object (if one is created). |


**Returns:** any - The first active group member, or a newly created member, or null.


**Inherits:** [Phaser.GameObjects.Group#getFirstAlive](../class/Phaser.GameObjects.Group.md#getFirstAlive)


> Source: [src/gameobjects/group/Group.js#L1035](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L1035)  
Since: 3.0.0


---

## getFirstDead

### \<instance> getFirstDead([createIfNull], [x], [y], [key], [frame], [visible])


**Description:**

Scans the group for the first member that has an [Phaser.GameObjects.GameObject#active](../class/Phaser.GameObjects.GameObject.md#active) state set to `false`,

assigns `x` and `y`, and returns the member.



If no inactive member is found and `createIfNull` is `true` and the group isn't full then it will create a new one using `x`, `y`, `key`, `frame`, and `visible`.

The new Game Object will have an active state set to `true`.

Unless a new member is created, `key`, `frame`, and `visible` are ignored.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| createIfNull | boolean | Yes | false | Create a new Game Object if no matching members are found, using the following arguments. |
| x | number | Yes |  | The horizontal position of the Game Object in the world. |
| y | number | Yes |  | The vertical position of the Game Object in the world. |
| key | string | Yes | "defaultKey" | The texture key assigned to a new Game Object (if one is created). |
| frame | string \| number | Yes | "defaultFrame" | A texture frame assigned to a new Game Object (if one is created). |
| visible | boolean | Yes | true | The {@link Phaser.GameObjects.Components.Visible#visible} state of a new Game Object (if one is created). |


**Returns:** any - The first inactive group member, or a newly created member, or null.


**Inherits:** [Phaser.GameObjects.Group#getFirstDead](../class/Phaser.GameObjects.Group.md#getFirstDead)


> Source: [src/gameobjects/group/Group.js#L1059](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L1059)  
Since: 3.0.0


---

## getFirstNth

### \<instance> getFirstNth(nth, [state], [createIfNull], [x], [y], [key], [frame], [visible])


**Description:**

Scans the Group, from top to bottom, for the nth member that has an [Phaser.GameObjects.GameObject#active](../class/Phaser.GameObjects.GameObject.md#active) state matching the argument,

assigns `x` and `y`, and returns the member.



If no matching member is found and `createIfNull` is true and the group isn't full then it will create a new Game Object using `x`, `y`, `key`, `frame`, and `visible`.

Unless a new member is created, `key`, `frame`, and `visible` are ignored.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| nth | number | No |  | The nth matching Group member to search for. |
| state | boolean | Yes | false | The {@link Phaser.GameObjects.GameObject#active} value to match. |
| createIfNull | boolean | Yes | false | Create a new Game Object if no matching members are found, using the following arguments. |
| x | number | Yes |  | The horizontal position of the Game Object in the world. |
| y | number | Yes |  | The vertical position of the Game Object in the world. |
| key | string | Yes | "defaultKey" | The texture key assigned to a new Game Object (if one is created). |
| frame | string \| number | Yes | "defaultFrame" | A texture frame assigned to a new Game Object (if one is created). |
| visible | boolean | Yes | true | The {@link Phaser.GameObjects.Components.Visible#visible} state of a new Game Object (if one is created). |


**Returns:** any - The first matching group member, or a newly created member, or null.


**Inherits:** [Phaser.GameObjects.Group#getFirstNth](../class/Phaser.GameObjects.Group.md#getFirstNth)


> Source: [src/gameobjects/group/Group.js#L831](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L831)  
Since: 3.6.0


---

## getLast

### \<instance> getLast([state], [createIfNull], [x], [y], [key], [frame], [visible])


**Description:**

Scans the Group for the last member that has an [Phaser.GameObjects.GameObject#active](../class/Phaser.GameObjects.GameObject.md#active) state matching the argument,

assigns `x` and `y`, and returns the member.



If no matching member is found and `createIfNull` is true and the group isn't full then it will create a new Game Object using `x`, `y`, `key`, `frame`, and `visible`.

Unless a new member is created, `key`, `frame`, and `visible` are ignored.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| state | boolean | Yes | false | The {@link Phaser.GameObjects.GameObject#active} value to match. |
| createIfNull | boolean | Yes | false | Create a new Game Object if no matching members are found, using the following arguments. |
| x | number | Yes |  | The horizontal position of the Game Object in the world. |
| y | number | Yes |  | The vertical position of the Game Object in the world. |
| key | string | Yes | "defaultKey" | The texture key assigned to a new Game Object (if one is created). |
| frame | string \| number | Yes | "defaultFrame" | A texture frame assigned to a new Game Object (if one is created). |
| visible | boolean | Yes | true | The {@link Phaser.GameObjects.Components.Visible#visible} state of a new Game Object (if one is created). |


**Returns:** any - The first matching group member, or a newly created member, or null.


**Inherits:** [Phaser.GameObjects.Group#getLast](../class/Phaser.GameObjects.Group.md#getLast)


> Source: [src/gameobjects/group/Group.js#L857](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L857)  
Since: 3.6.0


---

## getLastNth

### \<instance> getLastNth(nth, [state], [createIfNull], [x], [y], [key], [frame], [visible])


**Description:**

Scans the Group for the last nth member that has an [Phaser.GameObjects.GameObject#active](../class/Phaser.GameObjects.GameObject.md#active) state matching the argument,

assigns `x` and `y`, and returns the member.



If no matching member is found and `createIfNull` is true and the group isn't full then it will create a new Game Object using `x`, `y`, `key`, `frame`, and `visible`.

Unless a new member is created, `key`, `frame`, and `visible` are ignored.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| nth | number | No |  | The nth matching Group member to search for. |
| state | boolean | Yes | false | The {@link Phaser.GameObjects.GameObject#active} value to match. |
| createIfNull | boolean | Yes | false | Create a new Game Object if no matching members are found, using the following arguments. |
| x | number | Yes |  | The horizontal position of the Game Object in the world. |
| y | number | Yes |  | The vertical position of the Game Object in the world. |
| key | string | Yes | "defaultKey" | The texture key assigned to a new Game Object (if one is created). |
| frame | string \| number | Yes | "defaultFrame" | A texture frame assigned to a new Game Object (if one is created). |
| visible | boolean | Yes | true | The {@link Phaser.GameObjects.Components.Visible#visible} state of a new Game Object (if one is created). |


**Returns:** any - The first matching group member, or a newly created member, or null.


**Inherits:** [Phaser.GameObjects.Group#getLastNth](../class/Phaser.GameObjects.Group.md#getLastNth)


> Source: [src/gameobjects/group/Group.js#L882](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L882)  
Since: 3.6.0


---

## getLength

### \<instance> getLength()


**Description:**

The number of members of the group.


**Returns:** number - undefined


**Inherits:** [Phaser.GameObjects.Group#getLength](../class/Phaser.GameObjects.Group.md#getLength)


> Source: [src/gameobjects/group/Group.js#L769](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L769)  
Since: 3.0.0


---

## getMatching

### \<instance> getMatching([property], [value], [startIndex], [endIndex])


**Description:**

Returns all children in this Group that match the given criteria based on the `property` and `value` arguments.



For example: `getMatching('visible', true)` would return only children that have their `visible` property set.



Optionally, you can specify a start and end index. For example if the Group has 100 elements,

and you set `startIndex` to 0 and `endIndex` to 50, it would return matches from only

the first 50.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| property | string | Yes | The property to test on each array element. |
| value | * | Yes | The value to test the property against. Must pass a strict (`===`) comparison check. |
| startIndex | number | Yes | An optional start index to search from. |
| endIndex | number | Yes | An optional end index to search to. |


**Returns:** Array.\<any> - An array of matching Group members. The array will be empty if nothing matched.


**Inherits:** [Phaser.GameObjects.Group#getMatching](../class/Phaser.GameObjects.Group.md#getMatching)


> Source: [src/gameobjects/group/Group.js#L782](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L782)  
Since: 3.50.0


---

## getTotalFree

### \<instance> getTotalFree()


**Description:**

The difference of [Phaser.GameObjects.Group#maxSize](../class/Phaser.GameObjects.Group.md#maxSize) and the number of active group members.



This represents the number of group members that could be created or reactivated before reaching the size limit.


**Returns:** number - maxSize minus the number of active group numbers; or a large number (if maxSize is -1).


**Inherits:** [Phaser.GameObjects.Group#getTotalFree](../class/Phaser.GameObjects.Group.md#getTotalFree)


> Source: [src/gameobjects/group/Group.js#L1162](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L1162)  
Since: 3.0.0


---

## getTotalUsed

### \<instance> getTotalUsed()


**Description:**

Counts the number of in-use (active) group members.


**Returns:** number - The number of group members with an active state of true.


**Inherits:** [Phaser.GameObjects.Group#getTotalUsed](../class/Phaser.GameObjects.Group.md#getTotalUsed)


> Source: [src/gameobjects/group/Group.js#L1149](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L1149)  
Since: 3.0.0


---

## incX

### \<instance> incX(value, [step])


**Description:**

Adds the given value to the x of each group member.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| value | number | No |  | The amount to be added to the `x` property. |
| step | number | Yes | 0 | This is added to the `value` amount, multiplied by the iteration counter. |


**Returns:** [Phaser.Physics.Arcade.Group](../class/Phaser.Physics.Arcade.Group.md) - This Group object.


**Inherits:** [Phaser.GameObjects.Group#incX](../class/Phaser.GameObjects.Group.md#incX)


> Source: [src/gameobjects/group/Group.js#L1314](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L1314)  
Since: 3.21.0


---

## incXY

### \<instance> incXY(x, [y], [stepX], [stepY])


**Description:**

Adds the given value to the x, y of each group member.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| x | number | No |  | The amount to be added to the `x` property. |
| y | number | Yes | "x" | The amount to be added to the `y` property. If `undefined` or `null` it uses the `x` value. |
| stepX | number | Yes | 0 | This is added to the `x` amount, multiplied by the iteration counter. |
| stepY | number | Yes | 0 | This is added to the `y` amount, multiplied by the iteration counter. |


**Returns:** [Phaser.Physics.Arcade.Group](../class/Phaser.Physics.Arcade.Group.md) - This Group object.


**Inherits:** [Phaser.GameObjects.Group#incXY](../class/Phaser.GameObjects.Group.md#incXY)


> Source: [src/gameobjects/group/Group.js#L1350](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L1350)  
Since: 3.21.0


---

## incY

### \<instance> incY(value, [step])


**Description:**

Adds the given value to the y of each group member.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| value | number | No |  | The amount to be added to the `y` property. |
| step | number | Yes | 0 | This is added to the `value` amount, multiplied by the iteration counter. |


**Returns:** [Phaser.Physics.Arcade.Group](../class/Phaser.Physics.Arcade.Group.md) - This Group object.


**Inherits:** [Phaser.GameObjects.Group#incY](../class/Phaser.GameObjects.Group.md#incY)


> Source: [src/gameobjects/group/Group.js#L1332](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L1332)  
Since: 3.21.0


---

## isFull

### \<instance> isFull()


**Description:**

Whether this group's size at its [maximum](../class/Phaser.GameObjects.Group.md#maxSize).


**Returns:** boolean - True if the number of members equals {@link Phaser.GameObjects.Group#maxSize}.


**Inherits:** [Phaser.GameObjects.Group#isFull](../class/Phaser.GameObjects.Group.md#isFull)


> Source: [src/gameobjects/group/Group.js#L1102](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L1102)  
Since: 3.0.0


---

## kill

### \<instance> kill(gameObject)


**Description:**

Deactivates a member of this group.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| gameObject | [Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md) | No | A member of this group. |


**Inherits:** [Phaser.GameObjects.Group#kill](../class/Phaser.GameObjects.Group.md#kill)


> Source: [src/gameobjects/group/Group.js#L1647](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L1647)  
Since: 3.0.0


---

## killAndHide

### \<instance> killAndHide(gameObject)


**Description:**

Deactivates and hides a member of this group.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| gameObject | [Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md) | No | A member of this group. |


**Inherits:** [Phaser.GameObjects.Group#killAndHide](../class/Phaser.GameObjects.Group.md#killAndHide)


> Source: [src/gameobjects/group/Group.js#L1663](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L1663)  
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


> Source: [src/events/EventEmitter.js#L75](https://github.com/phaserjs/phaser/blob/v3.87.0/src/events/EventEmitter.js#L75)  
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


> Source: [src/events/EventEmitter.js#L64](https://github.com/phaserjs/phaser/blob/v3.87.0/src/events/EventEmitter.js#L64)  
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


**Returns:** [Phaser.Physics.Arcade.Group](../class/Phaser.Physics.Arcade.Group.md) - `this`.


**Inherits:** [Phaser.Events.EventEmitter#off](../class/Phaser.Events.EventEmitter.md#off)


> Source: [src/events/EventEmitter.js#L151](https://github.com/phaserjs/phaser/blob/v3.87.0/src/events/EventEmitter.js#L151)  
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


**Returns:** [Phaser.Physics.Arcade.Group](../class/Phaser.Physics.Arcade.Group.md) - `this`.


**Inherits:** [Phaser.Events.EventEmitter#on](../class/Phaser.Events.EventEmitter.md#on)


> Source: [src/events/EventEmitter.js#L98](https://github.com/phaserjs/phaser/blob/v3.87.0/src/events/EventEmitter.js#L98)  
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


**Returns:** [Phaser.Physics.Arcade.Group](../class/Phaser.Physics.Arcade.Group.md) - `this`.


**Inherits:** [Phaser.Events.EventEmitter#once](../class/Phaser.Events.EventEmitter.md#once)


> Source: [src/events/EventEmitter.js#L124](https://github.com/phaserjs/phaser/blob/v3.87.0/src/events/EventEmitter.js#L124)  
Since: 3.0.0


---

## playAnimation

### \<instance> playAnimation(key, [startFrame])


**Description:**

[Plays](../class/Phaser.Animations.AnimationState.md#play) an animation for all members of this group.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| key | string | No |  | The string-based key of the animation to play. |
| startFrame | string | Yes | 0 | Optionally start the animation playing from this frame index. |


**Returns:** [Phaser.Physics.Arcade.Group](../class/Phaser.Physics.Arcade.Group.md) - This Group object.


**Inherits:** [Phaser.GameObjects.Group#playAnimation](../class/Phaser.GameObjects.Group.md#playAnimation)


> Source: [src/gameobjects/group/Group.js#L1084](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L1084)  
Since: 3.0.0


---

## preUpdate

### \<instance> preUpdate(time, delta)


**Description:**

Updates any group members, if [Phaser.GameObjects.Group#runChildUpdate](../class/Phaser.GameObjects.Group.md#runChildUpdate) is enabled.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| time | number | No | The current timestamp. |
| delta | number | No | The delta time elapsed since the last frame. |


**Inherits:** [Phaser.GameObjects.Group#preUpdate](../class/Phaser.GameObjects.Group.md#preUpdate)


> Source: [src/gameobjects/group/Group.js#L545](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L545)  
Since: 3.0.0


---

## propertyValueInc

### \<instance> propertyValueInc(key, value, [step], [index], [direction])


**Description:**

Adds the given value to the property as defined in `key` of each group member.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| key | string | No |  | The property to be updated. |
| value | number | No |  | The amount to set the property to. |
| step | number | Yes | 0 | This is added to the `value` amount, multiplied by the iteration counter. |
| index | number | Yes | 0 | An optional offset to start searching from within the items array. |
| direction | number | Yes | 1 | The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. |


**Returns:** [Phaser.Physics.Arcade.Group](../class/Phaser.Physics.Arcade.Group.md) - This Group object.


**Inherits:** [Phaser.GameObjects.Group#propertyValueInc](../class/Phaser.GameObjects.Group.md#propertyValueInc)


> Source: [src/gameobjects/group/Group.js#L1237](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L1237)  
Since: 3.21.0


---

## propertyValueSet

### \<instance> propertyValueSet(key, value, [step], [index], [direction])


**Description:**

Sets the property as defined in `key` of each group member to the given value.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| key | string | No |  | The property to be updated. |
| value | number | No |  | The amount to set the property to. |
| step | number | Yes | 0 | This is added to the `value` amount, multiplied by the iteration counter. |
| index | number | Yes | 0 | An optional offset to start searching from within the items array. |
| direction | number | Yes | 1 | The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. |


**Returns:** [Phaser.Physics.Arcade.Group](../class/Phaser.Physics.Arcade.Group.md) - This Group object.


**Inherits:** [Phaser.GameObjects.Group#propertyValueSet](../class/Phaser.GameObjects.Group.md#propertyValueSet)


> Source: [src/gameobjects/group/Group.js#L1216](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L1216)  
Since: 3.21.0


---

## remove

### \<instance> remove(child, [removeFromScene], [destroyChild])


**Description:**

Removes a member of this Group and optionally removes it from the Scene and / or destroys it.



Calls [Phaser.GameObjects.Group#removeCallback](../class/Phaser.GameObjects.Group.md#removeCallback).

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| child | [Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md) | No |  | The Game Object to remove. |
| removeFromScene | boolean | Yes | false | Optionally remove the Group member from the Scene it belongs to. |
| destroyChild | boolean | Yes | false | Optionally call destroy on the removed Group member. |


**Returns:** [Phaser.Physics.Arcade.Group](../class/Phaser.Physics.Arcade.Group.md) - This Group object.


**Inherits:** [Phaser.GameObjects.Group#remove](../class/Phaser.GameObjects.Group.md#remove)


> Source: [src/gameobjects/group/Group.js#L648](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L648)  
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


**Returns:** [Phaser.Physics.Arcade.Group](../class/Phaser.Physics.Arcade.Group.md) - `this`.


**Inherits:** [Phaser.Events.EventEmitter#removeAllListeners](../class/Phaser.Events.EventEmitter.md#removeAllListeners)


> Source: [src/events/EventEmitter.js#L165](https://github.com/phaserjs/phaser/blob/v3.87.0/src/events/EventEmitter.js#L165)  
Since: 3.0.0


---

## removeCallbackHandler

### \<instance> removeCallbackHandler(child)


**Description:**

Disables a Game Object's Body. Called when a Group member is removed.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| child | [Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md) | No | The Game Object being removed. |


> Source: [src/physics/arcade/PhysicsGroup.js#L232](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/arcade/PhysicsGroup.js#L232)  
Since: 3.0.0


---

## removeCollidesWith

### \<instance> removeCollidesWith(category)


**Description:**

Removes the given Collision Category from the list of those that this

Arcade Physics Body will collide with.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| category | number | No | The collision category to add. |


**Returns:** [Phaser.Physics.Arcade.Group](../class/Phaser.Physics.Arcade.Group.md) - This Game Object.


**Inherits:** [Phaser.Physics.Arcade.Components.Collision#removeCollidesWith](../namespace/Phaser.Physics.Arcade.Components.Collision.md#removeCollidesWith)


> Source: [src/physics/arcade/components/Collision.js#L80](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/arcade/components/Collision.js#L80)  
Since: 3.70.0


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


**Returns:** [Phaser.Physics.Arcade.Group](../class/Phaser.Physics.Arcade.Group.md) - `this`.


**Inherits:** [Phaser.Events.EventEmitter#removeListener](../class/Phaser.Events.EventEmitter.md#removeListener)


> Source: [src/events/EventEmitter.js#L137](https://github.com/phaserjs/phaser/blob/v3.87.0/src/events/EventEmitter.js#L137)  
Since: 3.0.0


---

## resetCollisionCategory

### \<instance> resetCollisionCategory()


**Description:**

Resets the Collision Category and Mask back to the defaults,

which is to collide with everything.


**Returns:** [Phaser.Physics.Arcade.Group](../class/Phaser.Physics.Arcade.Group.md) - This Game Object.


**Inherits:** [Phaser.Physics.Arcade.Components.Collision#resetCollisionCategory](../namespace/Phaser.Physics.Arcade.Components.Collision.md#resetCollisionCategory)


> Source: [src/physics/arcade/components/Collision.js#L130](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/arcade/components/Collision.js#L130)  
Since: 3.70.0


---

## rotate

### \<instance> rotate(value, [step])


**Description:**

Sets the rotation of each group member.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| value | number | No |  | The amount to set the rotation to, in radians. |
| step | number | Yes | 0 | This is added to the `value` amount, multiplied by the iteration counter. |


**Returns:** [Phaser.Physics.Arcade.Group](../class/Phaser.Physics.Arcade.Group.md) - This Group object.


**Inherits:** [Phaser.GameObjects.Group#rotate](../class/Phaser.GameObjects.Group.md#rotate)


> Source: [src/gameobjects/group/Group.js#L1410](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L1410)  
Since: 3.21.0


---

## rotateAround

### \<instance> rotateAround(point, angle)


**Description:**

Rotates each group member around the given point by the given angle.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| point | [Phaser.Types.Math.Vector2Like](../typedef/Phaser.Types.Math.md#Vector2Like) | No | Any object with public `x` and `y` properties. |
| angle | number | No | The angle to rotate by, in radians. |


**Returns:** [Phaser.Physics.Arcade.Group](../class/Phaser.Physics.Arcade.Group.md) - This Group object.


**Inherits:** [Phaser.GameObjects.Group#rotateAround](../class/Phaser.GameObjects.Group.md#rotateAround)


> Source: [src/gameobjects/group/Group.js#L1428](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L1428)  
Since: 3.21.0


---

## rotateAroundDistance

### \<instance> rotateAroundDistance(point, angle, distance)


**Description:**

Rotates each group member around the given point by the given angle and distance.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| point | [Phaser.Types.Math.Vector2Like](../typedef/Phaser.Types.Math.md#Vector2Like) | No | Any object with public `x` and `y` properties. |
| angle | number | No | The angle to rotate by, in radians. |
| distance | number | No | The distance from the point of rotation in pixels. |


**Returns:** [Phaser.Physics.Arcade.Group](../class/Phaser.Physics.Arcade.Group.md) - This Group object.


**Inherits:** [Phaser.GameObjects.Group#rotateAroundDistance](../class/Phaser.GameObjects.Group.md#rotateAroundDistance)


> Source: [src/gameobjects/group/Group.js#L1446](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L1446)  
Since: 3.21.0


---

## scaleX

### \<instance> scaleX(value, [step])


**Description:**

Sets the scaleX of each group member.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| value | number | No |  | The amount to set the property to. |
| step | number | Yes | 0 | This is added to the `value` amount, multiplied by the iteration counter. |


**Returns:** [Phaser.Physics.Arcade.Group](../class/Phaser.Physics.Arcade.Group.md) - This Group object.


**Inherits:** [Phaser.GameObjects.Group#scaleX](../class/Phaser.GameObjects.Group.md#scaleX)


> Source: [src/gameobjects/group/Group.js#L1523](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L1523)  
Since: 3.21.0


---

## scaleXY

### \<instance> scaleXY(scaleX, [scaleY], [stepX], [stepY])


**Description:**

Sets the scaleX, scaleY of each group member.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| scaleX | number | No |  | The amount to be added to the `scaleX` property. |
| scaleY | number | Yes |  | The amount to be added to the `scaleY` property. If `undefined` or `null` it uses the `scaleX` value. |
| stepX | number | Yes | 0 | This is added to the `scaleX` amount, multiplied by the iteration counter. |
| stepY | number | Yes | 0 | This is added to the `scaleY` amount, multiplied by the iteration counter. |


**Returns:** [Phaser.Physics.Arcade.Group](../class/Phaser.Physics.Arcade.Group.md) - This Group object.


**Inherits:** [Phaser.GameObjects.Group#scaleXY](../class/Phaser.GameObjects.Group.md#scaleXY)


> Source: [src/gameobjects/group/Group.js#L1559](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L1559)  
Since: 3.21.0


---

## scaleY

### \<instance> scaleY(value, [step])


**Description:**

Sets the scaleY of each group member.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| value | number | No |  | The amount to set the property to. |
| step | number | Yes | 0 | This is added to the `value` amount, multiplied by the iteration counter. |


**Returns:** [Phaser.Physics.Arcade.Group](../class/Phaser.Physics.Arcade.Group.md) - This Group object.


**Inherits:** [Phaser.GameObjects.Group#scaleY](../class/Phaser.GameObjects.Group.md#scaleY)


> Source: [src/gameobjects/group/Group.js#L1541](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L1541)  
Since: 3.21.0


---

## setActive

### \<instance> setActive(value)


**Description:**

Sets the `active` property of this Group.

When active, this Group runs its `preUpdate` method.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| value | boolean | No | True if this Group should be set as active, false if not. |


**Returns:** [Phaser.Physics.Arcade.Group](../class/Phaser.Physics.Arcade.Group.md) - This Group object.


**Inherits:** [Phaser.GameObjects.Group#setActive](../class/Phaser.GameObjects.Group.md#setActive)


> Source: [src/gameobjects/group/Group.js#L1180](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L1180)  
Since: 3.24.0


---

## setAlpha

### \<instance> setAlpha(value, [step])


**Description:**

Sets the alpha of each group member.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| value | number | No |  | The amount to set the alpha to. |
| step | number | Yes | 0 | This is added to the `value` amount, multiplied by the iteration counter. |


**Returns:** [Phaser.Physics.Arcade.Group](../class/Phaser.Physics.Arcade.Group.md) - This Group object.


**Inherits:** [Phaser.GameObjects.Group#setAlpha](../class/Phaser.GameObjects.Group.md#setAlpha)


> Source: [src/gameobjects/group/Group.js#L1465](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L1465)  
Since: 3.21.0


---

## setBlendMode

### \<instance> setBlendMode(value)


**Description:**

Sets the blendMode of each group member.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| value | number | No | The amount to set the property to. |


**Returns:** [Phaser.Physics.Arcade.Group](../class/Phaser.Physics.Arcade.Group.md) - This Group object.


**Inherits:** [Phaser.GameObjects.Group#setBlendMode](../class/Phaser.GameObjects.Group.md#setBlendMode)


> Source: [src/gameobjects/group/Group.js#L1597](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L1597)  
Since: 3.21.0


---

## setCollidesWith

### \<instance> setCollidesWith(categories)


**Description:**

Sets all of the Collision Categories that this Arcade Physics Body

will collide with. You can either pass a single category value, or

an array of them.



Calling this method will reset all of the collision categories,

so only those passed to this method are enabled.



If you wish to add a new category to the existing mask, call

the `addCollisionCategory` method.



If you wish to reset the collision category and mask, call

the `resetCollisionCategory` method.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| categories | number \| Array.\<number> | No | The collision category to collide with, or an array of them. |


**Returns:** [Phaser.Physics.Arcade.Group](../class/Phaser.Physics.Arcade.Group.md) - This Game Object.


**Inherits:** [Phaser.Physics.Arcade.Components.Collision#setCollidesWith](../namespace/Phaser.Physics.Arcade.Components.Collision.md#setCollidesWith)


> Source: [src/physics/arcade/components/Collision.js#L100](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/arcade/components/Collision.js#L100)  
Since: 3.70.0


---

## setCollisionCategory

### \<instance> setCollisionCategory(category)


**Description:**

Sets the Collision Category that this Arcade Physics Body

will use in order to determine what it can collide with.



It can only have one single category assigned to it.



If you wish to reset the collision category and mask, call

the `resetCollisionCategory` method.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| category | number | No | The collision category. |


**Returns:** [Phaser.Physics.Arcade.Group](../class/Phaser.Physics.Arcade.Group.md) - This Game Object.


**Inherits:** [Phaser.Physics.Arcade.Components.Collision#setCollisionCategory](../namespace/Phaser.Physics.Arcade.Components.Collision.md#setCollisionCategory)


> Source: [src/physics/arcade/components/Collision.js#L17](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/arcade/components/Collision.js#L17)  
Since: 3.70.0


---

## setDepth

### \<instance> setDepth(value, [step])


**Description:**

Sets the depth of each group member.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| value | number | No |  | The amount to set the property to. |
| step | number | Yes | 0 | This is added to the `value` amount, multiplied by the iteration counter. |


**Returns:** [Phaser.Physics.Arcade.Group](../class/Phaser.Physics.Arcade.Group.md) - This Group object.


**Inherits:** [Phaser.GameObjects.Group#setDepth](../class/Phaser.GameObjects.Group.md#setDepth)


> Source: [src/gameobjects/group/Group.js#L1579](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L1579)  
Since: 3.0.0


---

## setHitArea

### \<instance> setHitArea(hitArea, hitAreaCallback)


**Description:**

Passes all group members to the Input Manager to enable them for input with identical areas and callbacks.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| hitArea | * | No | Either an input configuration object, or a geometric shape that defines the hit area for the Game Object. If not specified a Rectangle will be used. |
| hitAreaCallback | [Phaser.Types.Input.HitAreaCallback](../typedef/Phaser.Types.Input.md#HitAreaCallback) | No | A callback to be invoked when the Game Object is interacted with. If you provide a shape you must also provide a callback. |


**Returns:** [Phaser.Physics.Arcade.Group](../class/Phaser.Physics.Arcade.Group.md) - This Group object.


**Inherits:** [Phaser.GameObjects.Group#setHitArea](../class/Phaser.GameObjects.Group.md#setHitArea)


> Source: [src/gameobjects/group/Group.js#L1614](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L1614)  
Since: 3.21.0


---

## setName

### \<instance> setName(value)


**Description:**

Sets the `name` property of this Group.

The `name` property is not populated by Phaser and is presented for your own use.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| value | string | No | The name to be given to this Group. |


**Returns:** [Phaser.Physics.Arcade.Group](../class/Phaser.Physics.Arcade.Group.md) - This Group object.


**Inherits:** [Phaser.GameObjects.Group#setName](../class/Phaser.GameObjects.Group.md#setName)


> Source: [src/gameobjects/group/Group.js#L1198](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L1198)  
Since: 3.24.0


---

## setOrigin

### \<instance> setOrigin(originX, [originY], [stepX], [stepY])


**Description:**

Sets the originX, originY of each group member.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| originX | number | No |  | The amount to set the `originX` property to. |
| originY | number | Yes |  | The amount to set the `originY` property to. If `undefined` or `null` it uses the `originX` value. |
| stepX | number | Yes | 0 | This is added to the `originX` amount, multiplied by the iteration counter. |
| stepY | number | Yes | 0 | This is added to the `originY` amount, multiplied by the iteration counter. |


**Returns:** [Phaser.Physics.Arcade.Group](../class/Phaser.Physics.Arcade.Group.md) - This Group object.


**Inherits:** [Phaser.GameObjects.Group#setOrigin](../class/Phaser.GameObjects.Group.md#setOrigin)


> Source: [src/gameobjects/group/Group.js#L1503](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L1503)  
Since: 3.21.0


---

## setTint

### \<instance> setTint(topLeft, [topRight], [bottomLeft], [bottomRight])


**Description:**

Sets the tint of each group member.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| topLeft | number | No | The tint being applied to top-left corner of item. If other parameters are given no value, this tint will be applied to whole item. |
| topRight | number | Yes | The tint to be applied to top-right corner of item. |
| bottomLeft | number | Yes | The tint to be applied to the bottom-left corner of item. |
| bottomRight | number | Yes | The tint to be applied to the bottom-right corner of item. |


**Returns:** [Phaser.Physics.Arcade.Group](../class/Phaser.Physics.Arcade.Group.md) - This Group object.


**Inherits:** [Phaser.GameObjects.Group#setTint](../class/Phaser.GameObjects.Group.md#setTint)


> Source: [src/gameobjects/group/Group.js#L1483](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L1483)  
Since: 3.21.0


---

## setVelocity

### \<instance> setVelocity(x, y, [step])


**Description:**

Sets the velocity of each Group member.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| x | number | No |  | The horizontal velocity. |
| y | number | No |  | The vertical velocity. |
| step | number | Yes | 0 | The velocity increment. When set, the first member receives velocity (x, y), the second (x + step, y + step), and so on. |


**Returns:** [Phaser.Physics.Arcade.Group](../class/Phaser.Physics.Arcade.Group.md) - This Physics Group object.


> Source: [src/physics/arcade/PhysicsGroup.js#L248](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/arcade/PhysicsGroup.js#L248)  
Since: 3.0.0


---

## setVelocityX

### \<instance> setVelocityX(value, [step])


**Description:**

Sets the horizontal velocity of each Group member.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| value | number | No |  | The velocity value. |
| step | number | Yes | 0 | The velocity increment. When set, the first member receives velocity (x), the second (x + step), and so on. |


**Returns:** [Phaser.Physics.Arcade.Group](../class/Phaser.Physics.Arcade.Group.md) - This Physics Group object.


> Source: [src/physics/arcade/PhysicsGroup.js#L274](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/arcade/PhysicsGroup.js#L274)  
Since: 3.0.0


---

## setVelocityY

### \<instance> setVelocityY(value, [step])


**Description:**

Sets the vertical velocity of each Group member.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| value | number | No |  | The velocity value. |
| step | number | Yes | 0 | The velocity increment. When set, the first member receives velocity (y), the second (y + step), and so on. |


**Returns:** [Phaser.Physics.Arcade.Group](../class/Phaser.Physics.Arcade.Group.md) - This Physics Group object.


> Source: [src/physics/arcade/PhysicsGroup.js#L299](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/arcade/PhysicsGroup.js#L299)  
Since: 3.0.0


---

## setVisible

### \<instance> setVisible(value, [index], [direction])


**Description:**

Sets the visible of each group member.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| value | boolean | No |  | The value to set the property to. |
| index | number | Yes | 0 | An optional offset to start searching from within the items array. |
| direction | number | Yes | 1 | The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. |


**Returns:** [Phaser.Physics.Arcade.Group](../class/Phaser.Physics.Arcade.Group.md) - This Group object.


**Inherits:** [Phaser.GameObjects.Group#setVisible](../class/Phaser.GameObjects.Group.md#setVisible)


> Source: [src/gameobjects/group/Group.js#L1680](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L1680)  
Since: 3.21.0


---

## setX

### \<instance> setX(value, [step])


**Description:**

Sets the x of each group member.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| value | number | No |  | The amount to set the property to. |
| step | number | Yes | 0 | This is added to the `value` amount, multiplied by the iteration counter. |


**Returns:** [Phaser.Physics.Arcade.Group](../class/Phaser.Physics.Arcade.Group.md) - This Group object.


**Inherits:** [Phaser.GameObjects.Group#setX](../class/Phaser.GameObjects.Group.md#setX)


> Source: [src/gameobjects/group/Group.js#L1258](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L1258)  
Since: 3.21.0


---

## setXY

### \<instance> setXY(x, [y], [stepX], [stepY])


**Description:**

Sets the x, y of each group member.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| x | number | No |  | The amount to set the `x` property to. |
| y | number | Yes | "x" | The amount to set the `y` property to. If `undefined` or `null` it uses the `x` value. |
| stepX | number | Yes | 0 | This is added to the `x` amount, multiplied by the iteration counter. |
| stepY | number | Yes | 0 | This is added to the `y` amount, multiplied by the iteration counter. |


**Returns:** [Phaser.Physics.Arcade.Group](../class/Phaser.Physics.Arcade.Group.md) - This Group object.


**Inherits:** [Phaser.GameObjects.Group#setXY](../class/Phaser.GameObjects.Group.md#setXY)


> Source: [src/gameobjects/group/Group.js#L1294](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L1294)  
Since: 3.21.0


---

## setY

### \<instance> setY(value, [step])


**Description:**

Sets the y of each group member.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| value | number | No |  | The amount to set the property to. |
| step | number | Yes | 0 | This is added to the `value` amount, multiplied by the iteration counter. |


**Returns:** [Phaser.Physics.Arcade.Group](../class/Phaser.Physics.Arcade.Group.md) - This Group object.


**Inherits:** [Phaser.GameObjects.Group#setY](../class/Phaser.GameObjects.Group.md#setY)


> Source: [src/gameobjects/group/Group.js#L1276](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L1276)  
Since: 3.21.0


---

## shiftPosition

### \<instance> shiftPosition(x, y, [direction])


**Description:**

Iterate through the group members changing the position of each element to be that of the element that came before

it in the array (or after it if direction = 1)



The first group member position is set to x/y.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| x | number | No |  | The x coordinate to place the first item in the array at. |
| y | number | No |  | The y coordinate to place the first item in the array at. |
| direction | number | Yes | 0 | The iteration direction. 0 = first to last and 1 = last to first. |


**Returns:** [Phaser.Physics.Arcade.Group](../class/Phaser.Physics.Arcade.Group.md) - This Group object.


**Inherits:** [Phaser.GameObjects.Group#shiftPosition](../class/Phaser.GameObjects.Group.md#shiftPosition)


> Source: [src/gameobjects/group/Group.js#L1370](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L1370)  
Since: 3.21.0


---

## shuffle

### \<instance> shuffle()


**Description:**

Shuffles the group members in place.


**Returns:** [Phaser.Physics.Arcade.Group](../class/Phaser.Physics.Arcade.Group.md) - This Group object.


**Inherits:** [Phaser.GameObjects.Group#shuffle](../class/Phaser.GameObjects.Group.md#shuffle)


> Source: [src/gameobjects/group/Group.js#L1632](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L1632)  
Since: 3.21.0


---

## shutdown

### \<instance> shutdown()


**Description:**

Removes all listeners.


**Inherits:** [Phaser.Events.EventEmitter#shutdown](../class/Phaser.Events.EventEmitter.md#shutdown)


> Source: [src/events/EventEmitter.js#L31](https://github.com/phaserjs/phaser/blob/v3.87.0/src/events/EventEmitter.js#L31)  
Since: 3.0.0


---

## toggleVisible

### \<instance> toggleVisible()


**Description:**

Toggles (flips) the visible state of each member of this group.


**Returns:** [Phaser.Physics.Arcade.Group](../class/Phaser.Physics.Arcade.Group.md) - This Group object.


**Inherits:** [Phaser.GameObjects.Group#toggleVisible](../class/Phaser.GameObjects.Group.md#toggleVisible)


> Source: [src/gameobjects/group/Group.js#L1699](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L1699)  
Since: 3.0.0


---

## willCollideWith

### \<instance> willCollideWith(category)


**Description:**

Checks to see if the given Collision Category will collide with

this Arcade Physics object or not.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| category | number | No | Collision category value to test. |


**Returns:** boolean - `true` if the given category will collide with this object, otherwise `false`.


**Inherits:** [Phaser.Physics.Arcade.Components.Collision#willCollideWith](../namespace/Phaser.Physics.Arcade.Components.Collision.md#willCollideWith)


> Source: [src/physics/arcade/components/Collision.js#L42](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/arcade/components/Collision.js#L42)  
Since: 3.70.0


---

# Private Methods

## getHandler

### \<instance> getHandler(forwards, nth, [state], [createIfNull], [x], [y], [key], [frame], [visible])


**Description:**

Scans the group for the last member that has an [Phaser.GameObjects.GameObject#active](../class/Phaser.GameObjects.GameObject.md#active) state matching the argument,

assigns `x` and `y`, and returns the member.



If no matching member is found and `createIfNull` is true and the group isn't full then it will create a new Game Object using `x`, `y`, `key`, `frame`, and `visible`.

Unless a new member is created, `key`, `frame`, and `visible` are ignored.


**Access:** private

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| forwards | boolean | No |  | Search front to back or back to front? |
| nth | number | No |  | Stop matching after nth successful matches. |
| state | boolean | Yes | false | The {@link Phaser.GameObjects.GameObject#active} value to match. |
| createIfNull | boolean | Yes | false | Create a new Game Object if no matching members are found, using the following arguments. |
| x | number | Yes |  | The horizontal position of the Game Object in the world. |
| y | number | Yes |  | The vertical position of the Game Object in the world. |
| key | string | Yes | "defaultKey" | The texture key assigned to a new Game Object (if one is created). |
| frame | string \| number | Yes | "defaultFrame" | A texture frame assigned to a new Game Object (if one is created). |
| visible | boolean | Yes | true | The {@link Phaser.GameObjects.Components.Visible#visible} state of a new Game Object (if one is created). |


**Returns:** any - The first matching group member, or a newly created member, or null.


**Inherits:** [Phaser.GameObjects.Group#getHandler](../class/Phaser.GameObjects.Group.md#getHandler)


> Source: [src/gameobjects/group/Group.js#L908](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/Group.js#L908)  
Since: 3.6.0


---

