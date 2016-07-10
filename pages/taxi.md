---
layout: default
title: Index
unitstandard:
---
# Make the taxi move.

Now that you have a quite a solid understanding of Object Oriented programming we will give you a bit of a challenge. You are provided with a few classes that you should use to make a little minibus taxi move. The taxi should not be able to move forward if the TrafficLight is green. When the taxi reach the end of the road it should wrap around to the start of the Road. If the up and down arrow is pressed the TrafficLight closest to the taxi should toggle between green, orange & red. The taxi should only be able to move forward if the light is green.

## Class provided:

You are provided with these classes which you should use to make the taxi move.

Taxi class:
* `forward` - move taxi forward
* `reverse` - move taxi backwards
* `closestTrafficLight` - get the TrafficLight closest to the current location of the taxi

TrafficLight class:
* `makeRed` - make the traffic light red
* `makeOrange` - make the traffic light orange
* `makeGreen` - make the traffic light green
* `currentColor` - get the current color of the traffic light

Keypress class:

Each function take a function that is called when the corresponding key is pressed.

* `forward` - when the right arrow key is pressed
* `reverse` - when the left arrow key is pressed
* `up` - when the up arrow key is pressed
* `down` - when the down arrow key is pressed
