//  Navigation the DOM 
//  Element by ID
let main = document.getElementById('content');
console.log(main);

let main2 = document.getElementById('nav');
console.log(main2);

// Element by class Name 
let container = document.getElementsByClassName('container');
console.log(container);

// Query Selector
let sel = document.querySelector(".container");
console.log(sel);

// Events & Listeners

function toggleHide(){
    let para = document.getElementById('para');
    if(para.style.display != 'none' ){
        para.style.display = 'none';
    }
    else{
        para.style.display = 'block';
    }
}

let para = document.getElementById('para');
para.addEventListener('mouseover',function fun(){
    console.log("Mouse Inside")
})

para.addEventListener('mouseout',function fun(){
    console.log("Mouse Outside")
})

// setTimeout

function greet(){
    console.log("Hello Lavish");  
}
setTimeout(greet,2000);

// setInterval

// setInterval(greet,2000)

// Clock

function displaytime() {
    time = new Date();
    // console.log(time);
    document.getElementById('time').innerHTML = time;
}
setInterval(displaytime,1000);

//  Arrow Functions

let greets = ()=>{
    console.log("Hlo Lavish");
}
greets();

let sum = (a,b,c)=> a+b+c;