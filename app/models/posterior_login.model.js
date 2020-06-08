const sql = require("./db.js");

const Post_login = function(usuario){
    //tb_usuarios
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
    //tb_dinero
    this.id = usuario.id
    this.en_cuenta = usuario.en_cuenta
    this.fecha_up_encuenta = usuario.fecha_up_encuenta
    this.retiro = usuario.retiro
    this.fecha_up_retiro = usuario.fecha_up_retiro
    this.id_usuario = usuario.id_usuario

}

Post_login.findByNameJoin = (nobreUsuario, result) => {
    sql.query("SELECT * FROM tb_usuarios INNER JOIN tb_dinero_usuarios ON tb_dinero_usuarios.id_usuario = tb_usuarios.id WHERE tb_usuarios.nombreUsuario = " + "'" + nobreUsuario + "'", (err, res) => {
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

  module.exports = Post_login;