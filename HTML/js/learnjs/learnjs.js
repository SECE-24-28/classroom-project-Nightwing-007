/*console.log(a);
//hoisting
var a = 10;
//global scope / function scope
console.log(a);

//ES6
// let and const
//console.log(b);
//ReferenceError
//temporal dead zone
let b = 20;
b = 130;
//Block scope
console.log(b);

/!*{
    let b = 30;
    console.log(b);
}*!/

// console.log(c);
const c = 40;
// c = 70;
console.log(c);*/

//Functions
//1. Named function
//Function declaration
function namedFunc() {
    console.log("NamedFunc()");
}

//Function call/ invocation
namedFunc();

//2. Function Expression

let funcExp = function(){
    console.log("funcExp()");
}

funcExp();

//3. Arrow Functions(ES6)
let arrow = () => {
    console.log("arrow()");
}

arrow();

//4. Callback and IIFE (Immediately Invoked Function Expression)
(() => {
    console.log("arrow()");
})();