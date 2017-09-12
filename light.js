function TheLight(color){
    //this is accessed as a closure
    var state = "off";

    var Light = function(color){
        this.color = color;
    };

    Light.prototype.on = function(){
        //this is no longer a Light instance variable
        state = 'on';
    }

    Light.prototype.off = function(){
        //this is no longer a Light instance variable
        state = 'off';
    }

    Light.prototype.status = function(){
        return "This is a " + this.color + " light and it is currently " + state;
    }

    return new Light(color);
}

var o = TheLight("red");

console.log(o.status());
o.on();
console.log(o.status());
// state is not accessible now
console.log(o.state);
