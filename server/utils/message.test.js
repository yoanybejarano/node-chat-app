var expect = require('expect');
var generateMessage = require('./message');

describe('generateMessage', () => {

    it('should generate the correct message object', function () {
        var from = 'Yeili';
        var text = 'Some message';
        var message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe('number');
        expect(message.toObject()).toMatchObject({from, text});

    });

});