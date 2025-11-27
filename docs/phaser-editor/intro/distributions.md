---
visibility: public
slug: distributions
title: Distributions
---

Phaser Editor is distributed as two different products:

Both products are available for Linux, Windows, and macOS.

Why two different products?

When you develop an HTML5 game with Phaser, there are two tech stacks you need to get familiar with: game development tooling and web development tooling.

The game development tooling is the most important one (it includes map editors, texture packers, animation tools), however, when you are making professional games, it is recommended to add a modern web development tech stack to your workflow. For example a static-typed coding language like TypeScript. A package management tool like [NPM](https://www.npmjs.com). A web bundler like [WebpackJS](https://webpack.js.org).

Probably, developers coming from the mainstream game development world, are not familiar with the web development stack, and look to Phaser Editor as an alternative to mainstream editors like Unity Editor, Godot, Construct, etc…

For those users, there is the [Phaser Editor Desktop](../intro/distributions#phaser-editor-desktop) product. It wraps [Phaser Editor Core](../intro/distributions#phaser-editor-core) (the editor’s server and client) in an [ElectronJS](https://www.electronjs.org) app and provides an experience similar to traditional IDEs: project templates, and a deeper integration with the local Operating System.

On the other side, there is [Phaser Editor Core](../intro/distributions#phaser-editor-core). It contains the server and client of the editor. Its architecture allows better integration with the web development toolings.

Modern web development is moving to the cloud, using platforms like [Gitpod](https://gitpod.io) and [GitHub Codespaces](https://github.com/codespaces). [Phaser Editor Core](../intro/distributions#phaser-editor-core) allows using the editor in these cloud-based development environments.

## Phaser Editor Core

The [Phaser Editor Core](../intro/distributions#phaser-editor-core) distribution is a tiny, focused distribution of Phaser Editor.

It is tiny because it includes only the editor’s server and client, and provides only the Phaser game development tools (especially, the Scene Editor plugin), delegating to third-party tools questions like code editing.

Being tiny doesn’t mean it is missing something, it means it is focused on the hard problem: designing Phaser scenes. It allows integrating the editor in different scenarios, like developing in a local desktop or a remote cloud-based environment (let’s say [Gitpod](https://gitpod.io) or [GitHub Codespaces](https://github.com/codespaces)).

You can add [Phaser Editor Core](../intro/distributions#phaser-editor-core) to a Docker file, add it as a dependency to a Node package, or just download it and execute it in your OS.

## Phaser Editor Desktop

The [Phaser Editor Desktop](../intro/distributions#phaser-editor-desktop) distribution wraps the [Phaser Editor Core](../intro/distributions#phaser-editor-core) distribution in an [ElectronJS](https://www.electronjs.org) app, adding more features and integration with the Operating System.

This is the distribution we recommend to you if you are not familiar with the web development tooling (TypeScript, [NPM](https://www.npmjs.com), [WebpackJS](https://webpack.js.org)).

This distribution provides:

* An installer for Phaser Editor.
* A start page for opening & creating projects.
* Multiple project templates configured for all modern bundlers and front-end frameworks. Including some example games.
* An internal Node distribution to install and run the local development server.

Start page, project list:

![Recent projects.](https://cdn.phaser.io/editor-docs/intro-desktop-start-page-20240711.webp)

Start page, project templates:

![Select project template](https://cdn.phaser.io/editor-docs/first-steps-desktop-new-project-2-20240711.webp)
