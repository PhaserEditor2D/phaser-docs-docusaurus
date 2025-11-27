---
visibility: public
slug: namespace/gameobjects
title: Phaser.GameObjects

seoTitle: Phaser.GameObjects
seoDescription: Phaser v3.87.0 Documentation for 
ogImage: 
---




Scope: 
static
> Source: [src/gameobjects/index.js#L7](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/index.js#L7)  


# Static functions

- [Arc](../class/gameobjects-arc)
- [BitmapText](../class/gameobjects-bitmaptext)
- [Blitter](../class/gameobjects-blitter)
- [Bob](../class/gameobjects-bob)
- [Container](../class/gameobjects-container)
- [Curve](../class/gameobjects-curve)
- [DisplayList](../class/gameobjects-displaylist)
- [DOMElement](../class/gameobjects-domelement)
- [DynamicBitmapText](../class/gameobjects-dynamicbitmaptext)
- [Ellipse](../class/gameobjects-ellipse)
- [Extern](../class/gameobjects-extern)
- [GameObject](../class/gameobjects-gameobject)
- [GameObjectCreator](../class/gameobjects-gameobjectcreator)
- [GameObjectFactory](../class/gameobjects-gameobjectfactory)
- [Graphics](../class/gameobjects-graphics)
- [Grid](../class/gameobjects-grid)
- [Group](../class/gameobjects-group)
- [Image](../class/gameobjects-image)
- [IsoBox](../class/gameobjects-isobox)
- [IsoTriangle](../class/gameobjects-isotriangle)
- [Layer](../class/gameobjects-layer)
- [Light](../class/gameobjects-light)
- [LightsManager](../class/gameobjects-lightsmanager)
- [LightsPlugin](../class/gameobjects-lightsplugin)
- [Line](../class/gameobjects-line)
- [Mesh](../class/gameobjects-mesh)
- [NineSlice](../class/gameobjects-nineslice)
- [PathFollower](../class/gameobjects-pathfollower)
- [Plane](../class/gameobjects-plane)
- [PointLight](../class/gameobjects-pointlight)
- [Polygon](../class/gameobjects-polygon)
- [Rectangle](../class/gameobjects-rectangle)
- [RenderTexture](../class/gameobjects-rendertexture)
- [Rope](../class/gameobjects-rope)
- [Shader](../class/gameobjects-shader)
- [Shape](../class/gameobjects-shape)
- [Sprite](../class/gameobjects-sprite)
- [Star](../class/gameobjects-star)
- [Text](../class/gameobjects-text)
- [TextStyle](../class/gameobjects-textstyle)
- [TileSprite](../class/gameobjects-tilesprite)
- [Triangle](../class/gameobjects-triangle)
- [UpdateList](../class/gameobjects-updatelist)
- [Video](../class/gameobjects-video)
- [Zone](../class/gameobjects-zone)
# Static functions

- [Components](../namespace/gameobjects-components)
- [Events](../namespace/gameobjects-events)
- [Particles](../namespace/gameobjects-particles)
- [RetroFont](../namespace/gameobjects-retrofont)
# Static functions

## BuildGameObject

### \<static> BuildGameObject(scene, gameObject, config)


**Description:**

Builds a Game Object using the provided configuration object.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| scene | [Phaser.Scene](../class/Phaser.Scene.md) | No | A reference to the Scene. |
| gameObject | [Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md) | No | The initial GameObject. |
| config | [Phaser.Types.GameObjects.GameObjectConfig](../typedef/Phaser.Types.GameObjects.md#GameObjectConfig) | No | The config to build the GameObject with. |


**Returns:** [Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md) - The built Game Object.


> Source: [src/gameobjects/BuildGameObject.js#L10](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/BuildGameObject.js#L10)  
Since: 3.0.0


---

## BuildGameObjectAnimation

### \<static> BuildGameObjectAnimation(sprite, config)


**Description:**

Adds an Animation component to a Sprite and populates it based on the given config.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| sprite | [Phaser.GameObjects.Sprite](../class/Phaser.GameObjects.Sprite.md) | No | The sprite to add an Animation component to. |
| config | object | No | The animation config. |


**Returns:** [Phaser.GameObjects.Sprite](../class/Phaser.GameObjects.Sprite.md) - The updated Sprite.


> Source: [src/gameobjects/BuildGameObjectAnimation.js#L9](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/BuildGameObjectAnimation.js#L9)  
Since: 3.0.0


---

## GetCalcMatrix

### \<static> GetCalcMatrix(src, camera, [parentMatrix])


**Description:**

Calculates the Transform Matrix of the given Game Object and Camera, factoring in

the parent matrix if provided.



Note that the object this results contains _references_ to the Transform Matrices,

not new instances of them. Therefore, you should use their values immediately, or

copy them to your own matrix, as they will be replaced as soon as another Game

Object is rendered.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| src | [Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md) | No | The Game Object to calculate the transform matrix for. |
| camera | [Phaser.Cameras.Scene2D.Camera](../class/Phaser.Cameras.Scene2D.Camera.md) | No | The camera being used to render the Game Object. |
| parentMatrix | [Phaser.GameObjects.Components.TransformMatrix](../class/Phaser.GameObjects.Components.TransformMatrix.md) | Yes | The transform matrix of the parent container, if any. |


**Returns:** [Phaser.Types.GameObjects.GetCalcMatrixResults](../typedef/Phaser.Types.GameObjects.md#GetCalcMatrixResults) - The results object containing the updated transform matrices.


> Source: [src/gameobjects/GetCalcMatrix.js#L15](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/GetCalcMatrix.js#L15)  
Since: 3.50.0


---

## GetTextSize

### \<static> GetTextSize(text, size, lines)


**Description:**

Returns an object containing dimensions of the Text object.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| text | [Phaser.GameObjects.Text](../class/Phaser.GameObjects.Text.md) | No | The Text object to calculate the size from. |
| size | [Phaser.Types.GameObjects.Text.TextMetrics](../typedef/Phaser.Types.GameObjects.Text.md#TextMetrics) | No | The Text metrics to use when calculating the size. |
| lines | Array.\<string> | No | The lines of text to calculate the size from. |


**Returns:** [Phaser.Types.GameObjects.Text.GetTextSizeObject](../typedef/Phaser.Types.GameObjects.Text.md#GetTextSizeObject) - An object containing dimensions of the Text object.


> Source: [src/gameobjects/text/GetTextSize.js#L7](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/text/GetTextSize.js#L7)  
Since: 3.0.0


---

## MeasureText

### \<static> MeasureText(textStyle)


**Description:**

Calculates the ascent, descent and fontSize of a given font style.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| textStyle | [Phaser.GameObjects.TextStyle](../class/Phaser.GameObjects.TextStyle.md) | No | The TextStyle object to measure. |


**Returns:** [Phaser.Types.GameObjects.Text.TextMetrics](../typedef/Phaser.Types.GameObjects.Text.md#TextMetrics) - An object containing the ascent, descent and fontSize of the TextStyle.


> Source: [src/gameobjects/text/MeasureText.js#L9](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/text/MeasureText.js#L9)  
Since: 3.0.0


---

