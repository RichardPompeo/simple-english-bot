const config = require("../../config.json");
const users = require("../utils/objects/users");

const goToStage = require("../utils/functions/goToStage");

const execute = async (client, message) => {
  let messageReply = `${message.sender.pushname} - Painel Administrativo`;
  let optionsArray = [
    "Autorizar número",
    "Desautorizar número",
    "Adicionar administrador",
    "Remover administrador",
  ];
  let options = "";

  if (message.body === config.backWord) {
    return goToStage(client, message, 6);
  }

  users.list[message.from].stage = 9;

  optionsArray.forEach((option, index) => {
    if (index + 1 >= optionsArray.length) {
      options += `${index + 1}. ${option}`;
    } else {
      options += `${index + 1}. ${option}\n`;
    }
  });

  await client.sendText(message.from, messageReply);
  await client.sendText(message.from, options);
};

exports.execute = execute;
