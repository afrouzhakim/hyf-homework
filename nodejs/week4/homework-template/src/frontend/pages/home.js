window.handleHomeRequest = () => {
  document.body.innerHTML = ` 
  <header>
    <div class="menu">
    <div class="logo">
    <a href="/" data-navigo><h1>Meal Sharing</h1></a>
    </div>
      <ul>
        <a href="meals" data-navigo>Meals</a>
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
