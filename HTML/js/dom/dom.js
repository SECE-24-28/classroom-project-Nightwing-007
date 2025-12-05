//1. Tag Selector
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
console.log(d);

//Read and Write operations