let red = document.getElementById("red");
let blue = document.getElementById("blue");
let green = document.getElementById("green");

function translateOneByOne() {
    moveElement(red, { x: 20, y: 300 })
    .then(() => {
    console.log('Red circle moved');
    moveElement(blue, { x: 400, y: 300 })

    .then(() => {
    console.log('Blue circle moved');
    moveElement(green, { x: 400, y: 20 })
    
    .then(() => {
    console.log('Green circle moved');
    });
    });
    });

}


function translateAllAtOnce() {
    Promise.all([
        moveElement(red, { x: 20, y: 300 }),
        moveElement(blue, { x: 400, y: 300 }),
        moveElement(green, { x: 400, y: 20 })
    ]).then(() => {
        console.log('All elements moved');
    })
}

translateOneByOne()
//translateAllAtOnce();