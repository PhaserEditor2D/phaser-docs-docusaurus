---
slug: tilemap-layer-object
title: TilemapLayer
---

A **Tilemap Layer** is a display object that shows a map based on tiles. There are two Phaser built-in types dedicated to this, the [StaticTilemapLayer](https://docs.phaser.io/api-documentation/class/tilemaps-statictilemaplayer) and the the [DynamicTilemapLayer](https://docs.phaser.io/api-documentation/class/tilemaps-statictilemaplayer).

The main difference is that a static layer is read-only but faster, while you can modify the tiles of a dynamic layer.

To create a tilemap layer, first, you have to [create a Tilemap object](tilemap-object). Then, you can drag the **StaticTilemapLayer** or **DynamicTilemapLayer** from the Blocks view and drop it in the scene:

![Adding a tilemap layer.](https://cdn.phaser.io/editor-docs/scene-editor-add-tilemap-layer-1-10152020.webp)

The Scene Editor does not support empty tilemap layers, and you have to select one of the layers defined in any of the tilemaps created in the scene:

![Selecting the layer.](https://cdn.phaser.io/editor-docs/scene-editor-add-tilemap-layer-2-10152020.webp)

And that’s all, the tilemap layer is displayed in the scene:

![The layer is created in the scene.](https://cdn.phaser.io/editor-docs/scene-editor-add-tilemap-layer-2310152020.webp)

When you save the scene, the [scene compiler](../scene-compiler) generates the code of the tilemap layer using the [createStaticLayer](https://docs.phaser.io/api-documentation/class/tilemaps-tilemap#createstaticlayer) or [createDynamicLayer](https://docs.phaser.io/api-documentation/class/tilemaps-tilemap#createdynamiclayer) methods.

In the next code, a new static layer is created, using the the `World1` layer data and the `SuperMarioBros-World1-1` tileset:

```javascript
// world1
super_mario_1.createStaticLayer("World1", ["SuperMarioBros-World1-1"], 107, 110);
```

A layer may use only a subset of the tilesets defined in a tilemap. The compiler scans all the layer’s tiles and uses as argument only the name of the tilesets referenced in the tiles.

A tilemap layer has a lot of utility methods and properties, so probably you may want to assign it to a field by setting its [variable scope](./common-object-properties#scope-property) to `Class`.

When you select a tilemap layer, the Inspector view shows some of the properties of the layer (all of them are read-only):

![Tilemap layer properties.](https://cdn.phaser.io/editor-docs/scene-editor-tilemap-layer-properties-2310152020.webp)

Also, because it is a display object, other common properties are available:

* [Variable properties](./common-object-properties#variable-properties)
* [Lists properties](./common-object-properties#lists-properties)
* [Transform properties](./common-object-properties#transform-properties)
* [Visible property](./common-object-properties#visible-property)
