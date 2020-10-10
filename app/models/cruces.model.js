const sql = require("./db.js");

//constructor
const Cruces = function(cruces){
  //tb_posturas1
  this.id_tb_posturas1 = cruces.id_tb_posturas1;
  this.id_apuesta = cruces.id_apuesta;
  this.id_usuario_V = cruces.id_usuario_V;
  this.color_Apuesta_Verde = cruces.color_Apuesta_Verde;
  this.monto_V = cruces.monto_V;
  this.id_usuario_R = cruces.id_usuario_R;
  this.color_Apuesta_Rojo = cruces.color_Apuesta_Rojo;
  this.monto_R = cruces.monto_R;
  this.fecha = cruces.fecha;
  this.nombre_V = cruces.nombre_V;
  this.nombre_R = cruces.nombre_R;
};

/*Cruces.create = ( cruces, result ) => {
    sql.query( "INSERT INTO tb_usuarios SET ?", cruces, ( err, res ) => {
        if( err ){
            console.log("error: ", err);
            result(err, null);
            return; 
        }
        console.log("Usuario creado: ", { id: res.insertId, ...usuario });
        result(null, { id: res.insertId, ...usuario });
    });
};*/


Cruces.findCruces = (id_usuario, result) => {
  sql.query("SELECT tb_posturas1.nombre_V, tb_posturas1.nombre_R, tb_posturas1.monto_R, tb_posturas1.fecha, tb_apuestas.nombreVerde, tb_apuestas.nombreRojo FROM tb_posturas1 INNER JOIN tb_apuestas ON tb_posturas1.id_apuesta = tb_apuestas.id WHERE  tb_posturas1.id_usuario_V = " + "'" + id_usuario  + "'" + " OR tb_posturas1.id_usuario_R = " + "'" + id_usuario  + "'" + " AND tb_posturas1.status_pelea = '0' ORDER BY fecha ASC", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found customer: ", res);
      result(null, res);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });  
};

  module.exports = Cruces;