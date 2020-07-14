window.handleMealRequest = (params) => {
  document.body.innerHTML = `
  <h1>Meal with id : ${params.id}</h1>
  <h1>Meal with id : ${params.id}</h1>
  <div class="bodycontainer">
  
<form action= "../../api/reservations" method="post">
        <label for="id">id:</label>
        <input type="number" id="id" name="id"><br><br>
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
        </div>
        `;
};

