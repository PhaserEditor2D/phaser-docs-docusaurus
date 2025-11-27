---
slug: plugins
title: Plugins
---

The [Phaser Editor Workbench](../workbench/views) and Phaser development tools are based on plugins.

There are two groups of plugins, built-in and user plugins. The built-in plugins are provided by the editor’s installation. You can install user plugins in your game project or globally.


## Built-in plugins

The editor’s built-in plugins are included in the installation of the editor. These plugins contain the whole workbench and Phaser development tools. You never need to “touch” these plugins, unless you want to run a different version of the editor. For example, if you want to try an in-development version of the editor, you can use the `-editor` flag for setting the path to another implementation of the editor, including the new plugins.

```bash
$ PhaserEditor -project "/path/to/project" -editor "path/to/another/editor"
```


## Global plugins

You can install plugins globally for all installations of the editor. Just place the plugins in the `<user-home>/.phasereditor2d/plugins` folder.


## Project’s plugins

You can provision plugins only for your project. The way is to specify the plugins folders in the [project configuration file](./project-config) `phasereditor2d.config.json`:

```bash
{
    "plugins": ["./my-fonts-plugins", "./my-gameobjects-plugins"]
}
```

All paths are relative to the project’s location.


## Project’s NPM packages

You can install plugins via [NPM](https://www.npmjs.com) packages.

When you start [Phaser Editor Core](../intro/distributions#phaser-editor-core) in a project, it looks for all node modules installed in the `devDependencies` section of the `package.json` file and loads the plugins wrapped by the packages.

For example, you can install the [phasereditor2d-ninepatch-plugin](https://www.npmjs.com/package/phasereditor2d-ninepatch-plugin) this way:

```bash
$ npm install phasereditor2d-ninepatch-plugin --save-dev
```

We recommend installing third-party plugins this way.


## Extra plugins

You can use the `-plugins` flag of [Phaser Editor Core](../intro/distributions#phaser-editor-core) for loading extra plugins:

```bash
$ PhaserEditor -plugins "/demo/plugins;/some/extra/plugins" -project .
```

The argument of the `-plugins` flag is a string with the absolute paths of the extra plugins, separated by a semicolon `;`.
