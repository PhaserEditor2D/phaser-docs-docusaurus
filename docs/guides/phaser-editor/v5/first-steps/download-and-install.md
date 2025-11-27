---
slug: download-and-install
title: Download and install
---

Phaser Editor is built with web technologies. You can run it on your desktop, your private network, or in the cloud.

We provide two different types of distributions: [Phaser Editor Core](../intro/distributions#phaser-editor-core) and [Phaser Editor Desktop](../intro/distributions#phaser-editor-desktop). Each distribution is available for Windows, macOS, and Linux.

[Download Phaser Editor](https://phaser.io/account/downloads)

In this chapter we cover how to install both distributions.

## Install Phaser Editor Desktop

The [Phaser Editor Desktop](../intro/distributions#phaser-editor-desktop) distribution wraps [Phaser Editor Core](../intro/distributions#phaser-editor-core) in an [ElectronJS](https://www.electronjs.org) application. It works like a common desktop application and allows the opening of multiple projects and windows. It also provides project templates for creating new projects.

Each platform has a different way of installing [Phaser Editor Desktop](../intro/distributions#phaser-editor-desktop).

### Windows installation

Click the **Windows** option in the **Desktop** section of the [downloads page](https://phaser.io/account/downloads). It should start the download of the MSI (Microsoft Installer) file. Execute it and follow the steps.

You can configure the installation by pressing the **Configure** option in the **Install** menu:

![Windows installer](https://cdn.phaser.io/editor-docs/first-steps-install-windows-20240709.webp)


### macOS installation

Click the **macOS (Apple silicone)** option to download the image file. Open it (double click), and drag the `Phaser Editor` icon to the `Applications` folder.

![macOS installer](https://cdn.phaser.io/editor-docs/first-steps-install-desktop-macos-20240709.webp)

Note there are two installers for macOS. One for ARM-based Macs and another for Intel-based Macs. The ARM-based Macs are the new Macs with the M1 chip. If you are not sure which one to download, you can download the ARM-based version.

### Linux installation

We don't have a proper installer for the Linux, so we distribute the binaries in a ZIP file.

Click the **Linux** option to download the file and unzip it. Open the terminal and run the `PhaserEditor` file:

```bash
$ ./PhaserEditor
```

However, we recommend creating a shortcut in the desktop and a menu entry in the Desktop Environment. To do this, execute the script `install.sh`:

```bash
$ ./install.sh
```

And `uninstall.sh` to remove the shortcuts:

```bash
$ ./uninstall.sh
```

In both cases, you don’t have to provide `root` privileges.

The [Phaser Editor Core](../intro/distributions#phaser-editor-core) binaries are in the `resources/app/server` folder. You can run it alone.

## Install Phaser Editor Core

Phaser Editor Core is a server application that serves the Phaser Editor IDE in a web browser. It is a lightweight server that provides the necessary services to run Phaser Editor in the cloud or the desktop.

Phaser Editor Core is distributed as a ZIP file. To download it, click the platform option of the **Core** section in the [Downloads page](https://phaser.io/account/downloads).

Un-compress the downloaded file, open the terminal and run:

```bash
$ cd /path/to/downloaded/PhaserEditor
$ ./PhaserEditor -project path/to/project
```

The server starts and opens the default browser in the address: `http://127.0.0.1:1959/editor`.

The `-project` flag is mandatory, its value must be the path to the game project.

Check the [Create your first project](create-first-project) section for creating a new game.

By default, the server runs in application-mode. It means it does its best on providing better integration with your OS:

* It opens the default browser at the right URL (you can change it with the `-browser-command` option).
* It allows launching third-party OS applications like Visual Studio Code or the file manager (Windows Explorer, macOS Finder, etc…).
* It denies remote connections.

However, you can run the server in a remote host using the `-public` option:

```bash
$ ./PhaserEditor -public
```

It allows remote connections but disables all the OS integration described before.

[Learn more about all the command line options](../misc/server-options)
