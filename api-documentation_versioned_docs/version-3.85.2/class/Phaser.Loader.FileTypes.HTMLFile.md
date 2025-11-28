---
visibility: public
slug: loader-filetypes-htmlfile
title: HTMLFile
description: Phaser.Loader.FileTypes.HTMLFile
seoTitle: Phaser.Loader.FileTypes.HTMLFile
seoDescription: Phaser v3.85.2 Documentation for Phaser.Loader.FileTypes.HTMLFile
ogImage: 
---


A single HTML File suitable for loading by the Loader.

These are created when you use the Phaser.Loader.LoaderPlugin#html method and are not typically created directly.

For documentation about what all the arguments and configuration options mean please see Phaser.Loader.LoaderPlugin#html.

**Constructor**

`new HTMLFile(loader, key, [url], [xhrSettings])`

**Parameters**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| loader | [Phaser.Loader.LoaderPlugin](../class/Phaser.Loader.LoaderPlugin.md) | No | A reference to the Loader that is responsible for this file. |
| key | string \| [Phaser.Types.Loader.FileTypes.HTMLFileConfig](../typedef/Phaser.Types.Loader.FileTypes.md#HTMLFileConfig) | No | The key to use for this file, or a file configuration object. |
| url | string | Yes | The absolute or relative URL to load this file from. If undefined or `null` it will be set to `<key>.html`, i.e. if `key` was "alien" then the URL will be "alien.html". |
| xhrSettings | [Phaser.Types.Loader.XHRSettingsObject](../typedef/Phaser.Types.Loader.md#XHRSettingsObject) | Yes | Extra XHR Settings specifically for this file. |

---


**Scope**: static


**Extends**

> [Phaser.Loader.File](../class/Phaser.Loader.File.md)  



> Source: [src/loader/filetypes/HTMLFile.js#L14](https://github.com/phaserjs/phaser/blob/v3.85.2/src/loader/filetypes/HTMLFile.js#L14)  
Since: 3.12.0

# Public Methods

## addToCache

### \<instance> addToCache()


**Description:**

Adds this file to its target cache upon successful loading and processing.
This method is often overridden by specific file types.


**Inherits:** [Phaser.Loader.File#addToCache](../class/Phaser.Loader.File.md#addToCache)


> Source: [src/loader/File.js#L502](https://github.com/phaserjs/phaser/blob/v3.85.2/src/loader/File.js#L502)  
Since: 3.7.0


---

## destroy

### \<instance> destroy()


**Description:**

Destroy this File and any references it holds.


**Inherits:** [Phaser.Loader.File#destroy](../class/Phaser.Loader.File.md#destroy)


> Source: [src/loader/File.js#L546](https://github.com/phaserjs/phaser/blob/v3.85.2/src/loader/File.js#L546)  
Since: 3.7.0


---

## hasCacheConflict

### \<instance> hasCacheConflict()


**Description:**

Checks if a key matching the one used by this file exists in the target Cache or not.
This is called automatically by the LoaderPlugin to decide if the file can be safely
loaded or will conflict.


**Returns:** boolean - `true` if adding this file will cause a conflict, otherwise `false`.


**Inherits:** [Phaser.Loader.File#hasCacheConflict](../class/Phaser.Loader.File.md#hasCacheConflict)


> Source: [src/loader/File.js#L487](https://github.com/phaserjs/phaser/blob/v3.85.2/src/loader/File.js#L487)  
Since: 3.7.0


---

## load

### \<instance> load()


**Description:**

Called by the Loader, starts the actual file downloading.
During the load the methods onLoad, onError and onProgress are called, based on the XHR events.
You shouldn't normally call this method directly, it's meant to be invoked by the Loader.


**Inherits:** [Phaser.Loader.File#load](../class/Phaser.Loader.File.md#load)


> Source: [src/loader/File.js#L296](https://github.com/phaserjs/phaser/blob/v3.85.2/src/loader/File.js#L296)  
Since: 3.0.0


---

## onBase64Load

### \<instance> onBase64Load(xhr)


**Description:**

Called by the XHRLoader if it was given a File with base64 data to load.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| xhr | XMLHttpRequest | No | The FakeXHR object containing the decoded base64 data. |


**Inherits:** [Phaser.Loader.File#onBase64Load](../class/Phaser.Loader.File.md#onBase64Load)


> Source: [src/loader/File.js#L364](https://github.com/phaserjs/phaser/blob/v3.85.2/src/loader/File.js#L364)  
Since: 3.80.0


---

## onError

### \<instance> onError(xhr, event)


**Description:**

Called if the file errors while loading, is sent a DOM ProgressEvent.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| xhr | XMLHttpRequest | No | The XMLHttpRequest that caused this onload event. |
| event | ProgressEvent | No | The DOM ProgressEvent that resulted from this error. |


**Inherits:** [Phaser.Loader.File#onError](../class/Phaser.Loader.File.md#onError)


> Source: [src/loader/File.js#L385](https://github.com/phaserjs/phaser/blob/v3.85.2/src/loader/File.js#L385)  
Since: 3.0.0


---

## onLoad

### \<instance> onLoad(xhr, event)


**Description:**

Called when the file finishes loading, is sent a DOM ProgressEvent.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| xhr | XMLHttpRequest | No | The XMLHttpRequest that caused this onload event. |
| event | ProgressEvent | No | The DOM ProgressEvent that resulted from this load. |


**Inherits:** [Phaser.Loader.File#onLoad](../class/Phaser.Loader.File.md#onLoad)


> Source: [src/loader/File.js#L331](https://github.com/phaserjs/phaser/blob/v3.85.2/src/loader/File.js#L331)  
Since: 3.0.0


---

## onProcess

### \<instance> onProcess()


**Description:**

Called automatically by Loader.nextFile.
This method controls what extra work this File does with its loaded data.


**Overrides:** Phaser.Loader.File#onProcess


> Source: [src/loader/filetypes/HTMLFile.js#L66](https://github.com/phaserjs/phaser/blob/v3.85.2/src/loader/filetypes/HTMLFile.js#L66)  
Since: 3.7.0


---

## onProcessComplete

### \<instance> onProcessComplete()


**Description:**

Called when the File has completed processing.
Checks on the state of its multifile, if set.


**Inherits:** [Phaser.Loader.File#onProcessComplete](../class/Phaser.Loader.File.md#onProcessComplete)


> Source: [src/loader/File.js#L446](https://github.com/phaserjs/phaser/blob/v3.85.2/src/loader/File.js#L446)  
Since: 3.7.0


---

## onProcessError

### \<instance> onProcessError()


**Description:**

Called when the File has completed processing but it generated an error.
Checks on the state of its multifile, if set.


**Inherits:** [Phaser.Loader.File#onProcessError](../class/Phaser.Loader.File.md#onProcessError)


> Source: [src/loader/File.js#L465](https://github.com/phaserjs/phaser/blob/v3.85.2/src/loader/File.js#L465)  
Since: 3.7.0


---

## onProgress

### \<instance> onProgress(event)


**Description:**

Called during the file load progress. Is sent a DOM ProgressEvent.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| event | ProgressEvent | No | The DOM ProgressEvent. |


**Fires:** [Phaser.Loader.Events#event:FILE_PROGRESS](../event/Phaser.Loader.Events.md#FILE_PROGRESS)


**Inherits:** [Phaser.Loader.File#onProgress](../class/Phaser.Loader.File.md#onProgress)


> Source: [src/loader/File.js#L410](https://github.com/phaserjs/phaser/blob/v3.85.2/src/loader/File.js#L410)  
Since: 3.0.0


---

## pendingDestroy

### \<instance> pendingDestroy()


**Description:**

Called once the file has been added to its cache and is now ready for deletion from the Loader.
It will emit a `filecomplete` event from the LoaderPlugin.


**Fires:** [Phaser.Loader.Events#event:FILE_COMPLETE](../event/Phaser.Loader.Events.md#FILE_COMPLETE), [Phaser.Loader.Events#event:FILE_KEY_COMPLETE](../event/Phaser.Loader.Events.md#FILE_KEY_COMPLETE)


**Inherits:** [Phaser.Loader.File#pendingDestroy](../class/Phaser.Loader.File.md#pendingDestroy)


> Source: [src/loader/File.js#L517](https://github.com/phaserjs/phaser/blob/v3.85.2/src/loader/File.js#L517)  
Since: 3.7.0


---

## resetXHR

### \<instance> resetXHR()


**Description:**

Resets the XHRLoader instance this file is using.


**Inherits:** [Phaser.Loader.File#resetXHR](../class/Phaser.Loader.File.md#resetXHR)


> Source: [src/loader/File.js#L280](https://github.com/phaserjs/phaser/blob/v3.85.2/src/loader/File.js#L280)  
Since: 3.0.0


---

## setLink

### \<instance> setLink(fileB)


**Description:**

Links this File with another, so they depend upon each other for loading and processing.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| fileB | [Phaser.Loader.File](../class/Phaser.Loader.File.md) | No | The file to link to this one. |


**Inherits:** [Phaser.Loader.File#setLink](../class/Phaser.Loader.File.md#setLink)


> Source: [src/loader/File.js#L265](https://github.com/phaserjs/phaser/blob/v3.85.2/src/loader/File.js#L265)  
Since: 3.7.0


---

# Public Members

## base64

### base64: boolean


**Description:**

Does this File contain a data URI?


**Inherits:** [Phaser.Loader.File#base64](../class/Phaser.Loader.File.md#base64)


> Source: [src/loader/File.js#L236](https://github.com/phaserjs/phaser/blob/v3.85.2/src/loader/File.js#L236)  
Since: 3.80.0


---

## bytesLoaded

### bytesLoaded: number


**Description:**

Updated as the file loads.
Only set if loading via XHR.


**Inherits:** [Phaser.Loader.File#bytesLoaded](../class/Phaser.Loader.File.md#bytesLoaded)


> Source: [src/loader/File.js#L165](https://github.com/phaserjs/phaser/blob/v3.85.2/src/loader/File.js#L165)  
Since: 3.0.0


---

## bytesTotal

### bytesTotal: number


**Description:**

The total size of this file.
Set by onProgress and only if loading via XHR.


**Inherits:** [Phaser.Loader.File#bytesTotal](../class/Phaser.Loader.File.md#bytesTotal)


> Source: [src/loader/File.js#L154](https://github.com/phaserjs/phaser/blob/v3.85.2/src/loader/File.js#L154)  
Since: 3.0.0


---

## cache

### cache: [Phaser.Cache.BaseCache](../class/Phaser.Cache.BaseCache.md), [Phaser.Textures.TextureManager](../class/Phaser.Textures.TextureManager.md)


**Description:**

A reference to the Cache, or Texture Manager, that is going to store this file if it loads.


**Inherits:** [Phaser.Loader.File#cache](../class/Phaser.Loader.File.md#cache)


> Source: [src/loader/File.js#L44](https://github.com/phaserjs/phaser/blob/v3.85.2/src/loader/File.js#L44)  
Since: 3.7.0


---

## config

### config: *


**Description:**

A config object that can be used by file types to store transitional data.


**Inherits:** [Phaser.Loader.File#config](../class/Phaser.Loader.File.md#config)


> Source: [src/loader/File.js#L206](https://github.com/phaserjs/phaser/blob/v3.85.2/src/loader/File.js#L206)  
Since: 3.0.0


---

## crossOrigin

### crossOrigin: string, undefined


**Description:**

For CORs based loading.
If this is undefined then the File will check BaseLoader.crossOrigin and use that (if set)


**Inherits:** [Phaser.Loader.File#crossOrigin](../class/Phaser.Loader.File.md#crossOrigin)


> Source: [src/loader/File.js#L187](https://github.com/phaserjs/phaser/blob/v3.85.2/src/loader/File.js#L187)  
Since: 3.0.0


---

## data

### data: *


**Description:**

The processed file data, stored here after the file has loaded.


**Inherits:** [Phaser.Loader.File#data](../class/Phaser.Loader.File.md#data)


> Source: [src/loader/File.js#L197](https://github.com/phaserjs/phaser/blob/v3.85.2/src/loader/File.js#L197)  
Since: 3.0.0


---

## key

### key: string


**Description:**

Unique cache key (unique within its file type)


**Inherits:** [Phaser.Loader.File#key](../class/Phaser.Loader.File.md#key)


> Source: [src/loader/File.js#L67](https://github.com/phaserjs/phaser/blob/v3.85.2/src/loader/File.js#L67)  
Since: 3.0.0


---

## linkFile

### linkFile: [Phaser.Loader.File](../class/Phaser.Loader.File.md)


**Description:**

Does this file have an associated linked file? Such as an image and a normal map.
Atlases and Bitmap Fonts use the multiFile, because those files need loading together but aren't
actually bound by data, where-as a linkFile is.


**Inherits:** [Phaser.Loader.File#linkFile](../class/Phaser.Loader.File.md#linkFile)


> Source: [src/loader/File.js#L225](https://github.com/phaserjs/phaser/blob/v3.85.2/src/loader/File.js#L225)  
Since: 3.7.0


---

## loader

### loader: [Phaser.Loader.LoaderPlugin](../class/Phaser.Loader.LoaderPlugin.md)


**Description:**

A reference to the Loader that is going to load this file.


**Inherits:** [Phaser.Loader.File#loader](../class/Phaser.Loader.File.md#loader)


> Source: [src/loader/File.js#L35](https://github.com/phaserjs/phaser/blob/v3.85.2/src/loader/File.js#L35)  
Since: 3.0.0


---

## multiFile

### multiFile: [Phaser.Loader.MultiFile](../class/Phaser.Loader.MultiFile.md)


**Description:**

If this is a multipart file, i.e. an atlas and its json together, then this is a reference
to the parent MultiFile. Set and used internally by the Loader or specific file types.


**Inherits:** [Phaser.Loader.File#multiFile](../class/Phaser.Loader.File.md#multiFile)


> Source: [src/loader/File.js#L215](https://github.com/phaserjs/phaser/blob/v3.85.2/src/loader/File.js#L215)  
Since: 3.7.0


---

## percentComplete

### percentComplete: number


**Description:**

A percentage value between 0 and 1 indicating how much of this file has loaded.
Only set if loading via XHR.


**Inherits:** [Phaser.Loader.File#percentComplete](../class/Phaser.Loader.File.md#percentComplete)


> Source: [src/loader/File.js#L176](https://github.com/phaserjs/phaser/blob/v3.85.2/src/loader/File.js#L176)  
Since: 3.0.0


---

## retryAttempts

### retryAttempts: number


**Description:**

The counter for the number of times to retry loading this file before it fails.

You can set this property value in the FileConfig object. If not present,
this property is read from the `LoaderPlugin.maxRetries` property when
this File instance is created.

You can set this value via the Game Config, or you can adjust the `LoaderPlugin` property
at any point after the Loader has started. However, it will not apply to files
that have already been added to the Loader, only those added after this value
is changed.


**Inherits:** [Phaser.Loader.File#retryAttempts](../class/Phaser.Loader.File.md#retryAttempts)


> Source: [src/loader/File.js#L245](https://github.com/phaserjs/phaser/blob/v3.85.2/src/loader/File.js#L245)  
Since: 3.85.0


---

## src

### src: string


**Description:**

The final URL this file will load from, including baseURL and path.
Set automatically when the Loader calls 'load' on this file.


**Inherits:** [Phaser.Loader.File#src](../class/Phaser.Loader.File.md#src)


> Source: [src/loader/File.js#L112](https://github.com/phaserjs/phaser/blob/v3.85.2/src/loader/File.js#L112)  
Since: 3.0.0


---

## state

### state: number


**Description:**

The current state of the file. One of the FILE_CONST values.


**Inherits:** [Phaser.Loader.File#state](../class/Phaser.Loader.File.md#state)


> Source: [src/loader/File.js#L145](https://github.com/phaserjs/phaser/blob/v3.85.2/src/loader/File.js#L145)  
Since: 3.0.0


---

## type

### type: string


**Description:**

The file type string (image, json, etc) for sorting within the Loader.


**Inherits:** [Phaser.Loader.File#type](../class/Phaser.Loader.File.md#type)


> Source: [src/loader/File.js#L53](https://github.com/phaserjs/phaser/blob/v3.85.2/src/loader/File.js#L53)  
Since: 3.0.0


---

## url

### url: object, string


**Description:**

The URL of the file, not including baseURL.

Automatically has Loader.path prepended to it if a string.

Can also be a JavaScript Object, such as the results of parsing JSON data.


**Inherits:** [Phaser.Loader.File#url](../class/Phaser.Loader.File.md#url)


> Source: [src/loader/File.js#L99](https://github.com/phaserjs/phaser/blob/v3.85.2/src/loader/File.js#L99)  
Since: 3.0.0


---

## xhrLoader

### xhrLoader: XMLHttpRequest


**Description:**

The XMLHttpRequest instance (as created by XHR Loader) that is loading this File.


**Inherits:** [Phaser.Loader.File#xhrLoader](../class/Phaser.Loader.File.md#xhrLoader)


> Source: [src/loader/File.js#L136](https://github.com/phaserjs/phaser/blob/v3.85.2/src/loader/File.js#L136)  
Since: 3.0.0


---

## xhrSettings

### xhrSettings: [Phaser.Types.Loader.XHRSettingsObject](../typedef/Phaser.Types.Loader.md#XHRSettingsObject)


**Description:**

The merged XHRSettings for this file.


**Inherits:** [Phaser.Loader.File#xhrSettings](../class/Phaser.Loader.File.md#xhrSettings)


> Source: [src/loader/File.js#L122](https://github.com/phaserjs/phaser/blob/v3.85.2/src/loader/File.js#L122)  
Since: 3.0.0


---

