let wide;
let deep;
let high;
let volumeInMeters;
let gardenSizeInM2;
let housePrice;
//Peter
wide = 8;
deep = 10;
high = 10;
gardenSizeInM2 = 100;
volumeInMeters= wide * deep * high;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
peterHouseCost =2500000 ;
if (peterHouseCost > housePrice) {
        console.log("Peter you paied too much.");
}  else {
        console.log("Peter you paied too little.");
}
// Julia
wide = 5;
deep = 11;
high = 8;
gardenSizeInM2 = 70;
volumeInMeters= wide * deep * high;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
juliaHouseCost =1000000;
if (juliaHouseCost > housePrice) {
    console.log("Julia you paied too much");
}  else {
    console.log("Julia you paied too little.");
}