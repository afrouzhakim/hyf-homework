const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];
console.log(danishWords);
const shortestItem = danishWords.reduce((item1,item2) => {
    if ( item1.length <= item2.length ){
        return item1;
    }
    else{
        return item2;
    }
    });
console.log(shortestItem);

