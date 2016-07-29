---
layout: default
title: Index
unitstandard: 115363-SO1-AC1
---

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
