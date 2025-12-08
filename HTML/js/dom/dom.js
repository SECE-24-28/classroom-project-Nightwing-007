/*
/!*!//1. Tag Selector
let heading1 = document.getElementsByTagName("h1");
//HTML Collection Array
console.log(heading1[1]);

//2.Class Selector
let cl = document.getElementsByClassName("a");
//HTML Collection Array
console.log(cl[0]);

//3. ID Selector
let idd = document.getElementById("b");
//it will return single element and the first element
console.log(idd);

//4. QuerySelector ( it works on all the three selectors)
let sel = document.querySelector("#b");
//it will return single element and the first element
console.log(sel);

//5. Query Selector All
let d = document.querySelectorAll("#b");
//NodeList Array
console.log(d);*!/

/!*
//Read and Write operation
let head = document.querySelector("p");
//Read operation
console.log(head.textContent);

//Write operation
head.textContent = "This is the new paragraph content.";

let div = document.querySelector("div");
div.innerHTML = "<p>Hello from para</p>";*!/

// add/remove/toggle class
let head = document.querySelector("h1");
console.log(head);

head.classList.add("color");
head.classList.remove("border");
head.classList.toggle("background");

//Styling
let p = document.querySelector("p");
p.style.color = "red";
p.style.backgroundColor = "green";

//Creating Element
let ul = document.createElement("ul");
let li = document.createElement("li");
li.textContent = "Item 1";
let li1 = document.createElement("li");
li1.textContent = "Item 2";
ul.appendChild(li);
ul.appendChild(li1);

let arr = ["apple", "banana", "mango"];

arr.forEach((el) => {
    let li = document.createElement("li");
    li.textContent = el;
    ul.appendChild(li);
});

document.body.appendChild(ul);*/

let form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    let name = document.querySelectorAll('input')[0];
    let feedback = document.querySelectorAll('textarea');
    if(name.value === ""){
        alert("Name field is required");
    }
    if(feedback.value.length < 5){
        alert("Feedback must be atleast 5 characters long");
    }

    let result = document.querySelector('#result');
    result.textContent = `thankyou ${name.value} for your feedback! and feedback is ${feedback.value}`;
    form.reset();
});
