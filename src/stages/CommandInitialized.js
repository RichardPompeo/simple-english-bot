const users = require("../utils/objects/users");

const execute = async (client, message, redirectStage, commandMessage) => {
  let messageReply = `O comando foi iniciado com sucesso!`;

  users.list[message.from].stage = redirectStage;

  await client.sendText(message.from, messageReply);
  await client.sendText(message.from, commandMessage);
};

exports.execute = execute;
