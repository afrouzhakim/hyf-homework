// The function has to return the time it will take to arrive at your destination
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function timeToArrive (travelInformation) {
let time = travelInformation.destinationDistance / travelInformation.speed;
return time;
}
let calculatedTime=timeToArrive(travelInformation);
let hour = Math.floor(calculatedTime);
let minute = Math.floor((calculatedTime-hour)*60);
console.log(`${hour} hours and ${minute} minutes`);