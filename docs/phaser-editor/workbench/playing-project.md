---
slug: playing-project
title: Playing the project
---

To run a game in Phaser Editor, just click the **Play** button at the top-left toolbar of the editor, or press `F12`:

![Play button](https://cdn.phaser.io/editor-docs/run-editor-toolbar-20241004.webp)

This action opens the editor in a web browser and runs the game. However, there are some complexities that we need to address.

Games developed in Phaser are based on web technology. This means that the game needs two parts to run: a web server and a web browser. The web has a wide variety of development tools and technologies on both the server and client side. Your Phaser game, being web-based, can also make use of all those tools, such as popular front-end frameworks React, Angular, and many others.

However, Phaser Editor provides a web server that is sufficient to run the most basic of projects, those based on the **Basic JavaScript** template, or any other static content project.

If your project was created with any of the templates that use web bundlers, such as Webpack, Vite, ESBuild, etc... then the editor will detect that before running the game it must run a local web server provided by these third-party tools.

The usual thing is that these local servers are run through a command like `npm start` or `npm run dev`. For this, the editor opens a window and runs the command for you:

![Start dev server](https://cdn.phaser.io/editor-docs/first-steps-play-game-development-server-dialog-20240709.webp)

If If you want to run the web server manually from another application, such as VSCode or your system's terminal, then you can click the **Skip** button. If you want Phaser Editor to run the web server for you, then click the **Start Dev Server** button.

## Troubleshooting

As I explained, running the game can involve several steps, which the editor can do for you automatically, however, it is possible that they fail or you have overlooked them. For this reason, it is possible that sometimes the game will not run and the browser will show you a "Page not found" message. In that case you should check that the game's web server is running. Since there is such a variety of web technologies and Phaser project templates, we recommend that you read the `README.md` file that is present in the root of each project. In this document you will find the appropriate instructions for running the game's web server.

## Play the game in an internal window

By default, when you click the **Play** button, the editor opens the system browser and runs the game. You also have the option to run the game directly in the editor, in an internal window. To do this, you must click the [**Quick Play Project** command](../workbench/command-palette) or press `F10`.

![play game dialog](../images/play-project-internal-window-20251125.webp)

The dialog shows the following options:

- **Refresh**: reloads the game in the internal window.
- **Open in New Tab**: opens the game in a new tab -or window- of the system browser.
- **Cancel**: closes the dialog. You can press `ESC` key to close it too.

If the project is changed while the game is running, the dialog will automatically reload the game to reflect the changes.