---
layout: default
title: Index
unitstandard:
---

# Arduino and Breadboard Setup



## Breadboard setup

Setup a breadboard that looks like this:

![One LED](https://raw.githubusercontent.com/avermeulen/ObjectOrientationIntroduction/master/pictures/Setup%20for%20One%20LED_bb.jpg)

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
