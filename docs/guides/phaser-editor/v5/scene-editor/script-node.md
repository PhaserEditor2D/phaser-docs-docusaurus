---
slug: script-node
title: Script Nodes
---
A ScriptNode is a new type of object. It isn’t a display object, else a logical object you can use with different purposes, especially, for expressing simple and complex behaviors.

Until now, user components were the only way you had to add extra functionality to a game object. The ScriptNode is a more powerful and general tool, that you can use with the same purpose.

Basically, a ScriptNode is a logical object you can add to an scene, a game object, or another ScriptNode. But what is even more exciting, is that you can make reusable and extensible script nodes in the same way you make reusable and extensible game objects: using prefabs.

This means, you can make a prefab of a ScriptNode, add custom properties, create variants of the prefab, create nested prefabs, and append script nodes to prefab instances.

This allows expressing complex behaviors combining logical building blocks (ScriptNode prefabs) in a hierarchical structure.

This concept of script nodes is inspired by the [visual programming languages](https://en.wikipedia.org/wiki/Visual_programming_language) and concepts like the [behavior tree](https://en.wikipedia.org/wiki/Behavior_tree_(artificial_intelligence,_robotics_and_control)). However, we don’t pretend to create a complete, full-featured, visual language. Our advice is using the script nodes for making the blocks of repeated behaviors in your game. You can use it for dealing with the UI interface, menu screens, intro screens. You can use it in your gameplay, but not by combining a lot of general-purpose blocks, else by combining blocks you did specifically for your gameplay.

An argument about the advantage of using a visual scripting language is that creators with no traditional programming experience can make a game. But our concept with the script nodes, is that you, the JavaScript advanced programmer, can implement the script nodes “framework” for your game, and deliver it to the game level designer for connecting the scripts with the game objects and scenes.

Script nodes are optional for your game. If you are those who prefer to code everything, you don't need script nodes at all. However, we find there are many cases where using script nodes could be a time saver. Think on behaviors like: 

- When click this button, start X scene.
- When the scene start, fade-in this object.
- When the scene start, play this sound.

You can create those behaviors by using script nodes and user components, and connect them with the game objects and scenes by only using visual tools. You can create the **OnClick** and **OnSceneStart** script nodes, that are event-like nodes. And create the **FadeIn**, **PlaySound**, **StartScene** script nodes, that are action-like nodes. Then, you can connect them in the scene editor, and you have a complete behavior without writing a single line of code.

## Tutorials

So far we don't have many educational materials regarding script nodes, however, [Scott Westover](https://scottwestover.dev) has done a brilliant job in one of his videos where he explains in detail how you can create your own script nodes:

[Phaser Editor v4 Script Nodes Crash Course - Modular Game Development](https://www.youtube.com/watch?v=MI80DpDbwYg)

[![Scott video in youtube](../images/script-nodes-scott-video-20241108.webp)](https://www.youtube.com/watch?v=MI80DpDbwYg)


