---
visibility: public
slug: class/cameras-scene2d-basecamera
title: BaseCamera
description: Phaser.Cameras.Scene2D.BaseCamera
seoTitle: Phaser.Cameras.Scene2D.BaseCamera
seoDescription: Phaser v3.87.0 Documentation for Phaser.Cameras.Scene2D.BaseCamera
ogImage: 
---


A Base Camera class.



The Camera is the way in which all games are rendered in Phaser. They provide a view into your game world,

and can be positioned, rotated, zoomed and scrolled accordingly.



A Camera consists of two elements: The viewport and the scroll values.



The viewport is the physical position and size of the Camera within your game. Cameras, by default, are

created the same size as your game, but their position and size can be set to anything. This means if you

wanted to create a camera that was 320x200 in size, positioned in the bottom-right corner of your game,

you'd adjust the viewport to do that (using methods like `setViewport` and `setSize`).



If you wish to change where the Camera is looking in your game, then you scroll it. You can do this

via the properties `scrollX` and `scrollY` or the method `setScroll`. Scrolling has no impact on the

viewport, and changing the viewport has no impact on the scrolling.



By default a Camera will render all Game Objects it can see. You can change this using the `ignore` method,

allowing you to filter Game Objects out on a per-Camera basis.



The Base Camera is extended by the Camera class, which adds in special effects including Fade,

Flash and Camera Shake, as well as the ability to follow Game Objects.



The Base Camera was introduced in Phaser 3.12. It was split off from the Camera class, to allow

you to isolate special effects as needed. Therefore the 'since' values for properties of this class relate

to when they were added to the Camera class.

**Constructor**

`new BaseCamera(x, y, width, height)`

**Parameters**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| x | number | No | The x position of the Camera, relative to the top-left of the game canvas. |
| y | number | No | The y position of the Camera, relative to the top-left of the game canvas. |
| width | number | No | The width of the Camera, in pixels. |
| height | number | No | The height of the Camera, in pixels. |

---


**Scope**: static


**Extends**

> [Phaser.Events.EventEmitter](../class/Phaser.Events.EventEmitter.md)  
> [Phaser.GameObjects.Components.Alpha](../namespace/Phaser.GameObjects.Components.Alpha.md)  
> [Phaser.GameObjects.Components.Visible](../namespace/Phaser.GameObjects.Components.Visible.md)  



> Source: [src/cameras/2d/BaseCamera.js#L17](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L17)  
Since: 3.12.0

# Public Members

## alpha

### alpha: number


**Description:**

The Camera alpha value. Setting this property impacts every single object that this Camera

renders. You can either set the property directly, i.e. via a Tween, to fade a Camera in or out,

or via the chainable `setAlpha` method instead.


**Overrides:** Phaser.GameObjects.Components.Alpha#alpha


> Source: [src/cameras/2d/BaseCamera.js#L377](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L377)  
Since: 3.11.0


---

## alphaBottomLeft

### alphaBottomLeft: number


**Description:**

The alpha value starting from the bottom-left of the Game Object.

This value is interpolated from the corner to the center of the Game Object.

**Tags:**

 - webglOnly


**Inherits:** [Phaser.GameObjects.Components.Alpha#alphaBottomLeft](../namespace/Phaser.GameObjects.Components.Alpha.md#alphaBottomLeft)


> Source: [src/gameobjects/components/Alpha.js#L227](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/components/Alpha.js#L227)  
Since: 3.0.0


---

## alphaBottomRight

### alphaBottomRight: number


**Description:**

The alpha value starting from the bottom-right of the Game Object.

This value is interpolated from the corner to the center of the Game Object.

**Tags:**

 - webglOnly


**Inherits:** [Phaser.GameObjects.Components.Alpha#alphaBottomRight](../namespace/Phaser.GameObjects.Components.Alpha.md#alphaBottomRight)


> Source: [src/gameobjects/components/Alpha.js#L257](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/components/Alpha.js#L257)  
Since: 3.0.0


---

## alphaTopLeft

### alphaTopLeft: number


**Description:**

The alpha value starting from the top-left of the Game Object.

This value is interpolated from the corner to the center of the Game Object.

**Tags:**

 - webglOnly


**Inherits:** [Phaser.GameObjects.Components.Alpha#alphaTopLeft](../namespace/Phaser.GameObjects.Components.Alpha.md#alphaTopLeft)


> Source: [src/gameobjects/components/Alpha.js#L167](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/components/Alpha.js#L167)  
Since: 3.0.0


---

## alphaTopRight

### alphaTopRight: number


**Description:**

The alpha value starting from the top-right of the Game Object.

This value is interpolated from the corner to the center of the Game Object.

**Tags:**

 - webglOnly


**Inherits:** [Phaser.GameObjects.Components.Alpha#alphaTopRight](../namespace/Phaser.GameObjects.Components.Alpha.md#alphaTopRight)


> Source: [src/gameobjects/components/Alpha.js#L197](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/components/Alpha.js#L197)  
Since: 3.0.0


---

## backgroundColor

### backgroundColor: [Phaser.Display.Color](../namespace/Phaser.Display.Color.md)


**Description:**

The background color of this Camera. Only used if `transparent` is `false`.


> Source: [src/cameras/2d/BaseCamera.js#L368](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L368)  
Since: 3.0.0


---

## cameraManager

### cameraManager: [Phaser.Cameras.Scene2D.CameraManager](../class/Phaser.Cameras.Scene2D.CameraManager.md)


**Description:**

A reference to the Scene's Camera Manager to which this Camera belongs.


> Source: [src/cameras/2d/BaseCamera.js#L106](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L106)  
Since: 3.17.0


---

## centerX

### centerX: number


**Description:**

The horizontal position of the center of the Camera's viewport, relative to the left of the game canvas.


> Source: [src/cameras/2d/BaseCamera.js#L1879](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L1879)  
Since: 3.10.0


---

## centerY

### centerY: number


**Description:**

The vertical position of the center of the Camera's viewport, relative to the top of the game canvas.


> Source: [src/cameras/2d/BaseCamera.js#L1896](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L1896)  
Since: 3.10.0


---

## dirty

### dirty: boolean


**Description:**

Is this Camera dirty?



A dirty Camera has had either its viewport size, bounds, scroll, rotation or zoom levels changed since the last frame.



This flag is cleared during the `postRenderCamera` method of the renderer.


> Source: [src/cameras/2d/BaseCamera.js#L183](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L183)  
Since: 3.11.0


---

## disableCull

### disableCull: boolean


**Description:**

Should the camera cull Game Objects before checking them for input hit tests?

In some special cases it may be beneficial to disable this.


> Source: [src/cameras/2d/BaseCamera.js#L388](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L388)  
Since: 3.0.0


---

## displayHeight

### displayHeight: number


**Description:**

The displayed height of the camera viewport, factoring in the camera zoom level.



If a camera has a viewport height of 600 and a zoom of 0.5 then its display height

would be 1200, as it's displaying twice as many pixels as zoom level 1.



Equally, a camera with a height of 600 and zoom of 2 would have a display height

of 300 pixels.


> Source: [src/cameras/2d/BaseCamera.js#L1936](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L1936)  
Since: 3.11.0


---

## displayWidth

### displayWidth: number


**Description:**

The displayed width of the camera viewport, factoring in the camera zoom level.



If a camera has a viewport width of 800 and a zoom of 0.5 then its display width

would be 1600, as it's displaying twice as many pixels as zoom level 1.



Equally, a camera with a width of 800 and zoom of 2 would have a display width

of 400 pixels.


> Source: [src/cameras/2d/BaseCamera.js#L1913](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L1913)  
Since: 3.11.0


---

## height

### height: number


**Description:**

The height of the Camera viewport, in pixels.



The viewport is the area into which the Camera renders. Setting the viewport does

not restrict where the Camera can scroll to.


> Source: [src/cameras/2d/BaseCamera.js#L1663](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L1663)  
Since: 3.0.0


---

## id

### id: number


**Description:**

The Camera ID. Assigned by the Camera Manager and used to handle camera exclusion.

This value is a bitmask.


> Source: [src/cameras/2d/BaseCamera.js#L115](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L115)  
Since: 3.11.0


---

## isSceneCamera

### isSceneCamera: boolean


**Description:**

Is this Camera a Scene Camera? (which is the default), or a Camera

belonging to a Texture?


> Source: [src/cameras/2d/BaseCamera.js#L510](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L510)  
Since: 3.60.0


---

## mask

### mask: [Phaser.Display.Masks.BitmapMask](../class/Phaser.Display.Masks.BitmapMask.md), [Phaser.Display.Masks.GeometryMask](../class/Phaser.Display.Masks.GeometryMask.md)


**Description:**

The Mask this Camera is using during render.

Set the mask using the `setMask` method. Remove the mask using the `clearMask` method.


> Source: [src/cameras/2d/BaseCamera.js#L470](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L470)  
Since: 3.17.0


---

## midPoint

### midPoint: [Phaser.Math.Vector2](../class/Phaser.Math.Vector2.md)


**Description:**

The mid-point of the Camera in 'world' coordinates.



Use it to obtain exactly where in the world the center of the camera is currently looking.



This value is updated in the preRender method, after the scroll values and follower

have been processed.


> Source: [src/cameras/2d/BaseCamera.js#L410](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L410)  
Since: 3.11.0


---

## name

### name: string


**Description:**

The name of the Camera. This is left empty for your own use.


> Source: [src/cameras/2d/BaseCamera.js#L126](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L126)  
Since: 3.0.0


---

## originX

### originX: number


**Description:**

The horizontal origin of rotation for this Camera.



By default the camera rotates around the center of the viewport.



Changing the origin allows you to adjust the point in the viewport from which rotation happens.

A value of 0 would rotate from the top-left of the viewport. A value of 1 from the bottom right.



See `setOrigin` to set both origins in a single, chainable call.


> Source: [src/cameras/2d/BaseCamera.js#L425](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L425)  
Since: 3.11.0


---

## originY

### originY: number


**Description:**

The vertical origin of rotation for this Camera.



By default the camera rotates around the center of the viewport.



Changing the origin allows you to adjust the point in the viewport from which rotation happens.

A value of 0 would rotate from the top-left of the viewport. A value of 1 from the bottom right.



See `setOrigin` to set both origins in a single, chainable call.


> Source: [src/cameras/2d/BaseCamera.js#L442](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L442)  
Since: 3.11.0


---

## renderList

### renderList: Array.\<[Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md)>


**Description:**

This array is populated with all of the Game Objects that this Camera has rendered

in the previous (or current, depending on when you inspect it) frame.



It is cleared at the start of `Camera.preUpdate`, or if the Camera is destroyed.



You should not modify this array as it is used internally by the input system,

however you can read it as required. Note that Game Objects may appear in this

list multiple times if they belong to multiple non-exclusive Containers.


> Source: [src/cameras/2d/BaseCamera.js#L494](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L494)  
Since: 3.52.0


---

## renderRoundPixels

### renderRoundPixels: boolean


**Description:**

Can this Camera render rounded pixel values?



This property is updated during the `preRender` method and should not be

set directly. It is set based on the `roundPixels` property of the Camera

combined with the zoom level. If the zoom is an integer then the WebGL

Renderer can apply rounding during rendering.


> Source: [src/cameras/2d/BaseCamera.js#L521](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L521)  
Since: 3.86.0


---

## roundPixels

### roundPixels: boolean


**Description:**

Should this camera round its pixel values to integers?


> Source: [src/cameras/2d/BaseCamera.js#L136](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L136)  
Since: 3.0.0


---

## scaleManager

### scaleManager: [Phaser.Scale.ScaleManager](../class/Phaser.Scale.ScaleManager.md)


**Description:**

A reference to the Game Scale Manager.


> Source: [src/cameras/2d/BaseCamera.js#L97](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L97)  
Since: 3.16.0


---

## scene

### scene: [Phaser.Scene](../class/Phaser.Scene.md)


**Description:**

A reference to the Scene this camera belongs to.


> Source: [src/cameras/2d/BaseCamera.js#L79](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L79)  
Since: 3.0.0


---

## sceneManager

### sceneManager: [Phaser.Scenes.SceneManager](../class/Phaser.Scenes.SceneManager.md)


**Description:**

A reference to the Game Scene Manager.


> Source: [src/cameras/2d/BaseCamera.js#L88](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L88)  
Since: 3.12.0


---

## scrollX

### scrollX: number


**Description:**

The horizontal scroll position of this Camera.



Change this value to cause the Camera to scroll around your Scene.



Alternatively, setting the Camera to follow a Game Object, via the `startFollow` method,

will automatically adjust the Camera scroll values accordingly.



You can set the bounds within which the Camera can scroll via the `setBounds` method.


> Source: [src/cameras/2d/BaseCamera.js#L1688](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L1688)  
Since: 3.0.0


---

## scrollY

### scrollY: number


**Description:**

The vertical scroll position of this Camera.



Change this value to cause the Camera to scroll around your Scene.



Alternatively, setting the Camera to follow a Game Object, via the `startFollow` method,

will automatically adjust the Camera scroll values accordingly.



You can set the bounds within which the Camera can scroll via the `setBounds` method.


> Source: [src/cameras/2d/BaseCamera.js#L1721](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L1721)  
Since: 3.0.0


---

## transparent

### transparent: boolean


**Description:**

Does this Camera have a transparent background?


> Source: [src/cameras/2d/BaseCamera.js#L358](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L358)  
Since: 3.0.0


---

## useBounds

### useBounds: boolean


**Description:**

Is this Camera using a bounds to restrict scrolling movement?



Set this property along with the bounds via `Camera.setBounds`.


> Source: [src/cameras/2d/BaseCamera.js#L158](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L158)  
Since: 3.0.0


---

## visible

### visible: boolean


**Description:**

Is this Camera visible or not?



A visible camera will render and perform input tests.

An invisible camera will not render anything and will skip input tests.


**Overrides:** Phaser.GameObjects.Components.Visible#visible


> Source: [src/cameras/2d/BaseCamera.js#L146](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L146)  
Since: 3.10.0


---

## width

### width: number


**Description:**

The width of the Camera viewport, in pixels.



The viewport is the area into which the Camera renders. Setting the viewport does

not restrict where the Camera can scroll to.


> Source: [src/cameras/2d/BaseCamera.js#L1638](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L1638)  
Since: 3.0.0


---

## worldView

### worldView: [Phaser.Geom.Rectangle](../class/Phaser.Geom.Rectangle.md)


**Description:**

The World View is a Rectangle that defines the area of the 'world' the Camera is currently looking at.

This factors in the Camera viewport size, zoom and scroll position and is updated in the Camera preRender step.

If you have enabled Camera bounds the worldview will be clamped to those bounds accordingly.

You can use it for culling or intersection checks.


> Source: [src/cameras/2d/BaseCamera.js#L170](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L170)  
Since: 3.11.0


---

## x

### x: number


**Description:**

The x position of the Camera viewport, relative to the top-left of the game canvas.

The viewport is the area into which the camera renders.

To adjust the position the camera is looking at in the game world, see the `scrollX` value.


> Source: [src/cameras/2d/BaseCamera.js#L1590](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L1590)  
Since: 3.0.0


---

## y

### y: number


**Description:**

The y position of the Camera viewport, relative to the top-left of the game canvas.

The viewport is the area into which the camera renders.

To adjust the position the camera is looking at in the game world, see the `scrollY` value.


> Source: [src/cameras/2d/BaseCamera.js#L1614](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L1614)  
Since: 3.0.0


---

## zoom

### zoom: number


**Description:**

The Camera zoom value. Change this value to zoom in, or out of, a Scene.



A value of 0.5 would zoom the Camera out, so you can now see twice as much

of the Scene as before. A value of 2 would zoom the Camera in, so every pixel

now takes up 2 pixels when rendered.



Set to 1 to return to the default zoom level.



Be careful to never set this value to zero.


> Source: [src/cameras/2d/BaseCamera.js#L1754](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L1754)  
Since: 3.0.0


---

## zoomX

### zoomX: number


**Description:**

The Camera horizontal zoom value. Change this value to zoom in, or out of, a Scene.



A value of 0.5 would zoom the Camera out, so you can now see twice as much

of the Scene as before. A value of 2 would zoom the Camera in, so every pixel

now takes up 2 pixels when rendered.



Set to 1 to return to the default zoom level.



Be careful to never set this value to zero.


> Source: [src/cameras/2d/BaseCamera.js#L1787](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L1787)  
Since: 3.50.0


---

## zoomY

### zoomY: number


**Description:**

The Camera vertical zoom value. Change this value to zoom in, or out of, a Scene.



A value of 0.5 would zoom the Camera out, so you can now see twice as much

of the Scene as before. A value of 2 would zoom the Camera in, so every pixel

now takes up 2 pixels when rendered.



Set to 1 to return to the default zoom level.



Be careful to never set this value to zero.


> Source: [src/cameras/2d/BaseCamera.js#L1818](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L1818)  
Since: 3.50.0


---

# Private Members

## _alpha

### _alpha: number


**Description:**

Private internal value. Holds the global alpha value.


**Access:** private


**Inherits:** [Phaser.GameObjects.Components.Alpha#_alpha](../namespace/Phaser.GameObjects.Components.Alpha.md#_alpha)


> Source: [src/gameobjects/components/Alpha.js#L22](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/components/Alpha.js#L22)  
Since: 3.0.0


---

## _alphaBL

### _alphaBL: number


**Description:**

Private internal value. Holds the bottom-left alpha value.


**Access:** private


**Inherits:** [Phaser.GameObjects.Components.Alpha#_alphaBL](../namespace/Phaser.GameObjects.Components.Alpha.md#_alphaBL)


> Source: [src/gameobjects/components/Alpha.js#L55](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/components/Alpha.js#L55)  
Since: 3.0.0


---

## _alphaBR

### _alphaBR: number


**Description:**

Private internal value. Holds the bottom-right alpha value.


**Access:** private


**Inherits:** [Phaser.GameObjects.Components.Alpha#_alphaBR](../namespace/Phaser.GameObjects.Components.Alpha.md#_alphaBR)


> Source: [src/gameobjects/components/Alpha.js#L66](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/components/Alpha.js#L66)  
Since: 3.0.0


---

## _alphaTL

### _alphaTL: number


**Description:**

Private internal value. Holds the top-left alpha value.


**Access:** private


**Inherits:** [Phaser.GameObjects.Components.Alpha#_alphaTL](../namespace/Phaser.GameObjects.Components.Alpha.md#_alphaTL)


> Source: [src/gameobjects/components/Alpha.js#L33](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/components/Alpha.js#L33)  
Since: 3.0.0


---

## _alphaTR

### _alphaTR: number


**Description:**

Private internal value. Holds the top-right alpha value.


**Access:** private


**Inherits:** [Phaser.GameObjects.Components.Alpha#_alphaTR](../namespace/Phaser.GameObjects.Components.Alpha.md#_alphaTR)


> Source: [src/gameobjects/components/Alpha.js#L44](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/components/Alpha.js#L44)  
Since: 3.0.0


---

## _bounds

### _bounds: [Phaser.Geom.Rectangle](../class/Phaser.Geom.Rectangle.md)


**Description:**

The bounds the camera is restrained to during scrolling.


**Access:** private


> Source: [src/cameras/2d/BaseCamera.js#L247](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L247)  
Since: 3.0.0


---

## _customViewport

### _customViewport: boolean


**Description:**

Does this Camera have a custom viewport?


**Access:** private


> Source: [src/cameras/2d/BaseCamera.js#L459](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L459)  
Since: 3.12.0


---

## _height

### _height: number


**Description:**

The height of the Camera viewport, in pixels.



The viewport is the area into which the Camera renders. Setting the viewport does

not restrict where the Camera can scroll to.


**Access:** private


> Source: [src/cameras/2d/BaseCamera.js#L234](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L234)  
Since: 3.11.0


---

## _maskCamera

### _maskCamera: [Phaser.Cameras.Scene2D.BaseCamera](../class/Phaser.Cameras.Scene2D.BaseCamera.md)


**Description:**

The Camera that this Camera uses for translation during masking.



If the mask is fixed in position this will be a reference to

the CameraManager.default instance. Otherwise, it'll be a reference

to itself.


**Access:** private


> Source: [src/cameras/2d/BaseCamera.js#L480](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L480)  
Since: 3.17.0


---

## _rotation

### _rotation: number


**Description:**

The rotation of the Camera in radians.



Camera rotation always takes place based on the Camera viewport. By default, rotation happens

in the center of the viewport. You can adjust this with the `originX` and `originY` properties.



Rotation influences the rendering of _all_ Game Objects visible by this Camera. However, it does not

rotate the Camera viewport itself, which always remains an axis-aligned rectangle.


**Access:** private


> Source: [src/cameras/2d/BaseCamera.js#L331](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L331)  
Since: 3.11.0


---

## _scrollX

### _scrollX: number


**Description:**

The horizontal scroll position of this Camera.



Change this value to cause the Camera to scroll around your Scene.



Alternatively, setting the Camera to follow a Game Object, via the `startFollow` method,

will automatically adjust the Camera scroll values accordingly.



You can set the bounds within which the Camera can scroll via the `setBounds` method.


**Access:** private


> Source: [src/cameras/2d/BaseCamera.js#L257](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L257)  
Since: 3.11.0


---

## _scrollY

### _scrollY: number


**Description:**

The vertical scroll position of this Camera.



Change this value to cause the Camera to scroll around your Scene.



Alternatively, setting the Camera to follow a Game Object, via the `startFollow` method,

will automatically adjust the Camera scroll values accordingly.



You can set the bounds within which the Camera can scroll via the `setBounds` method.


**Access:** private


> Source: [src/cameras/2d/BaseCamera.js#L275](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L275)  
Since: 3.11.0


---

## _visible

### _visible: boolean


**Description:**

Private internal value. Holds the visible value.


**Access:** private


**Inherits:** [Phaser.GameObjects.Components.Visible#_visible](../namespace/Phaser.GameObjects.Components.Visible.md#_visible)


> Source: [src/gameobjects/components/Visible.js#L20](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/components/Visible.js#L20)  
Since: 3.0.0


---

## _width

### _width: number


**Description:**

The width of the Camera viewport, in pixels.



The viewport is the area into which the Camera renders. Setting the viewport does

not restrict where the Camera can scroll to.


**Access:** private


> Source: [src/cameras/2d/BaseCamera.js#L221](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L221)  
Since: 3.11.0


---

## _x

### _x: number


**Description:**

The x position of the Camera viewport, relative to the top-left of the game canvas.

The viewport is the area into which the camera renders.

To adjust the position the camera is looking at in the game world, see the `scrollX` value.


**Access:** private


> Source: [src/cameras/2d/BaseCamera.js#L197](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L197)  
Since: 3.0.0


---

## _y

### _y: number


**Description:**

The y position of the Camera, relative to the top-left of the game canvas.

The viewport is the area into which the camera renders.

To adjust the position the camera is looking at in the game world, see the `scrollY` value.


**Access:** private


> Source: [src/cameras/2d/BaseCamera.js#L209](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L209)  
Since: 3.0.0


---

## _zoomX

### _zoomX: number


**Description:**

The Camera horizontal zoom value. Change this value to zoom in, or out of, a Scene.



A value of 0.5 would zoom the Camera out, so you can now see twice as much

of the Scene as before. A value of 2 would zoom the Camera in, so every pixel

now takes up 2 pixels when rendered.



Set to 1 to return to the default zoom level.



Be careful to never set this value to zero.


**Access:** private


> Source: [src/cameras/2d/BaseCamera.js#L293](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L293)  
Since: 3.50.0


---

## _zoomY

### _zoomY: number


**Description:**

The Camera vertical zoom value. Change this value to zoom in, or out of, a Scene.



A value of 0.5 would zoom the Camera out, so you can now see twice as much

of the Scene as before. A value of 2 would zoom the Camera in, so every pixel

now takes up 2 pixels when rendered.



Set to 1 to return to the default zoom level.



Be careful to never set this value to zero.


**Access:** private


> Source: [src/cameras/2d/BaseCamera.js#L312](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L312)  
Since: 3.50.0


---

## culledObjects

### culledObjects: Array.\<[Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md)>


**Description:**

A temporary array of culled objects.


**Access:** private


> Source: [src/cameras/2d/BaseCamera.js#L399](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L399)  
Since: 3.0.0


---

## matrix

### matrix: [Phaser.GameObjects.Components.TransformMatrix](../class/Phaser.GameObjects.Components.TransformMatrix.md)


**Description:**

A local transform matrix used for internal calculations.


**Access:** private


> Source: [src/cameras/2d/BaseCamera.js#L348](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L348)  
Since: 3.0.0


---

## rotation

### rotation: number


**Description:**

The rotation of the Camera in radians.



Camera rotation always takes place based on the Camera viewport. By default, rotation happens

in the center of the viewport. You can adjust this with the `originX` and `originY` properties.



Rotation influences the rendering of _all_ Game Objects visible by this Camera. However, it does not

rotate the Camera viewport itself, which always remains an axis-aligned rectangle.


**Access:** private


> Source: [src/cameras/2d/BaseCamera.js#L1849](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L1849)  
Since: 3.11.0


---

# Public Methods

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


**Returns:** [Phaser.Cameras.Scene2D.BaseCamera](../class/Phaser.Cameras.Scene2D.BaseCamera.md) - `this`.


**Inherits:** [Phaser.Events.EventEmitter#addListener](../class/Phaser.Events.EventEmitter.md#addListener)


> Source: [src/events/EventEmitter.js#L111](https://github.com/phaserjs/phaser/blob/v3.87.0/src/events/EventEmitter.js#L111)  
Since: 3.0.0


---

## addToRenderList

### \<instance> addToRenderList(child)


**Description:**

Adds the given Game Object to this cameras render list.



This is invoked during the rendering stage. Only objects that are actually rendered

will appear in the render list.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| child | [Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md) | No | The Game Object to add to the render list. |


> Source: [src/cameras/2d/BaseCamera.js#L538](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L538)  
Since: 3.52.0


---

## centerOn

### \<instance> centerOn(x, y)


**Description:**

Moves the Camera so that it is centered on the given coordinates, bounds allowing.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| x | number | No | The horizontal coordinate to center on. |
| y | number | No | The vertical coordinate to center on. |


**Returns:** [Phaser.Cameras.Scene2D.BaseCamera](../class/Phaser.Cameras.Scene2D.BaseCamera.md) - This Camera instance.


> Source: [src/cameras/2d/BaseCamera.js#L682](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L682)  
Since: 3.11.0


---

## centerOnX

### \<instance> centerOnX(x)


**Description:**

Moves the Camera horizontally so that it is centered on the given x coordinate, bounds allowing.

Calling this does not change the scrollY value.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| x | number | No | The horizontal coordinate to center on. |


**Returns:** [Phaser.Cameras.Scene2D.BaseCamera](../class/Phaser.Cameras.Scene2D.BaseCamera.md) - This Camera instance.


> Source: [src/cameras/2d/BaseCamera.js#L628](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L628)  
Since: 3.16.0


---

## centerOnY

### \<instance> centerOnY(y)


**Description:**

Moves the Camera vertically so that it is centered on the given y coordinate, bounds allowing.

Calling this does not change the scrollX value.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| y | number | No | The vertical coordinate to center on. |


**Returns:** [Phaser.Cameras.Scene2D.BaseCamera](../class/Phaser.Cameras.Scene2D.BaseCamera.md) - This Camera instance.


> Source: [src/cameras/2d/BaseCamera.js#L655](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L655)  
Since: 3.16.0


---

## centerToBounds

### \<instance> centerToBounds()


**Description:**

Moves the Camera so that it is looking at the center of the Camera Bounds, if enabled.


**Returns:** [Phaser.Cameras.Scene2D.BaseCamera](../class/Phaser.Cameras.Scene2D.BaseCamera.md) - This Camera instance.


> Source: [src/cameras/2d/BaseCamera.js#L701](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L701)  
Since: 3.0.0


---

## centerToSize

### \<instance> centerToSize()


**Description:**

Moves the Camera so that it is re-centered based on its viewport size.


**Returns:** [Phaser.Cameras.Scene2D.BaseCamera](../class/Phaser.Cameras.Scene2D.BaseCamera.md) - This Camera instance.


> Source: [src/cameras/2d/BaseCamera.js#L726](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L726)  
Since: 3.0.0


---

## clampX

### \<instance> clampX(x)


**Description:**

Takes an x value and checks it's within the range of the Camera bounds, adjusting if required.

Do not call this method if you are not using camera bounds.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| x | number | No | The value to horizontally scroll clamp. |


**Returns:** number - The adjusted value to use as scrollX.


> Source: [src/cameras/2d/BaseCamera.js#L931](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L931)  
Since: 3.11.0


---

## clampY

### \<instance> clampY(y)


**Description:**

Takes a y value and checks it's within the range of the Camera bounds, adjusting if required.

Do not call this method if you are not using camera bounds.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| y | number | No | The value to vertically scroll clamp. |


**Returns:** number - The adjusted value to use as scrollY.


> Source: [src/cameras/2d/BaseCamera.js#L963](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L963)  
Since: 3.11.0


---

## clearAlpha

### \<instance> clearAlpha()


**Description:**

Clears all alpha values associated with this Game Object.



Immediately sets the alpha levels back to 1 (fully opaque).


**Returns:** [Phaser.Cameras.Scene2D.BaseCamera](../class/Phaser.Cameras.Scene2D.BaseCamera.md) - This Game Object instance.


**Inherits:** [Phaser.GameObjects.Components.Alpha#clearAlpha](../namespace/Phaser.GameObjects.Components.Alpha.md#clearAlpha)


> Source: [src/gameobjects/components/Alpha.js#L77](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/components/Alpha.js#L77)  
Since: 3.0.0


---

## clearMask

### \<instance> clearMask([destroyMask])


**Description:**

Clears the mask that this Camera was using.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| destroyMask | boolean | Yes | false | Destroy the mask before clearing it? |


**Returns:** [Phaser.Cameras.Scene2D.BaseCamera](../class/Phaser.Cameras.Scene2D.BaseCamera.md) - This Camera instance.


> Source: [src/cameras/2d/BaseCamera.js#L1413](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L1413)  
Since: 3.17.0


---

## cull

### \<instance> cull(renderableObjects)


**Description:**

Takes an array of Game Objects and returns a new array featuring only those objects

visible by this camera.

**Tags:**

 - generic

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| renderableObjects | Array.\<[Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md)> | No | An array of Game Objects to cull. |


**Returns:** Array.\<[Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md)> - An array of Game Objects visible to this Camera.


> Source: [src/cameras/2d/BaseCamera.js#L742](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L742)  
Since: 3.0.0


---

## destroy

### \<instance> destroy()


**Description:**

Destroys this Camera instance and its internal properties and references.

Once destroyed you cannot use this Camera again, even if re-added to a Camera Manager.



This method is called automatically by `CameraManager.remove` if that methods `runDestroy` argument is `true`, which is the default.



Unless you have a specific reason otherwise, always use `CameraManager.remove` and allow it to handle the camera destruction,

rather than calling this method directly.


**Overrides:** Phaser.Events.EventEmitter#destroy


**Fires:** [Phaser.Cameras.Scene2D.Events#event:DESTROY](../event/Phaser.Cameras.Scene2D.Events.md#DESTROY)


> Source: [src/cameras/2d/BaseCamera.js#L1551](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L1551)  
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

## getBounds

### \<instance> getBounds([out])


**Description:**

Returns a rectangle containing the bounds of the Camera.



If the Camera does not have any bounds the rectangle will be empty.



The rectangle is a copy of the bounds, so is safe to modify.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| out | [Phaser.Geom.Rectangle](../class/Phaser.Geom.Rectangle.md) | Yes | An optional Rectangle to store the bounds in. If not given, a new Rectangle will be created. |


**Returns:** [Phaser.Geom.Rectangle](../class/Phaser.Geom.Rectangle.md) - A rectangle containing the bounds of this Camera.


> Source: [src/cameras/2d/BaseCamera.js#L1118](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L1118)  
Since: 3.16.0


---

## getScroll

### \<instance> getScroll(x, y, [out])


**Description:**

Calculates what the Camera.scrollX and scrollY values would need to be in order to move

the Camera so it is centered on the given x and y coordinates, without actually moving

the Camera there. The results are clamped based on the Camera bounds, if set.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| x | number | No | The horizontal coordinate to center on. |
| y | number | No | The vertical coordinate to center on. |
| out | [Phaser.Math.Vector2](../class/Phaser.Math.Vector2.md) | Yes | A Vector2 to store the values in. If not given a new Vector2 is created. |


**Returns:** [Phaser.Math.Vector2](../class/Phaser.Math.Vector2.md) - The scroll coordinates stored in the `x` and `y` properties.


> Source: [src/cameras/2d/BaseCamera.js#L595](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L595)  
Since: 3.11.0


---

## getWorldPoint

### \<instance> getWorldPoint(x, y, [output])


**Description:**

Converts the given `x` and `y` coordinates into World space, based on this Cameras transform.

You can optionally provide a Vector2, or similar object, to store the results in.

**Tags:**

 - generic

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| x | number | No | The x position to convert to world space. |
| y | number | No | The y position to convert to world space. |
| output | object \| [Phaser.Math.Vector2](../class/Phaser.Math.Vector2.md) | Yes | An optional object to store the results in. If not provided a new Vector2 will be created. |


**Returns:** [Phaser.Math.Vector2](../class/Phaser.Math.Vector2.md) - An object holding the converted values in its `x` and `y` properties.


> Source: [src/cameras/2d/BaseCamera.js#L823](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L823)  
Since: 3.0.0


---

## ignore

### \<instance> ignore(entries)


**Description:**

Given a Game Object, or an array of Game Objects, it will update all of their camera filter settings

so that they are ignored by this Camera. This means they will not be rendered by this Camera.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| entries | [Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md) \| Array.\<[Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md)> | [Phaser.GameObjects.Group](../class/Phaser.GameObjects.Group.md) | [Phaser.GameObjects.Layer](../class/Phaser.GameObjects.Layer.md) | Array.\<[Phaser.GameObjects.Layer](../class/Phaser.GameObjects.Layer.md)> | No | The Game Object, or array of Game Objects, to be ignored by this Camera. |


**Returns:** [Phaser.Cameras.Scene2D.BaseCamera](../class/Phaser.Cameras.Scene2D.BaseCamera.md) - This Camera instance.


> Source: [src/cameras/2d/BaseCamera.js#L890](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L890)  
Since: 3.0.0


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


**Returns:** [Phaser.Cameras.Scene2D.BaseCamera](../class/Phaser.Cameras.Scene2D.BaseCamera.md) - `this`.


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


**Returns:** [Phaser.Cameras.Scene2D.BaseCamera](../class/Phaser.Cameras.Scene2D.BaseCamera.md) - `this`.


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


**Returns:** [Phaser.Cameras.Scene2D.BaseCamera](../class/Phaser.Cameras.Scene2D.BaseCamera.md) - `this`.


**Inherits:** [Phaser.Events.EventEmitter#once](../class/Phaser.Events.EventEmitter.md#once)


> Source: [src/events/EventEmitter.js#L124](https://github.com/phaserjs/phaser/blob/v3.87.0/src/events/EventEmitter.js#L124)  
Since: 3.0.0


---

## removeAllListeners

### \<instance> removeAllListeners([event])


**Description:**

Remove all listeners, or those of the specified event.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| event | string \| symbol | Yes | The event name. |


**Returns:** [Phaser.Cameras.Scene2D.BaseCamera](../class/Phaser.Cameras.Scene2D.BaseCamera.md) - `this`.


**Inherits:** [Phaser.Events.EventEmitter#removeAllListeners](../class/Phaser.Events.EventEmitter.md#removeAllListeners)


> Source: [src/events/EventEmitter.js#L165](https://github.com/phaserjs/phaser/blob/v3.87.0/src/events/EventEmitter.js#L165)  
Since: 3.0.0


---

## removeBounds

### \<instance> removeBounds()


**Description:**

If this Camera has previously had movement bounds set on it, this will remove them.


**Returns:** [Phaser.Cameras.Scene2D.BaseCamera](../class/Phaser.Cameras.Scene2D.BaseCamera.md) - This Camera instance.


> Source: [src/cameras/2d/BaseCamera.js#L1000](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L1000)  
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


**Returns:** [Phaser.Cameras.Scene2D.BaseCamera](../class/Phaser.Cameras.Scene2D.BaseCamera.md) - `this`.


**Inherits:** [Phaser.Events.EventEmitter#removeListener](../class/Phaser.Events.EventEmitter.md#removeListener)


> Source: [src/events/EventEmitter.js#L137](https://github.com/phaserjs/phaser/blob/v3.87.0/src/events/EventEmitter.js#L137)  
Since: 3.0.0


---

## setAlpha

### \<instance> setAlpha([value])


**Description:**

Set the Alpha level of this Camera. The alpha controls the opacity of the Camera as it renders.

Alpha values are provided as a float between 0, fully transparent, and 1, fully opaque.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| value | number | Yes | 1 | The Camera alpha value. |


**Overrides:** Phaser.GameObjects.Components.Alpha#setAlpha


**Returns:** [Phaser.Cameras.Scene2D.BaseCamera](../class/Phaser.Cameras.Scene2D.BaseCamera.md) - This Camera instance.


> Source: [src/cameras/2d/BaseCamera.js#L554](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L554)  
Since: 3.11.0


---

## setAngle

### \<instance> setAngle([value])


**Description:**

Set the rotation of this Camera. This causes everything it renders to appear rotated.



Rotating a camera does not rotate the viewport itself, it is applied during rendering.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| value | number | Yes | 0 | The cameras angle of rotation, given in degrees. |


**Returns:** [Phaser.Cameras.Scene2D.BaseCamera](../class/Phaser.Cameras.Scene2D.BaseCamera.md) - This Camera instance.


> Source: [src/cameras/2d/BaseCamera.js#L1019](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L1019)  
Since: 3.0.0


---

## setBackgroundColor

### \<instance> setBackgroundColor([color])


**Description:**

Sets the background color for this Camera.



By default a Camera has a transparent background but it can be given a solid color, with any level

of transparency, via this method.



The color value can be specified using CSS color notation, hex or numbers.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| color | string \| number | [Phaser.Types.Display.InputColorObject](../typedef/Phaser.Types.Display.md#InputColorObject) | Yes | "'rgba(0,0,0,0)'" | The color value. In CSS, hex or numeric color notation. |


**Returns:** [Phaser.Cameras.Scene2D.BaseCamera](../class/Phaser.Cameras.Scene2D.BaseCamera.md) - This Camera instance.


> Source: [src/cameras/2d/BaseCamera.js#L1040](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L1040)  
Since: 3.0.0


---

## setBounds

### \<instance> setBounds(x, y, width, height, [centerOn])


**Description:**

Set the bounds of the Camera. The bounds are an axis-aligned rectangle.



The Camera bounds controls where the Camera can scroll to, stopping it from scrolling off the

edges and into blank space. It does not limit the placement of Game Objects, or where

the Camera viewport can be positioned.



Temporarily disable the bounds by changing the boolean `Camera.useBounds`.



Clear the bounds entirely by calling `Camera.removeBounds`.



If you set bounds that are smaller than the viewport it will stop the Camera from being

able to scroll. The bounds can be positioned where-ever you wish. By default they are from

0x0 to the canvas width x height. This means that the coordinate 0x0 is the top left of

the Camera bounds. However, you can position them anywhere. So if you wanted a game world

that was 2048x2048 in size, with 0x0 being the center of it, you can set the bounds x/y

to be -1024, -1024, with a width and height of 2048. Depending on your game you may find

it easier for 0x0 to be the top-left of the bounds, or you may wish 0x0 to be the middle.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| x | number | No |  | The top-left x coordinate of the bounds. |
| y | number | No |  | The top-left y coordinate of the bounds. |
| width | number | No |  | The width of the bounds, in pixels. |
| height | number | No |  | The height of the bounds, in pixels. |
| centerOn | boolean | Yes | false | If `true` the Camera will automatically be centered on the new bounds. |


**Returns:** [Phaser.Cameras.Scene2D.BaseCamera](../class/Phaser.Cameras.Scene2D.BaseCamera.md) - This Camera instance.


> Source: [src/cameras/2d/BaseCamera.js#L1066](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L1066)  
Since: 3.0.0


---

## setIsSceneCamera

### \<instance> setIsSceneCamera(value)


**Description:**

Set if this Camera is being used as a Scene Camera, or a Texture

Camera.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| value | boolean | No | Is this being used as a Scene Camera, or a Texture camera? |


> Source: [src/cameras/2d/BaseCamera.js#L1502](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L1502)  
Since: 3.60.0


---

## setMask

### \<instance> setMask(mask, [fixedPosition])


**Description:**

Sets the mask to be applied to this Camera during rendering.



The mask must have been previously created and can be either a GeometryMask or a BitmapMask.



Bitmap Masks only work on WebGL. Geometry Masks work on both WebGL and Canvas.



If a mask is already set on this Camera it will be immediately replaced.



Masks have no impact on physics or input detection. They are purely a rendering component

that allows you to limit what is visible during the render pass.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| mask | [Phaser.Display.Masks.BitmapMask](../class/Phaser.Display.Masks.BitmapMask.md) \| [Phaser.Display.Masks.GeometryMask](../class/Phaser.Display.Masks.GeometryMask.md) | No |  | The mask this Camera will use when rendering. |
| fixedPosition | boolean | Yes | true | Should the mask translate along with the Camera, or be fixed in place and not impacted by the Cameras transform? |


**Returns:** [Phaser.Cameras.Scene2D.BaseCamera](../class/Phaser.Cameras.Scene2D.BaseCamera.md) - This Camera instance.


> Source: [src/cameras/2d/BaseCamera.js#L1382](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L1382)  
Since: 3.17.0


---

## setName

### \<instance> setName([value])


**Description:**

Sets the name of this Camera.

This value is for your own use and isn't used internally.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| value | string | Yes | "''" | The name of the Camera. |


**Returns:** [Phaser.Cameras.Scene2D.BaseCamera](../class/Phaser.Cameras.Scene2D.BaseCamera.md) - This Camera instance.


> Source: [src/cameras/2d/BaseCamera.js#L1143](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L1143)  
Since: 3.0.0


---

## setOrigin

### \<instance> setOrigin([x], [y])


**Description:**

Sets the rotation origin of this Camera.



The values are given in the range 0 to 1 and are only used when calculating Camera rotation.



By default the camera rotates around the center of the viewport.



Changing the origin allows you to adjust the point in the viewport from which rotation happens.

A value of 0 would rotate from the top-left of the viewport. A value of 1 from the bottom right.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| x | number | Yes | 0.5 | The horizontal origin value. |
| y | number | Yes | "x" | The vertical origin value. If not defined it will be set to the value of `x`. |


**Returns:** [Phaser.Cameras.Scene2D.BaseCamera](../class/Phaser.Cameras.Scene2D.BaseCamera.md) - This Camera instance.


> Source: [src/cameras/2d/BaseCamera.js#L566](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L566)  
Since: 3.11.0


---

## setPosition

### \<instance> setPosition(x, [y])


**Description:**

Set the position of the Camera viewport within the game.



This does not change where the camera is 'looking'. See `setScroll` to control that.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| x | number | No |  | The top-left x coordinate of the Camera viewport. |
| y | number | Yes | "x" | The top-left y coordinate of the Camera viewport. |


**Returns:** [Phaser.Cameras.Scene2D.BaseCamera](../class/Phaser.Cameras.Scene2D.BaseCamera.md) - This Camera instance.


> Source: [src/cameras/2d/BaseCamera.js#L1163](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L1163)  
Since: 3.0.0


---

## setRotation

### \<instance> setRotation([value])


**Description:**

Set the rotation of this Camera. This causes everything it renders to appear rotated.



Rotating a camera does not rotate the viewport itself, it is applied during rendering.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| value | number | Yes | 0 | The rotation of the Camera, in radians. |


**Returns:** [Phaser.Cameras.Scene2D.BaseCamera](../class/Phaser.Cameras.Scene2D.BaseCamera.md) - This Camera instance.


> Source: [src/cameras/2d/BaseCamera.js#L1186](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L1186)  
Since: 3.0.0


---

## setRoundPixels

### \<instance> setRoundPixels(value)


**Description:**

Should the Camera round pixel values to whole integers when rendering Game Objects?



In some types of game, especially with pixel art, this is required to prevent sub-pixel aliasing.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| value | boolean | No | `true` to round Camera pixels, `false` to not. |


**Returns:** [Phaser.Cameras.Scene2D.BaseCamera](../class/Phaser.Cameras.Scene2D.BaseCamera.md) - This Camera instance.


> Source: [src/cameras/2d/BaseCamera.js#L1207](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L1207)  
Since: 3.0.0


---

## setScene

### \<instance> setScene(scene, [isSceneCamera])


**Description:**

Sets the Scene the Camera is bound to.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| scene | [Phaser.Scene](../class/Phaser.Scene.md) | No |  | The Scene the camera is bound to. |
| isSceneCamera | boolean | Yes | true | Is this Camera being used for a Scene (true) or a Texture? (false) |


**Returns:** [Phaser.Cameras.Scene2D.BaseCamera](../class/Phaser.Cameras.Scene2D.BaseCamera.md) - This Camera instance.


> Source: [src/cameras/2d/BaseCamera.js#L1226](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L1226)  
Since: 3.0.0


---

## setScroll

### \<instance> setScroll(x, [y])


**Description:**

Set the position of where the Camera is looking within the game.

You can also modify the properties `Camera.scrollX` and `Camera.scrollY` directly.

Use this method, or the scroll properties, to move your camera around the game world.



This does not change where the camera viewport is placed. See `setPosition` to control that.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| x | number | No |  | The x coordinate of the Camera in the game world. |
| y | number | Yes | "x" | The y coordinate of the Camera in the game world. |


**Returns:** [Phaser.Cameras.Scene2D.BaseCamera](../class/Phaser.Cameras.Scene2D.BaseCamera.md) - This Camera instance.


> Source: [src/cameras/2d/BaseCamera.js#L1260](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L1260)  
Since: 3.0.0


---

## setSize

### \<instance> setSize(width, [height])


**Description:**

Set the size of the Camera viewport.



By default a Camera is the same size as the game, but can be made smaller via this method,

allowing you to create mini-cam style effects by creating and positioning a smaller Camera

viewport within your game.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| width | number | No |  | The width of the Camera viewport. |
| height | number | Yes | "width" | The height of the Camera viewport. |


**Returns:** [Phaser.Cameras.Scene2D.BaseCamera](../class/Phaser.Cameras.Scene2D.BaseCamera.md) - This Camera instance.


> Source: [src/cameras/2d/BaseCamera.js#L1285](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L1285)  
Since: 3.0.0


---

## setViewport

### \<instance> setViewport(x, y, width, [height])


**Description:**

This method sets the position and size of the Camera viewport in a single call.



If you're trying to change where the Camera is looking at in your game, then see

the method `Camera.setScroll` instead. This method is for changing the viewport

itself, not what the camera can see.



By default a Camera is the same size as the game, but can be made smaller via this method,

allowing you to create mini-cam style effects by creating and positioning a smaller Camera

viewport within your game.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| x | number | No |  | The top-left x coordinate of the Camera viewport. |
| y | number | No |  | The top-left y coordinate of the Camera viewport. |
| width | number | No |  | The width of the Camera viewport. |
| height | number | Yes | "width" | The height of the Camera viewport. |


**Returns:** [Phaser.Cameras.Scene2D.BaseCamera](../class/Phaser.Cameras.Scene2D.BaseCamera.md) - This Camera instance.


> Source: [src/cameras/2d/BaseCamera.js#L1310](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L1310)  
Since: 3.0.0


---

## setVisible

### \<instance> setVisible(value)


**Description:**

Sets the visibility of this Camera.



An invisible Camera will skip rendering and input tests of everything it can see.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| value | boolean | No | The visible state of the Camera. |


**Overrides:** Phaser.GameObjects.Components.Visible#setVisible


**Returns:** [Phaser.Cameras.Scene2D.BaseCamera](../class/Phaser.Cameras.Scene2D.BaseCamera.md) - This Camera instance.


> Source: [src/cameras/2d/BaseCamera.js#L1437](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L1437)  
Since: 3.10.0


---

## setZoom

### \<instance> setZoom([x], [y])


**Description:**

Set the zoom value of the Camera.



Changing to a smaller value, such as 0.5, will cause the camera to 'zoom out'.

Changing to a larger value, such as 2, will cause the camera to 'zoom in'.



A value of 1 means 'no zoom' and is the default.



Changing the zoom does not impact the Camera viewport in any way, it is only applied during rendering.



As of Phaser 3.50 you can now set the horizontal and vertical zoom values independently.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| x | number | Yes | 1 | The horizontal zoom value of the Camera. The minimum it can be is 0.001. |
| y | number | Yes | "x" | The vertical zoom value of the Camera. The minimum it can be is 0.001. |


**Returns:** [Phaser.Cameras.Scene2D.BaseCamera](../class/Phaser.Cameras.Scene2D.BaseCamera.md) - This Camera instance.


> Source: [src/cameras/2d/BaseCamera.js#L1341](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L1341)  
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

## toJSON

### \<instance> toJSON()


**Description:**

Returns an Object suitable for JSON storage containing all of the Camera viewport and rendering properties.


**Returns:** [Phaser.Types.Cameras.Scene2D.JSONCamera](../typedef/Phaser.Types.Cameras.Scene2D.md#JSONCamera) - A well-formed object suitable for conversion to JSON.


> Source: [src/cameras/2d/BaseCamera.js#L1450](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L1450)  
Since: 3.0.0


---

## update

### \<instance> update(time, delta)


**Description:**

Internal method called automatically by the Camera Manager.


**Access:** protected

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| time | number | No | The current timestamp as generated by the Request Animation Frame or SetTimeout. |
| delta | number | No | The delta time, in ms, elapsed since the last frame. |


> Source: [src/cameras/2d/BaseCamera.js#L1487](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L1487)  
Since: 3.0.0


---

# Private Methods

## updateSystem

### \<instance> updateSystem()


**Description:**

Internal method called automatically when the viewport changes.


**Access:** private


> Source: [src/cameras/2d/BaseCamera.js#L1518](https://github.com/phaserjs/phaser/blob/v3.87.0/src/cameras/2d/BaseCamera.js#L1518)  
Since: 3.12.0


---

