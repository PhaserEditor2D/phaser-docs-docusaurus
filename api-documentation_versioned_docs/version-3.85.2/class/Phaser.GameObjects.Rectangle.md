---
visibility: public
slug: class/gameobjects-rectangle
title: Rectangle
description: Phaser.GameObjects.Rectangle
seoTitle: Phaser.GameObjects.Rectangle
seoDescription: Phaser v3.85.2 Documentation for Phaser.GameObjects.Rectangle
ogImage: 
---


The Rectangle Shape is a Game Object that can be added to a Scene, Group or Container. You can
treat it like any other Game Object in your game, such as tweening it, scaling it, or enabling
it for input or physics. It provides a quick and easy way for you to render this shape in your
game without using a texture, while still taking advantage of being fully batched in WebGL.

This shape supports both fill and stroke colors.

You can change the size of the rectangle by changing the `width` and `height` properties.

**Constructor**

`new Rectangle(scene, x, y, [width], [height], [fillColor], [fillAlpha])`

**Parameters**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| scene | [Phaser.Scene](../class/Phaser.Scene.md) | No |  | The Scene to which this Game Object belongs. A Game Object can only belong to one Scene at a time. |
| x | number | No |  | The horizontal position of this Game Object in the world. |
| y | number | No |  | The vertical position of this Game Object in the world. |
| width | number | Yes | 128 | The width of the rectangle. |
| height | number | Yes | 128 | The height of the rectangle. |
| fillColor | number | Yes |  | The color the rectangle will be filled with, i.e. 0xff0000 for red. |
| fillAlpha | number | Yes |  | The alpha the rectangle will be filled with. You can also set the alpha of the overall Shape using its `alpha` property. |

---


**Scope**: static


**Extends**

> [Phaser.GameObjects.Shape](../class/Phaser.GameObjects.Shape.md)  



> Source: [src/gameobjects/shape/rectangle/Rectangle.js#L12](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/shape/rectangle/Rectangle.js#L12)  
Since: 3.13.0

# Public Methods

## addedToScene

### \<instance> addedToScene()


**Description:**

This callback is invoked when this Game Object is added to a Scene.

Can be overriden by custom Game Objects, but be aware of some Game Objects that
will use this, such as Sprites, to add themselves into the Update List.

You can also listen for the `ADDED_TO_SCENE` event from this Game Object.


**Inherits:** [Phaser.GameObjects.GameObject#addedToScene](../class/Phaser.GameObjects.GameObject.md#addedToScene)


> Source: [src/gameobjects/GameObject.js#L562](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/GameObject.js#L562)  
Since: 3.50.0


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


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - `this`.


**Inherits:** [Phaser.Events.EventEmitter#addListener](../class/Phaser.Events.EventEmitter.md#addListener)


> Source: [src/events/EventEmitter.js#L111](https://github.com/phaserjs/phaser/blob/v3.85.2/src/events/EventEmitter.js#L111)  
Since: 3.0.0


---

## addToDisplayList

### \<instance> addToDisplayList([displayList])


**Description:**

Adds this Game Object to the given Display List.

If no Display List is specified, it will default to the Display List owned by the Scene to which
this Game Object belongs.

A Game Object can only exist on one Display List at any given time, but may move freely between them.

If this Game Object is already on another Display List when this method is called, it will first
be removed from it, before being added to the new list.

You can query which list it is on by looking at the `Phaser.GameObjects.GameObject#displayList` property.

If a Game Object isn't on any display list, it will not be rendered. If you just wish to temporarly
disable it from rendering, consider using the `setVisible` method, instead.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| displayList | [Phaser.GameObjects.DisplayList](../class/Phaser.GameObjects.DisplayList.md) \| [Phaser.GameObjects.Layer](../class/Phaser.GameObjects.Layer.md) | Yes | The Display List to add to. Defaults to the Scene Display List. |


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This Game Object.


**Fires:** [Phaser.Scenes.Events#event:ADDED_TO_SCENE](../event/Phaser.Scenes.Events.md#ADDED_TO_SCENE), [Phaser.GameObjects.Events#event:ADDED_TO_SCENE](../event/Phaser.GameObjects.Events.md#ADDED_TO_SCENE)


**Inherits:** [Phaser.GameObjects.GameObject#addToDisplayList](../class/Phaser.GameObjects.GameObject.md#addToDisplayList)


> Source: [src/gameobjects/GameObject.js#L684](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/GameObject.js#L684)  
Since: 3.53.0


---

## addToUpdateList

### \<instance> addToUpdateList()


**Description:**

Adds this Game Object to the Update List belonging to the Scene.

When a Game Object is added to the Update List it will have its `preUpdate` method called
every game frame. This method is passed two parameters: `delta` and `time`.

If you wish to run your own logic within `preUpdate` then you should always call
`super.preUpdate(delta, time)` within it, or it may fail to process required operations,
such as Sprite animations.


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This Game Object.


**Inherits:** [Phaser.GameObjects.GameObject#addToUpdateList](../class/Phaser.GameObjects.GameObject.md#addToUpdateList)


> Source: [src/gameobjects/GameObject.js#L735](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/GameObject.js#L735)  
Since: 3.53.0


---

## clearAlpha

### \<instance> clearAlpha()


**Description:**

Clears all alpha values associated with this Game Object.

Immediately sets the alpha levels back to 1 (fully opaque).


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This Game Object instance.


**Inherits:** [Phaser.GameObjects.Components.AlphaSingle#clearAlpha](../namespace/Phaser.GameObjects.Components.AlphaSingle.md#clearAlpha)


> Source: [src/gameobjects/components/AlphaSingle.js#L33](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/AlphaSingle.js#L33)  
Since: 3.0.0


---

## clearFX

### \<instance> clearFX()


**Description:**

Removes all Pre and Post FX Controllers from this Game Object.

If you wish to remove a single controller, use the `preFX.remove(fx)` or `postFX.remove(fx)` methods instead.

If you wish to clear a single controller, use the `preFX.clear()` or `postFX.clear()` methods instead.

**Tags:**

 - webglOnly


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This Game Object.


**Inherits:** [Phaser.GameObjects.Components.PostPipeline#clearFX](../namespace/Phaser.GameObjects.Components.PostPipeline.md#clearFX)


> Source: [src/gameobjects/components/PostPipeline.js#L337](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/PostPipeline.js#L337)  
Since: 3.60.0


---

## clearMask

### \<instance> clearMask([destroyMask])


**Description:**

Clears the mask that this Game Object was using.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| destroyMask | boolean | Yes | false | Destroy the mask before clearing it? |


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This Game Object instance.


**Inherits:** [Phaser.GameObjects.Components.Mask#clearMask](../namespace/Phaser.GameObjects.Components.Mask.md#clearMask)


> Source: [src/gameobjects/components/Mask.js#L56](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Mask.js#L56)  
Since: 3.6.2


---

## copyPosition

### \<instance> copyPosition(source)


**Description:**

Copies an object's coordinates to this Game Object's position.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| source | [Phaser.Types.Math.Vector2Like](../typedef/Phaser.Types.Math.md#Vector2Like) \| [Phaser.Types.Math.Vector3Like](../typedef/Phaser.Types.Math.md#Vector3Like) | [Phaser.Types.Math.Vector4Like](../typedef/Phaser.Types.Math.md#Vector4Like) | No | An object with numeric 'x', 'y', 'z', or 'w' properties. Undefined values are not copied. |


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This Game Object instance.


**Inherits:** [Phaser.GameObjects.Components.Transform#copyPosition](../namespace/Phaser.GameObjects.Components.Transform.md#copyPosition)


> Source: [src/gameobjects/components/Transform.js#L293](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Transform.js#L293)  
Since: 3.50.0


---

## createBitmapMask

### \<instance> createBitmapMask([maskObject], [x], [y], [texture], [frame])


**Description:**

Creates and returns a Bitmap Mask. This mask can be used by any Game Object,
including this one, or a Dynamic Texture.

Note: Bitmap Masks only work on WebGL. Geometry Masks work on both WebGL and Canvas.

To create the mask you need to pass in a reference to a renderable Game Object.
A renderable Game Object is one that uses a texture to render with, such as an
Image, Sprite, Render Texture or BitmapText.

If you do not provide a renderable object, and this Game Object has a texture,
it will use itself as the object. This means you can call this method to create
a Bitmap Mask from any renderable texture-based Game Object.

**Tags:**

 - generic
 - generic
 - genericUse

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| maskObject | [Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md) \| [Phaser.Textures.DynamicTexture](../class/Phaser.Textures.DynamicTexture.md) | Yes | The Game Object or Dynamic Texture that will be used as the mask. If `null` it will generate an Image Game Object using the rest of the arguments. |
| x | number | Yes | If creating a Game Object, the horizontal position in the world. |
| y | number | Yes | If creating a Game Object, the vertical position in the world. |
| texture | string \| [Phaser.Textures.Texture](../class/Phaser.Textures.Texture.md) | Yes | If creating a Game Object, the key, or instance of the Texture it will use to render with, as stored in the Texture Manager. |
| frame | string \| number | [Phaser.Textures.Frame](../class/Phaser.Textures.Frame.md) | Yes | If creating a Game Object, an optional frame from the Texture this Game Object is rendering with. |


**Returns:** [Phaser.Display.Masks.BitmapMask](../class/Phaser.Display.Masks.BitmapMask.md) - This Bitmap Mask that was created.


**Inherits:** [Phaser.GameObjects.Components.Mask#createBitmapMask](../namespace/Phaser.GameObjects.Components.Mask.md#createBitmapMask)


> Source: [src/gameobjects/components/Mask.js#L80](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Mask.js#L80)  
Since: 3.6.2


---

## createGeometryMask

### \<instance> createGeometryMask([graphics])


**Description:**

Creates and returns a Geometry Mask. This mask can be used by any Game Object,
including this one.

To create the mask you need to pass in a reference to a Graphics Game Object.

If you do not provide a graphics object, and this Game Object is an instance
of a Graphics object, then it will use itself to create the mask.

This means you can call this method to create a Geometry Mask from any Graphics Game Object.

**Tags:**

 - generic
 - generic
 - genericUse

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| graphics | [Phaser.GameObjects.Graphics](../class/Phaser.GameObjects.Graphics.md) \| [Phaser.GameObjects.Shape](../class/Phaser.GameObjects.Shape.md) | Yes | A Graphics Game Object, or any kind of Shape Game Object. The geometry within it will be used as the mask. |


**Returns:** [Phaser.Display.Masks.GeometryMask](../class/Phaser.Display.Masks.GeometryMask.md) - This Geometry Mask that was created.


**Inherits:** [Phaser.GameObjects.Components.Mask#createGeometryMask](../namespace/Phaser.GameObjects.Components.Mask.md#createGeometryMask)


> Source: [src/gameobjects/components/Mask.js#L120](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Mask.js#L120)  
Since: 3.6.2


---

## destroy

### \<instance> destroy([fromScene])


**Description:**

Destroys this Game Object removing it from the Display List and Update List and
severing all ties to parent resources.

Also removes itself from the Input Manager and Physics Manager if previously enabled.

Use this to remove a Game Object from your game if you don't ever plan to use it again.
As long as no reference to it exists within your own code it should become free for
garbage collection by the browser.

If you just want to temporarily disable an object then look at using the
Game Object Pool instead of destroying it, as destroyed objects cannot be resurrected.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| fromScene | boolean | Yes | false | `True` if this Game Object is being destroyed by the Scene, `false` if not. |


**Fires:** [Phaser.GameObjects.Events#event:DESTROY](../event/Phaser.GameObjects.Events.md#DESTROY)


**Inherits:** [Phaser.GameObjects.GameObject#destroy](../class/Phaser.GameObjects.GameObject.md#destroy)


> Source: [src/gameobjects/GameObject.js#L855](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/GameObject.js#L855)  
Since: 3.0.0


---

## disableInteractive

### \<instance> disableInteractive([resetCursor])


**Description:**

If this Game Object has previously been enabled for input, this will disable it.

An object that is disabled for input stops processing or being considered for
input events, but can be turned back on again at any time by simply calling
`setInteractive()` with no arguments provided.

If want to completely remove interaction from this Game Object then use `removeInteractive` instead.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| resetCursor | boolean | Yes | false | Should the currently active Input cursor, if any, be reset to the default cursor? |


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This GameObject.


**Inherits:** [Phaser.GameObjects.GameObject#disableInteractive](../class/Phaser.GameObjects.GameObject.md#disableInteractive)


> Source: [src/gameobjects/GameObject.js#L494](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/GameObject.js#L494)  
Since: 3.7.0


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


> Source: [src/events/EventEmitter.js#L86](https://github.com/phaserjs/phaser/blob/v3.85.2/src/events/EventEmitter.js#L86)  
Since: 3.0.0


---

## eventNames

### \<instance> eventNames()


**Description:**

Return an array listing the events for which the emitter has registered listeners.


**Returns:** Array.\<(string | symbol)> - undefined


**Inherits:** [Phaser.Events.EventEmitter#eventNames](../class/Phaser.Events.EventEmitter.md#eventNames)


> Source: [src/events/EventEmitter.js#L55](https://github.com/phaserjs/phaser/blob/v3.85.2/src/events/EventEmitter.js#L55)  
Since: 3.0.0


---

## getBottomCenter

### \<instance> getBottomCenter([output], [includeParent])


**Description:**

Gets the bottom-center coordinate of this Game Object, regardless of origin.

The returned point is calculated in local space and does not factor in any parent Containers,
unless the `includeParent` argument is set to `true`.

**Tags:**

 - generic

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| output | [Phaser.Types.Math.Vector2Like](../typedef/Phaser.Types.Math.md#Vector2Like) | Yes |  | An object to store the values in. If not provided a new Vector2 will be created. |
| includeParent | boolean | Yes | false | If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? |


**Returns:** [Phaser.Types.Math.Vector2Like](../typedef/Phaser.Types.Math.md#Vector2Like) - The values stored in the output object.


**Inherits:** [Phaser.GameObjects.Components.GetBounds#getBottomCenter](../namespace/Phaser.GameObjects.Components.GetBounds.md#getBottomCenter)


> Source: [src/gameobjects/components/GetBounds.js#L236](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/GetBounds.js#L236)  
Since: 3.18.0


---

## getBottomLeft

### \<instance> getBottomLeft([output], [includeParent])


**Description:**

Gets the bottom-left corner coordinate of this Game Object, regardless of origin.

The returned point is calculated in local space and does not factor in any parent Containers,
unless the `includeParent` argument is set to `true`.

**Tags:**

 - generic

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| output | [Phaser.Types.Math.Vector2Like](../typedef/Phaser.Types.Math.md#Vector2Like) | Yes |  | An object to store the values in. If not provided a new Vector2 will be created. |
| includeParent | boolean | Yes | false | If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? |


**Returns:** [Phaser.Types.Math.Vector2Like](../typedef/Phaser.Types.Math.md#Vector2Like) - The values stored in the output object.


**Inherits:** [Phaser.GameObjects.Components.GetBounds#getBottomLeft](../namespace/Phaser.GameObjects.Components.GetBounds.md#getBottomLeft)


> Source: [src/gameobjects/components/GetBounds.js#L210](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/GetBounds.js#L210)  
Since: 3.0.0


---

## getBottomRight

### \<instance> getBottomRight([output], [includeParent])


**Description:**

Gets the bottom-right corner coordinate of this Game Object, regardless of origin.

The returned point is calculated in local space and does not factor in any parent Containers,
unless the `includeParent` argument is set to `true`.

**Tags:**

 - generic

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| output | [Phaser.Types.Math.Vector2Like](../typedef/Phaser.Types.Math.md#Vector2Like) | Yes |  | An object to store the values in. If not provided a new Vector2 will be created. |
| includeParent | boolean | Yes | false | If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? |


**Returns:** [Phaser.Types.Math.Vector2Like](../typedef/Phaser.Types.Math.md#Vector2Like) - The values stored in the output object.


**Inherits:** [Phaser.GameObjects.Components.GetBounds#getBottomRight](../namespace/Phaser.GameObjects.Components.GetBounds.md#getBottomRight)


> Source: [src/gameobjects/components/GetBounds.js#L262](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/GetBounds.js#L262)  
Since: 3.0.0


---

## getBounds

### \<instance> getBounds([output])


**Description:**

Gets the bounds of this Game Object, regardless of origin.

The values are stored and returned in a Rectangle, or Rectangle-like, object.

**Tags:**

 - generic

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| output | [Phaser.Geom.Rectangle](../class/Phaser.Geom.Rectangle.md) \| object | Yes | An object to store the values in. If not provided a new Rectangle will be created. |


**Returns:** [Phaser.Geom.Rectangle](../class/Phaser.Geom.Rectangle.md), object - The values stored in the output object.


**Inherits:** [Phaser.GameObjects.Components.GetBounds#getBounds](../namespace/Phaser.GameObjects.Components.GetBounds.md#getBounds)


> Source: [src/gameobjects/components/GetBounds.js#L288](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/GetBounds.js#L288)  
Since: 3.0.0


---

## getCenter

### \<instance> getCenter([output], [includeParent])


**Description:**

Gets the center coordinate of this Game Object, regardless of origin.

The returned point is calculated in local space and does not factor in any parent Containers,
unless the `includeParent` argument is set to `true`.

**Tags:**

 - generic

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| output | [Phaser.Types.Math.Vector2Like](../typedef/Phaser.Types.Math.md#Vector2Like) | Yes |  | An object to store the values in. If not provided a new Vector2 will be created. |
| includeParent | boolean | Yes | false | If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? |


**Returns:** [Phaser.Types.Math.Vector2Like](../typedef/Phaser.Types.Math.md#Vector2Like) - The values stored in the output object.


**Inherits:** [Phaser.GameObjects.Components.GetBounds#getCenter](../namespace/Phaser.GameObjects.Components.GetBounds.md#getCenter)


> Source: [src/gameobjects/components/GetBounds.js#L54](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/GetBounds.js#L54)  
Since: 3.0.0


---

## getData

### \<instance> getData(key)


**Description:**

Retrieves the value for the given key in this Game Objects Data Manager, or undefined if it doesn't exist.

You can also access values via the `values` object. For example, if you had a key called `gold` you can do either:

```javascript
sprite.getData('gold');
```

Or access the value directly:

```javascript
sprite.data.values.gold;
```

You can also pass in an array of keys, in which case an array of values will be returned:

```javascript
sprite.getData([ 'gold', 'armor', 'health' ]);
```

This approach is useful for destructuring arrays in ES6.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| key | string \| Array.\<string> | No | The key of the value to retrieve, or an array of keys. |


**Returns:** * - The value belonging to the given key, or an array of values, the order of which will match the input array.


**Inherits:** [Phaser.GameObjects.GameObject#getData](../class/Phaser.GameObjects.GameObject.md#getData)


> Source: [src/gameobjects/GameObject.js#L416](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/GameObject.js#L416)  
Since: 3.0.0


---

## getDisplayList

### \<instance> getDisplayList()


**Description:**

Returns a reference to the underlying display list _array_ that contains this Game Object,
which will be either the Scene's Display List or the internal list belonging
to its parent Container, if it has one.

If this Game Object is not on a display list or in a container, it will return `null`.

You should be very careful with this method, and understand that it returns a direct reference to the
internal array used by the Display List. Mutating this array directly can cause all kinds of subtle
and difficult to debug issues in your game.


**Returns:** Array.\<[Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md)> - The internal Display List array of Game Objects, or `null`.


**Inherits:** [Phaser.GameObjects.GameObject#getDisplayList](../class/Phaser.GameObjects.GameObject.md#getDisplayList)


> Source: [src/gameobjects/GameObject.js#L823](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/GameObject.js#L823)  
Since: 3.85.0


---

## getIndexList

### \<instance> getIndexList()


**Description:**

Returns an array containing the display list index of either this Game Object, or if it has one,
its parent Container. It then iterates up through all of the parent containers until it hits the
root of the display list (which is index 0 in the returned array).

Used internally by the InputPlugin but also useful if you wish to find out the display depth of
this Game Object and all of its ancestors.


**Returns:** Array.\<number> - An array of display list position indexes.


**Inherits:** [Phaser.GameObjects.GameObject#getIndexList](../class/Phaser.GameObjects.GameObject.md#getIndexList)


> Source: [src/gameobjects/GameObject.js#L635](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/GameObject.js#L635)  
Since: 3.4.0


---

## getLeftCenter

### \<instance> getLeftCenter([output], [includeParent])


**Description:**

Gets the left-center coordinate of this Game Object, regardless of origin.

The returned point is calculated in local space and does not factor in any parent Containers,
unless the `includeParent` argument is set to `true`.

**Tags:**

 - generic

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| output | [Phaser.Types.Math.Vector2Like](../typedef/Phaser.Types.Math.md#Vector2Like) | Yes |  | An object to store the values in. If not provided a new Vector2 will be created. |
| includeParent | boolean | Yes | false | If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? |


**Returns:** [Phaser.Types.Math.Vector2Like](../typedef/Phaser.Types.Math.md#Vector2Like) - The values stored in the output object.


**Inherits:** [Phaser.GameObjects.Components.GetBounds#getLeftCenter](../namespace/Phaser.GameObjects.Components.GetBounds.md#getLeftCenter)


> Source: [src/gameobjects/components/GetBounds.js#L158](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/GetBounds.js#L158)  
Since: 3.18.0


---

## getLocalPoint

### \<instance> getLocalPoint(x, y, [point], [camera])


**Description:**

Takes the given `x` and `y` coordinates and converts them into local space for this
Game Object, taking into account parent and local transforms, and the Display Origin.

The returned Vector2 contains the translated point in its properties.

A Camera needs to be provided in order to handle modified scroll factors. If no
camera is specified, it will use the `main` camera from the Scene to which this
Game Object belongs.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| x | number | No | The x position to translate. |
| y | number | No | The y position to translate. |
| point | [Phaser.Math.Vector2](../class/Phaser.Math.Vector2.md) | Yes | A Vector2, or point-like object, to store the results in. |
| camera | [Phaser.Cameras.Scene2D.Camera](../class/Phaser.Cameras.Scene2D.Camera.md) | Yes | The Camera which is being tested against. If not given will use the Scene default camera. |


**Returns:** [Phaser.Math.Vector2](../class/Phaser.Math.Vector2.md) - The translated point.


**Inherits:** [Phaser.GameObjects.Components.Transform#getLocalPoint](../namespace/Phaser.GameObjects.Components.Transform.md#getLocalPoint)


> Source: [src/gameobjects/components/Transform.js#L542](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Transform.js#L542)  
Since: 3.50.0


---

## getLocalTransformMatrix

### \<instance> getLocalTransformMatrix([tempMatrix])


**Description:**

Gets the local transform matrix for this Game Object.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| tempMatrix | [Phaser.GameObjects.Components.TransformMatrix](../class/Phaser.GameObjects.Components.TransformMatrix.md) | Yes | The matrix to populate with the values from this Game Object. |


**Returns:** [Phaser.GameObjects.Components.TransformMatrix](../class/Phaser.GameObjects.Components.TransformMatrix.md) - The populated Transform Matrix.


**Inherits:** [Phaser.GameObjects.Components.Transform#getLocalTransformMatrix](../namespace/Phaser.GameObjects.Components.Transform.md#getLocalTransformMatrix)


> Source: [src/gameobjects/components/Transform.js#L484](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Transform.js#L484)  
Since: 3.4.0


---

## getParentRotation

### \<instance> getParentRotation()


**Description:**

Gets the sum total rotation of all of this Game Objects parent Containers.

The returned value is in radians and will be zero if this Game Object has no parent container.


**Returns:** number - The sum total rotation, in radians, of all parent containers of this Game Object.


**Inherits:** [Phaser.GameObjects.Components.Transform#getParentRotation](../namespace/Phaser.GameObjects.Components.Transform.md#getParentRotation)


> Source: [src/gameobjects/components/Transform.js#L592](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Transform.js#L592)  
Since: 3.18.0


---

## getPipelineName

### \<instance> getPipelineName()


**Description:**

Gets the name of the WebGL Pipeline this Game Object is currently using.

**Tags:**

 - webglOnly


**Returns:** string - The string-based name of the pipeline being used by this Game Object, or null.


**Inherits:** [Phaser.GameObjects.Components.Pipeline#getPipelineName](../namespace/Phaser.GameObjects.Components.Pipeline.md#getPipelineName)


> Source: [src/gameobjects/components/Pipeline.js#L201](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Pipeline.js#L201)  
Since: 3.0.0


---

## getPostPipeline

### \<instance> getPostPipeline(pipeline)


**Description:**

Gets a Post Pipeline instance from this Game Object, based on the given name, and returns it.

**Tags:**

 - webglOnly

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| pipeline | string \| function | [Phaser.Renderer.WebGL.Pipelines.PostFXPipeline](../class/Phaser.Renderer.WebGL.Pipelines.PostFXPipeline.md) | No | The string-based name of the pipeline, or a pipeline class. |


**Returns:** [Phaser.Renderer.WebGL.Pipelines.PostFXPipeline](../class/Phaser.Renderer.WebGL.Pipelines.PostFXPipeline.md), Array.\<[Phaser.Renderer.WebGL.Pipelines.PostFXPipeline](../class/Phaser.Renderer.WebGL.Pipelines.PostFXPipeline.md)> - An array of all the Post Pipelines matching the name. This array will be empty if there was no match. If there was only one single match, that pipeline is returned directly, not in an array.


**Inherits:** [Phaser.GameObjects.Components.PostPipeline#getPostPipeline](../namespace/Phaser.GameObjects.Components.PostPipeline.md#getPostPipeline)


> Source: [src/gameobjects/components/PostPipeline.js#L237](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/PostPipeline.js#L237)  
Since: 3.60.0


---

## getRightCenter

### \<instance> getRightCenter([output], [includeParent])


**Description:**

Gets the right-center coordinate of this Game Object, regardless of origin.

The returned point is calculated in local space and does not factor in any parent Containers,
unless the `includeParent` argument is set to `true`.

**Tags:**

 - generic

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| output | [Phaser.Types.Math.Vector2Like](../typedef/Phaser.Types.Math.md#Vector2Like) | Yes |  | An object to store the values in. If not provided a new Vector2 will be created. |
| includeParent | boolean | Yes | false | If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? |


**Returns:** [Phaser.Types.Math.Vector2Like](../typedef/Phaser.Types.Math.md#Vector2Like) - The values stored in the output object.


**Inherits:** [Phaser.GameObjects.Components.GetBounds#getRightCenter](../namespace/Phaser.GameObjects.Components.GetBounds.md#getRightCenter)


> Source: [src/gameobjects/components/GetBounds.js#L184](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/GetBounds.js#L184)  
Since: 3.18.0


---

## getTopCenter

### \<instance> getTopCenter([output], [includeParent])


**Description:**

Gets the top-center coordinate of this Game Object, regardless of origin.

The returned point is calculated in local space and does not factor in any parent Containers,
unless the `includeParent` argument is set to `true`.

**Tags:**

 - generic

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| output | [Phaser.Types.Math.Vector2Like](../typedef/Phaser.Types.Math.md#Vector2Like) | Yes |  | An object to store the values in. If not provided a new Vector2 will be created. |
| includeParent | boolean | Yes | false | If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? |


**Returns:** [Phaser.Types.Math.Vector2Like](../typedef/Phaser.Types.Math.md#Vector2Like) - The values stored in the output object.


**Inherits:** [Phaser.GameObjects.Components.GetBounds#getTopCenter](../namespace/Phaser.GameObjects.Components.GetBounds.md#getTopCenter)


> Source: [src/gameobjects/components/GetBounds.js#L106](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/GetBounds.js#L106)  
Since: 3.18.0


---

## getTopLeft

### \<instance> getTopLeft([output], [includeParent])


**Description:**

Gets the top-left corner coordinate of this Game Object, regardless of origin.

The returned point is calculated in local space and does not factor in any parent Containers,
unless the `includeParent` argument is set to `true`.

**Tags:**

 - generic

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| output | [Phaser.Types.Math.Vector2Like](../typedef/Phaser.Types.Math.md#Vector2Like) | Yes |  | An object to store the values in. If not provided a new Vector2 will be created. |
| includeParent | boolean | Yes | false | If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? |


**Returns:** [Phaser.Types.Math.Vector2Like](../typedef/Phaser.Types.Math.md#Vector2Like) - The values stored in the output object.


**Inherits:** [Phaser.GameObjects.Components.GetBounds#getTopLeft](../namespace/Phaser.GameObjects.Components.GetBounds.md#getTopLeft)


> Source: [src/gameobjects/components/GetBounds.js#L80](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/GetBounds.js#L80)  
Since: 3.0.0


---

## getTopRight

### \<instance> getTopRight([output], [includeParent])


**Description:**

Gets the top-right corner coordinate of this Game Object, regardless of origin.

The returned point is calculated in local space and does not factor in any parent Containers,
unless the `includeParent` argument is set to `true`.

**Tags:**

 - generic

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| output | [Phaser.Types.Math.Vector2Like](../typedef/Phaser.Types.Math.md#Vector2Like) | Yes |  | An object to store the values in. If not provided a new Vector2 will be created. |
| includeParent | boolean | Yes | false | If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? |


**Returns:** [Phaser.Types.Math.Vector2Like](../typedef/Phaser.Types.Math.md#Vector2Like) - The values stored in the output object.


**Inherits:** [Phaser.GameObjects.Components.GetBounds#getTopRight](../namespace/Phaser.GameObjects.Components.GetBounds.md#getTopRight)


> Source: [src/gameobjects/components/GetBounds.js#L132](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/GetBounds.js#L132)  
Since: 3.0.0


---

## getWorldTransformMatrix

### \<instance> getWorldTransformMatrix([tempMatrix], [parentMatrix])


**Description:**

Gets the world transform matrix for this Game Object, factoring in any parent Containers.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| tempMatrix | [Phaser.GameObjects.Components.TransformMatrix](../class/Phaser.GameObjects.Components.TransformMatrix.md) | Yes | The matrix to populate with the values from this Game Object. |
| parentMatrix | [Phaser.GameObjects.Components.TransformMatrix](../class/Phaser.GameObjects.Components.TransformMatrix.md) | Yes | A temporary matrix to hold parent values during the calculations. |


**Returns:** [Phaser.GameObjects.Components.TransformMatrix](../class/Phaser.GameObjects.Components.TransformMatrix.md) - The populated Transform Matrix.


**Inherits:** [Phaser.GameObjects.Components.Transform#getWorldTransformMatrix](../namespace/Phaser.GameObjects.Components.Transform.md#getWorldTransformMatrix)


> Source: [src/gameobjects/components/Transform.js#L501](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Transform.js#L501)  
Since: 3.4.0


---

## incData

### \<instance> incData(key, [amount])


**Description:**

Increase a value for the given key within this Game Objects Data Manager. If the key doesn't already exist in the Data Manager then it is increased from 0.

If the Game Object has not been enabled for data (via `setDataEnabled`) then it will be enabled
before setting the value.

If the key doesn't already exist in the Data Manager then it is created.

When the value is first set, a `setdata` event is emitted from this Game Object.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| key | string | No |  | The key to change the value for. |
| amount | number | Yes | 1 | The amount to increase the given key by. Pass a negative value to decrease the key. |


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This GameObject.


**Inherits:** [Phaser.GameObjects.GameObject#incData](../class/Phaser.GameObjects.GameObject.md#incData)


> Source: [src/gameobjects/GameObject.js#L357](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/GameObject.js#L357)  
Since: 3.23.0


---

## initPipeline

### \<instance> initPipeline([pipeline])


**Description:**

Sets the initial WebGL Pipeline of this Game Object.

This should only be called during the instantiation of the Game Object. After that, use `setPipeline`.

**Tags:**

 - webglOnly

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| pipeline | string \| [Phaser.Renderer.WebGL.WebGLPipeline](../class/Phaser.Renderer.WebGL.WebGLPipeline.md) | Yes | Either the string-based name of the pipeline, or a pipeline instance to set. |


**Returns:** boolean - `true` if the pipeline was set successfully, otherwise `false`.


**Inherits:** [Phaser.GameObjects.Components.Pipeline#initPipeline](../namespace/Phaser.GameObjects.Components.Pipeline.md#initPipeline)


> Source: [src/gameobjects/components/Pipeline.js#L53](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Pipeline.js#L53)  
Since: 3.0.0


---

## initPostPipeline

### \<instance> initPostPipeline([preFX])


**Description:**

This should only be called during the instantiation of the Game Object.

It is called by default by all core Game Objects and doesn't need
calling again.

After that, use `setPostPipeline`.

**Tags:**

 - webglOnly

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| preFX | boolean | Yes | false | Does this Game Object support Pre FX? |


**Inherits:** [Phaser.GameObjects.Components.PostPipeline#initPostPipeline](../namespace/Phaser.GameObjects.Components.PostPipeline.md#initPostPipeline)


> Source: [src/gameobjects/components/PostPipeline.js#L113](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/PostPipeline.js#L113)  
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


> Source: [src/events/EventEmitter.js#L75](https://github.com/phaserjs/phaser/blob/v3.85.2/src/events/EventEmitter.js#L75)  
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


> Source: [src/events/EventEmitter.js#L64](https://github.com/phaserjs/phaser/blob/v3.85.2/src/events/EventEmitter.js#L64)  
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


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - `this`.


**Inherits:** [Phaser.Events.EventEmitter#off](../class/Phaser.Events.EventEmitter.md#off)


> Source: [src/events/EventEmitter.js#L151](https://github.com/phaserjs/phaser/blob/v3.85.2/src/events/EventEmitter.js#L151)  
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


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - `this`.


**Inherits:** [Phaser.Events.EventEmitter#on](../class/Phaser.Events.EventEmitter.md#on)


> Source: [src/events/EventEmitter.js#L98](https://github.com/phaserjs/phaser/blob/v3.85.2/src/events/EventEmitter.js#L98)  
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


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - `this`.


**Inherits:** [Phaser.Events.EventEmitter#once](../class/Phaser.Events.EventEmitter.md#once)


> Source: [src/events/EventEmitter.js#L124](https://github.com/phaserjs/phaser/blob/v3.85.2/src/events/EventEmitter.js#L124)  
Since: 3.0.0


---

## preDestroy

### \<instance> preDestroy()


**Description:**

Internal destroy handler, called as part of the destroy process.


**Access:** protected


**Inherits:** [Phaser.GameObjects.Shape#preDestroy](../class/Phaser.GameObjects.Shape.md#preDestroy)


> Source: [src/gameobjects/shape/Shape.js#L353](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/shape/Shape.js#L353)  
Since: 3.13.0


---

## removeAllListeners

### \<instance> removeAllListeners([event])


**Description:**

Remove all listeners, or those of the specified event.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| event | string \| symbol | Yes | The event name. |


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - `this`.


**Inherits:** [Phaser.Events.EventEmitter#removeAllListeners](../class/Phaser.Events.EventEmitter.md#removeAllListeners)


> Source: [src/events/EventEmitter.js#L165](https://github.com/phaserjs/phaser/blob/v3.85.2/src/events/EventEmitter.js#L165)  
Since: 3.0.0


---

## removedFromScene

### \<instance> removedFromScene()


**Description:**

This callback is invoked when this Game Object is removed from a Scene.

Can be overriden by custom Game Objects, but be aware of some Game Objects that
will use this, such as Sprites, to removed themselves from the Update List.

You can also listen for the `REMOVED_FROM_SCENE` event from this Game Object.


**Inherits:** [Phaser.GameObjects.GameObject#removedFromScene](../class/Phaser.GameObjects.GameObject.md#removedFromScene)


> Source: [src/gameobjects/GameObject.js#L577](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/GameObject.js#L577)  
Since: 3.50.0


---

## removeFromDisplayList

### \<instance> removeFromDisplayList()


**Description:**

Removes this Game Object from the Display List it is currently on.

A Game Object can only exist on one Display List at any given time, but may move freely removed
and added back at a later stage.

You can query which list it is on by looking at the `Phaser.GameObjects.GameObject#displayList` property.

If a Game Object isn't on any Display List, it will not be rendered. If you just wish to temporarly
disable it from rendering, consider using the `setVisible` method, instead.


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This Game Object.


**Fires:** [Phaser.Scenes.Events#event:REMOVED_FROM_SCENE](../event/Phaser.Scenes.Events.md#REMOVED_FROM_SCENE), [Phaser.GameObjects.Events#event:REMOVED_FROM_SCENE](../event/Phaser.GameObjects.Events.md#REMOVED_FROM_SCENE)


**Inherits:** [Phaser.GameObjects.GameObject#removeFromDisplayList](../class/Phaser.GameObjects.GameObject.md#removeFromDisplayList)


> Source: [src/gameobjects/GameObject.js#L760](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/GameObject.js#L760)  
Since: 3.53.0


---

## removeFromUpdateList

### \<instance> removeFromUpdateList()


**Description:**

Removes this Game Object from the Scene's Update List.

When a Game Object is on the Update List, it will have its `preUpdate` method called
every game frame. Calling this method will remove it from the list, preventing this.

Removing a Game Object from the Update List will stop most internal functions working.
For example, removing a Sprite from the Update List will prevent it from being able to
run animations.


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This Game Object.


**Inherits:** [Phaser.GameObjects.GameObject#removeFromUpdateList](../class/Phaser.GameObjects.GameObject.md#removeFromUpdateList)


> Source: [src/gameobjects/GameObject.js#L798](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/GameObject.js#L798)  
Since: 3.53.0


---

## removeInteractive

### \<instance> removeInteractive([resetCursor])


**Description:**

If this Game Object has previously been enabled for input, this will queue it
for removal, causing it to no longer be interactive. The removal happens on
the next game step, it is not immediate.

The Interactive Object that was assigned to this Game Object will be destroyed,
removed from the Input Manager and cleared from this Game Object.

If you wish to re-enable this Game Object at a later date you will need to
re-create its InteractiveObject by calling `setInteractive` again.

If you wish to only temporarily stop an object from receiving input then use
`disableInteractive` instead, as that toggles the interactive state, where-as
this erases it completely.

If you wish to resize a hit area, don't remove and then set it as being
interactive. Instead, access the hitarea object directly and resize the shape
being used. I.e.: `sprite.input.hitArea.setSize(width, height)` (assuming the
shape is a Rectangle, which it is by default.)

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| resetCursor | boolean | Yes | false | Should the currently active Input cursor, if any, be reset to the default cursor? |


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This GameObject.


**Inherits:** [Phaser.GameObjects.GameObject#removeInteractive](../class/Phaser.GameObjects.GameObject.md#removeInteractive)


> Source: [src/gameobjects/GameObject.js#L519](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/GameObject.js#L519)  
Since: 3.7.0


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


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - `this`.


**Inherits:** [Phaser.Events.EventEmitter#removeListener](../class/Phaser.Events.EventEmitter.md#removeListener)


> Source: [src/events/EventEmitter.js#L137](https://github.com/phaserjs/phaser/blob/v3.85.2/src/events/EventEmitter.js#L137)  
Since: 3.0.0


---

## removePostPipeline

### \<instance> removePostPipeline(pipeline)


**Description:**

Removes a type of Post Pipeline instances from this Game Object, based on the given name, and destroys them.

If you wish to remove all Post Pipelines use the `resetPostPipeline` method instead.

**Tags:**

 - webglOnly

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| pipeline | string \| [Phaser.Renderer.WebGL.Pipelines.PostFXPipeline](../class/Phaser.Renderer.WebGL.Pipelines.PostFXPipeline.md) | No | The string-based name of the pipeline, or a pipeline class. |


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This Game Object.


**Inherits:** [Phaser.GameObjects.Components.PostPipeline#removePostPipeline](../namespace/Phaser.GameObjects.Components.PostPipeline.md#removePostPipeline)


> Source: [src/gameobjects/components/PostPipeline.js#L299](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/PostPipeline.js#L299)  
Since: 3.60.0


---

## resetPipeline

### \<instance> resetPipeline([resetData])


**Description:**

Resets the WebGL Pipeline of this Game Object back to the default it was created with.

**Tags:**

 - webglOnly

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| resetData | boolean | Yes | false | Reset the `pipelineData` object to being an empty object? |


**Returns:** boolean - `true` if the pipeline was reset successfully, otherwise `false`.


**Inherits:** [Phaser.GameObjects.Components.Pipeline#resetPipeline](../namespace/Phaser.GameObjects.Components.Pipeline.md#resetPipeline)


> Source: [src/gameobjects/components/Pipeline.js#L176](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Pipeline.js#L176)  
Since: 3.0.0


---

## resetPostPipeline

### \<instance> resetPostPipeline([resetData])


**Description:**

Resets the WebGL Post Pipelines of this Game Object. It does this by calling
the `destroy` method on each post pipeline and then clearing the local array.

**Tags:**

 - webglOnly

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| resetData | boolean | Yes | false | Reset the `postPipelineData` object to being an empty object? |


**Inherits:** [Phaser.GameObjects.Components.PostPipeline#resetPostPipeline](../namespace/Phaser.GameObjects.Components.PostPipeline.md#resetPostPipeline)


> Source: [src/gameobjects/components/PostPipeline.js#L269](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/PostPipeline.js#L269)  
Since: 3.60.0


---

## setAbove

### \<instance> setAbove(gameObject)


**Description:**

Move this Game Object so that it appears above the given Game Object.

This means it will render immediately after the other object in the display list.

Both objects must belong to the same display list, or parent container.

This method does not change this Game Objects `depth` value, it simply alters its list position.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| gameObject | [Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md) | No | The Game Object that this Game Object will be moved to be above. |


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This Game Object instance.


**Inherits:** [Phaser.GameObjects.Components.Depth#setAbove](../namespace/Phaser.GameObjects.Components.Depth.md#setAbove)


> Source: [src/gameobjects/components/Depth.js#L139](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Depth.js#L139)  
Since: 3.85.0


---

## setActive

### \<instance> setActive(value)


**Description:**

Sets the `active` property of this Game Object and returns this Game Object for further chaining.
A Game Object with its `active` property set to `true` will be updated by the Scenes UpdateList.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| value | boolean | No | True if this Game Object should be set as active, false if not. |


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This GameObject.


**Inherits:** [Phaser.GameObjects.GameObject#setActive](../class/Phaser.GameObjects.GameObject.md#setActive)


> Source: [src/gameobjects/GameObject.js#L216](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/GameObject.js#L216)  
Since: 3.0.0


---

## setAlpha

### \<instance> setAlpha([value])


**Description:**

Set the Alpha level of this Game Object. The alpha controls the opacity of the Game Object as it renders.
Alpha values are provided as a float between 0, fully transparent, and 1, fully opaque.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| value | number | Yes | 1 | The alpha value applied across the whole Game Object. |


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This Game Object instance.


**Inherits:** [Phaser.GameObjects.Components.AlphaSingle#setAlpha](../namespace/Phaser.GameObjects.Components.AlphaSingle.md#setAlpha)


> Source: [src/gameobjects/components/AlphaSingle.js#L48](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/AlphaSingle.js#L48)  
Since: 3.0.0


---

## setAngle

### \<instance> setAngle([degrees])


**Description:**

Sets the angle of this Game Object.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| degrees | number | Yes | 0 | The rotation of this Game Object, in degrees. |


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This Game Object instance.


**Inherits:** [Phaser.GameObjects.Components.Transform#setAngle](../namespace/Phaser.GameObjects.Components.Transform.md#setAngle)


> Source: [src/gameobjects/components/Transform.js#L364](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Transform.js#L364)  
Since: 3.0.0


---

## setBelow

### \<instance> setBelow(gameObject)


**Description:**

Move this Game Object so that it appears below the given Game Object.

This means it will render immediately under the other object in the display list.

Both objects must belong to the same display list, or parent container.

This method does not change this Game Objects `depth` value, it simply alters its list position.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| gameObject | [Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md) | No | The Game Object that this Game Object will be moved to be below. |


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This Game Object instance.


**Inherits:** [Phaser.GameObjects.Components.Depth#setBelow](../namespace/Phaser.GameObjects.Components.Depth.md#setBelow)


> Source: [src/gameobjects/components/Depth.js#L167](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Depth.js#L167)  
Since: 3.85.0


---

## setBlendMode

### \<instance> setBlendMode(value)


**Description:**

Sets the Blend Mode being used by this Game Object.

This can be a const, such as `Phaser.BlendModes.SCREEN`, or an integer, such as 4 (for Overlay)

Under WebGL only the following Blend Modes are available:

* NORMAL
* ADD
* MULTIPLY
* SCREEN
* ERASE (only works when rendering to a framebuffer, like a Render Texture)

Canvas has more available depending on browser support.

You can also create your own custom Blend Modes in WebGL.

Blend modes have different effects under Canvas and WebGL, and from browser to browser, depending
on support. Blend Modes also cause a WebGL batch flush should it encounter a new blend mode. For these
reasons try to be careful about the construction of your Scene and the frequency in which blend modes
are used.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| value | string \| [Phaser.BlendModes](../namespace/Phaser.BlendModes.md) | number | No | The BlendMode value. Either a string, a CONST or a number. |


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This Game Object instance.


**Inherits:** [Phaser.GameObjects.Components.BlendMode#setBlendMode](../namespace/Phaser.GameObjects.Components.BlendMode.md#setBlendMode)


> Source: [src/gameobjects/components/BlendMode.js#L80](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/BlendMode.js#L80)  
Since: 3.0.0


---

## setClosePath

### \<instance> setClosePath(value)


**Description:**

Sets if this Shape path is closed during rendering when stroked.
Note that some Shapes are always closed when stroked (such as Ellipse shapes)

This call can be chained.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| value | boolean | No | Set to `true` if the Shape should be closed when stroked, otherwise `false`. |


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This Game Object instance.


**Inherits:** [Phaser.GameObjects.Shape#setClosePath](../class/Phaser.GameObjects.Shape.md#setClosePath)


> Source: [src/gameobjects/shape/Shape.js#L284](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/shape/Shape.js#L284)  
Since: 3.13.0


---

## setData

### \<instance> setData(key, [data])


**Description:**

Allows you to store a key value pair within this Game Objects Data Manager.

If the Game Object has not been enabled for data (via `setDataEnabled`) then it will be enabled
before setting the value.

If the key doesn't already exist in the Data Manager then it is created.

```javascript
sprite.setData('name', 'Red Gem Stone');
```

You can also pass in an object of key value pairs as the first argument:

```javascript
sprite.setData({ name: 'Red Gem Stone', level: 2, owner: 'Link', gold: 50 });
```

To get a value back again you can call `getData`:

```javascript
sprite.getData('gold');
```

Or you can access the value directly via the `values` property, where it works like any other variable:

```javascript
sprite.data.values.gold += 50;
```

When the value is first set, a `setdata` event is emitted from this Game Object.

If the key already exists, a `changedata` event is emitted instead, along an event named after the key.
For example, if you updated an existing key called `PlayerLives` then it would emit the event `changedata-PlayerLives`.
These events will be emitted regardless if you use this method to set the value, or the direct `values` setter.

Please note that the data keys are case-sensitive and must be valid JavaScript Object property strings.
This means the keys `gold` and `Gold` are treated as two unique values within the Data Manager.

**Tags:**

 - generic
 - genericUse

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| key | string \| object | No | The key to set the value for. Or an object of key value pairs. If an object the `data` argument is ignored. |
| data | * | Yes | The value to set for the given key. If an object is provided as the key this argument is ignored. |


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This GameObject.


**Inherits:** [Phaser.GameObjects.GameObject#setData](../class/Phaser.GameObjects.GameObject.md#setData)


> Source: [src/gameobjects/GameObject.js#L295](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/GameObject.js#L295)  
Since: 3.0.0


---

## setDataEnabled

### \<instance> setDataEnabled()


**Description:**

Adds a Data Manager component to this Game Object.


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This GameObject.


**Inherits:** [Phaser.GameObjects.GameObject#setDataEnabled](../class/Phaser.GameObjects.GameObject.md#setDataEnabled)


> Source: [src/gameobjects/GameObject.js#L276](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/GameObject.js#L276)  
Since: 3.0.0


---

## setDepth

### \<instance> setDepth(value)


**Description:**

The depth of this Game Object within the Scene.

The depth is also known as the 'z-index' in some environments, and allows you to change the rendering order
of Game Objects, without actually moving their position in the display list.

The default depth is zero. A Game Object with a higher depth
value will always render in front of one with a lower value.

Setting the depth will queue a depth sort event within the Scene.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| value | number | No | The depth of this Game Object. Ensure this value is only ever a number data-type. |


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This Game Object instance.


**Inherits:** [Phaser.GameObjects.Components.Depth#setDepth](../namespace/Phaser.GameObjects.Components.Depth.md#setDepth)


> Source: [src/gameobjects/components/Depth.js#L64](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Depth.js#L64)  
Since: 3.0.0


---

## setDisplayOrigin

### \<instance> setDisplayOrigin([x], [y])


**Description:**

Sets the display origin of this Game Object.
The difference between this and setting the origin is that you can use pixel values for setting the display origin.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| x | number | Yes | 0 | The horizontal display origin value. |
| y | number | Yes | "x" | The vertical display origin value. If not defined it will be set to the value of `x`. |


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This Game Object instance.


**Inherits:** [Phaser.GameObjects.Components.Origin#setDisplayOrigin](../namespace/Phaser.GameObjects.Components.Origin.md#setDisplayOrigin)


> Source: [src/gameobjects/components/Origin.js#L159](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Origin.js#L159)  
Since: 3.0.0


---

## setDisplaySize

### \<instance> setDisplaySize(width, height)


**Description:**

Sets the display size of this Shape.

Calling this will adjust the scale.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| width | number | No | The display width of this Shape. |
| height | number | No | The display height of this Shape. |


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This Shape instance.


**Inherits:** [Phaser.GameObjects.Shape#setDisplaySize](../class/Phaser.GameObjects.Shape.md#setDisplaySize)


> Source: [src/gameobjects/shape/Shape.js#L332](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/shape/Shape.js#L332)  
Since: 3.53.0


---

## setFillStyle

### \<instance> setFillStyle([color], [alpha])


**Description:**

Sets the fill color and alpha for this Shape.

If you wish for the Shape to not be filled then call this method with no arguments, or just set `isFilled` to `false`.

Note that some Shapes do not support fill colors, such as the Line shape.

This call can be chained.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| color | number | Yes |  | The color used to fill this shape. If not provided the Shape will not be filled. |
| alpha | number | Yes | 1 | The alpha value used when filling this shape, if a fill color is given. |


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This Game Object instance.


**Inherits:** [Phaser.GameObjects.Shape#setFillStyle](../class/Phaser.GameObjects.Shape.md#setFillStyle)


> Source: [src/gameobjects/shape/Shape.js#L212](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/shape/Shape.js#L212)  
Since: 3.13.0


---

## setInteractive

### \<instance> setInteractive([hitArea], [callback], [dropZone])


**Description:**

Pass this Game Object to the Input Manager to enable it for Input.

Input works by using hit areas, these are nearly always geometric shapes, such as rectangles or circles, that act as the hit area
for the Game Object. However, you can provide your own hit area shape and callback, should you wish to handle some more advanced
input detection.

If no arguments are provided it will try and create a rectangle hit area based on the texture frame the Game Object is using. If
this isn't a texture-bound object, such as a Graphics or BitmapText object, this will fail, and you'll need to provide a specific
shape for it to use.

You can also provide an Input Configuration Object as the only argument to this method.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| hitArea | [Phaser.Types.Input.InputConfiguration](../typedef/Phaser.Types.Input.md#InputConfiguration) \| any | Yes |  | Either an input configuration object, or a geometric shape that defines the hit area for the Game Object. If not given it will try to create a Rectangle based on the texture frame. |
| callback | [Phaser.Types.Input.HitAreaCallback](../typedef/Phaser.Types.Input.md#HitAreaCallback) | Yes |  | The callback that determines if the pointer is within the Hit Area shape or not. If you provide a shape you must also provide a callback. |
| dropZone | boolean | Yes | false | Should this Game Object be treated as a drop zone target? |


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This GameObject.


**Inherits:** [Phaser.GameObjects.GameObject#setInteractive](../class/Phaser.GameObjects.GameObject.md#setInteractive)


> Source: [src/gameobjects/GameObject.js#L456](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/GameObject.js#L456)  
Since: 3.0.0


---

## setMask

### \<instance> setMask(mask)


**Description:**

Sets the mask that this Game Object will use to render with.

The mask must have been previously created and can be either a GeometryMask or a BitmapMask.
Note: Bitmap Masks only work on WebGL. Geometry Masks work on both WebGL and Canvas.

If a mask is already set on this Game Object it will be immediately replaced.

Masks are positioned in global space and are not relative to the Game Object to which they
are applied. The reason for this is that multiple Game Objects can all share the same mask.

Masks have no impact on physics or input detection. They are purely a rendering component
that allows you to limit what is visible during the render pass.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| mask | [Phaser.Display.Masks.BitmapMask](../class/Phaser.Display.Masks.BitmapMask.md) \| [Phaser.Display.Masks.GeometryMask](../class/Phaser.Display.Masks.GeometryMask.md) | No | The mask this Game Object will use when rendering. |


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This Game Object instance.


**Inherits:** [Phaser.GameObjects.Components.Mask#setMask](../namespace/Phaser.GameObjects.Components.Mask.md#setMask)


> Source: [src/gameobjects/components/Mask.js#L28](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Mask.js#L28)  
Since: 3.6.2


---

## setName

### \<instance> setName(value)


**Description:**

Sets the `name` property of this Game Object and returns this Game Object for further chaining.
The `name` property is not populated by Phaser and is presented for your own use.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| value | string | No | The name to be given to this Game Object. |


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This GameObject.


**Inherits:** [Phaser.GameObjects.GameObject#setName](../class/Phaser.GameObjects.GameObject.md#setName)


> Source: [src/gameobjects/GameObject.js#L234](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/GameObject.js#L234)  
Since: 3.0.0


---

## setOrigin

### \<instance> setOrigin([x], [y])


**Description:**

Sets the origin of this Game Object.

The values are given in the range 0 to 1.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| x | number | Yes | 0.5 | The horizontal origin value. |
| y | number | Yes | "x" | The vertical origin value. If not defined it will be set to the value of `x`. |


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This Game Object instance.


**Inherits:** [Phaser.GameObjects.Components.Origin#setOrigin](../namespace/Phaser.GameObjects.Components.Origin.md#setOrigin)


> Source: [src/gameobjects/components/Origin.js#L112](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Origin.js#L112)  
Since: 3.0.0


---

## setOriginFromFrame

### \<instance> setOriginFromFrame()


**Description:**

Sets the origin of this Game Object based on the Pivot values in its Frame.


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This Game Object instance.


**Inherits:** [Phaser.GameObjects.Components.Origin#setOriginFromFrame](../namespace/Phaser.GameObjects.Components.Origin.md#setOriginFromFrame)


> Source: [src/gameobjects/components/Origin.js#L136](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Origin.js#L136)  
Since: 3.0.0


---

## setPipeline

### \<instance> setPipeline(pipeline, [pipelineData], [copyData])


**Description:**

Sets the main WebGL Pipeline of this Game Object.

Also sets the `pipelineData` property, if the parameter is given.

**Tags:**

 - webglOnly

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| pipeline | string \| [Phaser.Renderer.WebGL.WebGLPipeline](../class/Phaser.Renderer.WebGL.WebGLPipeline.md) | No |  | Either the string-based name of the pipeline, or a pipeline instance to set. |
| pipelineData | object | Yes |  | Optional pipeline data object that is set in to the `pipelineData` property of this Game Object. |
| copyData | boolean | Yes | true | Should the pipeline data object be _deep copied_ into the `pipelineData` property of this Game Object? If `false` it will be set by reference instead. |


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This Game Object instance.


**Inherits:** [Phaser.GameObjects.Components.Pipeline#setPipeline](../namespace/Phaser.GameObjects.Components.Pipeline.md#setPipeline)


> Source: [src/gameobjects/components/Pipeline.js#L100](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Pipeline.js#L100)  
Since: 3.0.0


---

## setPipelineData

### \<instance> setPipelineData(key, [value])


**Description:**

Adds an entry to the `pipelineData` object belonging to this Game Object.

If the 'key' already exists, its value is updated. If it doesn't exist, it is created.

If `value` is undefined, and `key` exists, `key` is removed from the data object.

**Tags:**

 - webglOnly

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| key | string | No | The key of the pipeline data to set, update, or delete. |
| value | any | Yes | The value to be set with the key. If `undefined` then `key` will be deleted from the object. |


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This Game Object instance.


**Inherits:** [Phaser.GameObjects.Components.Pipeline#setPipelineData](../namespace/Phaser.GameObjects.Components.Pipeline.md#setPipelineData)


> Source: [src/gameobjects/components/Pipeline.js#L144](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Pipeline.js#L144)  
Since: 3.50.0


---

## setPosition

### \<instance> setPosition([x], [y], [z], [w])


**Description:**

Sets the position of this Game Object.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| x | number | Yes | 0 | The x position of this Game Object. |
| y | number | Yes | "x" | The y position of this Game Object. If not set it will use the `x` value. |
| z | number | Yes | 0 | The z position of this Game Object. |
| w | number | Yes | 0 | The w position of this Game Object. |


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This Game Object instance.


**Inherits:** [Phaser.GameObjects.Components.Transform#setPosition](../namespace/Phaser.GameObjects.Components.Transform.md#setPosition)


> Source: [src/gameobjects/components/Transform.js#L265](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Transform.js#L265)  
Since: 3.0.0


---

## setPostPipeline

### \<instance> setPostPipeline(pipelines, [pipelineData], [copyData])


**Description:**

Sets one, or more, Post Pipelines on this Game Object.

Post Pipelines are invoked after this Game Object has rendered to its target and
are commonly used for post-fx.

The post pipelines are appended to the `postPipelines` array belonging to this
Game Object. When the renderer processes this Game Object, it iterates through the post
pipelines in the order in which they appear in the array. If you are stacking together
multiple effects, be aware that the order is important.

If you call this method multiple times, the new pipelines will be appended to any existing
post pipelines already set. Use the `resetPostPipeline` method to clear them first, if required.

You can optionally also set the `postPipelineData` property, if the parameter is given.

**Tags:**

 - webglOnly

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| pipelines | string \| Array.\<string> | function | Array.\<function()> | [Phaser.Renderer.WebGL.Pipelines.PostFXPipeline](../class/Phaser.Renderer.WebGL.Pipelines.PostFXPipeline.md) | Array.\<[Phaser.Renderer.WebGL.Pipelines.PostFXPipeline](../class/Phaser.Renderer.WebGL.Pipelines.PostFXPipeline.md)> | No |  | Either the string-based name of the pipeline, or a pipeline instance, or class, or an array of them. |
| pipelineData | object | Yes |  | Optional pipeline data object that is set in to the `postPipelineData` property of this Game Object. |
| copyData | boolean | Yes | true | Should the pipeline data object be _deep copied_ into the `postPipelineData` property of this Game Object? If `false` it will be set by reference instead. |


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This Game Object instance.


**Inherits:** [Phaser.GameObjects.Components.PostPipeline#setPostPipeline](../namespace/Phaser.GameObjects.Components.PostPipeline.md#setPostPipeline)


> Source: [src/gameobjects/components/PostPipeline.js#L140](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/PostPipeline.js#L140)  
Since: 3.60.0


---

## setPostPipelineData

### \<instance> setPostPipelineData(key, [value])


**Description:**

Adds an entry to the `postPipelineData` object belonging to this Game Object.

If the 'key' already exists, its value is updated. If it doesn't exist, it is created.

If `value` is undefined, and `key` exists, `key` is removed from the data object.

**Tags:**

 - webglOnly

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| key | string | No | The key of the pipeline data to set, update, or delete. |
| value | any | Yes | The value to be set with the key. If `undefined` then `key` will be deleted from the object. |


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This Game Object instance.


**Inherits:** [Phaser.GameObjects.Components.PostPipeline#setPostPipelineData](../namespace/Phaser.GameObjects.Components.PostPipeline.md#setPostPipelineData)


> Source: [src/gameobjects/components/PostPipeline.js#L205](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/PostPipeline.js#L205)  
Since: 3.60.0


---

## setRandomPosition

### \<instance> setRandomPosition([x], [y], [width], [height])


**Description:**

Sets the position of this Game Object to be a random position within the confines of
the given area.

If no area is specified a random position between 0 x 0 and the game width x height is used instead.

The position does not factor in the size of this Game Object, meaning that only the origin is
guaranteed to be within the area.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| x | number | Yes | 0 | The x position of the top-left of the random area. |
| y | number | Yes | 0 | The y position of the top-left of the random area. |
| width | number | Yes |  | The width of the random area. |
| height | number | Yes |  | The height of the random area. |


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This Game Object instance.


**Inherits:** [Phaser.GameObjects.Components.Transform#setRandomPosition](../namespace/Phaser.GameObjects.Components.Transform.md#setRandomPosition)


> Source: [src/gameobjects/components/Transform.js#L313](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Transform.js#L313)  
Since: 3.8.0


---

## setRotation

### \<instance> setRotation([radians])


**Description:**

Sets the rotation of this Game Object.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| radians | number | Yes | 0 | The rotation of this Game Object, in radians. |


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This Game Object instance.


**Inherits:** [Phaser.GameObjects.Components.Transform#setRotation](../namespace/Phaser.GameObjects.Components.Transform.md#setRotation)


> Source: [src/gameobjects/components/Transform.js#L345](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Transform.js#L345)  
Since: 3.0.0


---

## setScale

### \<instance> setScale([x], [y])


**Description:**

Sets the scale of this Game Object.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| x | number | Yes | 1 | The horizontal scale of this Game Object. |
| y | number | Yes | "x" | The vertical scale of this Game Object. If not set it will use the `x` value. |


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This Game Object instance.


**Inherits:** [Phaser.GameObjects.Components.Transform#setScale](../namespace/Phaser.GameObjects.Components.Transform.md#setScale)


> Source: [src/gameobjects/components/Transform.js#L383](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Transform.js#L383)  
Since: 3.0.0


---

## setScrollFactor

### \<instance> setScrollFactor(x, [y])


**Description:**

Sets the scroll factor of this Game Object.

The scroll factor controls the influence of the movement of a Camera upon this Game Object.

When a camera scrolls it will change the location at which this Game Object is rendered on-screen.
It does not change the Game Objects actual position values.

A value of 1 means it will move exactly in sync with a camera.
A value of 0 means it will not move at all, even if the camera moves.
Other values control the degree to which the camera movement is mapped to this Game Object.

Please be aware that scroll factor values other than 1 are not taken in to consideration when
calculating physics collisions. Bodies always collide based on their world position, but changing
the scroll factor is a visual adjustment to where the textures are rendered, which can offset
them from physics bodies if not accounted for in your code.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| x | number | No |  | The horizontal scroll factor of this Game Object. |
| y | number | Yes | "x" | The vertical scroll factor of this Game Object. If not set it will use the `x` value. |


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This Game Object instance.


**Inherits:** [Phaser.GameObjects.Components.ScrollFactor#setScrollFactor](../namespace/Phaser.GameObjects.Components.ScrollFactor.md#setScrollFactor)


> Source: [src/gameobjects/components/ScrollFactor.js#L64](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/ScrollFactor.js#L64)  
Since: 3.0.0


---

## setSize

### \<instance> setSize(width, height)


**Description:**

Sets the internal size of this Rectangle, as used for frame or physics body creation.

If you have assigned a custom input hit area for this Rectangle, changing the Rectangle size will _not_ change the
size of the hit area. To do this you should adjust the `input.hitArea` object directly.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| width | number | No | The width of this Game Object. |
| height | number | No | The height of this Game Object. |


**Overrides:** Phaser.GameObjects.Shape#setSize


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This Game Object instance.


> Source: [src/gameobjects/shape/rectangle/Rectangle.js#L68](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/shape/rectangle/Rectangle.js#L68)  
Since: 3.13.0


---

## setState

### \<instance> setState(value)


**Description:**

Sets the current state of this Game Object.

Phaser itself will never modify the State of a Game Object, although plugins may do so.

For example, a Game Object could change from a state of 'moving', to 'attacking', to 'dead'.
The state value should typically be an integer (ideally mapped to a constant
in your game code), but could also be a string. It is recommended to keep it light and simple.
If you need to store complex data about your Game Object, look at using the Data Component instead.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| value | number \| string | No | The state of the Game Object. |


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This GameObject.


**Inherits:** [Phaser.GameObjects.GameObject#setState](../class/Phaser.GameObjects.GameObject.md#setState)


> Source: [src/gameobjects/GameObject.js#L252](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/GameObject.js#L252)  
Since: 3.16.0


---

## setStrokeStyle

### \<instance> setStrokeStyle([lineWidth], [color], [alpha])


**Description:**

Sets the stroke color and alpha for this Shape.

If you wish for the Shape to not be stroked then call this method with no arguments, or just set `isStroked` to `false`.

Note that some Shapes do not support being stroked, such as the Iso Box shape.

This call can be chained.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| lineWidth | number | Yes |  | The width of line to stroke with. If not provided or undefined the Shape will not be stroked. |
| color | number | Yes |  | The color used to stroke this shape. If not provided the Shape will not be stroked. |
| alpha | number | Yes | 1 | The alpha value used when stroking this shape, if a stroke color is given. |


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This Game Object instance.


**Inherits:** [Phaser.GameObjects.Shape#setStrokeStyle](../class/Phaser.GameObjects.Shape.md#setStrokeStyle)


> Source: [src/gameobjects/shape/Shape.js#L247](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/shape/Shape.js#L247)  
Since: 3.13.0


---

## setToBack

### \<instance> setToBack()


**Description:**

Sets this Game Object to the back of the display list, or the back of its parent container.

Being at the back means it will render below everything else.

This method does not change this Game Objects `depth` value, it simply alters its list position.


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This Game Object instance.


**Inherits:** [Phaser.GameObjects.Components.Depth#setToBack](../namespace/Phaser.GameObjects.Components.Depth.md#setToBack)


> Source: [src/gameobjects/components/Depth.js#L115](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Depth.js#L115)  
Since: 3.85.0


---

## setToTop

### \<instance> setToTop()


**Description:**

Sets this Game Object to be at the top of the display list, or the top of its parent container.

Being at the top means it will render on-top of everything else.

This method does not change this Game Objects `depth` value, it simply alters its list position.


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This Game Object instance.


**Inherits:** [Phaser.GameObjects.Components.Depth#setToTop](../namespace/Phaser.GameObjects.Components.Depth.md#setToTop)


> Source: [src/gameobjects/components/Depth.js#L91](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Depth.js#L91)  
Since: 3.85.0


---

## setVisible

### \<instance> setVisible(value)


**Description:**

Sets the visibility of this Game Object.

An invisible Game Object will skip rendering, but will still process update logic.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| value | boolean | No | The visible state of the Game Object. |


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This Game Object instance.


**Inherits:** [Phaser.GameObjects.Components.Visible#setVisible](../namespace/Phaser.GameObjects.Components.Visible.md#setVisible)


> Source: [src/gameobjects/components/Visible.js#L63](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Visible.js#L63)  
Since: 3.0.0


---

## setW

### \<instance> setW([value])


**Description:**

Sets the w position of this Game Object.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| value | number | Yes | 0 | The w position of this Game Object. |


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This Game Object instance.


**Inherits:** [Phaser.GameObjects.Components.Transform#setW](../namespace/Phaser.GameObjects.Components.Transform.md#setW)


> Source: [src/gameobjects/components/Transform.js#L465](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Transform.js#L465)  
Since: 3.0.0


---

## setX

### \<instance> setX([value])


**Description:**

Sets the x position of this Game Object.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| value | number | Yes | 0 | The x position of this Game Object. |


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This Game Object instance.


**Inherits:** [Phaser.GameObjects.Components.Transform#setX](../namespace/Phaser.GameObjects.Components.Transform.md#setX)


> Source: [src/gameobjects/components/Transform.js#L405](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Transform.js#L405)  
Since: 3.0.0


---

## setY

### \<instance> setY([value])


**Description:**

Sets the y position of this Game Object.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| value | number | Yes | 0 | The y position of this Game Object. |


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This Game Object instance.


**Inherits:** [Phaser.GameObjects.Components.Transform#setY](../namespace/Phaser.GameObjects.Components.Transform.md#setY)


> Source: [src/gameobjects/components/Transform.js#L424](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Transform.js#L424)  
Since: 3.0.0


---

## setZ

### \<instance> setZ([value])


**Description:**

Sets the z position of this Game Object.

Note: The z position does not control the rendering order of 2D Game Objects. Use
[Phaser.GameObjects.Components.Depth#setDepth](../namespace/Phaser.GameObjects.Components.Depth.md#setDepth) instead.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| value | number | Yes | 0 | The z position of this Game Object. |


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This Game Object instance.


**Inherits:** [Phaser.GameObjects.Components.Transform#setZ](../namespace/Phaser.GameObjects.Components.Transform.md#setZ)


> Source: [src/gameobjects/components/Transform.js#L443](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Transform.js#L443)  
Since: 3.0.0


---

## shutdown

### \<instance> shutdown()


**Description:**

Removes all listeners.


**Inherits:** [Phaser.Events.EventEmitter#shutdown](../class/Phaser.Events.EventEmitter.md#shutdown)


> Source: [src/events/EventEmitter.js#L31](https://github.com/phaserjs/phaser/blob/v3.85.2/src/events/EventEmitter.js#L31)  
Since: 3.0.0


---

## toggleData

### \<instance> toggleData(key)


**Description:**

Toggle a boolean value for the given key within this Game Objects Data Manager. If the key doesn't already exist in the Data Manager then it is toggled from false.

If the Game Object has not been enabled for data (via `setDataEnabled`) then it will be enabled
before setting the value.

If the key doesn't already exist in the Data Manager then it is created.

When the value is first set, a `setdata` event is emitted from this Game Object.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| key | string | No | The key to toggle the value for. |


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This GameObject.


**Inherits:** [Phaser.GameObjects.GameObject#toggleData](../class/Phaser.GameObjects.GameObject.md#toggleData)


> Source: [src/gameobjects/GameObject.js#L387](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/GameObject.js#L387)  
Since: 3.23.0


---

## toJSON

### \<instance> toJSON()


**Description:**

Returns a JSON representation of the Game Object.


**Returns:** [Phaser.Types.GameObjects.JSONGameObject](../typedef/Phaser.Types.GameObjects.md#JSONGameObject) - A JSON representation of the Game Object.


**Inherits:** [Phaser.GameObjects.GameObject#toJSON](../class/Phaser.GameObjects.GameObject.md#toJSON)


> Source: [src/gameobjects/GameObject.js#L604](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/GameObject.js#L604)  
Since: 3.0.0


---

## update

### \<instance> update([args])


**Description:**

To be overridden by custom GameObjects. Allows base objects to be used in a Pool.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| args | * | Yes | args |


**Inherits:** [Phaser.GameObjects.GameObject#update](../class/Phaser.GameObjects.GameObject.md#update)


> Source: [src/gameobjects/GameObject.js#L592](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/GameObject.js#L592)  
Since: 3.0.0


---

## updateDisplayOrigin

### \<instance> updateDisplayOrigin()


**Description:**

Updates the Display Origin cached values internally stored on this Game Object.
You don't usually call this directly, but it is exposed for edge-cases where you may.


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This Game Object instance.


**Inherits:** [Phaser.GameObjects.Components.Origin#updateDisplayOrigin](../namespace/Phaser.GameObjects.Components.Origin.md#updateDisplayOrigin)


> Source: [src/gameobjects/components/Origin.js#L182](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Origin.js#L182)  
Since: 3.0.0


---

## willRender

### \<instance> willRender(camera)


**Description:**

Compares the renderMask with the renderFlags to see if this Game Object will render or not.
Also checks the Game Object against the given Cameras exclusion list.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| camera | [Phaser.Cameras.Scene2D.Camera](../class/Phaser.Cameras.Scene2D.Camera.md) | No | The Camera to check against this Game Object. |


**Returns:** boolean - True if the Game Object should be rendered, otherwise false.


**Inherits:** [Phaser.GameObjects.GameObject#willRender](../class/Phaser.GameObjects.GameObject.md#willRender)


> Source: [src/gameobjects/GameObject.js#L617](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/GameObject.js#L617)  
Since: 3.0.0


---

# Private Methods

## FillPathWebGL

### \<instance> FillPathWebGL(pipeline, calcMatrix, src, alpha, dx, dy)


**Description:**

Renders a filled path for the given Shape.


**Access:** private

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| pipeline | [Phaser.Renderer.WebGL.WebGLPipeline](../class/Phaser.Renderer.WebGL.WebGLPipeline.md) | No | The WebGL Pipeline used to render this Shape. |
| calcMatrix | [Phaser.GameObjects.Components.TransformMatrix](../class/Phaser.GameObjects.Components.TransformMatrix.md) | No | The transform matrix used to get the position values. |
| src | [Phaser.GameObjects.Shape](../class/Phaser.GameObjects.Shape.md) | No | The Game Object shape being rendered in this call. |
| alpha | number | No | The base alpha value. |
| dx | number | No | The source displayOriginX. |
| dy | number | No | The source displayOriginY. |


**Inherits:** [Phaser.GameObjects.Shape#FillPathWebGL](../class/Phaser.GameObjects.Shape.md#FillPathWebGL)


> Source: [src/gameobjects/shape/FillPathWebGL.js#L9](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/shape/FillPathWebGL.js#L9)  
Since: 3.13.0


---

## FillStyleCanvas

### \<instance> FillStyleCanvas(ctx, src, [altColor], [altAlpha])


**Description:**

Sets the fillStyle on the target context based on the given Shape.


**Access:** private

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| ctx | CanvasRenderingContext2D | No | The context to set the fill style on. |
| src | [Phaser.GameObjects.Shape](../class/Phaser.GameObjects.Shape.md) | No | The Game Object to set the fill style from. |
| altColor | number | Yes | An alternative color to render with. |
| altAlpha | number | Yes | An alternative alpha to render with. |


**Inherits:** [Phaser.GameObjects.Shape#FillStyleCanvas](../class/Phaser.GameObjects.Shape.md#FillStyleCanvas)


> Source: [src/gameobjects/shape/FillStyleCanvas.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/shape/FillStyleCanvas.js#L7)  
Since: 3.13.0


---

## LineStyleCanvas

### \<instance> LineStyleCanvas(ctx, src, [altColor], [altAlpha])


**Description:**

Sets the strokeStyle and lineWidth on the target context based on the given Shape.


**Access:** private

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| ctx | CanvasRenderingContext2D | No | The context to set the stroke style on. |
| src | [Phaser.GameObjects.Shape](../class/Phaser.GameObjects.Shape.md) | No | The Game Object to set the stroke style from. |
| altColor | number | Yes | An alternative color to render with. |
| altAlpha | number | Yes | An alternative alpha to render with. |


**Inherits:** [Phaser.GameObjects.Shape#LineStyleCanvas](../class/Phaser.GameObjects.Shape.md#LineStyleCanvas)


> Source: [src/gameobjects/shape/LineStyleCanvas.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/shape/LineStyleCanvas.js#L7)  
Since: 3.13.0


---

## prepareBoundsOutput

### \<instance> prepareBoundsOutput(output, [includeParent])


**Description:**

Processes the bounds output vector before returning it.

**Tags:**

 - generic


**Access:** private

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| output | [Phaser.Types.Math.Vector2Like](../typedef/Phaser.Types.Math.md#Vector2Like) | No |  | An object to store the values in. If not provided a new Vector2 will be created. |
| includeParent | boolean | Yes | false | If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? |


**Returns:** [Phaser.Types.Math.Vector2Like](../typedef/Phaser.Types.Math.md#Vector2Like) - The values stored in the output object.


**Inherits:** [Phaser.GameObjects.Components.GetBounds#prepareBoundsOutput](../namespace/Phaser.GameObjects.Components.GetBounds.md#prepareBoundsOutput)


> Source: [src/gameobjects/components/GetBounds.js#L21](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/GetBounds.js#L21)  
Since: 3.18.0


---

## renderCanvas

### \<instance> renderCanvas(renderer, src, camera, parentMatrix)


**Description:**

Renders this Game Object with the Canvas Renderer to the given Camera.
The object will not render if any of its renderFlags are set or it is being actively filtered out by the Camera.
This method should not be called directly. It is a utility function of the Render module.


**Access:** private

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| renderer | [Phaser.Renderer.Canvas.CanvasRenderer](../class/Phaser.Renderer.Canvas.CanvasRenderer.md) | No | A reference to the current active Canvas renderer. |
| src | [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) | No | The Game Object being rendered in this call. |
| camera | [Phaser.Cameras.Scene2D.Camera](../class/Phaser.Cameras.Scene2D.Camera.md) | No | The Camera that is rendering the Game Object. |
| parentMatrix | [Phaser.GameObjects.Components.TransformMatrix](../class/Phaser.GameObjects.Components.TransformMatrix.md) | No | This transform matrix is defined if the game object is nested |


> Source: [src/gameobjects/shape/rectangle/RectangleCanvasRenderer.js#L11](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/shape/rectangle/RectangleCanvasRenderer.js#L11)  
Since: 3.13.0


---

## renderWebGL

### \<instance> renderWebGL(renderer, src, camera, parentMatrix)


**Description:**

Renders this Game Object with the WebGL Renderer to the given Camera.
The object will not render if any of its renderFlags are set or it is being actively filtered out by the Camera.
This method should not be called directly. It is a utility function of the Render module.


**Access:** private

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| renderer | [Phaser.Renderer.WebGL.WebGLRenderer](../class/Phaser.Renderer.WebGL.WebGLRenderer.md) | No | A reference to the current active WebGL renderer. |
| src | [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) | No | The Game Object being rendered in this call. |
| camera | [Phaser.Cameras.Scene2D.Camera](../class/Phaser.Cameras.Scene2D.Camera.md) | No | The Camera that is rendering the Game Object. |
| parentMatrix | [Phaser.GameObjects.Components.TransformMatrix](../class/Phaser.GameObjects.Components.TransformMatrix.md) | No | This transform matrix is defined if the game object is nested |


> Source: [src/gameobjects/shape/rectangle/RectangleWebGLRenderer.js#L11](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/shape/rectangle/RectangleWebGLRenderer.js#L11)  
Since: 3.13.0


---

## StrokePathWebGL

### \<instance> StrokePathWebGL(pipeline, src, alpha, dx, dy)


**Description:**

Renders a stroke outline around the given Shape.


**Access:** private

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| pipeline | [Phaser.Renderer.WebGL.WebGLPipeline](../class/Phaser.Renderer.WebGL.WebGLPipeline.md) | No | The WebGL Pipeline used to render this Shape. |
| src | [Phaser.GameObjects.Shape](../class/Phaser.GameObjects.Shape.md) | No | The Game Object shape being rendered in this call. |
| alpha | number | No | The base alpha value. |
| dx | number | No | The source displayOriginX. |
| dy | number | No | The source displayOriginY. |


**Inherits:** [Phaser.GameObjects.Shape#StrokePathWebGL](../class/Phaser.GameObjects.Shape.md#StrokePathWebGL)


> Source: [src/gameobjects/shape/StrokePathWebGL.js#L9](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/shape/StrokePathWebGL.js#L9)  
Since: 3.13.0


---

## updateData

### \<instance> updateData()


**Description:**

Internal method that updates the data and path values.


**Access:** private


**Returns:** [Phaser.GameObjects.Rectangle](../class/Phaser.GameObjects.Rectangle.md) - This Game Object instance.


> Source: [src/gameobjects/shape/rectangle/Rectangle.js#L104](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/shape/rectangle/Rectangle.js#L104)  
Since: 3.13.0


---

# Public Members

## active

### active: boolean


**Description:**

The active state of this Game Object.
A Game Object with an active state of `true` is processed by the Scenes UpdateList, if added to it.
An active object is one which is having its logic and internal systems updated.


**Inherits:** [Phaser.GameObjects.GameObject#active](../class/Phaser.GameObjects.GameObject.md#active)


> Source: [src/gameobjects/GameObject.js#L113](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/GameObject.js#L113)  
Since: 3.0.0


---

## alpha

### alpha: number


**Description:**

The alpha value of the Game Object.

This is a global value, impacting the entire Game Object, not just a region of it.


**Inherits:** [Phaser.GameObjects.Components.AlphaSingle#alpha](../namespace/Phaser.GameObjects.Components.AlphaSingle.md#alpha)


> Source: [src/gameobjects/components/AlphaSingle.js#L68](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/AlphaSingle.js#L68)  
Since: 3.0.0


---

## angle

### angle: number


**Description:**

The angle of this Game Object as expressed in degrees.

Phaser uses a right-hand clockwise rotation system, where 0 is right, 90 is down, 180/-180 is left
and -90 is up.

If you prefer to work in radians, see the `rotation` property instead.


**Inherits:** [Phaser.GameObjects.Components.Transform#angle](../namespace/Phaser.GameObjects.Components.Transform.md#angle)


> Source: [src/gameobjects/components/Transform.js#L211](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Transform.js#L211)  
Since: 3.0.0


---

## blendMode

### blendMode: [Phaser.BlendModes](../namespace/Phaser.BlendModes.md), string, number


**Description:**

Sets the Blend Mode being used by this Game Object.

This can be a const, such as `Phaser.BlendModes.SCREEN`, or an integer, such as 4 (for Overlay)

Under WebGL only the following Blend Modes are available:

* NORMAL
* ADD
* MULTIPLY
* SCREEN
* ERASE

Canvas has more available depending on browser support.

You can also create your own custom Blend Modes in WebGL.

Blend modes have different effects under Canvas and WebGL, and from browser to browser, depending
on support. Blend Modes also cause a WebGL batch flush should it encounter a new blend mode. For these
reasons try to be careful about the construction of your Scene and the frequency of which blend modes
are used.


**Inherits:** [Phaser.GameObjects.Components.BlendMode#blendMode](../namespace/Phaser.GameObjects.Components.BlendMode.md#blendMode)


> Source: [src/gameobjects/components/BlendMode.js#L30](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/BlendMode.js#L30)  
Since: 3.0.0


---

## body

### body: [Phaser.Physics.Arcade.Body](../class/Phaser.Physics.Arcade.Body.md), [Phaser.Physics.Arcade.StaticBody](../class/Phaser.Physics.Arcade.StaticBody.md), MatterJS.BodyType


**Description:**

If this Game Object is enabled for Arcade or Matter Physics then this property will contain a reference to a Physics Body.


**Inherits:** [Phaser.GameObjects.GameObject#body](../class/Phaser.GameObjects.GameObject.md#body)


> Source: [src/gameobjects/GameObject.js#L186](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/GameObject.js#L186)  
Since: 3.0.0


---

## cameraFilter

### cameraFilter: number


**Description:**

A bitmask that controls if this Game Object is drawn by a Camera or not.
Not usually set directly, instead call `Camera.ignore`, however you can
set this property directly using the Camera.id property:


**Inherits:** [Phaser.GameObjects.GameObject#cameraFilter](../class/Phaser.GameObjects.GameObject.md#cameraFilter)


> Source: [src/gameobjects/GameObject.js#L160](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/GameObject.js#L160)  
Since: 3.0.0


---

## closePath

### closePath: boolean


**Description:**

Controls if this Shape path is closed during rendering when stroked.
Note that some Shapes are always closed when stroked (such as Ellipse shapes)


**Inherits:** [Phaser.GameObjects.Shape#closePath](../class/Phaser.GameObjects.Shape.md#closePath)


> Source: [src/gameobjects/shape/Shape.js#L161](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/shape/Shape.js#L161)  
Since: 3.13.0


---

## data

### data: [Phaser.Data.DataManager](../class/Phaser.Data.DataManager.md)


**Description:**

A Data Manager.
It allows you to store, query and get key/value paired information specific to this Game Object.
`null` by default. Automatically created if you use `getData` or `setData` or `setDataEnabled`.


**Inherits:** [Phaser.GameObjects.GameObject#data](../class/Phaser.GameObjects.GameObject.md#data)


> Source: [src/gameobjects/GameObject.js#L136](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/GameObject.js#L136)  
Since: 3.0.0


---

## defaultPipeline

### defaultPipeline: [Phaser.Renderer.WebGL.WebGLPipeline](../class/Phaser.Renderer.WebGL.WebGLPipeline.md)


**Description:**

The initial WebGL pipeline of this Game Object.

If you call `resetPipeline` on this Game Object, the pipeline is reset to this default.

**Tags:**

 - webglOnly


**Inherits:** [Phaser.GameObjects.Components.Pipeline#defaultPipeline](../namespace/Phaser.GameObjects.Components.Pipeline.md#defaultPipeline)


> Source: [src/gameobjects/components/Pipeline.js#L19](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Pipeline.js#L19)  
Since: 3.0.0


---

## depth

### depth: number


**Description:**

The depth of this Game Object within the Scene. Ensure this value is only ever set to a number data-type.

The depth is also known as the 'z-index' in some environments, and allows you to change the rendering order
of Game Objects, without actually moving their position in the display list.

The default depth is zero. A Game Object with a higher depth
value will always render in front of one with a lower value.

Setting the depth will queue a depth sort event within the Scene.


**Inherits:** [Phaser.GameObjects.Components.Depth#depth](../namespace/Phaser.GameObjects.Components.Depth.md#depth)


> Source: [src/gameobjects/components/Depth.js#L30](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Depth.js#L30)  
Since: 3.0.0


---

## displayHeight

### displayHeight: number


**Description:**

The displayed height of this Game Object.

This value takes into account the scale factor.

Setting this value will adjust the Game Object's scale property.


**Inherits:** [Phaser.GameObjects.Shape#displayHeight](../class/Phaser.GameObjects.Shape.md#displayHeight)


> Source: [src/gameobjects/shape/Shape.js#L393](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/shape/Shape.js#L393)  
Since: 3.13.0


---

## displayList

### displayList: [Phaser.GameObjects.DisplayList](../class/Phaser.GameObjects.DisplayList.md), [Phaser.GameObjects.Layer](../class/Phaser.GameObjects.Layer.md)


**Description:**

Holds a reference to the Display List that contains this Game Object.

This is set automatically when this Game Object is added to a Scene or Layer.

You should treat this property as being read-only.


**Inherits:** [Phaser.GameObjects.GameObject#displayList](../class/Phaser.GameObjects.GameObject.md#displayList)


> Source: [src/gameobjects/GameObject.js#L53](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/GameObject.js#L53)  
Since: 3.50.0


---

## displayOriginX

### displayOriginX: number


**Description:**

The horizontal display origin of this Game Object.
The origin is a normalized value between 0 and 1.
The displayOrigin is a pixel value, based on the size of the Game Object combined with the origin.


**Inherits:** [Phaser.GameObjects.Components.Origin#displayOriginX](../namespace/Phaser.GameObjects.Components.Origin.md#displayOriginX)


> Source: [src/gameobjects/components/Origin.js#L64](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Origin.js#L64)  
Since: 3.0.0


---

## displayOriginY

### displayOriginY: number


**Description:**

The vertical display origin of this Game Object.
The origin is a normalized value between 0 and 1.
The displayOrigin is a pixel value, based on the size of the Game Object combined with the origin.


**Inherits:** [Phaser.GameObjects.Components.Origin#displayOriginY](../namespace/Phaser.GameObjects.Components.Origin.md#displayOriginY)


> Source: [src/gameobjects/components/Origin.js#L88](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Origin.js#L88)  
Since: 3.0.0


---

## displayWidth

### displayWidth: number


**Description:**

The displayed width of this Game Object.

This value takes into account the scale factor.

Setting this value will adjust the Game Object's scale property.


**Inherits:** [Phaser.GameObjects.Shape#displayWidth](../class/Phaser.GameObjects.Shape.md#displayWidth)


> Source: [src/gameobjects/shape/Shape.js#L368](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/shape/Shape.js#L368)  
Since: 3.13.0


---

## fillAlpha

### fillAlpha: number


**Description:**

The fill alpha value used by this Shape.


**Inherits:** [Phaser.GameObjects.Shape#fillAlpha](../class/Phaser.GameObjects.Shape.md#fillAlpha)


> Source: [src/gameobjects/shape/Shape.js#L105](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/shape/Shape.js#L105)  
Since: 3.13.0


---

## fillColor

### fillColor: number


**Description:**

The fill color used by this Shape.


**Inherits:** [Phaser.GameObjects.Shape#fillColor](../class/Phaser.GameObjects.Shape.md#fillColor)


> Source: [src/gameobjects/shape/Shape.js#L96](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/shape/Shape.js#L96)  
Since: 3.13.0


---

## geom

### geom: any


**Description:**

The source Shape data. Typically a geometry object.
You should not manipulate this directly.


**Inherits:** [Phaser.GameObjects.Shape#geom](../class/Phaser.GameObjects.Shape.md#geom)


> Source: [src/gameobjects/shape/Shape.js#L65](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/shape/Shape.js#L65)  
Since: 3.13.0


---

## hasPostPipeline

### hasPostPipeline: boolean


**Description:**

Does this Game Object have any Post Pipelines set?

**Tags:**

 - webglOnly


**Inherits:** [Phaser.GameObjects.Components.PostPipeline#hasPostPipeline](../namespace/Phaser.GameObjects.Components.PostPipeline.md#hasPostPipeline)


> Source: [src/gameobjects/components/PostPipeline.js#L21](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/PostPipeline.js#L21)  
Since: 3.60.0


---

## hasTransformComponent

### hasTransformComponent: boolean


**Description:**

A property indicating that a Game Object has this component.


**Inherits:** [Phaser.GameObjects.Components.Transform#hasTransformComponent](../namespace/Phaser.GameObjects.Components.Transform.md#hasTransformComponent)


> Source: [src/gameobjects/components/Transform.js#L26](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Transform.js#L26)  
Since: 3.60.0


---

## height

### height: number


**Description:**

The native (un-scaled) height of this Game Object.

Changing this value will not change the size that the Game Object is rendered in-game.
For that you need to either set the scale of the Game Object (`setScale`) or use
the `displayHeight` property.


**Inherits:** [Phaser.GameObjects.Shape#height](../class/Phaser.GameObjects.Shape.md#height)


> Source: [src/gameobjects/shape/Shape.js#L195](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/shape/Shape.js#L195)  
Since: 3.0.0


---

## ignoreDestroy

### ignoreDestroy: boolean


**Description:**

This Game Object will ignore all calls made to its destroy method if this flag is set to `true`.
This includes calls that may come from a Group, Container or the Scene itself.
While it allows you to persist a Game Object across Scenes, please understand you are entirely
responsible for managing references to and from this Game Object.


**Inherits:** [Phaser.GameObjects.GameObject#ignoreDestroy](../class/Phaser.GameObjects.GameObject.md#ignoreDestroy)


> Source: [src/gameobjects/GameObject.js#L196](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/GameObject.js#L196)  
Since: 3.5.0


---

## input

### input: [Phaser.Types.Input.InteractiveObject](../typedef/Phaser.Types.Input.md#InteractiveObject)


**Description:**

If this Game Object is enabled for input then this property will contain an InteractiveObject instance.
Not usually set directly. Instead call `GameObject.setInteractive()`.


**Inherits:** [Phaser.GameObjects.GameObject#input](../class/Phaser.GameObjects.GameObject.md#input)


> Source: [src/gameobjects/GameObject.js#L175](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/GameObject.js#L175)  
Since: 3.0.0


---

## isFilled

### isFilled: boolean


**Description:**

Controls if this Shape is filled or not.
Note that some Shapes do not support being filled (such as Line shapes)


**Inherits:** [Phaser.GameObjects.Shape#isFilled](../class/Phaser.GameObjects.Shape.md#isFilled)


> Source: [src/gameobjects/shape/Shape.js#L141](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/shape/Shape.js#L141)  
Since: 3.13.0


---

## isStroked

### isStroked: boolean


**Description:**

Controls if this Shape is stroked or not.
Note that some Shapes do not support being stroked (such as Iso Box shapes)


**Inherits:** [Phaser.GameObjects.Shape#isStroked](../class/Phaser.GameObjects.Shape.md#isStroked)


> Source: [src/gameobjects/shape/Shape.js#L151](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/shape/Shape.js#L151)  
Since: 3.13.0


---

## lineWidth

### lineWidth: number


**Description:**

The stroke line width used by this Shape.


**Inherits:** [Phaser.GameObjects.Shape#lineWidth](../class/Phaser.GameObjects.Shape.md#lineWidth)


> Source: [src/gameobjects/shape/Shape.js#L132](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/shape/Shape.js#L132)  
Since: 3.13.0


---

## mask

### mask: [Phaser.Display.Masks.BitmapMask](../class/Phaser.Display.Masks.BitmapMask.md), [Phaser.Display.Masks.GeometryMask](../class/Phaser.Display.Masks.GeometryMask.md)


**Description:**

The Mask this Game Object is using during render.


**Inherits:** [Phaser.GameObjects.Components.Mask#mask](../namespace/Phaser.GameObjects.Components.Mask.md#mask)


> Source: [src/gameobjects/components/Mask.js#L19](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Mask.js#L19)  
Since: 3.0.0


---

## name

### name: string


**Description:**

The name of this Game Object.
Empty by default and never populated by Phaser, this is left for developers to use.


**Inherits:** [Phaser.GameObjects.GameObject#name](../class/Phaser.GameObjects.GameObject.md#name)


> Source: [src/gameobjects/GameObject.js#L102](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/GameObject.js#L102)  
Since: 3.0.0


---

## originX

### originX: number


**Description:**

The horizontal origin of this Game Object.
The origin maps the relationship between the size and position of the Game Object.
The default value is 0.5, meaning all Game Objects are positioned based on their center.
Setting the value to 0 means the position now relates to the left of the Game Object.
Set this value with `setOrigin()`.


**Inherits:** [Phaser.GameObjects.Components.Origin#originX](../namespace/Phaser.GameObjects.Components.Origin.md#originX)


> Source: [src/gameobjects/components/Origin.js#L30](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Origin.js#L30)  
Since: 3.0.0


---

## originY

### originY: number


**Description:**

The vertical origin of this Game Object.
The origin maps the relationship between the size and position of the Game Object.
The default value is 0.5, meaning all Game Objects are positioned based on their center.
Setting the value to 0 means the position now relates to the top of the Game Object.
Set this value with `setOrigin()`.


**Inherits:** [Phaser.GameObjects.Components.Origin#originY](../namespace/Phaser.GameObjects.Components.Origin.md#originY)


> Source: [src/gameobjects/components/Origin.js#L45](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Origin.js#L45)  
Since: 3.0.0


---

## parentContainer

### parentContainer: [Phaser.GameObjects.Container](../class/Phaser.GameObjects.Container.md)


**Description:**

The parent Container of this Game Object, if it has one.


**Inherits:** [Phaser.GameObjects.GameObject#parentContainer](../class/Phaser.GameObjects.GameObject.md#parentContainer)


> Source: [src/gameobjects/GameObject.js#L93](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/GameObject.js#L93)  
Since: 3.4.0


---

## pathData

### pathData: Array.\<number>


**Description:**

Holds the polygon path data for filled rendering.


**Inherits:** [Phaser.GameObjects.Shape#pathData](../class/Phaser.GameObjects.Shape.md#pathData)


> Source: [src/gameobjects/shape/Shape.js#L76](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/shape/Shape.js#L76)  
Since: 3.13.0


---

## pathIndexes

### pathIndexes: Array.\<number>


**Description:**

Holds the earcut polygon path index data for filled rendering.


**Inherits:** [Phaser.GameObjects.Shape#pathIndexes](../class/Phaser.GameObjects.Shape.md#pathIndexes)


> Source: [src/gameobjects/shape/Shape.js#L86](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/shape/Shape.js#L86)  
Since: 3.13.0


---

## pipeline

### pipeline: [Phaser.Renderer.WebGL.WebGLPipeline](../class/Phaser.Renderer.WebGL.WebGLPipeline.md)


**Description:**

The current WebGL pipeline of this Game Object.

**Tags:**

 - webglOnly


**Inherits:** [Phaser.GameObjects.Components.Pipeline#pipeline](../namespace/Phaser.GameObjects.Components.Pipeline.md#pipeline)


> Source: [src/gameobjects/components/Pipeline.js#L32](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Pipeline.js#L32)  
Since: 3.0.0


---

## pipelineData

### pipelineData: object


**Description:**

An object to store pipeline specific data in, to be read by the pipelines this Game Object uses.

**Tags:**

 - webglOnly


**Inherits:** [Phaser.GameObjects.Components.Pipeline#pipelineData](../namespace/Phaser.GameObjects.Components.Pipeline.md#pipelineData)


> Source: [src/gameobjects/components/Pipeline.js#L43](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Pipeline.js#L43)  
Since: 3.50.0


---

## postFX

### postFX: [Phaser.GameObjects.Components.FX](../class/Phaser.GameObjects.Components.FX.md)


**Description:**

The Post FX component of this Game Object.

This component allows you to apply a variety of built-in effects to this Game Object, such
as glow, blur, bloom, displacements, vignettes and more. You access them via this property,
for example:

```js
const player = this.add.sprite();
player.postFX.addBloom();
```

All FX are WebGL only and do not have Canvas counterparts.

Please see the FX Class for more details and available methods.

This property is always `null` until the `initPostPipeline` method is called.

**Tags:**

 - webglOnly


**Inherits:** [Phaser.GameObjects.Components.PostPipeline#postFX](../namespace/Phaser.GameObjects.Components.PostPipeline.md#postFX)


> Source: [src/gameobjects/components/PostPipeline.js#L88](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/PostPipeline.js#L88)  
Since: 3.60.0


---

## postPipelineData

### postPipelineData: object


**Description:**

An object to store pipeline specific data in, to be read by the pipelines this Game Object uses.

**Tags:**

 - webglOnly


**Inherits:** [Phaser.GameObjects.Components.PostPipeline#postPipelineData](../namespace/Phaser.GameObjects.Components.PostPipeline.md#postPipelineData)


> Source: [src/gameobjects/components/PostPipeline.js#L46](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/PostPipeline.js#L46)  
Since: 3.60.0


---

## postPipelines

### postPipelines: Array.\<[Phaser.Renderer.WebGL.Pipelines.PostFXPipeline](../class/Phaser.Renderer.WebGL.Pipelines.PostFXPipeline.md)>


**Description:**

The WebGL Post FX Pipelines this Game Object uses for post-render effects.

The pipelines are processed in the order in which they appear in this array.

If you modify this array directly, be sure to set the
`hasPostPipeline` property accordingly.

**Tags:**

 - webglOnly


**Inherits:** [Phaser.GameObjects.Components.PostPipeline#postPipelines](../namespace/Phaser.GameObjects.Components.PostPipeline.md#postPipelines)


> Source: [src/gameobjects/components/PostPipeline.js#L31](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/PostPipeline.js#L31)  
Since: 3.60.0


---

## preFX

### preFX: [Phaser.GameObjects.Components.FX](../class/Phaser.GameObjects.Components.FX.md)


**Description:**

The Pre FX component of this Game Object.

This component allows you to apply a variety of built-in effects to this Game Object, such
as glow, blur, bloom, displacements, vignettes and more. You access them via this property,
for example:

```js
const player = this.add.sprite();
player.preFX.addBloom();
```

Only the following Game Objects support Pre FX:

* Image
* Sprite
* TileSprite
* Text
* RenderTexture
* Video

All FX are WebGL only and do not have Canvas counterparts.

Please see the FX Class for more details and available methods.

**Tags:**

 - webglOnly


**Inherits:** [Phaser.GameObjects.Components.PostPipeline#preFX](../namespace/Phaser.GameObjects.Components.PostPipeline.md#preFX)


> Source: [src/gameobjects/components/PostPipeline.js#L56](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/PostPipeline.js#L56)  
Since: 3.60.0


---

## renderFlags

### renderFlags: number


**Description:**

The flags that are compared against `RENDER_MASK` to determine if this Game Object will render or not.
The bits are 0001 | 0010 | 0100 | 1000 set by the components Visible, Alpha, Transform and Texture respectively.
If those components are not used by your custom class then you can use this bitmask as you wish.


**Inherits:** [Phaser.GameObjects.GameObject#renderFlags](../class/Phaser.GameObjects.GameObject.md#renderFlags)


> Source: [src/gameobjects/GameObject.js#L148](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/GameObject.js#L148)  
Since: 3.0.0


---

## rotation

### rotation: number


**Description:**

The angle of this Game Object in radians.

Phaser uses a right-hand clockwise rotation system, where 0 is right, PI/2 is down, +-PI is left
and -PI/2 is up.

If you prefer to work in degrees, see the `angle` property instead.


**Inherits:** [Phaser.GameObjects.Components.Transform#rotation](../namespace/Phaser.GameObjects.Components.Transform.md#rotation)


> Source: [src/gameobjects/components/Transform.js#L238](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Transform.js#L238)  
Since: 3.0.0


---

## scale

### scale: number


**Description:**

This is a special setter that allows you to set both the horizontal and vertical scale of this Game Object
to the same value, at the same time. When reading this value the result returned is `(scaleX + scaleY) / 2`.

Use of this property implies you wish the horizontal and vertical scales to be equal to each other. If this
isn't the case, use the `scaleX` or `scaleY` properties instead.


**Inherits:** [Phaser.GameObjects.Components.Transform#scale](../namespace/Phaser.GameObjects.Components.Transform.md#scale)


> Source: [src/gameobjects/components/Transform.js#L113](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Transform.js#L113)  
Since: 3.18.0


---

## scaleX

### scaleX: number


**Description:**

The horizontal scale of this Game Object.


**Inherits:** [Phaser.GameObjects.Components.Transform#scaleX](../namespace/Phaser.GameObjects.Components.Transform.md#scaleX)


> Source: [src/gameobjects/components/Transform.js#L149](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Transform.js#L149)  
Since: 3.0.0


---

## scaleY

### scaleY: number


**Description:**

The vertical scale of this Game Object.


**Inherits:** [Phaser.GameObjects.Components.Transform#scaleY](../namespace/Phaser.GameObjects.Components.Transform.md#scaleY)


> Source: [src/gameobjects/components/Transform.js#L180](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Transform.js#L180)  
Since: 3.0.0


---

## scene

### scene: [Phaser.Scene](../class/Phaser.Scene.md)


**Description:**

A reference to the Scene to which this Game Object belongs.

Game Objects can only belong to one Scene.

You should consider this property as being read-only. You cannot move a
Game Object to another Scene by simply changing it.


**Inherits:** [Phaser.GameObjects.GameObject#scene](../class/Phaser.GameObjects.GameObject.md#scene)


> Source: [src/gameobjects/GameObject.js#L39](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/GameObject.js#L39)  
Since: 3.0.0


---

## scrollFactorX

### scrollFactorX: number


**Description:**

The horizontal scroll factor of this Game Object.

The scroll factor controls the influence of the movement of a Camera upon this Game Object.

When a camera scrolls it will change the location at which this Game Object is rendered on-screen.
It does not change the Game Objects actual position values.

A value of 1 means it will move exactly in sync with a camera.
A value of 0 means it will not move at all, even if the camera moves.
Other values control the degree to which the camera movement is mapped to this Game Object.

Please be aware that scroll factor values other than 1 are not taken in to consideration when
calculating physics collisions. Bodies always collide based on their world position, but changing
the scroll factor is a visual adjustment to where the textures are rendered, which can offset
them from physics bodies if not accounted for in your code.


**Inherits:** [Phaser.GameObjects.Components.ScrollFactor#scrollFactorX](../namespace/Phaser.GameObjects.Components.ScrollFactor.md#scrollFactorX)


> Source: [src/gameobjects/components/ScrollFactor.js#L16](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/ScrollFactor.js#L16)  
Since: 3.0.0


---

## scrollFactorY

### scrollFactorY: number


**Description:**

The vertical scroll factor of this Game Object.

The scroll factor controls the influence of the movement of a Camera upon this Game Object.

When a camera scrolls it will change the location at which this Game Object is rendered on-screen.
It does not change the Game Objects actual position values.

A value of 1 means it will move exactly in sync with a camera.
A value of 0 means it will not move at all, even if the camera moves.
Other values control the degree to which the camera movement is mapped to this Game Object.

Please be aware that scroll factor values other than 1 are not taken in to consideration when
calculating physics collisions. Bodies always collide based on their world position, but changing
the scroll factor is a visual adjustment to where the textures are rendered, which can offset
them from physics bodies if not accounted for in your code.


**Inherits:** [Phaser.GameObjects.Components.ScrollFactor#scrollFactorY](../namespace/Phaser.GameObjects.Components.ScrollFactor.md#scrollFactorY)


> Source: [src/gameobjects/components/ScrollFactor.js#L40](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/ScrollFactor.js#L40)  
Since: 3.0.0


---

## state

### state: number, string


**Description:**

The current state of this Game Object.

Phaser itself will never modify this value, although plugins may do so.

Use this property to track the state of a Game Object during its lifetime. For example, it could change from
a state of 'moving', to 'attacking', to 'dead'. The state value should be an integer (ideally mapped to a constant
in your game code), or a string. These are recommended to keep it light and simple, with fast comparisons.
If you need to store complex data about your Game Object, look at using the Data Component instead.


**Inherits:** [Phaser.GameObjects.GameObject#state](../class/Phaser.GameObjects.GameObject.md#state)


> Source: [src/gameobjects/GameObject.js#L77](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/GameObject.js#L77)  
Since: 3.16.0


---

## strokeAlpha

### strokeAlpha: number


**Description:**

The stroke alpha value used by this Shape.


**Inherits:** [Phaser.GameObjects.Shape#strokeAlpha](../class/Phaser.GameObjects.Shape.md#strokeAlpha)


> Source: [src/gameobjects/shape/Shape.js#L123](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/shape/Shape.js#L123)  
Since: 3.13.0


---

## strokeColor

### strokeColor: number


**Description:**

The stroke color used by this Shape.


**Inherits:** [Phaser.GameObjects.Shape#strokeColor](../class/Phaser.GameObjects.Shape.md#strokeColor)


> Source: [src/gameobjects/shape/Shape.js#L114](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/shape/Shape.js#L114)  
Since: 3.13.0


---

## tabIndex

### tabIndex: number


**Description:**

The Tab Index of the Game Object.
Reserved for future use by plugins and the Input Manager.


**Inherits:** [Phaser.GameObjects.GameObject#tabIndex](../class/Phaser.GameObjects.GameObject.md#tabIndex)


> Source: [src/gameobjects/GameObject.js#L125](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/GameObject.js#L125)  
Since: 3.0.0


---

## type

### type: string


**Description:**

A textual representation of this Game Object, i.e. `sprite`.
Used internally by Phaser but is available for your own custom classes to populate.


**Inherits:** [Phaser.GameObjects.GameObject#type](../class/Phaser.GameObjects.GameObject.md#type)


> Source: [src/gameobjects/GameObject.js#L67](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/GameObject.js#L67)  
Since: 3.0.0


---

## visible

### visible: boolean


**Description:**

The visible state of the Game Object.

An invisible Game Object will skip rendering, but will still process update logic.


**Inherits:** [Phaser.GameObjects.Components.Visible#visible](../namespace/Phaser.GameObjects.Components.Visible.md#visible)


> Source: [src/gameobjects/components/Visible.js#L31](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Visible.js#L31)  
Since: 3.0.0


---

## w

### w: number


**Description:**

The w position of this Game Object.


**Inherits:** [Phaser.GameObjects.Components.Transform#w](../namespace/Phaser.GameObjects.Components.Transform.md#w)


> Source: [src/gameobjects/components/Transform.js#L103](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Transform.js#L103)  
Since: 3.0.0


---

## width

### width: number


**Description:**

The native (un-scaled) width of this Game Object.

Changing this value will not change the size that the Game Object is rendered in-game.
For that you need to either set the scale of the Game Object (`setScale`) or use
the `displayWidth` property.


**Inherits:** [Phaser.GameObjects.Shape#width](../class/Phaser.GameObjects.Shape.md#width)


> Source: [src/gameobjects/shape/Shape.js#L182](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/shape/Shape.js#L182)  
Since: 3.13.0


---

## x

### x: number


**Description:**

The x position of this Game Object.


**Inherits:** [Phaser.GameObjects.Components.Transform#x](../namespace/Phaser.GameObjects.Components.Transform.md#x)


> Source: [src/gameobjects/components/Transform.js#L70](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Transform.js#L70)  
Since: 3.0.0


---

## y

### y: number


**Description:**

The y position of this Game Object.


**Inherits:** [Phaser.GameObjects.Components.Transform#y](../namespace/Phaser.GameObjects.Components.Transform.md#y)


> Source: [src/gameobjects/components/Transform.js#L80](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Transform.js#L80)  
Since: 3.0.0


---

## z

### z: number


**Description:**

The z position of this Game Object.

Note: The z position does not control the rendering order of 2D Game Objects. Use
[Phaser.GameObjects.Components.Depth#depth](../namespace/Phaser.GameObjects.Components.Depth.md#depth) instead.


**Inherits:** [Phaser.GameObjects.Components.Transform#z](../namespace/Phaser.GameObjects.Components.Transform.md#z)


> Source: [src/gameobjects/components/Transform.js#L90](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Transform.js#L90)  
Since: 3.0.0


---

# Private Members

## _alpha

### _alpha: number


**Description:**

Private internal value. Holds the global alpha value.


**Access:** private


**Inherits:** [Phaser.GameObjects.Components.AlphaSingle#_alpha](../namespace/Phaser.GameObjects.Components.AlphaSingle.md#_alpha)


> Source: [src/gameobjects/components/AlphaSingle.js#L22](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/AlphaSingle.js#L22)  
Since: 3.0.0


---

## _blendMode

### _blendMode: number


**Description:**

Private internal value. Holds the current blend mode.


**Access:** private


**Inherits:** [Phaser.GameObjects.Components.BlendMode#_blendMode](../namespace/Phaser.GameObjects.Components.BlendMode.md#_blendMode)


> Source: [src/gameobjects/components/BlendMode.js#L19](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/BlendMode.js#L19)  
Since: 3.0.0


---

## _depth

### _depth: number


**Description:**

Private internal value. Holds the depth of the Game Object.


**Access:** private


**Inherits:** [Phaser.GameObjects.Components.Depth#_depth](../namespace/Phaser.GameObjects.Components.Depth.md#_depth)


> Source: [src/gameobjects/components/Depth.js#L19](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Depth.js#L19)  
Since: 3.0.0


---

## _originComponent

### _originComponent: boolean


**Description:**

A property indicating that a Game Object has this component.


**Access:** private


**Inherits:** [Phaser.GameObjects.Components.Origin#_originComponent](../namespace/Phaser.GameObjects.Components.Origin.md#_originComponent)


> Source: [src/gameobjects/components/Origin.js#L19](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Origin.js#L19)  
Since: 3.2.0


---

## _rotation

### _rotation: number


**Description:**

Private internal value. Holds the rotation value in radians.


**Access:** private


**Inherits:** [Phaser.GameObjects.Components.Transform#_rotation](../namespace/Phaser.GameObjects.Components.Transform.md#_rotation)


> Source: [src/gameobjects/components/Transform.js#L59](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Transform.js#L59)  
Since: 3.0.0


---

## _scaleX

### _scaleX: number


**Description:**

Private internal value. Holds the horizontal scale value.


**Access:** private


**Inherits:** [Phaser.GameObjects.Components.Transform#_scaleX](../namespace/Phaser.GameObjects.Components.Transform.md#_scaleX)


> Source: [src/gameobjects/components/Transform.js#L37](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Transform.js#L37)  
Since: 3.0.0


---

## _scaleY

### _scaleY: number


**Description:**

Private internal value. Holds the vertical scale value.


**Access:** private


**Inherits:** [Phaser.GameObjects.Components.Transform#_scaleY](../namespace/Phaser.GameObjects.Components.Transform.md#_scaleY)


> Source: [src/gameobjects/components/Transform.js#L48](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Transform.js#L48)  
Since: 3.0.0


---

## _tempLine

### _tempLine: [Phaser.Geom.Line](../class/Phaser.Geom.Line.md)


**Description:**

Private internal value.
A Line used when parsing internal path data to avoid constant object re-creation.


**Access:** private


**Inherits:** [Phaser.GameObjects.Shape#_tempLine](../class/Phaser.GameObjects.Shape.md#_tempLine)


> Source: [src/gameobjects/shape/Shape.js#L171](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/shape/Shape.js#L171)  
Since: 3.13.0


---

## _visible

### _visible: boolean


**Description:**

Private internal value. Holds the visible value.


**Access:** private


**Inherits:** [Phaser.GameObjects.Components.Visible#_visible](../namespace/Phaser.GameObjects.Components.Visible.md#_visible)


> Source: [src/gameobjects/components/Visible.js#L20](https://github.com/phaserjs/phaser/blob/v3.85.2/src/gameobjects/components/Visible.js#L20)  
Since: 3.0.0


---

