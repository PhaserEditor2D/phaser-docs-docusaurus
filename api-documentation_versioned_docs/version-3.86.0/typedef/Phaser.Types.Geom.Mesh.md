---
visibility: public
slug: typedef/types-geom-mesh
title: Types.Geom.Mesh
description: Phaser.Types.Geom.Mesh
seoTitle: Types.Geom.Mesh
seoDescription: Phaser v3.86.0 Documentation for Phaser.Types.Geom.Mesh
ogImage: 
---

## GenerateGridConfig

### \<static> GenerateGridConfig

| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| texture | string \| [Phaser.Textures.Texture](../class/Phaser.Textures.Texture.md) | No |  | The texture to be used for this Grid. Must be a Texture instance. Can also be a string but only if the `mesh` property is set. |
| frame | string \| number | Yes |  | The name or index of the frame within the Texture. |
| mesh | [Phaser.GameObjects.Mesh](../class/Phaser.GameObjects.Mesh.md) | Yes |  | If specified, the vertices of the generated grid will be added to this Mesh Game Object. |
| width | number | Yes | 1 | The width of the grid in 3D units. If you wish to get a pixel accurate grid based on a texture, you can use an Ortho Mesh or the `isOrtho` parameter. |
| height | number | Yes | "width" | The height of the grid in 3D units. |
| widthSegments | number | Yes | 1 | The number of segments to split the grid horizontally in to. |
| heightSegments | number | Yes | "widthSegments" | The number of segments to split the grid vertically in to. |
| x | number | Yes | 0 | Offset the grid x position by this amount. |
| y | number | Yes | 0 | Offset the grid y position by this amount. |
| colors | number \| Array.\<number> | Yes | "0xffffff" | An array of colors, one per vertex, or a single color value applied to all vertices. |
| alphas | number \| Array.\<number> | Yes | 1 | An array of alpha values, one per vertex, or a single alpha value applied to all vertices. |
| tile | boolean | Yes | false | Should the texture tile (repeat) across the grid segments, or display as a single texture? |
| isOrtho | boolean | Yes | false | If set and using a texture with an ortho Mesh, the `width` and `height` parameters will be calculated based on the frame size for you. |
| flipY | boolean | Yes | false | If set and using a texture, vertically flipping render result. |

**Type**: object

**Member of**: Phaser.Types.Geom.Mesh
> Source: [src/geom/mesh/typedefs/GenerateGridConfig.js#L1](https://github.com/phaserjs/phaser/blob/v3.86.0/src/geom/mesh/typedefs/GenerateGridConfig.js#L1)  
Since: 3.50.0

---

## GenerateGridVertsResult

### \<static> GenerateGridVertsResult

| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| verts | Array.\<number> | No |  | An array of vertex values in x, y pairs. |
| indices | Array.\<number> | No |  | An array of vertex indexes. This array will be empty if the `tile` parameter was `true`. |
| uvs | Array.\<number> | No |  | An array of UV values, two per vertex. |
| colors | number \| Array.\<number> | Yes | "0xffffff" | An array of colors, one per vertex, or a single color value applied to all vertices. |
| alphas | number \| Array.\<number> | Yes | 1 | An array of alpha values, one per vertex, or a single alpha value applied to all vertices. |

**Type**: object

**Member of**: Phaser.Types.Geom.Mesh
> Source: [src/geom/mesh/typedefs/GenerateGridVertsResult.js#L1](https://github.com/phaserjs/phaser/blob/v3.86.0/src/geom/mesh/typedefs/GenerateGridVertsResult.js#L1)  
Since: 3.50.0

---

## GenerateVertsResult

### \<static> GenerateVertsResult

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| faces | Array.\<[Phaser.Geom.Mesh.Face](../class/Phaser.Geom.Mesh.Face.md)> | No | An array of Face objects generated from the OBJ Data. |
| vertices | Array.\<[Phaser.Geom.Mesh.Vertex](../class/Phaser.Geom.Mesh.Vertex.md)> | No | An array of Vertex objects generated from the OBJ Data. |

**Type**: object

**Member of**: Phaser.Types.Geom.Mesh
> Source: [src/geom/mesh/typedefs/GenerateVertsResult.js#L1](https://github.com/phaserjs/phaser/blob/v3.86.0/src/geom/mesh/typedefs/GenerateVertsResult.js#L1)  
Since: 3.50.0

---

## OBJData

### \<static> OBJData

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| materialLibraries | Array.\<string> | No | An array of material library filenames found in the OBJ file. |
| materials | object | No | If the obj was loaded with an mtl file, the parsed material names are stored in this object. |
| models | Array.\<[Phaser.Types.Geom.Mesh.OBJModel](../typedef/Phaser.Types.Geom.Mesh.md#OBJModel)> | No | An array of parsed models extracted from the OBJ file. |

**Type**: object

**Member of**: Phaser.Types.Geom.Mesh
> Source: [src/geom/mesh/typedefs/OBJData.js#L1](https://github.com/phaserjs/phaser/blob/v3.86.0/src/geom/mesh/typedefs/OBJData.js#L1)  
Since: 3.50.0

---

## OBJFace

### \<static> OBJFace

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| group | string | No | The name of the Group this Face is in. |
| material | string | No | The name of the material this Face uses. |
| vertices | Array.\<[Phaser.Types.Geom.Mesh.OBJFaceVertice](../typedef/Phaser.Types.Geom.Mesh.md#OBJFaceVertice)> | No | An array of vertices in this Face. |

**Type**: object

**Member of**: Phaser.Types.Geom.Mesh
> Source: [src/geom/mesh/typedefs/OBJFace.js#L1](https://github.com/phaserjs/phaser/blob/v3.86.0/src/geom/mesh/typedefs/OBJFace.js#L1)  
Since: 3.50.0

---

## OBJFaceVertice

### \<static> OBJFaceVertice

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| textureCoordsIndex | number | No | The index in the `textureCoords` array that this vertex uses. |
| vertexIndex | number | No | The index in the `vertices` array that this vertex uses. |
| vertexNormalIndex | number | No | The index in the `vertexNormals` array that this vertex uses. |

**Type**: object

**Member of**: Phaser.Types.Geom.Mesh
> Source: [src/geom/mesh/typedefs/OBJFaceVertice.js#L1](https://github.com/phaserjs/phaser/blob/v3.86.0/src/geom/mesh/typedefs/OBJFaceVertice.js#L1)  
Since: 3.50.0

---

## OBJModel

### \<static> OBJModel

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| faces | Array.\<[Phaser.Types.Geom.Mesh.OBJFace](../typedef/Phaser.Types.Geom.Mesh.md#OBJFace)> | No | An array of Faces. |
| name | string | No | The name of the model. |
| textureCoords | Array.\<[Phaser.Types.Geom.Mesh.UV](../typedef/Phaser.Types.Geom.Mesh.md#UV)> | No | An array of texture coordinates. |
| vertexNormals | Array.\<[Phaser.Types.Math.Vector3Like](../typedef/Phaser.Types.Math.md#Vector3Like)> | No | An array of vertex normals. |
| vertices | Array.\<[Phaser.Types.Math.Vector3Like](../typedef/Phaser.Types.Math.md#Vector3Like)> | No | An array of vertices in the model. |

**Type**: object

**Member of**: Phaser.Types.Geom.Mesh
> Source: [src/geom/mesh/typedefs/OBJModel.js#L1](https://github.com/phaserjs/phaser/blob/v3.86.0/src/geom/mesh/typedefs/OBJModel.js#L1)  
Since: 3.50.0

---

## UV

### \<static> UV

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| u | number | No | The u component. |
| v | number | No | The v component. |
| w | number | No | The w component. |

**Type**: object

**Member of**: Phaser.Types.Geom.Mesh
> Source: [src/geom/mesh/typedefs/UV.js#L1](https://github.com/phaserjs/phaser/blob/v3.86.0/src/geom/mesh/typedefs/UV.js#L1)  
Since: 3.50.0

---
