---
slug: project-config
title: Project configuration
---

Any folder is a valid Phaser Editor project. However, it is convenient to create a `phasereditor2d.config.json` project configuration file, it the root of the project’s folder.

Every Phaser Editor’s project template contains this file so probably you don’t have to create it yourself.

These are the settings supported by the project configuration:

| Name      | Value                                                                                              |
|-----------|----------------------------------------------------------------------------------------------------|
| `skip`    | An array with the patterns for [filtering the project resources](resources-filtering).        |
| `plugins` | An array with the path to [user plugins](plugins).                                            |
| `flags`   | An array with the [server options](server-options).                                           |
| `playUrl` | A string with the address to open in the browser when you execute a Play command (`F12` or `F10`). |
| `settings` | An object with the [UI settings parameters](../workbench/settings.md).

This is an example:

```bash
{
    "skip": ["dist/", "editor-plugins/"],
    "settings": {
        "phasereditor2d.scene.enablePixelArt": true
    },
    "plugins":
        [
            "editor-plugins/my-fonts-plugins",
            "editor-plugins/my-awesome-plugins"
        ],
    "flags": ["-port", "7171"],
    "playUrl": "http://localhost:4200"
}
```
