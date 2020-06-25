const Apuesta = require("../models/apuesta.model.js");

exports.create = (req, res) => {

    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    const apuesta = new Apuesta({
      pago:req.body.pago,
      id:req.body.id,
      id_usuario:req.body.id_usuario,
      apuesta_color:req.body.apuesta_color,
      cantidad:req.body.cantidad,
      hora_hizo_postura:req.body.hora_hizo_postura,
      id:req.body.id,
      nombreVerde:req.body.nombreVerde,
      nombreRojo:req.body.nombreRojo,
      favoritoVerde:req.body.favoritoVerde,
      favoritoRojo:req.body.favoritoRojo,
      statu:req.body.statu,
      imgV:req.body.imgV,
      imgR:req.body.imgR,
    });
    
    Apuesta.create(usuario, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the apuesta."
        });
      else res.send(data);
    });
  };


exports.findAllJoin = (req, res) => {
  Apuesta.getAllJoin((err, data) => {
        if (err)
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving Apuesta."
        });
        else res.send(data);
        
    });
};

