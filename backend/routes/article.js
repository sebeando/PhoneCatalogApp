'use strict'

var express = require('express');
var ArticleController = require('../controllers/article');

var router = express.Router();

var multipart = require('connect-multiparty');
var md_upload = multipart({ uploadDir: './upload/articles'});

//Rutas utiles
router.post('/save', ArticleController.save);
router.get('/articles', ArticleController.getArticles);
router.get('/article/:id', ArticleController.getArticle);
router.delete('/article/:id', ArticleController.delete);
router.post('/upload-image/:id?', md_upload, ArticleController.upload);
router.get('/get-image/:image', ArticleController.getImage);

module.exports = router;