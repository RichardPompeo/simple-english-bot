const goToStage = require("../utils/functions/goToStage");

const execute = async (client, message) => {
  switch (message.body) {
    case "1":
      return await client.sendText(message.from, "1");
    case "2":
      return await client.sendText(message.from, "2");
    case "3":
      return await client.sendText(message.from, "3");
    case "4":
      return await client.sendText(message.from, "4");
    default:
      return goToStage(client, message, 8);
  }
};

exports.execute = execute;
