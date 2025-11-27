---
slug: particle-emitter-object-properties
title: Particle Emitter properties
---

The Particle Emitter has a massive amount of properties. You can edit the properties in the Inspector view. The properties are divided into sections.


## Preview properties

The preview properties are not part of the Particle Emitter configuration. They are only for the Scene Editor to show the emitter in the scene editor. The preview properties are:

* **Preview Active**: a flag to enable/disable the preview of the emitter. It remains visible, but the particles are not updated.
* **Preview Advance**: before starting the emitter, it advances the animation of the particles in the given number of milliseconds. By default, it advances the animation in 1 second. If you like to see the animation from the start, you can set this parameter to 0 and [refresh the scene](./particle-emitter-object#play-and-refresh-the-scene).

![Preview properties](https://cdn.phaser.io/editor-docs/scene-editor-particle-emitter-props-preview-20240611.webp)


## Configuration properties

Before continuing with the remaining properties, we should explain the different values you can set to a kind of properties of the emitter.

Particle Emitters are created via a configuration object. The properties of this object can be specified in a variety of formats, giving you plenty of scope over the values they return, leading to complex visual effects. 

In the editor, you can select the format of a property, and next it shows the different parameters associated with that configuration.

Following are the different forms of configuration value you can give to a property.


### Empty

By default, the property has no value, so the editor doesn't include it in the configuration object.

![The None format of a property](https://cdn.phaser.io/editor-docs/scene-editor-particle-emitter-prop-value-20240611.webp)


### An explicit value

```js
x: 400
```

![The Value format](https://cdn.phaser.io/editor-docs/scene-editor-particle-emitter-prop-value-20240611.webp)

The x value will always be 400 when the particle is spawned.


### A random value:

```js
x: [ 100, 200, 300, 400 ]
```

![The Random type](https://cdn.phaser.io/editor-docs/scene-editor-particle-emitter-prop-random-20240611.webp)

The x value will be one of the 4 elements in the given array, picked at random on emission.

Note that in the editor's UI you must write the array values separated by commas.


### A start/end configuration:

This allows you to control the change in value between the given start and end parameters over the course of the particles lifetime:

```js
scale: { start: 0, end: 1 }
```

The particle scale will start at 0 when emitted and ease to a scale of 1 over the course of its lifetime. You can also specify the ease function used for this change (the default is Linear):

```js
scale: { start: 0, end: 1, ease: "Bounce.easeOut" }
```

The start and end configuration can have an optional ``random`` parameter. This forces it to pick a random value between the two values and use this as the starting value, then easing to the "end" parameter over its lifetime.

```js
scale: { start: 4, end: 0.5, random: true }
```

The particle will start with a random scale between 0.5 and 4 and then scale to the end value over its lifetime. You can combine the above with the ease parameter as well to control the value easing.

Here is how you see it in the editor's UI:

![Start/end format](https://cdn.phaser.io/editor-docs/scene-editor-particle-emitter-prop-start-end-20240612.webp)


### An interpolation configuration

You can provide an array of values which will be used for interpolation during the particles lifetime. You can also define the interpolation function to be used. There are three provided: linear (the default), bezier and catmull, or you can provide your own function.

```js
x: { values: [ 50, 500, 200, 800 ], interpolation: "catmull" }
```

The particle scale will interpolate from 50 when emitted to 800 via the other points over the course of its lifetime. You can also specify an ease function used to control the rate of change through the values (the default is Linear):

```js
x: { values: [ 50, 500, 200, 800 ], interpolation: "catmull", ease: "Bounce.easeOut" }
```

This is how you configure it in the editor:

![Interpolation configuration](https://cdn.phaser.io/editor-docs/scene-editor-particle-emitter-prop-interpolation-20240612.webp)

Note the **Values** parameter allows writing the values separated by commas.


### A stepped configuration

The steps parameter allows you to control the placement of sequential particles across the start-end range:

```js
x: { steps: 32, start: 0, end: 576 }
```

Here we have a range of 576 (start to end). This is divided into 32 steps.

The first particle will emit at the x position of 0. The next will emit at the next 'step' along, which would be 18. The following particle will emit at the next step, which is 36, and so on. Because the range of 576 has been divided by 32, creating 18 pixels steps. When a particle reaches the 'end' value the next one will start from the beginning again.

You can add the optional yoyo property to a stepped object:

```js
x: { steps: 32, start: 0, end: 576, yoyo: true }
```

As with the stepped emitter, particles are emitted in sequence, from 'start' to 'end' in step sized jumps. Normally, when a stepped emitter reaches the end it snaps around to the start value again. However, if you provide the 'yoyo' parameter then when it reaches the end it will reverse direction and start emitting back down to 'start' again. Depending on the effect you require this can often look better.

![Stepped configuration](https://cdn.phaser.io/editor-docs/scene-editor-particle-emitter-prop-stepped-20240612.webp)


### A min/max configuration:

This allows you to pick a random float value between the min and max properties:

```js
x: { min: 100, max: 700 }
```

The x value will be a random float between min and max.

You can force it to select an integer by setting the 'int' flag:

```js
x: { min: 100, max: 700, int: true }
```

![Min/max configuration](https://cdn.phaser.io/editor-docs/scene-editor-particle-emitter-prop-min-max-20240612.webp)


## Custom onEmit and onUpdate callbacks:

If the above won't give you the effect you're after, you can provide your own callbacks that will be used when the particle is both emitted and updated:

```js
x: {
  onEmit: (particle, key, t, value) => {
    return value;
  },
  onUpdate: (particle, key, t, value) => {
    return value;
  }
}
```

You can provide either one or both functions. The `onEmit` is called at the start of the particles life and defines the value of the property on birth.

The `onUpdate` function is called every time the Particle Emitter updates until the particle dies. Both must return a value.

The arguments are:

- **particle** - A reference to the Particle instance.
- **key** - The string based key of the property, i.e. 'x' or 'lifespan'.
- **t** - The current normalized lifetime of the particle, between 0 (birth) and 1 (death).
- **value** - The current property value. At a minimum you should return this.

By using the above configuration options you have an unlimited amount of control over how your particles behave.

![Custom callbacks](https://cdn.phaser.io/editor-docs/scene-editor-particle-emitter-prop-custom-callbacks-20240612.webp)

## Transform properties

We divided the Particle Emitter properties into sections. The first section is the transform properties. These properties are related to the position, scale, and rotation of the emitter.

- [x](https://docs.phaser.io/api-documentation/class/gameobjects-particles-particleemitter#particlex)
- [y](https://docs.phaser.io/api-documentation/class/gameobjects-particles-particleemitter#particley)
- [moveToX](https://docs.phaser.io/api-documentation/class/gameobjects-particles-particleemitter#movetox)
- [moveToY](https://docs.phaser.io/api-documentation/class/gameobjects-particles-particleemitter#movetoy)
- [scale](https://docs.phaser.io/api-documentation/class/gameobjects-particles-particleemitter#scale)
- [particleScaleX](https://docs.phaser.io/api-documentation/class/gameobjects-particles-particleemitter#particlescalex)
- [particleScaleY](https://docs.phaser.io/api-documentation/class/gameobjects-particles-particleemitter#particlescaley)
- [particleAngle](https://docs.phaser.io/api-documentation/class/gameobjects-particles-particleemitter#particleangle)
- [particleRotate](https://docs.phaser.io/api-documentation/class/gameobjects-particles-particleemitter#particlerotate)

![transform properties](https://cdn.phaser.io/editor-docs/scene-editor-particle-emitter-props-transform-20240612.webp)

## Physics properties

This section contains the Particle Emitter properties dedicated to physics.

- [accelerationX](https://docs.phaser.io/api-documentation/class/gameobjects-particles-particleemitter#accelerationx)
- [accelerationY](https://docs.phaser.io/api-documentation/class/gameobjects-particles-particleemitter#accelerationy)
- [maxVelocityX](https://docs.phaser.io/api-documentation/class/gameobjects-particles-particleemitter#maxvelocityx)
- [maxVelocityY](https://docs.phaser.io/api-documentation/class/gameobjects-particles-particleemitter#maxvelocityy)
- [speed](https://docs.phaser.io/api-documentation/class/gameobjects-particles-particleemitter#speed)
- [speedX](https://docs.phaser.io/api-documentation/class/gameobjects-particles-particleemitter#speedx)
- [speedY](https://docs.phaser.io/api-documentation/class/gameobjects-particles-particleemitter#speedy)
- [gravityX](https://docs.phaser.io/api-documentation/class/gameobjects-particles-particleemitter#gravityx)
- [gravityY](https://docs.phaser.io/api-documentation/class/gameobjects-particles-particleemitter#gravityy)
- [radial](https://docs.phaser.io/api-documentation/class/gameobjects-particles-particleemitter#radial)

![particle emitter physics properties](https://cdn.phaser.io/editor-docs/scene-editor-particle-emitter-physics-properties-20240612.webp)

## Timing properties

This section contains the Particle Emitter properties dedicated to timing.

- [delay](https://docs.phaser.io/api-documentation/class/gameobjects-particles-particleemitter#delay)
- [hold](https://docs.phaser.io/api-documentation/class/gameobjects-particles-particleemitter#hold)
- [lifespan](https://docs.phaser.io/api-documentation/class/gameobjects-particles-particleemitter#lifespan)
- [quantity](https://docs.phaser.io/api-documentation/class/gameobjects-particles-particleemitter#quantity)
- [duration](https://docs.phaser.io/api-documentation/class/gameobjects-particles-particleemitter#duration)
- [frequency](https://docs.phaser.io/api-documentation/class/gameobjects-particles-particleemitter#frequency)
- [maxAliveParticles](https://docs.phaser.io/api-documentation/class/gameobjects-particles-particleemitter#maxaliveparticles)
- [maxParticles](https://docs.phaser.io/api-documentation/class/gameobjects-particles-particleemitter#maxparticles)
- [stopAfter](https://docs.phaser.io/api-documentation/class/gameobjects-particles-particleemitter#stopafter)
- [advance](https://docs.phaser.io/api-documentation/class/gameobjects-particles-particleemitter#advance)
- [timeScale](https://docs.phaser.io/api-documentation/class/gameobjects-particles-particleemitter#timescale)

![timing properties](https://cdn.phaser.io/editor-docs/scene-editor-particle-emitter-props-timing-20240612.webp)

## Color properties

This section contains the Particle Emitter properties dedicated to color.

- [particleAlpha](https://docs.phaser.io/api-documentation/class/gameobjects-particles-particleemitter#particlealpha)
- [particleTint](https://docs.phaser.io/api-documentation/class/gameobjects-particles-particleemitter#particletint)
- [particleColor](https://docs.phaser.io/api-documentation/class/gameobjects-particles-particleemitter#particlecolor)
- [colorEase](https://docs.phaser.io/api-documentation/class/gameobjects-particles-particleemitter#colorease)
- [blendMode](https://docs.phaser.io/api-documentation/class/gameobjects-particles-particleemitter#blendmode)
- [tintFill](https://docs.phaser.io/api-documentation/class/gameobjects-particles-particleemitter#tintfill)

![color properties](https://cdn.phaser.io/editor-docs/scene-editor-particle-emitter-props-color-20240612.webp)

## Sorting properties

This section contains the Particle Emitter properties dedicated to sorting.

- [particleBringToTop](https://docs.phaser.io/api-documentation/class/gameobjects-particles-particleemitter#particlebringtotop)
- [sortOrderAsc](https://docs.phaser.io/api-documentation/class/gameobjects-particles-particleemitter#sortorderasc)
- [sortProperty](https://docs.phaser.io/api-documentation/class/gameobjects-particles-particleemitter#sortproperty)

![sorting properties](https://cdn.phaser.io/editor-docs/phaser-editor-particle-emitter-props-sorting-20240612.webp)

## Following properties

This section contains the Particle Emitter properties dedicated to following an object.

- [follow](https://docs.phaser.io/api-documentation/class/gameobjects-particles-particleemitter#follow) - In the editor, you can write the variable name of the object to follow or click the "browse" button to select the object from the scene.
- [trackVisible](https://docs.phaser.io/api-documentation/class/gameobjects-particles-particleemitter#trackvisible)

![particle emitter follow properties](https://cdn.phaser.io/editor-docs/scene-editor-particle-emitter-props-follow-20240612.webp)

## Animations properties

In this section you can select the sprite animations to be used in the emitter.

The **Animations** field contains the array of the animation names. You can change them by clicking in the "folder" icon. 

![Emitter animations properties](../../images/scene-editor-particle-emitter-animations-20250603.webp)

It opens a dialog with all the available sprite animations. You can select more than one animation in that dialog.

![Select animations dialog](../../images/scene-editor-particle-emitter-animations-dialog-20250603.webp)

## Texture frame properties

This section contains the Particle Emitter properties dedicated to the texture frames.

![particle frames](https://cdn.phaser.io/editor-docs/scene-editor-particle-emitter-props-frames-20240612.webp)

To add a new frame, click the "Add" button. It shows a dialog with the frames of the same texture and all the other remaining textures. Select there the frames you want to add.

![particle emitter select frames dialog](https://cdn.phaser.io/editor-docs/scene-editor-particle-emitter-select-frames-dialog-20240612.webp)

If you select to add frames from other textures, then the editor will replace (instead of append) the current frames with the new frames selected. It follows that rule because a particle emitter only allows frames from the same texture.

To remove a frame, select it and click the "Delete" button.