---
title: Introduction
slug: overview
---

In a Phaser game, you load the files using the methods of the [Phaser.Loader.LoaderPlugin](https://docs.phaser.io/api-documentation/class/loader-loaderplugin) class. This is how you can [load a sprite-sheet](https://docs.phaser.io/api-documentation/class/loader-loaderplugin#spritesheet) file:

```javascript
this.load.spritesheet("bot", "images/robot.png", {
  frameWidth: 32,
  frameHeight: 38,
});
```

You pass a key (`'bot'`) to identify the file in the [game cache](https://docs.phaser.io/api-documentation/class/cache-cachemanager), the URL of the file (`'images/robot.png'`) and a sprite-sheet configuration object, with other information like the frame size.

Or you can load the file by passing a single argument, a [SpriteSheetFileConfig](https://docs.phaser.io/api-documentation/class/types-loader-filetypes#-spritesheetfileconfig) configuration object:

```javascript
this.load.spritesheet({
  key: "bot",
  url: "images/robot.png",
  frameConfig: {
    frameWidth: 32,
    frameHeight: 38,
  },
});
```

Every file type can be loaded using its configuration object, that is just a JSON object. Following this logic, Phaser has a special type of files that contains the configurations of other files: the [Asset Pack file](../asset-pack-editor/asset-pack-file).

You can load an [Asset Pack file](../asset-pack-editor/asset-pack-file) using the `pack(...)` method of the loader:

```javascript
this.load.pack("level1", "assets/pack.json");
```

The Asset Pack Editor allows you to edit an [Asset Pack file](../asset-pack-editor/asset-pack-file), making it very easy to load the assets in your game. Instead of spending precious time writing the JSON file by hand, with the [Asset Pack Editor](../asset-pack-editor) you can load your assets with a visual tool and smart operations.

![Asset Pack Editor](https://cdn.phaser.io/editor-docs/asset-pack-editor-overview-20241005.webp)

The [Asset Pack file](../asset-pack-editor/asset-pack-file) is relevant in the IDE for two main reasons:

- It is a Phaser built-in format. This means you can create an [Asset Pack file](../asset-pack-editor/asset-pack-file) with Phaser Editor and use it in any Phaser project, even if you are using another IDE.
- The Scene Editor and eventually other tools provided by the IDE are based on Phaser. This means that the IDE can reuse the [Asset Pack file](../asset-pack-editor/asset-pack-file) information to load the assets into its internal tools.
