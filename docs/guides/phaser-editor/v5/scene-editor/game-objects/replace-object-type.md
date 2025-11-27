---
slug: replace-object-type
title: Replacing the type of an object
---

When you drop a Blocks view item into the scene, a new object is created. If the item you drop is an image or atlas frame, it creates an [Image](./image-object) object.

However, you can change the type of the [Image](./image-object) object to another, like a Sprite or [TileSprite](tile-sprite-object). You can convert any type of object to any other type. We name it object type replacement.

To replace the type, execute the **Replace Type** command that is shown in the **Type** sub-menu of the context menu. That command opens the **Replace Type** dialog. The dialog shows the different types supported by the editor, including your prefabs. Select the new type and press **Replace**.

For example, you can convert a Text object to a BitmapText:

- Select the Text object, open the context menu and launch the **Replace Type** dialog:

  ![Open the Replace Type dialog.](https://cdn.phaser.io/editor-docs/scene-editor-replace-type-1-04262020.webp)

- In the **Replace Type** dialog, select the BitmapText type. It opens the **Select Bitmap Font** dialog. Select the desired font for the new object (you cannot create a BitmapText object without a font):

  ![Select the font for the new BitmapText.](https://cdn.phaser.io/editor-docs/scene-editor-replace-type-2-06092020.webp)

- Finally, the object is converted to a BitmapText. Note the properties shared by both types are conserved the same. The [Text property](./common-object-properties#text-property) is an example of that:

  ![Converted to BitmapText.](https://cdn.phaser.io/editor-docs/scene-editor-replace-type-3-04262020.webp)


## Keeping the original texture

The **Replace Type** dialog has the option of keep the original texture when you are replacing an image object with a Prefab type. By default, the object will get the texture of the Prefab. However, if you select the **Keep the original texture** option, after the type replacing, the object will unlock the texture property and use the original texture.

![The Keep original texture parameter.](https://cdn.phaser.io/editor-docs/scene-editor-replace-type-keep-original-texture-06092020.webp)
