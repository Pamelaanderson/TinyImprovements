const mongoose = require("mongoose");
const Schema = mongoose.Schema;


var KudosSchema = new Schema({
  title: String,
  body: String,
  to: String,
  from: String
});

const Kudos = mongoose.model('Kudos', KudosSchema);

module.exports = Kudos;