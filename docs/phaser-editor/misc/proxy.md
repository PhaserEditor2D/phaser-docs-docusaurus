---
slug: proxy
title: Proxy Configuration
---

Phaser Editor uses different technologies: Go, Electron, NodeJS. Setting a proxy for all of them could be challenging, and some of you are working in corporate networks. In v4.2.0, we introduced a new UI to set a unified proxy configuration.

When you first open the editor, it shows a page to log in with your Phaser account. In the bottom/left corner there is a link to open the proxy settings:

![change proxy](https://cdn.phaser.io/editor-docs/change-proxy-link-projects.webp)

If you are already logged in, you can find the link in the settings of the projects page:

![change proxy link](https://cdn.phaser.io/editor-docs/change-proxy-link.webp)

It opens the Proxy configuration page. There you can set the different parameters and save. To make the proxy settings effective, you should restart the editor.

![proxy configuration page](https://cdn.phaser.io/editor-docs/proxy-settings.webp)

The proxy parameters are stored in the `<user-home>/.phasereditor2d/settings.json` file. It is a JSON file with the following proxy field:

```json
{
    "proxy": "http://myuser:mypassword@proxy.mycompany.com:8080",
}
```

It is a single string with the URL of the proxy server. The URL can contain the user and password, and the port. You are free to change it, but you should restart the editor to make the changes effective.

Also, there is the `proxyDisabled` field. It is a boolean value that indicates if the proxy is enabled or not. If you want to disable the proxy, you can set this field to `false`.

```json
{
    "proxyDisabled": true
}
```
