window.handleMealsRequest = async () => {
  document.body.innerHTML = `
  <h1>Meals</h1>
  <ul></ul>
  <p></p>`;


  // make sure the backend api works before working with it here
  const mealsResponse = await fetch("/api/meals");
  const meals = await mealsResponse.json();
  console.log(meals);
  const ul = document.querySelector("ul")
  meals.forEach(meal => {
    const li = document.createElement("li");
    li.innerHTML = `${meal.title}, ${meal.description}`
    ul.appendChild(li)
  });
  document.body.appendChild(ul);
};
