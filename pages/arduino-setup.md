---
layout: default
title: Index
unitstandard:
---

# Arduino and Breadboard Setup

## The Domain

Lights
  * basic light
  * blinking light
    * using inheritance
    * using composition
  * light switch - that can switch both of the above lights on

## Breadboard setup

Setup a breadboard that looks like this:

![One LED](/pictures/SetupOneLED.jpg)


Now create a file called blink.js and add this source code:

```javascript

var five = require("johnny-five");
var board = new five.Board();

board.on('ready', function(){

		var pin = new five.Pin(9),
            high = false;

		setTimeout(function(){
            if (!high){
                pin.high();
                high = true;
            }
            else{
                pin.low();
                high = false;
            }
		}, 1000);

});
```

Connect the Arduino to your PC and try to execute this code using nodejs.

What happens?

Now:

* Create a ```Light``` object which can be switched on and off
* Create a ```BlinkingLight``` object that can be switched on, off and can blink. One should be able to specify the blinking speed.
* Create a ```LightSwitch``` object that can switch both the Light and the BlinkingLight on and off

## Useful resources:

* http://node-ardx.org/
* http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/
* http://addyosmani.com/resources/essentialjsdesignpatterns/book/
