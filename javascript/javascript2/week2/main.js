onsole.log('Script loaded');

const products = getAvailableProducts();
const productsUl = document.querySelector('section.products ul');
console.log(productsUl);
const searchItem = document.getElementById('search');
const item = document.getElementById('searchFor');
const select=document.getElementById('choose');

function renderProducts(){
  
let avialbleProducts = products.filter(items => {
    
    for (let i=0; i<items.shipsTo.length;i++ ){
    
    if(item.value === items.name.toLowerCase() && select.value === items.shipsTo[i]){
        return true
    } else {
        return false
    }

    }
    
});  // Searching for products and Showing products that ships to country 

    avialbleProducts.forEach(product => {
        const li = document.createElement('li');

        let shipsToHTML = '';
        product.shipsTo.forEach(country => shipsToHTML += `<li>${country}</li>`);

        li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
        productsUl.appendChild(li);
    });

};





searchItem.addEventListener('click',renderProducts);




    
    
    