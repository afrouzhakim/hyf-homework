let numbers = [1, 2, 3, 4];
let filteredNumbers = [];
let mappedNumbers = [];

filterArray = (arr) => {
    const filteredNumbers = arr.filter (index => index %2 !==0)
    const mappedNumbers = filteredNumbers.map (filteredNumbers => filteredNumbers * 2)
   return mappedNumbers; 
}

mappedNumbers = filterArray(numbers);
console.log("The doubled numbers are", mappedNumbers); 

