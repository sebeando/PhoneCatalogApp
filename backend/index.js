'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3900;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/api_rest_react', { useNewUrlParser: true})
    .then(() =>{
        console.log('Conexion Exitosa');

        //Crear servidor y escuchar peticiones:

        app.listen(port, () =>{
            console.log("Servidor corriendo en http://localhost:" + port);
        });

});

