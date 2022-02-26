'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = Schema({
    image: String,
    title: String,
    price: String,
    description: String,
    color: String
});

module.exports = mongoose.model('Article', ArticleSchema);