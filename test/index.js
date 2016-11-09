'use strict';

const Helper = require('hubot-test-helper');
const expect = require('chai').expect;

const helper = new Helper('../src/index.js'); // path to file you want to test

class NewMockResponse extends Helper.Response {
  random(items) {
    return items[0];
  }
}

describe('hubot', () => {

  let room;

  beforeEach(function() { room = helper.createRoom({response: NewMockResponse})});
  afterEach(function() { room.destroy()});

  it('should respond when asked to encourage person', (done) => {

    room.user.say('alice', 'hubot encourage bill').then(() => {
      expect(room.messages).to.eql([
        ['alice', 'hubot encourage bill'],
        ['hubot', 'Great job, bill!']
      ]);

      done();

    });

  });

  it('should respond when asked to encourage everyone', (done) => {

    room.user.say('kumar', 'hubot encourage us').then(() => {
      expect(room.messages).to.eql([
      ['kumar', 'hubot encourage us'],
      ['hubot', 'Great job today, everyone!']
      ]);

      done();

    });

  });

  it('should encourage me when asked', (done) => {

    room.user.say('bob', 'hubot encourage me').then(() => {
      expect(room.messages).to.eql([
        ['bob', 'hubot encourage me'],
        ['hubot', 'Great job, bob!']
      ]);

      done();
    });
  });

});
