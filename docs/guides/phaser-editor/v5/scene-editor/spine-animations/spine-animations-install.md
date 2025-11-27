---
slug: spine-animations-install
title: Installing the Spine plugin in your game
---

The [Spine Phaser runtime](https://esotericsoftware.com/spine-phaser) is a third-party library. It is not included in Phaser by default.

Phaser Editor provides the [Spine](https://esotericsoftware.com) tooling by default, you don’t need to do any extra steps for using [Spine](https://esotericsoftware.com) in the editor. However, you should install the [Spine](https://esotericsoftware.com) plugin in your game.

You can install it via NPM:

```bash
npm install @esotericsoftware/spine-phaser
```

Or using the `script` tag in the `index.html` file of your game:

```html
<script src="https://unpkg.com/@esotericsoftware/spine-phaser@4.1.*/dist/iife/spine-phaser.js">
</script>
```

Next, add the Spine scene plugin to your Phaser game configuration:

```javascript
const config = {
  ...
  plugins: {
      scene: [{
          key: "spine.SpinePlugin",
          plugin: spine.SpinePlugin,
          mapping: "spine"
        }]
    }
  }

new Phaser.Game(config);
```

[Learn more about installing Phaser Spine in your game](https://esotericsoftware.com/spine-phaser#Installation)


## Spine starter template

Installing the [Spine Phaser runtime](https://esotericsoftware.com/spine-phaser) is not complex, however, we provide a starter template with a basic configuration. If you are going to start a new project, then we recommend you use this project template.

It is available in the **Phaser Editor Desktop** templates page:

![Spine project template.](https://cdn.phaser.io/editor-docs/spine-animations-project-template-20230928.webp)
