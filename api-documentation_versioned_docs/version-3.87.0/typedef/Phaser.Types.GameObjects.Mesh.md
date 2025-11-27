---
visibility: public
slug: typedef/types-gameobjects-mesh
title: Types.GameObjects.Mesh
description: Phaser.Types.GameObjects.Mesh
seoTitle: Types.GameObjects.Mesh
seoDescription: Phaser v3.87.0 Documentation for Phaser.Types.GameObjects.Mesh
ogImage: 
---

## MeshConfig

### \<static> MeshConfig

| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| key | string \| [Phaser.Textures.Texture](../class/Phaser.Textures.Texture.md) | Yes |  | The key, or instance of the Texture this Game Object will use to render with, as stored in the Texture Manager. |
| frame | string \| number | Yes |  | An optional frame from the Texture this Game Object is rendering with. |
| vertices | Array.\<number> | Yes |  | The vertices array. Either `xy` pairs, or `xyz` if the `containsZ` parameter is `true`. |
| uvs | Array.\<number> | Yes |  | The UVs pairs array. |
| indicies | Array.\<number> | Yes |  | Optional vertex indicies array. If you don't have one, pass `null` or an empty array. |
| containsZ | boolean | Yes | false | Does the vertices data include a `z` component? |
| normals | Array.\<number> | Yes |  | Optional vertex normals array. If you don't have one, pass `null` or an empty array. |
| colors | number \| Array.\<number> | Yes | "0xffffff" | An array of colors, one per vertex, or a single color value applied to all vertices. |
| alphas | number \| Array.\<number> | Yes | 1 | An array of alpha values, one per vertex, or a single alpha value applied to all vertices. |

**Type**: object

**Member of**: Phaser.Types.GameObjects.Mesh
> Source: [src/gameobjects/mesh/typedefs/MeshConfig.js#L1](https://github.com/phaserjs/phaser/blob/v3.87.0/src/gameobjects/mesh/typedefs/MeshConfig.js#L1)  
Since: 3.0.0

---
