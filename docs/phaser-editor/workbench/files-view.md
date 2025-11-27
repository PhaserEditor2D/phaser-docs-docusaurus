---
slug: files-view
title: Files view
---

The Files view shows the files of the project. The files are displayed in a tree structure, like in many other file navigators.

Like the other [content viewers](../misc/content-viewers) present in the IDE, the Files view shows inline previews of a certain type of files. At the same time, you can zoom in/out them by pressing the `Shift` key and rolling the mouse wheel.

![Files view zooming.](https://cdn.phaser.io/editor-docs/files-view-zoom-04052020.webp)

## Context menu

The context menu lists a couple of common file operations.

The **New…** sub-menu shows shortcuts to create new files related to the IDE tools.

![Context menu of the Files view.](../images/files-view-context-menu-20241220.webp)

The **Open With** sub-menu shows all the editors you can use to open a selected file.

There **Rename**, **Move**, **Copy To** and **Move to Trash** options work just like in any other file manager. But warning, at this moment, these operations cannot be undone, so take care of them. In the Desktop distribution of the editor, the **Move to Trash** operation moves the file to the system trash.

If you run the server locally (not using the `-public` option), then the context menu shows the **Locate File** item. It opens the default file manager of your OS at the location of the selected file or folder.

Similarly, the **Open in Terminal** command opens the OS terminal at the location of the selected file or folder.

The **Add Files** opens the UI to [copy external files to the project](./upload-dialog.md).

## Inspector view integration

The Inspector view shows the properties of the objects selected in the active view or part. When you select a file in the Files view, the Inspector view displays different property sections of the file.

In all cases, the Inspector view shows the **File** section. It displays the **Name**, **Full Name**, **Size**, and a button to open the file in an editor.

In addition, plugins can provide their own file property sections for Inspector view. There are the cases of the images preview, the scenes preview or the [Asset Pack Editor section](../asset-pack-editor/add-file#importing-from-the-files-view), which allow importing the files to the assets manifest.

![Inspector view shows the selected file properties.](../images/files-view-inspector-20241220.webp)
