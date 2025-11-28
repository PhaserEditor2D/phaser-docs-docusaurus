---
visibility: public
slug: gameobjects-gameobjectcreator
title: GameObjectCreator
description: Phaser.GameObjects.GameObjectCreator
seoTitle: Phaser.GameObjects.GameObjectCreator
seoDescription: Phaser v3.87.0 Documentation for Phaser.GameObjects.GameObjectCreator
ogImage: 
---


The Game Object Creator is a Scene plugin that allows you to quickly create many common

types of Game Objects and return them using a configuration object, rather than

having to specify a limited set of parameters such as with the GameObjectFactory.



Game Objects made via this class are automatically added to the Scene and Update List

unless you explicitly set the `add` property in the configuration object to `false`.

**Constructor**

`new GameObjectCreator(scene)`

**Parameters**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| scene | [Phaser.Scene](../class/Phaser.Scene.md) | No | The Scene to which this Game Object Factory belongs. |

---


**Scope**: static

> Source: [src/gameobjects/GameObjectCreator.js#L11](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/GameObjectCreator.js#L11)  
Since: 3.0.0

# Public Methods

## bitmapText

### \<instance> bitmapText(config, [addToScene])


**Description:**

Creates a new Bitmap Text Game Object and returns it.



Note: This method will only be available if the Bitmap Text Game Object has been built into Phaser.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| config | [Phaser.Types.GameObjects.BitmapText.BitmapTextConfig](../typedef/Phaser.Types.GameObjects.BitmapText.md#BitmapTextConfig) | No | The configuration object this Game Object will use to create itself. |
| addToScene | boolean | Yes | Add this Game Object to the Scene after creating it? If set this argument overrides the `add` property in the config object. |


**Returns:** [Phaser.GameObjects.BitmapText](../class/Phaser.GameObjects.BitmapText.md) - The Game Object that was created.


> Source: [src/gameobjects/bitmaptext/static/BitmapTextCreator.js#L13](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/bitmaptext/static/BitmapTextCreator.js#L13)  
Since: 3.0.0


---

## blitter

### \<instance> blitter(config, [addToScene])


**Description:**

Creates a new Blitter Game Object and returns it.



Note: This method will only be available if the Blitter Game Object has been built into Phaser.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| config | [Phaser.Types.GameObjects.Sprite.SpriteConfig](../typedef/Phaser.Types.GameObjects.Sprite.md#SpriteConfig) | No | The configuration object this Game Object will use to create itself. |
| addToScene | boolean | Yes | Add this Game Object to the Scene after creating it? If set this argument overrides the `add` property in the config object. |


**Returns:** [Phaser.GameObjects.Blitter](../class/Phaser.GameObjects.Blitter.md) - The Game Object that was created.


> Source: [src/gameobjects/blitter/BlitterCreator.js#L12](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/blitter/BlitterCreator.js#L12)  
Since: 3.0.0


---

## container

### \<instance> container(config, [addToScene])


**Description:**

Creates a new Container Game Object and returns it.



Note: This method will only be available if the Container Game Object has been built into Phaser.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| config | [Phaser.Types.GameObjects.Container.ContainerConfig](../typedef/Phaser.Types.GameObjects.Container.md#ContainerConfig) | No | The configuration object this Game Object will use to create itself. |
| addToScene | boolean | Yes | Add this Game Object to the Scene after creating it? If set this argument overrides the `add` property in the config object. |


**Returns:** [Phaser.GameObjects.Container](../class/Phaser.GameObjects.Container.md) - The Game Object that was created.


> Source: [src/gameobjects/container/ContainerCreator.js#L14](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/container/ContainerCreator.js#L14)  
Since: 3.4.0


---

## dynamicBitmapText

### \<instance> dynamicBitmapText(config, [addToScene])


**Description:**

Creates a new Dynamic Bitmap Text Game Object and returns it.



Note: This method will only be available if the Dynamic Bitmap Text Game Object has been built into Phaser.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| config | [Phaser.Types.GameObjects.BitmapText.BitmapTextConfig](../typedef/Phaser.Types.GameObjects.BitmapText.md#BitmapTextConfig) | No | The configuration object this Game Object will use to create itself. |
| addToScene | boolean | Yes | Add this Game Object to the Scene after creating it? If set this argument overrides the `add` property in the config object. |


**Returns:** [Phaser.GameObjects.DynamicBitmapText](../class/Phaser.GameObjects.DynamicBitmapText.md) - The Game Object that was created.


> Source: [src/gameobjects/bitmaptext/dynamic/DynamicBitmapTextCreator.js#L12](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/bitmaptext/dynamic/DynamicBitmapTextCreator.js#L12)  
Since: 3.0.0
²


---

## graphics

### \<instance> graphics([config], [addToScene])


**Description:**

Creates a new Graphics Game Object and returns it.



Note: This method will only be available if the Graphics Game Object has been built into Phaser.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| config | [Phaser.Types.GameObjects.Graphics.Options](../typedef/Phaser.Types.GameObjects.Graphics.md#Options) | Yes | The configuration object this Game Object will use to create itself. |
| addToScene | boolean | Yes | Add this Game Object to the Scene after creating it? If set this argument overrides the `add` property in the config object. |


**Returns:** [Phaser.GameObjects.Graphics](../class/Phaser.GameObjects.Graphics.md) - The Game Object that was created.


> Source: [src/gameobjects/graphics/GraphicsCreator.js#L10](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/graphics/GraphicsCreator.js#L10)  
Since: 3.0.0


---

## group

### \<instance> group(config)


**Description:**

Creates a new Group Game Object and returns it.



Note: This method will only be available if the Group Game Object has been built into Phaser.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| config | [Phaser.Types.GameObjects.Group.GroupConfig](../typedef/Phaser.Types.GameObjects.Group.md#GroupConfig) \| [Phaser.Types.GameObjects.Group.GroupCreateConfig](../typedef/Phaser.Types.GameObjects.Group.md#GroupCreateConfig) | No | The configuration object this Game Object will use to create itself. |


**Returns:** [Phaser.GameObjects.Group](../class/Phaser.GameObjects.Group.md) - The Game Object that was created.


> Source: [src/gameobjects/group/GroupCreator.js#L10](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/group/GroupCreator.js#L10)  
Since: 3.0.0


---

## image

### \<instance> image(config, [addToScene])


**Description:**

Creates a new Image Game Object and returns it.



Note: This method will only be available if the Image Game Object has been built into Phaser.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| config | [Phaser.Types.GameObjects.Sprite.SpriteConfig](../typedef/Phaser.Types.GameObjects.Sprite.md#SpriteConfig) | No | The configuration object this Game Object will use to create itself. |
| addToScene | boolean | Yes | Add this Game Object to the Scene after creating it? If set this argument overrides the `add` property in the config object. |


**Returns:** [Phaser.GameObjects.Image](../class/Phaser.GameObjects.Image.md) - The Game Object that was created.


> Source: [src/gameobjects/image/ImageCreator.js#L12](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/image/ImageCreator.js#L12)  
Since: 3.0.0


---

## layer

### \<instance> layer(config, [addToScene])


**Description:**

Creates a new Layer Game Object and returns it.



Note: This method will only be available if the Layer Game Object has been built into Phaser.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| config | [Phaser.Types.GameObjects.Sprite.SpriteConfig](../typedef/Phaser.Types.GameObjects.Sprite.md#SpriteConfig) | No | The configuration object this Game Object will use to create itself. |
| addToScene | boolean | Yes | Add this Game Object to the Scene after creating it? If set this argument overrides the `add` property in the config object. |


**Returns:** [Phaser.GameObjects.Layer](../class/Phaser.GameObjects.Layer.md) - The Game Object that was created.


> Source: [src/gameobjects/layer/LayerCreator.js#L12](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/layer/LayerCreator.js#L12)  
Since: 3.50.0


---

## mesh

### \<instance> mesh(config, [addToScene])


**Description:**

Creates a new Mesh Game Object and returns it.



Note: This method will only be available if the Mesh Game Object and WebGL support have been built into Phaser.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| config | [Phaser.Types.GameObjects.Mesh.MeshConfig](../typedef/Phaser.Types.GameObjects.Mesh.md#MeshConfig) | No | The configuration object this Game Object will use to create itself. |
| addToScene | boolean | Yes | Add this Game Object to the Scene after creating it? If set this argument overrides the `add` property in the config object. |


**Returns:** [Phaser.GameObjects.Mesh](../class/Phaser.GameObjects.Mesh.md) - The Game Object that was created.


> Source: [src/gameobjects/mesh/MeshCreator.js#L13](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/mesh/MeshCreator.js#L13)  
Since: 3.0.0


---

## nineslice

### \<instance> nineslice(config, [addToScene])


**Description:**

Creates a new Nine Slice Game Object and returns it.



Note: This method will only be available if the Nine Slice Game Object and WebGL support have been built into Phaser.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| config | [Phaser.Types.GameObjects.NineSlice.NineSliceConfig](../typedef/Phaser.Types.GameObjects.NineSlice.md#NineSliceConfig) | No | The configuration object this Game Object will use to create itself. |
| addToScene | boolean | Yes | Add this Game Object to the Scene after creating it? If set this argument overrides the `add` property in the config object. |


**Returns:** [Phaser.GameObjects.NineSlice](../class/Phaser.GameObjects.NineSlice.md) - The Game Object that was created.


> Source: [src/gameobjects/nineslice/NineSliceCreator.js#L13](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/nineslice/NineSliceCreator.js#L13)  
Since: 3.60.0


---

## particles

### \<instance> particles(config, [addToScene])


**Description:**

Creates a new Particle Emitter Game Object and returns it.



Prior to Phaser v3.60 this function would create a `ParticleEmitterManager`. These were removed

in v3.60 and replaced with creating a `ParticleEmitter` instance directly. Please see the

updated function parameters and class documentation for more details.



Note: This method will only be available if the Particles Game Object has been built into Phaser.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| config | [Phaser.Types.GameObjects.Particles.ParticleEmitterCreatorConfig](../typedef/Phaser.Types.GameObjects.Particles.md#ParticleEmitterCreatorConfig) | No | The configuration object this Game Object will use to create itself. |
| addToScene | boolean | Yes | Add this Game Object to the Scene after creating it? If set this argument overrides the `add` property in the config object. |


**Returns:** [Phaser.GameObjects.Particles.ParticleEmitter](../class/Phaser.GameObjects.Particles.ParticleEmitter.md) - The Game Object that was created.


> Source: [src/gameobjects/particles/ParticleEmitterCreator.js#L13](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/particles/ParticleEmitterCreator.js#L13)  
Since: 3.0.0


---

## plane

### \<instance> plane(config, [addToScene])


**Description:**

Creates a new Plane Game Object and returns it.



Note: This method will only be available if the Plane Game Object and WebGL support have been built into Phaser.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| config | [Phaser.Types.GameObjects.Plane.PlaneConfig](../typedef/Phaser.Types.GameObjects.Plane.md#PlaneConfig) | No | The configuration object this Game Object will use to create itself. |
| addToScene | boolean | Yes | Add this Game Object to the Scene after creating it? If set this argument overrides the `add` property in the config object. |


**Returns:** [Phaser.GameObjects.Plane](../class/Phaser.GameObjects.Plane.md) - The Game Object that was created.


> Source: [src/gameobjects/plane/PlaneCreator.js#L14](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/plane/PlaneCreator.js#L14)  
Since: 3.60.0


---

## pointlight

### \<instance> pointlight(config, [addToScene])


**Description:**

Creates a new Point Light Game Object and returns it.



Note: This method will only be available if the Point Light Game Object has been built into Phaser.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| config | object | No | The configuration object this Game Object will use to create itself. |
| addToScene | boolean | Yes | Add this Game Object to the Scene after creating it? If set this argument overrides the `add` property in the config object. |


**Returns:** [Phaser.GameObjects.PointLight](../class/Phaser.GameObjects.PointLight.md) - The Game Object that was created.


> Source: [src/gameobjects/pointlight/PointLightCreator.js#L12](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/pointlight/PointLightCreator.js#L12)  
Since: 3.50.0


---

## register

### \<static> register(factoryType, factoryFunction)


**Description:**

Static method called directly by the Game Object creator functions.

With this method you can register a custom GameObject factory in the GameObjectCreator,

providing a name (`factoryType`) and the constructor (`factoryFunction`) in order

to be called when you invoke Phaser.Scene.make[ factoryType ] method.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| factoryType | string | No | The key of the factory that you will use to call to Phaser.Scene.make[ factoryType ] method. |
| factoryFunction | function | No | The constructor function to be called when you invoke to the Phaser.Scene.make method. |


> Source: [src/gameobjects/GameObjectCreator.js#L154](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/GameObjectCreator.js#L154)  
Since: 3.0.0


---

## remove

### \<static> remove(factoryType)


**Description:**

Static method called directly by the Game Object Creator functions.



With this method you can remove a custom Game Object Creator that has been previously

registered in the Game Object Creator. Pass in its `factoryType` in order to remove it.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| factoryType | string | No | The key of the factory that you want to remove from the GameObjectCreator. |


> Source: [src/gameobjects/GameObjectCreator.js#L175](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/GameObjectCreator.js#L175)  
Since: 3.0.0


---

## renderTexture

### \<instance> renderTexture(config, [addToScene])


**Description:**

Creates a new Render Texture Game Object and returns it.



Note: This method will only be available if the Render Texture Game Object has been built into Phaser.



A Render Texture is a combination of Dynamic Texture and an Image Game Object, that uses the

Dynamic Texture to display itself with.



A Dynamic Texture is a special texture that allows you to draw textures, frames and most kind of

Game Objects directly to it.



You can take many complex objects and draw them to this one texture, which can then be used as the

base texture for other Game Objects, such as Sprites. Should you then update this texture, all

Game Objects using it will instantly be updated as well, reflecting the changes immediately.



It's a powerful way to generate dynamic textures at run-time that are WebGL friendly and don't invoke

expensive GPU uploads on each change.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| config | [Phaser.Types.GameObjects.RenderTexture.RenderTextureConfig](../typedef/Phaser.Types.GameObjects.RenderTexture.md#RenderTextureConfig) | No | The configuration object this Game Object will use to create itself. |
| addToScene | boolean | Yes | Add this Game Object to the Scene after creating it? If set this argument overrides the `add` property in the config object. |


**Returns:** [Phaser.GameObjects.RenderTexture](../class/Phaser.GameObjects.RenderTexture.md) - The Game Object that was created.


> Source: [src/gameobjects/rendertexture/RenderTextureCreator.js#L12](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/rendertexture/RenderTextureCreator.js#L12)  
Since: 3.2.0


---

## rope

### \<instance> rope(config, [addToScene])


**Description:**

Creates a new Rope Game Object and returns it.



Note: This method will only be available if the Rope Game Object and WebGL support have been built into Phaser.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| config | [Phaser.Types.GameObjects.Rope.RopeConfig](../typedef/Phaser.Types.GameObjects.Rope.md#RopeConfig) | No | The configuration object this Game Object will use to create itself. |
| addToScene | boolean | Yes | Add this Game Object to the Scene after creating it? If set this argument overrides the `add` property in the config object. |


**Returns:** [Phaser.GameObjects.Rope](../class/Phaser.GameObjects.Rope.md) - The Game Object that was created.


> Source: [src/gameobjects/rope/RopeCreator.js#L13](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/rope/RopeCreator.js#L13)  
Since: 3.23.0


---

## shader

### \<instance> shader(config, [addToScene])


**Description:**

Creates a new Shader Game Object and returns it.



Note: This method will only be available if the Shader Game Object and WebGL support have been built into Phaser.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| config | [Phaser.Types.GameObjects.Shader.ShaderConfig](../typedef/Phaser.Types.GameObjects.Shader.md#ShaderConfig) | No | The configuration object this Game Object will use to create itself. |
| addToScene | boolean | Yes | Add this Game Object to the Scene after creating it? If set this argument overrides the `add` property in the config object. |


**Returns:** [Phaser.GameObjects.Shader](../class/Phaser.GameObjects.Shader.md) - The Game Object that was created.


> Source: [src/gameobjects/shader/ShaderCreator.js#L12](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/shader/ShaderCreator.js#L12)  
Since: 3.17.0


---

## sprite

### \<instance> sprite(config, [addToScene])


**Description:**

Creates a new Sprite Game Object and returns it.



Note: This method will only be available if the Sprite Game Object has been built into Phaser.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| config | [Phaser.Types.GameObjects.Sprite.SpriteConfig](../typedef/Phaser.Types.GameObjects.Sprite.md#SpriteConfig) | No |  | The configuration object this Game Object will use to create itself. |
| addToScene | boolean | Yes | true | Add this Game Object to the Scene after creating it? If set this argument overrides the `add` property in the config object. |


**Returns:** [Phaser.GameObjects.Sprite](../class/Phaser.GameObjects.Sprite.md) - The Game Object that was created.


> Source: [src/gameobjects/sprite/SpriteCreator.js#L13](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/sprite/SpriteCreator.js#L13)  
Since: 3.0.0


---

## text

### \<instance> text(config, [addToScene])


**Description:**

Creates a new Text Game Object and returns it.



Note: This method will only be available if the Text Game Object has been built into Phaser.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| config | [Phaser.Types.GameObjects.Text.TextConfig](../typedef/Phaser.Types.GameObjects.Text.md#TextConfig) | No | The configuration object this Game Object will use to create itself. |
| addToScene | boolean | Yes | Add this Game Object to the Scene after creating it? If set this argument overrides the `add` property in the config object. |


**Returns:** [Phaser.GameObjects.Text](../class/Phaser.GameObjects.Text.md) - The Game Object that was created.


> Source: [src/gameobjects/text/TextCreator.js#L12](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/text/TextCreator.js#L12)  
Since: 3.0.0


---

## tilemap

### \<instance> tilemap([config])


**Description:**

Creates a Tilemap from the given key or data, or creates a blank Tilemap if no key/data provided.

When loading from CSV or a 2D array, you should specify the tileWidth & tileHeight. When parsing

from a map from Tiled, the tileWidth, tileHeight, width & height will be pulled from the map

data. For an empty map, you should specify tileWidth, tileHeight, width & height.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| config | [Phaser.Types.Tilemaps.TilemapConfig](../typedef/Phaser.Types.Tilemaps.md#TilemapConfig) | Yes | The config options for the Tilemap. |


**Returns:** [Phaser.Tilemaps.Tilemap](../class/Phaser.Tilemaps.Tilemap.md) - undefined


> Source: [src/tilemaps/TilemapCreator.js#L10](https://github.com/phaserjs/phaser/blob/v3.87.0/src/tilemaps/TilemapCreator.js#L10)  
Since: 3.0.0


---

## tileSprite

### \<instance> tileSprite(config, [addToScene])


**Description:**

Creates a new TileSprite Game Object and returns it.



Note: This method will only be available if the TileSprite Game Object has been built into Phaser.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| config | [Phaser.Types.GameObjects.TileSprite.TileSpriteConfig](../typedef/Phaser.Types.GameObjects.TileSprite.md#TileSpriteConfig) | No | The configuration object this Game Object will use to create itself. |
| addToScene | boolean | Yes | Add this Game Object to the Scene after creating it? If set this argument overrides the `add` property in the config object. |


**Returns:** [Phaser.GameObjects.TileSprite](../class/Phaser.GameObjects.TileSprite.md) - The Game Object that was created.


> Source: [src/gameobjects/tilesprite/TileSpriteCreator.js#L12](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/tilesprite/TileSpriteCreator.js#L12)  
Since: 3.0.0


---

## tween

### \<instance> tween(config)


**Description:**

Creates a new Tween object and returns it.



Note: This method will only be available if Tweens have been built into Phaser.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| config | [Phaser.Types.Tweens.TweenBuilderConfig](../typedef/Phaser.Types.Tweens.md#TweenBuilderConfig) \| [Phaser.Types.Tweens.TweenChainBuilderConfig](../typedef/Phaser.Types.Tweens.md#TweenChainBuilderConfig) | [Phaser.Tweens.Tween](../class/Phaser.Tweens.Tween.md) | [Phaser.Tweens.TweenChain](../class/Phaser.Tweens.TweenChain.md) | No | A Tween Configuration object, or a Tween or TweenChain instance. |


**Returns:** [Phaser.Tweens.Tween](../class/Phaser.Tweens.Tween.md) - The Tween that was created.


> Source: [src/tweens/tween/Tween.js#L828](https://github.com/phaserjs/phaser/blob/v3.87.0/src/tweens/tween/Tween.js#L828)  
Since: 3.0.0


---

## tweenchain

### \<instance> tweenchain(config)


**Description:**

Creates a new TweenChain object and returns it, without adding it to the Tween Manager.



Note: This method will only be available if Tweens have been built into Phaser.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| config | [Phaser.Types.Tweens.TweenBuilderConfig](../typedef/Phaser.Types.Tweens.md#TweenBuilderConfig) \| object | No | The TweenChain configuration. |


**Returns:** [Phaser.Tweens.TweenChain](../class/Phaser.Tweens.TweenChain.md) - The TweenChain that was created.


> Source: [src/tweens/tween/TweenChain.js#L546](https://github.com/phaserjs/phaser/blob/v3.87.0/src/tweens/tween/TweenChain.js#L546)  
Since: 3.60.0


---

## video

### \<instance> video(config, [addToScene])


**Description:**

Creates a new Video Game Object and returns it.



Note: This method will only be available if the Video Game Object has been built into Phaser.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| config | [Phaser.Types.GameObjects.Video.VideoConfig](../typedef/Phaser.Types.GameObjects.Video.md#VideoConfig) | No | The configuration object this Game Object will use to create itself. |
| addToScene | boolean | Yes | Add this Game Object to the Scene after creating it? If set this argument overrides the `add` property in the config object. |


**Returns:** [Phaser.GameObjects.Video](../class/Phaser.GameObjects.Video.md) - The Game Object that was created.


> Source: [src/gameobjects/video/VideoCreator.js#L12](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/video/VideoCreator.js#L12)  
Since: 3.20.0


---

## zone

### \<instance> zone(config)


**Description:**

Creates a new Zone Game Object and returns it.



Note: This method will only be available if the Zone Game Object has been built into Phaser.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| config | [Phaser.Types.GameObjects.Zone.ZoneConfig](../typedef/Phaser.Types.GameObjects.Zone.md#ZoneConfig) | No | The configuration object this Game Object will use to create itself. |


**Returns:** [Phaser.GameObjects.Zone](../class/Phaser.GameObjects.Zone.md) - The Game Object that was created.


> Source: [src/gameobjects/zone/ZoneCreator.js#L11](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/zone/ZoneCreator.js#L11)  
Since: 3.0.0


---

# Private Methods

## boot

### \<instance> boot()


**Description:**

This method is called automatically, only once, when the Scene is first created.

Do not invoke it directly.


**Access:** private


> Source: [src/gameobjects/GameObjectCreator.js#L87](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/GameObjectCreator.js#L87)  
Since: 3.5.1


---

## destroy

### \<instance> destroy()


**Description:**

The Scene that owns this plugin is being destroyed.

We need to shutdown and then kill off all external references.


**Access:** private


> Source: [src/gameobjects/GameObjectCreator.js#L130](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/GameObjectCreator.js#L130)  
Since: 3.0.0


---

## shutdown

### \<instance> shutdown()


**Description:**

The Scene that owns this plugin is shutting down.

We need to kill and reset all internal properties as well as stop listening to Scene events.


**Access:** private


> Source: [src/gameobjects/GameObjectCreator.js#L117](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/GameObjectCreator.js#L117)  
Since: 3.0.0


---

## start

### \<instance> start()


**Description:**

This method is called automatically by the Scene when it is starting up.

It is responsible for creating local systems, properties and listening for Scene events.

Do not invoke it directly.


**Access:** private


> Source: [src/gameobjects/GameObjectCreator.js#L103](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/GameObjectCreator.js#L103)  
Since: 3.5.0


---

# Public Members

## displayList

### displayList: [Phaser.GameObjects.DisplayList](../class/Phaser.GameObjects.DisplayList.md)


**Description:**

A reference to the Scene Display List.


**Access:** protected


> Source: [src/gameobjects/GameObjectCreator.js#L63](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/GameObjectCreator.js#L63)  
Since: 3.0.0


---

## events

### events: [Phaser.Events.EventEmitter](../class/Phaser.Events.EventEmitter.md)


**Description:**

A reference to the Scene Event Emitter.


**Access:** protected


> Source: [src/gameobjects/GameObjectCreator.js#L53](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/GameObjectCreator.js#L53)  
Since: 3.50.0


---

## scene

### scene: [Phaser.Scene](../class/Phaser.Scene.md)


**Description:**

The Scene to which this Game Object Creator belongs.


**Access:** protected


> Source: [src/gameobjects/GameObjectCreator.js#L33](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/GameObjectCreator.js#L33)  
Since: 3.0.0


---

## systems

### systems: [Phaser.Scenes.Systems](../class/Phaser.Scenes.Systems.md)


**Description:**

A reference to the Scene.Systems.


**Access:** protected


> Source: [src/gameobjects/GameObjectCreator.js#L43](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/GameObjectCreator.js#L43)  
Since: 3.0.0


---

## updateList

### updateList: [Phaser.GameObjects.UpdateList](../class/Phaser.GameObjects.UpdateList.md)


**Description:**

A reference to the Scene Update List.


**Access:** protected


> Source: [src/gameobjects/GameObjectCreator.js#L73](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/GameObjectCreator.js#L73)  
Since: 3.0.0


---

