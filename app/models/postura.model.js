const sql = require("./db.js");

//constructor
const Postura = function(postura){
  //tb_postura
  /*this.id = postura.id;
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
  this.cerrado = postura.cerrado;*/
  this.id_tb_posturas1 = postura.id_tb_posturas1;
  this.id_apuesta = postura.id_apuesta;
  this.id_usuario_V = postura.id_usuario_V;
  this.color_Apuesta_Verde = postura.color_Apuesta_Verde;
  this.monto_V = postura.monto_V;
  this.id_usuario_R = postura.id_usuario_R;
  this.color_Apuesta_Rojo = postura.color_Apuesta_Rojo;
  this.monto_R = postura.monto_R;
  this.nombre_V = postura.nombre_V;
  this.nombre_R = postura.nombre_R;
  this.fecha = postura.fecha;
};

/*Postura.create = ( postura, result ) => {
    sql.query( "INSERT INTO tb_posturas1 SET ?", postura, ( err, res ) => {
        if( err ){
            console.log("error: ", err);
            result(err, null);
            return; 
        }
        console.log("Postura Guardada: ", { id: res.cerrado, ...postura });
        result(null, { id: res.cerrado, ...postura });
    });
};*/

Postura.create = ( postura, result ) => {
    //console.log("UPDATE tb_posturas1 SET id_usuario_V =" + "'" + postura.id_usuario_V + "'" + ", color_Apuesta_Verde = " + "'" + postura.color_Apuesta_Verde + "'" + ", monto_V = "  + "'" + postura.monto_V + "'" + ", fecha = "  + "'" + postura.fecha + "'" +  " WHERE tb_posturas1.id_usuario_R != " + "'" + postura.id_usuario_V + "'" + " AND tb_posturas1.id_apuesta = " + "'" +  postura.id_apuesta + "'" + " AND tb_posturas1.color_Apuesta_Verde != " + "'" +  postura.color_Apuesta_Verde + "'" +  " AND tb_posturas1.monto_R = " + "'" + postura.monto_V + "'" + " AND tb_posturas1.monto_V = '0' AND tb_posturas1.color_Apuesta_Verde = 0 ORDER BY tb_posturas1.fecha LIMIT 0, 1 ");
    sql.query( "UPDATE tb_posturas1 SET id_usuario_V =" + "'" + postura.id_usuario_V + "'" + ", color_Apuesta_Verde = " + "'" + postura.color_Apuesta_Verde + "'" + ", monto_V = "  + "'" + postura.monto_V + "'" + ", fecha = "  + "'" + postura.fecha + "'" + ", nombre_V =" + "'" + postura.nombre_V + "'" +  " WHERE ( tb_posturas1.id_usuario_R != " + "'" + postura.id_usuario_V + "'" + " AND tb_posturas1.id_apuesta = " + "'" +  postura.id_apuesta + "'" + " AND tb_posturas1.color_Apuesta_Verde != " + "'" +  postura.color_Apuesta_Verde + "'" +  " AND tb_posturas1.monto_R = " + "'" + postura.monto_V + "'" + " AND tb_posturas1.monto_V = '0' AND tb_posturas1.color_Apuesta_Verde = 0 ) ORDER BY tb_posturas1.fecha LIMIT 1",( err, res ) => {
        if( err ){
            console.log("error No EMMPRREJADA VERDE: ", err);
            result(err, null);
            return; 
        }
        console.log("Postura Guardada: ", { id: res.cerrado, ...postura });
        result(null, { id: res.cerrado, ...postura });
        
        console.log("--------------");
        console.log(res.affectedRows);
        console.log("--------------");
        if (res.affectedRows == 0 ) {
            sql.query( "INSERT INTO tb_posturas1 SET ?", postura, ( err1, res1 ) => {
                if( err1 ){
                    console.log("error: ", err1);
                    //result(err1, null);
                    //return; 
                }
                console.log("Postura Guardada: ", { id: res.cerrado, ...postura });
                //result(null, { id: res.cerrado, ...postura });
            });
        }
    });    
};

module.exports = Postura;