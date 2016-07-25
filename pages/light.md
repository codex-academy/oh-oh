---
layout: default
title: Index
unitstandard: 115363
---

# Light

We will explore the basic principles of Object Orientation using a `Light` as an example.

What are the attributes and behaviour of a light?

For our discussion a `Light`:

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

## Member functions & attributes

Objects can have behaviour and data, our Light object should have to ability to switch  `on` and `off`. If someone would like to use our `Light` object they would switch it on using the `on` member function. To switch it off they will be using the `off` member function.

Member functions can be attached to a constructor function(Class) using the `this` keyword. The `this` keyword references the current instance of an object.

Use it like this:

```javascript

var Light = function(color){
    this.color = color;
    var status = 'off';
    // create an `on` member function
    this.on = function(){
        status = 'on';
    }
    // create an `off` member function
    this.off = function(){
        status = 'off';
    }
}
```

Now you can switch a light on and off:

```javascript
var greenLight = new Light('green');
//switch on the green light
greenLight.on();
```

You can switch a light on or off, but there are no way to see the status of the light. The `status` of the light is not visible from outside of the object as it is a `private variable`.

This will not work:

```javascript

var greenLight = new Light('green');

//switch on the green light
greenLight.on();

// this will not work!!!
console.log(greenLight.status);
```

## Information hiding & Encapsulation

Information hiding is one of the key principles of Object Oriented programming. Encapsulation makes sure that an objects internals stays hidden. Member functions expose the behaviour of the object, but the details of how things are done is not exposed. As the implementation details of an object is hidden member function can change internally. These internal changes can be done  without affecting code that is already using the Object. As result a code base becomes easier to improve or extend. Good unit tests is essential to make sure that changes does not having unintended consequences.

Private variables hides an objects state inside of the object. Internal state of objects can be exposed using member functions which allow data to be exposed, but not changed.

Read more about [Information Hiding and Encapsulation](https://en.wikipedia.org/wiki/Information_hiding) on Wikipedia.

You can expose the current state of a `Light` Object by adding a member function:

```javascript
//in the Light Class

this.status = function(){
    return status;
}
```

Now you will be able to see the status of a `Light` Object like this:

```javascript

var lightInstance = new Light('blue');

lightInstance.on();
console.log("The " + lightInstance.color + "light is currently " + lightInstance.status());

//this will print: 'The blue light is currently on'
```

Note that the `colour` property on Light Class is a public instance variable. And can change once a Light instance is created.

Change the colour like this:

```javascript
lightInstance.colour = 'orange';
console.log("The " + lightInstance.color + "light is currently " + lightInstance.status());
// will now print 'The blue light is currently on'
```

When creating classes you need to decide:
  * What data is private inside the Object
  * Which data is read-only
  * What data should be publicly accessible and changeable.

Objects can have private data and utility functions which is not accessible from outside the Class as well.

## Classes in the next version of JavaScript

The next version of JavaScript (ES6/ES2015) support a `class` keyword that can be used to create classes.

The syntax for creating a `Light` class in ES6 looks like this:

```javascript

'use strict';
class Light{
    constructor(color){
        this.color = color;
    }
}
```

This approach clarifies the Object Orientated approach of using classes in JavaScript. It adds a explicit `constructor` function that is called when a new Object is instantiated. Although under the hood it is still using the same approach as in es5.

Using it stays the same as before:

```javascript
    //this now use the new Light class
    var orangeLight = new Light('orange');
    var greenLight = new Light('green');
    //orange
    console.log(orangeLight.color);
    //green
    console.log(greenLight.color);
```

This es6 syntax for classes in JavaScript, is supported in NodeJS version 4 and later. To use this syntax in a web browser you will need a JavaScript preprocessor such as Babel.

## Object Composition

The technique to use Objects to create a new Objects is called [Object Composition](https://en.wikipedia.org/wiki/Object_composition). It models the relationship between object using a `has a` type of relationship. The newly created object is composed by using existing objects. The object use functionality from the existing objects.

You can use `Object Composition` to create a `TrafficLight` Object that is using the `Light` Objects. The Traffic Light object don't have to care how a Light is switched on or off, but it can rely on the fact that a light can be switched on and off.

## Summary

Objects are created by instantiating Classes. An object's constructor is the first function that is called on class instantiation. The constructor is place to initialize the data in the resulting Object instance. Objects can have member functions and attributes that is publicly available. Private functions and variables are available inside of an object instance. Attributes can be exposed as read-only and as a result can't be modified from outside of the Object.
