---
layout: default
title: Index
unitstandard: 115363-SO1-AC2 115363-SO2-AC2
---

# Light

We will explore the basic principles of Object Orientation creating a `Light` class.

What are the attributes and behaviour of a `Light`?

For our discussion a `Light` can:

* be switched on and off;
* blink;
* have a color.

## Classes vs Objects

Object Oriented programming use a Class as the template for creating an Object. A Class is be used to create Object instances of the Class. A Class instance is called an Object.

Objects share the same behaviour and attributes, but each Object instance have it's own internal state. In JavaScript **constructor functions** act as Classes that can instantiated using the `new` keyword. The `this` keyword is used to reference instance variables and methods.

## The Object constructor

Object constructors allow for data to be passed into a Class to create an Object instance. This enables the same class to be instantiated with different parameters. In JavaScript a **constructor function** is acting as both the **Class** and the **Object constructor**. The constructor function takes in parameters and is executed at Object instantiation time.

```javascript

var ConstructorFunction = function(aParameter){
    this.instanceVariable = aParameter;
    console.log("This will run when instantiated!");

    //this variable is private - only visible in the constructor function
    var length = this.instanceVariable.length;

    this.instanceMethod = function(){
        return this.instanceVariable.toUpperCase();
    }
}

// to run this code

var instanceOne = new ConstructorFunction("Look at this first!");
//this prints : "LOOK AT THIS FIRST!"
console.log(instanceOne.instanceMethod());

//this prints undefined
console.log(instanceOne.length);

var instanceTwo = new ConstructorFunction("Look at this second!");

//this prints : "LOOK AT THIS SECOND!"
console.log(instanceTwo.instanceMethod());

```


## Practical example

Let's create a `Light` Class for which you can specify the color. The color of a `Light` instance is specified when an instance is being created. The **Object constructor** is the constructor function that is being called when a new instance of the `Light` class is instantiated using the `new` keyword.

You can create a **constructor function** like this:

```javascript
var Light = function(color){
    this.color = color;
}
```
Now you can instantiate Light instances like this:

```javascript
    var orangeLight = new Light('orange');
    var greenLight = new Light('green');
    // orange
    console.log(orangeLight.color);
    // green
    console.log(greenLight.color);
```

## Summary

Objects are created by instantiating Classes. An Object's constructor is the first function that is called on class instantiation. The constructor is the place to initialize the data in the resulting Object instance. Objects can have member functions and attributes that are publicly available. Private functions and variables are available inside of an Object instance. Attributes can be exposed as read-only and as a result can't be modified from outside of the Object.
