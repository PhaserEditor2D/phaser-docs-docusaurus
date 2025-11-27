---
slug: prefab-set-properties
title: Changing a property of a prefab instance
---

As we explained in the previous sections, a Prefab is just a class that extends other Prefab class or a Phaser built-in type.

When you create a prefab instance, the new object gets the properties set in the Prefab. For example, the texture of the new instance is the same texture set in the Prefab (in the constructor of the Prefab class).

If you change the texture in the Prefab, all the prefab instance will use the new texture. However, you can unlock the [texture property](./prefab-user-properties#texture-config-property-type) of certain instances and set a different texture.

Note that when you select a prefab instance, the Inspector view shows a “lock” icon next to the object properties. That icon is saying that the property is locked. If you click the icon, it is changed to an “unlocked” icon and means that the property is unlocked.

When you unlock a property, you can change its value, and it is not going to be updated if the property is changed in the Prefab. An unlocked property is not linked to the Prefab anymore.

It is easy to understand if you see it in terms of a class and a class instance. By default, the instance gets the properties set in the class constructor. But you can change that value when you create the instance, and it will remain the same no matter if you change the class constructor.

Now, if you lock the property again, the property will get the value set in the Prefab. Unlocking a property is like reset it to the Prefab value.

Let’s see an example step by step:

- Create two instances of the **Dragon** Prefab. Both instances use the same texture of the Prefab: a green dragon:
  
  ![Two prefab instances.](https://cdn.phaser.io/editor-docs/prefab-set-property-example-1-04212020.webp)
  
- You want to change the texture of the first instance, so you unlock the [texture property](./prefab-user-properties#texture-config-property-type) and select a new image:
  
  ![Unlock texture property.](https://cdn.phaser.io/editor-docs/prefab-set-property-example-2-04212020.webp)

- You want to see how it looks with a purple texture, but you change it in the **Dragon** Prefab file, so, the second prefab instance will be updated automatically to show the new purple dragon texture:
  
  ![You changed the texture in the prefab.](https://cdn.phaser.io/editor-docs/prefab-set-property-example-3-04212020.webp)

- Ok, you love the purple color of the dragon, so you want all the **Dragon** prefab instance to have the same color. To do this, you lock again the [texture property](./prefab-user-properties#texture-config-property-type) of the first (yet brown) dragon and it gets the Prefab texture: the purple one:

  ![Both instances with the same prefab texture.](https://cdn.phaser.io/editor-docs/prefab-set-property-example-4-04212020.webp)
