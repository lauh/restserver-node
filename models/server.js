const express = require('express');
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.apiUsuarios = '/api/usuarios';

    //Aquí irán los middlewares
    this.middlewares();


    //lanzamos las rutas de la aplicación
    this.routes();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // lectura y parseo a JSON del body
    this.app.use(express.json());

    // directorio público para cargar el front
    this.app.use(express.static('public'));
  }

  routes() {
   this.app.use(this.apiUsuarios, require('../routes/users'));
  }

  listen() {
    this.app.listen(this.port, () =>
      console.log(`listening on http://localhost:${this.port}`)
    );
  }
}

module.exports = Server;
