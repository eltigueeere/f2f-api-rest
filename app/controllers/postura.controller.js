const Postura = require("../models/postura.model.js");

exports.create = (req, res) => {

    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    const postura = new Postura({
      id:req.body.id,
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
      cerrado:req.body.cerrado,
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