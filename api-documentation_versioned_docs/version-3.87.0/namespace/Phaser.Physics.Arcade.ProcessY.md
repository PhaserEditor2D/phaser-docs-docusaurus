---
visibility: public
slug: physics-arcade-processy
title: Phaser.Physics.Arcade.ProcessY

seoTitle: Phaser.Physics.Arcade.ProcessY
seoDescription: Phaser v3.87.0 Documentation for 
ogImage: 
---




Scope: 
static
> Source: [src/physics/arcade/ProcessY.js#L403](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/arcade/ProcessY.js#L403)  


# Static functions

## BlockCheck

### \<static> BlockCheck()


**Description:**

Blocked Direction checks, because it doesn't matter if an object can be pushed

or not, blocked is blocked.


**Returns:** number - The BlockCheck result. 0 = not blocked. 1 = Body 1 blocked. 2 = Body 2 blocked.


> Source: [src/physics/arcade/ProcessY.js#L71](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/arcade/ProcessY.js#L71)  
Since: 3.50.0


---

## Check

### \<static> Check()


**Description:**

The main check function. Runs through one of the four possible tests and returns the results.


**Returns:** boolean - `true` if a check passed, otherwise `false`.


> Source: [src/physics/arcade/ProcessY.js#L118](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/arcade/ProcessY.js#L118)  
Since: 3.50.0


---

## Run

### \<static> Run(side)


**Description:**

The main check function. Runs through one of the four possible tests and returns the results.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| side | number | No | The side to test. As passed in by the `Check` function. |


**Returns:** boolean - Always returns `true`.


> Source: [src/physics/arcade/ProcessY.js#L169](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/arcade/ProcessY.js#L169)  
Since: 3.50.0


---

## RunImmovableBody1

### \<static> RunImmovableBody1(blockedState)


**Description:**

This function is run when Body1 is Immovable and Body2 is not.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| blockedState | number | No | The block state value. |


> Source: [src/physics/arcade/ProcessY.js#L331](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/arcade/ProcessY.js#L331)  
Since: 3.50.0


---

## RunImmovableBody2

### \<static> RunImmovableBody2(blockedState)


**Description:**

This function is run when Body2 is Immovable and Body1 is not.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| blockedState | number | No | The block state value. |


> Source: [src/physics/arcade/ProcessY.js#L367](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/arcade/ProcessY.js#L367)  
Since: 3.50.0


---

## Set

### \<static> Set(b1, b2, ov)


**Description:**

Sets all of the local processing values and calculates the velocity exchanges.



Then runs `BlockCheck` and returns the value from it.



This method is called by `Phaser.Physics.Arcade.SeparateY` and should not be

called directly.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| b1 | [Phaser.Physics.Arcade.Body](../class/Phaser.Physics.Arcade.Body.md) | No | The first Body to separate. |
| b2 | [Phaser.Physics.Arcade.Body](../class/Phaser.Physics.Arcade.Body.md) | No | The second Body to separate. |
| ov | number | No | The overlap value. |


**Returns:** number - The BlockCheck result. 0 = not blocked. 1 = Body 1 blocked. 2 = Body 2 blocked.


> Source: [src/physics/arcade/ProcessY.js#L25](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/arcade/ProcessY.js#L25)  
Since: 3.50.0


---

