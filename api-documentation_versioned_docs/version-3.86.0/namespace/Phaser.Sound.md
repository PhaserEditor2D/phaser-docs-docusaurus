---
visibility: public
slug: sound
title: Phaser.Sound

seoTitle: Phaser.Sound
seoDescription: Phaser v3.86.0 Documentation for 
ogImage: 
---




Scope: 
static
> Source: [src/sound/index.js#L8](https://github.com/phaserjs/phaser/blob/v3.86.0/src/sound/index.js#L8)  


# Static functions

- [BaseSound](../class/sound-basesound)
- [BaseSoundManager](../class/sound-basesoundmanager)
- [HTML5AudioSound](../class/sound-html5audiosound)
- [HTML5AudioSoundManager](../class/sound-html5audiosoundmanager)
- [NoAudioSound](../class/sound-noaudiosound)
- [NoAudioSoundManager](../class/sound-noaudiosoundmanager)
- [WebAudioSound](../class/sound-webaudiosound)
- [WebAudioSoundManager](../class/sound-webaudiosoundmanager)
# Static functions

- [Events](../namespace/sound-events)
# Static functions

## SoundManagerCreator

### \<static> SoundManagerCreator(game)


**Description:**

Creates a Web Audio, HTML5 Audio or No Audio Sound Manager based on config and device settings.



Be aware of [https://developers.google.com/web/updates/2017/09/autoplay-policy-changes](https://developers.google.com/web/updates/2017/09/autoplay-policy-changes)

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| game | [Phaser.Game](../class/Phaser.Game.md) | No | Reference to the current game instance. |


**Returns:** [Phaser.Sound.HTML5AudioSoundManager](../class/Phaser.Sound.HTML5AudioSoundManager.md), [Phaser.Sound.WebAudioSoundManager](../class/Phaser.Sound.WebAudioSoundManager.md), [Phaser.Sound.NoAudioSoundManager](../class/Phaser.Sound.NoAudioSoundManager.md) - The Sound Manager instance that was created.


> Source: [src/sound/SoundManagerCreator.js#L12](https://github.com/phaserjs/phaser/blob/v3.86.0/src/sound/SoundManagerCreator.js#L12)  
Since: 3.0.0


---

