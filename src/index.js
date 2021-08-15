const venom = require("venom-bot");

const users = require("./utils/objects/users");
const stages = require("./utils/objects/stages");

venom
  .create()
  .then((client) => start(client))
  .catch(console.log);

const start = (client) => {
  client.onMessage((message) => {
    if (message.isGroupMsg === false) {
      stages.step[getStage(message.from)].obj.execute(client, message);
    }
  });
};

const getStage = (user) => {
  return users.list[user].stage;
};
