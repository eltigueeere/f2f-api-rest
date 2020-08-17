module.exports = app =>{
    const posturas = require("../controllers/postura.controller.js");
    app.post("/posturas", posturas.create);  
};