const spiritAnimalString = ["spiritAnimal1", "spiritAnimal2", "spiritAnimal3", "spiritAnimal4", "spiritAnimal5", "spiritAnimal6", "spiritAnimal7", "spiritAnimal8", "spiritAnimal9", "spiritAnimal10"];
function getusername () {
    let username = document.getElementById ("username").value;
    let random = Math.round(Math.random()*10);
    console.log (random);
    alert(`${username} - ${spiritAnimalString[random]}`)
}