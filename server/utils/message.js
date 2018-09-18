var momemt = require('moment');

var generateMessage = (from, text) => {
    return {from, text, createdAt: momemt().valueOf()};
};

var generateLocationMessage = (from, latitude, longitude) => {
    return {
        from,
        url: `https://www.google.com/maps?q=${latitude},${longitude}`,
        createdAt: momemt().valueOf()
    };
};

module.exports = {generateMessage, generateLocationMessage};