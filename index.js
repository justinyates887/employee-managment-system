const logo = require("asciiart-logo");
const loader = require('./bin/loaders');

(function () {
  const logoText = logo({ name: "Employee System Manager" }).render();

  console.log(logoText);

  loader.loadMainPrompts();
})();
