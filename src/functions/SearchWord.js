const { translate } = require("free-translate");
const http = require("http");
const fs = require("fs");
const axios = require("axios");

const { redirectToCommands } = require("../utils/functions/redirectToCommands");

const config = require("../../config.json");

const base_url = `https://api.dictionaryapi.dev/api/v2/entries/en_US`;

const execute = async (client, message) => {
  const content = message.body;

  if (content === config.backWord) {
    return redirectToCommands(client, message);
  }

  let arr = [];
  let word;

  try {
    word = await axios.get(`${base_url}/${content}`);
  } catch (err) {
    return client.reply(
      message.from,
      "Essa palavra não foi encontrada ou não existe.",
      message.id
    );
  }

  const translatedText = await translate(content, { from: "en", to: "pt" });
  const resWord = word.data[0];
  const wordTitle = resWord.word.replace(/\b\w/g, (l) => l.toUpperCase());

  arr.push(`*${wordTitle}*\n\n`);

  if (translatedText) {
    arr.push(`*Translation*\n`);
    arr.push(`${translatedText}\n\n`);
  }

  if (resWord.origin) {
    arr.push(`*Origin*\n`);
    arr.push(`${resWord.origin}\n\n`);
  }

  if (resWord.phonetics[0].text || resWord.phonetics[0].audio) {
    arr.push(`*Phonetics*`);

    resWord.phonetics.map((c) => {
      if (c.text) {
        arr.push(`\n*Text:* ${c.text}`);
      }

      if (c.audio) {
        arr.push("\n*Audio:* http:" + c.audio);
      }
    });

    arr.push("\n\n");
  }

  arr.push(`*Meanings*\n`);

  resWord.meanings.map((c) => {
    if (c.partOfSpeech) {
      arr.push(`*Part of speech:* ${c.partOfSpeech}\n`);
    }

    if (c.definitions[0].definition) {
      arr.push(`*Definition:* ${c.definitions[0].definition}\n`);
    }

    if (c.definitions[0].synonyms[0]) {
      arr.push(`*Synonyms:* `);

      c.definitions[0].synonyms.map((c2) => {
        arr.push(`${c2}, `);
      });

      arr.push("\n");
    }

    if (c.definitions[0].antonyms[0]) {
      arr.push(`*Antonyms:* `);

      c.definitions[0].antonyms.map((c2) => {
        arr.push(`${c2}, `);
      });

      arr.push("\n");
    }

    if (c.definitions[0].example) {
      arr.push(`*Example:* ${c.definitions[0].example}\n\n`);
    } else {
      arr.push(`\n\n`);
    }
  });

  if (resWord.phonetics[0].audio) {
    const file = await fs.createWriteStream("./src/audio/audio.mp3");

    await http.get("http:" + resWord.phonetics[0].audio, function (response) {
      try {
        response.pipe(file);
      } catch (err) {
        console.log(err);
      }
    });
  }

  await client.reply(message.from, arr.join("").toString(), message.id);

  if (resWord.phonetics[0].audio) {
    await client.sendVoice(message.from, `./src/audio/audio.mp3`);
  }

  arr = [];
};

exports.execute = execute;
