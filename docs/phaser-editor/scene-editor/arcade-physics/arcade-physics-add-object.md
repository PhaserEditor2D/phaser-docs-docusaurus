---
slug: arcade-physics-add-object
title: Creating Arcade Image and Sprite objects
---

The simplest way of creating an object with an Arcade physics body is by adding a [Phaser.Physics.Arcade.Image](https://docs.phaser.io/api-documentation/class/physics-arcade-image) or [Phaser.Physics.Arcade.Sprite](https://docs.phaser.io/api-documentation/class/physics-arcade-sprite) object to the scene. Both types are available in the Arcade section of the Blocks view:

![Drop arcade image from blocks view.](https://cdn.phaser.io/editor-docs/arcade-add-image-1-20221005.webp)

When you drop it to the scene, it shows a dialog for selecting a texture:

![Select the image's texture.](https://cdn.phaser.io/editor-docs/arcade-add-image-2-20221005.webp)
![A physics object in the scene.](https://cdn.phaser.io/editor-docs/arcade-add-image-3-20221005.webp)

Arcade game objects are generated in code with the [image](https://docs.phaser.io/api-documentation/class/physics-arcade-factory#image) and [sprite](https://docs.phaser.io/api-documentation/class/physics-arcade-factory#sprite) factories of the Arcade physics system:

```javascript
// gorilla
const gorilla = this.physics.add.image(310, 313, "gorilla");
gorilla.body.setOffset(216, 58);
gorilla.body.setSize(186, 365, false);
```

The **Arcade Image** and **Arcade Sprite** game object types provide helper methods for configuring the physics body. However, you can [enable an Arcade physics body in any other game object](arcade-physics-add-body).
