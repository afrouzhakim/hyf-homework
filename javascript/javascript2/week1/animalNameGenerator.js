let name;
const spiritAnimal = ["spiritAnimal1", "spiritAnimal2", "spiritAnimal3", "spiritAnimal4", "spiritAnimal5", "spiritAnimal6", "spiritAnimal7", "spiritAnimal8", "spiritAnimal9", "spiritAnimal10"];

function button() {
    if (document.getElementById("event").value === "1") {
      combine();
    }
  }
  
  function hover() {
    if (document.getElementById("event").value === "2") {
      combine();
    }
  }
  
  function input() {
    myName();
    if (document.getElementById("event").value === "3") {
      combine();
    }
  }
  
  function combine() {
    if (name) {
      let spiritName = spiritAnimal[Math.floor(Math.random() * spiritAnimal.length)];
      document.getElementById("spirit-name").innerHTML = `${name} - ${spiritName}`;
    }
    else {
      document.getElementById("spirit-name").innerHTML = "Please enter your name first";
    }
  }
  
  let userName = document.getElementById("name");
  userName.addEventListener("click", button);
  userName.addEventListener("mouseover", hover);
  userName.addEventListener("input", input);
  
  function myName() {
    name = document.getElementById("name").value;
  }

