const goToStage = require("../utils/functions/goToStage");

const execute = async (client, message) => {
  switch (message.body) {
    case "1":
      return goToStage(client, message, 8);
    case "2":
      return goToStage(client, message, 3);
    default:
      return goToStage(client, message, 6);
  }
};

exports.execute = execute;
