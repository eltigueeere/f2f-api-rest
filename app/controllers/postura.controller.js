const Postura = require("../models/postura.model.js");

exports.create = (req, res) => {

    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    const postura = new Postura({
      /*id:req.body.id,
      id_usuario:req.body.id_usuario,
      id_apuesta:req.body.id_apuesta,
      apuesta_color:req.body.apuesta_color,
      cantidadMil:req.body.cantidadMil,
      cantidadDosMil:req.body.cantidadDosMil,
      cantidadTresMil:req.body.cantidadTresMil,
      cantidadCuatroMil:req.body.cantidadCuatroMil,
      cantidadCincoMil:req.body.cantidadCincoMil,
      cantidadOtra:req.body.cantidadOtra,
      hora_hizo_postura:req.body.hora_hizo_postura,
      cerrado:req.body.cerrado,*/
      id_tb_posturas1:req.body.id_tb_posturas1,
      id_apuesta:req.body.id_apuesta,
      id_usuario_V:req.body.id_usuario_V,
      color_Apuesta_Verde:req.body.color_Apuesta_Verde,
      monto_V:req.body.monto_V,
      id_usuario_R:req.body.id_usuario_R,
      color_Apuesta_Rojo:req.body.color_Apuesta_Rojo,
      monto_R:req.body.monto_R,
      nombre_V:req.body.nombre_V,
      nombre_R:req.body.nombre_R,
      fecha:req.body.fecha
    });
  

    Postura.create(postura, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Usuario."
        });
      else res.send(data);
    });  
};