window.handleMealRequest = async(params) => {
  const mealsResponse = await fetch("/api/meals");
  const meals = await mealsResponse.json();
  const index = (params.id)-1;
  //const title = meals[index].title;
  //const foodImageUrl = meals[index].meal_url;
  document.body.innerHTML = `
  <head>
<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
  <header>
  <div class="header-nav-bar">
    <h3>${meals[index].title}</h3>
    <ul>
      <li><a href="home" data-navigo>Home</a></li>
      <li><a href="meals" data-navigo>Meals</a></li>
    </ul>
  </div>
  </header>
<body>
  
<div class="bodycontainer row">
    <div class="meallist column" style="background-color:#aaa;">
      <div>
      <span style="background-image:url('${meals[index].meal_url}');"></span>
      </div>
    </div>
    <div id="resarvationform" class="formcontainer column">
    <form  action= "../../api/reservations" method="post">
    <label for="number_of_guests">number of guests:</label><br>
    <input type="text" id="number_of_guests" name="number_of_guests"><br><br>
    <label for="meal_id">meal number:</label><br>
    <input type="number" id="meal_id" name="meal_id"><br><br>
    <label for="created_date">created date:</label><br>
    <input type="datetime" id="created_date" name="created_date"><br><br>
    <label for="guest_name">guest name:</label><br>
    <input type="text" id="guest_name" name="guest_name"><br><br>
    <label for="guest_phonenumber">guest phonenumber:</label><br>
    <input type="text" id="guest_phonenumber" name="guest_phonenumber"><br><br>
    <label for="guest_email">guest email:</label><br>
    <input type="text" id="guest_email" name="guest_email"><br><br>
    <input type="submit" value="Submit">
  </form>
    </div>
    <div class="column" style="background-color:#ccc;">
      <h2>Column 3</h2>
      <p>Some text..</p>
    </div>
</div>

















  <div class="bodycontainer">
    <div class="meallist column">
    <div>
    <span style="background-image:url('${meals[index].meal_url}');"></span>
    </div>
    <div id="resarvationform" class="formcontainer column">
    <form  action= "../../api/reservations" method="post">
      <label for="number_of_guests">number of guests:</label><br>
      <input type="text" id="number_of_guests" name="number_of_guests"><br><br>
      <label for="meal_id">meal number:</label><br>
      <input type="number" id="meal_id" name="meal_id"><br><br>
      <label for="created_date">created date:</label><br>
      <input type="datetime" id="created_date" name="created_date"><br><br>
      <label for="guest_name">guest name:</label><br>
      <input type="text" id="guest_name" name="guest_name"><br><br>
      <label for="guest_phonenumber">guest phonenumber:</label><br>
      <input type="text" id="guest_phonenumber" name="guest_phonenumber"><br><br>
      <label for="guest_email">guest email:</label><br>
      <input type="text" id="guest_email" name="guest_email"><br><br>
      <input type="submit" value="Submit">
    </form>
  </div>
  </div>
  </div>
  </div>
  </body>`
};


