---
slug: working-with-parent-objects
title: Working with parent objects
---

In Phaser, only two type of scene objects can be used as a “container” or a “parent” of other objects: the [Container](./game-objects/container-object), and the [Layer](./game-objects/layer-object) objects.

In the next section you can learn about operations common to both type of objects.


## Parent context menu

The **Parent** sub-menu of the scene context menu shows the commands you can apply to containers and layers. Many of those commands are compatible with both types:

![The Parent context menu.](https://cdn.phaser.io/editor-docs/parent-context-menu--07082021.webp)


## Moving an object to a parent

You can move an object to a new parent. The command **Move To Parent** opens the **Parent** dialog. This dialog shows all the available parents for the object (including the scene) and you can select the new parent.

The command can be executed by pressing the `Shift+P` keys or selecting the **Move To Parent** option in the context menu.

![Move object to parent.](https://cdn.phaser.io/editor-docs/scene-editor-move-to-container-07082021.webp)


## Breaking a parent

The **Break Parent** command removes a  Container or Layer, but keeps its children. The children are added to the parent of the parent, and their preserve the same absolute position.

You can execute the command by pressing the `Shift+B` keys or selecting the **Break Parent** option of the Parent context menu.


## Selecting the parent of an object

The **Select Parent** command selects the parent of an object. To execute the command press the `P` key or click on the **Select Parent** option of the Parent context menu.


## Selecting the children of an object

The **Select Children** command selects the children of a container or a layer. To execute this command, press the `N` key or click on the **Select Children** option in the Parent context menu.


## Changing the rendering order of children

You can change the rendering order of an object. The context menu shows the **Edit** → **Move** commands, to move the objects in different depth directions:

![Changing the rendering order of objects.](https://cdn.phaser.io/editor-docs/scene-editor-display-list-move-objects-20230627.webp)
