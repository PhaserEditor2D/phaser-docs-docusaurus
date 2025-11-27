---
visibility: public
slug: masks
title: Masks
description: Masks
seoTitle: Masks
seoDescription: Masks
---

Phaser has the ability to 'mask' Game Objects as they are rendered. A mask allows you to 'hide' areas of the Game Object from rendering. There are two types of mask available: Geometry Masks and Bitmap Masks. The Geometry Mask works by using geometry data in order to create the mask. For example rectangles, circles, ellipses, polygons and more. This data is used to create a path that forms the mask. Internally, it uses what is known as the stencil buffer in WebGL and the clip path in Canvas.

The Bitmap Mask works by using a texture as the mask. This texture can be any size and shape you like, and can be animated, or even a video. The alpha values of the pixels in the texture control what the mask looks like on-screen. For example, a pixel with an alpha value of 0 will hide the Game Object, where-as a pixel with an alpha value of 1 will show it. This allows you to create detailed effects, such as feathering, not possible with a Geometry Mask. Bitmap Masks are a WebGL only feature.

Masks in Phaser are slightly unique in that they are drawn and positioned in world space. A Game Object can only have one mask applied to it at any one time. However, you can apply the same mask to multiple Game Objects, if you wish. They are not Game Object specific and if you then move the Game Object, the mask will not 'follow' it. This means they require some careful planning to use effectively.

## Create mask object

### Bitmap mask

```javascript
var mask =  scene.add.bitmapMask([maskObject], [x], [y], [texture], [frame]);
```

- `maskObject` : The Game Object or Dynamic Texture that will be used as the mask. If null it will generate an Image Game Object using the rest of the arguments.
- `x` : If creating a Game Object, the horizontal position in the world.
- `y` : If creating a Game Object, the vertical position in the world.
- `texture` : If creating a Game Object, the key, or instance of the Texture it will use to render with, as stored in the Texture Manager.
- `frame` : If creating a Game Object, an optional frame from the Texture this Game Object is rendering with.

Examples

1. Create image ([image](../gameobjects/image.md), [sprite](../gameobjects/sprite.md), [bitmap text](../gameobjects/bitmap-text.md), [particles](../gameobjects/particles.md), [text](../gameobjects/text.md)),or [shader](../gameobjects/shader.md)

    ```javascript
    var shape = scene.add.image(x, y, key).setVisible(false);
    ```

2. Create mask

    ```javascript
    var mask = shape.createBitmapMask();
    ```

    or

    ```javascript
    var mask = scene.add.bitmapMask(shape);
    ```

### Geometry mask

The mask is essentially a clipping path which can only make a masked pixel fully visible or fully invisible without changing its alpha (opacity).

1. Create [graphics](../gameobjects/graphics.md)

    ```javascript
    var shape = scene.make.graphics();
    ```

1. Create mask

    ```javascript
    var mask = shape.createGeometryMask();
    ```

## Apply mask object

```javascript
gameObject.setMask(mask); // image.mask = mask;
```

A mask object could be added to many game objects.

!!! error
    Don't put game object and its mask into a [container](../gameobjects/container.md) together.
    See this [testing](https://codepen.io/rexrainbow/pen/mdBZJmb), enable line 22-24.

!!! note
    Bitmap Mask is WebGL only.

!!! note
    Can combine Geometry Masks and Blend Modes on the same Game Object,
    but Bitmap Masks can't.

## Clear mask

- Clear mask

    ```javascript
    image.clearMask();
    ```

- Clear mask and destroy mask object

    ```javascript
    image.clearMask(true);
    ```

## Invert alpha

Only GeometryMask has `inverse alpha` feature.

- Inverse alpha

    ```javascript
    mask.setInvertAlpha();
    // mask.invertAlpha = true;
    ```

- Disable

    ```javascript
    mask.setInvertAlpha(false);
    // mask.invertAlpha = false;
    ```

## Get shape game object

- Bitmap mask

    ```javascript
    var shape = mask.bitmapMask;
    ```

- Geometry mask

    ```javascript
    var shape = mask.geometryMask;
    ```

## Author Credits

Content on this page includes work by:

- [RexRainbow](https://github.com/rexrainbow)
