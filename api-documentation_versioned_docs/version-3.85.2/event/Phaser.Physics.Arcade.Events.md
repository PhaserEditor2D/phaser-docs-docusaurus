---
visibility: public
slug: physics-arcade-events
title: Physics.Arcade.Events
description: Phaser.Physics.Arcade.Events
seoTitle: Physics.Arcade.Events
seoDescription: Phaser v3.85.2 Documentation for Phaser.Physics.Arcade.Events
ogImage: 
---

## COLLIDE


**Description:** The Arcade Physics World Collide Event.

This event is dispatched by an Arcade Physics World instance if two bodies collide _and_ at least
one of them has their [onCollide]{@link Phaser.Physics.Arcade.Body#onCollide} property set to `true`.

It provides an alternative means to handling collide events rather than using the callback approach.

Listen to it from a Scene using: `this.physics.world.on('collide', listener)`.

Please note that 'collide' and 'overlap' are two different things in Arcade Physics.

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| gameObject1 | [Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md) | No | The first Game Object involved in the collision. This is the parent of `body1`. |
| gameObject2 | [Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md) | No | The second Game Object involved in the collision. This is the parent of `body2`. |
| body1 | [Phaser.Physics.Arcade.Body](../class/Phaser.Physics.Arcade.Body.md) \| [Phaser.Physics.Arcade.StaticBody](../class/Phaser.Physics.Arcade.StaticBody.md) | No | The first Physics Body involved in the collision. |
| body2 | [Phaser.Physics.Arcade.Body](../class/Phaser.Physics.Arcade.Body.md) \| [Phaser.Physics.Arcade.StaticBody](../class/Phaser.Physics.Arcade.StaticBody.md) | No | The second Physics Body involved in the collision. |

**Member of:** [Phaser.Physics.Arcade.Events](../namespace/Phaser.Physics.Arcade.Events.md)
> Source: [src/physics/arcade/events/COLLIDE_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/arcade/events/COLLIDE_EVENT.js#L7)  
Since: 3.0.0

## OVERLAP


**Description:** The Arcade Physics World Overlap Event.

This event is dispatched by an Arcade Physics World instance if two bodies overlap _and_ at least
one of them has their [onOverlap]{@link Phaser.Physics.Arcade.Body#onOverlap} property set to `true`.

It provides an alternative means to handling overlap events rather than using the callback approach.

Listen to it from a Scene using: `this.physics.world.on('overlap', listener)`.

Please note that 'collide' and 'overlap' are two different things in Arcade Physics.

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| gameObject1 | [Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md) | No | The first Game Object involved in the overlap. This is the parent of `body1`. |
| gameObject2 | [Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md) | No | The second Game Object involved in the overlap. This is the parent of `body2`. |
| body1 | [Phaser.Physics.Arcade.Body](../class/Phaser.Physics.Arcade.Body.md) \| [Phaser.Physics.Arcade.StaticBody](../class/Phaser.Physics.Arcade.StaticBody.md) | No | The first Physics Body involved in the overlap. |
| body2 | [Phaser.Physics.Arcade.Body](../class/Phaser.Physics.Arcade.Body.md) \| [Phaser.Physics.Arcade.StaticBody](../class/Phaser.Physics.Arcade.StaticBody.md) | No | The second Physics Body involved in the overlap. |

**Member of:** [Phaser.Physics.Arcade.Events](../namespace/Phaser.Physics.Arcade.Events.md)
> Source: [src/physics/arcade/events/OVERLAP_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/arcade/events/OVERLAP_EVENT.js#L7)  
Since: 3.0.0

## PAUSE


**Description:** The Arcade Physics World Pause Event.

This event is dispatched by an Arcade Physics World instance when it is paused.

Listen to it from a Scene using: `this.physics.world.on('pause', listener)`.

**Member of:** [Phaser.Physics.Arcade.Events](../namespace/Phaser.Physics.Arcade.Events.md)
> Source: [src/physics/arcade/events/PAUSE_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/arcade/events/PAUSE_EVENT.js#L7)  
Since: 3.0.0

## RESUME


**Description:** The Arcade Physics World Resume Event.

This event is dispatched by an Arcade Physics World instance when it resumes from a paused state.

Listen to it from a Scene using: `this.physics.world.on('resume', listener)`.

**Member of:** [Phaser.Physics.Arcade.Events](../namespace/Phaser.Physics.Arcade.Events.md)
> Source: [src/physics/arcade/events/RESUME_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/arcade/events/RESUME_EVENT.js#L7)  
Since: 3.0.0

## TILE_COLLIDE


**Description:** The Arcade Physics Tile Collide Event.

This event is dispatched by an Arcade Physics World instance if a body collides with a Tile _and_
has its [onCollide]{@link Phaser.Physics.Arcade.Body#onCollide} property set to `true`.

It provides an alternative means to handling collide events rather than using the callback approach.

Listen to it from a Scene using: `this.physics.world.on('tilecollide', listener)`.

Please note that 'collide' and 'overlap' are two different things in Arcade Physics.

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| gameObject | [Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md) | No | The Game Object involved in the collision. This is the parent of `body`. |
| tile | [Phaser.Tilemaps.Tile](../class/Phaser.Tilemaps.Tile.md) | No | The tile the body collided with. |
| body | [Phaser.Physics.Arcade.Body](../class/Phaser.Physics.Arcade.Body.md) | No | The Arcade Physics Body of the Game Object involved in the collision. |

**Member of:** [Phaser.Physics.Arcade.Events](../namespace/Phaser.Physics.Arcade.Events.md)
> Source: [src/physics/arcade/events/TILE_COLLIDE_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/arcade/events/TILE_COLLIDE_EVENT.js#L7)  
Since: 3.16.1

## TILE_OVERLAP


**Description:** The Arcade Physics Tile Overlap Event.

This event is dispatched by an Arcade Physics World instance if a body overlaps with a Tile _and_
has its [onOverlap]{@link Phaser.Physics.Arcade.Body#onOverlap} property set to `true`.

It provides an alternative means to handling overlap events rather than using the callback approach.

Listen to it from a Scene using: `this.physics.world.on('tileoverlap', listener)`.

Please note that 'collide' and 'overlap' are two different things in Arcade Physics.

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| gameObject | [Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md) | No | The Game Object involved in the overlap. This is the parent of `body`. |
| tile | [Phaser.Tilemaps.Tile](../class/Phaser.Tilemaps.Tile.md) | No | The tile the body overlapped. |
| body | [Phaser.Physics.Arcade.Body](../class/Phaser.Physics.Arcade.Body.md) | No | The Arcade Physics Body of the Game Object involved in the overlap. |

**Member of:** [Phaser.Physics.Arcade.Events](../namespace/Phaser.Physics.Arcade.Events.md)
> Source: [src/physics/arcade/events/TILE_OVERLAP_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/arcade/events/TILE_OVERLAP_EVENT.js#L7)  
Since: 3.16.1

## WORLD_BOUNDS


**Description:** The Arcade Physics World Bounds Event.

This event is dispatched by an Arcade Physics World instance if a body makes contact with the world bounds _and_
it has its [onWorldBounds]{@link Phaser.Physics.Arcade.Body#onWorldBounds} property set to `true`.

It provides an alternative means to handling collide events rather than using the callback approach.

Listen to it from a Scene using: `this.physics.world.on('worldbounds', listener)`.

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| body | [Phaser.Physics.Arcade.Body](../class/Phaser.Physics.Arcade.Body.md) | No | The Arcade Physics Body that hit the world bounds. |
| up | boolean | No | Is the Body blocked up? I.e. collided with the top of the world bounds. |
| down | boolean | No | Is the Body blocked down? I.e. collided with the bottom of the world bounds. |
| left | boolean | No | Is the Body blocked left? I.e. collided with the left of the world bounds. |
| right | boolean | No | Is the Body blocked right? I.e. collided with the right of the world bounds. |

**Member of:** [Phaser.Physics.Arcade.Events](../namespace/Phaser.Physics.Arcade.Events.md)
> Source: [src/physics/arcade/events/WORLD_BOUNDS_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/arcade/events/WORLD_BOUNDS_EVENT.js#L7)  
Since: 3.0.0

## WORLD_STEP


**Description:** The Arcade Physics World Step Event.

This event is dispatched by an Arcade Physics World instance whenever a physics step is run.
It is emitted _after_ the bodies and colliders have been updated.

In high framerate settings this can be multiple times per game frame.

Listen to it from a Scene using: `this.physics.world.on('worldstep', listener)`.

| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| delta | number | No | The delta time amount of this step, in seconds. |

**Member of:** [Phaser.Physics.Arcade.Events](../namespace/Phaser.Physics.Arcade.Events.md)
> Source: [src/physics/arcade/events/WORLD_STEP_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.85.2/src/physics/arcade/events/WORLD_STEP_EVENT.js#L7)  
Since: 3.18.0
