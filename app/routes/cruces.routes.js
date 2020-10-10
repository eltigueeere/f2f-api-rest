module.exports = app =>{
    const usuario = require("../controllers/cruces.controller.js");

    app.get("/cruces/:id_usuario", usuario.findCruces);
    
};