---
visibility: public
slug: structs-processqueue
title: ProcessQueue
description: Phaser.Structs.ProcessQueue
seoTitle: Phaser.Structs.ProcessQueue
seoDescription: Phaser v3.87.0 Documentation for Phaser.Structs.ProcessQueue
ogImage: 
---


A Process Queue maintains three internal lists.



The `pending` list is a selection of items which are due to be made 'active' in the next update.

The `active` list is a selection of items which are considered active and should be updated.

The `destroy` list is a selection of items that were active and are awaiting being destroyed in the next update.



When new items are added to a Process Queue they are put in the pending list, rather than being added

immediately the active list. Equally, items that are removed are put into the destroy list, rather than

being destroyed immediately. This allows the Process Queue to carefully process each item at a specific, fixed

time, rather than at the time of the request from the API.


**Scope**: static


**Extends**

> [Phaser.Events.EventEmitter](../class/Phaser.Events.EventEmitter.md)  



> Source: [src/structs/ProcessQueue.js#L11](https://github.com/phaserjs/phaser/blob/v3.87.0/src/structs/ProcessQueue.js#L11)  
Since: 3.0.0

# Public Members

## checkQueue

### checkQueue: boolean


**Description:**

If `true` only unique objects will be allowed in the queue.


> Source: [src/structs/ProcessQueue.js#L92](https://github.com/phaserjs/phaser/blob/v3.87.0/src/structs/ProcessQueue.js#L92)  
Since: 3.50.0


---

## length

### length: number


**Description:**

The number of entries in the active list.


> Source: [src/structs/ProcessQueue.js#L343](https://github.com/phaserjs/phaser/blob/v3.87.0/src/structs/ProcessQueue.js#L343)  
Since: 3.20.0


---

# Private Members

## _active

### _active: Array.\<*>


**Description:**

The `active` list is a selection of items which are considered active and should be updated.

**Tags:**

 - genericUse


**Access:** private


> Source: [src/structs/ProcessQueue.js#L55](https://github.com/phaserjs/phaser/blob/v3.87.0/src/structs/ProcessQueue.js#L55)  
Since: 3.0.0


---

## _destroy

### _destroy: Array.\<*>


**Description:**

The `destroy` list is a selection of items that were active and are awaiting being destroyed in the next update.

**Tags:**

 - genericUse


**Access:** private


> Source: [src/structs/ProcessQueue.js#L68](https://github.com/phaserjs/phaser/blob/v3.87.0/src/structs/ProcessQueue.js#L68)  
Since: 3.0.0


---

## _pending

### _pending: Array.\<*>


**Description:**

The `pending` list is a selection of items which are due to be made 'active' in the next update.

**Tags:**

 - genericUse


**Access:** private


> Source: [src/structs/ProcessQueue.js#L42](https://github.com/phaserjs/phaser/blob/v3.87.0/src/structs/ProcessQueue.js#L42)  
Since: 3.0.0


---

## _toProcess

### _toProcess: number


**Description:**

The total number of items awaiting processing.


**Access:** private


> Source: [src/structs/ProcessQueue.js#L81](https://github.com/phaserjs/phaser/blob/v3.87.0/src/structs/ProcessQueue.js#L81)  
Since: 3.0.0


---

# Public Methods

## add

### \<instance> add(item)


**Description:**

Adds a new item to the Process Queue.



The item is added to the pending list and made active in the next update.

**Tags:**

 - genericUse
 - genericUse

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| item | * | No | The item to add to the queue. |


**Returns:** * - The item that was added.


> Source: [src/structs/ProcessQueue.js#L156](https://github.com/phaserjs/phaser/blob/v3.87.0/src/structs/ProcessQueue.js#L156)  
Since: 3.0.0


---

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


**Returns:** [Phaser.Structs.ProcessQueue](../class/Phaser.Structs.ProcessQueue.md) - `this`.


**Inherits:** [Phaser.Events.EventEmitter#addListener](../class/Phaser.Events.EventEmitter.md#addListener)


> Source: [src/events/EventEmitter.js#L111](https://github.com/phaserjs/phaser/blob/v3.87.0/src/events/EventEmitter.js#L111)  
Since: 3.0.0


---

## destroy

### \<instance> destroy()


**Description:**

Immediately destroys this process queue, clearing all of its internal arrays and resetting the process totals.


**Overrides:** Phaser.Events.EventEmitter#destroy


> Source: [src/structs/ProcessQueue.js#L360](https://github.com/phaserjs/phaser/blob/v3.87.0/src/structs/ProcessQueue.js#L360)  
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


> Source: [src/events/EventEmitter.js#L86](https://github.com/phaserjs/phaser/blob/v3.87.0/src/events/EventEmitter.js#L86)  
Since: 3.0.0


---

## eventNames

### \<instance> eventNames()


**Description:**

Return an array listing the events for which the emitter has registered listeners.


**Returns:** Array.\<(string | symbol)> - undefined


**Inherits:** [Phaser.Events.EventEmitter#eventNames](../class/Phaser.Events.EventEmitter.md#eventNames)


> Source: [src/events/EventEmitter.js#L55](https://github.com/phaserjs/phaser/blob/v3.87.0/src/events/EventEmitter.js#L55)  
Since: 3.0.0


---

## getActive

### \<instance> getActive()


**Description:**

Returns the current list of active items.



This method returns a reference to the active list array, not a copy of it.

Therefore, be careful to not modify this array outside of the ProcessQueue.

**Tags:**

 - genericUse


**Returns:** Array.\<*> - A list of active items.


> Source: [src/structs/ProcessQueue.js#L325](https://github.com/phaserjs/phaser/blob/v3.87.0/src/structs/ProcessQueue.js#L325)  
Since: 3.0.0


---

## isActive

### \<instance> isActive(item)


**Description:**

Checks the given item to see if it is already active within this Process Queue.

**Tags:**

 - genericUse
 - genericUse

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| item | * | No | The item to check. |


**Returns:** boolean - `true` if the item is active, otherwise `false`.


> Source: [src/structs/ProcessQueue.js#L102](https://github.com/phaserjs/phaser/blob/v3.87.0/src/structs/ProcessQueue.js#L102)  
Since: 3.60.0


---

## isDestroying

### \<instance> isDestroying(item)


**Description:**

Checks the given item to see if it is already pending destruction from this Process Queue.

**Tags:**

 - genericUse
 - genericUse

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| item | * | No | The item to check. |


**Returns:** boolean - `true` if the item is pending destruction, otherwise `false`.


> Source: [src/structs/ProcessQueue.js#L138](https://github.com/phaserjs/phaser/blob/v3.87.0/src/structs/ProcessQueue.js#L138)  
Since: 3.60.0


---

## isPending

### \<instance> isPending(item)


**Description:**

Checks the given item to see if it is already pending addition to this Process Queue.

**Tags:**

 - genericUse
 - genericUse

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| item | * | No | The item to check. |


**Returns:** boolean - `true` if the item is pending insertion, otherwise `false`.


> Source: [src/structs/ProcessQueue.js#L120](https://github.com/phaserjs/phaser/blob/v3.87.0/src/structs/ProcessQueue.js#L120)  
Since: 3.60.0


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


> Source: [src/events/EventEmitter.js#L75](https://github.com/phaserjs/phaser/blob/v3.87.0/src/events/EventEmitter.js#L75)  
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


> Source: [src/events/EventEmitter.js#L64](https://github.com/phaserjs/phaser/blob/v3.87.0/src/events/EventEmitter.js#L64)  
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


**Returns:** [Phaser.Structs.ProcessQueue](../class/Phaser.Structs.ProcessQueue.md) - `this`.


**Inherits:** [Phaser.Events.EventEmitter#off](../class/Phaser.Events.EventEmitter.md#off)


> Source: [src/events/EventEmitter.js#L151](https://github.com/phaserjs/phaser/blob/v3.87.0/src/events/EventEmitter.js#L151)  
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


**Returns:** [Phaser.Structs.ProcessQueue](../class/Phaser.Structs.ProcessQueue.md) - `this`.


**Inherits:** [Phaser.Events.EventEmitter#on](../class/Phaser.Events.EventEmitter.md#on)


> Source: [src/events/EventEmitter.js#L98](https://github.com/phaserjs/phaser/blob/v3.87.0/src/events/EventEmitter.js#L98)  
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


**Returns:** [Phaser.Structs.ProcessQueue](../class/Phaser.Structs.ProcessQueue.md) - `this`.


**Inherits:** [Phaser.Events.EventEmitter#once](../class/Phaser.Events.EventEmitter.md#once)


> Source: [src/events/EventEmitter.js#L124](https://github.com/phaserjs/phaser/blob/v3.87.0/src/events/EventEmitter.js#L124)  
Since: 3.0.0


---

## remove

### \<instance> remove(item)


**Description:**

Removes an item from the Process Queue.



The item is added to the 'destroy' list and is fully removed in the next update.

**Tags:**

 - genericUse
 - genericUse

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| item | * | No | The item to be removed from the queue. |


**Returns:** * - The item that was removed.


> Source: [src/structs/ProcessQueue.js#L186](https://github.com/phaserjs/phaser/blob/v3.87.0/src/structs/ProcessQueue.js#L186)  
Since: 3.0.0


---

## removeAll

### \<instance> removeAll()


**Description:**

Removes all active items from this Process Queue.



All the items are marked as 'pending destroy' and fully removed in the next update.


**Returns:** [Phaser.Structs.ProcessQueue](../class/Phaser.Structs.ProcessQueue.md) - This Process Queue object.


> Source: [src/structs/ProcessQueue.js#L230](https://github.com/phaserjs/phaser/blob/v3.87.0/src/structs/ProcessQueue.js#L230)  
Since: 3.20.0


---

## removeAllListeners

### \<instance> removeAllListeners([event])


**Description:**

Remove all listeners, or those of the specified event.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| event | string \| symbol | Yes | The event name. |


**Returns:** [Phaser.Structs.ProcessQueue](../class/Phaser.Structs.ProcessQueue.md) - `this`.


**Inherits:** [Phaser.Events.EventEmitter#removeAllListeners](../class/Phaser.Events.EventEmitter.md#removeAllListeners)


> Source: [src/events/EventEmitter.js#L165](https://github.com/phaserjs/phaser/blob/v3.87.0/src/events/EventEmitter.js#L165)  
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


**Returns:** [Phaser.Structs.ProcessQueue](../class/Phaser.Structs.ProcessQueue.md) - `this`.


**Inherits:** [Phaser.Events.EventEmitter#removeListener](../class/Phaser.Events.EventEmitter.md#removeListener)


> Source: [src/events/EventEmitter.js#L137](https://github.com/phaserjs/phaser/blob/v3.87.0/src/events/EventEmitter.js#L137)  
Since: 3.0.0


---

## shutdown

### \<instance> shutdown()


**Description:**

Removes all listeners.


**Inherits:** [Phaser.Events.EventEmitter#shutdown](../class/Phaser.Events.EventEmitter.md#shutdown)


> Source: [src/events/EventEmitter.js#L31](https://github.com/phaserjs/phaser/blob/v3.87.0/src/events/EventEmitter.js#L31)  
Since: 3.0.0


---

## update

### \<instance> update()


**Description:**

Update this queue. First it will process any items awaiting destruction, and remove them.



Then it will check to see if there are any items pending insertion, and move them to an

active state. Finally, it will return a list of active items for further processing.

**Tags:**

 - genericUse


**Returns:** Array.\<*> - A list of active items.


> Source: [src/structs/ProcessQueue.js#L256](https://github.com/phaserjs/phaser/blob/v3.87.0/src/structs/ProcessQueue.js#L256)  
Since: 3.0.0


---

