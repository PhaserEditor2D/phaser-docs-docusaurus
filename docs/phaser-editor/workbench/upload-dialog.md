---
slug: upload-dialog
title: Uploading files
---

To upload files or folders to your project you only need to drag the files from the Operating System Explorer (like Windows Explorer or Finder) and drop them into the app. You can drop the files on any part of the app. It then opens a dialog to select the destination folder in the project:

![Select destination folder](https://cdn.phaser.io/editor-docs/upload-select-folder.webp)

After selecting the destination folder, the files are uploaded to the project. The next time, the dialog will open in the last selected folder.

In addition to dropping the files on any part of the app, you can select a folder in the [Files view](./files-view) and drop the files in the [Inspector view](./inspector-view). This section also shows a **Browser Files** button to open the Operating System file chooser dialog:

![Add Files section](https://cdn.phaser.io/editor-docs/upload-add-files-section-inspector-view-20240903.webp)

Also, you can select a folder in the [Files view](./files-view), right-click, and select the **Add Files** option. It opens the Operating System file chooser dialog:

![description](https://cdn.phaser.io/editor-docs/upload-browse-files-20240903.webp)

When the files are uploaded to the project, they are selected in the [Files view](./files-view) and the [Inspector view](./inspector-view) shows the **Asset Pack Entry** section. The **Asset Pack Entry** section allows you to add new files to an Asset Pack file, which makes it ready for using the assets in the Scene Editor.

In Phaser Editor, you must declare the assets in an Asset Pack manifest so the engine can load them. The Asset Pack manifest is a JSON file that contains the list of assets. Learn more about the [Asset Pack manifest](../asset-pack-editor/intro) and about how you can [import the files](../asset-pack-editor/add-file#importing-from-the-files-view).

![Add files to the asset pack](https://cdn.phaser.io/editor-docs/upload-asset-pack-section-20240903.webp)

The **Asset Pack Entry** section shows different buttons to import files with different possible types. In the next screenshot, it shows the options to import a texture atlas:

![Selected files](https://cdn.phaser.io/editor-docs/upload-files-selected-20240903.webp)

![Select the asset pack](https://cdn.phaser.io/editor-docs/upload-asset-pack-import-option-20240903.webp)

As soon as the files are imported into the Asset Pack, the Inspector view will show a Preview of the assets so you can add them to the Scene Editor:

![Asset preview](https://cdn.phaser.io/editor-docs/upload-asset-preview-20240903.webp)
