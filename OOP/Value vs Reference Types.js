// prototypes
//let x = { value: 10 };
//let y = x;

//x.value = 20;

// Primitives are copied by their value
// Objects are copied by their reference

let obj = {value: 10 };

function increase(number){
    obj.value++;
}

increase(obj);
console.log(obj);