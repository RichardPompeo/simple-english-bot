const Administrator = require("../models/administrator");

const options = require("../utils/objects/options");
const config = require("../../config.json");
const users = require("../utils/objects/users");

const goToStage = require("../utils/functions/goToStage");

const execute = async (client, message) => {
  let commands = "";
  let messageReply = `Olá ${message.sender.pushname}! 👋\n\nDigite o número da funcionalidade que você quer usar, lembrando que sempre que quiser voltar para o menu, digite *<--* 😄`;

  Object.keys(options.cmd).forEach((value) => {
    let element = options.cmd[value];
    commands += `${value}. ${element.description}\n*Exemplo de uso:* ${element.example}`;
  });

  const number = message.from;

  if (message.body === config.backWord && Administrator.findOne({ number })) {
    return goToStage(client, message, 6);
  }

  users.list[message.from].stage = 4;

  await client.sendText(message.from, messageReply);
  await client.sendText(message.from, commands);
};

exports.execute = execute;
