---
slug: user-components-compiler
title: The User Components compiler
---

The user components are configured in `*.components` files and used by the Scene Editor. It is a concept of Phaser Editor, not Phaser. So we use the same Scene Editor philosophy, it compiles our custom configurations into plain, readable, fully Phaser compatible code.

Following, look at how an **HorizontalMove** component is compiled into JavaScript.

The component information:

![Component metadata.](https://cdn.phaser.io/editor-docs/scene-editor-user-components-editor-info-20221101.webp)

The properties of the component:

![The properties](https://cdn.phaser.io/editor-docs/scene-editor-user-components-props-20221101.webp)

**Horizontal Velocity**

![Horizaontal move property.](https://cdn.phaser.io/editor-docs/scene-editor-user-components-prop-1-20221101.webp)

**Min X**

![Min position X](https://cdn.phaser.io/editor-docs/scene-editor-user-components-prop-2-20221101.webp)

**Max X**

![Max position Y.](https://cdn.phaser.io/editor-docs/scene-editor-user-components-prop-3-20221101.webp)

The generated code:

```javascript
// You can write more code here

/* START OF COMPILED CODE */

class HorizontalMove extends BaseComponent {

    constructor(gameObject) {
        gameObject["__HorizontalMove"] = this;

        /** @type {Phaser.GameObjects.Image} */
        this.gameObject = gameObject;
        /** @type {number} */
        this.horizVelocity = 0;
        /** @type {number} */
        this.minX = 0;
        /** @type {number} */
        this.maxX = 3070;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {HorizontalMove} */
    static getComponent(gameObject) {
        return gameObject["__HorizontalMove"];
    }

    /* START-USER-CODE */
    // Write your code here.
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
// You can write more code here
```

The generated class is very simple, next we explain it part by part:


## The super class

If a value (in this case `BaseComponent`) is set to the **Super Class** parameter. Then the class code is generated like this:

```javascript
class HorizontalMove extends BaseComponent {
    ...
}
```

A super class allows to create behaviors that are common to certain components, or provide helper methods. It is the case of the **UserComponent** class, explained in the [Starting and updating the User Components](user-components-start-update-methods) section.

## The constructor

The component has a constructor where all properties are initialized and you can add your initialization code too.

![The constructor code.](https://cdn.phaser.io/editor-docs/scene-editor-user-components-ctr-code-07292020.webp)

The constructor is used to create the component and add it to the game object:

```javascript
const enemy = this.add.image(...);
const enemyMove = new HorizontalMove(enemyMove);
enemyMove.maxX = 400;
```


## The component accessor method

The `getComponent()` method gets the component from a game object, if exists:

```javascript
class HorizontalMove {

    ...

    /** @returns {HorizontalMove} */
    static getComponent(gameObject) {
        return gameObject["__HorizontalMove"];
    }
}

// in a random part of the game
const enemy = ...;
const horizMove = HorizontalMove.getComponent(enemy);
horizMove.minX = 10;
```


## The user members of the component

You can add members to the component class. Just write them inside the `/* STAR-USER-CODE */` and `/* END-USER-CODE */` comments.

Probably, you would like to write a **start** and **update** method, like is explained in the [Starting and updating components](user-components-start-update-methods) section.


## Compiler settings

The User Components compiler supports two JavaScript and TypeScript as output languages. You can select this language in the Inspector view, when no component is selected. Also, you can select if insert spaces for indentation, the tab size, or the auto export/import of ES modules:

![Selecting compiler settings.](https://cdn.phaser.io/editor-docs/scene-editor-user-components-compiler-settings.webp)

The settings have default values, but if there are other scene files or user components files, the default values will be taken from the latest modified file (scene file if not components files are available).

When the **Export Class (ES Module)** parameter is on, the compiler includes the `export default` class modifiers.

When the **Auto Import (ES Module)** parameter is on, the compiler adds “import” statements for importing the types used in different parts of the code generation. Code written by the user is not processed. If you use other types, you should import them manually.
