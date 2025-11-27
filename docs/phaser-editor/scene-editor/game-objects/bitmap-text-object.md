---
slug: bitmap-text-object
title: BitmapText
---

The [Phaser.GameObjects.BitmapText](https://docs.phaser.io/api-documentation/class/gameobjects-bitmaptext) is widely used in Phaser game development, to display texts.

You can create a [Bitmap Text](bitmap-text-object) object in two ways:

* Dragging a BitmapText built-in block and dropping it on the scene.
* Dragging a [BitmapFontFile](https://docs.phaser.io/api-documentation/class/loader-filetypes-bitmapfontfile) key from the Blocks view and dropping it in the scene. The [BitmapFontFile](https://docs.phaser.io/api-documentation/class/loader-filetypes-bitmapfontfile) should be present in an [Asset Pack file](../../asset-pack-editor/asset-pack-file).
  ![Drop BitmapFont key to create a BitmapText object.](https://cdn.phaser.io/editor-docs/scene-editor-bitmap-text-12212020.webp)

[Bitmap Text](bitmap-text-object) objects are created in code using the [bitmapText factory](https://docs.phaser.io/api-documentation/class/gameobjects-gameobjectfactory#bitmaptext):

```javascript
this.add.bitmapText(100, 150, "desyrel", "Hello bitmap text!", 70, 0);
```
## The Bitmap Text properties

The [Bitmap Text](bitmap-text-object) type contains many of the [common object properties](common-object-properties):

* [Variable properties](./common-object-properties#variable-properties)
* [Lists properties](./common-object-properties#lists-properties)
* [Transform properties](./common-object-properties#transform-properties)
* [Origin properties](./common-object-properties#origin-properties)
* [Flip properties](./common-object-properties#flip-properties)
* [Visible property](./common-object-properties#visible-property)
* [Alpha properties](./common-object-properties#alpha-properties)

It also contains the [Text property](../game-objects/common-object-properties#text-property), that is dedicated to all the objects with texts, and its specific properties:

* The [font](https://docs.phaser.io/api-documentation/class/gameobjects-bitmaptext#font) property shows the key of the BitmapFont in the [Asset Pack file](../../asset-pack-editor/asset-pack-file). To change the font, click on the button. It opens the **Select Bitmap Font** dialog.
  ![Select Bitmap Font dialog.](https://cdn.phaser.io/editor-docs/scene-editor-select-bitmap-font-dialog-12212020.webp)
* The [fontSize](https://docs.phaser.io/api-documentation/class/gameobjects-bitmaptext#fontsize) property.
* The [align](https://docs.phaser.io/api-documentation/class/gameobjects-bitmaptext#align) property.
* The [letterSpacing](https://docs.phaser.io/api-documentation/class/gameobjects-bitmaptext#letterspacing) property.
* The [dropShadow](https://docs.phaser.io/api-documentation/class/gameobjects-bitmaptext#setdropshadow) related properties.
