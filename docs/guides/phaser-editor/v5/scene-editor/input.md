---
slug: input
title: Input
---

We are exploring on the ways of helping you with the handling of the input of your game. As a start, we are supporting the [Phaser.Input.Keyboard.Key](https://docs.phaser.io/api-documentation/class/input-keyboard-key) API in the Scene Editor and the [Hit Area of an object](./input#hit-area).

## Keyboard Key object

The Scene Editor supports adding a [Phaser.Input.Keyboard.Key](https://docs.phaser.io/api-documentation/class/input-keyboard-key) object to the scene. Just drag the **Keyboard.Key** object from the Blocks view and drop it into the scene:

![Add Keyboard Key to the scene.](https://cdn.phaser.io/editor-docs/scene-editor-input-add-key-20221114.webp)

The editor shows the **Key** objects in the **Input** section of the Outline view:

![Key objects in the Outline view.](https://cdn.phaser.io/editor-docs/scene-editor-input-keys-in-outline-20221114.webp)

Select a key for editing its properties in the Inspector view:

![The Keyboard Key properties.](https://cdn.phaser.io/editor-docs/scene-editor-input-key-properties-20221114.webp)

The **Variable** properties:

* **Name**: The name of the variable for the Key object.
* **Scope**: The scope of the variable. It may be `LOCAL`, `METHOD`, `CLASS`, or `PUBLIC`. By default it is `PUBLIC`. You can [learn more about the variable scopes](./game-objects/common-object-properties#scope-property).

The **Keyboard Key** properties:

* **Key Code**: the [keyCode](https://docs.phaser.io/api-documentation/class/input-keyboard-key#keycode). Click on the button for selecting the code:

![KeyCode dialog.](https://cdn.phaser.io/editor-docs/scene-editor-input-keycode-dialog-20221114.webp)

The code generated for the key code is like this:

```javascript
// in the context of a scene:

const jumpKey = this.input.keyboard
        .addKey(Phaser.Input.Keyboard.KeyCodes.UP);

// in the context of a prefab:

 const jumpKey = this.scene.input.keyboard
        .addKey(Phaser.Input.Keyboard.KeyCodes.UP);
```

A common usage of the keys, is to assign it to a field (set the `Class` scope) and check for its **down** state in the **update** method:

```javascript
update() {

    if (this.jumpKey,isDown) {

        this.player.body.velocity.y = -400;
    }
}
```

## Hit Area

Making interactive objects is part of almost every game. You can enable an interactive hit area for an object right in the Inspector view. You can select in the **Hit Area** section the shape for the interactive area of an object. By default, the shape is `NONE`, which means the object doesn’t have a hit are at all.

The available hit area shapes are:

* Rectangle
* Ellipse
* Circle
* Polygon
* Pixel Perfect

![The hit area shapes](https://cdn.phaser.io/editor-docs/scene-editor-input-hit-area-options-20230517.webp)

Each shape has a dedicated section for the shape’s properties. In addition of the section, you can activate the **Edit Hit Area** tool (`I`) and change the properties of the area by dragging handlers in the scene.

### Rectangle Hit Area

To set a rectangular hit are on the object, select the `RECTANGLE` option in the **Shape** parameter of the **Hit Area** section. It enables the **Hit Area (Rectangle)** section where you can set the position and size of the area:

![Enable rectangle hit area](https://cdn.phaser.io/editor-docs/scene-editor-input-hit-area-rectangle-20230517.webp)

Also, you can change the values with the **Edit Hit Area** tool (`I`):

![Changes rectangular hit area with the tool.](https://cdn.phaser.io/editor-docs/scene-editor-input-hit-area-rectangle-tool-20230517.webp)

When you create a rectangle hit area, the scene compiler generates a code like this:

```javascript
// eye
const eye = this.add.image(369, 277, "lance-overdose-loader-eye");
eye.setInteractive(
    new Phaser.Geom.Rectangle(17, 16, 90, 80),
    Phaser.Geom.Rectangle.Contains);
```

### Ellipse Hit Area

You can set an ellipse as shape for the hit area of an object. Select the `ELLIPSE` option in the **Shape** parameter and changes the ellipse properties in the **Hit Area (Ellipse)** section:

![Ellipse hit area](https://cdn.phaser.io/editor-docs/scene-editor-input-hit-area-ellipse-20230517.webp)

Also, you can change the ellipse properties with the **Edit Hit Area Tool** (`I`):

![Edit ellipse hit area tool.](https://cdn.phaser.io/editor-docs/scene-editor-input-hit-area-ellipse-tool-20230517.webp)

The [scene compiler](../scene-editor/scene-compiler) generates the hit are shape code like this:

```javascript
// chicken
const chicken = this.add.image(684, 126, "budbrain_chick");
chicken.setInteractive(
    new Phaser.Geom.Ellipse(30, 70, 66, 133),
    Phaser.Geom.Ellipse.Contains);
```

### Circle Hit Area

You can add a circular hit are to an object by seleting the `CIRCLE` shape in the **Hit Area** section. Then you can change the radius and position of the circle in the **Hit Area (Circle)** section:

![Set the circle hit area.](https://cdn.phaser.io/editor-docs/scene-editor-input-hit-area-circle-20230517.webp)

Also, you can change the circle properties with the **Edit Hit Area Tool** (`I`):

![Circle hit area tool.](https://cdn.phaser.io/editor-docs/scene-editor-input-hit-area-circle-tool-20230517.webp)

The [scene compiler](../scene-editor/scene-compiler) generates code for setting the circle area in this way:

```javascript
// wizball
const wizball = this.add.image(191, 161, "wizball");
wizball.setInteractive(
    new Phaser.Geom.Circle(46, 46, 46),
    Phaser.Geom.Circle.Contains);
```

### Polygon Hit Area

You can set a polygon hit area to an object by selecting the `POLYGON` option in the **Shape** parameter in the **Hit Area** section. The polygon is made with an array points. The points are represented in a string of numbers, with this syntax: `"{P1.x} {P2.y} ... {Pn.x} {Pn.y}"`. You can change the points in the **Hit Area (Polygon)**:

![Set polygon hit area.](https://cdn.phaser.io/editor-docs/scene-editor-input-hit-area-polygon-20230517.webp)

You can click in the 3-dots button for getting a bigger text box and edit all the points:

![Polygon points.](https://cdn.phaser.io/editor-docs/scene-editor-hit-area-polygon-points-20230517.webp)

Or you can use the **Edit Hit Area Tool** (`I`) for adding, deleting, and changing the points of the polygon:

![Polygon tool.](https://cdn.phaser.io/editor-docs/scene-editor-input-hit-area-polygon-tool-20230517.webp)

You can add a point by placing the mouse in a line and dragging the pink point:

![Add point to the polygon hit area.](https://cdn.phaser.io/editor-docs/scene-editor-input-polygon-tool-add-point-20230517.webp)

You can delete a polygon point by placing the mouse pointer on top of it and pressing the `Delete` key. The point to delete is highlighted in red:

![Delete polygon point.](https://cdn.phaser.io/editor-docs/scene-editor-input-polygon-delete-point-20230517.webp)

To modify a point, drag it 🙂.

The [scene compiler](../scene-editor/scene-compiler) generates the code for setting the polygon hit area like this:

```javascript
// car
const car = this.add.image(616, 523, "supercars-parsec");
car.setInteractive(
  new Phaser.Geom.Polygon(
    "1 85 83 37 245 -0 381 3 574 13 597 57 586 76 603 88 562 115 548 140 510 162 456 147 316 139 158 146 110 160 68 149 0 138"
    ), Phaser.Geom.Polygon.Contains);
```

### Pixel Perfect Hit Area

To enable the pixel-perfect hit area in an object, select the `PIXEL_PERFECT` option in the **Hit Area** section and set the `alphaTolerance` in the **Hit Area (Pixel Perfect)** section:

![Pixel perfect hit area.](https://cdn.phaser.io/editor-docs/scene-editor-input-hit-area-pixel-perfect-20230517.webp)

The **Alpha Tolerance** parameter is “the alpha level that the pixel should be above to be included as a successful interaction”.

The [scene compiler](../scene-editor/scene-compiler) generates the code for setting pixel perfect hit area in this way:

```javascript
const ship = this.add.image(1000, 281, "thrust_ship2");
ship.setInteractive(this.input.makePixelPerfect());
```