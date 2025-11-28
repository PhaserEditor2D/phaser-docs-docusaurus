---
visibility: public
slug: cache-cachemanager
title: CacheManager
description: Phaser.Cache.CacheManager
seoTitle: Phaser.Cache.CacheManager
seoDescription: Phaser v3.87.0 Documentation for Phaser.Cache.CacheManager
ogImage: 
---


The Cache Manager is the global cache owned and maintained by the Game instance.



Various systems, such as the file Loader, rely on this cache in order to store the files

it has loaded. The manager itself doesn't store any files, but instead owns multiple BaseCache

instances, one per type of file. You can also add your own custom caches.

**Constructor**

`new CacheManager(game)`

**Parameters**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| game | [Phaser.Game](../class/Phaser.Game.md) | No | A reference to the Phaser.Game instance that owns this CacheManager. |

---


**Scope**: static

> Source: [src/cache/CacheManager.js#L11](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cache/CacheManager.js#L11)  
Since: 3.0.0

# Public Members

## audio

### audio: [Phaser.Cache.BaseCache](../class/Phaser.Cache.BaseCache.md)


**Description:**

A Cache storing all non-streaming audio files, typically added via the Loader.


> Source: [src/cache/CacheManager.js#L88](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cache/CacheManager.js#L88)  
Since: 3.0.0


---

## binary

### binary: [Phaser.Cache.BaseCache](../class/Phaser.Cache.BaseCache.md)


**Description:**

A Cache storing all binary files, typically added via the Loader.


> Source: [src/cache/CacheManager.js#L42](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cache/CacheManager.js#L42)  
Since: 3.0.0


---

## bitmapFont

### bitmapFont: [Phaser.Cache.BaseCache](../class/Phaser.Cache.BaseCache.md)


**Description:**

A Cache storing all bitmap font data files, typically added via the Loader.

Only the font data is stored in this cache, the textures are part of the Texture Manager.


> Source: [src/cache/CacheManager.js#L51](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cache/CacheManager.js#L51)  
Since: 3.0.0


---

## custom

### custom: Object.\<[Phaser.Cache.BaseCache](../class/Phaser.Cache.BaseCache.md)>


**Description:**

An object that contains your own custom BaseCache entries.

Add to this via the `addCustom` method.


> Source: [src/cache/CacheManager.js#L152](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cache/CacheManager.js#L152)  
Since: 3.0.0


---

## game

### game: [Phaser.Game](../class/Phaser.Game.md)


**Description:**

A reference to the Phaser.Game instance that owns this CacheManager.


**Access:** protected


> Source: [src/cache/CacheManager.js#L32](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cache/CacheManager.js#L32)  
Since: 3.0.0


---

## html

### html: [Phaser.Cache.BaseCache](../class/Phaser.Cache.BaseCache.md)


**Description:**

A Cache storing all html files, typically added via the Loader.


> Source: [src/cache/CacheManager.js#L115](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cache/CacheManager.js#L115)  
Since: 3.12.0


---

## json

### json: [Phaser.Cache.BaseCache](../class/Phaser.Cache.BaseCache.md)


**Description:**

A Cache storing all JSON data files, typically added via the Loader.


> Source: [src/cache/CacheManager.js#L61](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cache/CacheManager.js#L61)  
Since: 3.0.0


---

## obj

### obj: [Phaser.Cache.BaseCache](../class/Phaser.Cache.BaseCache.md)


**Description:**

A Cache storing all WaveFront OBJ files, typically added via the Loader.


> Source: [src/cache/CacheManager.js#L124](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cache/CacheManager.js#L124)  
Since: 3.0.0


---

## physics

### physics: [Phaser.Cache.BaseCache](../class/Phaser.Cache.BaseCache.md)


**Description:**

A Cache storing all physics data files, typically added via the Loader.


> Source: [src/cache/CacheManager.js#L70](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cache/CacheManager.js#L70)  
Since: 3.0.0


---

## shader

### shader: [Phaser.Cache.BaseCache](../class/Phaser.Cache.BaseCache.md)


**Description:**

A Cache storing all shader source files, typically added via the Loader.


> Source: [src/cache/CacheManager.js#L79](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cache/CacheManager.js#L79)  
Since: 3.0.0


---

## text

### text: [Phaser.Cache.BaseCache](../class/Phaser.Cache.BaseCache.md)


**Description:**

A Cache storing all text files, typically added via the Loader.


> Source: [src/cache/CacheManager.js#L106](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cache/CacheManager.js#L106)  
Since: 3.0.0


---

## tilemap

### tilemap: [Phaser.Cache.BaseCache](../class/Phaser.Cache.BaseCache.md)


**Description:**

A Cache storing all tilemap data files, typically added via the Loader.

Only the data is stored in this cache, the textures are part of the Texture Manager.


> Source: [src/cache/CacheManager.js#L133](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cache/CacheManager.js#L133)  
Since: 3.0.0


---

## video

### video: [Phaser.Cache.BaseCache](../class/Phaser.Cache.BaseCache.md)


**Description:**

A Cache storing all non-streaming video files, typically added via the Loader.


> Source: [src/cache/CacheManager.js#L97](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cache/CacheManager.js#L97)  
Since: 3.20.0


---

## xml

### xml: [Phaser.Cache.BaseCache](../class/Phaser.Cache.BaseCache.md)


**Description:**

A Cache storing all xml data files, typically added via the Loader.


> Source: [src/cache/CacheManager.js#L143](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cache/CacheManager.js#L143)  
Since: 3.0.0


---

# Public Methods

## addCustom

### \<instance> addCustom(key)


**Description:**

Add your own custom Cache for storing your own files.

The cache will be available under `Cache.custom.key`.

The cache will only be created if the key is not already in use.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| key | string | No | The unique key of your custom cache. |


**Returns:** [Phaser.Cache.BaseCache](../class/Phaser.Cache.BaseCache.md) - A reference to the BaseCache that was created. If the key was already in use, a reference to the existing cache is returned instead.


> Source: [src/cache/CacheManager.js#L165](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cache/CacheManager.js#L165)  
Since: 3.0.0


---

## destroy

### \<instance> destroy()


**Description:**

Removes all entries from all BaseCaches and destroys all custom caches.


> Source: [src/cache/CacheManager.js#L187](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cache/CacheManager.js#L187)  
Since: 3.0.0


---

