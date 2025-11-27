---
slug: arcade-physics-properties
title: Arcade physics body properties
---

When you select an object, the Inspector view shows the editors for editing the Arcade body of the object.

The properties are grouped by sections:


## Arcade Physics Body section

It allows changing the type of body to [dynamic](https://docs.phaser.io/api-documentation/class/physics-arcade-body) or [static](https://docs.phaser.io/api-documentation/class/physics-arcade-staticbody). And set the [enable flag](https://docs.phaser.io/api-documentation/class/physics-arcade-body#enable):

![Arcade Physics Body section.](https://cdn.phaser.io/editor-docs/arcade-physics-body-properties-20221006.webp)


## Arcade Physics Body Geometry section

This section contains the properties for setting the offset & size of the body. You can select the body’s shape in the **Geometry** parameter. If the body is rectangular, you can change its [Size](https://docs.phaser.io/api-documentation/class/physics-arcade-body#setsize). If the body is circular, you can change its [Radius](https://docs.phaser.io/api-documentation/class/physics-arcade-body#setcircle). In both cases, you can change the [Offset](https://docs.phaser.io/api-documentation/class/physics-arcade-body#setoffset).

![Arcade Physics Body Geometry section.](https://cdn.phaser.io/editor-docs/arcade-physics-body-geometry-properties-20221006.webp)

Another way of changing the body’s offset and size is activating the [Arcade Physics Body Tool](../manipulation-tools#arcade-physics-body-tool).

Also, in the scene context menu, in the **Arcade Physics**, there are the options **Center Body** and **Resize Body To Object Size**. Those commands are also available in the three-dots menu of the properties section:

![Arcade Physics Body Geometry section's menu.](https://cdn.phaser.io/editor-docs/arcade-physics-body-geaometry-properties-menu-20221006.webp)

The **Center Arcade Body** commands places the body at the center of the object. The **Resize Body To Object Size** command centers the body and resizes it to fill the whole object. If the body is circular, it changes the radius to fill the object’s width.


## Arcade Physics Body Movement section

This sections contains all body’s properties related to the movement:

* [Move](https://docs.phaser.io/api-documentation/class/physics-arcade-body#moves)
* [Velocity](https://docs.phaser.io/api-documentation/class/physics-arcade-body#velocity)
* [Max Velocity](https://docs.phaser.io/api-documentation/class/physics-arcade-body#maxvelocity)
* [Max Speed](https://docs.phaser.io/api-documentation/class/physics-arcade-body#maxspeed)
* [Allow Gravity](https://docs.phaser.io/api-documentation/class/physics-arcade-body#allowgravity)
* [Gravity](https://docs.phaser.io/api-documentation/class/physics-arcade-body#gravity)
* [Acceleration](https://docs.phaser.io/api-documentation/class/physics-arcade-body#acceleration)
* [Use Damping](https://docs.phaser.io/api-documentation/class/physics-arcade-body#usedamping)
* [Allow Drag](https://docs.phaser.io/api-documentation/class/physics-arcade-body#allowdrag)
* [Drag](https://docs.phaser.io/api-documentation/class/physics-arcade-body#drag)
* [Allow Rotation](https://docs.phaser.io/api-documentation/class/physics-arcade-body#allowrotation)
* [Angular Velocity](https://docs.phaser.io/api-documentation/class/physics-arcade-body#angularvelocity)
* [Angular Acceleration](https://docs.phaser.io/api-documentation/class/physics-arcade-body#angularacceleration)
* [Angular Drag](https://docs.phaser.io/api-documentation/class/physics-arcade-body#angulardrag)
* [Max Angular](https://docs.phaser.io/api-documentation/class/physics-arcade-body#maxangular)

![Arcade Physics Body Movement section.](https://cdn.phaser.io/editor-docs/arcade-physics-body-movement-properties-20221006.webp)


## Arcade Physics Body Collision section

This section contains the body’s properties related to collision:

* [Pushable](https://docs.phaser.io/api-documentation/class/physics-arcade-body#pushable)
* [Immovable](https://docs.phaser.io/api-documentation/class/physics-arcade-body#immovable)
* [Mass](https://docs.phaser.io/api-documentation/class/physics-arcade-body#mass)
* [Bounce](https://docs.phaser.io/api-documentation/class/physics-arcade-body#bounce)
* [Friction](https://docs.phaser.io/api-documentation/class/physics-arcade-body#friction)
* [Overlap](https://docs.phaser.io/api-documentation/class/physics-arcade-body#overlapx)
* [OverlapR](https://docs.phaser.io/api-documentation/class/physics-arcade-body#overlapr)
* [Collide World Bounds](https://docs.phaser.io/api-documentation/class/physics-arcade-body#collideworldbounds)
* [On World Bounds](https://docs.phaser.io/api-documentation/class/physics-arcade-body#onworldbounds)
* [Check Collision](https://docs.phaser.io/api-documentation/class/physics-arcade-body#checkcollision)

![Arcade Physics Body Collision properties.](https://cdn.phaser.io/editor-docs/arcade-physics-body-collision-properties-20231205.webp)
