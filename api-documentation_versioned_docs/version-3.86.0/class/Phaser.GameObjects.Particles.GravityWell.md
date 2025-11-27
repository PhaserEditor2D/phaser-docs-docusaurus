---
visibility: public
slug: class/gameobjects-particles-gravitywell
title: GravityWell
description: Phaser.GameObjects.Particles.GravityWell
seoTitle: Phaser.GameObjects.Particles.GravityWell
seoDescription: Phaser v3.86.0 Documentation for Phaser.GameObjects.Particles.GravityWell
ogImage: 
---


The Gravity Well Particle Processor applies a force on the particles to draw

them towards, or repel them from, a single point.



The force applied is inversely proportional to the square of the distance

from the particle to the point, in accordance with Newton's law of gravity.



This simulates the effect of gravity over large distances (as between planets, for example).

**Constructor**

`new GravityWell([x], [y], [power], [epsilon], [gravity])`

**Parameters**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| x | number \| [Phaser.Types.GameObjects.Particles.GravityWellConfig](../typedef/Phaser.Types.GameObjects.Particles.md#GravityWellConfig) | Yes | 0 | The x coordinate of the Gravity Well, in world space. |
| y | number | Yes | 0 | The y coordinate of the Gravity Well, in world space. |
| power | number | Yes | 0 | The strength of the gravity force - larger numbers produce a stronger force. |
| epsilon | number | Yes | 100 | The minimum distance for which the gravity force is calculated. |
| gravity | number | Yes | 50 | The gravitational force of this Gravity Well. |

---


**Scope**: static


**Extends**

> [Phaser.GameObjects.Particles.ParticleProcessor](../class/Phaser.GameObjects.Particles.ParticleProcessor.md)  



> Source: [src/gameobjects/particles/GravityWell.js#L11](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/GravityWell.js#L11)  
Since: 3.0.0

# Public Members

## active

### active: boolean


**Description:**

The active state of the Particle Processor.



An inactive Particle Processor will be skipped for processing by

its parent Emitter.


**Inherits:** [Phaser.GameObjects.Particles.ParticleProcessor#active](../class/Phaser.GameObjects.Particles.ParticleProcessor.md#active)


> Source: [src/gameobjects/particles/ParticleProcessor.js#L66](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/ParticleProcessor.js#L66)  
Since: 3.60.0


---

## epsilon

### epsilon: number


**Description:**

The minimum distance for which the gravity force is calculated.



Defaults to 100.


> Source: [src/gameobjects/particles/GravityWell.js#L129](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/GravityWell.js#L129)  
Since: 3.0.0


---

## gravity

### gravity: number


**Description:**

The gravitational force of this Gravity Well.



Defaults to 50.


> Source: [src/gameobjects/particles/GravityWell.js#L175](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/GravityWell.js#L175)  
Since: 3.0.0


---

## manager

### manager: [Phaser.GameObjects.Particles.ParticleEmitter](../class/Phaser.GameObjects.Particles.ParticleEmitter.md)


**Description:**

A reference to the Particle Emitter that owns this Processor.

This is set automatically when the Processor is added to an Emitter

and nulled when removed or destroyed.


**Inherits:** [Phaser.GameObjects.Particles.ParticleProcessor#manager](../class/Phaser.GameObjects.Particles.ParticleProcessor.md#manager)


> Source: [src/gameobjects/particles/ParticleProcessor.js#L37](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/ParticleProcessor.js#L37)  
Since: 3.60.0


---

## power

### power: number


**Description:**

The strength of the gravity force - larger numbers produce a stronger force.



Defaults to 0.


> Source: [src/gameobjects/particles/GravityWell.js#L152](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/GravityWell.js#L152)  
Since: 3.0.0


---

## x

### x: number


**Description:**

The x coordinate of the Particle Processor, in world space.


**Inherits:** [Phaser.GameObjects.Particles.ParticleProcessor#x](../class/Phaser.GameObjects.Particles.ParticleProcessor.md#x)


> Source: [src/gameobjects/particles/ParticleProcessor.js#L48](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/ParticleProcessor.js#L48)  
Since: 3.60.0


---

## y

### y: number


**Description:**

The y coordinate of the Particle Processor, in world space.


**Inherits:** [Phaser.GameObjects.Particles.ParticleProcessor#y](../class/Phaser.GameObjects.Particles.ParticleProcessor.md#y)


> Source: [src/gameobjects/particles/ParticleProcessor.js#L57](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/ParticleProcessor.js#L57)  
Since: 3.60.0


---

# Private Members

## _epsilon

### _epsilon: number


**Description:**

Internal epsilon value.


**Access:** private


> Source: [src/gameobjects/particles/GravityWell.js#L83](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/GravityWell.js#L83)  
Since: 3.0.0


---

## _gravity

### _gravity: number


**Description:**

Internal gravity value.


**Access:** private


> Source: [src/gameobjects/particles/GravityWell.js#L62](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/GravityWell.js#L62)  
Since: 3.0.0


---

## _power

### _power: number


**Description:**

Internal power value.


**Access:** private


> Source: [src/gameobjects/particles/GravityWell.js#L72](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/GravityWell.js#L72)  
Since: 3.0.0


---

# Public Methods

## destroy

### \<instance> destroy()


**Description:**

Destroys this Particle Processor by removing all external references.



This is called automatically when the owning Particle Emitter is destroyed.


**Inherits:** [Phaser.GameObjects.Particles.ParticleProcessor#destroy](../class/Phaser.GameObjects.Particles.ParticleProcessor.md#destroy)


> Source: [src/gameobjects/particles/ParticleProcessor.js#L96](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/ParticleProcessor.js#L96)  
Since: 3.60.0


---

## update

### \<instance> update(particle, delta, step)


**Description:**

Takes a Particle and updates it based on the properties of this Gravity Well.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| particle | [Phaser.GameObjects.Particles.Particle](../class/Phaser.GameObjects.Particles.Particle.md) | No | The Particle to update. |
| delta | number | No | The delta time in ms. |
| step | number | No | The delta value divided by 1000. |


**Overrides:** Phaser.GameObjects.Particles.ParticleProcessor#update


> Source: [src/gameobjects/particles/GravityWell.js#L95](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/GravityWell.js#L95)  
Since: 3.0.0


---

