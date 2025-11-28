---
visibility: public
slug: gameobjects-particles-particleprocessor
title: ParticleProcessor
description: Phaser.GameObjects.Particles.ParticleProcessor
seoTitle: Phaser.GameObjects.Particles.ParticleProcessor
seoDescription: Phaser v3.86.0 Documentation for Phaser.GameObjects.Particles.ParticleProcessor
ogImage: 
---


This class provides the structured required for all Particle Processors.



You should extend it and add the functionality required for your processor,

including tidying up any resources this may create in the `destroy` method.



See the GravityWell for an example of a processor.

**Constructor**

`new ParticleProcessor([x], [y], [active])`

**Parameters**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| x | number | Yes | 0 | The x coordinate of the Particle Processor, in world space. |
| y | number | Yes | 0 | The y coordinate of the Particle Processor, in world space. |
| active | boolean | Yes | true | The active state of this Particle Processor. |

---


**Scope**: static

> Source: [src/gameobjects/particles/ParticleProcessor.js#L9](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/ParticleProcessor.js#L9)  
Since: 3.60.0

# Public Members

## active

### active: boolean


**Description:**

The active state of the Particle Processor.



An inactive Particle Processor will be skipped for processing by

its parent Emitter.


> Source: [src/gameobjects/particles/ParticleProcessor.js#L66](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/ParticleProcessor.js#L66)  
Since: 3.60.0


---

## manager

### manager: [Phaser.GameObjects.Particles.ParticleEmitter](../class/Phaser.GameObjects.Particles.ParticleEmitter.md)


**Description:**

A reference to the Particle Emitter that owns this Processor.

This is set automatically when the Processor is added to an Emitter

and nulled when removed or destroyed.


> Source: [src/gameobjects/particles/ParticleProcessor.js#L37](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/ParticleProcessor.js#L37)  
Since: 3.60.0


---

## x

### x: number


**Description:**

The x coordinate of the Particle Processor, in world space.


> Source: [src/gameobjects/particles/ParticleProcessor.js#L48](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/ParticleProcessor.js#L48)  
Since: 3.60.0


---

## y

### y: number


**Description:**

The y coordinate of the Particle Processor, in world space.


> Source: [src/gameobjects/particles/ParticleProcessor.js#L57](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/ParticleProcessor.js#L57)  
Since: 3.60.0


---

# Public Methods

## destroy

### \<instance> destroy()


**Description:**

Destroys this Particle Processor by removing all external references.



This is called automatically when the owning Particle Emitter is destroyed.


> Source: [src/gameobjects/particles/ParticleProcessor.js#L96](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/ParticleProcessor.js#L96)  
Since: 3.60.0


---

## update

### \<instance> update(particle, delta, step, t)


**Description:**

The Particle Processor update method should be overriden by your own

method and handle the processing of the particles, typically modifying

their velocityX/Y values based on the criteria of this processor.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| particle | [Phaser.GameObjects.Particles.Particle](../class/Phaser.GameObjects.Particles.Particle.md) | No | The Particle to update. |
| delta | number | No | The delta time in ms. |
| step | number | No | The delta value divided by 1000. |
| t | number | No | The current normalized lifetime of the particle, between 0 (birth) and 1 (death). |


> Source: [src/gameobjects/particles/ParticleProcessor.js#L79](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/ParticleProcessor.js#L79)  
Since: 3.60.0


---

