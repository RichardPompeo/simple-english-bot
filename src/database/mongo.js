const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_MONGO_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.Promise = global.Promise;

mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", true);

module.exports = mongoose;
