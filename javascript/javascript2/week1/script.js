let wordArray = [];
function addword () {
    wordArray.push(document.getElementById('inputword').value);
    console.log(wordArray);
    return wordArray;
}
function shortestword() {
    let array = addword();
    let lengthArray = [];
    for (let i=0; i<array.length; i++) {
        lengthArray [i] = array[i].length;
    }
    let index = 0;
    let min = lengthArray [0];
    for (i=0; i<array.length; i++) {
        if (lengthArray [i] < min) {
            min = lengthArray [i];
            index = i;
        }
    }
    alert("shortest word is : " + array[index]);
}


