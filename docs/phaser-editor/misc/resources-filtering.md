---
slug: resources-filtering
title: Resources filtering
---

Phaser Editor is the typical web application with a server layer and a client (browser) layer. Because the browser has no direct access to the file of the projects, the editor loads [many resources in memory](resources-caching). For this reason, you must keep a low number of files in the project. Usually, HTML5 games need a few files, but you may include the files of third-party tools or the files of the server side of the game.

If you cannot change the structure of your project, you can exclude files from the Phaser Editor project by using `.skip` files. It is similar to how you can exclude files from a Git repository, using `.gitignore` files.

You can create a `.skip` file in a folder of the project, and write the file name patterns you want to exclude.

This is an example of a `.skip` file:

```bash

# exclude all node_modules folders in the project.
**/node_modules


# exclude a single file in the current directory
my-private-secret.data


# exclude all files in the form @2x.png, @2x.json,...
**/*@2x.*
```

If the `.skip` file is empty, then the editor assumes it has a `*` pattern. It means it will exclude all the folder’s content. We did it that way for backward compatibility with previous versions of the editor.

In addition to the `.skip` files you create in each project, you can edit the `default-skip` file that is placed in the Phaser Editor install directory. The patterns defined in that file will be applied to all projects. By default, it includes the patterns to skip all files starting in a dor (`.`), all `node_modules` folders, and all `__MACOSX` files.

Another way of filtering the files, is using the `skip` setting of the [project configuration file](./project-config). You can set an array of “skipping rules”, the same used in the `.skip` file:

```bash
// phasereditor2d.config.json

{
    "skip": ["my-private-secret.data", "**/*@2x.*"]
}
```


## Patterns

We use the [doublestart](https://github.com/bmatcuk/doublestar#patterns) project for pattern matching. Following is a part of the documentation of that project:

Special terms in the patterns:

| Special Terms   | Meaning                                                                                   |
|-----------------|-------------------------------------------------------------------------------------------|
| `*`             | matches any sequence of non-path-separators                                               |
| `**`            | matches any sequence of characters, including path separators                             |
| `?`             | matches any single non-path-separator character                                           |
| `[class]`       | matches any single non-path-separator character against a class of characters (see below) |
| `{alt1,...}`    | matches a sequence of characters if one of the comma-separated alternatives matches       |

Character classes support the following:

| Class      | Meaning                                                       |
|------------|---------------------------------------------------------------|
| `[abc]`    | matches any single character within the set                   |
| `[a-z]`    | matches any single character in the range                     |
| `[^class]` | matches any single character which does *not* match the class |
