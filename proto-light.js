function Light(color){
    this.color = color;
    this.state = "off";

    var funcOne = function(){
        console.log("...")
    }

}

Light.prototype.on = function(){
    this.state = "on";
}

Light.prototype.status = function(){
    funcOne();
    return "The " + this.color + " light is " + this.state;
}


var l = new Light("orange");

console.log(l.status())
