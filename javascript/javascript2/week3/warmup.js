//Called after 2.5 seconds
setTimeout(function() {console.log('practice time out')},2500);

// log out the stringToLog after delay seconds. 
function logByDelay (delay, stringToLog) {
  setTimeout(function() {console.log(`${stringToLog}`), delay}) 
}
logByDelay(5, "This string loged after 5 seconds.")
  
//log out the stringToLog after delay seconds by using button in HTML.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
let delay= 5;
let stringToLog="a";

let btn = document.getElementById("btn");
btn.addEventListener("click", buttonClick)

function buttonClick() {
  logByDelay(5, "Called after 5 seconds");
}

function logByDelay(delay, stringToLog) {
  setTimeout(() => {
          console.log(stringToLog);
      }, delay * 1000);
}

//planet log function
const earthLogger = function () {
  console.log ("earth planet");
};
const saturnLogger = function () {
  console.log ("saturn planet");
};
function planetLogFunction(func) {
  func();
}
planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

//Log location
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}


let locationbtn = document.getElementById("location");
locationbtn.addEventListener("click", locationbtnClick);

function locationbtnClick () {
  navigator.geolocation.getCurrentPosition(success, error, options);
};

//run after delay
function runAfterDelay(delay, callback) {
  setTimeout(callback, delay*1000) 
};
runAfterDelay(4, function(){console.log("should be run after 4 seconds")})

//check if we had double clicked
/*doubleCbtn = document.getElementById("doubleC");
doubleCbtn.addEventListener("ondblclick", showMessage());*/
function showMessage() {
  alert("Button is double clicked.");
}

//joke creator
function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  if (shouldTellFunnyJoke) {
      logFunnyJoke();
  } else {
      logBadJoke();
  }
};

function logFunnyJoke() {
  const jokes = ["FunnyJoke1", "FunnyJoke2", "FunnyJoke3", "FunnyJoke4", "FunnyJoke5"];
  let index = Math.floor(Math.random() * jokes.length);
  console.log(jokes[index]);
}

function logBadJoke() {
  const jokes = ["BadJoke1", "BadJoke2", "BadJoke3", "BadJoke4", "BadJoke5"];
  let index = Math.floor(Math.random() * jokes.length);
  console.log(jokes[index]);
}
jokeCreator(false, logFunnyJoke, logBadJoke);

//Function as a variable
const firstF = () => console.log("This is the First Function");
const secondF = () => console.log("This is the Second Function");
const thirdF = () => console.log("This is the Third Function");
const funcArray = [firstF, secondF, thirdF];
funcArray.forEach(item => item());