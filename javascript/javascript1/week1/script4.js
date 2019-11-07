let firstWord  =["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10"];
let secondWord =["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "b10"];
let randomNumber = Math.floor(Math.random() * 8) + 1;
let startup = firstWord[randomNumber] + secondWord[randomNumber];
console.log("The start up: \"" + startup + "\" contains " + startup.length + " characters.");