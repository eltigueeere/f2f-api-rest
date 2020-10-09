const sql = require("./db.js");

//constructor
const Apuesta = function(apuesta){
  //tb_usuarios
  this.pago = apuesta.pago;
  this.id = apuesta.id;
  this.id_usuario = apuesta.id_usuario;
  this.apuesta_color = apuesta.apuesta_color;
  this.cantidad = apuesta.cantidad;
  this.mil = apuesta.mil,
  this.dosMil = apuesta.dosMil,
  this.tresMil = apuesta.tresMil,
  this.cuatroMil = apuesta.cuatroMil,
  this.cincoMil = apuesta.cincoMil,
  this.otra = apuesta.otra,
  this.hora_hizo_postura = apuesta.hora_hizo_postura;
  this.id = apuesta.id;
  this.nombreVerde = apuesta.nombreVerde;
  this.nombreRojo = apuesta.nombreRojo;
  this.favoritoVerde = apuesta.favoritoVerde;
  this.favoritoRojo = apuesta.favoritoRojo;
  this.status = apuesta.status;
};

Apuesta.getAllJoin = result => {
    //sql.query("SELECT cat_pago.pago, tb_posturas.id, tb_posturas.id_usuario, tb_posturas.apuesta_color, tb_posturas.cantidad, tb_posturas.hora_hizo_postura, tb_apuestas.id AS idApuesta, tb_apuestas.nombreVerde, tb_apuestas.nombreRojo, tb_apuestas.favoritoVerde, tb_apuestas.favoritoRojo, tb_apuestas.`status`, tb_apuestas.imgV, tb_apuestas.imgR FROM tb_apuestas INNER JOIN tb_posturas ON tb_posturas.id_apuesta = tb_apuestas.id INNER JOIN cat_pago ON cat_pago.id = tb_apuestas.cat_pago WHERE tb_apuestas.`status` = 'activa' ORDER BY tb_apuestas.id ASC", (err, res) => {
      sql.query("SELECT tb_apuestas.id, tb_apuestas.nombreVerde, tb_apuestas.nombreRojo, tb_apuestas.favoritoVerde, tb_apuestas.favoritoRojo, tb_apuestas.`status`, tb_apuestas.imgV, tb_apuestas.imgR, cat_pago.pago, tb_apuestas.hora FROM tb_apuestas INNER JOIN cat_pago ON cat_pago.id = tb_apuestas.cat_pago WHERE tb_apuestas.`status` = 'activa'", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("apuesta: ", res);
      result(null, res);
    });
  };

  /*Apuesta.getAllJoinR = (id, result) => {
    //sql.query("SELECT cat_pago.pago, tb_posturas.id, tb_posturas.id_usuario, tb_posturas.apuesta_color, tb_posturas.cantidad, tb_posturas.hora_hizo_postura, tb_apuestas.id AS idApuesta, tb_apuestas.nombreVerde, tb_apuestas.nombreRojo, tb_apuestas.favoritoVerde, tb_apuestas.favoritoRojo, tb_apuestas.`status`, tb_apuestas.imgV, tb_apuestas.imgR FROM tb_apuestas INNER JOIN tb_posturas ON tb_posturas.id_apuesta = tb_apuestas.id INNER JOIN cat_pago ON cat_pago.id = tb_apuestas.cat_pago WHERE tb_apuestas.`status` = 'activa' ORDER BY tb_apuestas.id ASC", (err, res) => {
      sql.query("SELECT tb_apuestas.id, tb_apuestas.`status`, tb_apuestas.nombreVerde, tb_apuestas.nombreRojo, cat_pago.pago, tb_apuestas.favoritoVerde, tb_apuestas.favoritoRojo, tb_apuestas.imgV, tb_apuestas.imgR, tb_apuestas.hora, tb_posturas.id_usuario, tb_posturas.apuesta_color, SUM(tb_posturas.cantidadMil) AS mil, SUM(tb_posturas.cantidadDosMil) AS dosMil, SUM(tb_posturas.cantidadTresMil) AS tresMil, SUM(tb_posturas.cantidadCuatroMil) AS cuatroMil, SUM(tb_posturas.cantidadCincoMil) AS sincoMil, SUM(tb_posturas.cantidadOtra) AS otra, tb_posturas.hora_hizo_postura FROM cat_pago INNER JOIN tb_apuestas ON cat_pago.id = tb_apuestas.cat_pago INNER JOIN tb_posturas ON tb_posturas.id_apuesta = tb_apuestas.id WHERE tb_apuestas.id = " + "'" + id + "' and tb_apuestas.`status` = 'activa' GROUP BY apuesta_color ORDER BY tb_posturas.apuesta_color ASC", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("apuesta: ", res);
      result(null, res);
    });
  };*/

  
  Apuesta.getAllJoinR = (id, result) => {
    console.log("SELECT Count(IF(monto_V = '1000', 1, NULL)) AS milVerde, Count(IF(monto_V = '2000', 1, NULL)) AS dMilVerde, Count(IF(monto_V = '3000', 1, NULL)) AS tMilVerde, Count(IF(monto_V = '4000', 1, NULL)) AS kMilVerde, Count(IF(monto_V = '5000', 1, NULL)) AS cMilVerde, Count(IF(monto_R = '1000', 1, NULL)) AS milRojo, Count(IF(monto_R = '2000', 1, NULL)) AS dMilRojo, Count(IF(monto_R = '3000', 1, NULL)) AS tMilRojo, Count(IF(monto_R = '4000', 1, NULL)) AS kMilRojo, Count(IF(monto_R = '5000', 1, NULL)) AS cMilRojo, tb_apuestas.nombreVerde, tb_apuestas.nombreRojo, tb_apuestas.cat_pago, tb_apuestas.favoritoVerde, tb_apuestas.favoritoRojo, tb_apuestas.imgV, tb_apuestas.imgR, tb_apuestas.`status`, tb_apuestas.hora FROM tb_posturas1 INNER JOIN tb_apuestas ON tb_posturas1.id_apuesta = tb_apuestas.id WHERE id_apuesta = " + "'" + id + "'");
      sql.query("SELECT Count(IF(monto_V = '1000', 1, NULL)) AS milVerde, Count(IF(monto_V = '2000', 1, NULL)) AS dMilVerde, Count(IF(monto_V = '3000', 1, NULL)) AS tMilVerde, Count(IF(monto_V = '4000', 1, NULL)) AS kMilVerde, Count(IF(monto_V = '5000', 1, NULL)) AS cMilVerde, Count(IF(monto_R = '1000', 1, NULL)) AS milRojo, Count(IF(monto_R = '2000', 1, NULL)) AS dMilRojo, Count(IF(monto_R = '3000', 1, NULL)) AS tMilRojo, Count(IF(monto_R = '4000', 1, NULL)) AS kMilRojo, Count(IF(monto_R = '5000', 1, NULL)) AS cMilRojo, tb_apuestas.nombreVerde, tb_apuestas.nombreRojo, tb_apuestas.cat_pago, tb_apuestas.favoritoVerde, tb_apuestas.favoritoRojo, tb_apuestas.imgV, tb_apuestas.imgR, tb_apuestas.`status`, tb_apuestas.hora FROM tb_posturas1 INNER JOIN tb_apuestas ON tb_posturas1.id_apuesta = tb_apuestas.id WHERE id_apuesta = " + id, (err, res) => {
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