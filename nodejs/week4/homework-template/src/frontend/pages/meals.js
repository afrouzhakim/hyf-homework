window.handleMealsRequest = async () => {
  const mealsResponse = await fetch("/api/meals");
  const meals = await mealsResponse.json();
  
  document.body.innerHTML = `
  <header>
  <div class="header-nav-bar">
    <h3>Meal Sharing</h3>
    <ul>
      <li><a href="home" data-navigo>Home</a></li>
    </ul>
  </div>
  </header>
  <div class="bodycontainer">
  <div>select a meal to see more details and make a reservation:</div>
  <div class="meallist">
    <ul>
    ${meals.map(meal=> {
      return`
      <li>
      <a href="/meal/${meal.id}">
        <div>
          <span style="background-image:url('${meal.meal_url}');"></span>
        </div> 
      </a>
      <span><h3>${meal.price}kr</h3></span>
      <h3>
        ${meal.title}
      </h3>         
      </li>`
    }).join('')
  }
    </ul>
  </div>
  </div>`;
};
/**
 * <div class="bodycontainer">
  <h3>
  <ul>
  <li>${meals[0].id}</li>
  <li>${meals[0].title}</li>
  <li>${meals[0].description}</li>
  <li>${meals[0].location}</li>
  <li>${meals[0].when}</li>
  <li>${meals[0].max_reservations}</li>
  <li>${meals[0].price}</li>
  <li>${meals[0].created_date}</li>
  <li>${meals[0].meal_url}</li>
  </ul>
  </h3>
  </div> 
 */
  
  


 