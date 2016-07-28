---
layout: default
title: Index
unitstandard: 115363-SO1-AC1, 115363-SO1-AC2
---

# A CSS Light

Information hiding is one of benefits of Object Orientation programming. The users of Objects don't have to know how an Object is working internally to use it. As long as the Object does what is required, it can be used to solve tasks at hand.

For example say a client comes to you and asks for an Object that cans simulate a light on a web page.

Something like this:

`I need a Light Class that I can use to create Light Objects that will create a Light on a web page. My team don't know CSS that well. The Light should be able to switched on, off or blink when a button is pressed on a web page. I want to be able to specify the colour of the light. I would like to be able to create multiple light on a web page.`

The client want to be able to use the Light Object like this:

```javascript
var blueLight = new Light('lightOne', 'blue');

var blinkBtn = document.querySelector('.btn');
var onBtn = document.querySelector('.btn');
var offBtn = document.querySelector('.btn');

blinkBtn.addEventListener('click', function(){
    // let the light blink
    blueLight.blink();
});

onBtn.addEventListener('click', function(){
    // switch the light on/off
    blueLight.on();
});

offBtn.addEventListener('click', function(){
    // switch the light on/off
    blueLight.off();
});
```

## Create a constructor function

You will start of by creating a `Light` constructor function, that locate the target element and create a round 'light' inside of it that.

In a file called `light.html` in a script tag below the body tag add this code:

```javascript

var Light = function(id, color) {

    //get the target element to render the light into
    var elem = document.getElementById(id);
    elem.classList.add('light-background');

    //append a div into the target element
    var lightElem = document.createElement('div');
    lightElem.classList.add('light');
    lightElem.classList.add(color);
    elem.appendChild(lightElem);


}
```

Be sure to reference the css file called [light.css](/pages/ligth.css) in your html. Create a div element called `light` inside the body tag.

To create an instance of the Light use code like this:

```javascript

//valid colors for the light is red, gree, orange - you can add mode colors by adding classes in the css file

var light = new Light('light', 'green');

```

If all worked you should have a green light with a grey background. Currently there is no way to switch the light on or off. But you should be able to change the color of the light to 'red' or 'orange'.

## Add more behaviour to the constructor function

To switch the light on you need to attach the `on` to the light element in the DOM. You will add an `add` function to the light class to do that in.

Add a light function to the `Light` class like this:

```javascript
    this.on = function(){
        //add the switch the light on logic here
    };
```

The function should be added inside of the `Light` constructor function (class).

Add this code inside if the `on` function:

```javascript
    lightElem.classList.add('on');
```

To switch on the light use code like this:

```javascript
var light = new Light('light', 'green');
light.on();
```

After switching the light on the color in the circle should be much brighter than before.

Now go ahead and add an `off` method to the Light by using this code:

```javascript
    lightElem.classList.remove('on');
```

You should now be able to switch your light class on and off. Let's switch it on and then of after 1 second.

```javascript
var light = new Light('light', 'green');
light.on();
setTimeout(function(){
    light.off();
}, 1000);
```

## Now try this

Now that you have a working Light class add a `blink` method which make the light blink on or off every second. If you call the blink method when the light is already blinking the light should stop blinking.

> Use the `setInterval` function for your blink function.

## Create a TrafficLight

Now use your Light Object to create a `TrafficLight` class. It should have 3 lights and `stop`, `go` and `warning` methods which switch on the corresponding colored Light. It should also have a `blink` method which makes all three Lights blink every one second.
