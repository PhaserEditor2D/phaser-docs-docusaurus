---
slug: prefab-variant
title: Prefab variants
---

A prefab variant is a Prefab that extends other Prefab. This is a concept similar to the [Unity Engine](https://unity.com) **prefab variants** so we use the same name. However, like everything else in the Scene Editor, the best way to understand the prefab variant is looking into the generated code. Then you realize that a variant of a Prefab is a sub-class of the Prefab class.

A prefab variant inherits the properties and values of the base Prefab, however, you can unlock the properties and modify them.

[Learn more about unlock a prefab property](./prefab-set-properties).

You can create a prefab variant very easy, the only thing you need is to use a Prefab as the prefab object of the Prefab file.

Let’s say we want to create a purple-skinned prefab variant of the **Dragon** Prefab. These are the steps:

- Create a new Prefab file, name it **PurpleDragon**. Learn [how to create a prefab file](prefab-new-file).
- Drop the **Dragon** Prefab on the scene. This creates a prefab instance that is the prefab object of the file.
  
  ![Create prefab object with Dragon prefab.](https://cdn.phaser.io/editor-docs/scene-editor-prefab-variant-1-04222020.webp)

- Unlock the [texture property](../game-objects/common-object-properties#text-property) of the object and change it to the purple dragon texture. Save the file.
  
  ![Change the prefab object texture.](https://cdn.phaser.io/editor-docs/scene-editor-prefab-variant-2-04222020.webp)

- Open the **Level** scene file, and look in the Blocks view there are the **Dragon** Prefab and the **PurpleDragon** Prefab. Drop the **PurpleDragon** Prefab on the scene. It will create a new, purple, prefab instance.

  ![Create a green and purple dragons.](https://cdn.phaser.io/editor-docs/scene-editor-prefab-variant-3-04222020.webp)

- But you want to reduce the size of both dragons. To do this, you change the scale of the X-axis of the **Dragon** Prefab. It will affect both instances, the **Dragon** and **PurpleDragon** instances, because the **PurpleDragon** is a variant of the now scaled **Dragon** Prefab.

  ![The new scale is applied to both instances.](https://cdn.phaser.io/editor-docs/scene-editor-prefab-variant-4-04222020.webp)