const execute = async (client, message) => {
  let replyMessage = `Olá novamente ${message.sender.pushname}!, Você receberá uma mensagem assim que o pagamento ser efetuado e você desbloquear todas minhas utilidades! Estou animada para te ensinar inglês!\n\nNos vemos daqui a pouco?! 😀`;

  await client.sendText(message.from, replyMessage);
};

exports.execute = execute;
