/*const productNames = getAvailableProducts();
function renderProducts (productNames) {
    let ulvalue = document.getElementById("test")
    for (let i = 0; i< productNames.length; i++) {
        const Ele = document.createElement ("LI");
        Ele.innerHTML = `<li style="circle"> ${productNames[i].name} </li>`;
        ulvalue.appendChild(Ele);
    }
}
renderProducts (productNames);
*/

const products = getAvailableProducts();
const myList = document.getElementById("test");
function prepareProduct(product) {
  const li = document.createElement("li");
  const propertiesList = document.createElement("ul");
  const idLi = document.createElement("li");
  idLi.textContent = product.id;
  propertiesList.appendChild(idLi);
  const nameLi = document.createElement("li");
  nameLi.textContent = product.name;
  propertiesList.appendChild(nameLi);
  /*   const countriesList = document.createElement("ul");
  const countryItem = document.createElement("li");
  for (let i = 0; i < product.shipsTo.length; i++) {
    const country = product.shipsTo[i];
  }
 */
  li.appendChild(propertiesList);
  myList.appendChild(li);
}
for (let i = 0; i < products.length; ++i) {
  const product = products[i];
  prepareProduct(product);
}
