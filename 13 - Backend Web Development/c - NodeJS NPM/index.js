/*

//npmjs.com - sillyname. to install "npm i sillyname"

//var generateName = require("sillyname");

//this import just works because package.json has a type of module (ecmascript)
import generateName from "sillyname";

var sillyName = generateName();

console.log("My name is " + sillyName + "."); 

//console.log(`My name is ${sillyName}.`);

*/

import superheroes from "superheroes";

const name = superheroes.random();

console.log(`I am ${name}`);