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

