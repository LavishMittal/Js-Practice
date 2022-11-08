// Video 1
console.log(`Hello World`);
console.log("Hello World");
console.log('Hello World');

// Video 2
var a = 78;
var b = "Lavish";
console.log("a");
console.log(a);
console.log(b);

// Unary Operator
var a = -a;
console.log(a);
// Binary Operator
var c = a + (-a);
console.log(c);

var c = 2 + 4;
console.log(c);

var num1 = 2;
var num2 = 4;
console.log("The sum of num1 + num2 is : " + (num1 + num2));
console.log("The sub of num1 - num2 is : " + (num1 - num2));
console.log("The mul of num1 * num2 is : " + (num1 * num2));
console.log("The div of num1 / num2 is : " + (num1 / num2));
console.log("The value of num1 ** num2 is : " + (num1 ** num2));
console.log("The value of num1++  is : " + (num1++));
console.log("The value of ++num1  is : " + (++num1));
console.log("The value of num1--  is : " + (num1--));
console.log("The value of --num1  is : " + (--num1));

// Video 3
var string1 = "Lavish's Coding";
console.log(string1);
var string2 = '"He is a fabulous Developer and coder."';
console.log(string2);
console.log(string1 + " and " + string2);
var temp = `${string1} is a nice channel and ${string2}`;
console.log(temp);
console.log(string1.length);
console.log(string2.length);
console.log(temp.length);
var y = new String("This is a string")
console.log(y);
document.getElementById('content').innerHTML = '<h3> This is a heading </h3>';

// Video 4
var str = "This is a string";
console.log(str);
console.log(str.indexOf("is")); // 1st Method
var position = str.indexOf("is"); // 2nd Method
console.log(position);
var position = str.lastIndexOf("is"); // 3rd
console.log(position);
var substr = str.slice(1, 5); // 4th
console.log(substr);
console.log(str.substr(1, 7));  // 5th
console.log(str.replace('This', 'That'));  // 6th    
console.log(str.toUpperCase());  //  7th
console.log(str.toLowerCase());   //   8th
console.log(str.concat(" New String")); // 9th

// Video 5
let age = 2;
if (age > 18) {
    console.log("You can Drive car");
}
else if (age > 60) {
    console.log("You are too old");
}
else {
    console.log("You can't drive.");
}

const months_no = 4;
switch (months_no) {
    case 1:
        console.log("This is January");
        break;
    case 2:
        console.log("This is Feb");
        break;
    case 3:
        console.log("This is March");
        break;
    case 4:
        console.log("This is April");
        break;
    case 5:
        console.log("This is May");
        break;
    case 6:
        console.log("This is June");
        break;
    case 7:
        console.log("This is July");
        break;
    case 8:
        console.log("This is August");
        break;
    case 9:
        console.log("This is Sept");
        break;
    case 10:
        console.log("This is Oct");
        break;
    case 11:
        console.log("This is Nov");
        break;
    case 12:
        console.log("This is Dec");
        break;
    default:
        console.log("Enter valid Input");
        
        break;
}

// Video 6
let student = {            //Objects
    name: "Lavish Mittal",
    Roll_no: 126,
    Clg: "AKTU",
}
console.log(student);

let arr = [1, 2, 3.89, 'Lavish', undefined]
console.log(arr);
console.log(arr[2]);


// Video 7
function greet(names){
    console.log(names + " is a good boy.");
}

let names = "Lavish";
let names2 = "Lavish1";
let names3 = "Lavish2";
let names4 = "Lavish3";
greet(names);
greet(names2);
greet(names3);
greet(names4);

// Video 8

// alert("This is a Website!!");

// let name = prompt("What is your name ??, Guest")


// Video 9
// let i = 0;
for(let i=0; i<3; i++){
    console.log(i);
}

let friends = ["a", "b", "c", "d" ,"e"];
for (let index = 0; index < friends.length; index++) {    // For loop
    console.log(friends[index]);
}

friends.forEach(function f(elements) {                   // ForEach loop
   console.log(elements);
});

for (elements of friends) {                              // Forof loop
    console.log(elements);
}

let employee = {                                   // ForIn loop for objects
    name: "Lavish",
    clg: "AKTU" ,
    ROLL_no: 126
};

console.log(employee);

for ( key in employee) {
    console.log(`The ${key} of employee is ${employee[key]}`);   
}

let i=0;                                     // While loop
while (i<4) {
    console.log(i);
    i++;
}

let j= 0;                                // Do While loop
do {
    console.log(j);
    j++;
} while (j<34);