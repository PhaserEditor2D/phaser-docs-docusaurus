---
slug: create-first-project
title: Create your first project
---

[Phaser Editor Desktop](../intro/distributions#phaser-editor-desktop) provides a way to create a new project from a template.

Most of the templates are downloaded from the internet and are updated frequently. The first templates in the list are built-in and are available offline.

Each project template has a README file with the instructions for installing dependencies and running the project.


## Creating a project

Click on the **New Project** button:

![Desktop new project.](https://cdn.phaser.io/editor-docs/first-steps-desktop-new-project-1-20240926.webp)

Select one of the project templates. Those provided in the Built-in section are available offline. The other project templates are downloaded from the internet for the first time:

![Select the project template](https://cdn.phaser.io/editor-docs/first-steps-desktop-new-project-2-20240926.webp)

When you select a project template, the IDE opens the OS file explorer. Select an empty directory (or create a new one) where the project content will be copied. If the template is downloaded from the internet, it may take some time to fetch the files:

![Select the project folder.](https://cdn.phaser.io/editor-docs/first-steps-select-project-template-20220415.webp)

If the template is based on web technologies like bundlers or front-end frameworks, the editor will ask you to install the dependencies automatically. You select the **Discard** option if you want to install them later. Installing the dependencies may take a few minutes. In a Windows machine, it should show the installation process in a "black terminal" window.

![Install project dependencies](https://cdn.phaser.io/editor-docs/first-steps-install-project-dependencies-20240709.webp)

Finally, the project is open in the IDE:

![Workbench shows the new project](https://cdn.phaser.io/editor-docs/first-steps-new-project-open-ide-20240926.webp)

It shows the Welcome page. You can click on the **Open Scene** button to open any of the scenes of the project. Also, you can browse all project files in the **Files** view.

When you click the **Open Scene** button, the editor will open the [Go To dialog](../scene-editor/misc#go-to-dialog), where you can select the scene to open:

![Open scene](https://cdn.phaser.io/editor-docs/first-steps-new-project-open-scene-20240926.webp)


## Running the project

To run your project, click on the **Play** button at the beginning of the toolbar:

![Play the project.](https://cdn.phaser.io/editor-docs/first-steps-new-play-project-20240926.webp)

Phaser Editor provides a built-in HTTP server to run plain JavaScript projects. However, most of the projects are based on modern web technologies like Webpack, Parcel, or Vite. In this case, you should run a development server manually. If you don't run the development server, the editor may detect the development server is not running and show a dialog with the option to run it:

![Start development server](https://cdn.phaser.io/editor-docs/first-steps-play-game-development-server-dialog-20240709.webp)

If you click the **Start Dev Server** button, the editor will run the development server and open the default browser with the project running. The browser may open before the server is ready. In this case, you can refresh the browser manually.

The process of starting the development server may require the installation of the project dependencies, so it may take a few minutes.


## Node and NPM

Most of the modern front-end web technology is based on Node.js and NPM. The editor contains an internal distribution of Node and NPM to run the automatic tasks. If your project depends on a specific version of Node or NPM, you can run all commands manually in the OS terminal app.
