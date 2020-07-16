window.handleHomeRequest = () => {
  document.body.innerHTML = ` 
  <header>
  <div>
    <h3>Meal Sharing</h3>
    <ul>
      <li><a href="home" data-navigo>Home</a></li>
      <li><a href="meals" data-navigo>Meals</a></li>
    </ul>
  </div>
  </header>
  <main>
    <div class="bannercontainer">
      <img src= "https://news.uchicago.edu/sites/default/files/styles/full_width/public/images/2018-12/shutterstock_427193719_0.jpg?itok=e3RwipKT">
    </div>
  </main>
  `
};
