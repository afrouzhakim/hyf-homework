
let numberArray = [];
function addnumber () {
    numberArray.push(Number(document.getElementById('inputnumber').value));
    console.log(numberArray);
    return numberArray;
}
function average() {
    let array = addnumber();
    let lengthArray = array.length;
    let sum = 0;
    for (let i=0; i<lengthArray; i++) {
        sum += array[i];
    }
    let avg = sum / lengthArray; 
    alert("Average of the array is : " + avg);
}
function median() {
    let points = addnumber();
    let lengthArray = points.length;
    let avg = 0;
    let median = 0;
    points = points.sort(function(a, b){return a - b});
    if (lengthArray % 2 === 0) {
        avg = points[lengthArray / 2] + points[lengthArray / 2 - 1];
        median = avg /2;
    }else {
        median = points [(lengthArray-1)/2 ];
    }
    alert("Median of the array is : " + median);
}

function averageandmedian () {
    const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];
    let sum = 0;
    let lengthArray = housePrices.length;
    let median = 0;
    for (let i = 0; i < lengthArray; i++) {
        sum = sum + housePrices[i];
    }
    let average = sum / lengthArray;
    if (lengthArray % 2 === 0) {
        median = (housePrices[arrayLength / 2] + housePrices[lengthArray / 2 - 1])/2;
    } else {
        median = housePrices[(lengthArray - 1) / 2];
    }

    let obj = { 'average': average, 'median': median }; 
    alert (`Average of array is : ${obj.average} and Median of array is : ${obj.median}`);
}