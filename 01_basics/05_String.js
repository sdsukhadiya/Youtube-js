const name = "Sahil"
const fathrName = "Dipesh"

console.log(`hello my name is ${name} My Father nama is ${fathrName}`);


const gameName = new String('SuperMan')

// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toLocaleUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("r"));


const newString = gameName.substring(0, 5)
// console.log(newString);

const newStringOne = "    Sahil    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://bitfront.com/bitfront%20infotech";

console.log(url.replace('%20', '-'));

console.log(url.includes('bitfront1')); // true


/*
concat(A1,A2)
slice(.., end)
split(, - )
*/