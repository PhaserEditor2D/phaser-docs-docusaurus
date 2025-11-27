---
visibility: public
slug: event/cache-events
title: Cache.Events
description: Phaser.Cache.Events
seoTitle: Cache.Events
seoDescription: Phaser v3.85.2 Documentation for Phaser.Cache.Events
ogImage: 
---

## ADD


**Description:** The Cache Add Event.

This event is dispatched by any Cache that extends the BaseCache each time a new object is added to it.

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| cache | [Phaser.Cache.BaseCache](../class/Phaser.Cache.BaseCache.md) | No | The cache to which the object was added. |
| key | string | No | The key of the object added to the cache. |
| object | * | No | A reference to the object that was added to the cache. |

**Member of:** [Phaser.Cache.Events](../namespace/Phaser.Cache.Events.md)
> Source: [src/cache/events/ADD_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/cache/events/ADD_EVENT.js#L7)  
Since: 3.0.0

## REMOVE


**Description:** The Cache Remove Event.

This event is dispatched by any Cache that extends the BaseCache each time an object is removed from it.

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| cache | [Phaser.Cache.BaseCache](../class/Phaser.Cache.BaseCache.md) | No | The cache from which the object was removed. |
| key | string | No | The key of the object removed from the cache. |
| object | * | No | A reference to the object that was removed from the cache. |

**Member of:** [Phaser.Cache.Events](../namespace/Phaser.Cache.Events.md)
> Source: [src/cache/events/REMOVE_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/cache/events/REMOVE_EVENT.js#L7)  
Since: 3.0.0
