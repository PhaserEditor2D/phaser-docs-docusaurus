---
slug: user-components-editor
title: User Components Editor
---

Components (or similar patterns) are widely used in popular game engines or editors. Many of these tools use custom scripting languages or certain elements of a language (like metadata or attributes) to provide the components information, like properties description, default values, UI rendering, etc… The code of the component has the metadata of the component as part of its implementation.

In Phaser Editor, for now, it is different. We use configurations (JSON) files and a [User Components compiler](./user-components-compiler) that parses these files and generates the JavaScript (or TypeScript) code of the components. Or better say, a part of the component’s code, because, just like the Scene Editor does with the scene files, you can insert your code inside the output of the [User Components compiler](./user-components-compiler).

The information available in the configuration (`*.components`) files are used by the Scene Editor for building the UI elements needed to add and edit the components of a game object. It is not required by the game at run-time. We strongly recommend to exclude it from the distribution build of your game.

## Add new component

To add a new user component you can: press the `A` key, click in the **Add Component** button in the [Main toolbar](../../workbench/main-toolbar) or select the **Add Component** option in the context menu.

![Add new user component.](https://cdn.phaser.io/editor-docs/scene-editor-user-components-add-component-20221101.webp)

The newly created component has a default name, so probably you would like to change it, in the Inspector view.

As you can see in the image, the components are shown in a viewer and are rendered like class declarations: with the class name and the name and type of the properties.

To delete a component select it and press the `Delete` key. Or select the **Delete** option in the context menu.

## Edit the component info

A component is a class that adds state and behaviors to a game object, using composition. To edit the information of a component, you can select it in the editor and edit the values in the Inspector view.

This is the component metadata you can edit:

* The name of the component class.
* The type of the game object (or entity). Next to the field, you can open a menu with common possible options.
* The super-class of the component class. It is optional. Next to the field, you can open a menu with common possible options and names used in other components.
* The display name of the component. This is the name used in different parts of the editor. It is optional and empty by default. When the **Display Name** is empty, the **Name** is used instead.
* The object display format. This is a template string for showing the component info next to the prefab instance display name, in the Outline view. It works just like [the prefab display properties](../prefabs/prefab-display-properties). It is optional.

![Edit component info.](https://cdn.phaser.io/editor-docs/scene-editor-user-components-edit-props-2-20240110.webp)

The properties work the same as the [Prefab user properties](../prefabs/prefab-user-properties#creating-a-prefab-user-property).

You can add new properties by pressing the **Add Property** button.

The above image shows the **HorizontalMove** component. It has a game object type `Phaser.GameObjects.Image`. It means you should add this component to that type of objects (entities). And the **horizVelocity**, **minX** and **minY** properties.

![The component's properties.](https://cdn.phaser.io/editor-docs/scene-editor-user-components-props-20221101.webp)

For editing the info of a property, select it in the editor and set the values in the Inspector view:

![Edit property.](https://cdn.phaser.io/editor-docs/scene-editor-user-components-edit-property-20221101.webp)

This component is compiled into this JavaScript code:

```javascript
// You can write more code here

/* START OF COMPILED CODE */

class HorizontalMove {

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
        // You can write code here
        /* END-USER-CTR-CODE */
    }

    /** @returns {HorizontalMove} */
    static getComponent(gameObject) {
        return gameObject["__HorizontalMove"];
    }

    /* START-USER-CODE */
    // You can write code here
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
```

Check the [User Components compiler](./user-components-compiler) section to learn more about how the components are translated into JavaScript code.

## Edit the component code

To edit the [code generated](./user-components-compiler) for a component, you can double click on a component in the editor. It will open the component code file in the built-in code editor.

Also, you can select the component and press the `Q` key. It will open a Quick Edit dialog with a code editor:

![Edit component code in the Quick Edit dialog.](https://cdn.phaser.io/editor-docs/scene-editor-user-components-edit-code-20221101.webp)

The context menu shows all the options to edit the output file of a component:

![Open output file options.](https://cdn.phaser.io/editor-docs/scene-editor-user-components-open-editor-menu-20221101.webp)

The **Open Output File in Visual Studio Code** (`Ctrl+Alt+E`) command opens the output file in the configured external editor.
