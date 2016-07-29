---
layout: default
title: Index
unitstandard: 115363-SO1-AC2
---

# Information hiding & Encapsulation

Information hiding is one of the key principles of Object Oriented programming. Encapsulation ensures that an objects internals stays hidden. Member functions expose the behaviour of the object, but the details of how things are done is not exposed. As the implementation details of an object is hidden member function can change internally. These internal changes can be done  without affecting code that is already using the Object. As result a code base becomes easier to improve or extend. Good unit tests is essential to ensure that changes does not having unintended consequences.

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
