Function.prototype.inherits = function(Parent) {
    function Surrogate () {}
    Surrogate.prototype = Parent.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this; 
};

Function.prototype.inherits2 = function(Parent) {
    this.prototype = Object.create(Parent.prototype);
    this.prototype.constructor = this;
}

function MovingObject () {
}

MovingObject.prototype.moves = function () {
    console.log("im moving");
}

function Ship () {}
Ship.inherits2(MovingObject);

function Asteroid () {}
Asteroid.inherits2(MovingObject);

let m = new MovingObject();
let s = new Ship();
let a = new Asteroid();

m.moves();
s.moves();
a.moves();