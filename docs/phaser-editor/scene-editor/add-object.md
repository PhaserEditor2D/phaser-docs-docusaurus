---
slug: add-object
title: Adding an object to the scene
---

There are multiple ways to create new objects in the scene. Dropping an asset or built-in type from the Blocks view. Or pasting an object (including those from other scenes).

Also, following a [set of rules](#automatic-parenting-of-new-objects), the editor determines (or create) the parent for the new object.

## Blocks view integration

When the Scene Editor is active, the Blocks view shows the “blocks” you can get and drop into the scene, to create new objects. These are the blocks:

* Built-in types. Phaser types and other Phaser Editor related types.
* Assets defined in the Asset Pack file, like images, spritesheet frames, animations, spine animations, etc...
* The prefabs you created.

The first items shown in the Blocks view are the primitive object types supported by the Scene Editor. You can drag on type on drop it into the scene to create an instance of the type, with the default values.

In case of images, sprites or tile-sprites, the new instance does not contain a texture. If you want to set a texture to the object, you can select one in the [Texture section](./game-objects/common-object-properties#text-property).

![Add an empty image to the scene.](https://cdn.phaser.io/editor-docs/scene-editor-blocks-view--add-empty-image-02242021.webp)

However, if you drop an image or texture frame into the scene, the editor creates a new [Image object](./game-objects/image-object) and sets the dropped texture as the object’s texture.

Maybe, instead of an [Image](./game-objects/image-object), you need to create a [TileSprite](./game-objects/tile-sprite-object) with the same texture, in that case, you can just [convert it to a TileSprite](./game-objects/replace-object-type).

If you drop a **BitmapFont**, the editor creates a [Bitmap Text](./game-objects/bitmap-text-object).

If you drop a Prefab, the editor creates an instance of it.

![Blocks view.](https://cdn.phaser.io/editor-docs/scene-editor-blocks-view-02242021.webp)

The context menu shows different options for grouping the assets: by type, by Asset Pack file, and by file location:

![Grouping the assets.](https://cdn.phaser.io/editor-docs/scene-editor-blocks-view-grouping-02282021.webp)

Also, the Blocks view’s tab, shows “tab sections” which you can select for filtering the content:

![Select different tab-sections for filtering content.](https://cdn.phaser.io/editor-docs/scene-editor-blocks-view-tab-section-03012021.webp)

Notice that there are three options:

**Built-in**: only the built-in types are shown in the view.

**Prefabs**: only the prefab files are shown.

**Assets**: only the assets defined in Asset Pack files are shown.

## Add built-in object from context menu

The Scene Editor’s context menu shows different options for creating a new built-in object.

The **Add Object** sub-menu shows all categories of the built-in object types:

![Add Object context menu.](https://cdn.phaser.io/editor-docs/scene-editor-add-object-menu-02232021.webp)

Also, the **Add…** (`A`) option opens a dialog with all the built-in types. That’s great for quickly adding a new object:

![Add Object dialog.](https://cdn.phaser.io/editor-docs/scene-editor-add-object-dialog-02232021.webp)

## Automatic parenting of new objects

When a new object is created (by dropping a block, or by pasting the object) a set of rules are evaluated to determine the parent of the new object:

* If there is an object selected in the scene:
  * If it is a container, then the new object will be added to it.
  * Else, if it has a parent container, then the new object will be added to the parent.
* If the scene is a prefab scene:
  * If the scene is empty, the new object is added to the scene.
  * If the [root object](./prefabs/prefab-object) is a container, then the new object will be added to it.
  * Else, a new container is created and the old [root object](./prefabs/prefab-object) and the newly added object will be added to the new container. So the scene will have a new [root object](./prefabs/prefab-object): the automatically created container.

