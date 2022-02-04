const { response } = require('express').response;

const usuariosGet = (req, res = response) => {
  const {nombre, apikey} = req.query;

  res.json({
    message: 'Get - desde el controller',
    nombre,
    apikey
  });
};

const usuariosPost = (req, res = response) => {
  const { nombre, ciudad } = req.body;

  res.json({
    nombre: nombre,
    ciudad: ciudad,
  });
};

const usuariosPut = (req, res = response) => {
  const {id} = req.params;
  res.json({
    message: 'Put - desde el controller',
    id
  });
};

const usuariosDelete = (req, res = response) => {
  res.json({
    message: 'Delete - desde el controller',
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
};
