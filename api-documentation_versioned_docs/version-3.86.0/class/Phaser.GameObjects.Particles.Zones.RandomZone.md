---
visibility: public
slug: gameobjects-particles-zones-randomzone
title: RandomZone
description: Phaser.GameObjects.Particles.Zones.RandomZone
seoTitle: Phaser.GameObjects.Particles.Zones.RandomZone
seoDescription: Phaser v3.86.0 Documentation for Phaser.GameObjects.Particles.Zones.RandomZone
ogImage: 
---


A zone that places particles randomly within a shapes area.

**Constructor**

`new RandomZone(source)`

**Parameters**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| source | [Phaser.Types.GameObjects.Particles.RandomZoneSource](../typedef/Phaser.Types.GameObjects.Particles.md#RandomZoneSource) | No | An object instance with a `getRandomPoint(point)` method. |

---


**Scope**: static

> Source: [src/gameobjects/particles/zones/RandomZone.js#L10](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/zones/RandomZone.js#L10)  
Since: 3.0.0

# Public Members

## source

### source: [Phaser.Types.GameObjects.Particles.RandomZoneSource](../typedef/Phaser.Types.GameObjects.Particles.md#RandomZoneSource)


**Description:**

An object instance with a `getRandomPoint(point)` method.


> Source: [src/gameobjects/particles/zones/RandomZone.js#L27](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/zones/RandomZone.js#L27)  
Since: 3.0.0


---

## total

### total: number


**Description:**

The total number of particles this zone will emit before the Emitter

transfers control over to the next zone in its emission zone list.



By default this is -1, meaning it will never pass over from this

zone to another one. You can call the `ParticleEmitter.setEmitZone`

method to change it, or set this value to something else via the

config, or directly at runtime.



A value of 1 would mean the zones rotate in order, but it can

be set to any integer value.


> Source: [src/gameobjects/particles/zones/RandomZone.js#L46](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/zones/RandomZone.js#L46)  
Since: 3.60.0


---

# Private Members

## _tempVec

### _tempVec: [Phaser.Math.Vector2](../class/Phaser.Math.Vector2.md)


**Description:**

Internal calculation vector.


**Access:** private


> Source: [src/gameobjects/particles/zones/RandomZone.js#L36](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/zones/RandomZone.js#L36)  
Since: 3.0.0


---

# Public Methods

## getPoint

### \<instance> getPoint(particle)


**Description:**

Get the next point in the Zone and set its coordinates on the given Particle.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| particle | [Phaser.GameObjects.Particles.Particle](../class/Phaser.GameObjects.Particles.Particle.md) | No | The Particle. |


> Source: [src/gameobjects/particles/zones/RandomZone.js#L65](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/zones/RandomZone.js#L65)  
Since: 3.0.0


---

