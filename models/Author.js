const mongoose = require('mongoose');


const authorSchema = new mongoose.Schema({
    name: { type: String, required: true},
    age: { type: String, required: true},
    works: [{ type: String, required: false}],
    profileImage: {type:String, required: false},
  });




  const Author = mongoose.model('Author', authorSchema);

  module.exports = Author;