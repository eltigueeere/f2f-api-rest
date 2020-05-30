module.exports = app =>{
    const usuario = require("../controllers/usuario.controller.js");

    app.post("/usuario", usuario.create);
  
    app.get("/usuario", usuario.findAll);
  
    app.get("/usuario/:nobreUsuario", usuario.findOne);
};