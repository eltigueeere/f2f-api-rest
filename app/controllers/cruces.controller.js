const Cruces = require("../models/cruces.model.js");

exports.create = (req, res) => {

    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    const cruces = new Cruces({
      id_tb_posturas1: req.body.id_tb_posturas1,
      id_apuesta: req.body.id_apuesta,
      id_usuario_V: req.body.id_usuario_V,
      color_Apuesta_Verde: req.body.color_Apuesta_Verde,
      monto_V: req.body.monto_V,
      id_usuario_R: req.body.id_usuario_R,
      color_Apuesta_Rojo: req.body.color_Apuesta_Rojo,
      monto_R: req.body.monto_R,
      fecha: req.body.fecha,
      nombre_V: req.body.nombre_V,
      nombre_R: req.body.nombre_R
    });
  

    Cruces.create(cruces, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Cruces."
        });
      else res.send(data);
    });
};

exports.findCruces = (req, res) => {
  Cruces.findCruces(req.params.id_usuario, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        /*res.status(404).send({
          message: `Not found usuario with id ${req.params.nobreUsuario}.`
        });*/
        res.send(data);
      } else {
        res.status(500).send({
          message: "Error retrieving Cruces with id " + req.params.id_usuario
        });
      }
    } else res.send(data);    
  });
};
