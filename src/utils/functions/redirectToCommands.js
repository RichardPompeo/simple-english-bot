const users = require("../objects/users");
const stages = require("../objects/stages");

const redirectToCommands = async (client, message) => {
  users.list[message.from].stage = 4;

  await client.sendText(
    message.from,
    "Você voltou para o menu de seleção!"
  );

  stages.step[users.list[message.from].stage].obj.execute(client, message);
};

module.exports = { redirectToCommands };
