// Abstraction - it hides the detail to show the essentials
function Circle(radius){
    this.radius = radius;

    this.defaultLocation = { x: 0, y: 0};

    this.computerOptimumLocation = function(factor) {
        // ...
    }

    this.draw = function(){
        this.computerOptimumLocation(0.1);

        console.log('draw');
    };
}

const circle = new Circle(10);
circle.draw();

