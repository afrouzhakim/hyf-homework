const dogYearOfBirth =2000;
const dogYearFuture = 2020;
let dogYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = true;
if (shouldShowResultInDogYears) {
    console.log("Your dog will be "+ dogYear + " human years old in " + dogYearFuture )
}       else {
    console.log("Your dog will be "+ dogYear/7 + " dog years old in " + dogYearFuture )
}