---
slug: filters
title: Filters
---

Phaser 4 introduced a couple of special filter effects. The effects are built-in, ready to use, and can be applied to any Game Object.

In Phaser Editor you can add effects to a Game Object, tweak the properties, and see the result in the Scene Editor.

These are the effects it supports:

## Adding a filter to a game object

Every game object has a **Filters** section in the Inspector view:

![Filters section](../images/scene-editor-filters-section-20250404.webp)

It contains the **Add** button that allows you to add a new effect to the game object. When you click the **Add** button, the **Shader Effects** dialog appears:

![Filters dialog](../images/scene-editor-filters-dialog-20250404.webp)

There you can select a filter, and then click the **Add** button to add it to the game object.

Another way to add a filter is to select a game object in the scene, open the context menu and populate the **Filter** submenu. It shows the options to add a specific filter:

![Add filter object from the context menu.](../images/scene-editor-filters-menu-add-20250404.webp)

You can add multiple filters to a game object. They are listed in the Outline view just like any other scene object:

![Filters in the Outline view.](../images/scene-editor-filters-outline-view-20250404.webp)

You can select a filter object and delete it, copy/paste it, [change its rendering order](working-with-parent-objects#changing-the-rendering-order-of-children), or tweak its properties.

The Filter object is like any other scene object, by using the [Variable properties](./game-objects/common-object-properties#variable-properties), you can assign the filter to a variable, or a field, or set as a [nested prefab](./prefabs/prefab-nested).

Let’s say you want to tween the intensity of the shadow filter. You can assign the filter to a field by setting the variable scope to **CLASS**:

![Set class scope to filter.](../images/scene-editor-filter-variable-scope-20250404.webp)

Then the [scene compiler](../scene-editor/scene-compiler) generates a variable and field for the FX object:

```javascript
editorCreate() {
    ...
    // shadowFx
    const shadowFx = logo.filters.internal.addShadow(0, 0, 0.1, 1, 0, 6, 1);
    ...
    this.shadowFx = shadowFx;
}

private shadowFx!: Phaser.Filters.Shadow;
```

Then, in the **create** method, you can tween the intensity of the shadow FX:

```javascript
create() {
    ...
    this.add.tween({
        targets: this.shadowFx,
        intensity: 1,
    });
}
```

Not only you can assign a filter to a variable, but you can also make a [nested prefab](./prefabs/prefab-nested) with it. This way, you can reuse the filter in different scenes.

## Filter properties

Every filter type shares a common set of properties. You can edit these properties in the **Filter** section. The properties are about the padding of the filter and the filter list it belongs to (`Internal` or `External`):

![Filter properties](../images/scene-editor-filter-properties-20250404.webp)

## Glow

The Glow is a simple filter that adds a glow to the edges of the image.

[Learn more about the Phaser.Filters.Glow properties in the Phaser documentation](https://docs.phaser.io/api-documentation/class/filters-glow)

![Glow filter](../images/scene-editor-filter-glow-properties-20250404.webp)

## Shadow

The Shadow is a simple and easy-to-use shadowing filter for your images. You can learn more about its properties in the [Phaser.Filters.Shadow Phaser documentation](https://docs.phaser.io/api-documentation/class/filters-shadow).

![Shadow filter](../images/scen-editor-filter-shadow-properties-20250404.webp)

## Pixelate

The Pixelate filter is a visual technique that deliberately reduces the resolution or detail of an image, creating a blocky or mosaic appearance composed of large, visible pixels. This filter can be used for stylistic
purposes, as a homage to retro gaming, or as a means to obscure certain elements within the game, such as during a transition or to censor specific content.

[Learn more about the Phaser.Filters.Pixelate properties in the Phaser documentation](https://docs.phaser.io/api-documentation/class/filters-pixelate)

![Pixelate effect](../images/scene-editor-filters-pixelate-20250404.webp)

## Blur

A Gaussian blur is the result of blurring an image by a Gaussian function. It is a widely used effect,
typically to reduce image noise and reduce detail. The visual effect of this blurring technique is a
smooth blur resembling that of viewing the image through a translucent screen, distinctly different
from the bokeh effect produced by an out-of-focus lens or the shadow of an object under usual illumination.

[Learn more about the Phaser.Filters.Blur properties in the Phaser documentation](https://docs.phaser.io/api-documentation/class/filters-blur)

![Blur effect](../images/scene-editor-filters-blur-20250404.webp)

## Barrel

A barrel effect allows you to apply either a 'pinch' or 'expand' distortion to
a Game Object. The amount of the effect can be modified in real-time.

[Learn more about the Phaser.Filters.Barrel properties in the Phaser documentation](https://docs.phaser.io/api-documentation/class/filters-barrel)

![Barrel filter](../images/scene-editor-filters-barrel.webp)

## Displacement

This filter will draw a displacement around the texture of the Game Object, effectively masking off any area outside of the displacement without the need for an actual mask. You can control the thickness of the displacement, the color of the displacement and the color of the background, should the texture be transparent. You can also control the feathering applied to the displacement, allowing for a harsh or soft edge.

Please note that adding this effect to a Game Object will not change the input area or physics body of the Game Object, should it have one.

[Learn more about the Phaser.Filters.Displacement properties in the Phaser documentation](https://docs.phaser.io/api-documentation/class/filters-displacement)

![Displacement filter](../images/scene-editor-filters-displacement-20250404.webp)

## Bokeh

Bokeh refers to a visual effect that mimics the photographic technique of creating a shallow depth of field. This effect is used to emphasize the game’s main subject or action, by blurring the background or foreground elements, resulting in a more immersive and visually appealing experience. It is achieved through rendering techniques that simulate the out-of-focus areas, giving a sense of depth and realism to the game’s graphics.

See also Tilt Shift.

[Learn more about the Phaser.Filters.Bokeh properties in the Phaser documentation](https://docs.phaser.io/api-documentation/class/filters-bokeh)

![Bokeh filter](../images/scene-editor-filters-bokeh-20250404.webp)!

## Blend

This filter controller manages the blend effect for a Camera. A blend effect allows you to apply another texture to the view using a specific blend mode. This supports blend modes not otherwise available in WebGL.

![Blend filter](../images/scene-editor-filters-blend-20250405.webp)

## Mask

The Mask filter is a special filter that allows you to apply a mask to a Game Object. This filter is used to create a variety of effects, such as revealing or hiding parts of the object based on the mask texture. Phaser allows you to use any texture as a mask, or even a game object as a mask.

In Phaser Editor, we divided the Mask into two different objects: **TextureMask** and **ObjectMask**.

### TextureMask

A background image with a texture mask applied to it:

![Texture mask filter](../images/scene-editor-filters-texture-mask-20250405.webp)

Same filter, but inverted:

![Inverted texture mask filter](../images/scene-editor-filters-texture-mask-invert-20250405.webp)

### ObjectMask

You can use any game object as a mask. For example, a particle emitter can be used as a mask for a background image:

![Object mask filter](../images/scene-editor-filters-object-mask-20250405.webp)

## Threshold

Input values are compared to a threshold value or range. Values below the threshold are set to 0, and values above the threshold are set to 1. Values within the range are linearly interpolated between 0 and 1. This is useful for creating effects such as sharp edges from gradients, or for creating binary effects.

The threshold is stored as a range, with two edges. Each edge has a value for each channel, between 0 and 1. If the two edges are the same, the threshold has no interpolation, and will output either 0 or 1. Each channel can also be inverted.

![Threshold filter](../images/scene-editor-filters-threshold-20250405.webp)

## Sampler

This filter manages a sampler. It doesn't actually render anything, and leaves the image unaltered. It is used to sample a region of the camera view, and pass the results to a callback. This is useful for extracting data from the camera view. This operation is expensive, so use sparingly.

![Sampler filter](../images/scene-editor-filters-sampler-20250405.webp)

## ColorMatrix

ColorMatrix refers to a visual effect that mimics the photographic technique of creating a shallow depth of field. This effect is used to emphasize the game’s main subject or action, by blurring the background or foreground elements, resulting in a more immersive and visually appealing experience. It is achieved through rendering techniques that simulate the out-of-focus areas, giving a sense of depth and realism to the game’s graphics.

[Learn more about the Phaser.Filters.ColorMatrix properties in the Phaser documentation](https://docs.phaser.io/api-documentation/class/filters-colormatrix)

The ColorMatrix FX has different presets that can be used to create different effects.

The presets are:

![ColorMatrix filters](../images/scene-editor-filter-colormatrix-list-20250405.webp)

All presets have in common the Alpha property, which allows you to set the alpha of the filter. The other properties are specific to each preset.

![ColorMatrix properties](../images/scene-editor-filters-colormatrix-grayscale-20250405.webp)
