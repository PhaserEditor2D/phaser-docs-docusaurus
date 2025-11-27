---
slug: image-object
title: Image
---

The [Image](./image-object) is a built-in Phaser object type: [Phaser.GameObjects.Image](https://docs.phaser.io/api-documentation/class/gameobjects-image).

You can create an [Image](./image-object) object by dropping an Image built-in type or texture from the Blocks view.

![Add image from Blocks view.](https://cdn.phaser.io/editor-docs/scene-editor-drop-image-04152020.webp)

The main difference between an [Image](./image-object) and a Sprite is that the [Image](./image-object) objects cannot play [sprite animations](https://docs.phaser.io/api-documentation/class/gameobjects-sprite#play).

An [Image](./image-object) is created in code using the [image factory](https://docs.phaser.io/api-documentation/class/gameobjects-gameobjectfactory#image). This is how the [scene compiler](../scene-compiler) generates the code of an [Image](./image-object):

```javascript
const branch_1 = this.add.image(192, 512, "atlas-props", "branch-01");
```

The [Image](./image-object) has properties common to other object types:

* [Variable properties](./common-object-properties#variable-properties)
* [Lists properties](./common-object-properties#lists-properties)
* [Transform properties](./common-object-properties#transform-properties)
* [Origin properties](./common-object-properties#origin-properties)
* [Flip properties](./common-object-properties#flip-properties)
* [Visible property](./common-object-properties#visible-property)
* [Alpha properties](./common-object-properties#alpha-properties)
* [Texture property](./common-object-properties#texture-property)
