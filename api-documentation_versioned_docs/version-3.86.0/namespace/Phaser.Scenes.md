---
visibility: public
slug: scenes
title: Phaser.Scenes

seoTitle: Phaser.Scenes
seoDescription: Phaser v3.86.0 Documentation for 
ogImage: 
---




Scope: 
static
> Source: [src/scene/index.js#L10](https://github.com/phaserjs/phaser/blob/v3.86.0/src/scene/index.js#L10)  


# Static functions

- [SceneManager](../class/scenes-scenemanager)
- [ScenePlugin](../class/scenes-sceneplugin)
- [Systems](../class/scenes-systems)
# Static functions

## CREATING

### CREATING: number


**Description:**

Scene state.


> Source: [src/scene/const.js#L55](https://github.com/phaserjs/phaser/blob/v3.86.0/src/scene/const.js#L55)  
Since: 3.0.0


---

## DESTROYED

### DESTROYED: number


**Description:**

Scene state.


> Source: [src/scene/const.js#L105](https://github.com/phaserjs/phaser/blob/v3.86.0/src/scene/const.js#L105)  
Since: 3.0.0


---

## INIT

### INIT: number


**Description:**

Scene state.


> Source: [src/scene/const.js#L25](https://github.com/phaserjs/phaser/blob/v3.86.0/src/scene/const.js#L25)  
Since: 3.0.0


---

## LOADING

### LOADING: number


**Description:**

Scene state.


> Source: [src/scene/const.js#L45](https://github.com/phaserjs/phaser/blob/v3.86.0/src/scene/const.js#L45)  
Since: 3.0.0


---

## PAUSED

### PAUSED: number


**Description:**

Scene state.


> Source: [src/scene/const.js#L75](https://github.com/phaserjs/phaser/blob/v3.86.0/src/scene/const.js#L75)  
Since: 3.0.0


---

## PENDING

### PENDING: number


**Description:**

Scene state.


> Source: [src/scene/const.js#L15](https://github.com/phaserjs/phaser/blob/v3.86.0/src/scene/const.js#L15)  
Since: 3.0.0


---

## RUNNING

### RUNNING: number


**Description:**

Scene state.


> Source: [src/scene/const.js#L65](https://github.com/phaserjs/phaser/blob/v3.86.0/src/scene/const.js#L65)  
Since: 3.0.0


---

## SHUTDOWN

### SHUTDOWN: number


**Description:**

Scene state.


> Source: [src/scene/const.js#L95](https://github.com/phaserjs/phaser/blob/v3.86.0/src/scene/const.js#L95)  
Since: 3.0.0


---

## SLEEPING

### SLEEPING: number


**Description:**

Scene state.


> Source: [src/scene/const.js#L85](https://github.com/phaserjs/phaser/blob/v3.86.0/src/scene/const.js#L85)  
Since: 3.0.0


---

## START

### START: number


**Description:**

Scene state.


> Source: [src/scene/const.js#L35](https://github.com/phaserjs/phaser/blob/v3.86.0/src/scene/const.js#L35)  
Since: 3.0.0


---

# Static functions

- [Events](../namespace/scenes-events)
- [Settings](../namespace/scenes-settings)
# Static functions

## GetPhysicsPlugins

### \<static> GetPhysicsPlugins(sys)


**Description:**

Builds an array of which physics plugins should be activated for the given Scene.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| sys | [Phaser.Scenes.Systems](../class/Phaser.Scenes.Systems.md) | No | The scene system to get the physics systems of. |


**Returns:** array - An array of Physics systems to start for this Scene.


> Source: [src/scene/GetPhysicsPlugins.js#L10](https://github.com/phaserjs/phaser/blob/v3.86.0/src/scene/GetPhysicsPlugins.js#L10)  
Since: 3.0.0


---

## GetScenePlugins

### \<static> GetScenePlugins(sys)


**Description:**

Builds an array of which plugins (not including physics plugins) should be activated for the given Scene.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| sys | [Phaser.Scenes.Systems](../class/Phaser.Scenes.Systems.md) | No | The Scene Systems object to check for plugins. |


**Returns:** array - An array of all plugins which should be activated, either the default ones or the ones configured in the Scene Systems object.


> Source: [src/scene/GetScenePlugins.js#L9](https://github.com/phaserjs/phaser/blob/v3.86.0/src/scene/GetScenePlugins.js#L9)  
Since: 3.0.0


---

