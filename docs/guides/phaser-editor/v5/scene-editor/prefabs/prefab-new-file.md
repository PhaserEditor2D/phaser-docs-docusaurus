---
slug: prefab-new-file
title: Creating a prefab file
---

A Prefab is a scene file that you can create with the [New File dialog](../../workbench/new-file-dialog). In the dialog, select the **Prefab File** option. It opens the **New Prefab** dialog, where you can choose the parent folder and the name for the new Prefab file. That name will be used to generate the class name of the Prefab, so let’s write a valid class name.

![Create prefab file.](https://cdn.phaser.io/editor-docs/scene-editor-new-prefab-file-04202020.webp)

Notice that the Prefab file is just a scene file.  When it is created, it is empty; you should create an object that will be [the prefab object](./prefab-object).

Also, you can create a Prefab directly in the Scene Editor. This operation is very handy. You can select and object and convert it to a new prefab:

- Select an object in the scene.
- Open the context menu and select the **Prefab** → **Create Prefab With Object** option.
  
  ![Create prefab with object.](https://cdn.phaser.io/editor-docs/scene-editor-new-prefab-file-with-object-06082020.webp)

- It opens the **New Prefab File** dialog. Select the file name and the location.
  
  ![New prefab with object dialog.](https://cdn.phaser.io/editor-docs/scene-editor-new-prefab-file-with-object-dialog-06082020.webp)

- The selected object is converted to an instance of the new Prefab. The new Prefab is listed in the Blocks view and is ready to create new instances.
