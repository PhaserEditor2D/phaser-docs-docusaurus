---
visibility: public
slug: physics-arcade-components
title: Phaser.Physics.Arcade.Components

seoTitle: Phaser.Physics.Arcade.Components
seoDescription: Phaser v3.85.2 Documentation for 
ogImage: 
---




Scope: 
static
> Source: [src/physics/arcade/components/index.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/arcade/components/index.js#L7)  


# Static functions

- [Acceleration](../namespace/physics-arcade-components-acceleration)
- [Angular](../namespace/physics-arcade-components-angular)
- [Bounce](../namespace/physics-arcade-components-bounce)
- [Collision](../namespace/physics-arcade-components-collision)
- [Debug](../namespace/physics-arcade-components-debug)
- [Drag](../namespace/physics-arcade-components-drag)
- [Enable](../namespace/physics-arcade-components-enable)
- [Friction](../namespace/physics-arcade-components-friction)
- [Gravity](../namespace/physics-arcade-components-gravity)
- [Immovable](../namespace/physics-arcade-components-immovable)
- [Mass](../namespace/physics-arcade-components-mass)
- [Pushable](../namespace/physics-arcade-components-pushable)
- [Size](../namespace/physics-arcade-components-size)
- [Velocity](../namespace/physics-arcade-components-velocity)
# Static functions

## OverlapCirc

### \<static> OverlapCirc(x, y, radius, [includeDynamic], [includeStatic])


**Description:**

This method will search the given circular area and return an array of all physics bodies that
overlap with it. It can return either Dynamic, Static bodies or a mixture of both.

A body only has to intersect with the search area to be considered, it doesn't have to be fully
contained within it.

If Arcade Physics is set to use the RTree (which it is by default) then the search is rather fast,
otherwise the search is O(N) for Dynamic Bodies.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| x | number | No |  | The x coordinate of the center of the area to search within. |
| y | number | No |  | The y coordinate of the center of the area to search within. |
| radius | number | No |  | The radius of the area to search within. |
| includeDynamic | boolean | Yes | true | Should the search include Dynamic Bodies? |
| includeStatic | boolean | Yes | false | Should the search include Static Bodies? |


**Returns:** Array.\<[Phaser.Physics.Arcade.Body](../class/Phaser.Physics.Arcade.Body.md)>, Array.\<[Phaser.Physics.Arcade.StaticBody](../class/Phaser.Physics.Arcade.StaticBody.md)> - An array of bodies that overlap with the given area.


> Source: [src/physics/arcade/components/OverlapCirc.js#L6](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/arcade/components/OverlapCirc.js#L6)  
Since: 3.21.0


---

## OverlapRect

### \<static> OverlapRect(x, y, width, height, [includeDynamic], [includeStatic])


**Description:**

This method will search the given rectangular area and return an array of all physics bodies that
overlap with it. It can return either Dynamic, Static bodies or a mixture of both.

A body only has to intersect with the search area to be considered, it doesn't have to be fully
contained within it.

If Arcade Physics is set to use the RTree (which it is by default) then the search for is extremely fast,
otherwise the search is O(N) for Dynamic Bodies.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| x | number | No |  | The top-left x coordinate of the area to search within. |
| y | number | No |  | The top-left y coordinate of the area to search within. |
| width | number | No |  | The width of the area to search within. |
| height | number | No |  | The height of the area to search within. |
| includeDynamic | boolean | Yes | true | Should the search include Dynamic Bodies? |
| includeStatic | boolean | Yes | false | Should the search include Static Bodies? |


**Returns:** Array.\<[Phaser.Physics.Arcade.Body](../class/Phaser.Physics.Arcade.Body.md)>, Array.\<[Phaser.Physics.Arcade.StaticBody](../class/Phaser.Physics.Arcade.StaticBody.md)> - An array of bodies that overlap with the given area.


> Source: [src/physics/arcade/components/OverlapRect.js#L1](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/arcade/components/OverlapRect.js#L1)  
Since: 3.17.0


---

