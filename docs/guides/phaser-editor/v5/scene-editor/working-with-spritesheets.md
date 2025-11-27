---
slug: working-with-spritesheets
title: Working with sprite-sheets
---

There are multiple ways of packing "sprite images" into a single image. One of the most popular is the sprite-sheet.

In Phaser Editor you can define a sprite-sheet asset in the [Asset Pack Editor](../asset-pack-editor/):

![Define sprite-sheet](https://cdn.phaser.io/editor-docs/scene-editor-spritesheet-define-20240530.webp)

Once you have defined the sprite-sheet asset, you can use it in the Scene Editor.

Like any other asset, the sprite-sheet is shown in the Blocks view, and like the atlas-based assets, you can expand a sprite-sheet block to get the frames and drop it into the scene:

![Sprite-sheet blocks](https://cdn.phaser.io/editor-docs/scene-editor-spritesheet-blocks-20240530.webp)

Sprite-sheets are very common in retro-pixel art games. Most of these games use [tile maps](./game-objects/tilemap-object) to create the levels or an important part of the levels. In Phaser Editor you can import a tile map into a scene, however, you may like to add a couple of elements on top of the tilemap and use regular sprite game objects.

There are sprite sheets where the position of the tiles is important, so splitting them as a list in the Blocks view makes it harder to read by the human eyes. In that case, you can get the frames from the Spritesheet Preview section of the Inspector view. This viewer shows the original sprite sheet image but allows picking a frame and dragging it onto the scene. It has a similar behavior to tile sets in map editors like Tiled:

![Sprite sheet viewer](https://cdn.phaser.io/editor-docs/scene-editor-spritesheet-instepctor-view.webp)

The image may be large, but you can hold the `Alt` or `Option` key and drag the mouse to translate the image.

The Inspector view shows the Spritesheet Preview section when you select a sprite sheet asset in the Blocks view, but it also shows the viewer when you select an object in the scene with a sprite sheet texture.

The Spritesheet Preview viewer lacks some features like selecting multiple frames or zooming in/out. In the next releases, we will keep improving it and giving steps toward full support to tilemap creation.
