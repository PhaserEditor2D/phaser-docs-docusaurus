---
visibility: public
slug: physics-matter-physicsjsonparser
title: Phaser.Physics.Matter.PhysicsJSONParser

seoTitle: Phaser.Physics.Matter.PhysicsJSONParser
seoDescription: Phaser v3.85.2 Documentation for 
ogImage: 
---




Scope: 
static
> Source: [src/physics/matter-js/PhysicsJSONParser.js#L10](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/matter-js/PhysicsJSONParser.js#L10)  
Since: 3.22.0

# Static functions

## parseBody

### \<static> parseBody(x, y, config, [options])


**Description:**

Parses a body element from the given JSON data.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| x | number | No | The horizontal world location of the body. |
| y | number | No | The vertical world location of the body. |
| config | object | No | The body configuration data. |
| options | [Phaser.Types.Physics.Matter.MatterBodyConfig](../typedef/Phaser.Types.Physics.Matter.md#MatterBodyConfig) | Yes | An optional Body configuration object that is used to set initial Body properties on creation. |


**Returns:** MatterJS.BodyType - A Matter JS Body.


> Source: [src/physics/matter-js/PhysicsJSONParser.js#L53](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/matter-js/PhysicsJSONParser.js#L53)  
Since: 3.22.0


---

