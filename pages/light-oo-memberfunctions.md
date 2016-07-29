---
layout: default
title: Index
unitstandard: 115363-SO1-AC2
---

# Member functions & attributes

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
