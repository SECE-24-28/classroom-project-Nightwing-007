setTimeout(() => {
    console.log("SetTimout Function");
}, 0);
//Callback fun and timer
console.log("Hello world");

//Callback Hell
//Nested callbacks
setTimeout(() => {
    console.log("SetTimeout Function 1");
    setTimeout(() => {
        console.log("SetTimeout Function 2");
        setTimeout(() => {
            console.log("SetTimeout Function 3");
            setTimeout(() => {
                console.log("SetTimeout Function 4");
                setTimeout(() => {
                    console.log("SetTimeout Function 5");
                }, 2000);
            },2000);
        }, 2000);
    },2000);
},2000);

//Promise
//3 States
//1. Pending
//2. Fulfilled(resolve)
//3. Rejected(reject)

let myPromise = new Promise((resolve, reject) => {
    let marks = 40;
    if(marks >= 60){
        resolve("Student is passed");
    }
    else{
        reject("Student is failed");
    }
});

//Ways to call a promise
//.then() and . catch()
myPromise.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);
});

//Async and await
//No error handling
let handlePromise = async () => {
    try{
        console.log("Hello world");
        let response = await myPromise;
        console.log(response);
        console.log("Anything");
    }
    catch(err){
        console.log(err);
    }
    finally {
        console.log("Executes anyway");
    }
};

handlePromise();

/*let fetchData () => {
    fetch("https://jsonplaceholder.typicode.com/todos");
    .then((res) => {
        console.log(res);
        return res.json();
    })
        .then((data) => {
            console.log("Value is ", data);
        })
        .catch((err) => {
            console.log(err);
        })
}*/

let fetchData = async () => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        console.log(response);
        const data = await response.json();
        localStorage.setItem("response", JSON.stringify(data));
        console.log("Value is ", data);
    }
    catch(err){
        console.log(err);
    }
};
let localData = JSON.parse(localStorage.getItem("responseData")) || [];

if(localData.length <= 0){
    fetchData();
}