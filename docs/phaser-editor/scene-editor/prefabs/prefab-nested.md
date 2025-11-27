---
slug: prefab-nested
title: Nested prefabs
---

The nested prefab is a powerful concept. Like the overall prefab concept, it is inspired by [Unity Engine](https://unity.com). Its name describes its purpose: allow nesting prefabs.

There are many cases where your prefab is a compound of objects, and you would like to modify them in prefab instances. For example, look at this **AlienShip** prefab:

![AlienShip, a prefab with nested prefabs.](https://cdn.phaser.io/editor-docs/scene-editor-nested-prefab-alienship-08182021.webp)

It is a container, with an **alien** and a **ship** children.

When you create an instance of the **AlienPrefab** (that is an instance of a container), you can change its position, its scale. It’s custom properties. But you cannot change the properties of the **ship** or the **alien** children.

But if you declare the **alien** and **ship** objects as nested prefab, you can access them in the prefab instance.

For setting an object as nested prefab, you select the **NESTED_PREFAB** option in the **Scope** parameter of the **Variable** section:

![Setting the nested prefab scope.](https://cdn.phaser.io/editor-docs/scene-editor-nested-prefab-scope-20230516.webp)

Variables with a **NESTED_PREFAB** scopes are generated in code as public fields. It is like the **PUBLIC** scope but allowing to modify the object in prefab instances.


## Nested prefab instances

When you create an instance of a prefab that contains nested prefabs, the Outline view shows the nested prefabs. Also, the Scene Editor allows selecting the nested prefab instance:

![Prefab instance with nested prefabs.](https://cdn.phaser.io/editor-docs/scene-editor-nested-prefab-instance-08192021.webp)

Note the nested prefab instance **ship** of the **AlienShip**’s prefab instance, has a different texture. Nested prefab instances work just like prefab instances: for changing a property, it first requires unlocking the property:

![Changing the texture property of a nested prefab instance.](https://cdn.phaser.io/editor-docs/scene-editor-nested-prefab-instance-change-texture-08192021.webp)

The code generated for the **alien1** object is like this:

```javascript
// alien1
const alien1 = new AlienShip(this, 142, 398);
this.add.existing(alien1);
alien1.ship.setTexture("shipYellow");
```

Note the nested prefab instance **ship** is a field of the prefab instance **alien1**.

## The nested prefab constructor and the xargs

In most cases, when the user modifies a property of a nested prefab in the scene, the scene compiler generates a code like the one we saw in the previous example:

```javascript
alien1 = new AlienShip(this, 142, 398);
// ...
// change the texture of the nested prefab instance **ship**
alien1.ship.setTexture("shipYellow");
```

Where `alien1` is the instance of the parent prefab, and `ship` is the instance of the nested prefab, and `setTexture()` is a method to modify the `texture` property. This is true for the vast majority of object types supported by Phaser, however, there are some object types that only receive their properties in the constructor. This means that once the object is created, it cannot be modified through a property.

Suppose the nested prefab **ship** does not allow its texture to be modified through a method or property, but must be passed in the constructor. However, from the scene we only create the instance of the parent prefab **AlienShip**. It is in the **AlienShip** class where the **ship** object is created:

```javascript
class AlienShip extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super()
        // ...
        this.ship = scene.add.image(10, 10, "shipBlue");
    }
}
```

As you can see, **ship** receives the texture **``shipBlue``** in its constructor. If we want to change the texture of **ship** in the scene, we should pass as argument also the texture of **ship**. It would look something like this:

```javascript
class AlienShip {
    constructor(scene, x, y, key, frame, ship_key, ship_frame) {
        // ...
        this.ship = scene.add.image(scene, 10, 10, ship_key ?? "shipBlue", ship_frame);
    }
}
```

And the code in the scene would be:

```javascript
alien1 = new AlienShip(this, 142, 398, "shipYellow");
```

This could be an option, but it has the disadvantage that in cases where the prefab contains several nested prefabs, and in turn each nested prefab has other nested prefabs, the constructor of the parent prefab becomes very long and difficult to read, since it would have to include all the parameters of all the nested prefabs.

Therefore, to simplify the constructor, the scene compiler will use a special argument to the prefab constructor called **xargs** (extra arguments). This argument contains the configuration of all nested prefabs in the format of a plain JavaScript object, and the nested prefabs will access it to take its parameters. The generated code for the above example would look something like this:

In the parent prefab **AlienShip**:

```javascript
class AlienShip {
    constructor(scene, x, y, xargs) {
        // ...
        this.ship = scene.add.image(scene, 10, 10, xargs?.ship?.key ?? "shipBlue", xargs?.ship?.frame);
    }
}
```

On the scene:

```javascript
alien1 = new AlienShip(this, 142, 398, { 
        ship: {
            key: "shipYellow" 
        }
    });
```

Suppose the nested prefab **ship** were itself a prefab that has a nested prefab **engine**. In this case, the code in the parent prefab **AlienShip** would look something like this:

```javascript
class AlienShip {
    constructor(scene, x, y, xargs) {
        // ...
        this.ship = new Ship(scene, 10, 10, xargs?.ship?.key ?? "shipBlue", xargs?.ship?.frame, { ...xargs?.ship, engine: xargs?.ship?.engine });
    }
}
```

y en la escena quedaría:

```javascript
alien1 = new AlienShip(this, 142, 398, { 
        ship: {
            key: "shipYellow",
            engine: {
                key: "engines",
                frame: "red"
            } 
        }
    });
```

So far, only the [SpineGameObject](../spine-animations/spine-animations-game-object) type and all [Box2D](../box2d-physics) object types are the ones that require the use of the **xargs** argument.

## Things you cannot do with nested prefab instances

In practice, nested prefabs are like prefabs, with certain differences:

(Remember a prefab is a type, a template, and a prefab instance is the realization of the prefab in the scene)

* In code, a prefab is a user JavaScript class. A nested prefab is part of a prefab. It is an object referenced by a prefab class field.
* You cannot define user properties for a nested prefab (check the comment below).
* You cannot delete a nested prefab instance.
* You cannot change the type of a nested prefab instance.

A nested prefab is an object that is part of a prefab. Its type can be a built-in Phaser type or a prefab. You cannot define user properties for the nested prefab if it has a Phaser built-in type. But, if it has a prefab as a type, you can define user properties for that prefab. Saying it in other words. If you need to add custom properties to a nested prefab (**A**), then you can create a separated prefab scene (**B**) with user properties, and use that prefab **B** as type creating the nested prefab **A**.
