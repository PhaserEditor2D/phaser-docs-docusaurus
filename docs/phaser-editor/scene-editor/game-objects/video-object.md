---
slug: video-object
title: Video
---

The Video is a built-in Phaser object type: [Phaser.GameObjects.Video](https://docs.phaser.io/api-documentation/class/gameobjects-video).


A Video object is created in code using the [video factory](https://docs.phaser.io/api-documentation/class/gameobjects-gameobjectfactory#video). This is how the [scene compiler](../scene-compiler) generates the code of a Video:

```javascript
const player = this.add.video(192, 512, "my-video");
```

The first two arguments are the position of the video. The last argument `"my-video"` is the key to the video asset in the asset pack.

To create a video object, you can drag the Video block and drop it in the scene:

![Add video](https://cdn.phaser.io/editor-docs/scene-editor-video-object-add-20240730.webp)

The video object requires a video file to open. When you drop the Video block, it shows a dialog to select one of the video keys defined in the asset pack files:

![Select video key](https://cdn.phaser.io/editor-docs/scene-editor-video-object-select-key-20240730.webp)

Once you select the video key, the video object is created in the scene:

![Video object in the scene](https://cdn.phaser.io/editor-docs/scene-editor-video-add-done-20240730.webp)

You can create the same video object by dragging the video key from the Blocks view and dropping it in the scene:

![Create video object from video key](https://cdn.phaser.io/editor-docs/scene-editor-add-video-object-from-key-20240730.webp)


## Video properties

The Video object has the following properties:

- **Auto Play**: If checked, the video starts playing when the scene starts.
- **Loop**: If checked, the video plays in a loop.
- **Current Time**: Seek the video to the given time in seconds.
- **Video Key**: The key to the video asset in the asset pack.

![Video properties](https://cdn.phaser.io/editor-docs/scene-editor-video-object-properties-20240730.webp)

To change the video key (file), click on the **Video Key** button. It opens the dialog to select another video key:

![Select a new video key](https://cdn.phaser.io/editor-docs/scene-editor-video-object-change-key.webp)

In addition to the properties, the Video section has a playback toolbar to play the video in the scene. It has the play, pause, seek to start, and seek to end buttons:

![Video properties](https://cdn.phaser.io/editor-docs/scene-editor-video-object-properties-20240730.webp)

The Video type has other properties that are common to other object types:

* [Variable properties](./common-object-properties#variable-properties)
* [Lists properties](./common-object-properties#lists-properties)
* [Transform properties](./common-object-properties#transform-properties)
* [Origin properties](./common-object-properties#origin-properties)
* [Flip properties](./common-object-properties#flip-properties)
* [Visible property](./common-object-properties#visible-property)
* [Alpha properties](./common-object-properties#alpha-properties)
* [Tint](./common-object-properties#tint-properties)
* [Filters](../filters#a-filter-as-a-scene-object)
* [Hit Area](../input#hit-area)

## Update loop

The Video object shows the next video frame each time the scene is updated. By default, and for performance considerations, the Scene Editor runs the update loop step by step, only when the user does an operation in the scene. For that reason, you may see that the video doesn't play. To see the video continuously, you can enable the **Run Update Loop** option in the Scene Editor toolbar:

![Run the update loop](https://cdn.phaser.io/editor-docs/scene-editor-video-object-scene-toolbar-20240730.webp)

This toolbar also contains a button to mute on/off the audio of all videos in the scene.
