const users = require("../utils/objects/users");
const config = require("../../config.json");

const execute = async (client, message) => {
  let replyMessage = `${message.sender.pushname}, acabei de ver que você não tem acesso aos meus comandos. 😢\n\nPara liberá-los e ter acesso a todas minhas utilidades, você precisa fazer uma assinatura que custa *R$ ${config.value}* por mês. 😀\n\nCaso tenha interesse, entre em contato com *${config.teacher.name}!*`;

  users.list[message.from].stage = 2;

  await client.sendText(message.from, replyMessage);
  await client.sendContactVcard(
    message.from,
    config.teacher.number,
    config.teacher.name
  );
};

exports.execute = execute;
