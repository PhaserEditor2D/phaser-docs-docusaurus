---
visibility: public
slug: function/sound
title: Phaser.Sound

seoTitle: Phaser.Sound
seoDescription: Phaser v3.87.0 Documentation for Phaser.Sound
ogImage: 
---

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


> Source: [src/sound/SoundManagerCreator.js#L12](https://github.com/phaserjs/phaser/blob/v3.87.0/src/sound/SoundManagerCreator.js#L12)  
Since: 3.0.0

