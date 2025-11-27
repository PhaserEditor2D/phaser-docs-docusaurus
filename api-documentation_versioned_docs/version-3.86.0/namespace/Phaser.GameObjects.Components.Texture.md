---
visibility: public
slug: namespace/gameobjects-components-texture
title: Phaser.GameObjects.Components.Texture

seoTitle: Phaser.GameObjects.Components.Texture
seoDescription: Phaser v3.86.0 Documentation for 
ogImage: 
---




Scope: 
static
> Source: [src/gameobjects/components/Texture.js#L12](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/components/Texture.js#L12)  
Since: 3.0.0

# Static functions

## frame

### frame: [Phaser.Textures.Frame](../class/Phaser.Textures.Frame.md)


**Description:**

The Texture Frame this Game Object is using to render with.


> Source: [src/gameobjects/components/Texture.js#L30](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/components/Texture.js#L30)  
Since: 3.0.0


---

## texture

### texture: [Phaser.Textures.Texture](../class/Phaser.Textures.Texture.md), [Phaser.Textures.CanvasTexture](../class/Phaser.Textures.CanvasTexture.md)


**Description:**

The Texture this Game Object is using to render with.


> Source: [src/gameobjects/components/Texture.js#L21](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/components/Texture.js#L21)  
Since: 3.0.0


---

## isCropped

### isCropped: boolean


**Description:**

Internal flag. Not to be set by this Game Object.


**Access:** private


> Source: [src/gameobjects/components/Texture.js#L39](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/components/Texture.js#L39)  
Since: 3.11.0


---

# Static functions

## setFrame

### \<instance> setFrame(frame, [updateSize], [updateOrigin])


**Description:**

Sets the frame this Game Object will use to render with.



If you pass a string or index then the Frame has to belong to the current Texture being used

by this Game Object.



If you pass a Frame instance, then the Texture being used by this Game Object will also be updated.



Calling `setFrame` will modify the `width` and `height` properties of your Game Object.



It will also change the `origin` if the Frame has a custom pivot point, as exported from packages like Texture Packer.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| frame | string \| number | [Phaser.Textures.Frame](../class/Phaser.Textures.Frame.md) | No |  | The name or index of the frame within the Texture, or a Frame instance. |
| updateSize | boolean | Yes | true | Should this call adjust the size of the Game Object? |
| updateOrigin | boolean | Yes | true | Should this call adjust the origin of the Game Object? |


**Returns:** [Phaser.GameObjects.Components.Texture](../namespace/Phaser.GameObjects.Components.Texture.md) - This Game Object instance.


> Source: [src/gameobjects/components/Texture.js#L75](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/components/Texture.js#L75)  
Since: 3.0.0


---

## setTexture

### \<instance> setTexture(key, [frame], [updateSize], [updateOrigin])


**Description:**

Sets the texture and frame this Game Object will use to render with.



Textures are referenced by their string-based keys, as stored in the Texture Manager.



Calling this method will modify the `width` and `height` properties of your Game Object.



It will also change the `origin` if the Frame has a custom pivot point, as exported from packages like Texture Packer.

**Parameters:**
| name | type | optional | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| key | string \| [Phaser.Textures.Texture](../class/Phaser.Textures.Texture.md) | No |  | The key of the texture to be used, as stored in the Texture Manager, or a Texture instance. |
| frame | string \| number | Yes |  | The name or index of the frame within the Texture. |
| updateSize | boolean | Yes | true | Should this call adjust the size of the Game Object? |
| updateOrigin | boolean | Yes | true | Should this call change the origin of the Game Object? |


**Returns:** [Phaser.GameObjects.Components.Texture](../namespace/Phaser.GameObjects.Components.Texture.md) - This Game Object instance.


> Source: [src/gameobjects/components/Texture.js#L49](https://github.com/phaserjs/phaser/blob/v3.86.0/src/gameobjects/components/Texture.js#L49)  
Since: 3.0.0


---

