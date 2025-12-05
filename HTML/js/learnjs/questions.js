/*1Create Array From Arguments
Q1:
    Create a function createArray that takes 3 arguments and returns an array containing those three values.
    Run the function and print the result.
    Dynamic Number of Arguments

Push Only Strings*/

function createArray(p1, p2, p3){
    return [p1, p2, p3];
}

console.log("Q1: ", createArray(1, 2, 3));

/*Q2:
    Create a function stringOnly that accepts any number of arguments, but returns an array containing only the arguments that are strings.
*/

function stringOnly(...x){
    let z = [];
    for(const x1 of x){
        if(typeof x1 === 'string'){
            z.push(x1);
        }
    }

    return z;
}

console.log("Q2: ", stringOnly("abc", 1, "xyz", 2, 3));

/*Create Array of Squares
Q3:
    Create a function squareNumbers that accepts numbers as arguments and returns an array of each number squared.
    Example:
squareNumbers(2, 3, 4) → [4, 9, 16]
*/

function squareNumbers(...x){
    for(let i = 0; i < x.length; i++){
        x[i] = x[i] * x[i];
    }
    return x;
}

console.log("Q3: ", squareNumbers(1, 2, 3));

/*Filter Even Numbers
Q4:
    Create a function getEvenNumbers that accepts numbers as arguments and returns an array containing only even numbers.
    Create Array of Names*/

function getEvenNumbers(...x){
    let z = [];
    for(let i of x){
        if(i%2 === 0){
            z.push(x[i]);
        }
    }

    return z;
}

console.log("Q4: ", getEvenNumbers(1, 2, 3, 4, 5, 6, 7));
/*Q5:
    Create a function collectNames that accepts name arguments and returns an array of names in uppercase.
    Example:
collectNames("sid", "raj") → ["SID", "RAJ"]
Convert Arguments Into Objects*/

function collectNames(...x){
    for(let i = 0; i < x.length; i++){
        x[i].toUpperCase();
    }

    return x;
}

console.log("Q5: ", collectNames("sid", "raj"));

/*Q6:
    Create a function makeUser that takes 3 arguments: name, age, city.
    Return an array containing 1 object like:
    [
        { name: "Sid", age: 22, city: "Delhi" }
    ]
Mix values, return only numbers*/

function makeUser(name, age, city){
    return [{name, age, city}];
}

console.log("Q6: ", makeUser("Sid", 22, "Delhi"));

/*Q7:
    Create a function addTen that takes any number of arguments and returns an array where each number is increased by 10.
Function with default values*/

function addTen(...x){
    for(let i = 0; i < x.length; i++){
        x[i] += 10;
    }

    return x;
}

console.log("Q7: ", addTen(1, 2, 3, 4, 5, 6, 7));

/*Q8:
    Create a function createFruitArray where if no arguments are passed, it returns ["apple", "banana"].
    If arguments are passed, return those arguments as an array.*/

function createFruitArray(...x){
    if(x.length === 0){
        return ["Apple", "Banana"];
    }
    let z = [];
    for(const x1 of x){
        z.push(x1);
    }
    return z;
}

console.log("Q8: ", createFruitArray("Mango", "Orange", "Mosambi"));
console.log("Q9: ", createFruitArray());
