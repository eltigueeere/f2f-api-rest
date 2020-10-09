module.exports = app =>{
    const posturas = require("../controllers/posturas_roja.controller.js");
    app.post("/posturasRoja", posturas.create);  
};