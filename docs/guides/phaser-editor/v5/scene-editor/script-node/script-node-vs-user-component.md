---
slug: script-node-vs-user-component
title: Script Nodes vs User Components
---

Now you have two mechanisms for assigning behaviors to an object: the ScriptNode and the user components, and you have to decide when to use one or another. In this chapter, we try to provide you with a small guide.

**When to use a User Component?**

Many users find a user component very handy because you can edit its properties right away, in the same place as the object’s properties. You don’t need to browse an object’s tree of nodes. Also, components are familiar philosophy in the Phaser API. However, user components have a main restriction: it has a one-to-one relationship with the object. It means, you can assign only a single type of component to the object, so it should implement the whole behavior as a unit.

These are some examples of modeling behaviors with user components:

* An **AutoplayAnimation** user component that you can add to sprites. It has an **animationKey** property that is played automatically. Because you can play only one animation at a time in a sprite, it fits well in the one-to-one relationship constraint of user components.
* A **BorderAnchor** component, with an **anchorTo** property with values like `left`, `top`, `right`, `bottom`. This component will auto-re-position the object in a responsive scene. Because an object has only one position, it fits in the one-to-one restriction of user components.
* A **DurationConfig** component, with info about the duration of an animation. You can add it to a script node or a prefab, that performs an animation. It means you can use a user component for adding extra configuration to a certain action or object.

**When to use a Script Node?**

The script nodes are logical game objects and you can make prefabs of them. The prefabs system in the editor is powerful and you can express complex behaviors in a hierarchical relationship. Also, you can add script nodes not only to objects else to scenes too. However, it is very easy you start abusing the use of script nodes and making large hierarchies of logical nodes. We think for now it isn’t a good idea, but in the end, it is up to you.

Script nodes are very flexible, and you can model different behaviors, however, it has worked better for us to use the concept of event and action. That is, you create a group of script nodes that cover the events of your game, and another group of script nodes that cover the actions. This way, you can combine events and actions to create complex behaviors.

If you take a look at the [@phaserjs/editor-scripts-quick](https://www.npmjs.com/package/@phaserjs/editor-scripts-quick) library, it contains a series of script nodes that cover common events and actions in a game. You can use this library as a basis for your own script nodes.

Here are some of the behaviors you can express with this library:

* When you click on a button, the X scene starts.
* When you click on a button, it plays a sound.
* When two objects collide, play an animation, play a sound, and destroy the second object.
* When the scene starts, do a fade-in animation of an object.
* When the scene starts, moves an object from the bottom edge of the screen to its original place.

As we said previously, it is up to you when to use the script nodes and how much you split the behaviors in a tree of small logical units. Our advice is to keep it simple and learn first from your game before making a complex framework of script nodes.

If you are an advanced coder, you may find script nodes too cumbersome, and you may be right. However, perhaps you can design your own script nodes so that others in the team can create game prototypes more quickly.
