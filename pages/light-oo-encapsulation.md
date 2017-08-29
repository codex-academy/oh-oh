---
layout: default
title: Index
unitstandard: 115363-SO1-AC2
---

# Information hiding & Encapsulation

Information hiding is one of the key principles of Object Oriented programming. Encapsulation ensures that an objects internals stays hidden. Member functions expose the behaviour of the object, but the details of how things are done is not exposed. As the implementation details of an object is hidden, member functions can change without affecting code that is already using the Object. As result a code base becomes easier to improve or extend. Good unit tests is essential to ensure that changes does not have unintended consequences.

Private variables hides an objects state inside of the object. Internal object state can be exposed using member functions to allow data access, but not data modification.

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

Note that the `color` property on Light Class is a public instance variable. And can change once a Light instance is created.

Change the color like this:

```javascript
lightInstance.color = 'orange';
console.log("The " + lightInstance.color + "light is currently " + lightInstance.status());
// will now print 'The blue light is currently on'
```

When creating classes you need to decide which data is:

  * private and is available inside the Object instance
  * read-only and can't be change from outside of the object
  * is publicly accessible and changeable

Objects can have private data and private functions which is not accessible from outside the object.

## Private variables

To protect the Light objects `color` property from being changed from outside the object you should make it private. The `status` already private is modified via the `on` and `off` functions. And accessed via the `status` function.

```javascript

var Light = function(color){
    var theColor = color;
    var status = 'off';
   
    // change a private variable
    this.on = function(){
        status = 'on';
    }

    // change a private variable
    this.off = function(){
        status = 'off';
    }

    // create a member function for color
    this.theColor = function(){
      return theColor;
    }

    this.status = function(){
      return status;
    }

    this.about = function(){
      return "The " + theColor + " light is " + status + "."; 
    }

}

```

Use the light like this:

```javascript

var blueLight = new Light("blue");

//prints `The blue light is off`
blueLight.about();

blueLight.on();

//prints `The blue light is on`
blueLight.about();

// this will have no impact on the color of the light
blueLight.theColor = "orange";

//this still prints `The blue light is on`
blueLight.about();

```

The `color` property is now private and can be accessed via the `theColor` method, but can't be changed from outside of the Object (constructor function instance). Private variables protect data that exists inside an object and can only be changed or accessed via methods on the object.