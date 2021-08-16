const users = require("../utils/objects/users");

const execute = async (client, message) => {
  let messageReply = `Olá ${message.sender.pushname}! 👋\n\nPor favor escolha o que deseja utilizar, lembrando que sempre que quiser voltar para o menu, digite *<--* 😄 `;
  let options = "1. Painel Administrativo\n2. Lista de comandos";

  users.list[message.from].stage = 7;

  await client.sendText(message.from, messageReply);
  await client.sendText(message.from, options);
};

exports.execute = execute;
