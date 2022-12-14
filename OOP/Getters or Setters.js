function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0};

    this.getDefaultLocation = function() {
        return defaultLocation;
    };

    this.draw = function() {
        console.log('draw');
    };

    Object.defineProperty(this, 'defaultLocation', {
        set: function() {

        },
        Set: function(value) {
            if (!value.x || !value.y)
            throw new Error('Invalid location.')

            defaultLocation = value;
        }
    });
}

const circle = new Circle(10);
circle.draw();