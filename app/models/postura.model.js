const sql = require("./db.js");

//constructor
const Postura = function(postura){
  //tb_postura
  this.id = postura.id;
  this.id_usuario = postura.id_usuario;
  this.id_apuesta = postura.id_apuesta;
  this.apuesta_color = postura.apuesta_color;
  this.cantidadMil = postura.cantidadMil;
  this.cantidadDosMil = postura.cantidadDosMil;
  this.cantidadTresMil = postura.cantidadTresMil;
  this.cantidadCuatroMil = postura.cantidadCuatroMil;
  this.cantidadCincoMil = postura.cantidadCincoMil;
  this.cantidadOtra = postura.cantidadOtra;
  this.hora_hizo_postura = postura.hora_hizo_postura;
  this.cerrado = postura.cerrado;
};

Postura.create = ( postura, result ) => {
    sql.query( "INSERT INTO tb_posturas SET ?", postura, ( err, res ) => {
        if( err ){
            console.log("error: ", err);
            result(err, null);
            return; 
        }
        console.log("Postura Guardada: ", { id: res.cerrado, ...postura });
        result(null, { id: res.cerrado, ...postura });
    });
};



module.exports = Postura;