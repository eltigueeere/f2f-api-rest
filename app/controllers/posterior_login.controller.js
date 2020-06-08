const Post_login = require("../models/posterior_login.model.js");

exports.findOneJoin = (req, res) => {
  Post_login.findByNameJoin(req.params.nobreUsuario, (err, data) => {
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