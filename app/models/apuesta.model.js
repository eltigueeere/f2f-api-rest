const sql = require("./db.js");

//constructor
const Apuesta = function(apuesta){
  //tb_usuarios
  this.pago = apuesta.pago;
  this.id = apuesta.id;
  this.id_usuario = apuesta.id_usuario;
  this.apuesta_color = apuesta.apuesta_color;
  this.cantidad = apuesta.cantidad;
  this.hora_hizo_postura = apuesta.hora_hizo_postura;
  this.id = apuesta.id;
  this.nombreVerde = apuesta.nombreVerde;
  this.nombreRojo = apuesta.nombreRojo;
  this.favoritoVerde = apuesta.favoritoVerde;
  this.favoritoRojo = apuesta.favoritoRojo;
  this.status = apuesta.status;
};

Apuesta.getAllJoin = result => {
    sql.query("SELECT cat_pago.pago, tb_posturas.id, tb_posturas.id_usuario, tb_posturas.apuesta_color, tb_posturas.cantidad, tb_posturas.hora_hizo_postura, tb_apuestas.id AS idApuesta, tb_apuestas.nombreVerde, tb_apuestas.nombreRojo, tb_apuestas.favoritoVerde, tb_apuestas.favoritoRojo, tb_apuestas.`status`, tb_apuestas.imgV, tb_apuestas.imgR FROM tb_apuestas INNER JOIN tb_posturas ON tb_posturas.id_apuesta = tb_apuestas.id INNER JOIN cat_pago ON cat_pago.id = tb_apuestas.cat_pago WHERE tb_apuestas.`status` = 'activa' ORDER BY tb_apuestas.id ASC", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("apuesta: ", res);
      result(null, res);
    });
  };

  module.exports = Apuesta;