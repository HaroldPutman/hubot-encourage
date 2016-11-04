// Description:
//   Robot is very encouraging
//
// Dependencies:
//   None
//
// Configuration:
//   None
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

module.exports = (robot) => {

	const remarks = [
    "Great job, %!",
    "Way to go, %!",
    "% is amazing, and everyone should be happy this amazing person is around.",
    "I wish I was more like %.",
    "% is good at like, 10 times more things than I am.",
    "%, you are an incredibly sensitive person who inspires joyous feelings in all those around you.",
    "%, you are crazy, but in a good way.",
    "% has a phenomenal attitude.",
    "% is a great part of the team!",
    "I admire %'s strength and perseverance.",
    "% is a problem-solver and cooperative teammate.",
    "% is the wind beneath my wings.",
    "% has a great reputation."
	];

	const allinclusive = [
		"Great job today, everyone!",
		"Go team!",
		"Super duper, gang!",
		"If I could afford it, I would buy you all lunch!",
		"What a great group of individuals there are in here. I'm proud to be chatting with you.",
		"You all are capable of accomplishing whatever you set your mind to.",
		"I love this team's different way of looking at things!"
	];

	/**
	 * Capitalize the first letter in a string.
	 */
	function capitalize(str) {
		let result = str.trim();
		return result.substring(0, 1).toUpperCase() + result.substring(1);
	}

	robot.respond(/encourage @?(?:(me|us|everyone|all|(?:the )?team)|(.+))/i, msg => {
		let name = msg.match[2];
		if (msg.match[1] === "me") {
			name = (Math.random() > 0.5) ? msg.message.user.name : "you";
		}
	  if (typeof name !== "undefined") {
			msg.send(capitalize(msg.random(remarks).replace("%", name)));
		} else {
			msg.send(msg.random(allinclusive));
		}
	});

};
