//How much time of my life have I been watching series on tv?

const lifespan = 80 * 525949; // 80 years in minutes
const seriesDurations = [
{
  title: "Game of thrones",
  days: 3,
  hours: 1,
  minutes: 0,
},
{
  title: "Sopranos",
  days: 3,
  hours: 14,
  minutes: 0,
},
{ 
title: 'The Wire',
days: 2,
hours: 12,
minutes: 0,
}
];
let total = 0;
for (let i = 0; i < seriesDurations.length; i++) {
let thisSerie = 0;
const currentDay = seriesDurations[i]; // game of thrones
const daysInMinutes = currentDay.days * 1440; // days times minutes in a single day = 4320
const hoursInMinutes = currentDay.hours * 60; // 60
const minutes = currentDay.minutes;
thisSerie = daysInMinutes + hoursInMinutes + minutes;
let thisPercentage = (thisSerie / lifespan) * 100;
console.log(`${seriesDurations[i].title} took  ${thisPercentage} of my life.`);
total = total + daysInMinutes + hoursInMinutes + minutes; // 4400 + 1440 + 840 + 0 total = 6680
}
const percentage = (total / lifespan) * 100;
console.log(`In total that is ${percentage} of my life`)