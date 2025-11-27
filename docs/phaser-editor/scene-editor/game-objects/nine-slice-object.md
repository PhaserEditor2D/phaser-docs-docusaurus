---
slug: nine-slice-object
title: NineSlice
---

The Nine Slice is a built-in Phaser object type: [Phaser.GameObjects.NineSlice](https://docs.phaser.io/api-documentation/class/gameobjects-nineslice). This type allows you to display a texture-based object that can be stretched both horizontally and vertically, but that retains fixed-sized corners.

A Nine Slice is created in code using the [nineSlice factory](https://docs.phaser.io/api-documentation/class/gameobjects-gameobjectfactory#nineslice). This is how the [scene compiler](../scene-compiler) generates the code of a Nine Slice:

```javascript
const nineslice = this.add.nineslice(
                              0, 600, // x, y
                              "ui", "green-button", // texture, frame
                              300, 200, // width, height
                              70, 70, // leftWidth, rightWith
                              60, 60); // topHeight, bottomHeight
```

To create a Nine Slice object in the scene, you should follow these steps:

- Drop a NineSlice built-in block on the scene:

   ![Drop a nine slice object to the scene](https://cdn.phaser.io/editor-docs/scene-editor-create-9slice-1-20230208.webp)

- Select a texture for the object by pressing X or opening the Texture Dialog in the Texture section:

  ![Select texture](https://cdn.phaser.io/editor-docs/scene-editor-nineslice-create-2-20230208.webp)![The result of selecting the texture](https://cdn.phaser.io/editor-docs/scene-editor-nineslice-create-3-20230208.webp)

- Change the size of the object. In the [Size section](./common-object-properties#size-properties), you can set the width and height of the object. Also you can use the [Resize tool](../manipulation-tools#resize-tool) (press the `Z` key):

  ![Resize the object](https://cdn.phaser.io/editor-docs/scene-editor-nineslice-create-4-20230208.webp)

- In the **Nine Slice** properties section, change the size of the slices. Also you can activate the [Nine Slice tool](../manipulation-tools#slice-tool), and change the sizes in the scene:

  ![Edit the slice size.](https://cdn.phaser.io/editor-docs/scene-editor-nineslice-create-5-20230208.webp)

By the way, you can [convert an Image or Sprite or any other game object into a Nine Slice](replace-object-type).


## Nine Slice properties

The Nine Slice type shares properties with other object types:

* [Variable properties](./common-object-properties#variable-properties)
* [Lists properties](./common-object-properties#lists-properties)
* [Transform properties](./common-object-properties#transform-properties)
* [Origin properties](./common-object-properties#origin-properties)
* [Size properties](./common-object-properties#size-properties)
* [Visible property](./common-object-properties#visible-property)
* [Alpha single property](./common-object-properties#alpha-single-property)
* [Tint properties](./common-object-properties#tint-properties)
* [Texture property](./common-object-properties#texture-property)

But also it has particular properties:

![Nine Slice properties.](https://cdn.phaser.io/editor-docs/scene-editor-nine-slice-properties-20230208.webp)

* The [leftWidth](https://docs.phaser.io/api-documentation/class/gameobjects-nineslice#leftwidth) and [rightWidth](https://docs.phaser.io/api-documentation/class/gameobjects-nineslice#rightwidth) properties. It changes the size of the horizontal slices.
* The [topHeight](https://docs.phaser.io/api-documentation/class/gameobjects-nineslice#topheight) and [bottomHeight](https://docs.phaser.io/api-documentation/class/gameobjects-nineslice#bottomheight) properties. It changes the size of the vertical slices.


## Three Slice mode

The NineSlice object can be created with only three horizontal slices. This is an optimization for objects you only need to stretch horizontally. This optimization is activated if you set the **top** and **bottom height** to `0`.

In Phaser Editor, we provide a **ThreeSlice** blocks for creating this particular configuration of the Nine Slice object. You can drop this block into the scene for creating the object:

![Create a 3 slice object.](https://cdn.phaser.io/editor-docs/scene-editor-threeslice-create-1-20230208.webp)

When the Nine Slice object is in the 3-slices mode, you can change the size of the slices with the [Slice Tool](../manipulation-tools#slice-tool) and the **Three Slice properties** section. Note it only shows the width properties and manipulators:

![Changes the width of the slices.](https://cdn.phaser.io/editor-docs/scene-editor-three-slice-create-2-20230208.webp)
