const mealSharingApp = require('express')();
mealSharingApp.get('/meals', require("./routes/meals.js"));
mealSharingApp.get('/meal', require("./routes/meal.js"));
mealSharingApp.get('/cheapmeals', require("./routes/cheapmeals.js"));
mealSharingApp.get('/largemeals', require("./routes/largemeals.js"));


mealSharingApp.listen(5000, function(){
    console.log('Server started in 5000!');
})