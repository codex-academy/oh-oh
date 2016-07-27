---
layout: default
title: Index
unitstandard:
---

# Light

We will explore the basic principles of Object Orientation using a `Light` as an example.

What are the attributes and behaviour of a light?

For the purpose of our discussion a `Light`:

* can be switched on and off;
* it can blink;
* and it can have a color.

## Classes vs Objects

Object Oriented programming use classes as a templates for creating objects. A class can be used to create object instances of the Class. A class instance is called an object.

Objects shares the same behaviour, but each object instance manage it's own internal state. In JavaScript `constructor functions` act as classes that can instantiated using the `new` keyword.

## The object constructor

Object constructors allows for data to be passed into a Class to create a resulting Object instance. This enables the same class to be instantiated with different datasets. In JavaScript a `constructor function` is acting as both the `class` and the `object constructor`. The constructor function takes in parameters and is executed at object instantiation time.

## Practical example

Let's create a Light class for which you can specify the color. The color of a Light instance is specified when an instance is being created. The Object `constructor` is the function that is being called when a new instance of the `Light` class is instantiated.

You can create a `constructor function` like this:

```javascript
var Light = function(color){
    this.color = color;
}
```
Now you can instantiate Light instances like this:

```javascript
    var orangeLight = new Light('orange');
    var greenLight = new Light('green');
    //orange
    console.log(orangeLight.color);
    //green
    console.log(greenLight.color);
```

## Summary

Objects are created by instantiating Classes. An object's constructor is the first function that is called on class instantiation. The constructor is place to initialize the data in the resulting Object instance. Objects can have member functions and attributes that is publicly available. Private functions and variables are available inside of an object instance. Attributes can be exposed as read-only and as a result can't be modified from outside of the Object.
