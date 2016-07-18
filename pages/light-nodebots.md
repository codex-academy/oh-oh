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

## Project setup

In your projects folder create a new folder called `LedLightFun`. Change into that folder set it up as a NodeJS project folder and install the `johnny-five` module.

Do this:

* `mkdir LedLightFun`
* `cd LedLightFun`
* `npm init -y`
* `npm install --save johnny-five`






## Setup the light

You will need:

* 1 x LED light
* 1 x 220/330 ohms resister
* 2 x jumper wires
* 1 x breadboard

Set it up like this:

![Breadboard setup](https://raw.githubusercontent.com/avermeulen/ObjectOrientationIntroduction/master/pictures/Setup%20for%20One%20LED_bb.jpg)

Connect your breadboard setup to your Arduino One to one of the numbered Pins on the board the othe to the GND pin.

## Try some code

You should use the [Pin class](https://github.com/rwaldron/johnny-five/wiki/Pin) from johnny-five to switch the light on or off. If a Pin is set to high the light will be switched off. If the Pin is set to low the light will be switched off.

Run this code:

```javascript

var five = require("johnny-five");

// Create an instance of the Board class - referring to the Arduino Micro Controller 'board'
var board = new five.Board();

board.on('ready', function(){

		var pin = new five.Pin(9);

        // the light will switch on
        pin.high();

		// the light will switch off after 2 seconds
		setTimeout(function(){
	        pin.low()
		}, 2000);
});
```

## Create a Object

Once the above example is working. Create your own `LedLight` class to make the LED light switch on, off or blink.

You should be able to use the light like this:

```javascript

	var light = new LedLight(7);

	light.on();

	light.off();

	light.blink();
```

## Add a counter

Add a internal counter that keeps track of how many times the light was switched on. Expose the value of the counter through a member function call `on_count`.

## Try this:

Now add this functionality to your Light class.

Add:

* A `blink_fast` method to make the light blink fast
* A `blink_slow` method to make the light blink slow
* A `reset_count` function that set the `on_count` to 0
