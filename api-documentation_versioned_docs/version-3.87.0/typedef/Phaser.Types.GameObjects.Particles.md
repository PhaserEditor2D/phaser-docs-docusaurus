---
visibility: public
slug: typedef/types-gameobjects-particles
title: Types.GameObjects.Particles
description: Phaser.Types.GameObjects.Particles
seoTitle: Types.GameObjects.Particles
seoDescription: Phaser v3.87.0 Documentation for Phaser.Types.GameObjects.Particles
ogImage: 
---

## DeathZoneObject

### \<static> DeathZoneObject

**Type**: [Phaser.GameObjects.Particles.Zones.DeathZone](../class/Phaser.GameObjects.Particles.Zones.DeathZone.md) | [Phaser.Types.GameObjects.Particles.ParticleEmitterDeathZoneConfig](../typedef/Phaser.Types.GameObjects.Particles.md#ParticleEmitterDeathZoneConfig) | [Phaser.Types.GameObjects.Particles.DeathZoneSource](../typedef/Phaser.Types.GameObjects.Particles.md#DeathZoneSource)

**Member of**: Phaser.Types.GameObjects.Particles
> Source: [src/gameobjects/particles/typedefs/DeathZoneObject.js#L1](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/particles/typedefs/DeathZoneObject.js#L1)  
Since: 3.60.0

---

## DeathZoneSource

### \<static> DeathZoneSource

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| contains | [Phaser.Types.GameObjects.Particles.DeathZoneSourceCallback](../typedef/Phaser.Types.GameObjects.Particles.md#DeathZoneSourceCallback) | No | No description provided |

**Type**: object

**Member of**: Phaser.Types.GameObjects.Particles
> Source: [src/gameobjects/particles/typedefs/DeathZoneSource.js#L1](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/particles/typedefs/DeathZoneSource.js#L1)  
Since: 3.0.0

---

## DeathZoneSourceCallback

### \<static> DeathZoneSourceCallback

**Type**: function

**Member of**: Phaser.Types.GameObjects.Particles
> Source: [src/gameobjects/particles/typedefs/DeathZoneSourceCallback.js#L1](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/particles/typedefs/DeathZoneSourceCallback.js#L1)  
Since: 3.0.0

---

## EdgeZoneSource

### \<static> EdgeZoneSource

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| getPoints | [Phaser.Types.GameObjects.Particles.EdgeZoneSourceCallback](../typedef/Phaser.Types.GameObjects.Particles.md#EdgeZoneSourceCallback) | No | A function placing points on the sources edge or edges. |

**Type**: object

**Member of**: Phaser.Types.GameObjects.Particles
> Source: [src/gameobjects/particles/typedefs/EdgeZoneSource.js#L1](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/particles/typedefs/EdgeZoneSource.js#L1)  
Since: 3.0.0

---

## EdgeZoneSourceCallback

### \<static> EdgeZoneSourceCallback

**Type**: function

**Member of**: Phaser.Types.GameObjects.Particles
> Source: [src/gameobjects/particles/typedefs/EdgeZoneSourceCallback.js#L1](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/particles/typedefs/EdgeZoneSourceCallback.js#L1)  
Since: 3.0.0

---

## EmitterOpCustomEmitConfig

### \<static> EmitterOpCustomEmitConfig

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| onEmit | [Phaser.Types.GameObjects.Particles.EmitterOpOnEmitCallback](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnEmitCallback) | No | A callback that is invoked each time the emitter emits a particle. |

**Type**: object

**Member of**: Phaser.Types.GameObjects.Particles
> Source: [src/gameobjects/particles/typedefs/EmitterOpCustomEmitConfig.js#L1](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/particles/typedefs/EmitterOpCustomEmitConfig.js#L1)  
Since: 3.0.0

---

## EmitterOpCustomUpdateConfig

### \<static> EmitterOpCustomUpdateConfig

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| onEmit | [Phaser.Types.GameObjects.Particles.EmitterOpOnEmitCallback](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnEmitCallback) | Yes | A callback that is invoked each time the emitter emits a particle. |
| onUpdate | [Phaser.Types.GameObjects.Particles.EmitterOpOnUpdateCallback](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnUpdateCallback) | No | A callback that is invoked each time the emitter updates. |

**Type**: object

**Member of**: Phaser.Types.GameObjects.Particles
> Source: [src/gameobjects/particles/typedefs/EmitterOpCustomUpdateConfig.js#L1](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/particles/typedefs/EmitterOpCustomUpdateConfig.js#L1)  
Since: 3.0.0

---

## EmitterOpEaseConfig

### \<static> EmitterOpEaseConfig


Defines an operation yielding a value incremented continuously across a range.

| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| start | number | No |  | The starting value. |
| end | number | No |  | The ending value. |
| random | boolean | Yes |  | If true, the particle starts with a minimum random value between the start and end values. |
| ease | string \| function | Yes | "'Linear'" | The ease to find. This can be either a string from the EaseMap, or a custom function. |
| easeParams | Array.\<number> | Yes |  | An optional array of ease parameters to go with the ease. |

**Type**: object

**Member of**: Phaser.Types.GameObjects.Particles
> Source: [src/gameobjects/particles/typedefs/EmitterOpEaseConfig.js#L1](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/particles/typedefs/EmitterOpEaseConfig.js#L1)  
Since: 3.0.0

---

## EmitterOpInterpolationConfig

### \<static> EmitterOpInterpolationConfig


Defines an operation yielding a value incremented continuously across an interpolated data set.

| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| values | Array.\<number> | No |  | The array of number values to interpolate through. |
| interpolation | string \| function | Yes | "'Linear'" | The interpolation function to use. Typically one of `linear`, `bezier` or `catmull` or a custom function. |
| ease | string \| function | Yes | "'Linear'" | An optional ease function to use. This can be either a string from the EaseMap, or a custom function. |
| easeParams | Array.\<number> | Yes |  | An optional array of ease parameters to go with the ease. |

**Type**: object

**Member of**: Phaser.Types.GameObjects.Particles
> Source: [src/gameobjects/particles/typedefs/EmitterOpInterpolationConfig.js#L1](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/particles/typedefs/EmitterOpInterpolationConfig.js#L1)  
Since: 3.60.0

---

## EmitterOpOnEmitCallback

### \<static> EmitterOpOnEmitCallback


The returned value sets what the property will be at the START of the particle's life, on emit.

**Type**: function

**Member of**: Phaser.Types.GameObjects.Particles
> Source: [src/gameobjects/particles/typedefs/EmitterOpOnEmitCallback.js#L1](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/particles/typedefs/EmitterOpOnEmitCallback.js#L1)  
Since: 3.0.0

---

## EmitterOpOnEmitType

### \<static> EmitterOpOnEmitType

**Type**: number | Array.\<number> | [Phaser.Types.GameObjects.Particles.EmitterOpOnEmitCallback](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnEmitCallback) | [Phaser.Types.GameObjects.Particles.EmitterOpRandomConfig](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpRandomConfig) | [Phaser.Types.GameObjects.Particles.EmitterOpRandomMinMaxConfig](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpRandomMinMaxConfig) | [Phaser.Types.GameObjects.Particles.EmitterOpSteppedConfig](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpSteppedConfig) | [Phaser.Types.GameObjects.Particles.EmitterOpCustomEmitConfig](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpCustomEmitConfig)

**Member of**: Phaser.Types.GameObjects.Particles
> Source: [src/gameobjects/particles/typedefs/EmitterOpOnEmitType.js#L1](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/particles/typedefs/EmitterOpOnEmitType.js#L1)  
Since: 3.18.0

---

## EmitterOpOnUpdateCallback

### \<static> EmitterOpOnUpdateCallback


The returned value updates the property for the duration of the particle's life.

**Type**: function

**Member of**: Phaser.Types.GameObjects.Particles
> Source: [src/gameobjects/particles/typedefs/EmitterOpOnUpdateCallback.js#L1](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/particles/typedefs/EmitterOpOnUpdateCallback.js#L1)  
Since: 3.0.0

---

## EmitterOpOnUpdateType

### \<static> EmitterOpOnUpdateType

**Type**: [Phaser.Types.GameObjects.Particles.EmitterOpOnUpdateCallback](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnUpdateCallback) | [Phaser.Types.GameObjects.Particles.EmitterOpEaseConfig](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpEaseConfig) | [Phaser.Types.GameObjects.Particles.EmitterOpCustomUpdateConfig](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpCustomUpdateConfig) | [Phaser.Types.GameObjects.Particles.EmitterOpInterpolationConfig](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpInterpolationConfig)

**Member of**: Phaser.Types.GameObjects.Particles
> Source: [src/gameobjects/particles/typedefs/EmitterOpOnUpdateType.js#L1](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/particles/typedefs/EmitterOpOnUpdateType.js#L1)  
Since: 3.18.0

---

## EmitterOpRandomConfig

### \<static> EmitterOpRandomConfig


Defines an operation yielding a random value within a range.

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| random | Array.\<number> | No | The minimum and maximum values, as [min, max]. |

**Type**: object

**Member of**: Phaser.Types.GameObjects.Particles
> Source: [src/gameobjects/particles/typedefs/EmitterOpRandomConfig.js#L1](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/particles/typedefs/EmitterOpRandomConfig.js#L1)  
Since: 3.0.0

---

## EmitterOpRandomMinMaxConfig

### \<static> EmitterOpRandomMinMaxConfig


Defines an operation yielding a random value within a range.

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| min | number | No | The minimum value. |
| max | number | No | The maximum value. |
| int | boolean | Yes | If true, only integers are selected from the range. |

**Type**: object

**Member of**: Phaser.Types.GameObjects.Particles
> Source: [src/gameobjects/particles/typedefs/EmitterOpRandomMinMaxConfig.js#L1](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/particles/typedefs/EmitterOpRandomMinMaxConfig.js#L1)  
Since: 3.0.0

---

## EmitterOpSteppedConfig

### \<static> EmitterOpSteppedConfig


Defines an operation yielding a value incremented by steps across a range.

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| start | number | No | The starting value. |
| end | number | No | The ending value. |
| steps | number | No | The number of steps between start and end. |

**Type**: object

**Member of**: Phaser.Types.GameObjects.Particles
> Source: [src/gameobjects/particles/typedefs/EmitterOpSteppedConfig.js#L1](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/particles/typedefs/EmitterOpSteppedConfig.js#L1)  
Since: 3.0.0

---

## EmitZoneData

### \<static> EmitZoneData

**Type**: [Phaser.Types.GameObjects.Particles.ParticleEmitterEdgeZoneConfig](../typedef/Phaser.Types.GameObjects.Particles.md#ParticleEmitterEdgeZoneConfig) | [Phaser.Types.GameObjects.Particles.ParticleEmitterRandomZoneConfig](../typedef/Phaser.Types.GameObjects.Particles.md#ParticleEmitterRandomZoneConfig) | [Phaser.GameObjects.Particles.Zones.EdgeZone](../class/Phaser.GameObjects.Particles.Zones.EdgeZone.md) | [Phaser.GameObjects.Particles.Zones.RandomZone](../class/Phaser.GameObjects.Particles.Zones.RandomZone.md)

**Member of**: Phaser.Types.GameObjects.Particles
> Source: [src/gameobjects/particles/typedefs/EmitZoneData.js#L1](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/particles/typedefs/EmitZoneData.js#L1)  
Since: 3.60.0

---

## EmitZoneObject

### \<static> EmitZoneObject

**Type**: [Phaser.GameObjects.Particles.Zones.EdgeZone](../class/Phaser.GameObjects.Particles.Zones.EdgeZone.md) | [Phaser.GameObjects.Particles.Zones.RandomZone](../class/Phaser.GameObjects.Particles.Zones.RandomZone.md)

**Member of**: Phaser.Types.GameObjects.Particles
> Source: [src/gameobjects/particles/typedefs/EmitZoneObject.js#L1](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/particles/typedefs/EmitZoneObject.js#L1)  
Since: 3.60.0

---

## GravityWellConfig

### \<static> GravityWellConfig

| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| x | number | Yes | 0 | The x coordinate of the Gravity Well, in world space. |
| y | number | Yes | 0 | The y coordinate of the Gravity Well, in world space. |
| power | number | Yes | 0 | The strength of the gravity force - larger numbers produce a stronger force. |
| epsilon | number | Yes | 100 | The minimum distance for which the gravity force is calculated. |
| gravity | number | Yes | 50 | The gravitational force of this Gravity Well. |

**Type**: object

**Member of**: Phaser.Types.GameObjects.Particles
> Source: [src/gameobjects/particles/typedefs/GravityWellConfig.js#L1](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/particles/typedefs/GravityWellConfig.js#L1)  
Since: 3.0.0

---

## ParticleClassConstructor

### \<static> ParticleClassConstructor

**Type**: function

**Member of**: Phaser.Types.GameObjects.Particles
> Source: [src/gameobjects/particles/typedefs/ParticleClassConstructor.js#L1](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/particles/typedefs/ParticleClassConstructor.js#L1)  
Since: 3.0.0

---

## ParticleData

### \<static> ParticleData

| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| tint | [Phaser.Types.GameObjects.Particles.ParticleDataValue](../typedef/Phaser.Types.GameObjects.Particles.md#ParticleDataValue) | Yes | "{min:0xffffff,max:0xffffff}" | No description provided |
| alpha | [Phaser.Types.GameObjects.Particles.ParticleDataValue](../typedef/Phaser.Types.GameObjects.Particles.md#ParticleDataValue) | Yes | "{min:1,max:1}" | No description provided |
| rotate | [Phaser.Types.GameObjects.Particles.ParticleDataValue](../typedef/Phaser.Types.GameObjects.Particles.md#ParticleDataValue) | Yes | "{min:0,max:0}" | No description provided |
| scaleX | [Phaser.Types.GameObjects.Particles.ParticleDataValue](../typedef/Phaser.Types.GameObjects.Particles.md#ParticleDataValue) | Yes | "{min:1,max:1}" | No description provided |
| scaleY | [Phaser.Types.GameObjects.Particles.ParticleDataValue](../typedef/Phaser.Types.GameObjects.Particles.md#ParticleDataValue) | Yes | "{min:1,max:1}" | No description provided |
| x | [Phaser.Types.GameObjects.Particles.ParticleDataValue](../typedef/Phaser.Types.GameObjects.Particles.md#ParticleDataValue) | Yes | "{min:0,max:0}" | No description provided |
| y | [Phaser.Types.GameObjects.Particles.ParticleDataValue](../typedef/Phaser.Types.GameObjects.Particles.md#ParticleDataValue) | Yes | "{min:0,max:0}" | No description provided |
| accelerationX | [Phaser.Types.GameObjects.Particles.ParticleDataValue](../typedef/Phaser.Types.GameObjects.Particles.md#ParticleDataValue) | Yes | "{min:0,max:0}" | No description provided |
| accelerationY | [Phaser.Types.GameObjects.Particles.ParticleDataValue](../typedef/Phaser.Types.GameObjects.Particles.md#ParticleDataValue) | Yes | "{min:0,max:0}" | No description provided |
| maxVelocityX | [Phaser.Types.GameObjects.Particles.ParticleDataValue](../typedef/Phaser.Types.GameObjects.Particles.md#ParticleDataValue) | Yes | "{min:0,max:0}" | No description provided |
| maxVelocityY | [Phaser.Types.GameObjects.Particles.ParticleDataValue](../typedef/Phaser.Types.GameObjects.Particles.md#ParticleDataValue) | Yes | "{min:0,max:0}" | No description provided |
| moveToX | [Phaser.Types.GameObjects.Particles.ParticleDataValue](../typedef/Phaser.Types.GameObjects.Particles.md#ParticleDataValue) | Yes | "{min:0,max:0}" | No description provided |
| moveToY | [Phaser.Types.GameObjects.Particles.ParticleDataValue](../typedef/Phaser.Types.GameObjects.Particles.md#ParticleDataValue) | Yes | "{min:0,max:0}" | No description provided |
| bounce | [Phaser.Types.GameObjects.Particles.ParticleDataValue](../typedef/Phaser.Types.GameObjects.Particles.md#ParticleDataValue) | Yes | "{min:0,max:0}" | No description provided |

**Type**: object

**Member of**: Phaser.Types.GameObjects.Particles
> Source: [src/gameobjects/particles/typedefs/ParticleData.js#L1](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/particles/typedefs/ParticleData.js#L1)  
Since: 3.60.0

---

## ParticleDataValue

### \<static> ParticleDataValue

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| min | number | No | The minimum value. |
| max | number | No | The maximum value. |

**Type**: object

**Member of**: Phaser.Types.GameObjects.Particles
> Source: [src/gameobjects/particles/typedefs/ParticleDataValue.js#L1](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/particles/typedefs/ParticleDataValue.js#L1)  
Since: 3.60.0

---

## ParticleDeathCallback

### \<static> ParticleDeathCallback

**Type**: function

**Member of**: Phaser.Types.GameObjects.Particles
> Source: [src/gameobjects/particles/typedefs/ParticleDeathCallback.js#L1](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/particles/typedefs/ParticleDeathCallback.js#L1)  
Since: 3.0.0

---

## ParticleEmitterAnimConfig

### \<static> ParticleEmitterAnimConfig

| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| anims | string \| Array.\<string> | [Phaser.Types.Animations.PlayAnimationConfig](../typedef/Phaser.Types.Animations.md#PlayAnimationConfig) | Array.\<[Phaser.Types.Animations.PlayAnimationConfig](../typedef/Phaser.Types.Animations.md#PlayAnimationConfig)> | Yes |  | One or more animations names, or Play Animation Config objects. |
| cycle | boolean | Yes | false | Whether animations will be assigned consecutively (true) or at random (false). |
| quantity | number | Yes | 1 | The number of consecutive particles receiving each animation, when `cycle` is true. |

**Type**: object

**Member of**: Phaser.Types.GameObjects.Particles
> Source: [src/gameobjects/particles/typedefs/ParticleEmitterAnimConfig.js#L1](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/particles/typedefs/ParticleEmitterAnimConfig.js#L1)  
Since: 3.60.0

---

## ParticleEmitterBounds

### \<static> ParticleEmitterBounds

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| x | number | No | The left edge of the rectangle. |
| y | number | No | The top edge of the rectangle. |
| width | number | No | The width of the rectangle. |
| height | number | No | The height of the rectangle. |

**Type**: object

**Member of**: Phaser.Types.GameObjects.Particles
> Source: [src/gameobjects/particles/typedefs/ParticleEmitterBounds.js#L1](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/particles/typedefs/ParticleEmitterBounds.js#L1)  
Since: 3.0.0

---

## ParticleEmitterBoundsAlt

### \<static> ParticleEmitterBoundsAlt

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| x | number | No | The left edge of the rectangle. |
| y | number | No | The top edge of the rectangle. |
| w | number | No | The width of the rectangle. |
| h | number | No | The height of the rectangle. |

**Type**: object

**Member of**: Phaser.Types.GameObjects.Particles
> Source: [src/gameobjects/particles/typedefs/ParticleEmitterBoundsAlt.js#L1](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/particles/typedefs/ParticleEmitterBoundsAlt.js#L1)  
Since: 3.0.0

---

## ParticleEmitterCallback

### \<static> ParticleEmitterCallback

**Type**: function

**Member of**: Phaser.Types.GameObjects.Particles
> Source: [src/gameobjects/particles/typedefs/ParticleEmitterCallback.js#L1](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/particles/typedefs/ParticleEmitterCallback.js#L1)  
Since: 3.0.0

---

## ParticleEmitterConfig

### \<static> ParticleEmitterConfig

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| active | boolean | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#active}. Setting this to false will stop the emitter from running at all. If you just wish to stop particles from emitting, set `emitting` property instead. |
| blendMode | [Phaser.BlendModes](../namespace/Phaser.BlendModes.md) \| string | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#blendMode}. |
| callbackScope | * | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#deathCallbackScope} and {@link Phaser.GameObjects.Particles.ParticleEmitter#emitCallbackScope}. |
| collideBottom | boolean | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#collideBottom}. |
| collideLeft | boolean | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#collideLeft}. |
| collideRight | boolean | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#collideRight}. |
| collideTop | boolean | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#collideTop}. |
| deathCallback | function | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#deathCallback}. |
| deathCallbackScope | * | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#deathCallbackScope}. |
| emitCallback | function | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#emitCallback}. |
| emitCallbackScope | * | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#emitCallbackScope}. |
| follow | [Phaser.Types.Math.Vector2Like](../typedef/Phaser.Types.Math.md#Vector2Like) | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#follow}. |
| frequency | number | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#frequency}. |
| gravityX | number | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#gravityX}. |
| gravityY | number | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#gravityY}. |
| maxParticles | number | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#maxParticles}. |
| maxAliveParticles | number | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#maxAliveParticles}. |
| name | string | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#name}. |
| emitting | boolean | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#emitting}. |
| particleBringToTop | boolean | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#particleBringToTop}. |
| particleClass | function | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#particleClass}. |
| radial | boolean | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#radial}. |
| timeScale | number | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#timeScale}. |
| trackVisible | boolean | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#trackVisible}. |
| visible | boolean | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#visible}. |
| accelerationX | [Phaser.Types.GameObjects.Particles.EmitterOpOnEmitType](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnEmitType) \| [Phaser.Types.GameObjects.Particles.EmitterOpOnUpdateType](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnUpdateType) | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#accelerationX}. |
| accelerationY | [Phaser.Types.GameObjects.Particles.EmitterOpOnEmitType](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnEmitType) \| [Phaser.Types.GameObjects.Particles.EmitterOpOnUpdateType](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnUpdateType) | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#accelerationY}. |
| alpha | [Phaser.Types.GameObjects.Particles.EmitterOpOnEmitType](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnEmitType) \| [Phaser.Types.GameObjects.Particles.EmitterOpOnUpdateType](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnUpdateType) | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#particleAlpha}. |
| angle | [Phaser.Types.GameObjects.Particles.EmitterOpOnEmitType](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnEmitType) | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#particleAngle} (emit only). |
| bounce | [Phaser.Types.GameObjects.Particles.EmitterOpOnEmitType](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnEmitType) \| [Phaser.Types.GameObjects.Particles.EmitterOpOnUpdateType](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnUpdateType) | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#bounce}. |
| delay | [Phaser.Types.GameObjects.Particles.EmitterOpOnEmitType](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnEmitType) | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#delay} (emit only). |
| hold | [Phaser.Types.GameObjects.Particles.EmitterOpOnEmitType](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnEmitType) | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#hold} (emit only). |
| lifespan | [Phaser.Types.GameObjects.Particles.EmitterOpOnEmitType](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnEmitType) | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#lifespan} (emit only). |
| maxVelocityX | [Phaser.Types.GameObjects.Particles.EmitterOpOnEmitType](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnEmitType) \| [Phaser.Types.GameObjects.Particles.EmitterOpOnUpdateType](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnUpdateType) | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#maxVelocityX}. |
| maxVelocityY | [Phaser.Types.GameObjects.Particles.EmitterOpOnEmitType](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnEmitType) \| [Phaser.Types.GameObjects.Particles.EmitterOpOnUpdateType](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnUpdateType) | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#maxVelocityY}. |
| moveToX | [Phaser.Types.GameObjects.Particles.EmitterOpOnEmitType](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnEmitType) \| [Phaser.Types.GameObjects.Particles.EmitterOpOnUpdateType](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnUpdateType) | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#moveToX}. If set, overrides `angle` and `speed` properties. |
| moveToY | [Phaser.Types.GameObjects.Particles.EmitterOpOnEmitType](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnEmitType) \| [Phaser.Types.GameObjects.Particles.EmitterOpOnUpdateType](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnUpdateType) | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#moveToY}. If set, overrides `angle` and `speed` properties. |
| quantity | [Phaser.Types.GameObjects.Particles.EmitterOpOnEmitType](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnEmitType) | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#quantity} (emit only). |
| rotate | [Phaser.Types.GameObjects.Particles.EmitterOpOnEmitType](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnEmitType) \| [Phaser.Types.GameObjects.Particles.EmitterOpOnUpdateType](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnUpdateType) | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#particleRotate}. |
| scale | [Phaser.Types.GameObjects.Particles.EmitterOpOnEmitType](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnEmitType) \| [Phaser.Types.GameObjects.Particles.EmitterOpOnUpdateType](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnUpdateType) | Yes | As {@link Phaser.GameObjects.Particles.ParticleEmitter#setScale}. |
| scaleX | [Phaser.Types.GameObjects.Particles.EmitterOpOnEmitType](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnEmitType) \| [Phaser.Types.GameObjects.Particles.EmitterOpOnUpdateType](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnUpdateType) | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#particleScaleX}. |
| scaleY | [Phaser.Types.GameObjects.Particles.EmitterOpOnEmitType](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnEmitType) \| [Phaser.Types.GameObjects.Particles.EmitterOpOnUpdateType](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnUpdateType) | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#particleScaleY}. |
| speed | [Phaser.Types.GameObjects.Particles.EmitterOpOnEmitType](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnEmitType) | Yes | As {@link Phaser.GameObjects.Particles.ParticleEmitter#setSpeed} (emit only). |
| speedX | [Phaser.Types.GameObjects.Particles.EmitterOpOnEmitType](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnEmitType) | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#speedX} (emit only). |
| speedY | [Phaser.Types.GameObjects.Particles.EmitterOpOnEmitType](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnEmitType) | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#speedY} (emit only). |
| tint | [Phaser.Types.GameObjects.Particles.EmitterOpOnEmitType](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnEmitType) \| [Phaser.Types.GameObjects.Particles.EmitterOpOnUpdateType](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnUpdateType) | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#particleTint}. |
| color | Array.\<number> | Yes | An array of color values that the Particles interpolate through during their life. If set, overrides any `tint` property. |
| colorEase | string | Yes | The string-based name of the Easing function to use if you have enabled Particle color interpolation via the `color` property, otherwise has no effect. |
| x | [Phaser.Types.GameObjects.Particles.EmitterOpOnEmitType](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnEmitType) \| [Phaser.Types.GameObjects.Particles.EmitterOpOnUpdateType](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnUpdateType) | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#particleX}. |
| y | [Phaser.Types.GameObjects.Particles.EmitterOpOnEmitType](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnEmitType) \| [Phaser.Types.GameObjects.Particles.EmitterOpOnUpdateType](../typedef/Phaser.Types.GameObjects.Particles.md#EmitterOpOnUpdateType) | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#particleY}. |
| emitZone | [Phaser.Types.GameObjects.Particles.EmitZoneData](../typedef/Phaser.Types.GameObjects.Particles.md#EmitZoneData) \| Array.\<[Phaser.Types.GameObjects.Particles.EmitZoneData](../typedef/Phaser.Types.GameObjects.Particles.md#EmitZoneData)> | Yes | As {@link Phaser.GameObjects.Particles.ParticleEmitter#setEmitZone}. |
| deathZone | [Phaser.Types.GameObjects.Particles.DeathZoneObject](../typedef/Phaser.Types.GameObjects.Particles.md#DeathZoneObject) \| Array.\<[Phaser.Types.GameObjects.Particles.DeathZoneObject](../typedef/Phaser.Types.GameObjects.Particles.md#DeathZoneObject)> | Yes | As {@link Phaser.GameObjects.Particles.ParticleEmitter#setDeathZone}. |
| bounds | [Phaser.Types.GameObjects.Particles.ParticleEmitterBounds](../typedef/Phaser.Types.GameObjects.Particles.md#ParticleEmitterBounds) \| [Phaser.Types.GameObjects.Particles.ParticleEmitterBoundsAlt](../typedef/Phaser.Types.GameObjects.Particles.md#ParticleEmitterBoundsAlt) | Yes | As {@link Phaser.GameObjects.Particles.ParticleEmitter#setBounds}. |
| followOffset | [Phaser.Types.Math.Vector2Like](../typedef/Phaser.Types.Math.md#Vector2Like) | Yes | Offset coordinates that assigns to {@link Phaser.GameObjects.Particles.ParticleEmitter#followOffset}. |
| anim | string \| Array.\<string> | [Phaser.Types.GameObjects.Particles.ParticleEmitterAnimConfig](../typedef/Phaser.Types.GameObjects.Particles.md#ParticleEmitterAnimConfig) | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#anims}. |
| frame | number \| Array.\<number> | string | Array.\<string> | [Phaser.Textures.Frame](../class/Phaser.Textures.Frame.md) | Array.\<[Phaser.Textures.Frame](../class/Phaser.Textures.Frame.md)> | [Phaser.Types.GameObjects.Particles.ParticleEmitterFrameConfig](../typedef/Phaser.Types.GameObjects.Particles.md#ParticleEmitterFrameConfig) | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#frames}. |
| texture | string \| [Phaser.Textures.Texture](../class/Phaser.Textures.Texture.md) | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#texture}. Overrides any texture already set on the Emitter. |
| reserve | number | Yes | Creates specified number of inactive particles and adds them to this emitter's pool. {@link Phaser.GameObjects.Particles.ParticleEmitter#reserve} |
| advance | number | Yes | If you wish to 'fast forward' the emitter in time, set this value to a number representing the amount of ms the emitter should advance. Doing so implicitly sets `emitting` to `true`. |
| duration | number | Yes | Limit the emitter to emit particles for a maximum of `duration` ms. Default to zero, meaning 'forever'. |
| stopAfter | number | Yes | Limit the emitter to emit this exact number of particles and then stop. Default to zero, meaning no limit. |
| sortCallback | [Phaser.Types.GameObjects.Particles.ParticleSortCallback](../typedef/Phaser.Types.GameObjects.Particles.md#ParticleSortCallback) | Yes | A custom callback that sorts particles prior to rendering. Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#sortCallback}. |
| sortOrderAsc | boolean | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#sortOrderAsc}. |
| sortProperty | string | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#sortProperty}. |
| tintFill | boolean | Yes | Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#tintFill}. |

**Type**: object

**Member of**: Phaser.Types.GameObjects.Particles
> Source: [src/gameobjects/particles/typedefs/ParticleEmitterConfig.js#L1](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/particles/typedefs/ParticleEmitterConfig.js#L1)  
Since: 3.0.0

---

## ParticleEmitterCreatorConfig

### \<static> ParticleEmitterCreatorConfig

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| key | string | Yes | The key of the Texture this Emitter will use to render particles, as stored in the Texture Manager. |
| config | [Phaser.Types.GameObjects.Particles.ParticleEmitterConfig](../typedef/Phaser.Types.GameObjects.Particles.md#ParticleEmitterConfig) | Yes | The Particle Emitter configuration object. |

**Type**: object

**Member of**: Phaser.Types.GameObjects.Particles
> Source: [src/gameobjects/particles/typedefs/ParticleEmitterCreatorConfig.js#L1](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/particles/typedefs/ParticleEmitterCreatorConfig.js#L1)  
Since: 3.60.0

---

## ParticleEmitterDeathZoneConfig

### \<static> ParticleEmitterDeathZoneConfig

| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| source | [Phaser.Types.GameObjects.Particles.DeathZoneSource](../typedef/Phaser.Types.GameObjects.Particles.md#DeathZoneSource) | No |  | A shape representing the zone. See {@link Phaser.GameObjects.Particles.Zones.DeathZone#source}. |
| type | string | Yes | "'onEnter'" | 'onEnter' or 'onLeave'. |

**Type**: object

**Member of**: Phaser.Types.GameObjects.Particles
> Source: [src/gameobjects/particles/typedefs/ParticleEmitterDeathZoneConfig.js#L1](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/particles/typedefs/ParticleEmitterDeathZoneConfig.js#L1)  
Since: 3.0.0

---

## ParticleEmitterEdgeZoneConfig

### \<static> ParticleEmitterEdgeZoneConfig

| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| source | [Phaser.Types.GameObjects.Particles.EdgeZoneSource](../typedef/Phaser.Types.GameObjects.Particles.md#EdgeZoneSource) | No |  | A shape representing the zone. See {@link Phaser.GameObjects.Particles.Zones.EdgeZone#source}. |
| type | string | No |  | 'edge'. |
| quantity | number | No |  | The number of particles to place on the source edge. Set to 0 to use `stepRate` instead. |
| stepRate | number | Yes |  | The distance between each particle. When set, `quantity` is implied and should be set to 0. |
| yoyo | boolean | Yes | false | Whether particles are placed from start to end and then end to start. |
| seamless | boolean | Yes | true | Whether one endpoint will be removed if it's identical to the other. |
| total | number | Yes | 1 | The total number of particles this zone will emit before passing over to the next emission zone in the Emitter. |

**Type**: object

**Member of**: Phaser.Types.GameObjects.Particles
> Source: [src/gameobjects/particles/typedefs/ParticleEmitterEdgeZoneConfig.js#L1](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/particles/typedefs/ParticleEmitterEdgeZoneConfig.js#L1)  
Since: 3.0.0

---

## ParticleEmitterFrameConfig

### \<static> ParticleEmitterFrameConfig

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| frames | Array.\<number> \| Array.\<string> | Array.\<[Phaser.Textures.Frame](../class/Phaser.Textures.Frame.md)> | Yes | Array of texture frames. |
| cycle | boolean | Yes | Whether texture frames will be assigned consecutively (true) or at random (false). |
| quantity | number | Yes | The number of consecutive particles receiving each texture frame, when `cycle` is true. |

**Type**: object

**Member of**: Phaser.Types.GameObjects.Particles
> Source: [src/gameobjects/particles/typedefs/ParticleEmitterFrameConfig.js#L1](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/particles/typedefs/ParticleEmitterFrameConfig.js#L1)  
Since: 3.0.0

---

## ParticleEmitterOps

### \<static> ParticleEmitterOps

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| accelerationX | [Phaser.GameObjects.Particles.EmitterOp](../class/Phaser.GameObjects.Particles.EmitterOp.md) | No | The accelerationX EmitterOp instance. This is an onEmit and onUpdate operator. |
| accelerationY | [Phaser.GameObjects.Particles.EmitterOp](../class/Phaser.GameObjects.Particles.EmitterOp.md) | No | The accelerationY EmitterOp instance. This is an onEmit and onUpdate operator. |
| alpha | [Phaser.GameObjects.Particles.EmitterOp](../class/Phaser.GameObjects.Particles.EmitterOp.md) | No | The alpha EmitterOp instance. This is an onEmit and onUpdate operator. |
| angle | [Phaser.GameObjects.Particles.EmitterOp](../class/Phaser.GameObjects.Particles.EmitterOp.md) | No | The angle EmitterOp instance. This is an onEmit operator only. |
| bounce | [Phaser.GameObjects.Particles.EmitterOp](../class/Phaser.GameObjects.Particles.EmitterOp.md) | No | The bounce EmitterOp instance. This is an onEmit and onUpdate operator. |
| color | [Phaser.GameObjects.Particles.EmitterColorOp](../class/Phaser.GameObjects.Particles.EmitterColorOp.md) | No | The color EmitterColorOp instance. This is an onEmit and onUpdate operator. |
| delay | [Phaser.GameObjects.Particles.EmitterOp](../class/Phaser.GameObjects.Particles.EmitterOp.md) | No | The delay EmitterOp instance. This is an onEmit operator only. |
| hold | [Phaser.GameObjects.Particles.EmitterOp](../class/Phaser.GameObjects.Particles.EmitterOp.md) | No | The hold EmitterOp instance. This is an onEmit operator only. |
| lifespan | [Phaser.GameObjects.Particles.EmitterOp](../class/Phaser.GameObjects.Particles.EmitterOp.md) | No | The lifespan EmitterOp instance. This is an onEmit operator only. |
| maxVelocityX | [Phaser.GameObjects.Particles.EmitterOp](../class/Phaser.GameObjects.Particles.EmitterOp.md) | No | The maxVelocityX EmitterOp instance. This is an onEmit and onUpdate operator. |
| maxVelocityY | [Phaser.GameObjects.Particles.EmitterOp](../class/Phaser.GameObjects.Particles.EmitterOp.md) | No | The maxVelocityY EmitterOp instance. This is an onEmit and onUpdate operator. |
| moveToX | [Phaser.GameObjects.Particles.EmitterOp](../class/Phaser.GameObjects.Particles.EmitterOp.md) | No | The moveToX EmitterOp instance. This is an onEmit and onUpdate operator. |
| moveToY | [Phaser.GameObjects.Particles.EmitterOp](../class/Phaser.GameObjects.Particles.EmitterOp.md) | No | The moveToY EmitterOp instance. This is an onEmit and onUpdate operator. |
| quantity | [Phaser.GameObjects.Particles.EmitterOp](../class/Phaser.GameObjects.Particles.EmitterOp.md) | No | The quantity EmitterOp instance. This is an onEmit operator only. |
| rotate | [Phaser.GameObjects.Particles.EmitterOp](../class/Phaser.GameObjects.Particles.EmitterOp.md) | No | The rotate EmitterOp instance. This is an onEmit and onUpdate operator. |
| scaleX | [Phaser.GameObjects.Particles.EmitterOp](../class/Phaser.GameObjects.Particles.EmitterOp.md) | No | The scaleX EmitterOp instance. This is an onEmit and onUpdate operator. |
| scaleY | [Phaser.GameObjects.Particles.EmitterOp](../class/Phaser.GameObjects.Particles.EmitterOp.md) | No | The scaleY EmitterOp instance. This is an onEmit and onUpdate operator. |
| speedX | [Phaser.GameObjects.Particles.EmitterOp](../class/Phaser.GameObjects.Particles.EmitterOp.md) | No | The speedX EmitterOp instance. This is an onEmit operator only. |
| speedY | [Phaser.GameObjects.Particles.EmitterOp](../class/Phaser.GameObjects.Particles.EmitterOp.md) | No | The speedY EmitterOp instance. This is an onEmit operator only. |
| tint | [Phaser.GameObjects.Particles.EmitterOp](../class/Phaser.GameObjects.Particles.EmitterOp.md) | No | The tint EmitterOp instance. This is an onEmit and onUpdate operator. |
| x | [Phaser.GameObjects.Particles.EmitterOp](../class/Phaser.GameObjects.Particles.EmitterOp.md) | No | The x EmitterOp instance. This is an onEmit and onUpdate operator. |
| y | [Phaser.GameObjects.Particles.EmitterOp](../class/Phaser.GameObjects.Particles.EmitterOp.md) | No | The y EmitterOp instance. This is an onEmit and onUpdate operator. |

**Type**: object

**Member of**: Phaser.Types.GameObjects.Particles
> Source: [src/gameobjects/particles/typedefs/ParticleEmitterOps.js#L1](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/particles/typedefs/ParticleEmitterOps.js#L1)  
Since: 3.60.0

---

## ParticleEmitterRandomZoneConfig

### \<static> ParticleEmitterRandomZoneConfig

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| source | [Phaser.Types.GameObjects.Particles.RandomZoneSource](../typedef/Phaser.Types.GameObjects.Particles.md#RandomZoneSource) | No | A shape representing the zone. See {@link Phaser.GameObjects.Particles.Zones.RandomZone#source}. |
| type | string | Yes | 'random'. |

**Type**: object

**Member of**: Phaser.Types.GameObjects.Particles
> Source: [src/gameobjects/particles/typedefs/ParticleEmitterRandomZoneConfig.js#L1](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/particles/typedefs/ParticleEmitterRandomZoneConfig.js#L1)  
Since: 3.0.0

---

## ParticleSortCallback

### \<static> ParticleSortCallback

**Type**: function

**Member of**: Phaser.Types.GameObjects.Particles
> Source: [src/gameobjects/particles/typedefs/ParticleSortCallback.js#L1](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/particles/typedefs/ParticleSortCallback.js#L1)  
Since: 3.60.0

---

## RandomZoneSource

### \<static> RandomZoneSource

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| getRandomPoint | [Phaser.Types.GameObjects.Particles.RandomZoneSourceCallback](../typedef/Phaser.Types.GameObjects.Particles.md#RandomZoneSourceCallback) | No | A function modifying its point argument. |

**Type**: object

**Member of**: Phaser.Types.GameObjects.Particles
> Source: [src/gameobjects/particles/typedefs/RandomZoneSource.js#L1](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/particles/typedefs/RandomZoneSource.js#L1)  
Since: 3.0.0

---

## RandomZoneSourceCallback

### \<static> RandomZoneSourceCallback

**Type**: function

**Member of**: Phaser.Types.GameObjects.Particles
> Source: [src/gameobjects/particles/typedefs/RandomZoneSourceCallback.js#L1](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/particles/typedefs/RandomZoneSourceCallback.js#L1)  
Since: 3.0.0

---
