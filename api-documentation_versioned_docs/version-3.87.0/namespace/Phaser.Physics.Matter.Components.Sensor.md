---
visibility: public
slug: physics-matter-components-sensor
title: Phaser.Physics.Matter.Components.Sensor

seoTitle: Phaser.Physics.Matter.Components.Sensor
seoDescription: Phaser v3.87.0 Documentation for 
ogImage: 
---




Scope: 
static
> Source: [src/physics/matter-js/components/Sensor.js#L7](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/matter-js/components/Sensor.js#L7)  
Since: 3.0.0

# Static functions

## isSensor

### \<instance> isSensor()


**Description:**

Is the body belonging to this Game Object a sensor or not?


**Returns:** boolean - `true` if the body is a sensor, otherwise `false`.


> Source: [src/physics/matter-js/components/Sensor.js#L33](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/matter-js/components/Sensor.js#L33)  
Since: 3.0.0


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


**Returns:** [Phaser.Physics.Matter.Components.Sensor](../namespace/Phaser.Physics.Matter.Components.Sensor.md) - This Game Object instance.


> Source: [src/physics/matter-js/components/Sensor.js#L15](https://github.com/phaserjs/phaser/blob/v3.87.0/src/physics/matter-js/components/Sensor.js#L15)  
Since: 3.0.0


---

