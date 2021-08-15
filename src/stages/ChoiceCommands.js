const stages = require("../utils/objects/stages");
const users = require("../utils/objects/users");

const execute = async (client, message) => {
  switch (message.body) {
    case "1":
      return goToStage(
        client,
        message,
        5,
        41,
        "Digite uma palavra em inglês para informações!"
      );
    default:
      return goToStage(client, message, 3);
  }
};

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

exports.execute = execute;
