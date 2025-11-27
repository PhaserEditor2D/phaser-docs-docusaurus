---
slug: misc
title: Miscellaneous
---

## Preview active scene

The Scene Editor runs a Phaser scene inside it, which means, it shows you a pixel-perfect image of the scene you are creating. But sometimes you want to see the scene in action, with the physics, the inputs, the animations. For this purpose there is a trick: the **Preview Scene** (`Ctrl+0`) command.

This command opens your game in the default (or configured) browser but adds the start parameter to the URL, and sets the name of the current scene as value. If the current scene is a prefab, then it uses the last valid scene.

For example, if you are editing the **LevelCompleted** scene, and you run the **Preview Scene** command, the editor launches the browser and opens the URL:

`http://localhost:<port>/start=LevelCompleted`

Now, in the code of your game, you have to read the value of the start parameter and start the scene with the same name. This is something you have to code manually, however, the built-in Phaser Editor project templates contain the code for reading the `start` parameter. It looks like this:

```javascript
if (process.env.NODE_ENV === "development") {

    const start = new URLSearchParams(location.search).get("start");

    if (start) {

        console.log(`Development: jump to ${start}`);
        this.scene.start(start);
        return;
    }
}
```

The `process.env.NODE_ENV === "development"` expression is replaced by [webpack](https://webpack.js.org) at compile time, by `true` or `false` in regarding you are working on a development or production build.

You can place that code in the **Preloader** scene or any other scene after setting up a consistent game state.

## Numeric input field

You can change the value of a numeric input fields in different ways:

- By writing a new value in the input field.
- By rolling the mouse wheel over the input field.
- By dragging the mouse over the input field’s label.

In the last two methods, the value will be increased or decreased by a certain amount. The amount depends on the domain of the values of the property associated with the input field. For example, if the property is a float between 0 and 1, the value will be increased or decreased by 0.01. If the property is an integer, the value will be increased or decreased by 1.

## Scene Tools Panel

At the bottom of the scene, there is a panel with shortcuts to tools and other functions of the scene:

![Scene tools pane](https://cdn.phaser.io/editor-docs/misc-scene-tools-panel-20240917.webp)

Going from left to right:

- The [align tools](./layout-tools/layout-tools-align).
- The [align to border tools](./layout-tools/layout-tools-align-to-border).
- The [origin tools](./layout-tools/layout-tools-origin).
- The [sorting tools](./layout-tools/layout-tools-sorting).
- The [grid tools](./layout-tools/layout-tools-grid).

Other special buttons are as follows:

### Play scene update loop

The common in a Phaser scene is to run a loop to update and render the scene. However, the Scene Editor doesn't run the loop by default, else it updates/renders the scene only when the user modifies it. This works for most of the cases, but there are game objects that can be animated in real-time, like the Sprite animations, Particle Emitters, Spine animations, or Video objects. For these cases, you can enable the scene update loop by clicking the play button. This button starts the scene loop so the animations are updated smoothly. You can click the button again to pause the loop.

### Scene refresh button

The Refresh button re-creates the scene again. You can use it to reset a complex animation to its first state, like in a particle emitter.

### Audio mute button

The audio mute button mutes all the sounds of the scene. It applies when you preview video game objects.

## Go To dialog

In Phaser Editor you create scenes, prefabs, script nodes, user components, asset packs, animations... and an important part of your daily workflow is navigating between these files. The **Go To dialog** is a powerful tool that helps you to find and open any file in your project. When you open this dialog, it shows all relevant files and definitions and you can quickly search to find the file you are looking for. You can open the dialog with the `Ctrl+Alt+O` (`Cmd+Opt+O` on macOS) shortcut, or click the **Go To** button in the main toolbar.

![Open the Go To dialog](https://cdn.phaser.io/editor-docs/misc-go-to-dialog-open-20240918.webp)

You can zoom in/out of the dialog's content by holding the `Shift` key and scrolling the mouse wheel. You can also click on the zoom buttons in the bottom/right corner of the dialog.

![Zoom in/out](https://cdn.phaser.io/editor-docs/misc-go-to-dialog-zoom-20240918.webp)
