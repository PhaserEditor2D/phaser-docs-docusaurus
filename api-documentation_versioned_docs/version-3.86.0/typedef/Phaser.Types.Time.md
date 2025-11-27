---
visibility: public
slug: typedef/types-time
title: Types.Time
description: Phaser.Types.Time
seoTitle: Types.Time
seoDescription: Phaser v3.86.0 Documentation for Phaser.Types.Time
ogImage: 
---

## TimelineEvent

### \<static> TimelineEvent

| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| complete | boolean | No |  | Has this event completed yet? |
| once | boolean | No |  | Is this a once only event? |
| time | number | No |  | The time (in elapsed ms) at which this event will fire. |
| repeat | function | Yes | 0 | The amount of times this Event has repeated. |
| if | function | Yes | null | User-land callback which will be called if set. If it returns `true` then this event run all of its actions, otherwise it will be skipped. |
| run | function | Yes | null | User-land callback which will be called when the Event fires. |
| loop | function | Yes | null | User-land callback which will be called when the Event loops. |
| tween | [Phaser.Types.Tweens.TweenBuilderConfig](../typedef/Phaser.Types.Tweens.md#TweenBuilderConfig) \| [Phaser.Types.Tweens.TweenChainBuilderConfig](../typedef/Phaser.Types.Tweens.md#TweenChainBuilderConfig) | [Phaser.Tweens.Tween](../class/Phaser.Tweens.Tween.md) | [Phaser.Tweens.TweenChain](../class/Phaser.Tweens.TweenChain.md) | Yes | null | Tween configuration object which will be used to create a Tween when the Event fires if set. |
| set | object | Yes | null | Object containing properties to set on the `target` when the Event fires if set. |
| sound | string \| object | Yes | null | Sound configuration object which will be used to create a Sound when the Event fires if set. |
| target | * | Yes |  | The scope (`this` object) with which to invoke the run `callback`. |
| event | string | Yes |  | Optional event name to emit when the Event fires. |
| tweenInstance | [Phaser.Tweens.Tween](../class/Phaser.Tweens.Tween.md) \| [Phaser.Tweens.TweenChain](../class/Phaser.Tweens.TweenChain.md) | Yes | null | If this Event is using a Tween to manage its actions, this property will contain a reference to it. |

**Type**: object

**Member of**: Phaser.Types.Time
> Source: [src/time/typedefs/TimelineEvent.js#L1](https://github.com/phaserjs/phaser/blob/v3.86.0/src/time/typedefs/TimelineEvent.js#L1)  
Since: 3.60.0

---

## TimelineEventConfig

### \<static> TimelineEventConfig

| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| at | number | Yes | 0 | The time (in ms) at which the Event will fire. The Timeline starts at 0. |
| in | number | Yes |  | If the Timeline is running, this is the time (in ms) at which the Event will fire based on its current elapsed value. If set it will override the `at` property. |
| from | number | Yes |  | Fire this event 'from' milliseconds after the previous event in the Timeline. If set it will override the `at` and `in` properties. |
| run | function | Yes |  | A function which will be called when the Event fires. |
| loop | function | Yes |  | A function which will be called when the Event loops, this does not get called if the `repeat` method is not used or on first iteration. |
| event | string | Yes |  | Optional string-based event name to emit when the Event fires. The event is emitted from the Timeline instance. |
| target | * | Yes |  | The scope (`this` object) with which to invoke the run `callback`, if set. |
| once | boolean | Yes | false | If set, the Event will be removed from the Timeline when it fires. |
| stop | boolean | Yes | false | If set, the Timeline will stop and enter a complete state when this Event fires, even if there are other events after it. |
| tween | [Phaser.Types.Tweens.TweenBuilderConfig](../typedef/Phaser.Types.Tweens.md#TweenBuilderConfig) \| [Phaser.Types.Tweens.TweenChainBuilderConfig](../typedef/Phaser.Types.Tweens.md#TweenChainBuilderConfig) | [Phaser.Tweens.Tween](../class/Phaser.Tweens.Tween.md) | [Phaser.Tweens.TweenChain](../class/Phaser.Tweens.TweenChain.md) | Yes |  | A Tween or TweenChain configuration object or instance. If set, the Event will create this Tween when it fires. |
| set | object | Yes |  | A key-value object of properties to set on the `target` when the Event fires. Ignored if no `target` is given. |
| sound | string \| object | Yes |  | A key from the Sound Manager to play, or a config object for a sound to play when the Event fires. If a config object it must provide two properties: `key` and `config`. The `key` is the key of the sound to play, and the `config` is the config is a Phaser.Types.Sound.SoundConfig object. |

**Type**: object

**Member of**: Phaser.Types.Time
> Source: [src/time/typedefs/TimelineEventConfig.js#L1](https://github.com/phaserjs/phaser/blob/v3.86.0/src/time/typedefs/TimelineEventConfig.js#L1)  
Since: 3.60.0

---

## TimerEventConfig

### \<static> TimerEventConfig

| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| delay | number | Yes | 0 | The delay after which the Timer Event should fire, in milliseconds. |
| repeat | number | Yes | 0 | The total number of times the Timer Event will repeat before finishing. |
| loop | boolean | Yes | false | `true` if the Timer Event should repeat indefinitely. |
| callback | function | Yes |  | The callback which will be called when the Timer Event fires. |
| callbackScope | * | Yes |  | The scope (`this` object) with which to invoke the `callback`. The default is the Timer Event. |
| args | Array.\<*> | Yes |  | Additional arguments to be passed to the `callback`. |
| timeScale | number | Yes | 1 | The scale of the elapsed time. |
| startAt | number | Yes | 0 | The initial elapsed time in milliseconds. Useful if you want a long duration with repeat, but for the first loop to fire quickly. |
| paused | boolean | Yes | false | `true` if the Timer Event should be paused. |

**Type**: object

**Member of**: Phaser.Types.Time
> Source: [src/time/typedefs/TimerEventConfig.js#L1](https://github.com/phaserjs/phaser/blob/v3.86.0/src/time/typedefs/TimerEventConfig.js#L1)  
Since: 3.0.0

---
