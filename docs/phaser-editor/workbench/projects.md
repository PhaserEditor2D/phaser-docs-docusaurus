---
slug: projects
title: Projects
---

A Phaser Editor project is just a folder. It contains the files of your game and generally it is the root of the web path of the game. This means, that probably you should place the `index.html` file in the root of the folder.

There are project setups (for example, based on [WebpackJS](https://webpack.js.org)) where the project folder isn’t the root of the game.

[Learn more about setting the public root of the project](../asset-pack-editor/add-file#setting-the-root-folder-for-the-asset-files)

In [Phaser Editor Core](../intro/distributions#phaser-editor-core), you should pass the project path as a program argument:

```bash
$ PhaserEditor -project /path/to/project
```

In [Phaser Editor Desktop](../intro/distributions#phaser-editor-desktop), you can select the project folder or create a new one.

[Learn how to create your first project](../first-steps/create-first-project)

![Create project](https://cdn.phaser.io/editor-docs/first-steps-desktop-new-project-1-20240926.webp)

## Reload project

Phaser Editor is not created with collaborative editing in mind. This means, that it assumes that only one user is working on the same project at the same time. You can use source control managers like `Git` to collaborate with your team.

However, it may be possible that you change the project files with external tools and you need to refresh that changes in the IDE. When the IDE gets the focus, it does an incremental reload of the changes made by external tools, but you can force (and we recommend) a full reload of the project:

* Pressing `Ctrl+Alt+R`.
* Or clicking on the **Reload Project** option of the [Main menu](../workbench/main-menu).

A full reload of the project also may help to fix a glitch with the Scene Editor or any other editor.

A reload of the project is different from a reload of the whole web page because only the files of the project are requested again. But a full web page reload is a good procedure if you see your IDE is consuming a lot of memory resources.

You can read the [Resources caching](../misc/resources-caching) section for additional information.

## Excluding files from project

It is possible that you merge Phaser Editor files with other files from other tools. In this case, you can filter the files shown in the [Files view](./files-view).

[Learn how to filter resources in the project](../misc/resources-filtering)

## Files cache

Phaser Editor caches the files of the project to improve the performance of the IDE. This cache is stored mainly in the memory and browser's storage. It is not common, but if you see that the IDE is showing outdated files or in case of huge projects that consume a lot of memory, you can clear the cache by refreshing the page (`Ctrl+R`).

[Learn more about resources cache](../misc/resources-caching).