var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {

    it('should generate the correct message object', function () {
        var from = 'Yeili';
        var text = 'Some message';
        var message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, text});

    });

});

describe('generateLocationMessage', () => {
    it('should generate the correct location object', function () {
        var from = 'Jess';
        var latitude = 15;
        var longitude = 19;
        var url = 'https://www.google.com/maps?q=15,19';
        var message = generateLocationMessage(from,latitude,longitude);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, url});

    });
});