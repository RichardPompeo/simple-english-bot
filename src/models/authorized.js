const mongoose = require("../database/mongo");

const AuthorizedSchema = new mongoose.Schema({
  number: {
    type: String,
    required: true,
  },
  pushname: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("authorized", AuthorizedSchema);
