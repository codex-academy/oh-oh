---
layout: default
title: Index
unitstandard:
---

# A real light

Next you will create Light class similar to the HTML/CSS Light you just created, but one that is controlling a real [LED](https://en.wikipedia.org/wiki/Light-emitting_diode) light.

Your light class should have an `on`, `of` and `blink` member function. The constructor Light should take in the Arduino PIN number of the light to be switched on.

## What you will use

For this section you need to use an Arduino micro controller with the [johnny-five](http://http://johnny-five.io/) node module, this allow you to program hardware components using Javascript.


## Setup the light

![Breadboard setup](page/SetupOneLED.jpg)

You should use the [Pin class](https://github.com/rwaldron/johnny-five/wiki/Pin) from johnny-five to switch the light on or off. If a Pin is set to high the light will be switched off. If the Pin is set to low the light will be switched off.

```javascript

var five = require("johnny-five");
var board = new five.Board();

board.on('ready', function(){

		var pin = new five.Pin(9);

        // the light will switch on
        pin.high();

		// the light will switch off
        pin.low()
});
```

Connect the Arduino to your PC and try to execute this code using NodeJS.
