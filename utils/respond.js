const { translate } = require("free-translate");
const https = require("https");
const fs = require("fs");
const axios = require("axios");

const base_url = `https://api.dictionaryapi.dev/api/v2/entries/en_US`;

const respond = async (client, message, content) => {
  const arr = [];
  let word;
  try {
    word = await axios.get(`${base_url}/${content}`);
  } catch (err) {
    return client.reply(
      message.from,
      "*Essa palavra não foi encontrada ou não existe.*",
      message.id
    );
  }
  const translatedText = await translate(content, { from: "en", to: "pt" });
  const resWord = word.data[0];
  const wordTitle = resWord.word.replace(/\b\w/g, (l) => l.toUpperCase());

  arr.push(`*${wordTitle}*\n\n`);
  arr.push(`*Translation*\n`);
  arr.push(`_${translatedText}_\n\n`);
  arr.push(`*Phonetics*`);

  resWord.phonetics.map((c) => {
    arr.push(`\n_Text:_ *${c.text}*\n_Audio:_ ${c.audio}\n`);
  });

  arr.push(`\n*Meanings*`);

  resWord.meanings.map((c) => {
    arr.push(`\n_Part of speech:_ *${c.partOfSpeech}*\n`);
    arr.push(`_Definition:_ *${c.definitions[0].definition}*\n`);

    if (c.definitions[0].synonyms) {
      arr.push(`_Synonyms:_ `);

      c.definitions[0].synonyms.map((c2) => {
        arr.push(`*${c2}*, `);
      });

      arr.push("\n");
    }

    arr.push(`_Example:_ *${c.definitions[0].example}*\n`);
  });

  arr.push(`\n*_Sending audio bellow -->_*`);

  const file = fs.createWriteStream("./audio/audio.mp3");

  https.get(resWord.phonetics[0].audio, function (response) {
    try {
      response.pipe(file);
    } catch (err) {
      console.log(err);
    }
  });

  await client.reply(message.from, arr.join("").toString(), message.id);
  await client.sendVoice(message.from, `./audio/audio.mp3`);
};

module.exports = respond;
