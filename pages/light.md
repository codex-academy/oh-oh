---
layout: default
title: Index
unitstandard:
---

# Light

We will explore the basic principles of Object Orientation using a `Light`.

What are the attributes and behaviour of a light?

For the purpose of our discussion a `Light`:

* can be switched on and off;
* and it can have a colour.

## The constructor

The colour of a Light instance is specified when an instance is being created. The Object `constructor` is the function that is being called when a new instance of the `Light` class is instantiated. The constructor allows for different variables to be passed into the Class to create the resulting Object instance.

In main stream Object Oriented programming languages classes will be created as a template from which Object instances are created. These object will have constructor functions that are being called when instances of the class is being instantiated. Javascript is using a concept called constructor functions, to simulate this pattern.

You can create a constructor function like this:

```javascript
var Light = function(color){
    this.color = color;
}
```

Which allow you to instantiate various different Light instances like this:

```javascript
    var orangeLight = new Light('orange');
    var greenLight = new Light('green');
    //orange
    console.log(orangeLight.color);
    //green
    console.log(greenLight.color);
```

## Classes vs Objects

In Object Oriented programming a class is the template or blueprint for an Object. A class can be used to create multiple instances of the Class a Class instance is called an Object. Although each Object share the same behaviour, each one got it's own internal data (state) that is managed by the Object instance methods. In Javascript constructor functions are used as classes and are instantiated using the `new` keyword. In the previous section a `Light` constructor function is used. And then it's used to create to Object instances `orangeLight` and `greenLight`.

## Class in the next version of Javascript

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

This approach clarifies the Object Orientated approach of using classes in Javascript a lot. It adds a explicit `constructor` function that is called when a new Object is instantiated.

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

Although under the hood it is still using the same approach as before. This es6 syntax for classes in Javascript, will work reliably in NodeJS version 4 and later. But to use this in a web browser you will need a Javascript preprocessor such as Babel.


## Member functions & attributes

Objects have behaviour and data, our Light have two member functions which is `on` and `off`. If someone would like to use our `Light` object they would switch it on using the `on` member function. To switch it off they will be using the `off` member function.

Member functions can be attached to a constructor function(Class) like this:

```javascript

var Light = function(color){
    this.color = color;
    var status = 'off';
    this.on = function(){
        status = 'on';
    }
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

Now one can switch a light on or off, but there are now way to see the status of the light as the `status` variable of the light is a private variable.

## Private variables

Information hiding is one of the central principles of Object Oriented programming. It allows one to encapsulate Object behaviour and actions into object member functions. This control how the state of an object is changed. For one to see the internal state of a object one can add member functions that can expose, but not change the internal state of and object.

We can expose the current state of a `Light` Object by adding a function like this:

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

## Summary

So far we learned that Objects are created from Classes and a constructor function is the first function that is called on the Class and helps to initialises the data in the resulting Object instance. Objects can have member functions and attributes that gives an Objects it behaviour and state. Member functions and attributes can either be public of private. Public methods and attributes are accessible via Object instance variables. The internal state of Objects is only available inside of an Object. Some attributes can be exposed as read only and as a result can't be modified from outside of the Object.
