window.handleHomeRequest = () => {
  document.body.innerHTML = ` 
  <html>
  <head>
   <title> Meal Shering Website </title>
  </head>
  
  <body>
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
  </body>
  <html/>
  `;

  // if any links are added to the dom, use this function
  // make the router handle those links.
  router.updatePageLinks();
};
