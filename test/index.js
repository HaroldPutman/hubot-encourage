'use strict';

var Helper = require('hubot-test-helper');
var expect = require('chai').expect;

var helper = new Helper('../src/index.js'); // path to file you want to test

var NewMockResponse;
var hasProp = {}.hasOwnProperty;
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

NewMockResponse = (function(superClass) {
  extend(NewMockResponse, superClass);

  function NewMockResponse() {
    return NewMockResponse.__super__.constructor.apply(this, arguments);
  }

  NewMockResponse.prototype.random = function(items) {
    return "% is good at like, 10 times more things than I am.";
  };

  return NewMockResponse;

})(Helper.Response);


describe('hubot', () => {

	var room;

	beforeEach(() => room = helper.createRoom({response: NewMockResponse}));
	afterEach(() => room.destroy());

	it('should respond when asked to encourage person', done => {

		room.user.say('alice', 'hubot encourage bill').then(() =>{
			console.log (room.messages);
			expect(room.messages).to.eql([
				['alice', 'hubot encourage bill'],
				['hubot', 'Bill is good at like, 10 times more things than I am.']
			]);

			done();

		});

	});

});
