---
visibility: public
slug: namespace/time-events
title: Phaser.Time.Events

seoTitle: Phaser.Time.Events
seoDescription: Phaser v3.87.0 Documentation for 
ogImage: 
---




Scope: 
static
> Source: [src/time/events/index.js#L7](https://github.com/phaserjs/phaser/blob/v3.87.0/src/time/events/index.js#L7)  


# Static functions

## COMPLETE

### COMPLETE


**Description:**

The Timeline Complete Event.



This event is dispatched by timeline when all timeline events complete.



Listen to it from a Timeline instance using `Timeline.on('complete', listener)`, i.e.:



```javascript

const timeline = this.add.timeline();

timeline.on('complete', listener);

timeline.play();

```

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| timeline | [Phaser.Time.Timeline](../class/Phaser.Time.Timeline.md) | No | A reference to the Timeline that emitted the event. |


> Source: [src/time/events/COMPLETE_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.87.0/src/time/events/COMPLETE_EVENT.js#L7)  
Since: 3.70.0


---

