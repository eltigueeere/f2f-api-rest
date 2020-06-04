const sql = require("./db.js");

//constructor
const Usuario = function(usuario){
  this.id = usuario.id;
  this.nombre = usuario.nombre;
  this.apellido = usuario.apellido;
  this.genero = usuario.genero;
  this.dia = usuario.dia;
  this.mes = usuario.mes;
  this.year = usuario.year;
  this.telefono = usuario.telefono;
  this.correo = usuario.correo;
  this.nombreUsuario = usuario.nombreUsuario;
  this.contrasena = usuario.contrasena;
  this.fechaUp = usuario.fechaUp;
  this.rolUsuario   = usuario.rolUsuario;
};

Usuario.create = ( usuario, result ) => {
    sql.query( "INSERT INTO tb_usuarios SET ?", usuario, ( err, res ) => {
        if( err ){
            console.log("error: ", err);
            result(err, null);
            return; 
        }
        console.log("Usuario creado: ", { id: res.insertId, ...usuario });
        result(null, { id: res.insertId, ...usuario });
    });
};

Usuario.findByName = (nobreUsuario, result) => {
    sql.query("SELECT * FROM tb_usuarios WHERE nombreUsuario = " + "'" + nobreUsuario + "'", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found customer: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found Customer with the id
      result({ kind: "not_found" }, null);
    });
};

Usuario.findByTelefono = (telefonoUsuario, result) => {
  sql.query("SELECT * FROM tb_usuarios WHERE telefono = " + "'" + telefonoUsuario + "'", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found customer: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });  
};

  Usuario.getAll = result => {
    sql.query("SELECT * FROM tb_usuarios", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("usuarios: ", res);
      result(null, res);
    });
  };

  module.exports = Usuario;