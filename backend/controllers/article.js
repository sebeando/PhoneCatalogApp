'use strict'
var validator = require('validator');
var Article = require('../models/article');
var path = require('path')
var fs = require ('fs');

var controller = {

    save: (req, res) => {
        //Recoger datos:
        var params = req.body;

        //Validar
        try{
            var validate_title = !validator.isEmpty(params.title);
            var validate_price = !validator.isEmpty(params.price);
            var validate_description = !validator.isEmpty(params.description);
            var validate_color = !validator.isEmpty(params.color);
        }catch(err){
            return res.status(200).send({
                status: 'error',
                message: 'Faltan Datos por enviar'
            });
        }

        if(validate_title && validate_price && validate_description && validate_color){
            //Crear Objeto a guardar:
            var article = new Article();

            //Asignar Valores:
            article.title = params.title;
            article.price = params.price;
            article.description = params.description;
            article.color = params.color;
            article.image = null;

            //Guardar el articulo:
            article.save((err, articleStored) =>{
                if(err|| !articleStored){
                    return res.status(404).send({
                        status: 'error',
                        message: 'Articulo no guardado'
                    });
                }
                //Devolver una respuesta:
                return res.status(200).send({
                    status: 'success',
                    article: articleStored
                });
            });

        }else{
            return res.status(200).send({
               message: 'Datos invalidos' 
            });
        }
    },
    getArticles: (req, res) =>{
        //Find
        /*
        return res.status(200).send({
            status: 'success',
            message: 'Sirve' 
         });
        */
        Article.find({}).sort('-id').exec((err,articles) => {
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver articulos' 
                 });
            }

            if(!articles){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay articulos' 
                 });
            }

            return res.status(200).send({
                status: 'success',
                articles 
             });
        });
    },

    getArticle: (req, res) =>{
        //Recoger el id de la url
        var articleId = req.params.id;

        //Comprobar que existe
        if(!Article|| articleId == null){
            return res.status(404).send({
                status: 'error',
                message: 'No hay Articulo'
            })
        }
        //Buscar el articulo
        Article.findById(articleId, (err, article) =>{

            if(err || !article){
                return res.status(404).send({
                    status: 'error',
                    message: 'No Existe el articulo'
                });
            }

            //Devolver en json
            return res.status(200).send({
            status: 'success',
            article
            });
        });
    },

    delete: (req, res) => {
        // Recoger el id de la url
        var articleId = req.params.id;

        // Find and delete
        Article.findOneAndDelete({_id: articleId}, (err, articleRemoved) => {
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al borrar !!!'
                });
            }

            if(!articleRemoved){
                return res.status(404).send({
                    status: 'error',
                    message: 'No se ha borrado el articulo, posiblemente no exista !!!'
                });
            }

            return res.status(200).send({
                status: 'success',
                article: articleRemoved
            });

        }); 
    },

    upload: (req, res) => {
        // Configurar el modulo connect multiparty router/article.js (hecho)

        // Recoger el fichero de la petición
        var file_name = 'Imagen no subida...';

        if(!req.files){
            return res.status(404).send({
                status: 'error',
                message: file_name
            });
        }

        // Conseguir nombre y la extensión del archivo
        var file_path = req.files.file0.path;
        var file_split = file_path.split('\\');

        // Nombre del archivo
        var file_name = file_split[2];

        // Extensión del fichero
        var extension_split = file_name.split('\.');
        var file_ext = extension_split[1];

        // Comprobar la extension, solo imagenes, si es valida borrar el fichero
        if(file_ext != 'png' && file_ext != 'jpg' && file_ext != 'jpeg' && file_ext != 'gif'){
            
            // borrar el archivo subido
            fs.unlink(file_path, (err) => {
                return res.status(200).send({
                    status: 'error',
                    message: 'La extensión de la imagen no es válida !!!'
                });
            });
        
        }else{
             // Si todo es valido, sacando id de la url
             var articleId = req.params.id;

             if(articleId){
                // Buscar el articulo, asignarle el nombre de la imagen y actualizarlo
                Article.findOneAndUpdate({_id: articleId}, {image: file_name}, {new:true}, (err, articleUpdated) => {

                    if(err || !articleUpdated){
                        return res.status(200).send({
                            status: 'error',
                            message: 'Error al guardar la imagen de articulo !!!'
                        });
                    }

                    return res.status(200).send({
                        status: 'success',
                        article: articleUpdated
                    });
                });
             }else{
                return res.status(200).send({
                    status: 'success',
                    image: file_name
                });
             }
            
        }   
    }, // end upload file

    getImage: (req, res) => {
        var file = req.params.image;
        var path_file = './upload/articles/'+file;

        fs.exists(path_file, (exists) => {
            if(exists){
                return res.sendFile(path.resolve(path_file));
            }else{
                return res.status(404).send({
                    status: 'error',
                    message: 'La imagen no existe !!!'
                });
            }
        });
    }
};

module.exports = controller;