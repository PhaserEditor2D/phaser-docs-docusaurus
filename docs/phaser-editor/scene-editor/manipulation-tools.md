---
slug: manipulation-tools
title: Manipulation tools
---

The manipulator tools are in-scene tools that allow changing properties of the objects.

Each tool has a command to activate/deactivate it. You can execute the command using a key, the context menu, or the [Main toolbar](../workbench/main-toolbar).

You can activate one tool or the time. Or deactivate the tool.

![Manipulators.](https://cdn.phaser.io/editor-docs/scene-editor-tools-20230518.webp)

## Coordinates

Some tools can be used in a local or global coordinates. You can change the coords in the **Coords** menu of the context menu:

![Transformation orientation.](https://cdn.phaser.io/editor-docs/scene-editor-tools-coords-05242020.webp)

## Translate tool

This tool allows you to move the objects on the screen. It affects the **X** and **Y** properties.

You can activate it with the `T` key, or in the context menu or the [Main toolbar](../workbench/main-toolbar).

Drag the red arrow to change the **X**, and the green arrow to change the **Y**.

![Translate tool.](https://cdn.phaser.io/editor-docs/scene-editor-tools-translate-04262020.webp)

## Scale tool

Activate this tool to change the scale of an object. You can activate it in the context menu, the [Main toolbar](../workbench/main-toolbar), or with the `S` key. Keep pressing the `Shift` key if you want to scale proportionally.

![Scale tool.](https://cdn.phaser.io/editor-docs/scene-editor-tools-scale-04262020.webp)

## Rotate tool

This tool changes the angle of the object. You can activate it in the context menu, the [Main toolbar](../workbench/main-toolbar), or with the `R` key.

![Rotate tool.](https://cdn.phaser.io/editor-docs/scene-editor-tools-rotate-04262020.webp)

## Origin tool

With this tool, you can edit the origin of an object. You can activate it in the context menu, the [Main toolbar](../workbench/main-toolbar), or with the `O` key.

In Phaser v3, the rotation pivot of [containers](./game-objects/container-object) is fixed at `x=0, y=0`. You cannot change it. However, the origin tool simulates a change of the pivot by moving around the children of the container but keeping the same global position.

![Origin tool.](https://cdn.phaser.io/editor-docs/scene-editor-tools-origin-05242020.webp)

## Slice tool

This is a tool for changing the size of the slices of a [NineSlice](./game-objects/nine-slice-object) object. You can activate it in the context menu, with the **Tools → Slice Tool** option. Or you can activate it in the Nine Slice properties section, by clicking the **Edit Slices** button:

![Activate the Slice tool.](https://cdn.phaser.io/editor-docs/scene-editor-slice-tool-edit-button-20230208.webp)

The tools shows four maniputaros for changing the size of the slices:

![Slice manipulators.](https://cdn.phaser.io/editor-docs/scene-editor-slice-tool-manipulators-20230208.webp)

If you want to change the width of the **left** and **rigth** slices at the same time and with the same value, you can press and hold the `Shift` key. It also applies to the height of the **top** and **bottom** slices.

If the object is in a 3 slices mode, it only shows the manipulators for the width slices:

![Nine Slice with 3 slices mode.](https://cdn.phaser.io/editor-docs/scene-editor-3-slice-tool-20230208.webp)

## Resize tool

This tool allows for changing the size of some objects like [TileSprite](./game-objects/tile-sprite-object), [Rectangle](./game-objects/shape-rectangle-object), and [Ellipse](./game-objects/shape-ellipse-object).  You can activate it in the context menu or with the `Z` key. Resize the object is not the same of scaling it.

![TileSprite size tool.](https://cdn.phaser.io/editor-docs/scene-editor-tools-tilesprite-size-04262020.webp)

## Polygon tool

The Polygon tool (that you can activate with the `Y` key) shows the polygon’s points in the scene. It allows you:

* Change the position of a point: drag the point with the mouse cursor.
* Delete a point: move the mouse cursor over the point and press the Delete key (or double click). When the cursor is over the point, it is painted in red color.

![Move polygon point.](https://cdn.phaser.io/editor-docs/scene-editor-polygon-edit-points-20220623.webp)
* Add a new point: move the mouse cursor over a line. It shows a white handler under the cursor, you can drag it for creating a new point.

![Add new point.](https://cdn.phaser.io/editor-docs/scene-editor-polygon-add-point-20220623.webp)![Add new point.](https://cdn.phaser.io/editor-docs/scene-editor-polygon-add-point-2-20220623.webp)

## Arcade Physics Body tool

This tool allows changing the size and offset of an Arcade physics body. You can activate the tool in the scene context menu of by pressing the `B` key.

There are two type of bodies: circular and rectangular bodies. When you are editing a circular body, the tool shows the body’s circle, the center (offset), and the radius handlers:

![Editing the circular body.](https://cdn.phaser.io/editor-docs/arcade-physics-body-circle-tool-20221005.webp)

If the object has a rectangular body, then the tool shows the offset and size handlers:

![Editing the rectangular body.](https://cdn.phaser.io/editor-docs/arcade-physics-tool-rect-body-20221006.webp)

## Hit Area tool

This tool allows changing the interactive hit area of an object. You can activate this tool with the `I` command or selecting it in the **Tools** context menu.

A hit area has a shape of different types. This tool provides different manipulators for each type of shape:

* [Rectangle](./input#rectangle-hit-area)
* [Ellipse](./input#ellipse-hit-area)
* [Circle](./input#circle-hit-area)
* [Polygon](./input#polygon-hit-area)

## Pan tool

This tool allows you to pan the scene. You can activate it with the `Space` key. When it is selected, the mouse cursor is shown with a “grabbing” icon, then you can click on the scene and drag it.

Also, you can pan the scene by pressing the `Alt` key and dragging the mouse. This method does not require to activate the Pan tool.

## Select Region tool

This tool allows you to draw a region in the scene and select all objects inside that zone. You can select it in the toolbar, the context menu or by pressing the `Shift+S` keys. If you keep pressing the Ctrl key, the previous selected objects will remain selected.

![Select objects in region tool.](https://cdn.phaser.io/editor-docs/scene-editor-tools-select-region-06172020.webp)

