---
visibility: public
slug: namespace/textures-events
title: Phaser.Textures.Events

seoTitle: Phaser.Textures.Events
seoDescription: Phaser v3.85.2 Documentation for 
ogImage: 
---




Scope: 
static
> Source: [src/textures/events/index.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/textures/events/index.js#L7)  


# Static functions

## ADD

### ADD


**Description:**

The Texture Add Event.

This event is dispatched by the Texture Manager when a texture is added to it.

Listen to this event from within a Scene using: `this.textures.on('addtexture', listener)`.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| key | string | No | The key of the Texture that was added to the Texture Manager. |
| texture | [Phaser.Textures.Texture](../class/Phaser.Textures.Texture.md) | No | A reference to the Texture that was added to the Texture Manager. |


> Source: [src/textures/events/ADD_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/textures/events/ADD_EVENT.js#L7)  
Since: 3.0.0


---

## ADD_KEY

### ADD_KEY


**Description:**

The Texture Add Key Event.

This event is dispatched by the Texture Manager when a texture with the given key is added to it.

Listen to this event from within a Scene using: `this.textures.on('addtexture-key', listener)`.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| texture | [Phaser.Textures.Texture](../class/Phaser.Textures.Texture.md) | No | A reference to the Texture that was added to the Texture Manager. |


> Source: [src/textures/events/ADD_KEY_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/textures/events/ADD_KEY_EVENT.js#L7)  
Since: 3.60.0


---

## ERROR

### ERROR


**Description:**

The Texture Load Error Event.

This event is dispatched by the Texture Manager when a texture it requested to load failed.
This only happens when base64 encoded textures fail. All other texture types are loaded via the Loader Plugin.

Listen to this event from within a Scene using: `this.textures.on('onerror', listener)`.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| key | string | No | The key of the Texture that failed to load into the Texture Manager. |


> Source: [src/textures/events/ERROR_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/textures/events/ERROR_EVENT.js#L7)  
Since: 3.0.0


---

## LOAD

### LOAD


**Description:**

The Texture Load Event.

This event is dispatched by the Texture Manager when a texture has finished loading on it.
This only happens for base64 encoded textures. All other texture types are loaded via the Loader Plugin.

Listen to this event from within a Scene using: `this.textures.on('onload', listener)`.

This event is dispatched after the [``ADD``](Phaser.Textures.Events#event:ADD) event.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| key | string | No | The key of the Texture that was loaded by the Texture Manager. |
| texture | [Phaser.Textures.Texture](../class/Phaser.Textures.Texture.md) | No | A reference to the Texture that was loaded by the Texture Manager. |


> Source: [src/textures/events/LOAD_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/textures/events/LOAD_EVENT.js#L7)  
Since: 3.0.0


---

## READY

### READY


**Description:**

This internal event signifies that the Texture Manager is now ready and the Game can continue booting.

When a Phaser Game instance is booting for the first time, the Texture Manager has to wait on a couple of non-blocking
async events before it's fully ready to carry on. When those complete the Texture Manager emits this event via the Game
instance, which tells the Game to carry on booting.


> Source: [src/textures/events/READY_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/textures/events/READY_EVENT.js#L7)  
Since: 3.16.1


---

## REMOVE

### REMOVE


**Description:**

The Texture Remove Event.

This event is dispatched by the Texture Manager when a texture is removed from it.

Listen to this event from within a Scene using: `this.textures.on('removetexture', listener)`.

If you have any Game Objects still using the removed texture, they will start throwing
errors the next time they try to render. Be sure to clear all use of the texture in this event handler.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| key | string | No | The key of the Texture that was removed from the Texture Manager. |


> Source: [src/textures/events/REMOVE_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/textures/events/REMOVE_EVENT.js#L7)  
Since: 3.0.0


---

## REMOVE_KEY

### REMOVE_KEY


**Description:**

The Texture Remove Key Event.

This event is dispatched by the Texture Manager when a texture with the given key is removed from it.

Listen to this event from within a Scene using: `this.textures.on('removetexture-key', listener)`.

If you have any Game Objects still using the removed texture, they will start throwing
errors the next time they try to render. Be sure to clear all use of the texture in this event handler.


> Source: [src/textures/events/REMOVE_KEY_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/textures/events/REMOVE_KEY_EVENT.js#L7)  
Since: 3.60.0


---

