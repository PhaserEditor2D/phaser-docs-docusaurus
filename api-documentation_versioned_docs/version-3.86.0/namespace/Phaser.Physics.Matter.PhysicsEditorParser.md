---
visibility: public
slug: namespace/physics-matter-physicseditorparser
title: Phaser.Physics.Matter.PhysicsEditorParser

seoTitle: Phaser.Physics.Matter.PhysicsEditorParser
seoDescription: Phaser v3.86.0 Documentation for 
ogImage: 
---




Scope: 
static
> Source: [src/physics/matter-js/PhysicsEditorParser.js#L15](https://github.com/phaserjs/phaser/blob/v3.86.0/src/physics/matter-js/PhysicsEditorParser.js#L15)  
Since: 3.10.0

# Static functions

## parseBody

### \<static> parseBody(x, y, config, [options])


**Description:**

Parses a body element exported by PhysicsEditor.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| x | number | No | The horizontal world location of the body. |
| y | number | No | The vertical world location of the body. |
| config | object | No | The body configuration and fixture (child body) definitions, as exported by PhysicsEditor. |
| options | [Phaser.Types.Physics.Matter.MatterBodyConfig](../typedef/Phaser.Types.Physics.Matter.md#MatterBodyConfig) | Yes | An optional Body configuration object that is used to set initial Body properties on creation. |


**Returns:** MatterJS.BodyType - A compound Matter JS Body.


> Source: [src/physics/matter-js/PhysicsEditorParser.js#L24](https://github.com/phaserjs/phaser/blob/v3.86.0/src/physics/matter-js/PhysicsEditorParser.js#L24)  
Since: 3.10.0


---

## parseFixture

### \<static> parseFixture(fixtureConfig)


**Description:**

Parses an element of the "fixtures" list exported by PhysicsEditor

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| fixtureConfig | object | No | The fixture object to parse. |


**Returns:** Array.\<MatterJS.BodyType> - - An array of Matter JS Bodies.


> Source: [src/physics/matter-js/PhysicsEditorParser.js#L70](https://github.com/phaserjs/phaser/blob/v3.86.0/src/physics/matter-js/PhysicsEditorParser.js#L70)  
Since: 3.10.0


---

## parseVertices

### \<static> parseVertices(vertexSets, [options])


**Description:**

Parses the "vertices" lists exported by PhysicsEditor.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| vertexSets | array | No | The vertex lists to parse. |
| options | [Phaser.Types.Physics.Matter.MatterBodyConfig](../typedef/Phaser.Types.Physics.Matter.md#MatterBodyConfig) | Yes | An optional Body configuration object that is used to set initial Body properties on creation. |


**Returns:** Array.\<MatterJS.BodyType> - - An array of Matter JS Bodies.


> Source: [src/physics/matter-js/PhysicsEditorParser.js#L104](https://github.com/phaserjs/phaser/blob/v3.86.0/src/physics/matter-js/PhysicsEditorParser.js#L104)  
Since: 3.10.0


---

