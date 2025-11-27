---
visibility: public
slug: intro
title: Introduction
---

[Sprite animations](https://docs.phaser.io/api-documentation/class/animations-animation) are the most frequent option to animate characters in Phaser games. The principle of this animation technique is the displaying of a sequence of images (frames), at a given “speed” or frame rate.

Animation:

![Eagle animation.](https://cdn.phaser.io/editor-docs/eagle.gif)

Animation frames:

![Eagle animation frames.](https://cdn.phaser.io/editor-docs/eagle-spritesheet.webp)

In Phaser v3, the animations are [created](https://docs.phaser.io/api-documentation/class/animations-animationmanager#create) as global objects, in the [animations manager](https://docs.phaser.io/api-documentation/class/animations-animationmanager):

You can create a single animation:

```javascript
this.anims.create({
    "key": "acorn",
    "frameRate": 12,
    "repeat": -1,
    "frames": [
        {
        "key": "atlas",
        "frame": "acorn-1"
        },
        {
        "key": "atlas",
        "frame": "acorn-2"
        },
        {
        "key": "atlas",
        "frame": "acorn-3"
        }
    ]
});
```

Or multiple animations:

```javascript
this.anims.fromJSON(
    "anims": [
        {
            "key": "acorn",
            // ....
        },
        {
            "key": "player",
            // ....
        }
    ]
);
```

in the practice, you create all the animations once in the game, probably in the preloader scene. Then, you can play an animation on a sprite object passing the animation key to the [play()](https://docs.phaser.io/api-documentation/class/gameobjects-sprite#play) method:

```javascript
mySprite.play("acorn");
```

Other way to create the animations is packing them all in a single JSON file, and load the file using the [this.load.animation(..)](https://docs.phaser.io/api-documentation/class/loader-loaderplugin#animation) method:

```javascript
this.load.animation("my-anims", "assets/animations.json");
```

Phaser Editor provides the Animations Editor, to create the animations JSON file. So, the workflow is very simple:

* Create the animations JSON file with the Animations Editor.
* Import the animations JSON file into an **Asset Pack** file with the [Asset Pack Editor](../asset-pack-editor).
* Play the animations in your code, with the [play()](https://docs.phaser.io/api-documentation/class/gameobjects-sprite#play) method or by using the [animation properties](../scene-editor/game-objects/common-object-properties#animation-properties) of the sprites or [user components and prefabs](../scene-editor/prefabs/prefab-user-properties#animation-key-property-type).

In the next section we cover all aspects of the Animations Editor.

![Animations Editor](https://cdn.phaser.io/editor-docs/welcome-animations-editor-overview.webp)
