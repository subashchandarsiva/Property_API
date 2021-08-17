const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://Subash:Test1@test.tma0u.mongodb.net/HomesApplication-Test?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

module.exports = mongoose.connection;
