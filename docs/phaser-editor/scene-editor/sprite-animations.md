---
title: Sprite animations
slug: sprite-animations
---

A Sprite game object is an image object with the capability of displaying frame-by-frame animations.

In Phaser Editor there are two workflows for making animations in your game:

## Workflow 1

Using the [Animations Editor](../animations-editor/intro). It gets the image frames from an [Asset Pack file](../asset-pack-editor/asset-pack-file) and groups the frames into animations. You can set different properties to the animation, like the frame rate, repetitions, delay, etc… and finally, you load the animation file into the [Asset Pack file](../asset-pack-editor/asset-pack-file).

## Workflow 2

Exporting the animations from the Asesprite software. It outputs Asperite animation files that are Phaser-compatible and that you can load in an [Asset Pack file](../asset-pack-editor/asset-pack-file).

## Finally

Once the animation assets (produced by the [Animations Editor](../animations-editor/intro) or Asesprite) are defined in the [Asset Pack file](../asset-pack-editor/asset-pack-file), you can use them in different tools of the Scene Editor:

- The animation blocks in the Blocks view. You can create a Sprite game object by [dropping an animation block into the scene](./game-objects/sprite-object).
  ![Create sprite from animation block](https://cdn.phaser.io/editor-docs/scene-editor-sprite-create-from-animation-block-20240917.webp)
- The [Animation and Animation Configuration sections](./game-objects/common-object-properties#animation-properties) of the **Inspector** view. It allows playing an animation on a Sprite game object.
  ![Animation properties.](https://cdn.phaser.io/editor-docs/scene-editor-animations-props-custom-config-20240917.webp)
  If you tick the **Animation Preview** parameter, it will play the animation in real-time in the scene editor.
  ![Coin animation preview](https://cdn.phaser.io/editor-docs/coin.gif)
- The [Animation Key user property type](./prefabs/prefab-user-properties#animation-key-property-type). It allows selecting the name of an animation defined in an [Asset Pack file](../asset-pack-editor/asset-pack-file).
  ![Animation Key user property](https://cdn.phaser.io/editor-docs/prefab-user-props-animation-key-dialog-20231027.webp)

## Sprite animation preview

Phaser Editor provides a dialog for previewing the sprite animations:

![Sprite animation preview dialog.](https://cdn.phaser.io/editor-docs/scene-editor-sprite-animations-preview-dialog-20231102.webp)

You can open this dialog in different contexts:

* In the [Asset Pack Editor](../asset-pack-editor/intro), when you select a Sprite animation in the Outline view:
  
  ![Preview in the Asset Pack editor.](https://cdn.phaser.io/editor-docs/aseprite-preview-asset-pack-20231102.webp)

* In the Blocks view of the Scene Editor, as a Sprite animation block:
  
  ![Animation block.](https://cdn.phaser.io/editor-docs/scene-editor-aseprite-animation-block-preview-1-20231102.webp)![Animation block properties.](https://cdn.phaser.io/editor-docs/scene-editor-aseprite-animation-block-preview-2-20231102.webp)

* In the [Animation properties section](./game-objects/common-object-properties#animation-properties), when selecting a Sprite game object in the Scene Editor:

  ![Animation properties.](https://cdn.phaser.io/editor-docs/scene-editor-sprite-animation-preview-inspector-20231102.webp)

## Aseprite animation support

Aseprite ([www.aseprite.org](https://www.aseprite.org)) is a popular software for making pixel art and animations. Phaser provides an Aseprite files loader and a method for making animations with the files.

This is the workflow for working with Aseprite animations in Phaser Editor:

* Export the Asesprite files to the Phaser Editor project. You should follow [these instructions](#aseprite-exporting-instructions) for exporting the files. The following image shows the atlas and PNG files of the “paladin” and “tank” animations:
  
  ![Aseprite exported files.](https://cdn.phaser.io/editor-docs/scene-editor-aseprite-export-1-20231102.webp)

* Import the Asesprite files in an [Asset Pack file](../asset-pack-editor/asset-pack-file). You can select the atlas files (`.json`) and import them with the [import buttons of the Inspector view](../asset-pack-editor/add-file#importing-from-the-files-view):
  
  ![Select the Aseprite files](https://cdn.phaser.io/editor-docs/scene-editor-import-aseprite-files-files-view-20231102.webp)![Import the files](https://cdn.phaser.io/editor-docs/scene-editor-import-aseprite-files-inspector-view-20231102.webp)

  You can check the files are correctly defined in the [Asset Pack file](../asset-pack-editor/asset-pack-file):
  ![Aseprite files in the pack file](https://cdn.phaser.io/editor-docs/scene-editor-aseprite-pack-file-1-20231102.webp)![Aseprite files in the pack file](https://cdn.phaser.io/editor-docs/scene-editor-aseprite-pack-file-2-20231102.webp)

* Now the Asesprite files are in the [Asset Pack file](../asset-pack-editor/asset-pack-file) you can access the animations in the different tools of the editor:
  
  ![Aseprite animation in the scene editor blocks view.](https://cdn.phaser.io/editor-docs/scene-editor-aseprite-animation-block-20231102.webp)

## Aseprite Code Snippets

In Phaser, before playing an Asesprite animation in a sprite, you should create the animations in the Animations Manager.

For creating the animations you should call the [createFromAseprite](https://docs.phaser.io/api-documentation/class/animations-animationmanager#createfromaseprite) and pass as argument the Asesprite asset key.

In Phaser Editor you can add this chunk of code in an assisted way:

* Right-click on the scene. It opens the context menu. In the **Code Snippet** menu, select the **Add Create Animations From Aseprite** option.
  
  ![Select the Aseprite code snippet to add.](https://cdn.phaser.io/editor-docs/scene-editor-aseprite-code-snippet-1-20231107.webp)

* It opens a dialog with all the Asesprite asset keys defined in the [Asset Pack files](../asset-pack-editor/asset-pack-file) of the project. Select the one you want to use in your project. Probably all of them:

  ![Select the Aseprite_ asset key.](https://cdn.phaser.io/editor-docs/scene-editor-aseprite-code-snippet-2-20231107.webp)

* Finally, when you compile the scene, it generates these lines of codes at the first lines of the **create()** method of the scene:
  
  ```javascript
  // snippets
  this.anims.createFromAseprite("paladin");
  this.anims.createFromAseprite("tank");
  ```

### Aseprite exporting instructions

Taken from the [Phaser documentation](https://docs.phaser.io/api-documentation/class/loader-loaderplugin#aseprite_anchor):

To export a compatible JSON file in Aseprite, please do the following:

- Go to "File - Export Sprite Sheet"
- On the Layout tab: 2a. Set the “Sheet type” to “Packed” 2b. Set the “Constraints” to “None” 2c. Check the “Merge Duplicates” checkbox
- On the Sprite tab: 3a. Set “Layers” to “Visible layers” 3b. Set “Frames” to “All frames”, unless you only wish to export a sub-set of tags
- On the Borders tab: 4a. Check the “Trim Sprite” and “Trim Cells” options 4b. Ensure “Border Padding”, “Spacing” and “Inner Padding” are all 0 (1 is usually enough)
- On the Output tab: 5a. Check “Output File”, give your image a name and make sure you choose “png files” as the file type 5b. Check “JSON Data” and give your json file a name 5c. The JSON Data type can be either a Hash or Array, Phaser doesn’t mind. 5d. Make sure “Tags” is checked in the Meta options 5e. In the “Item Filename” input box, make sure it says just `{frame}` and nothing more.
- Click export.

This was tested with Aseprite 1.2.25.

This will export a png and json file which you can load using the Aseprite Loader
