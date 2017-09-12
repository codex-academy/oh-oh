---
layout: default
title: Index
unitstandard:
---

# Object Orientation concepts using TypeScript

TypeScript is a typed superset of JavaScript that makes it easier to use more traditional Object Orientation concepts with JavaScript. It supports Classes, Interface, Inheritance and Abstract Classes in a very similar way to other programming languages like Java and C#.

TypeScript takes the ES6 (ES2016) class syntax and extends it.

> ES6 or EX2016 is the new official version of JavaScript. The current version widely supported in browsers is ES5. ES stands for ECMAScript

TypeScript is JavaScript, but it extends JavaScript. It starts with ES6 classes and then extends it.

A basic class in ES6 looks like this

```javascript

class Light{
    constructor(color){
        this.color = color;
        this.status = "off";
    }

    on(){
        this.status = "on";
    }

    off(){
        this.status = "off";
    }

    state(){
        return "The " + this.color + "light is currently " + this.status;
    }
}
```

You use the class like this:

```javascript

```

You will notice that that `status` attribute is currently publicly accessable.

```javascript

```

This is not good at all. This is one of the big down sides of the `class` keyword in ES6, TypeScript fix this problem and add many more useful features.


TypeScript allows you to add typing to your class and to
