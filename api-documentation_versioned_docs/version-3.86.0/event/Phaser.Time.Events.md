---
visibility: public
slug: event/time-events
title: Time.Events
description: Phaser.Time.Events
seoTitle: Time.Events
seoDescription: Phaser v3.86.0 Documentation for Phaser.Time.Events
ogImage: 
---

## COMPLETE


**Description:** The Timeline Complete Event.



This event is dispatched by timeline when all timeline events complete.



Listen to it from a Timeline instance using `Timeline.on('complete', listener)`, i.e.:



```javascript

const timeline = this.add.timeline();

timeline.on('complete', listener);

timeline.play();

```

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| timeline | [Phaser.Time.Timeline](../class/Phaser.Time.Timeline.md) | No | A reference to the Timeline that emitted the event. |

**Member of:** [Phaser.Time.Events](../namespace/Phaser.Time.Events.md)
> Source: [src/time/events/COMPLETE_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.86.0/src/time/events/COMPLETE_EVENT.js#L7)  
Since: 3.70.0
