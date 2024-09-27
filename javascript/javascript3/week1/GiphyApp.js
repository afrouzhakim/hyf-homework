const APIkey = "gnSi36BVDD4aMJ37FgHilLy6mrQ811R3"
let button = document.getElementById("search");
button.addEventListener("click", fetchData);

function fetchData() {
    let model= document.getElementById("model").value;
    let number = document.getElementById("number").value;

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=gnSi36BVDD4aMJ37FgHilLy6mrQ811R3&q=${model}&limit=${number}`)
        .then(Response => Response.json())
        .then(data => {
            renderOutput(data);
        })
}

function renderOutput(data) {
    let container = document.getElementById("container");
    data.data.map(item => {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = item.images.preview_gif.url;
        container.appendChild(div);
        div.appendChild(img);
    });
}