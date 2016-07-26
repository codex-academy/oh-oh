---
layout: default
title: Index
unitstandard:
---

# Ferry Kata

## Instructions

Solve this exercise using TDD. Complete it in JavaScript, Python, or Ruby. Once done in one Language in the allotted time try it out in another. Use flowcharts and diagrams to think through the required logic.

A ferry is a boat that carries people and things for a short distance between two places - typically between islands and over rivers.

![Ferry](https://github.com/codex-academy/FerryKata/blob/gh-pages/img/ferry.jpg?raw=true)
[The Bolivar Gridge Ferry](https://en.wikipedia.org/wiki/Bolivar_Bridge)


## Part 1

In an island country far far away there are lots of Ferries that allow people to travel by car between all the different islands of this country.

This country's government would like to control the number of cars and people that can get onto a Ferry.

To help them they need you to:

* Create a `Car` class: the constructor should specify the **colour** and  the **number of passengers** in the car.

* Create a `Ferry` class: the constructor should specify the **number of cars** allowed on the ferry and also **how many people** are allowed on the ferry.

Cars are allowed onto the Ferry using the `board` method. If the ferry is not full yet the `board` method returns 'accepted'. If there are enough people or cars on the Ferry already, the `board` method should return 'rejected'.

The Ferry class instance should keep track of the number of people and cars on the Ferry using the `people_count` and `car_count` properties.

## Part 2

Once you can load cars into the Ferry, look at other things the Ferry company is interested in:

* knowing how many cars of a certain color are on the Ferry;
* updating the people and car counts correctly when a car leaves the Ferry;
* giving a car 50% discount after three trips on the same ferry. The board method should return 'half price!';
* giving a free trip after 7 trips on any Ferry. The board method should return 'you go free!'
