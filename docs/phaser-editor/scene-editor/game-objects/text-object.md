---
slug: text-object
title: Text
---

The [Text type](https://docs.phaser.io/api-documentation/class/gameobjects-text) allows to create Text objects.

 based on HTML fonts. It allows customizing the color of the text, the shadows, the stroke, etc…

You can create a [Text object](text-object) by dropping a Text built-in block on the scene.

![Create a default Text object.](https://cdn.phaser.io/editor-docs/scene-editor-text-object-create-block-09252020.webp)

Also, using the [type replacing dialog](replace-object-type), you can convert a [Bitmap Text](bitmap-text-object) (or any other object) into a [Text object](text-object).

![Text object.](https://cdn.phaser.io/editor-docs/scene-editor-text-object-05242020.webp)

The Text objects are created in code using the [text factory](https://docs.phaser.io/api-documentation/class/gameobjects-gameobjectfactory#text). This is how the [scene compiler](../scene-compiler) generates that code:

```javascript
const text_1 = this.add.text(90, 385, "", {});
text_1.text = "New Text object";
text_1.setStyle({
    "backgroundColor":"blue",
    "color":"orange",
    "fontFamily":"serif",
    "fontSize":"60px",
    "fontStyle":"bold italic",
    "stroke":"orange",
    "shadow.offsetX":5,
    "shadow.offsetY":5,
    "shadow.color":"brown",
    "shadow.blur":7,
    "shadow.stroke":true,
    "shadow.fill":true});
text_1.setPadding({"left":10,"top":10,"right":10,"bottom":10});
```

## Font family property

One especial property in the Text game object is the **Font Family**. You can write any font name supported by the browser, like "Arial", "Verdana", "Monospace", etc.. or you can use custom fonts loaded in your game.

Phaser provides a simple Loader API to load custom fonts in your games:

 ```javascript
 this.load.font({
    key: "Nokia",
    url: "assets/nokia.ttf",
    format: "truetype",
    descriptors: { style: "normal", weight: "400" }
 });
 ```

Then, you can use the font in your Text objects:

```javascript
this.add.text(x, y, "Hello World", { 
    fontFamily: "Nokia", 
    fontSize: 48 
});
```

With Phaser Editor the workflow is same, you can load the font in the [Asset Pack editor](../../asset-pack-editor/intro) and use it in the **Font Family** property.

You can follow this steps:

- Upload the font file to the project.
- Select the font file in the Files view:

    ![select font file](../../images/scene-editor-select-font-in-files-view.webp)
- Click the **Import as font** button in the Inspector view:

    ![import font file](../../images/scene-editor-import-font-file.webp)
- In the **Font Family** property, you can write the font name or select it from the three-dots menu:

    ![select font family](../../images/scene-editor-font-family-parameter.webp)

Scott Westover did an amazing video tutorial about how to add custom fonts to a Phaser game. Check it out!

[Phaser Editor v4 Tutorial: Native Custom Fonts!](https://www.youtube.com/watch?v=QnDJkBdAz0k)

[![Phaser Editor v4 Tutorial: Native Custom Fonts!](../../images/scott-tutorial-native-fonts.webp)](https://www.youtube.com/watch?v=QnDJkBdAz0k)

## Text type properties

The [Text type](https://docs.phaser.io/api-documentation/class/gameobjects-text) contains many of the [common object properties](common-object-properties):

* [Variable properties](./common-object-properties#variable-properties)
* [Lists properties](./common-object-properties#lists-properties)
* [Transform properties](./common-object-properties#transform-properties)
* [Origin properties](./common-object-properties#origin-properties)
* [Flip properties](./common-object-properties#flip-properties)
* [Visible property](./common-object-properties#visible-property)
* [Alpha properties](./common-object-properties#alpha-properties)

It also contains the [Text property](./common-object-properties#text-property), that is dedicated to all the objects with texts, and its specific properties:

* The [TextStyle](https://docs.phaser.io/api-documentation/class/types-gameobjects-text#-textstyle) properties.
* The [TextShadow](https://docs.phaser.io/api-documentation/class/types-gameobjects-text#-textshadow) properties.
* The [TextPadding](https://docs.phaser.io/api-documentation/class/types-gameobjects-text#-textpadding) properties.
* The [TextWordWrap](https://docs.phaser.io/api-documentation/class/types-gameobjects-text#-textwordwrap) properties.

In the Inspector view, hover the mouse in the label of each property to get a tooltip with the [Phaser API](https://newdocs.phaser.io/docs/latest/).