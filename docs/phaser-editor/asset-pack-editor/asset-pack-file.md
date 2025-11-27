---
slug: asset-pack-file
title: Asset Pack File
---

The Asset Pack file is a manifest (in JSON format) of the files you can load in a game. It is built-in in Phaser and you can use it without Phaser Editor.

[Learn more about Asset Pack loading in Phaser](https://docs.phaser.io/api-documentation/class/loader-loaderplugin#pack)

This file is intensively used in the IDE. Tools like the [Scene Editor](../scene-editor/intro) depends on the information provided in the asset pack files.

You can have multiple [asset pack files](./asset-pack-file) in the project. In fact, it is a good practice in large games to split the assets in different groups (asset pack files) and load them only when it is required.
