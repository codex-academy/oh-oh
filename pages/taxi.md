---
layout: default
title: Index
unitstandard: 115363-SO3-AC1 115363-SO3-AC2 115363-SO3-AC3
---
# Make the taxi move.

Now that you have a good understanding of Object Oriented programming we will give you a challenge. You are provided with classes that you should use to make a little minibus taxi move. The taxi should not be able to move forward if the TrafficLight closest to it is red. When the taxi reaches the end of the road it should wrap around to the start of the road. If the up or down arrow is pressed the TrafficLight closest to the taxi should toggle between green, orange, and red. The taxi should be able to move forward if the light is green.

See the taxi: https://codex-academy.github.io/objective-taxi/

Find the code here: https://github.com/codex-academy/objective-taxi

You are provided with classes which you should use to make the taxi move. Here are details of each class and it's members functions.

Taxi class:

* `forward` - move taxi forward
* `reverse` - move taxi backwards
* `closestTrafficLight` - get the TrafficLight closest to the current location of the taxi

TrafficLight class:

* `makeRed` - make the traffic light red
* `makeOrange` - make the traffic light orange
* `makeGreen` - make the traffic light green
* `currentColor` - get the current color of the traffic light
* `is` - check if the color is `red`, `orange` or `red`

Keypress class:

Each function takes a function that is called when the corresponding key is pressed.

* `forward` - when the right arrow key is pressed
* `reverse` - when the left arrow key is pressed
* `up` - when the up arrow key is pressed
* `down` - when the down arrow key is pressed


Write your code in `index.js`
