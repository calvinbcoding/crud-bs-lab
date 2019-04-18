const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: { type: String, required: true},
    topic: { type: String, required: true},
    published: Boolean,
  });




  const Article = mongoose.model('Article', articleSchema);

  module.exports = Article;