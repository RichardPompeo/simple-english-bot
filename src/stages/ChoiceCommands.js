const goToStage = require("../utils/functions/goToStage");

const execute = async (client, message) => {
  switch (message.body) {
    case "1":
      return goToStage(
        client,
        message,
        5,
        41,
        "Digite uma palavra em inglês para informações!"
      );
    default:
      return goToStage(client, message, 3);
  }
};

exports.execute = execute;
