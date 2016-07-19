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

In Object Oriented programming a class is a template or blueprint for an Object. A class can be used to create multiple instances of the Class, a Class instance is called an Object.

Although each Object shares the same behaviour, each one got it's own internal data(state) that is managed by the Object instance methods. In Javascript `constructor functions` are used as classes and are instantiated using the `new` keyword.

## The object constructor

Object Constructor allows for data to be passed into a Class to create a resulting Object instance. This enables the same class to be instantiated with different datasets. In Javascript a `constructor function` is acting as both the `class` and the `object constructor`. The constructor function takes in parameters and is executed at object instantiation time.

## Applied

Let's create a Light class for which you can specify the color. The color of a Light instance is specified when an instance is being created. The Object `constructor` is the function that is being called when a new instance of the `Light` class is instantiated as discussed.

You can create a `constructor function` like this:

```javascript
var Light = function(color){
    this.color = color;
}
```
Now you can instantiate various Light instances like this:

```javascript
    var orangeLight = new Light('orange');
    var greenLight = new Light('green');
    //orange
    console.log(orangeLight.color);
    //green
    console.log(greenLight.color);
```

## Member functions & attributes

Objects can have behaviour and data, our Light object should have to ability to be switched `on` and `off`. If someone would like to use our `Light` object they would switch it on using the `on` member function. To switch it off they will be using the `off` member function.

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

Now one can switch a light on and off like this:

```javascript
var greenLight = new Light('green');
//switch on the green light
greenLight.on();
```

One can switch a light on or off, but there are no way to see the status of the light. The `status` of the light is hidden and not visible from outside of the object, it is a `private variable`.

This will not work:

```javascript

var greenLight = new Light('green');

//switch on the green light
greenLight.on();

// this will not work!!!
console.log(greenLight.status);
```

## Private variables

Information hiding is one of the principles of Object Oriented programming. It allows one to encapsulate Object behaviour and actions into object member functions. This allow control control how the state of an object is changed.

Internal state of a object one can be exposed using member functions which allow data to be exposed, but not changed.

We can expose the current state of a `Light` Object by adding a member function:

```javascript
//in the Light Class

this.status = function(){
    return status;
}
```

Now one will be able to see the status of a `Light` Object like this:

```javascript

var lightInstance = new Light('blue');

lightInstance.on();
console.log("The " + lightInstance.color + "light is currently " + lightInstance.status());

//this will print: 'The blue light is currently on'
```

One thing to note is that the `colour` Light Class is currently a public instance variable that can be overridden once a Light instance.

One can change the colour like this:

```javascript
lightInstance.colour = 'orange';
console.log("The " + lightInstance.color + "light is currently " + lightInstance.status());
// will now print 'The blue light is currently on'
```

When creating classes you need to decide what data is private and only visible in the Object, which data should be read-only and what data should be publicly accessible and changeable as a result. Objects can have private internal data and utility functions which is not accessible from outside the Class.

## Classes in the next version of Javascript

The next version of Javascript (ES6/ES2015) support a `class` keyword that can be used to create classes.

The syntax for creating a `Light` class in ES6 looks like this:

```javascript

'use strict';
class Light{
    constructor(color){
        this.color = color;
    }
}
```

This approach clarifies the Object Orientated approach of using classes in Javascript. It adds a explicit `constructor` function that is called when a new Object is instantiated. Although under the hood it is still using the same approach as in es5.

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

This es6 syntax for classes in Javascript, is supported in NodeJS version 4 and later. To use this syntax in a web browser you will need a Javascript preprocessor such as Babel.

## Object Composition

The technique to use Objects to create a new Objects is called [Object Composition](https://en.wikipedia.org/wiki/Object_composition). It models the relationship between object using a `has a` type of relationship. The newly created object that is composed by using existing objects will use functionality from the already existing objects.

You can use `Object Composition` to create a `TrafficLight` Object that is using the `Light` Objects. That way a TrafficLight object don't have to care how a Light is switched on or off, but it can rely on the fact that a light can be switched on and off.

## Summary

Objects are created by instantiating Classes, an object's constructor is the first function that is called on class instantiation. The constructor is place to initialize the data in the resulting Object instance. Objects can have member functions and attributes that is publicly available and gives an object some behaviour and state. Private functions and variables are only available inside of an object instance. Attributes can be exposed as read only and as a result can't be modified from outside of the Object.
