window.handleMealRequest = async(params) => {
  const mealsResponse = await fetch("/api/meals");
  const meals = await mealsResponse.json();
  const index = (params.id)-1;
  //const title = meals[index].title;
  //const foodImageUrl = meals[index].meal_url;
  document.body.innerHTML = `
  <header>
  <div class="header-nav-bar">
    <h3>${meals[index].title}</h3>
    <ul>
      <li><a href="home" data-navigo>Home</a></li>
      <li><a href="meals" data-navigo>Meals</a></li>
    </ul>
  </div>
  </header>
  



  
  <div class="bodycontainer">
    <div class="meallist">
      <div>
        <span style="background-image:url('${meals[index].meal_url}');"></span>
      </div>
    </div>
  </div>







    <form action= "../../api/reservations" method="post">
      <label for="number_of_guests">number of guests:</label>
      <input type="text" id="number_of_guests" name="number_of_guests"><br><br>
      <label for="meal_id">meal number:</label>
      <input type="number" id="meal_id" name="meal_id"><br><br>
      <label for="created_date">created date:</label>
      <input type="datetime" id="created_date" name="created_date"><br><br>
      <label for="guest_name">guest name:</label>
      <input type="text" id="guest_name" name="guest_name"><br><br>
      <label for="guest_phonenumber">guest phonenumber:</label>
      <input type="text" id="guest_phonenumber" name="guest_phonenumber"><br><br>
      <label for="guest_email">guest email:</label>
      <input type="text" id="guest_email" name="guest_email"><br><br>
      <input type="submit" value="Submit">
    </form>
  </div>`
};

