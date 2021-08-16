const users = require("../objects/users");
const stages = require("../objects/stages");

const goToStage = (client, message, stage, redirectStage, commandMessage) => {
  if (stage === 5 && redirectStage && commandMessage) {
    return stages.step[(users.list[message.from].stage = stage)].obj.execute(
      client,
      message,
      redirectStage,
      commandMessage
    );
  }

  return stages.step[(users.list[message.from].stage = stage)].obj.execute(
    client,
    message
  );
};

module.exports = goToStage;
