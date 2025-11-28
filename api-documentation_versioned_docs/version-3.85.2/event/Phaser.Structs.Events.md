---
visibility: public
slug: structs-events
title: Structs.Events
description: Phaser.Structs.Events
seoTitle: Structs.Events
seoDescription: Phaser v3.85.2 Documentation for Phaser.Structs.Events
ogImage: 
---

## PROCESS_QUEUE_ADD


**Description:** The Process Queue Add Event.

This event is dispatched by a Process Queue when a new item is successfully moved to its active list.

You will most commonly see this used by a Scene's Update List when a new Game Object has been added.

In that instance, listen to this event from within a Scene using: `this.sys.updateList.on('add', listener)`.

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| item | * | No | The item that was added to the Process Queue. |

**Member of:** [Phaser.Structs.Events](../namespace/Phaser.Structs.Events.md)
> Source: [src/structs/events/PROCESS_QUEUE_ADD_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/structs/events/PROCESS_QUEUE_ADD_EVENT.js#L7)  
Since: 3.20.0

## PROCESS_QUEUE_REMOVE


**Description:** The Process Queue Remove Event.

This event is dispatched by a Process Queue when a new item is successfully removed from its active list.

You will most commonly see this used by a Scene's Update List when a Game Object has been removed.

In that instance, listen to this event from within a Scene using: `this.sys.updateList.on('remove', listener)`.

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| item | * | No | The item that was removed from the Process Queue. |

**Member of:** [Phaser.Structs.Events](../namespace/Phaser.Structs.Events.md)
> Source: [src/structs/events/PROCESS_QUEUE_REMOVE_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/structs/events/PROCESS_QUEUE_REMOVE_EVENT.js#L7)  
Since: 3.20.0
