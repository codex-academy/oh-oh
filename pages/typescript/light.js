class Light{
    constructor(color){
        this.color = color;
        this.status = "off";
    }

    on(){
        this.status = "on";
    }

    off(){
        this.status = "off";
    }

    state(){
        return "The " + this.color + "light is currently " + this.status;
    }
}

let orange = new Light("orange");
orange.on();
console.log(orange.state());

//console.log(orange.status);
