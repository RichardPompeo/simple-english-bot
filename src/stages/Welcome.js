const Authorized = require("../models/authorized");

const options = require("../utils/objects/options");
const users = require("../utils/objects/users");
const stages = require("../utils/objects/stages");

const execute = async (client, message) => {
  const number = message.from;

  if (await Authorized.findOne({ number })) {
    return await stages.step[(users.list[number].stage = 3)].obj.execute(
      client,
      message
    );
  }

  let commands = "*Minhas funcionalidades*";
  let replyMessage = `Olá ${message.sender.pushname} 👋\n\nSeja muito bem-vindo ao *Simple English*!\nIrei enviar uma lista de todas minhas funcionalidades para você ver do que sou capaz de fazer 😁\nLembrando que essa é uma versão em desenvolvimento!`;

  Object.keys(options.cmd).forEach((value) => {
    let element = options.cmd[value];
    commands += `\n\n${value}. ${element.description}\n*Exemplo de uso:* ${element.example}`;
  });

  users.list[message.from].stage = 1;

  await client.sendText(message.from, replyMessage);
  await client.sendText(message.from, commands);
  return;
};

exports.execute = execute;
