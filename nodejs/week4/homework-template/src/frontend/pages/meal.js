window.handleMealRequest = (params) => {
  document.body.innerHTML = `
  <h1>Meal with id : ${params.id}</h1>
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
      </form>`;

// const mealResponse = await fetch("/api/meals/"+`${params.id}`);
// const meal = await mealResponse.json();
// console.log(meal);
// const mealTitle = meal.map(mealItem => mealItem.title);
// const p = document.querySelector("p");
// p.innerHTML = `The meal with the selected id is : ${mealTitle}`;
};

// const section = document.querySelector("section");
// const form = document.createElement("form");
//   form.setAttribute("id","postForm");
//   form.setAttribute("action","/api");
//   form.setAttribute("method","POST");
//   lable1 =document.createElement("LABEL")
//   lable1.htmlFor= "name"
//   lable1.innerHTML = "Name :"
//   const input1 = document.createElement("input");
//   input1.setAttribute("type","text");
//   input1.setAttribute("name","name");
//   input1.setAttribute("class","inputName");
//   lable1.appendChild(input1)
//   lable3 =document.createElement("LABEL")
//   lable3.htmlFor= "phoneNum"
//   lable3.innerHTML =  "Phone number :"
//   const input3 = document.createElement("input");
//   input3.setAttribute("type","text");
//   input3.setAttribute("name","phoneNum");
//   input3.setAttribute("class","inputPhone");
//   lable3.appendChild(input3)
//   lable4 =document.createElement("LABEL")
//   lable4.htmlFor= "emailAdd"
//   lable4.innerHTML = " Email Address :"
//   const input4 = document.createElement("input");
//   input4.setAttribute("type","text");
//   input4.setAttribute("name","emailAdd");
//   input1.setAttribute("class","inputEmail");
//   lable4.appendChild(input4)
//   const submitBtn = document.createElement("button"); //input element, Submit button
//   submitBtn.setAttribute("type","submit");
//   submitBtn.setAttribute("onclick", "postData()");
//   submitBtn.setAttribute("value","Submit");
//   form.appendChild(lable1);
//   form.appendChild(lable3);
//   form.appendChild(lable4);
//   form.appendChild(submitBtn);
//   section.appendChild(form);
