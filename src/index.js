// Description:
//   Robot is very encouraging
//
// Dependencies:
//   None
//
// Configuration:
//   You can put your own text in a file `hubot-encourage-data.json` in
//   your hubot project. It should be a copy of data.json from this
//   project.
//
// Commands:
//   hubot encourage me
//   hubot encourage name
//   hubot encourage all
//
// Author:
//	 HaroldPutman
//   (based on original script by WoogieNoogie)

'use strict';

const Path = require("path");

module.exports = (robot) => {

  let data = require('../data');

  try {
    // Attempt to load data from app directory.
    data = require(Path.join(process.cwd(), "hubot-encourage-data"));
  } catch (e) {
    if (e.code !== "MODULE_NOT_FOUND") {
      throw e;
    }
  }

  /**
   * Capitalize the first letter in a string.
   */
  function capitalize(str) {
    let result = str.trim();
    return result.substring(0, 1).toUpperCase() + result.substring(1);
  }

  robot.respond(/encourage\s+@?(?:(me|us|everyone|all|(?:the )?team)|(.+))/i, msg => {
    let name = msg.match[2];
    if (msg.match[1] === "me") {
      let mi = [msg.message.user.name, "you"]; // mi, a name I call myself
      name = msg.random(mi);
    }
    if (typeof name !== "undefined") {
      msg.send(capitalize(msg.random(data.remarks).replace("%", name)));
    } else {
      msg.send(msg.random(data.allinclusive));
    }
  });

};
