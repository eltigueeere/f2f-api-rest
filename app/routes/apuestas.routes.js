module.exports = app =>{
    const apuesta = require("../controllers/apuestas.controller.js");
    
    app.get("/apuestas/", apuesta.findAllJoin);
    
}