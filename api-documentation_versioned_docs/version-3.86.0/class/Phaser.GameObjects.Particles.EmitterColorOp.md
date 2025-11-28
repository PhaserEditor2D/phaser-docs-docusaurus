---
visibility: public
slug: gameobjects-particles-emittercolorop
title: EmitterColorOp
description: Phaser.GameObjects.Particles.EmitterColorOp
seoTitle: Phaser.GameObjects.Particles.EmitterColorOp
seoDescription: Phaser v3.86.0 Documentation for Phaser.GameObjects.Particles.EmitterColorOp
ogImage: 
---


This class is responsible for taking control over the color property

in the Particle class and managing its emission and updating functions.



See the `ParticleEmitter` class for more details on emitter op configuration.

**Constructor**

`new EmitterColorOp(key)`

**Parameters**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| key | string | No | The name of the property. |

---


**Scope**: static


**Extends**

> [Phaser.GameObjects.Particles.EmitterOp](../class/Phaser.GameObjects.Particles.EmitterOp.md)  



> Source: [src/gameobjects/particles/EmitterColorOp.js#L14](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/EmitterColorOp.js#L14)  
Since: 3.60.0

# Public Members

## active

### active: boolean


**Description:**

Set to `false` to disable this EmitterOp.


**Inherits:** [Phaser.GameObjects.Particles.EmitterOp#active](../class/Phaser.GameObjects.Particles.EmitterOp.md#active)


> Source: [src/gameobjects/particles/EmitterOp.js#L203](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/EmitterOp.js#L203)  
Since: 3.60.0


---

## b

### b: Array.\<number>


**Description:**

An array containing the blue color values.



Populated during the `setMethods` method.


> Source: [src/gameobjects/particles/EmitterColorOp.js#L65](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/EmitterColorOp.js#L65)  
Since: 3.60.0


---

## counter

### counter: number


**Description:**

The step counter for stepped easing, per emit.


**Inherits:** [Phaser.GameObjects.Particles.EmitterOp#counter](../class/Phaser.GameObjects.Particles.EmitterOp.md#counter)


> Source: [src/gameobjects/particles/EmitterOp.js#L89](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/EmitterOp.js#L89)  
Since: 3.0.0


---

## current

### current: number


**Description:**

The most recently calculated value. Updated every time an

emission or update method is called. Treat as read-only.


**Inherits:** [Phaser.GameObjects.Particles.EmitterOp#current](../class/Phaser.GameObjects.Particles.EmitterOp.md#current)


> Source: [src/gameobjects/particles/EmitterOp.js#L132](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/EmitterOp.js#L132)  
Since: 3.60.0


---

## defaultValue

### defaultValue: [Phaser.Types.GameObjects.Particles.EmitterOpOnEmitType](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnEmitType), [Phaser.Types.GameObjects.Particles.EmitterOpOnUpdateType](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnUpdateType)


**Description:**

The default value of this property.



This can be a simple value, an array, a function or an onEmit

configuration object.


**Inherits:** [Phaser.GameObjects.Particles.EmitterOp#defaultValue](../class/Phaser.GameObjects.Particles.EmitterOp.md#defaultValue)


> Source: [src/gameobjects/particles/EmitterOp.js#L66](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/EmitterOp.js#L66)  
Since: 3.0.0


---

## direction

### direction: number


**Description:**

The counter direction. 0 for up and 1 for down.


**Inherits:** [Phaser.GameObjects.Particles.EmitterOp#direction](../class/Phaser.GameObjects.Particles.EmitterOp.md#direction)


> Source: [src/gameobjects/particles/EmitterOp.js#L110](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/EmitterOp.js#L110)  
Since: 3.60.0


---

## ease

### ease: function


**Description:**

The easing function to use for updating this property, if any.


**Inherits:** [Phaser.GameObjects.Particles.EmitterOp#ease](../class/Phaser.GameObjects.Particles.EmitterOp.md#ease)


> Source: [src/gameobjects/particles/EmitterOp.js#L152](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/EmitterOp.js#L152)  
Since: 3.0.0


---

## emitOnly

### emitOnly: boolean


**Description:**

Whether this property can only be modified when a Particle is emitted.



Set to `true` to allow only [Phaser.GameObjects.Particles.EmitterOp#onEmit](../class/Phaser.GameObjects.Particles.EmitterOp.md#onEmit) callbacks to be set and

affect this property.



Set to `false` to allow both [Phaser.GameObjects.Particles.EmitterOp#onEmit](../class/Phaser.GameObjects.Particles.EmitterOp.md#onEmit) and

[Phaser.GameObjects.Particles.EmitterOp#onUpdate](../class/Phaser.GameObjects.Particles.EmitterOp.md#onUpdate) callbacks to be set and affect this property.


**Inherits:** [Phaser.GameObjects.Particles.EmitterOp#emitOnly](../class/Phaser.GameObjects.Particles.EmitterOp.md#emitOnly)


> Source: [src/gameobjects/particles/EmitterOp.js#L170](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/EmitterOp.js#L170)  
Since: 3.0.0


---

## end

### end: number


**Description:**

The end value for this property to ease between.


**Inherits:** [Phaser.GameObjects.Particles.EmitterOp#end](../class/Phaser.GameObjects.Particles.EmitterOp.md#end)


> Source: [src/gameobjects/particles/EmitterOp.js#L142](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/EmitterOp.js#L142)  
Since: 3.0.0


---

## g

### g: Array.\<number>


**Description:**

An array containing the green color values.



Populated during the `setMethods` method.


> Source: [src/gameobjects/particles/EmitterColorOp.js#L54](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/EmitterColorOp.js#L54)  
Since: 3.60.0


---

## interpolation

### interpolation: function


**Description:**

The interpolation function to use for updating this property, if any.


**Inherits:** [Phaser.GameObjects.Particles.EmitterOp#interpolation](../class/Phaser.GameObjects.Particles.EmitterOp.md#interpolation)


> Source: [src/gameobjects/particles/EmitterOp.js#L161](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/EmitterOp.js#L161)  
Since: 3.60.0


---

## method

### method: number


**Description:**

The onEmit method type of this EmitterOp.



Set as part of `setMethod` and cached here to avoid

re-setting when only the value changes.


**Inherits:** [Phaser.GameObjects.Particles.EmitterOp#method](../class/Phaser.GameObjects.Particles.EmitterOp.md#method)


> Source: [src/gameobjects/particles/EmitterOp.js#L212](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/EmitterOp.js#L212)  
Since: 3.60.0


---

## onEmit

### onEmit: [Phaser.Types.GameObjects.Particles.EmitterOpOnEmitCallback](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnEmitCallback)


**Description:**

The callback to run for Particles when they are emitted from the Particle Emitter.


**Inherits:** [Phaser.GameObjects.Particles.EmitterOp#onEmit](../class/Phaser.GameObjects.Particles.EmitterOp.md#onEmit)


> Source: [src/gameobjects/particles/EmitterOp.js#L185](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/EmitterOp.js#L185)  
Since: 3.0.0


---

## onUpdate

### onUpdate: [Phaser.Types.GameObjects.Particles.EmitterOpOnUpdateCallback](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnUpdateCallback)


**Description:**

The callback to run for Particles when they are updated.


**Inherits:** [Phaser.GameObjects.Particles.EmitterOp#onUpdate](../class/Phaser.GameObjects.Particles.EmitterOp.md#onUpdate)


> Source: [src/gameobjects/particles/EmitterOp.js#L194](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/EmitterOp.js#L194)  
Since: 3.0.0


---

## propertyKey

### propertyKey: string


**Description:**

The name of this property.


**Inherits:** [Phaser.GameObjects.Particles.EmitterOp#propertyKey](../class/Phaser.GameObjects.Particles.EmitterOp.md#propertyKey)


> Source: [src/gameobjects/particles/EmitterOp.js#L45](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/EmitterOp.js#L45)  
Since: 3.0.0


---

## propertyValue

### propertyValue: [Phaser.Types.GameObjects.Particles.EmitterOpOnEmitType](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnEmitType), [Phaser.Types.GameObjects.Particles.EmitterOpOnUpdateType](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnUpdateType)


**Description:**

The current value of this property.



This can be a simple value, an array, a function or an onEmit

configuration object.


**Inherits:** [Phaser.GameObjects.Particles.EmitterOp#propertyValue](../class/Phaser.GameObjects.Particles.EmitterOp.md#propertyValue)


> Source: [src/gameobjects/particles/EmitterOp.js#L54](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/EmitterOp.js#L54)  
Since: 3.0.0


---

## r

### r: Array.\<number>


**Description:**

An array containing the red color values.



Populated during the `setMethods` method.


> Source: [src/gameobjects/particles/EmitterColorOp.js#L43](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/EmitterColorOp.js#L43)  
Since: 3.60.0


---

## start

### start: number, Array.\<number>


**Description:**

The start value for this property to ease between.



If an interpolation this holds a reference to the number data array.


**Inherits:** [Phaser.GameObjects.Particles.EmitterOp#start](../class/Phaser.GameObjects.Particles.EmitterOp.md#start)


> Source: [src/gameobjects/particles/EmitterOp.js#L120](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/EmitterOp.js#L120)  
Since: 3.0.0


---

## steps

### steps: number


**Description:**

The number of steps for stepped easing between [Phaser.GameObjects.Particles.EmitterOp#start](../class/Phaser.GameObjects.Particles.EmitterOp.md#start) and

[Phaser.GameObjects.Particles.EmitterOp#end](../class/Phaser.GameObjects.Particles.EmitterOp.md#end) values, per emit.


**Inherits:** [Phaser.GameObjects.Particles.EmitterOp#steps](../class/Phaser.GameObjects.Particles.EmitterOp.md#steps)


> Source: [src/gameobjects/particles/EmitterOp.js#L78](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/EmitterOp.js#L78)  
Since: 3.0.0


---

## yoyo

### yoyo: boolean


**Description:**

When the step counter reaches it's maximum, should it then

yoyo back to the start again, or flip over to it?


**Inherits:** [Phaser.GameObjects.Particles.EmitterOp#yoyo](../class/Phaser.GameObjects.Particles.EmitterOp.md#yoyo)


> Source: [src/gameobjects/particles/EmitterOp.js#L99](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/EmitterOp.js#L99)  
Since: 3.60.0


---

# Private Members

## _onEmit

### _onEmit: [Phaser.Types.GameObjects.Particles.EmitterOpOnEmitCallback](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnEmitCallback)


**Description:**

The callback to run for Particles when they are emitted from the Particle Emitter.

This is set during `setMethods` and used by `proxyEmit`.


**Access:** private


**Inherits:** [Phaser.GameObjects.Particles.EmitterOp#_onEmit](../class/Phaser.GameObjects.Particles.EmitterOp.md#_onEmit)


> Source: [src/gameobjects/particles/EmitterOp.js#L224](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/EmitterOp.js#L224)  
Since: 3.60.0


---

## _onUpdate

### _onUpdate: [Phaser.Types.GameObjects.Particles.EmitterOpOnUpdateCallback](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnUpdateCallback)


**Description:**

The callback to run for Particles when they are updated.

This is set during `setMethods` and used by `proxyUpdate`.


**Access:** private


**Inherits:** [Phaser.GameObjects.Particles.EmitterOp#_onUpdate](../class/Phaser.GameObjects.Particles.EmitterOp.md#_onUpdate)


> Source: [src/gameobjects/particles/EmitterOp.js#L235](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/EmitterOp.js#L235)  
Since: 3.60.0


---

# Public Methods

## defaultEmit

### \<instance> defaultEmit(particle, key, [value])


**Description:**

The returned value sets what the property will be at the START of the particles life, on emit.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| particle | [Phaser.GameObjects.Particles.Particle](../class/Phaser.GameObjects.Particles.Particle.md) | No | The particle. |
| key | string | No | The name of the property. |
| value | number | Yes | The current value of the property. |


**Returns:** number - The new value of the property.


**Inherits:** [Phaser.GameObjects.Particles.EmitterOp#defaultEmit](../class/Phaser.GameObjects.Particles.EmitterOp.md#defaultEmit)


> Source: [src/gameobjects/particles/EmitterOp.js#L596](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/EmitterOp.js#L596)  
Since: 3.0.0


---

## defaultUpdate

### \<instance> defaultUpdate(particle, key, t, value)


**Description:**

The returned value updates the property for the duration of the particles life.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| particle | [Phaser.GameObjects.Particles.Particle](../class/Phaser.GameObjects.Particles.Particle.md) | No | The particle. |
| key | string | No | The name of the property. |
| t | number | No | The current normalized lifetime of the particle, between 0 (birth) and 1 (death). |
| value | number | No | The current value of the property. |


**Returns:** number - The new value of the property.


**Inherits:** [Phaser.GameObjects.Particles.EmitterOp#defaultUpdate](../class/Phaser.GameObjects.Particles.EmitterOp.md#defaultUpdate)


> Source: [src/gameobjects/particles/EmitterOp.js#L613](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/EmitterOp.js#L613)  
Since: 3.0.0


---

## destroy

### \<instance> destroy()


**Description:**

Destroys this EmitterOp instance and all of its references.



Called automatically when the ParticleEmitter that owns this

EmitterOp is destroyed.


**Inherits:** [Phaser.GameObjects.Particles.EmitterOp#destroy](../class/Phaser.GameObjects.Particles.EmitterOp.md#destroy)


> Source: [src/gameobjects/particles/EmitterOp.js#L901](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/EmitterOp.js#L901)  
Since: 3.60.0


---

## easedValueEmit

### \<instance> easedValueEmit(particle, key)


**Description:**

An `onEmit` callback for an eased property.



It prepares the particle for easing by [Phaser.GameObjects.Particles.EmitterColorOp#easeValueUpdate](../class/Phaser.GameObjects.Particles.EmitterColorOp.md#easeValueUpdate).

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| particle | [Phaser.GameObjects.Particles.Particle](../class/Phaser.GameObjects.Particles.Particle.md) | No | The particle. |
| key | string | No | The name of the property. |


**Overrides:** Phaser.GameObjects.Particles.EmitterOp#easedValueEmit


**Returns:** number - {@link Phaser.GameObjects.Particles.EmitterColorOp#start}, as the new value of the property.


> Source: [src/gameobjects/particles/EmitterColorOp.js#L153](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/EmitterColorOp.js#L153)  
Since: 3.60.0


---

## easeValueUpdate

### \<instance> easeValueUpdate(particle, key, t)


**Description:**

An `onUpdate` callback that returns an eased value between the

[Phaser.GameObjects.Particles.EmitterColorOp#start](../class/Phaser.GameObjects.Particles.EmitterColorOp.md#start) and [Phaser.GameObjects.Particles.EmitterColorOp#end](../class/Phaser.GameObjects.Particles.EmitterColorOp.md#end)

range.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| particle | [Phaser.GameObjects.Particles.Particle](../class/Phaser.GameObjects.Particles.Particle.md) | No | The particle. |
| key | string | No | The name of the property. |
| t | number | No | The current normalized lifetime of the particle, between 0 (birth) and 1 (death). |


**Overrides:** Phaser.GameObjects.Particles.EmitterOp#easeValueUpdate


**Returns:** number - The new value of the property.


> Source: [src/gameobjects/particles/EmitterColorOp.js#L173](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/EmitterColorOp.js#L173)  
Since: 3.60.0


---

## getMethod

### \<instance> getMethod()


**Description:**

Checks the type of `EmitterOp.propertyValue` to determine which

method is required in order to return values from this op function.


**Overrides:** Phaser.GameObjects.Particles.EmitterOp#getMethod


**Returns:** number - A number between 0 and 9 which should be passed to `setMethods`.


> Source: [src/gameobjects/particles/EmitterColorOp.js#L77](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/EmitterColorOp.js#L77)  
Since: 3.60.0


---

## has

### \<instance> has(object, key)


**Description:**

Check whether an object has the given property.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| object | object | No | The object to check. |
| key | string | No | The key of the property to look for in the object. |


**Returns:** boolean - `true` if the property exists in the object, `false` otherwise.


**Inherits:** [Phaser.GameObjects.Particles.EmitterOp#has](../class/Phaser.GameObjects.Particles.EmitterOp.md#has)


> Source: [src/gameobjects/particles/EmitterOp.js#L546](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/EmitterOp.js#L546)  
Since: 3.0.0


---

## hasBoth

### \<instance> hasBoth(object, key1, key2)


**Description:**

Check whether an object has both of the given properties.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| object | object | No | The object to check. |
| key1 | string | No | The key of the first property to check the object for. |
| key2 | string | No | The key of the second property to check the object for. |


**Returns:** boolean - `true` if both properties exist in the object, `false` otherwise.


**Inherits:** [Phaser.GameObjects.Particles.EmitterOp#hasBoth](../class/Phaser.GameObjects.Particles.EmitterOp.md#hasBoth)


> Source: [src/gameobjects/particles/EmitterOp.js#L562](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/EmitterOp.js#L562)  
Since: 3.0.0


---

## hasEither

### \<instance> hasEither(object, key1, key2)


**Description:**

Check whether an object has at least one of the given properties.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| object | object | No | The object to check. |
| key1 | string | No | The key of the first property to check the object for. |
| key2 | string | No | The key of the second property to check the object for. |


**Returns:** boolean - `true` if at least one of the properties exists in the object, `false` if neither exist.


**Inherits:** [Phaser.GameObjects.Particles.EmitterOp#hasEither](../class/Phaser.GameObjects.Particles.EmitterOp.md#hasEither)


> Source: [src/gameobjects/particles/EmitterOp.js#L579](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/EmitterOp.js#L579)  
Since: 3.0.0


---

## loadConfig

### \<instance> loadConfig([config], [newKey])


**Description:**

Load the property from a Particle Emitter configuration object.



Optionally accepts a new property key to use, replacing the current one.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| config | [Phaser.Types.GameObjects.Particles.ParticleEmitterConfig](../typedef/Phaser.Types.GameObjects.Particles.md#ParticleEmitterConfig) | Yes | Settings for the Particle Emitter that owns this property. |
| newKey | string | Yes | The new key to use for this property, if any. |


**Inherits:** [Phaser.GameObjects.Particles.EmitterOp#loadConfig](../class/Phaser.GameObjects.Particles.EmitterOp.md#loadConfig)


> Source: [src/gameobjects/particles/EmitterOp.js#L247](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/EmitterOp.js#L247)  
Since: 3.0.0


---

## onChange

### \<instance> onChange(value)


**Description:**

Change the current value of the property and update its callback methods.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| value | number | No | The new numeric value of this property. |


**Returns:** [Phaser.GameObjects.Particles.EmitterColorOp](../class/Phaser.GameObjects.Particles.EmitterColorOp.md) - This Emitter Op object.


**Inherits:** [Phaser.GameObjects.Particles.EmitterOp#onChange](../class/Phaser.GameObjects.Particles.EmitterOp.md#onChange)


> Source: [src/gameobjects/particles/EmitterOp.js#L300](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/EmitterOp.js#L300)  
Since: 3.0.0


---

## proxyEmit

### \<instance> proxyEmit(particle, key, [value])


**Description:**

The returned value sets what the property will be at the START of the particles life, on emit.



This method is only used when you have provided a custom emit callback.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| particle | [Phaser.GameObjects.Particles.Particle](../class/Phaser.GameObjects.Particles.Particle.md) | No | The particle. |
| key | string | No | The name of the property. |
| value | number | Yes | The current value of the property. |


**Returns:** number - The new value of the property.


**Inherits:** [Phaser.GameObjects.Particles.EmitterOp#proxyEmit](../class/Phaser.GameObjects.Particles.EmitterOp.md#proxyEmit)


> Source: [src/gameobjects/particles/EmitterOp.js#L631](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/EmitterOp.js#L631)  
Since: 3.60.0


---

## proxyUpdate

### \<instance> proxyUpdate(particle, key, t, value)


**Description:**

The returned value updates the property for the duration of the particles life.



This method is only used when you have provided a custom update callback.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| particle | [Phaser.GameObjects.Particles.Particle](../class/Phaser.GameObjects.Particles.Particle.md) | No | The particle. |
| key | string | No | The name of the property. |
| t | number | No | The current normalized lifetime of the particle, between 0 (birth) and 1 (death). |
| value | number | No | The current value of the property. |


**Returns:** number - The new value of the property.


**Inherits:** [Phaser.GameObjects.Particles.EmitterOp#proxyUpdate](../class/Phaser.GameObjects.Particles.EmitterOp.md#proxyUpdate)


> Source: [src/gameobjects/particles/EmitterOp.js#L654](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/EmitterOp.js#L654)  
Since: 3.60.0


---

## randomRangedIntEmit

### \<instance> randomRangedIntEmit(particle, key)


**Description:**

An `onEmit` callback that returns a value between the [Phaser.GameObjects.Particles.EmitterOp#start](../class/Phaser.GameObjects.Particles.EmitterOp.md#start) and

[Phaser.GameObjects.Particles.EmitterOp#end](../class/Phaser.GameObjects.Particles.EmitterOp.md#end) range.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| particle | [Phaser.GameObjects.Particles.Particle](../class/Phaser.GameObjects.Particles.Particle.md) | No | The particle. |
| key | string | No | The key of the property. |


**Returns:** number - The new value of the property.


**Inherits:** [Phaser.GameObjects.Particles.EmitterOp#randomRangedIntEmit](../class/Phaser.GameObjects.Particles.EmitterOp.md#randomRangedIntEmit)


> Source: [src/gameobjects/particles/EmitterOp.js#L748](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/EmitterOp.js#L748)  
Since: 3.60.0


---

## randomRangedValueEmit

### \<instance> randomRangedValueEmit(particle, key)


**Description:**

An `onEmit` callback that returns a value between the [Phaser.GameObjects.Particles.EmitterOp#start](../class/Phaser.GameObjects.Particles.EmitterOp.md#start) and

[Phaser.GameObjects.Particles.EmitterOp#end](../class/Phaser.GameObjects.Particles.EmitterOp.md#end) range.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| particle | [Phaser.GameObjects.Particles.Particle](../class/Phaser.GameObjects.Particles.Particle.md) | No | The particle. |
| key | string | No | The key of the property. |


**Returns:** number - The new value of the property.


**Inherits:** [Phaser.GameObjects.Particles.EmitterOp#randomRangedValueEmit](../class/Phaser.GameObjects.Particles.EmitterOp.md#randomRangedValueEmit)


> Source: [src/gameobjects/particles/EmitterOp.js#L721](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/EmitterOp.js#L721)  
Since: 3.0.0


---

## randomStaticValueEmit

### \<instance> randomStaticValueEmit()


**Description:**

An `onEmit` callback that returns a random value from the current value array.


**Returns:** number - The new value of the property.


**Inherits:** [Phaser.GameObjects.Particles.EmitterOp#randomStaticValueEmit](../class/Phaser.GameObjects.Particles.EmitterOp.md#randomStaticValueEmit)


> Source: [src/gameobjects/particles/EmitterOp.js#L704](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/EmitterOp.js#L704)  
Since: 3.0.0


---

## setEase

### \<instance> setEase(ease)


**Description:**

Sets the Ease function to use for Color interpolation.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| ease | string | No | The string-based name of the Ease function to use. |


> Source: [src/gameobjects/particles/EmitterColorOp.js#L138](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/EmitterColorOp.js#L138)  
Since: 3.60.0


---

## setMethods

### \<instance> setMethods()


**Description:**

Sets the EmitterColorOp method values, if in use.


**Overrides:** Phaser.GameObjects.Particles.EmitterOp#setMethods


**Returns:** [Phaser.GameObjects.Particles.EmitterColorOp](../class/Phaser.GameObjects.Particles.EmitterColorOp.md) - This Emitter Op object.


> Source: [src/gameobjects/particles/EmitterColorOp.js#L91](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/EmitterColorOp.js#L91)  
Since: 3.60.0


---

## staticValueEmit

### \<instance> staticValueEmit()


**Description:**

An `onEmit` callback that returns the current value of the property.


**Returns:** number - The current value of the property.


**Inherits:** [Phaser.GameObjects.Particles.EmitterOp#staticValueEmit](../class/Phaser.GameObjects.Particles.EmitterOp.md#staticValueEmit)


> Source: [src/gameobjects/particles/EmitterOp.js#L678](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/EmitterOp.js#L678)  
Since: 3.0.0


---

## staticValueUpdate

### \<instance> staticValueUpdate()


**Description:**

An `onUpdate` callback that returns the current value of the property.


**Returns:** number - The current value of the property.


**Inherits:** [Phaser.GameObjects.Particles.EmitterOp#staticValueUpdate](../class/Phaser.GameObjects.Particles.EmitterOp.md#staticValueUpdate)


> Source: [src/gameobjects/particles/EmitterOp.js#L691](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/EmitterOp.js#L691)  
Since: 3.0.0


---

## steppedEmit

### \<instance> steppedEmit()


**Description:**

An `onEmit` callback that returns a stepped value between the

[Phaser.GameObjects.Particles.EmitterOp#start](../class/Phaser.GameObjects.Particles.EmitterOp.md#start) and [Phaser.GameObjects.Particles.EmitterOp#end](../class/Phaser.GameObjects.Particles.EmitterOp.md#end)

range.


**Returns:** number - The new value of the property.


**Inherits:** [Phaser.GameObjects.Particles.EmitterOp#steppedEmit](../class/Phaser.GameObjects.Particles.EmitterOp.md#steppedEmit)


> Source: [src/gameobjects/particles/EmitterOp.js#L775](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/EmitterOp.js#L775)  
Since: 3.0.0


---

## toJSON

### \<instance> toJSON()


**Description:**

Build a JSON representation of this Particle Emitter property.


**Returns:** object - A JSON representation of this Particle Emitter property.


**Inherits:** [Phaser.GameObjects.Particles.EmitterOp#toJSON](../class/Phaser.GameObjects.Particles.EmitterOp.md#toJSON)


> Source: [src/gameobjects/particles/EmitterOp.js#L287](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/particles/EmitterOp.js#L287)  
Since: 3.0.0


---

