---
slug: particle-emitter-object
title: ParticleEmitter
---

The [ParticleEmitter](https://docs.phaser.io/api-documentation/class/gameobjects-particles-particleemitter) game object is an amazing and large feature of Phaser.

It allows you to create animations of particles, from fluids to explosions.

Phaser Editor supports adding particle emitters to the scene, tweaking their properties, and previewing them. Since it uses the same Phaser API, the animations you get in the scene editor are the same as you get in your game.

## Create a Particle Emitter game object

You can create a Particle Emitter object by dropping a Particle Emitter built-in type from the Blocks view. It is the same workflow as the other game objects:

![Drop a particle emitter to the scene](https://cdn.phaser.io/editor-docs/scene-editor-particle-emitter-create-1-20240611.webp)

Right away after dropping the Particle Emitter block, it opens a dialog to select the frames of the emitter. You can select an image texture or multiple frames from a texture atlas:

![Select frames](https://cdn.phaser.io/editor-docs/scene-editor-particle-emitter-create-select-frames-20240611.webp)

After pressing **Select**, the Particle Emitter is created in the scene:

![Fresh particle emitter in the scene](https://cdn.phaser.io/editor-docs/scene-editor-particle-emitter-create-done-20240611.webp)

The next step is changing any of the properties of the editor. You can change them in the **Inspector** view. For the sake of this example, we will change the **Speed** property, to the value of 200:

![Change the speed](https://cdn.phaser.io/editor-docs/scene-editor-particle-emitter-change-speed-20240611.webp)


### Play and Refresh the scene

After changing the speed, you can see the changes in the scene editor. But you have to move a bit the scene. By default, the Scene Editor does not run the update loop of the game, so you get a static picture of the emitter. To move it and see the particle animation, you can press the **Play** button in the in-scene toolbar at the bottom of the scene. Next to the **Play** button, you can see the **Refresh** button. You can use it to rebuild the scene and see the emitters from its fresh state. There are behaviors you can set to an emitter, like a **duration**, that you only can repeat by refreshing/re-creating the scene:

![Play and re-create the scene](https://cdn.phaser.io/editor-docs/scene-editor-particle-emitter-scene-toolbar-20240611.webp)


### Code generation

When you add a particle emitter to the scene, the [scene compiler](../scene-compiler) generates a code like this:

```javascript
this.add.particles(305, 343, "flares", {frame: ["red", "white"], speed: 200});
```

All properties you set to the emitter are passed as part of the configuration argument of the `particles` method.
As with any other game object, you can [create a prefab](../prefabs) of a particle emitter.
