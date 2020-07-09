window.handleHomeRequest = () => {
  document.body.innerHTML = ` 
  <header>
  <div class="header-nav-bar">
    <h1>Meal Sharing</h1>
    <ul>
      <li><a href="home" data-navigo>Home</a></li>
      <li><a href="meals" data-navigo>Meals</a></li>
    </ul>
  </div>
  </header>
  <main>
    <div class="slidercontainer">
      <img src= "https://news.uchicago.edu/sites/default/files/styles/full_width/public/images/2018-12/shutterstock_427193719_0.jpg?itok=e3RwipKT">
    </div>
  </main>
  `;

  // if any links are added to the dom, use this function
  // make the router handle those links.
  router.updatePageLinks();
};
