let text = document.querySelector(".text");
let input = document.querySelector("#itemInput");
let box = document.querySelector(".box");
let ul = document.querySelector("#list");

function changeText(){
    if(text.textContent == "This is a sample text."){
        text.textContent = "Text has been changed.";
    }
    else{
        text.textContent = "This is a sample text.";
    }
}

function changeColor(){
    box.classList.toggle("a")
}

function hideBox(){
    box.style.display = "none";
}

function showBox(){
    box.style.display = "flex";
}

function addItem(){
    let li = document.createElement("li");
    console.log(input.value);
    li.textContent = input.value;
    ul.appendChild(li);
}