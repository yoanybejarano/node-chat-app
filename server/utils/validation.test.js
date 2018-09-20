const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {

    it('should reject non-string values', function () {
        var res = isRealString(98);
        expect(res).toBe(false);
    });

    it('should reject string with only spaces', function () {
        var res = isRealString('   ');
        expect(res).toBe(false);
    });

    it('should string with non-spaces characters', function () {
        var res = isRealString('  Yoany  Bejarano');
        expect(res).toBe(true);
    });

});