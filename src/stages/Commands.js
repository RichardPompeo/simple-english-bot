const options = require("../utils/objects/options");
const users = require("../utils/objects/users");

const execute = async (client, message) => {
  let commands = "";
  let messageReply = `Olá ${message.sender.pushname}! 👋\n\nDigite o número da funcionalidade que você quer usar, lembrando que sempre que quiser voltar para o menu de comandos, digite *<--* 😄`;

  Object.keys(options.cmd).forEach((value) => {
    let element = options.cmd[value];
    commands += `${value}. ${element.description}\n*Exemplo de uso:* ${element.example}`;
  });

  users.list[message.from].stage = 4;

  await client.sendText(message.from, messageReply);
  await client.sendText(message.from, commands);
};

exports.execute = execute;
