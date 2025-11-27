---
slug: script-node-libraries
title: Script Nodes libraries
---

In v3.65 of Phaser Editor we introduced the scripts libraries. A script library is a Node module you can install in your project. It works just like any other Node library. You can create common behaviors for your games and distribute them as a Node library.

In Phaser Editor we created a few libraries with basic behaviors. We should keep working on these libraries adding more behaviors:

* [@phaserjs/editor-scripts-base](https://github.com/phaserjs/editor-scripts-base): It is a tiny library with the basic scripts and user components for every game or any other script libraries. It is included by default in all project templates.
* [@phaserjs/editor-scripts-quick](https://github.com/phaserjs/editor-scripts-quick): This is a larger library with script nodes and user components to cover different areas of game development. It is in active development and should evolve in time adding more events and actions.

Please, check every repository for detailed information.


## Installing a script library

As we mentioned before, the script libraries are just Node modules, and you install them as any other node module:

```bash
npm install @phaserjs/editor-scripts-quick
```

The next step is to add the library to the `scripts` section of the `phasereditor2d.config.json` file:

```javascript
{
    "plugins": [],
    "scripts": [
        "@phaserjs/editor-scripts-base",
        "@phaserjs/editor-scripts-quick"
    ],
    "skip": [
        "dist"
    ],
    "playUrl": "http://localhost:8080"
}
```

You can check the libraries are installed in the [Files view](../../workbench/files-view):

![Script libraries.](https://cdn.phaser.io/editor-docs/scene-editor-script-nodes-lirabries-files-view-20231205.webp)

If you look inside the libraries, it contains scene and user component files just like in any project. You can browse, open, and use them as any other script node in your project. Just try not to modify them.

Also, you will notice the script nodes do an extensive usage of the [scene display name](../display-properties) and the [prefab instance display name](../prefabs/prefab-display-properties).

By default, the `node_modules` folder is excluded from the Phaser Editor project. However, when you install a script library, it will include in the project only the files related to the libraries. It means, please, [keep excluding the Node modules](../../misc/resources-filtering) from your game project.


### Script Node libraries for vanilla JavaScript

Many of you like to code or prototype your games with vanilla JavaScript, with no bundler or compiler. You are covered. In the `browser` folder of every script library, there are the files you can include in your project. Please, read the README file of the library for detailed instructions.

When you “copy” a library into your project, there is a `library.txt` file that contains the version of the library. Also, the editor uses that file to present the library files with a lighter color.
