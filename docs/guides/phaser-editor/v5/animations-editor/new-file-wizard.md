---
slug: new-file-wizard
title: Create a new Animations file
---

To create an Animations file, open the New File dialog and select the **Animations File** option:

![Select create a new animations file.](https://cdn.phaser.io/editor-docs/animations-new-file-1.webp)

It opens the **New Animations File** dialog and asks for the name of the file and the location:

![Select name and location.](https://cdn.phaser.io/editor-docs/animations-new-file-2.webp)

The file is created and opened in the Animations Editor.

In the majority of the cases, you want to add the animations file to an [Asset Pack file](../asset-pack-editor/asset-pack-file). To do this, select the file in the Files view and the Inspector view will show you the option to add the animations to an [Asset Pack file](../asset-pack-editor/asset-pack-file):

![Import animation file into the Asset Pack file.](https://cdn.phaser.io/editor-docs/animations-add-to-pack-file.webp)

Also, you can load the animations file using the [Animations Loader](https://docs.phaser.io/api-documentation/class/loader-loaderplugin#animation):

```javascript
this.load.animation("playerAnimations", "assets/animations.json");
```
