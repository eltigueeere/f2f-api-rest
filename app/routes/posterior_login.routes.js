module.exports = app =>{
    const usuario = require("../controllers/posterior_login.controller.js");
    
    app.get("/forCint/:nobreUsuario", usuario.findOneJoin);
    
}