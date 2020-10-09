const express = require("express");
const bodyParser = require("body-parser");
var cors = require('cors');

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json(),cors());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to api-rest for f2f webApp." });
});

//add justo despues 
//require("./app/routes/customer.routes.js")(app);
require("./app/routes/posturas_roja.routes.js")(app);
require("./app/routes/posturas.routes.js")(app);
require("./app/routes/usuarios.routes.js")(app);
require("./app/routes/posterior_login.routes.js")(app);
require("./app/routes/apuestas.routes.js")(app);
// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});