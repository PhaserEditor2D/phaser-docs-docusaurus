---
visibility: public
slug: layer
title: Layer
description: A Guide to the Phaser Layer to group 'layers' of Game Objects
seoTitle: Layer
seoDescription: A Guide to the Phaser Layer to group 'layers' of Game Objects
---

A Layer is a special type of Game Object that acts as a Display List. You can add any type of Game Object to a Layer, just as you would to a Scene. Layers can be used to visually group together 'layers' of Game Objects:

```js
const spaceman = this.add.sprite(150, 300, 'spaceman');
const bunny = this.add.sprite(400, 300, 'bunny');
const elephant = this.add.sprite(650, 300, 'elephant');

const layer = this.add.layer();

layer.add([ spaceman, bunny, elephant ]);
```

The 3 sprites in the example above will now be managed by the Layer they were added to. Therefore, if you then set `layer.setVisible(false)` they would all vanish from the display.

You can also control the depth of the Game Objects within the Layer. For example, calling the `setDepth` method of a child of a Layer will allow you to adjust the depth of that child within the Layer itself, rather than the whole Scene. The Layer, too, can have its depth set as well.

The Layer class also offers many different methods for manipulating the list, such as the methods `moveUp`, `moveDown`, `sendToBack`, `bringToTop` and so on. These allow you to change the display list position of the Layers children, causing it to adjust the order in which they are rendered. Using `setDepth` on a child allows you to override this.

Layers can have Post FX Pipelines set, which allows you to easily enable a post pipeline across a whole range of children, which, depending on the effect, can often be far more efficient that doing so on a per-child basis.

Layers have no position or size within the Scene. This means you cannot enable a Layer for physics or input, or change the position, rotation or scale of a Layer. They also have no scroll factor, texture, tint, origin, crop or bounds.

If you need those kind of features then you should use a Container instead. Containers can be added to Layers, but Layers cannot be added to Containers.

However, you can set the Alpha, Blend Mode, Depth, Mask and Visible state of a Layer. These settings will impact all children being rendered by the Layer.

## Add layer

  ```javascript
  var layer = this.add.layer();
  // var layer = this.add.layer(children);
  ```

- `children` : Array of game objects added to this layer.

## Custom class

```javascript
class MyLayer extends Phaser.GameObjects.Layer {
    constructor(scene, children) {
        super(scene, children);
        // ...
        this.add.existing(this);
    }
    // ...

    // preUpdate(time, delta) {}
}
```

- `this.add.existing(gameObject)` : Adds an existing Game Object to this Scene.
  - If the Game Object renders, it will be added to the Display List.
  - If it has a `preUpdate` method, it will be added to the Update List.

Example

```javascript
var layer = new MyLayer(scene, children);
```

## Add child

- Add child

  ```javascript
  layer.add(gameObject);
  // layer.add(gameObjects);
  ```

  - `gameObject` : A game object, or an array of game objects.
- Add child at

  ```javascript
  layer.addAt(gameObject, index);
  ```

- Replace child

  ```javascript
  layer.replace(oldGameObject, newGameObject);
  ```

## Remove child

- Remove child

  ```javascript
  var removed = layer.remove(gameObject);
  ```

- Remove child at

  ```javascript
  var removed = layer.removeAt(index);
  ```

- Remove children between indexes

  ```javascript
  var removed = layer.removeBetween(startIndex, endIndex);
  ```

- Remove all children

  ```javascript
  layer.removeAll();
  ```

Removed game object won't be added to display list of scene, use

```javascript
gameObject.addToDisplayList();
```

to add it back to scene's display list.

## Get child

- Get child at

  ```javascript
  var gameObject = layer.getAt(index);
  ```

- Get first child by name

  ```javascript
  var gameObject = layer.getByName(name);
  ```

- Get first child by property

  ```javascript
  var gameObject = layer.getFirst(property, value);
  // var gameObject = layer.getFirst(property, value, startIndex, endIndex);
  ```

- Get random child

  ```javascript
  var gameObject = layer.getRandom();
  // var gameObject = layer.getRandom(startIndex, length);
  ```

- Get all children

  ```javascript
  var gameObjects = layer.getAll();
  ```

- Get index of child

  ```javascript
  var index = layer.getIndex(gameObject);
  ```

- Get child count

  ```javascript
  var count = layer.count(property, value);
  ```

- Get total children count

  ```javascript
  var count = layer.length;
  ```

- Has child

  ```javascript
  var hasChild = layer.exists(gameObject);
  ```

### Iterate

- Get first child (set iterator index to 0)

  ```javascript
  var gameObject = layer.first;
  ```

- Get last child (set iterator index to last)

  ```javascript
  var gameObject = layer.last;
  ```

- Get next child (increase iterator index, until last)

  ```javascript
  var gameObject = layer.next;
  ```

- Get previous child (decrease iterator index, until 0)

  ```javascript
  var gameObject = layer.previous;
  ```

## Move child

- Swap

  ```javascript
  layer.swap(gameObject1, gameObject2);
  ```

- Move to

  ```javascript
  layer.moveTo(gameObject, index);
  ```

- Bring to top

  ```javascript
  layer.bringToTop(gameObject);
  ```

- Send to back

  ```javascript
  layer.sendToBack(gameObject);
  ```

- Move up

  ```javascript
  layer.moveUp(gameObject);
  ```

- Move down

  ```javascript
  layer.moveDown(gameObject);
  ```

- Move child1 above child2
  
  ```javascript
  layer.moveAbove(child1, child2);
  ```

- Move child1 below child2

  ```javascript
  layer.moveBelow(child1, child2);
  ```

- Sort

  ```javascript
  layer.sort(property);
  ```

  or

  ```javascript
  layer.sort('', function(gameObject1, gameObject2) { 
      return 1; // 0, or -1
  });
  ```

- Reverse

  ```javascript
  layer.reverse();
  ```

- Shuffle

  ```javascript
  layer.shuffle();
  ```

!!! note Sort by depth
    Children game objects also sort by depth.

## For each child

```javascript
layer.each(function(gameObject) {

}, scope);
```

## Set property

```javascript
layer.setAll(property, value);
// layer.setAll(property, value, startIndex, endIndex);
```

## Events

- On add game object

  ```javascript
  layer.events.on('addedtoscene', function(gameObject, scene) {

  })
  ```

- On remove game object

  ```javascript
  layer.events.on('removedfromscene', function(gameObject, scene) {

  })
  ```

`layer.events` references to `this.events`.

## Other properties

See [game object](../gameobjects.md)

## Create mask

```javascript
var mask = layer.createBitmapMask();
```

See [mask](../display.md#masks)

## Shader effects

Support [postFX effects](./shader.md)

!!! note
    No preFX effect support

## Author Credits

Content on this page includes work by:

- [RexRainbow](https://github.com/rexrainbow)
