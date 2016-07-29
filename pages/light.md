---
layout: default
title: Index
unitstandard: 115363-SO1-AC2 115363-SO2-AC2
---

# Light

We will explore the basic principles of Object Orientation using a `Light` as an example.

What are the attributes and behaviour of a `Light`?

For our discussion a `Light` can:

* be switched on and off;
* blink;
* have a colour.

## Classes vs Objects

Object Oriented programming uses Classes as templates for creating Objects. A Class can be used to create Object instances of the Class. A Class instance is called an Object.

Objects share the same behaviour, but each Object instance manages it's own internal state. In JavaScript **constructor functions** act as Classes that can instantiated using the `new` keyword.

## The Object constructor

Object constructors allow for data to be passed into a Class to create a resulting Object instance. This enables the same class to be instantiated with different datasets. In JavaScript a **constructor function** is acting as both the **Class** and the **Object constructor**. The constructor function takes in parameters and is executed at Object instantiation time.

## Practical example

Let's create a `Light` Class for which you can specify the colour. The colour of a `Light` instance is specified when an instance is being created. The **Object constructor** is the function that is being called when a new instance of the `Light` class is instantiated.

You can create a **constructor function** like this:

```javascript
var Light = function(colour){
    this.colour = colour;
}
```
Now you can instantiate Light instances like this:

```javascript
    var orangeLight = new Light('orange');
    var greenLight = new Light('green');
    // orange
    console.log(orangeLight.colour);
    // green
    console.log(greenLight.colour);
```

## Summary

Objects are created by instantiating Classes. An Object's constructor is the first function that is called on class instantiation. The constructor is the place to initialize the data in the resulting Object instance. Objects can have member functions and attributes that are publicly available. Private functions and variables are available inside of an Object instance. Attributes can be exposed as read-only and as a result can't be modified from outside of the Object.
