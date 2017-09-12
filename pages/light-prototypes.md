---
layout: default
title: Index
unitstandard: 115363-SO4-AC3
---

# Object Composition

Another way to create Objects in JavaScript is to use the Prototype chain.

When using the prototype chain you start with a base function, which you then attach behaviour to using the `prototype` operator. When methods are called on a function the methods are looked up in the prototype chain.

Starting with a `Light` function

```javascript
var Light = function(color){
    this.color = color;
    this.state = "off";
};
```

You add methods to it's prototype chain like this:

```javascript
Light.prototype.on = function(){
    this.state = 'on';
}

Light.prototype.off = function(){
    this.state = 'off';
}

Light.prototype.status = function(){
    return "This is a " + this.color + " light and it is currently " + this.state;
}
```

You can use the `Light` function like this:

```javascript
var light = new Light("green");
light.on();
//the state variable is NOT private
console.log(light.state);
//this is a member function
console.log(light.status());
```

Note that the `state` variable is publicly accessible.

## No private variables

A downside of using the Prototype chain is that one can't create private variables. The only way to create private variables is to use a factory function in conjunction with a closure.

> A **closure** is an inner function that have access to the scope of it containing function. This is a very useful concept in JavaScript to create private variables and methods.

You can learn more about closures [here](https://www.youtube.com/watch?v=CQqwU2Ixu-U)

You can create a Prototype chain with a private `state` variable like this.

```javascript
function TheLight(color){
    //this is accessed as a closure
    var state = "off";

    var Light = function(color){
        this.color = color;
    };

    Light.prototype.on = function(){
        //this is no longer a Light instance variable
        state = 'on';
    }

    Light.prototype.off = function(){
        //this is no longer a Light instance variable
        state = 'off';
    }

    Light.prototype.status = function(){
        return "This is a " + this.color + " light and it is currently " + state;
    }

    return new Light(color);
}
```

You can now use `TheLight` like the example below. Note that the `state` variable is now private.

```javascript
var light = TheLight("red");

console.log(light.status());
light.on();
console.log(light.status());

// state is not accessible now
console.log(light.state);
```

> **Note:** ES6 classes can't have private variables as they are just a sugar coated Prototype chain. Go figure!

## ES6 Classes

In ES6 you can now creates a class like this:

```javascript

class Light {

    constructor(color){
        this.color = color;
        this.state = "off";
    }

    on(){
        //this is no longer a Light instance variable
        state = 'on';
    }

    off(){
        //this is no longer a Light instance variable
        state = 'off';
    }

    status(){
        return "This is a " + this.color + " light and it is currently " + state;
    }
};

```

This works exactly the same as a Prototype chain and can be used like this:

```javascript
var light = new Light("green");
light.on();
//the state variable is NOT private
console.log(light.state);
//this is a member function
console.log(light.status());
```

## Why bother?!

You might wonder why would one use the Prototype chain in JavaScript. It is useful for Inheritance in JavaScript, inheritance is when Objects can get behaviour from other objects without implementing it themselves. Hold onto that thought for later.
