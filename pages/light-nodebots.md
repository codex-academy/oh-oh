---
layout: default
title: Index
unitstandard:
---

# A real light

Some real LED lights



## What is Object Orientation?

## Setup

Create a new folder called ```OOIntro``` in your projects folder
* change in the the 'OOIntro' folder
* do a ```npm init```
* do ```npm install --save johnny-five```
* you should be ready to go now

## Javascript Objects

###Object literals
Javascript don't have classes it simulate classes using functions.
Object literals are instances already and are prototypes for new instances. Javascript support prototypal inheritance. Where objects can get functionality by navigating up their prototype chain.

### Function scope

Javascript got function scope and not block scope. You should be carefull and always declare variables first inside of a function.

For example the example below can cause some issues

```javascript
var myFunc = function(count){
	if (count == 7){
		// ola is created in the function as a whole
		var ola = 'ya!'
	}
	// ola still exists if count is 7
	return ola;
}
```
A better way

```javascript
var myFunc = function(count){
	var ola = '';
	if (count == 7){
		// ola is created in the function as a whole
		ola = 'ya!'
	}
	// ola still exists if count is 7
	return ola;
}
```


### 'this' in Javascript

* The state of the object.
* Be sure to use ```new``` for constructor functions - otherwise they use the global scope!
* Whatch out for the context of ```this``` - is it the right ```this```. Keep a copy of ```this```.

###Inheritence

We will use constructor stealing

```javascript
var Vehicle = function(regNo){
  var speed = 0;

  this.regNo = regNo;

  this.accelerate = function(){
    speed += 10;
  };

  this.currentSpeed = function(){
    return speed;
  };
}

var Golf = function(regNo){
  Vehicle.call(this, regNo);
};


var golf1 = new Golf('CY 670 234');
console.log(golf1.regNo);

golf1.accelerate();
golf1.accelerate();
golf1.accelerate();

// print 30
console.log(golf1.currentSpeed());


```

### Composition

Create an object that reference other objects

```javascript

var Golf = function(regNo){
  var vehicle = new Vehicle(regNo);

  this.goFaster = function(){
  	vehicle.accelerate();
  }

  this.howFast = vehicle.currentSpeed;

};

var golf2 = new Golf('CY 670 234');

//won't work
console.log(golf2.regNo);

golf.goFaster();
golf.goFaster();
golf.goFaster();

// print 30
console.log(golf1.howFast());

```
