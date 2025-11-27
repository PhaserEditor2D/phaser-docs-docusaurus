---
slug: spine-animations-game-object
title: Creating a SpineGameObject
---

The [SpineGameObject](https://esotericsoftware.com/spine-phaser#SpineGameObject) is the Phaser game object implementation to display, control, and customize [Spine](https://esotericsoftware.com) animations.

The [Spine Phaser runtime](https://esotericsoftware.com/spine-phaser) provides the `spine()` factory for creating a [SpineGameObject](https://esotericsoftware.com/spine-phaser#SpineGameObject). This is an example:

```javascript
const spineObject = this.add.spine(400, 500, "spineboy", "spineboy-atlas");
```

But you don’t need to write that code. The Scene Editor can generate that code for you. You only need to drag a [Spine](https://esotericsoftware.com) block from the Blocks view and drop it on the scene.

Let’s see the different ways of doing this.


## Create a Spine object with a SpineGameObject built-in block

The main way of adding a [SpineGameObject](https://esotericsoftware.com/spine-phaser#SpineGameObject) to the scene is by dropping the **SpineGameObject** block on the scene. This block is located in the **Built-in** section of the Blocks view, under the **Spine** folder. Drag it and drop it on the scene:

![Add spine game object to the scene.](https://cdn.phaser.io/editor-docs/spine-animations-add-game-object-1-20230924.webp)

It opens a configuration dialog for selecting the skeleton data key and the atlas key to be used by the [SpineGameObject](https://esotericsoftware.com/spine-phaser#SpineGameObject). Every [SpineGameObject](https://esotericsoftware.com/spine-phaser#SpineGameObject) requires a reference to the skeleton data and the atlas. This means, you first have to [add the skeleton data and atlas files to an Asset Pack file](spine-animations-loading). In addition, the Scene Editor requires that you select the skin of the animation.

This is the workflow:

* Select the skeleton data and press **Next**:

  ![Select skeleton data.](https://cdn.phaser.io/editor-docs/spine-animations-add-object-data-20230924.webp)

* Select the atlas and press **Next**:

  ![Select the atlas](https://cdn.phaser.io/editor-docs/spine-animations-add-object-atlas-20230924.webp)

* Select the skin and press **Finish**:

  ![Select the skin.](https://cdn.phaser.io/editor-docs/spine-animations-add-object-skin-20230924.webp)

* Finally, it adds the [SpineGameObject](https://esotericsoftware.com/spine-phaser#SpineGameObject) to the scene:

  ![Spine game object in the scene.](https://cdn.phaser.io/editor-docs/spine-animations-add-obejct-done-20230924.webp)


## Create a Spine object with a skeleton data block

The **Spine JSON** and **Spine Binary** sections of the Blocks view show all the skeleton data you [defined in the Asset Pack file](./spine-animations-loading). You can drag a skeleton data block and drop it on the scene. It shows the configuration dialog to select the atlas and the skin, just like in the previous section. The next image shows the `spineboy` skeleton block:

![Add a skeleton block.](https://cdn.phaser.io/editor-docs/spine-animations-add-skeleton-block-20230924.webp)


## Create a Spine object with a skeleton’s skin block

If you imported the skeleton data and the atlas assets in the Asset Pack following the [default naming rules](spine-animations-loading#spine-assets-default-naming-rules), then the Blocks view shows a special **skin** block inside the skeleton data block.

Drag this skin block and drop it on the scene. It creates the [SpineGameObject](https://esotericsoftware.com/spine-phaser#SpineGameObject) right away, without showing the configuration dialog:

![Add the skin block.](https://cdn.phaser.io/editor-docs/spine-animations-add-object-skin-block-20230924.webp)
