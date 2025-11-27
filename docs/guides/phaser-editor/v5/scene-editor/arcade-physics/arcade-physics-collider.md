---
slug: arcade-physics-collider
title: Arcade physics collider
---

A [Collider](https://docs.phaser.io/api-documentation/class/physics-arcade-collider) is an object for checking collisions between multiple physics objects. The Scene Editor allows creating a collider by dragging it from the Blocks view to the scene:

![Adding a collider.](https://cdn.phaser.io/editor-docs/arcade-physics-add-collider-1-20221011.webp)

The collider objects are shown in the **Arcade** section of the Outline view:

![Collider in the outline.](https://cdn.phaser.io/editor-docs/arcade-physics-collider-outline-20221011.webp)

When you select it, it shows the collider properties in the Inspector view. Each parameter corresponds to a parameter in the [Collider](https://docs.phaser.io/api-documentation/class/physics-arcade-collider) constructor:

![Collider parameters.](https://cdn.phaser.io/editor-docs/arcade-physics-collider-properties-20221011.webp)

The properties are:

* [overlapOnly](https://docs.phaser.io/api-documentation/class/physics-arcade-collider#overlaponly)
* [object1](https://docs.phaser.io/api-documentation/class/physics-arcade-collider#onject1)
* [object2](https://docs.phaser.io/api-documentation/class/physics-arcade-collider#object2)
* [collideCallback](https://docs.phaser.io/api-documentation/class/physics-arcade-collider#collidecallback)
* [processCallback](https://docs.phaser.io/api-documentation/class/physics-arcade-collider#processcallback)
* [callbackContext](https://docs.phaser.io/api-documentation/class/physics-arcade-collider#callbackcontext)

The [scene compiler](../scene-compiler) verbatim-compies the values of the parameters (excepting **overlapOnly**) into the code. So you can write any JavaScript valid expression as value for the parameter.

In the case of the **Object 1** and **Object 2** parameters, you have the option of selecting the variable name of an object of the scene:

![Select a variable name of an object of the scene.](https://cdn.phaser.io/editor-docs/arcade-physics-collider-object-dialog-20221011.webp)

In addition to objects, you can reference an [Object List](../object-list).

So, the collider object is generated in code using the [collider](https://docs.phaser.io/api-documentation/class/physics-arcade-factory#collider) or [overlap](https://docs.phaser.io/api-documentation/class/physics-arcade-factory#overlap) methods of the Arcade [Factory](https://docs.phaser.io/api-documentation/class/physics-arcade-factory) class. Something like this:

```javascript
const collider_stone = this.physics.add.collider(gorilla, stone, this.onCollideGorillaWithStone, undefined, this);
```

Or, if the **Overlap Only** parameter is selected:

```javascript
const collider_stone = this.physics.add.overlap(gorilla, stone, this.onCollideGorillaWithStone, undefined, this);
```

In addition to the Collider properties, it contains the [Variable properties](../game-objects/common-object-properties#variable-properties).
