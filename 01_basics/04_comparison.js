/*
== Check velue
=== check velue and data type
=> !== not equal velue and not equal datatype
*/

console.log(null == 0); // false
console.log(undefined == 0); // false

console.log(null >= 0); // true

// Data type

// Non primitive
// Array, Objects, Function

const name = ["PK", "SD", "JD"];

const myObj = {
    name : "SD",
    age : 21,
}

const myFunction = function(){
    console.log("Hello World");
}

// check Typeof

console.log(typeof name); //object
console.log(typeof myObj); //object
console.log(typeof myFunction); //function