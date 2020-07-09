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
    <div class="header-img"></div>
  </main>

  <html/>
  `;

  // if any links are added to the dom, use this function
  // make the router handle those links.
  router.updatePageLinks();
};
