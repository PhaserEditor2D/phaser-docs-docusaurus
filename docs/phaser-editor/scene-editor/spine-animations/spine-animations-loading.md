---
slug: spine-animations-loading
title: Loading the Spine assets
---

To load a [Spine](https://esotericsoftware.com) animation into a Phaser game, you first have to export the animation from the [Spine](https://esotericsoftware.com) editor.

Exporting an animation produces the following assets:

* Skeleton and animation data.
* Texture atlas with the images of the skeleton.

You can export the skeleton and animation data to a JSON file or a binary file (`.skel`). Phaser Editor supports both formats. Also, you can export the skeleton images into a texture atlas. It produces a `.atlas` file with the frames info and the `.png` images.

[Learn more about Assets Management in the Spine editor](https://esotericsoftware.com/spine-phaser#Asset-Management)

The common way to import the [Spine](https://esotericsoftware.com) assets into a Phaser game is using the Phaser loader methods:

* `spineBinary(key, url)` - Loads `.skel` files containing skeleton and animation data.
* `spineJson(key, url)` - Loads the `.json` files containing skeleton and animation data.
* `spineAtlas(key, url, premultipliedAlpha)` - Loads the texture atlas files.

This is an example:

```javascript
preload() {
   this.load.spineBinary("skeleton", "path/to/skeleton.skel");
   this.load.spineAtlas("skeleton-atlas", "path/to/skeleton.atlas");
}
```

However, Phaser Editor provides the [Asset Pack Editor](../../asset-pack-editor), which is a visual tool for loading the assets into the Phaser games.

The workflow for importing the [Spine](https://esotericsoftware.com) assets into the Asset Pack file is:

* Export the assets from the [Spine](https://esotericsoftware.com) editor into the “assets” folder of the game project:

  ![Copy Spine files into the assets folder of your game.](https://cdn.phaser.io/editor-docs/spine-animations-assets-20230923.webp)

* In the [Files view](../../workbench/files-view), select the data `.json` file (or `.skel` if it is exported with the binary format):

  ![Select the data file in the Files view](https://cdn.phaser.io/editor-docs/spine-animations-select-data-file-20230923.webp)

* In the Inspector view, the **Asset Pack Entry** section shows a button for importing the selected file into an Asset Pack file:

  ![Import the file into an asset pack.](https://cdn.phaser.io/editor-docs/spine-animations-import-data-file-20230923.webp)

* Do the same process but with the `.atlas` file. Select it in the [Files view](../../workbench/files-view) and add it to an asset pack:

  ![Select the atlas file.](https://cdn.phaser.io/editor-docs/spine-animations-select-atlas-file-20230923.webp)![Add the atlas file to the asset pack.](https://cdn.phaser.io/editor-docs/spine-animations-add-atlas-to-pack-20230923.webp)
  
* Open the `asset-pack.json` file in the [Asset Pack Editor](../../asset-pack-editor) and check the Spine assets are there:

  ![The spine assets in the Asset Pack editor.](https://cdn.phaser.io/editor-docs/spine-animations-asset-pack-20230923.webp)

If everything is well, you will find both the data file and the atlas file in the pack editor. If you select the data file entry, the Inspector view shows the info and the animation preview. You can click on the **Preview Animations** button. It opens a dialog where you can play the animations. We talk more about this dialog later.

![Preview button.](https://cdn.phaser.io/editor-docs/spine-animations-asset-preview-button-20230923.webp)![Preview dialog.](https://cdn.phaser.io/editor-docs/spine-animations-asset-preview-dialog-20230923.webp)

## Spine assets default naming rules

**Important** The [Spine Phaser runtime](https://esotericsoftware.com/spine-phaser) allows using a different atlas for the same skeleton. For previewing a skeleton, the editor looks for an atlas asset with the same key but with the `-atlas` suffix. In the above example, the skeleton data has the `spineboy` key, and the atlas asset the `spineboy-atlas` key:

![Spine data and atlas assets.](https://cdn.phaser.io/editor-docs/spine-animations-data-and-atlas-assets-20230923.webp)
