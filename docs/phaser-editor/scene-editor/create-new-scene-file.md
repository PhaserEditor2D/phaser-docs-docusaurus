---
slug: create-new-scene-file
title: Create a new Scene file
---

These are the steps to create a new scene file:

1. Open the [New File dialog](../workbench/new-file-dialog).
2. Select the **Scene File** option. This opens the **New Scene File** dialog.
3. In the new dialog, select the location of the new file.
4. Write the name of the scene file. The `.scene` extension is added automatically, if not set.
5. Press the **Create** button. The file will be created and opened in the Scene Editor.

![New scene file.](https://cdn.phaser.io/editor-docs/scene-editor-new-file-04102020.webp)


## Settings

When a new scene is created, it will use the default settings. However, if there are other scene files, some general settings will be taken from the latest modified scene. This allows to keep the same general settings for all the scenes of your project. In the future, we should implement a better way to set general project settings.

These are the settings that are copied when creating a new scene file:

* **borderX**
* **borderY**
* **borderWidth**
* **borderHeight**
* **compilerOutputLanguage**
* **compilerInsertSpaces**
* **compilerTabSize**
