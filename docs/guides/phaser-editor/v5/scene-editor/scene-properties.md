---
slug: scene-properties
title: Scene properties
toc:
  - border-properties.md
  - display-properties.md
---

The scene has different properties that are not part of the editor or the compiler.

The properties are shown in the Inspector view when no object is selected. It means, if you click on a blank space of the scene or press the `ESC` key, the scene properties will be shown.

The compiler settings are covered in the [Scene Compiler chapter](scene-compiler).

## Snapping properties

The snapping properties allow you to divide the scene into a grid and place the objects in the cells of the grid. This is a very useful technique to keep the objects properly aligned.

![Snapping properties.](https://cdn.phaser.io/editor-docs/scene-editor-snap-properties-04222020.webp)
* **Enabled property**: activates the snapping. You can change the value in the Inspector view with the `E` key.
* **Snapping Width and Height**: is the size of the grid to snap the objects. You can change it in the Inspector view. Also, you can select an object and execute the **Snap To Object Size** command.

## Border properties

The Scene Editor shows a frame, or border, that you can use as reference of the game size, a Prefab size, or whatever you need to frame.

It is not part of the [Phaser API](https://newdocs.phaser.io/docs/latest/), it is just an editor resource and does not affect the game in any way.

You can change the border values in the Inspector view. It has a position and a size.

![Border properties.](https://cdn.phaser.io/editor-docs/scene-editor-border-properties-04222020.webp)

## Scene Display properties

The editor shows the name of a scene in different places. This name is, by default, the name of the scene file, without the extension. However, you can change this UI name in the **Scene Display Name** property. In addition, you can add a description to the scene in the **Scene Description** property.

![scene display properties](../images/scene-display-properties-20251124.webp)

![scene display name in blocks view](../images/scene-display-in-blocks-view-20251124.webp)

### Context menu

The context menu of the scene shows the **Snapping** sub-menu with the snapping commands:

* Toggle Snapping (`E`).
* Snap To Object Size (`W`). This command takes the size of the selected object and sets it as the snapping size values of the scene.
* Move Object Position commands.  These translate the selected object in any direction by the snapping size (`Arrow keys`) or 10x the snapping size (`Shift+Arrow keys`).  If snapping is disabled, these commands translate the selected object by 1 or 10 pixels.

![Snapping commands in context menu.](https://cdn.phaser.io/editor-docs/scene-editor-snap-menu-06172020.webp)