const venom = require("venom-bot");
const respond = require("./utils/respond");

venom
  .create()
  .then((client) => start(client))
  .catch(console.log);

function start(client) {
  client.onMessage((message) => {
    if (message.body.startsWith("-") && message.isGroupMsg === false) {
      const content = message.body.slice(1);

      if (!content)
        return client.reply(
          message.from,
          "*Nenhuma palavra enviada.*",
          message.id
        );

      return respond(client, message, content.toLowerCase());
    }
  });
}
