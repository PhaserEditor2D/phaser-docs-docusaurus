---
visibility: public
slug: tilemaps
title: Phaser.Tilemaps

seoTitle: Phaser.Tilemaps
seoDescription: Phaser v3.87.0 Documentation for 
ogImage: 
---




Scope: 
static
> Source: [src/tilemaps/index.js#L10](https://github.com/phaserjs/phaser/blob/v3.87.0/src/tilemaps/index.js#L10)  


# Static functions

- [ImageCollection](../class/tilemaps-imagecollection)
- [LayerData](../class/tilemaps-layerdata)
- [MapData](../class/tilemaps-mapdata)
- [ObjectHelper](../class/tilemaps-objecthelper)
- [ObjectLayer](../class/tilemaps-objectlayer)
- [Tile](../class/tilemaps-tile)
- [Tilemap](../class/tilemaps-tilemap)
- [TilemapLayer](../class/tilemaps-tilemaplayer)
- [Tileset](../class/tilemaps-tileset)
# Static functions

- [Components](../namespace/tilemaps-components)
- [Formats](../namespace/tilemaps-formats)
- [Orientation](../namespace/tilemaps-orientation)
- [Parsers](../namespace/tilemaps-parsers)
# Static functions

## OrientationType

### OrientationType


**Description:**

Phaser Tilemap constants for orientation.



To find out what each mode does please see [Phaser.Tilemaps.Orientation](Phaser.Tilemaps.Orientation).


> Source: [src/tilemaps/const/ORIENTATION_CONST.js#L15](https://github.com/phaserjs/phaser/blob/v3.87.0/src/tilemaps/const/ORIENTATION_CONST.js#L15)  
Since: 3.50.0


---

# Static functions

## ParseToTilemap

### \<static> ParseToTilemap(scene, [key], [tileWidth], [tileHeight], [width], [height], [data], [insertNull])


**Description:**

Create a Tilemap from the given key or data. If neither is given, make a blank Tilemap. When

loading from CSV or a 2D array, you should specify the tileWidth & tileHeight. When parsing from

a map from Tiled, the tileWidth, tileHeight, width & height will be pulled from the map data. For

an empty map, you should specify tileWidth, tileHeight, width & height.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| scene | [Phaser.Scene](../class/Phaser.Scene.md) | No |  | The Scene to which this Tilemap belongs. |
| key | string | Yes |  | The key in the Phaser cache that corresponds to the loaded tilemap data. |
| tileWidth | number | Yes | 32 | The width of a tile in pixels. |
| tileHeight | number | Yes | 32 | The height of a tile in pixels. |
| width | number | Yes | 10 | The width of the map in tiles. |
| height | number | Yes | 10 | The height of the map in tiles. |
| data | Array.\<Array.\<number>> | Yes |  | Instead of loading from the cache, you can also load directly from a 2D array of tile indexes. |
| insertNull | boolean | Yes | false | Controls how empty tiles, tiles with an index of -1, in the map data are handled. If `true`, empty locations will get a value of `null`. If `false`, empty location will get a Tile object with an index of -1. If you've a large sparsely populated map and the tile data doesn't need to change then setting this value to `true` will help with memory consumption. However if your map is small or you need to update the tiles dynamically, then leave the default value set. |


**Returns:** [Phaser.Tilemaps.Tilemap](../class/Phaser.Tilemaps.Tilemap.md) - undefined


> Source: [src/tilemaps/ParseToTilemap.js#L12](https://github.com/phaserjs/phaser/blob/v3.87.0/src/tilemaps/ParseToTilemap.js#L12)  
Since: 3.0.0


---

# Static functions

## HEXAGONAL

### HEXAGONAL: number


**Description:**

Hexagonal Tilemap orientation constant.


> Source: [src/tilemaps/const/ORIENTATION_CONST.js#L57](https://github.com/phaserjs/phaser/blob/v3.87.0/src/tilemaps/const/ORIENTATION_CONST.js#L57)  
Since: 3.50.0


---

## ISOMETRIC

### ISOMETRIC: number


**Description:**

Isometric Tilemap orientation constant.


> Source: [src/tilemaps/const/ORIENTATION_CONST.js#L37](https://github.com/phaserjs/phaser/blob/v3.87.0/src/tilemaps/const/ORIENTATION_CONST.js#L37)  
Since: 3.50.0


---

## ORTHOGONAL

### ORTHOGONAL: number


**Description:**

Orthogonal Tilemap orientation constant.


> Source: [src/tilemaps/const/ORIENTATION_CONST.js#L27](https://github.com/phaserjs/phaser/blob/v3.87.0/src/tilemaps/const/ORIENTATION_CONST.js#L27)  
Since: 3.50.0


---

## STAGGERED

### STAGGERED: number


**Description:**

Staggered Tilemap orientation constant.


> Source: [src/tilemaps/const/ORIENTATION_CONST.js#L47](https://github.com/phaserjs/phaser/blob/v3.87.0/src/tilemaps/const/ORIENTATION_CONST.js#L47)  
Since: 3.50.0


---

