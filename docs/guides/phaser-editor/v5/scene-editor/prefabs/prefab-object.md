---
slug: prefab-object
title: The prefab object
---

The prefab object is the object at the top of the Prefab file. You can add many objects to the scene, but only the one at the top will be considered as the real Prefab, the other objects will be ignored.

We did it this way for simplicity, but it also allows us to create different versions of the prefab object and move them to the top of the list in case we want to promote a different object as the prefab object.

Look in the next image, it shows the **Dragon** prefab. There are three objects in the file, but only the **green dragon** object will be used as the prefab object of the **Dragon** Prefab. Also, look the others, non-top objects are rendered transparent in the Outline view:

![Prefab object](https://cdn.phaser.io/editor-docs/scene-editor-prefab-object-1-06272020.webp)

If later you decided to use a different dragon for your Prefab, then you can move it to the top of the scene and that’s all:

![Another prefab object](https://cdn.phaser.io/editor-docs/scene-editor-prefab-object-2-06272020.webp)

Another characteristic of the prefab object is that you cannot edit its [Variable properties](../game-objects/common-object-properties#variable-properties), because, in the generated code, it is not referenced as a variable, it is referenced as `this`.

The prefab object could be any object of any type (an [Image](../game-objects/image-object), a Text, a container, whatever type supported by the Scene Editor), even, it could be a prefab instance. When the prefab object is a prefab instance (of the Prefab **SomePrefab**) then we say it is a prefab variant of the **SomePrefab** Prefab.


## Automatic Container creation

In many cases, your Prefab will be a single object, like an image. In other cases, you do group several objects in a container.

To simplify the workflow of creating a Prefab, the Scene Editor will follow these rules:

- If you add an object in an empty Prefab scene, the new object will be the prefab object.
- If you create an object, but the Prefab scene already contains a prefab object, then:
   - If the prefab object is a container , the new object is added to it.
   - If the prefab object is not a container, then a new container will be created to group the old prefab object and the new object. Finally, the newly created container will be the new prefab object.

In a few words, following these rules, the Scene Editor automatically group the objects in a container, if needed.
