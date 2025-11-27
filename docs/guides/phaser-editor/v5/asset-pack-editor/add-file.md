---
slug: add-file
title: Importing files
---

Before you can use a file in your game, you must create a configuration entry for it in an [Asset Pack file](../asset-pack-editor/asset-pack-file). This is called **importing** the file.

You can import a file using the Asset Pack Editor’s [Main toolbar](#importing-using-the-main-toolbar) or [Blocks view](#importing-from-the-blocks-view),
or using the [Files view](#importing-from-the-files-view). We’ll discuss each of these in the following sections.

You can un-import a file, removing its [Asset Pack file](../asset-pack-editor/asset-pack-file) entry, by pressing the `Delete` key in the [Asset Pack Editor](../asset-pack-editor) or the [Outline view](./outline-view), or from their context menus.

## Importing using the Main toolbar

These are the steps:

1. With the Asset Pack Editor active, press the **Import File** button in the [Main toolbar](../workbench/main-toolbar) (also available in the context menu or by pressing the `A` key.)
2. It opens a dialog with all the file types. Select the type of file you want to add.

   ![Select the file type.](https://cdn.phaser.io/editor-docs/asset-pack-editor-add-file-1-01012022.webp)

3. When you select a file type, it opens a dialog with a list of candidate files to be added. The candidate files are selected following these rules:

   - The files belong to the folder, or sub-folder, of the editor input file. It is not a restriction of the [Asset Pack file](../asset-pack-editor/asset-pack-file), but we use it to simplify the process of importing the files.
   - The content type or extension of the file names are compatible with the type selected. For example, if you select to add an Image, then only image files are shown.
   - The files are not included in any other [Asset Pack file](../asset-pack-editor/asset-pack-file) in the project.

   However, you always have the option of select any file by pressing the **Show All Files** button of the dialog.
   ![Select the files to be added.](https://cdn.phaser.io/editor-docs/asset-pack-editor-add-file-2-01012022.webp)

4. Change the properties of the file configuration in the Inspector view. Many of the values of the fields are set automatically. The file URL is computed using its relative path in the project. Read [Setting the root folder for the asset files](#setting-the-root-folder-for-the-asset-files) to learn more about the asset file URLs.

   ![Edit properties of a file configuration.](https://cdn.phaser.io/editor-docs/asset-pack-editor-edit-file-inspector-view-2-01012022.webp)

## Importing from the Blocks view

The Blocks view is a general-purpose view that connects with the active editor and provides the “blocks” needed to build the objects of the editor.

When the [Asset Pack Editor](../asset-pack-editor) is active, the Blocks view shows the files that are candidates to be imported. A file is a candidate to be imported if:

- The file belongs to the folder, or sub-folder, of the [Asset Pack file](../asset-pack-editor/asset-pack-file) that is the input of the editor (unless you disable this restriction, as discussed at the end of this section).
- The file is not present in any other [Asset Pack file](../asset-pack-editor/asset-pack-file) in the project.
- If the file has a content type or file name extension that we know is never loaded in games:

  - TypeScript files (`.ts`).
  - Scene Editor files (`.scene`).
  - Another [Asset Pack file](../asset-pack-editor/asset-pack-file).

These are the steps:

1. Select the files to be imported in the Blocks view.
2. Select one of the importing options listed in the **Asset Pack Entry** section of the Inspector view.

   ![Import files from Blocks view.](https://cdn.phaser.io/editor-docs/asset-pack-add-file-from-blocks-view-01012022.webp)

1. When the files are imported, edit the new configurations in the Inspector view.

This is simpler than using the [Main toolbar](../workbench/main-toolbar) button: once you select the files the editor shows only the relevant importing options, based on their content type and name.

## Showing all files in the Blocks view

As we mentioned before, the Blocks view only shows the files in the same folder (or sub-folder) as the [Asset Pack file](../asset-pack-editor/asset-pack-file). You can disable this restriction by checking the **Show All Files in Project** settings in the Inspector view:

![Show all files in the Blocks view.](https://cdn.phaser.io/editor-docs/asset-pack-show-all-files-in-blocks-20210529.webp)

## Importing from the Files view

Importing from the Files view is very similar to importing from the Blocks view, but you don’t need to open the [Asset Pack Editor](../asset-pack-editor).

Whether or not the [Asset Pack Editor](../asset-pack-editor) is active, you can select a one or more file in the Files view and, in the **Asset Pack Entry** section of the Inspector view, select the option to import the file into an existent [Asset Pack file](../asset-pack-editor/asset-pack-file) or a new one.

![Import files from the Files view.](https://cdn.phaser.io/editor-docs/asset-pack-editor-import-from-files-view-1-01012022.webp)

If any file you selected in the Files view already has a configuration entry in an [Asset Pack file](../asset-pack-editor/asset-pack-file), then the Inspector view shows a button to open that [Asset Pack file](../asset-pack-editor/asset-pack-file) in the [Asset Pack Editor](../asset-pack-editor).

![Open Asset Pack file with configuration for the selected files.](https://cdn.phaser.io/editor-docs/asset-pack-editor-import-from-files-view-2-01012022.webp)

## Setting the root folder for the asset files

When you add an entry for a new file to an Asset Pack, the editor uses, as the URL, the project’s relative path to the file. For example, if you add an image file with full path `<project root>/assets/background.png`, then the URL in the Asset Pack entry is set to `assets/background.png`.

That’s fine for a lot of cases. However, if you use web bundlers, like [WebpackJS](https://webpack.js.org) or Parcel, it could be different. Maybe the relative path of the assets is not the same in the project and the website.

Let’s see an example. The [WebpackJS](https://webpack.js.org) project template of Phaser Editor has this layout:

![Project layout of the Webpack template.](https://cdn.phaser.io/editor-docs/asset-pack-static-folder-webpack-03312021.webp)

Notice that if you add the `FufuSuperDino.png` file to an asset pack, it sets the URL of the image to `static/assets/FufuSuperDino.png`. However, the `static` folder is not present in the distribution build (in the website). It only copies its content to the distribution build folder. So, when you open the game in the browser, the path of the image file is `assets/FufuSuperDino.png` (without the `static` element).

Now, Phaser Editor allows changing the root folder for the assets. If you add an empty `publicroot` file, in the `static` folder, then the editor will build the file URL with the relative path to the `<project root>/static` folder:

![the publicroot file.](https://cdn.phaser.io/editor-docs/asset-pack-publicroot-file-03312021.webp)

The rule is simple. When you add an entry to an Asset Pack for a new file, it builds the file’s URL using the relative path to a root folder. To find the root folder, it checks each parent folder of the Asset Pack file until it finds one containing a `publicroot` file.  That folder is then taken as the root folder to build the URL. If no `publicroot` file is found, it defaults to the root folder for the project.
