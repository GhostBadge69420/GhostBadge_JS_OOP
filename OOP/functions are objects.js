function Circle(radius) {
    this.radius;
    this.draw = function(){
        console.log('draw');
    }
}

const Circle1 = new Function('radius', `
this.radius = radius;
this.draw = function() {
    console.log('draw');
}
`);

const Circle = new Circle(1);

const another = new Circle(1);


//function Circle(radius) {
//    this.radius;
//    this.draw = function(){
//        console.log('draw');
//    }
//}

//Circle.call({}, 1);
//Circle.apply({}, [1, 2, 3]);

//const another = new Circle(1);