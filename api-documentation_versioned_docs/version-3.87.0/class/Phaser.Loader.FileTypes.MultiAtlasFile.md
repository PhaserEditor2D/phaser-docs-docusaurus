---
visibility: public
slug: loader-filetypes-multiatlasfile
title: MultiAtlasFile
description: Phaser.Loader.FileTypes.MultiAtlasFile
seoTitle: Phaser.Loader.FileTypes.MultiAtlasFile
seoDescription: Phaser v3.87.0 Documentation for Phaser.Loader.FileTypes.MultiAtlasFile
ogImage: 
---


A single Multi Texture Atlas File suitable for loading by the Loader.



These are created when you use the Phaser.Loader.LoaderPlugin#multiatlas method and are not typically created directly.



For documentation about what all the arguments and configuration options mean please see Phaser.Loader.LoaderPlugin#multiatlas.

**Constructor**

`new MultiAtlasFile(loader, key, [atlasURL], [path], [baseURL], [atlasXhrSettings], [textureXhrSettings])`

**Parameters**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| loader | [Phaser.Loader.LoaderPlugin](../class/Phaser.Loader.LoaderPlugin.md) | No | A reference to the Loader that is responsible for this file. |
| key | string \| [Phaser.Types.Loader.FileTypes.MultiAtlasFileConfig](../typedef/Phaser.Types.Loader.FileTypes.md#MultiAtlasFileConfig) | No | The key of the file. Must be unique within both the Loader and the Texture Manager. Or a config object. |
| atlasURL | string | Yes | The absolute or relative URL to load the multi atlas json file from. |
| path | string | Yes | Optional path to use when loading the textures defined in the atlas data. |
| baseURL | string | Yes | Optional Base URL to use when loading the textures defined in the atlas data. |
| atlasXhrSettings | [Phaser.Types.Loader.XHRSettingsObject](../typedef/Phaser.Types.Loader.md#XHRSettingsObject) | Yes | Extra XHR Settings specifically for the atlas json file. |
| textureXhrSettings | [Phaser.Types.Loader.XHRSettingsObject](../typedef/Phaser.Types.Loader.md#XHRSettingsObject) | Yes | Extra XHR Settings specifically for the texture files. |

---


**Scope**: static


**Extends**

> [Phaser.Loader.MultiFile](../class/Phaser.Loader.MultiFile.md)  



> Source: [src/loader/filetypes/MultiAtlasFile.js#L15](https://github.com/phaserjs/phaser/blob/v3.87.0/src/loader/filetypes/MultiAtlasFile.js#L15)  
Since: 3.7.0

# Public Methods

## addToCache

### \<instance> addToCache()


**Description:**

Adds this file to its target cache upon successful loading and processing.


> Source: [src/loader/filetypes/MultiAtlasFile.js#L148](https://github.com/phaserjs/phaser/blob/v3.87.0/src/loader/filetypes/MultiAtlasFile.js#L148)  
Since: 3.7.0


---

## addToMultiFile

### \<instance> addToMultiFile(files)


**Description:**

Adds another child to this MultiFile, increases the pending count and resets the completion status.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| files | [Phaser.Loader.File](../class/Phaser.Loader.File.md) | No | The File to add to this MultiFile. |


**Returns:** [Phaser.Loader.MultiFile](../class/Phaser.Loader.MultiFile.md) - This MultiFile instance.


**Inherits:** [Phaser.Loader.MultiFile#addToMultiFile](../class/Phaser.Loader.MultiFile.md#addToMultiFile)


> Source: [src/loader/MultiFile.js#L196](https://github.com/phaserjs/phaser/blob/v3.87.0/src/loader/MultiFile.js#L196)  
Since: 3.7.0


---

## destroy

### \<instance> destroy()


**Description:**

Destroy this Multi File and any references it holds.


**Inherits:** [Phaser.Loader.MultiFile#destroy](../class/Phaser.Loader.MultiFile.md#destroy)


> Source: [src/loader/MultiFile.js#L292](https://github.com/phaserjs/phaser/blob/v3.87.0/src/loader/MultiFile.js#L292)  
Since: 3.60.0


---

## isReadyToProcess

### \<instance> isReadyToProcess()


**Description:**

Checks if this MultiFile is ready to process its children or not.


**Returns:** boolean - `true` if all children of this MultiFile have loaded, otherwise `false`.


**Inherits:** [Phaser.Loader.MultiFile#isReadyToProcess](../class/Phaser.Loader.MultiFile.md#isReadyToProcess)


> Source: [src/loader/MultiFile.js#L183](https://github.com/phaserjs/phaser/blob/v3.87.0/src/loader/MultiFile.js#L183)  
Since: 3.7.0


---

## onFileComplete

### \<instance> onFileComplete(file)


**Description:**

Called by each File when it finishes loading.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| file | [Phaser.Loader.File](../class/Phaser.Loader.File.md) | No | The File that has completed processing. |


**Overrides:** Phaser.Loader.MultiFile#onFileComplete


> Source: [src/loader/filetypes/MultiAtlasFile.js#L75](https://github.com/phaserjs/phaser/blob/v3.87.0/src/loader/filetypes/MultiAtlasFile.js#L75)  
Since: 3.7.0


---

## onFileFailed

### \<instance> onFileFailed(file)


**Description:**

Called by each File that fails to load.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| file | [Phaser.Loader.File](../class/Phaser.Loader.File.md) | No | The File that has failed to load. |


**Inherits:** [Phaser.Loader.MultiFile#onFileFailed](../class/Phaser.Loader.MultiFile.md#onFileFailed)


> Source: [src/loader/MultiFile.js#L237](https://github.com/phaserjs/phaser/blob/v3.87.0/src/loader/MultiFile.js#L237)  
Since: 3.7.0


---

## pendingDestroy

### \<instance> pendingDestroy()


**Description:**

Called once all children of this multi file have been added to their caches and is now

ready for deletion from the Loader.



It will emit a `filecomplete` event from the LoaderPlugin.


**Fires:** [Phaser.Loader.Events#event:FILE_COMPLETE](../event/Phaser.Loader.Events.md#FILE_COMPLETE), [Phaser.Loader.Events#event:FILE_KEY_COMPLETE](../event/Phaser.Loader.Events.md#FILE_KEY_COMPLETE)


**Inherits:** [Phaser.Loader.MultiFile#pendingDestroy](../class/Phaser.Loader.MultiFile.md#pendingDestroy)


> Source: [src/loader/MultiFile.js#L258](https://github.com/phaserjs/phaser/blob/v3.87.0/src/loader/MultiFile.js#L258)  
Since: 3.60.0


---

# Public Members

## baseURL

### baseURL: string


**Description:**

A reference to the Loaders baseURL at the time this MultiFile was created.

Used to populate child-files.


**Inherits:** [Phaser.Loader.MultiFile#baseURL](../class/Phaser.Loader.MultiFile.md#baseURL)


> Source: [src/loader/MultiFile.js#L146](https://github.com/phaserjs/phaser/blob/v3.87.0/src/loader/MultiFile.js#L146)  
Since: 3.20.0


---

## complete

### complete: boolean


**Description:**

The completion status of this MultiFile.


**Inherits:** [Phaser.Loader.MultiFile#complete](../class/Phaser.Loader.MultiFile.md#complete)


> Source: [src/loader/MultiFile.js#L107](https://github.com/phaserjs/phaser/blob/v3.87.0/src/loader/MultiFile.js#L107)  
Since: 3.7.0


---

## config

### config: any


**Description:**

A storage container for transient data that the loading files need.


**Inherits:** [Phaser.Loader.MultiFile#config](../class/Phaser.Loader.MultiFile.md#config)


> Source: [src/loader/MultiFile.js#L137](https://github.com/phaserjs/phaser/blob/v3.87.0/src/loader/MultiFile.js#L137)  
Since: 3.7.0


---

## failed

### failed: number


**Description:**

The number of files that failed to load.


**Inherits:** [Phaser.Loader.MultiFile#failed](../class/Phaser.Loader.MultiFile.md#failed)


> Source: [src/loader/MultiFile.js#L127](https://github.com/phaserjs/phaser/blob/v3.87.0/src/loader/MultiFile.js#L127)  
Since: 3.7.0


---

## files

### files: Array.\<[Phaser.Loader.File](../class/Phaser.Loader.File.md)>


**Description:**

Array of files that make up this MultiFile.


**Inherits:** [Phaser.Loader.MultiFile#files](../class/Phaser.Loader.MultiFile.md#files)


> Source: [src/loader/MultiFile.js#L89](https://github.com/phaserjs/phaser/blob/v3.87.0/src/loader/MultiFile.js#L89)  
Since: 3.7.0


---

## key

### key: string


**Description:**

Unique cache key (unique within its file type)


**Inherits:** [Phaser.Loader.MultiFile#key](../class/Phaser.Loader.MultiFile.md#key)


> Source: [src/loader/MultiFile.js#L63](https://github.com/phaserjs/phaser/blob/v3.87.0/src/loader/MultiFile.js#L63)  
Since: 3.7.0


---

## loader

### loader: [Phaser.Loader.LoaderPlugin](../class/Phaser.Loader.LoaderPlugin.md)


**Description:**

A reference to the Loader that is going to load this file.


**Inherits:** [Phaser.Loader.MultiFile#loader](../class/Phaser.Loader.MultiFile.md#loader)


> Source: [src/loader/MultiFile.js#L45](https://github.com/phaserjs/phaser/blob/v3.87.0/src/loader/MultiFile.js#L45)  
Since: 3.7.0


---

## path

### path: string


**Description:**

A reference to the Loaders path at the time this MultiFile was created.

Used to populate child-files.


**Inherits:** [Phaser.Loader.MultiFile#path](../class/Phaser.Loader.MultiFile.md#path)


> Source: [src/loader/MultiFile.js#L156](https://github.com/phaserjs/phaser/blob/v3.87.0/src/loader/MultiFile.js#L156)  
Since: 3.20.0


---

## pending

### pending: number


**Description:**

The number of files to load.


**Inherits:** [Phaser.Loader.MultiFile#pending](../class/Phaser.Loader.MultiFile.md#pending)


> Source: [src/loader/MultiFile.js#L117](https://github.com/phaserjs/phaser/blob/v3.87.0/src/loader/MultiFile.js#L117)  
Since: 3.7.0


---

## prefix

### prefix: string


**Description:**

A reference to the Loaders prefix at the time this MultiFile was created.

Used to populate child-files.


**Inherits:** [Phaser.Loader.MultiFile#prefix](../class/Phaser.Loader.MultiFile.md#prefix)


> Source: [src/loader/MultiFile.js#L166](https://github.com/phaserjs/phaser/blob/v3.87.0/src/loader/MultiFile.js#L166)  
Since: 3.20.0


---

## state

### state: number


**Description:**

The current state of the file. One of the FILE_CONST values.


**Inherits:** [Phaser.Loader.MultiFile#state](../class/Phaser.Loader.MultiFile.md#state)


> Source: [src/loader/MultiFile.js#L98](https://github.com/phaserjs/phaser/blob/v3.87.0/src/loader/MultiFile.js#L98)  
Since: 3.60.0


---

## type

### type: string


**Description:**

The file type string for sorting within the Loader.


**Inherits:** [Phaser.Loader.MultiFile#type](../class/Phaser.Loader.MultiFile.md#type)


> Source: [src/loader/MultiFile.js#L54](https://github.com/phaserjs/phaser/blob/v3.87.0/src/loader/MultiFile.js#L54)  
Since: 3.7.0


---

# Private Members

## multiKeyIndex

### multiKeyIndex: number


**Description:**

The current index being used by multi-file loaders to avoid key clashes.


**Access:** private


**Inherits:** [Phaser.Loader.MultiFile#multiKeyIndex](../class/Phaser.Loader.MultiFile.md#multiKeyIndex)


> Source: [src/loader/MultiFile.js#L79](https://github.com/phaserjs/phaser/blob/v3.87.0/src/loader/MultiFile.js#L79)  
Since: 3.20.0


---

