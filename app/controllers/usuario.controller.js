const Usuario = require("../models/usuario.model.js");

exports.create = (req, res) => {

    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    const usuario = new Usuario({
      id:req.body.id,
      nombre:req.body.nombre,
      apellido:req.body.apellido,
      genero:req.body.genero,
      dia:req.body.dia,
      mes:req.body.mes,
      year:req.body.year,
      telefono:req.body.telefono,
      correo:req.body.correo,
      nombreUsuario:req.body.nombreUsuario,
      contrasena:req.body.contrasena,
      fechaUp:req.body.fechaUp,
      rolUsuario:req.body.rolUsuario,
    });
  

    Usuario.create(usuario, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Usuario."
        });
      else res.send(data);
    });
};

exports.findAll = (req, res) => {
  Usuario.getAll((err, data) => {
        if (err)
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving Usuarios."
        });
        else res.send(data);
    });
};

exports.findOne = (req, res) => {
    Usuario.findByName(req.params.nobreUsuario, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          /*res.status(404).send({
            message: `Not found usuario with id ${req.params.nobreUsuario}.`
          });*/
          res.send(data);
        } else {
          res.status(500).send({
            message: "Error retrieving Usuario with id " + req.params.nobreUsuario
          });
        }
      } else res.send(data);
    });
}; 


exports.findOneTelefono = (req, res) => {
  Usuario.findByTelefono(req.params.telefonoUsuario, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        /*res.status(404).send({
          message: `Not found usuario with id ${req.params.nobreUsuario}.`
        });*/
        res.send(data);
      } else {
        res.status(500).send({
          message: "Error retrieving Usuario with id " + req.params.telefonoUsuario
        });
      }
    } else res.send(data);    
  });
};
