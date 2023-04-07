// class Exercise

class Vechicle {
    constructor(speed){
        this.speed = speed;
    }
    move(){
        console.log(`move at ${this.speed} speed`)
    }

}
let run = new Vechicle("Slow")

let walk = new Vechicle("Very Slow")

let sprint = new Vechicle("Medium / Slow")

// walk.move()
// run.move()
// sprint.move()


///// extends calss

class Car extends Vechicle{
    constructor(speed){
        super(speed)
    }
    drive(){
        console.log(`Driving at ${this.speed} speed`)
    }
}

let ford = new Car("100mph")

ford.drive()


class Plane extends Vechicle{
    constructor(speed){
        super(speed)
    }
    fly(){
        console.log(`Flying at ${this.speed} speed`)
    }
}

let jet = new Plane("mach 3")
let TURBOpROP = new Plane("300mph")

jet.fly()