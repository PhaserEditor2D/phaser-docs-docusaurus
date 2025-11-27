---
visibility: public
slug: namespace/physics-arcade-events
title: Phaser.Physics.Arcade.Events

seoTitle: Phaser.Physics.Arcade.Events
seoDescription: Phaser v3.86.0 Documentation for 
ogImage: 
---




Scope: 
static
> Source: [src/physics/arcade/events/index.js#L7](https://github.com/phaserjs/phaser/blob/v3.86.0/src/physics/arcade/events/index.js#L7)  


# Static functions

## COLLIDE

### COLLIDE


**Description:**

The Arcade Physics World Collide Event.



This event is dispatched by an Arcade Physics World instance if two bodies collide _and_ at least

one of them has their [onCollide](Phaser.Physics.Arcade.Body#onCollide) property set to `true`.



It provides an alternative means to handling collide events rather than using the callback approach.



Listen to it from a Scene using: `this.physics.world.on('collide', listener)`.



Please note that 'collide' and 'overlap' are two different things in Arcade Physics.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| gameObject1 | [Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md) | No | The first Game Object involved in the collision. This is the parent of `body1`. |
| gameObject2 | [Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md) | No | The second Game Object involved in the collision. This is the parent of `body2`. |
| body1 | [Phaser.Physics.Arcade.Body](../class/Phaser.Physics.Arcade.Body.md) \| [Phaser.Physics.Arcade.StaticBody](../class/Phaser.Physics.Arcade.StaticBody.md) | No | The first Physics Body involved in the collision. |
| body2 | [Phaser.Physics.Arcade.Body](../class/Phaser.Physics.Arcade.Body.md) \| [Phaser.Physics.Arcade.StaticBody](../class/Phaser.Physics.Arcade.StaticBody.md) | No | The second Physics Body involved in the collision. |


> Source: [src/physics/arcade/events/COLLIDE_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.86.0/src/physics/arcade/events/COLLIDE_EVENT.js#L7)  
Since: 3.0.0


---

## OVERLAP

### OVERLAP


**Description:**

The Arcade Physics World Overlap Event.



This event is dispatched by an Arcade Physics World instance if two bodies overlap _and_ at least

one of them has their [onOverlap](Phaser.Physics.Arcade.Body#onOverlap) property set to `true`.



It provides an alternative means to handling overlap events rather than using the callback approach.



Listen to it from a Scene using: `this.physics.world.on('overlap', listener)`.



Please note that 'collide' and 'overlap' are two different things in Arcade Physics.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| gameObject1 | [Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md) | No | The first Game Object involved in the overlap. This is the parent of `body1`. |
| gameObject2 | [Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md) | No | The second Game Object involved in the overlap. This is the parent of `body2`. |
| body1 | [Phaser.Physics.Arcade.Body](../class/Phaser.Physics.Arcade.Body.md) \| [Phaser.Physics.Arcade.StaticBody](../class/Phaser.Physics.Arcade.StaticBody.md) | No | The first Physics Body involved in the overlap. |
| body2 | [Phaser.Physics.Arcade.Body](../class/Phaser.Physics.Arcade.Body.md) \| [Phaser.Physics.Arcade.StaticBody](../class/Phaser.Physics.Arcade.StaticBody.md) | No | The second Physics Body involved in the overlap. |


> Source: [src/physics/arcade/events/OVERLAP_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.86.0/src/physics/arcade/events/OVERLAP_EVENT.js#L7)  
Since: 3.0.0


---

## PAUSE

### PAUSE


**Description:**

The Arcade Physics World Pause Event.



This event is dispatched by an Arcade Physics World instance when it is paused.



Listen to it from a Scene using: `this.physics.world.on('pause', listener)`.


> Source: [src/physics/arcade/events/PAUSE_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.86.0/src/physics/arcade/events/PAUSE_EVENT.js#L7)  
Since: 3.0.0


---

## RESUME

### RESUME


**Description:**

The Arcade Physics World Resume Event.



This event is dispatched by an Arcade Physics World instance when it resumes from a paused state.



Listen to it from a Scene using: `this.physics.world.on('resume', listener)`.


> Source: [src/physics/arcade/events/RESUME_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.86.0/src/physics/arcade/events/RESUME_EVENT.js#L7)  
Since: 3.0.0


---

## TILE_COLLIDE

### TILE_COLLIDE


**Description:**

The Arcade Physics Tile Collide Event.



This event is dispatched by an Arcade Physics World instance if a body collides with a Tile _and_

has its [onCollide](Phaser.Physics.Arcade.Body#onCollide) property set to `true`.



It provides an alternative means to handling collide events rather than using the callback approach.



Listen to it from a Scene using: `this.physics.world.on('tilecollide', listener)`.



Please note that 'collide' and 'overlap' are two different things in Arcade Physics.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| gameObject | [Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md) | No | The Game Object involved in the collision. This is the parent of `body`. |
| tile | [Phaser.Tilemaps.Tile](../class/Phaser.Tilemaps.Tile.md) | No | The tile the body collided with. |
| body | [Phaser.Physics.Arcade.Body](../class/Phaser.Physics.Arcade.Body.md) | No | The Arcade Physics Body of the Game Object involved in the collision. |


> Source: [src/physics/arcade/events/TILE_COLLIDE_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.86.0/src/physics/arcade/events/TILE_COLLIDE_EVENT.js#L7)  
Since: 3.16.1


---

## TILE_OVERLAP

### TILE_OVERLAP


**Description:**

The Arcade Physics Tile Overlap Event.



This event is dispatched by an Arcade Physics World instance if a body overlaps with a Tile _and_

has its [onOverlap](Phaser.Physics.Arcade.Body#onOverlap) property set to `true`.



It provides an alternative means to handling overlap events rather than using the callback approach.



Listen to it from a Scene using: `this.physics.world.on('tileoverlap', listener)`.



Please note that 'collide' and 'overlap' are two different things in Arcade Physics.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| gameObject | [Phaser.GameObjects.GameObject](../class/Phaser.GameObjects.GameObject.md) | No | The Game Object involved in the overlap. This is the parent of `body`. |
| tile | [Phaser.Tilemaps.Tile](../class/Phaser.Tilemaps.Tile.md) | No | The tile the body overlapped. |
| body | [Phaser.Physics.Arcade.Body](../class/Phaser.Physics.Arcade.Body.md) | No | The Arcade Physics Body of the Game Object involved in the overlap. |


> Source: [src/physics/arcade/events/TILE_OVERLAP_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.86.0/src/physics/arcade/events/TILE_OVERLAP_EVENT.js#L7)  
Since: 3.16.1


---

## WORLD_BOUNDS

### WORLD_BOUNDS


**Description:**

The Arcade Physics World Bounds Event.



This event is dispatched by an Arcade Physics World instance if a body makes contact with the world bounds _and_

it has its [onWorldBounds](Phaser.Physics.Arcade.Body#onWorldBounds) property set to `true`.



It provides an alternative means to handling collide events rather than using the callback approach.



Listen to it from a Scene using: `this.physics.world.on('worldbounds', listener)`.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| body | [Phaser.Physics.Arcade.Body](../class/Phaser.Physics.Arcade.Body.md) | No | The Arcade Physics Body that hit the world bounds. |
| up | boolean | No | Is the Body blocked up? I.e. collided with the top of the world bounds. |
| down | boolean | No | Is the Body blocked down? I.e. collided with the bottom of the world bounds. |
| left | boolean | No | Is the Body blocked left? I.e. collided with the left of the world bounds. |
| right | boolean | No | Is the Body blocked right? I.e. collided with the right of the world bounds. |


> Source: [src/physics/arcade/events/WORLD_BOUNDS_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.86.0/src/physics/arcade/events/WORLD_BOUNDS_EVENT.js#L7)  
Since: 3.0.0


---

## WORLD_STEP

### WORLD_STEP


**Description:**

The Arcade Physics World Step Event.



This event is dispatched by an Arcade Physics World instance whenever a physics step is run.

It is emitted _after_ the bodies and colliders have been updated.



In high framerate settings this can be multiple times per game frame.



Listen to it from a Scene using: `this.physics.world.on('worldstep', listener)`.

**Parameters:**
| name | type | optional | description |
| ---- | ---- | -------- | ----------- |
| delta | number | No | The delta time amount of this step, in seconds. |


> Source: [src/physics/arcade/events/WORLD_STEP_EVENT.js#L7](https://github.com/phaserjs/phaser/blob/v3.86.0/src/physics/arcade/events/WORLD_STEP_EVENT.js#L7)  
Since: 3.18.0


---

