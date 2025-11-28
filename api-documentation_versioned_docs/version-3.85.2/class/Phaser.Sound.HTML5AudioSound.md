---
visibility: public
slug: sound-html5audiosound
title: HTML5AudioSound
description: Phaser.Sound.HTML5AudioSound
seoTitle: Phaser.Sound.HTML5AudioSound
seoDescription: Phaser v3.85.2 Documentation for Phaser.Sound.HTML5AudioSound
ogImage: 
---


HTML5 Audio implementation of the sound.

**Constructor**

`new HTML5AudioSound(manager, key, [config])`

**Parameters**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| manager | [Phaser.Sound.HTML5AudioSoundManager](../class/Phaser.Sound.HTML5AudioSoundManager.md) | No |  | Reference to the current sound manager instance. |
| key | string | No |  | Asset key for the sound. |
| config | [Phaser.Types.Sound.SoundConfig](../typedef/Phaser.Types.Sound.md#SoundConfig) | Yes | "{}" | An optional config object containing default sound settings. |

---


**Scope**: static


**Extends**

> [Phaser.Sound.BaseSound](../class/Phaser.Sound.BaseSound.md)  



> Source: [src/sound/html5/HTML5AudioSound.js#L13](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/html5/HTML5AudioSound.js#L13)  
Since: 3.0.0

# Public Members

## audio

### audio: HTMLAudioElement


**Description:**

Reference to an HTML5 Audio tag used for playing sound.


> Source: [src/sound/html5/HTML5AudioSound.js#L53](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/html5/HTML5AudioSound.js#L53)  
Since: 3.0.0


---

## currentMarker

### currentMarker: [Phaser.Types.Sound.SoundMarker](../typedef/Phaser.Types.Sound.md#SoundMarker)


**Description:**

Currently playing marker.
'null' if whole sound is playing.


**Inherits:** [Phaser.Sound.BaseSound#currentMarker](../class/Phaser.Sound.BaseSound.md#currentMarker)


> Source: [src/sound/BaseSound.js#L159](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/BaseSound.js#L159)  
Since: 3.0.0


---

## detune

### detune: number


**Description:**

The detune value of this Sound, given in [cents](https://en.wikipedia.org/wiki/Cent_%28music%29).
The range of the value is -1200 to 1200, but we recommend setting it to [50](https://en.wikipedia.org/wiki/50_Cent).


**Fires:** [Phaser.Sound.Events#event:DETUNE](../event/Phaser.Sound.Events.md#DETUNE)


> Source: [src/sound/html5/HTML5AudioSound.js#L726](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/html5/HTML5AudioSound.js#L726)  
Since: 3.0.0


---

## duration

### duration: number


**Description:**

A value representing the duration, in seconds.
It could be total sound duration or a marker duration.


**Inherits:** [Phaser.Sound.BaseSound#duration](../class/Phaser.Sound.BaseSound.md#duration)


> Source: [src/sound/BaseSound.js#L92](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/BaseSound.js#L92)  
Since: 3.0.0


---

## isPaused

### isPaused: boolean


**Description:**

Flag indicating if sound is currently paused.


**Inherits:** [Phaser.Sound.BaseSound#isPaused](../class/Phaser.Sound.BaseSound.md#isPaused)


> Source: [src/sound/BaseSound.js#L68](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/BaseSound.js#L68)  
Since: 3.0.0


---

## isPlaying

### isPlaying: boolean


**Description:**

Flag indicating if sound is currently playing.


**Inherits:** [Phaser.Sound.BaseSound#isPlaying](../class/Phaser.Sound.BaseSound.md#isPlaying)


> Source: [src/sound/BaseSound.js#L57](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/BaseSound.js#L57)  
Since: 3.0.0


---

## key

### key: string


**Description:**

Asset key for the sound.


**Inherits:** [Phaser.Sound.BaseSound#key](../class/Phaser.Sound.BaseSound.md#key)


> Source: [src/sound/BaseSound.js#L47](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/BaseSound.js#L47)  
Since: 3.0.0


---

## loop

### loop: boolean


**Description:**

Flag indicating whether or not the sound or current sound marker will loop.


**Fires:** [Phaser.Sound.Events#event:LOOP](../event/Phaser.Sound.Events.md#LOOP)


> Source: [src/sound/html5/HTML5AudioSound.js#L858](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/html5/HTML5AudioSound.js#L858)  
Since: 3.0.0


---

## manager

### manager: [Phaser.Sound.BaseSoundManager](../class/Phaser.Sound.BaseSoundManager.md)


**Description:**

Local reference to the sound manager.


**Inherits:** [Phaser.Sound.BaseSound#manager](../class/Phaser.Sound.BaseSound.md#manager)


> Source: [src/sound/BaseSound.js#L38](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/BaseSound.js#L38)  
Since: 3.0.0


---

## markers

### markers: Object.\<string, [Phaser.Types.Sound.SoundMarker](../typedef/Phaser.Types.Sound.md#SoundMarker)>


**Description:**

Object containing markers definitions.


**Inherits:** [Phaser.Sound.BaseSound#markers](../class/Phaser.Sound.BaseSound.md#markers)


> Source: [src/sound/BaseSound.js#L148](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/BaseSound.js#L148)  
Since: 3.0.0


---

## mute

### mute: boolean


**Description:**

Boolean indicating whether the sound is muted or not.
Gets or sets the muted state of this sound.


**Fires:** [Phaser.Sound.Events#event:MUTE](../event/Phaser.Sound.Events.md#MUTE)


> Source: [src/sound/html5/HTML5AudioSound.js#L570](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/html5/HTML5AudioSound.js#L570)  
Since: 3.0.0


---

## pan

### pan: number


**Description:**

Gets or sets the pan of this sound, a value between -1 (full left pan) and 1 (full right pan).

Has no audible effect on HTML5 Audio Sound, but still generates the PAN Event.


**Fires:** [Phaser.Sound.Events#event:PAN](../event/Phaser.Sound.Events.md#PAN)


> Source: [src/sound/html5/HTML5AudioSound.js#L911](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/html5/HTML5AudioSound.js#L911)  
Since: 3.50.0


---

## pendingRemove

### pendingRemove: boolean


**Description:**

Flag indicating if destroy method was called on this sound.


**Inherits:** [Phaser.Sound.BaseSound#pendingRemove](../class/Phaser.Sound.BaseSound.md#pendingRemove)


> Source: [src/sound/BaseSound.js#L171](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/BaseSound.js#L171)  
Since: 3.0.0


---

## previousTime

### previousTime: number


**Description:**

Audio tag's playback position recorded on previous
update method call. Set to 0 if sound is not playing.


> Source: [src/sound/html5/HTML5AudioSound.js#L75](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/html5/HTML5AudioSound.js#L75)  
Since: 3.0.0


---

## rate

### rate: number


**Description:**

Rate at which this Sound will be played.
Value of 1.0 plays the audio at full speed, 0.5 plays the audio at half speed
and 2.0 doubles the audios playback speed.


**Fires:** [Phaser.Sound.Events#event:RATE](../event/Phaser.Sound.Events.md#RATE)


> Source: [src/sound/html5/HTML5AudioSound.js#L669](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/html5/HTML5AudioSound.js#L669)  
Since: 3.0.0


---

## seek

### seek: number


**Description:**

Property representing the position of playback for this sound, in seconds.
Setting it to a specific value moves current playback to that position.
The value given is clamped to the range 0 to current marker duration.
Setting seek of a stopped sound has no effect.


**Fires:** [Phaser.Sound.Events#event:SEEK](../event/Phaser.Sound.Events.md#SEEK)


> Source: [src/sound/html5/HTML5AudioSound.js#L780](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/html5/HTML5AudioSound.js#L780)  
Since: 3.0.0


---

## startTime

### startTime: number


**Description:**

Timestamp as generated by the Request Animation Frame or SetTimeout
representing the time at which the delayed sound playback should start.
Set to 0 if sound playback is not delayed.


> Source: [src/sound/html5/HTML5AudioSound.js#L63](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/html5/HTML5AudioSound.js#L63)  
Since: 3.0.0


---

## tags

### tags: Array.\<HTMLAudioElement>


**Description:**

An array containing all HTML5 Audio tags that could be used for individual
sound playback. Number of instances depends on the config value passed
to the `Loader#audio` method call, default is 1.


> Source: [src/sound/html5/HTML5AudioSound.js#L37](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/html5/HTML5AudioSound.js#L37)  
Since: 3.0.0


---

## totalDuration

### totalDuration: number


**Description:**

The total duration of the sound in seconds.


**Inherits:** [Phaser.Sound.BaseSound#totalDuration](../class/Phaser.Sound.BaseSound.md#totalDuration)


> Source: [src/sound/BaseSound.js#L103](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/BaseSound.js#L103)  
Since: 3.0.0


---

## totalRate

### totalRate: number


**Description:**

A property that holds the value of sound's actual playback rate,
after its rate and detune values has been combined with global
rate and detune values.


**Inherits:** [Phaser.Sound.BaseSound#totalRate](../class/Phaser.Sound.BaseSound.md#totalRate)


> Source: [src/sound/BaseSound.js#L79](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/BaseSound.js#L79)  
Since: 3.0.0


---

## volume

### volume: number


**Description:**

Gets or sets the volume of this sound, a value between 0 (silence) and 1 (full volume).


**Fires:** [Phaser.Sound.Events#event:VOLUME](../event/Phaser.Sound.Events.md#VOLUME)


> Source: [src/sound/html5/HTML5AudioSound.js#L620](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/html5/HTML5AudioSound.js#L620)  
Since: 3.0.0


---

# Private Members

## config

### config: [Phaser.Types.Sound.SoundConfig](../typedef/Phaser.Types.Sound.md#SoundConfig)


**Description:**

A config object used to store default sound settings' values.
Default values will be set by properties' setters.


**Access:** private


**Inherits:** [Phaser.Sound.BaseSound#config](../class/Phaser.Sound.BaseSound.md#config)


> Source: [src/sound/BaseSound.js#L113](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/BaseSound.js#L113)  
Since: 3.0.0


---

## currentConfig

### currentConfig: [Phaser.Types.Sound.SoundConfig](../typedef/Phaser.Types.Sound.md#SoundConfig)


**Description:**

Reference to the currently used config.
It could be default config or marker config.


**Access:** private


**Inherits:** [Phaser.Sound.BaseSound#currentConfig](../class/Phaser.Sound.BaseSound.md#currentConfig)


> Source: [src/sound/BaseSound.js#L135](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/BaseSound.js#L135)  
Since: 3.0.0


---

# Public Methods

## addListener

### \<instance> addListener(event, fn, [context])


**Description:**

Add a listener for a given event.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| event | string \| symbol | No |  | The event name. |
| fn | function | No |  | The listener function. |
| context | * | Yes | "this" | The context to invoke the listener with. |


**Returns:** [Phaser.Sound.HTML5AudioSound](../class/Phaser.Sound.HTML5AudioSound.md) - `this`.


**Inherits:** [Phaser.Events.EventEmitter#addListener](../class/Phaser.Events.EventEmitter.md#addListener)


> Source: [src/events/EventEmitter.js#L111](https://github.com/phaserjs/phaser/blob/v3.85.2/src/events/EventEmitter.js#L111)  
Since: 3.0.0


---

## addMarker

### \<instance> addMarker(marker)


**Description:**

Adds a marker into the current sound. A marker is represented by name, start time, duration, and optionally config object.
This allows you to bundle multiple sounds together into a single audio file and use markers to jump between them for playback.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| marker | [Phaser.Types.Sound.SoundMarker](../typedef/Phaser.Types.Sound.md#SoundMarker) | No | Marker object. |


**Returns:** boolean - Whether the marker was added successfully.


**Inherits:** [Phaser.Sound.BaseSound#addMarker](../class/Phaser.Sound.BaseSound.md#addMarker)


> Source: [src/sound/BaseSound.js#L182](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/BaseSound.js#L182)  
Since: 3.0.0


---

## applyConfig

### \<instance> applyConfig()


**Description:**

Method used internally for applying config values to some of the sound properties.


**Inherits:** [Phaser.Sound.BaseSound#applyConfig](../class/Phaser.Sound.BaseSound.md#applyConfig)


> Source: [src/sound/BaseSound.js#L412](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/BaseSound.js#L412)  
Since: 3.0.0


---

## calculateRate

### \<instance> calculateRate()


**Description:**

This method is used internally to update the playback rate of this sound.


**Overrides:** Phaser.Sound.BaseSound#calculateRate


> Source: [src/sound/html5/HTML5AudioSound.js#L554](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/html5/HTML5AudioSound.js#L554)  
Since: 3.0.0


---

## destroy

### \<instance> destroy()


**Description:**

Calls Phaser.Sound.BaseSound#destroy method
and cleans up all HTML5 Audio related stuff.


**Overrides:** Phaser.Sound.BaseSound#destroy


> Source: [src/sound/html5/HTML5AudioSound.js#L507](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/html5/HTML5AudioSound.js#L507)  
Since: 3.0.0


---

## emit

### \<instance> emit(event, [args])


**Description:**

Calls each of the listeners registered for a given event.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| event | string \| symbol | No | The event name. |
| args | * | Yes | Additional arguments that will be passed to the event handler. |


**Returns:** boolean - `true` if the event had listeners, else `false`.


**Inherits:** [Phaser.Events.EventEmitter#emit](../class/Phaser.Events.EventEmitter.md#emit)


> Source: [src/events/EventEmitter.js#L86](https://github.com/phaserjs/phaser/blob/v3.85.2/src/events/EventEmitter.js#L86)  
Since: 3.0.0


---

## eventNames

### \<instance> eventNames()


**Description:**

Return an array listing the events for which the emitter has registered listeners.


**Returns:** Array.\<(string | symbol)> - undefined


**Inherits:** [Phaser.Events.EventEmitter#eventNames](../class/Phaser.Events.EventEmitter.md#eventNames)


> Source: [src/events/EventEmitter.js#L55](https://github.com/phaserjs/phaser/blob/v3.85.2/src/events/EventEmitter.js#L55)  
Since: 3.0.0


---

## listenerCount

### \<instance> listenerCount(event)


**Description:**

Return the number of listeners listening to a given event.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| event | string \| symbol | No | The event name. |


**Returns:** number - The number of listeners.


**Inherits:** [Phaser.Events.EventEmitter#listenerCount](../class/Phaser.Events.EventEmitter.md#listenerCount)


> Source: [src/events/EventEmitter.js#L75](https://github.com/phaserjs/phaser/blob/v3.85.2/src/events/EventEmitter.js#L75)  
Since: 3.0.0


---

## listeners

### \<instance> listeners(event)


**Description:**

Return the listeners registered for a given event.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| event | string \| symbol | No | The event name. |


**Returns:** Array.\<function()> - The registered listeners.


**Inherits:** [Phaser.Events.EventEmitter#listeners](../class/Phaser.Events.EventEmitter.md#listeners)


> Source: [src/events/EventEmitter.js#L64](https://github.com/phaserjs/phaser/blob/v3.85.2/src/events/EventEmitter.js#L64)  
Since: 3.0.0


---

## off

### \<instance> off(event, [fn], [context], [once])


**Description:**

Remove the listeners of a given event.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| event | string \| symbol | No | The event name. |
| fn | function | Yes | Only remove the listeners that match this function. |
| context | * | Yes | Only remove the listeners that have this context. |
| once | boolean | Yes | Only remove one-time listeners. |


**Returns:** [Phaser.Sound.HTML5AudioSound](../class/Phaser.Sound.HTML5AudioSound.md) - `this`.


**Inherits:** [Phaser.Events.EventEmitter#off](../class/Phaser.Events.EventEmitter.md#off)


> Source: [src/events/EventEmitter.js#L151](https://github.com/phaserjs/phaser/blob/v3.85.2/src/events/EventEmitter.js#L151)  
Since: 3.0.0


---

## on

### \<instance> on(event, fn, [context])


**Description:**

Add a listener for a given event.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| event | string \| symbol | No |  | The event name. |
| fn | function | No |  | The listener function. |
| context | * | Yes | "this" | The context to invoke the listener with. |


**Returns:** [Phaser.Sound.HTML5AudioSound](../class/Phaser.Sound.HTML5AudioSound.md) - `this`.


**Inherits:** [Phaser.Events.EventEmitter#on](../class/Phaser.Events.EventEmitter.md#on)


> Source: [src/events/EventEmitter.js#L98](https://github.com/phaserjs/phaser/blob/v3.85.2/src/events/EventEmitter.js#L98)  
Since: 3.0.0


---

## onBlur

### \<instance> onBlur()


**Description:**

Method used internally by sound manager for pausing sound if
Phaser.Sound.HTML5AudioSoundManager#pauseOnBlur is set to true.


> Source: [src/sound/html5/HTML5AudioSound.js#L406](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/html5/HTML5AudioSound.js#L406)  
Since: 3.0.0


---

## once

### \<instance> once(event, fn, [context])


**Description:**

Add a one-time listener for a given event.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| event | string \| symbol | No |  | The event name. |
| fn | function | No |  | The listener function. |
| context | * | Yes | "this" | The context to invoke the listener with. |


**Returns:** [Phaser.Sound.HTML5AudioSound](../class/Phaser.Sound.HTML5AudioSound.md) - `this`.


**Inherits:** [Phaser.Events.EventEmitter#once](../class/Phaser.Events.EventEmitter.md#once)


> Source: [src/events/EventEmitter.js#L124](https://github.com/phaserjs/phaser/blob/v3.85.2/src/events/EventEmitter.js#L124)  
Since: 3.0.0


---

## onFocus

### \<instance> onFocus()


**Description:**

Method used internally by sound manager for resuming sound if
Phaser.Sound.HTML5AudioSoundManager#pauseOnBlur is set to true.


> Source: [src/sound/html5/HTML5AudioSound.js#L425](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/html5/HTML5AudioSound.js#L425)  
Since: 3.0.0


---

## pause

### \<instance> pause()


**Description:**

Pauses the sound.


**Overrides:** Phaser.Sound.BaseSound#pause


**Returns:** boolean - Whether the sound was paused successfully.


**Fires:** [Phaser.Sound.Events#event:PAUSE](../event/Phaser.Sound.Events.md#PAUSE)


> Source: [src/sound/html5/HTML5AudioSound.js#L135](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/html5/HTML5AudioSound.js#L135)  
Since: 3.0.0


---

## pickAndPlayAudioTag

### \<instance> pickAndPlayAudioTag()


**Description:**

This method is used internally to pick and play the next available audio tag.


**Returns:** boolean - Whether the sound was assigned an audio tag successfully.


> Source: [src/sound/html5/HTML5AudioSound.js#L237](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/html5/HTML5AudioSound.js#L237)  
Since: 3.0.0


---

## pickAudioTag

### \<instance> pickAudioTag()


**Description:**

This method performs the audio tag pooling logic. It first looks for
unused audio tag to assign to this sound object. If there are no unused
audio tags, based on HTML5AudioSoundManager#override property value, it
looks for sound with most advanced playback and hijacks its audio tag or
does nothing.


**Returns:** boolean - Whether the sound was assigned an audio tag successfully.


> Source: [src/sound/html5/HTML5AudioSound.js#L286](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/html5/HTML5AudioSound.js#L286)  
Since: 3.0.0


---

## play

### \<instance> play([markerName], [config])


**Description:**

Play this sound, or a marked section of it.

It always plays the sound from the start. If you want to start playback from a specific time
you can set 'seek' setting of the config object, provided to this call, to that value.

If you want to play the same sound simultaneously, then you need to create another instance
of it and play that Sound. For HTML5 Audio this also requires creating multiple audio instances
when loading the audio files.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| markerName | string \| [Phaser.Types.Sound.SoundConfig](../typedef/Phaser.Types.Sound.md#SoundConfig) | Yes | "''" | If you want to play a marker then provide the marker name here. Alternatively, this parameter can be a SoundConfig object. |
| config | [Phaser.Types.Sound.SoundConfig](../typedef/Phaser.Types.Sound.md#SoundConfig) | Yes |  | Optional sound config object to be applied to this marker or entire sound if no marker name is provided. It gets memorized for future plays of current section of the sound. |


**Overrides:** Phaser.Sound.BaseSound#play


**Returns:** boolean - Whether the sound started playing successfully.


**Fires:** [Phaser.Sound.Events#event:PLAY](../event/Phaser.Sound.Events.md#PLAY)


> Source: [src/sound/html5/HTML5AudioSound.js#L93](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/html5/HTML5AudioSound.js#L93)  
Since: 3.0.0


---

## playCatchPromise

### \<instance> playCatchPromise()


**Description:**

Method used for playing audio tag and catching possible exceptions
thrown from rejected Promise returned from play method call.


> Source: [src/sound/html5/HTML5AudioSound.js#L354](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/html5/HTML5AudioSound.js#L354)  
Since: 3.0.0


---

## removeAllListeners

### \<instance> removeAllListeners([event])


**Description:**

Remove all listeners, or those of the specified event.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| event | string \| symbol | Yes | The event name. |


**Returns:** [Phaser.Sound.HTML5AudioSound](../class/Phaser.Sound.HTML5AudioSound.md) - `this`.


**Inherits:** [Phaser.Events.EventEmitter#removeAllListeners](../class/Phaser.Events.EventEmitter.md#removeAllListeners)


> Source: [src/events/EventEmitter.js#L165](https://github.com/phaserjs/phaser/blob/v3.85.2/src/events/EventEmitter.js#L165)  
Since: 3.0.0


---

## removeListener

### \<instance> removeListener(event, [fn], [context], [once])


**Description:**

Remove the listeners of a given event.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| event | string \| symbol | No | The event name. |
| fn | function | Yes | Only remove the listeners that match this function. |
| context | * | Yes | Only remove the listeners that have this context. |
| once | boolean | Yes | Only remove one-time listeners. |


**Returns:** [Phaser.Sound.HTML5AudioSound](../class/Phaser.Sound.HTML5AudioSound.md) - `this`.


**Inherits:** [Phaser.Events.EventEmitter#removeListener](../class/Phaser.Events.EventEmitter.md#removeListener)


> Source: [src/events/EventEmitter.js#L137](https://github.com/phaserjs/phaser/blob/v3.85.2/src/events/EventEmitter.js#L137)  
Since: 3.0.0


---

## removeMarker

### \<instance> removeMarker(markerName)


**Description:**

Removes a marker from the sound.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| markerName | string | No | The name of the marker to remove. |


**Returns:** [Phaser.Types.Sound.SoundMarker](../typedef/Phaser.Types.Sound.md#SoundMarker) - Removed marker object or 'null' if there was no marker with provided name.


**Inherits:** [Phaser.Sound.BaseSound#removeMarker](../class/Phaser.Sound.BaseSound.md#removeMarker)


> Source: [src/sound/BaseSound.js#L259](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/BaseSound.js#L259)  
Since: 3.0.0


---

## reset

### \<instance> reset()


**Description:**

Method used internally to reset sound state, usually when stopping sound
or when hijacking audio tag from another sound.


> Source: [src/sound/html5/HTML5AudioSound.js#L394](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/html5/HTML5AudioSound.js#L394)  
Since: 3.0.0


---

## resetConfig

### \<instance> resetConfig()


**Description:**

Method used internally for resetting values of some of the config properties.


**Inherits:** [Phaser.Sound.BaseSound#resetConfig](../class/Phaser.Sound.BaseSound.md#resetConfig)


> Source: [src/sound/BaseSound.js#L428](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/BaseSound.js#L428)  
Since: 3.0.0


---

## resume

### \<instance> resume()


**Description:**

Resumes the sound.


**Overrides:** Phaser.Sound.BaseSound#resume


**Returns:** boolean - Whether the sound was resumed successfully.


**Fires:** [Phaser.Sound.Events#event:RESUME](../event/Phaser.Sound.Events.md#RESUME)


> Source: [src/sound/html5/HTML5AudioSound.js#L171](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/html5/HTML5AudioSound.js#L171)  
Since: 3.0.0


---

## setDetune

### \<instance> setDetune(value)


**Description:**

Sets the detune value of this Sound, given in [cents](https://en.wikipedia.org/wiki/Cent_%28music%29).
The range of the value is -1200 to 1200, but we recommend setting it to [50](https://en.wikipedia.org/wiki/50_Cent).

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| value | number | No | The range of the value is -1200 to 1200, but we recommend setting it to [50](https://en.wikipedia.org/wiki/50_Cent). |


**Returns:** [Phaser.Sound.HTML5AudioSound](../class/Phaser.Sound.HTML5AudioSound.md) - This Sound instance.


**Fires:** [Phaser.Sound.Events#event:DETUNE](../event/Phaser.Sound.Events.md#DETUNE)


> Source: [src/sound/html5/HTML5AudioSound.js#L761](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/html5/HTML5AudioSound.js#L761)  
Since: 3.3.0


---

## setLoop

### \<instance> setLoop(value)


**Description:**

Sets the loop state of this Sound.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| value | boolean | No | `true` to loop this sound, `false` to not loop it. |


**Returns:** [Phaser.Sound.HTML5AudioSound](../class/Phaser.Sound.HTML5AudioSound.md) - This Sound instance.


**Fires:** [Phaser.Sound.Events#event:LOOP](../event/Phaser.Sound.Events.md#LOOP)


> Source: [src/sound/html5/HTML5AudioSound.js#L893](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/html5/HTML5AudioSound.js#L893)  
Since: 3.4.0


---

## setMute

### \<instance> setMute(value)


**Description:**

Sets the muted state of this Sound.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| value | boolean | No | `true` to mute this sound, `false` to unmute it. |


**Returns:** [Phaser.Sound.HTML5AudioSound](../class/Phaser.Sound.HTML5AudioSound.md) - This Sound instance.


**Fires:** [Phaser.Sound.Events#event:MUTE](../event/Phaser.Sound.Events.md#MUTE)


> Source: [src/sound/html5/HTML5AudioSound.js#L602](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/html5/HTML5AudioSound.js#L602)  
Since: 3.4.0


---

## setPan

### \<instance> setPan(value)


**Description:**

Sets the pan of this sound, a value between -1 (full left pan) and 1 (full right pan).

Has no audible effect on HTML5 Audio Sound, but still generates the PAN Event.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| value | number | No | The pan of the sound. A value between -1 (full left pan) and 1 (full right pan). |


**Returns:** [Phaser.Sound.HTML5AudioSound](../class/Phaser.Sound.HTML5AudioSound.md) - This Sound instance.


**Fires:** [Phaser.Sound.Events#event:PAN](../event/Phaser.Sound.Events.md#PAN)


> Source: [src/sound/html5/HTML5AudioSound.js#L937](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/html5/HTML5AudioSound.js#L937)  
Since: 3.50.0


---

## setRate

### \<instance> setRate(value)


**Description:**

Sets the playback rate of this Sound.

For example, a value of 1.0 plays the audio at full speed, 0.5 plays the audio at half speed
and 2.0 doubles the audios playback speed.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| value | number | No | The playback rate at of this Sound. |


**Returns:** [Phaser.Sound.HTML5AudioSound](../class/Phaser.Sound.HTML5AudioSound.md) - This Sound instance.


**Fires:** [Phaser.Sound.Events#event:RATE](../event/Phaser.Sound.Events.md#RATE)


> Source: [src/sound/html5/HTML5AudioSound.js#L705](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/html5/HTML5AudioSound.js#L705)  
Since: 3.3.0


---

## setSeek

### \<instance> setSeek(value)


**Description:**

Seeks to a specific point in this sound.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| value | number | No | The point in the sound to seek to. |


**Returns:** [Phaser.Sound.HTML5AudioSound](../class/Phaser.Sound.HTML5AudioSound.md) - This Sound instance.


**Fires:** [Phaser.Sound.Events#event:SEEK](../event/Phaser.Sound.Events.md#SEEK)


> Source: [src/sound/html5/HTML5AudioSound.js#L840](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/html5/HTML5AudioSound.js#L840)  
Since: 3.4.0


---

## setVolume

### \<instance> setVolume(value)


**Description:**

Sets the volume of this Sound.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| value | number | No | The volume of the sound. |


**Returns:** [Phaser.Sound.HTML5AudioSound](../class/Phaser.Sound.HTML5AudioSound.md) - This Sound instance.


**Fires:** [Phaser.Sound.Events#event:VOLUME](../event/Phaser.Sound.Events.md#VOLUME)


> Source: [src/sound/html5/HTML5AudioSound.js#L651](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/html5/HTML5AudioSound.js#L651)  
Since: 3.4.0


---

## shutdown

### \<instance> shutdown()


**Description:**

Removes all listeners.


**Inherits:** [Phaser.Events.EventEmitter#shutdown](../class/Phaser.Events.EventEmitter.md#shutdown)


> Source: [src/events/EventEmitter.js#L31](https://github.com/phaserjs/phaser/blob/v3.85.2/src/events/EventEmitter.js#L31)  
Since: 3.0.0


---

## stop

### \<instance> stop()


**Description:**

Stop playing this sound.


**Overrides:** Phaser.Sound.BaseSound#stop


**Returns:** boolean - Whether the sound was stopped successfully.


**Fires:** [Phaser.Sound.Events#event:STOP](../event/Phaser.Sound.Events.md#STOP)


> Source: [src/sound/html5/HTML5AudioSound.js#L208](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/html5/HTML5AudioSound.js#L208)  
Since: 3.0.0


---

## stopAndReleaseAudioTag

### \<instance> stopAndReleaseAudioTag()


**Description:**

This method is used internally to stop and release the current audio tag.


> Source: [src/sound/html5/HTML5AudioSound.js#L375](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/html5/HTML5AudioSound.js#L375)  
Since: 3.0.0


---

## update

### \<instance> update(time)


**Description:**

Update method called automatically by sound manager on every game step.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| time | number | No | The current timestamp as generated by the Request Animation Frame or SetTimeout. |


**Overrides:** Phaser.Sound.BaseSound#update


**Fires:** [Phaser.Sound.Events#event:COMPLETE](../event/Phaser.Sound.Events.md#COMPLETE), [Phaser.Sound.Events#event:LOOPED](../event/Phaser.Sound.Events.md#LOOPED)


> Source: [src/sound/html5/HTML5AudioSound.js#L439](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/html5/HTML5AudioSound.js#L439)  
Since: 3.0.0


---

## updateMarker

### \<instance> updateMarker(marker)


**Description:**

Updates previously added marker.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| marker | [Phaser.Types.Sound.SoundMarker](../typedef/Phaser.Types.Sound.md#SoundMarker) | No | Marker object with updated values. |


**Returns:** boolean - Whether the marker was updated successfully.


**Inherits:** [Phaser.Sound.BaseSound#updateMarker](../class/Phaser.Sound.BaseSound.md#updateMarker)


> Source: [src/sound/BaseSound.js#L229](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/BaseSound.js#L229)  
Since: 3.0.0


---

## updateMute

### \<instance> updateMute()


**Description:**

This method is used internally to update the mute setting of this sound.


> Source: [src/sound/html5/HTML5AudioSound.js#L526](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/html5/HTML5AudioSound.js#L526)  
Since: 3.0.0


---

## updateVolume

### \<instance> updateVolume()


**Description:**

This method is used internally to update the volume of this sound.


> Source: [src/sound/html5/HTML5AudioSound.js#L540](https://github.com/phaserjs/phaser/blob/v3.85.2/src/sound/html5/HTML5AudioSound.js#L540)  
Since: 3.0.0


---

