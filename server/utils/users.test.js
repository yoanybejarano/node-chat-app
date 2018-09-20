var {Users} = require('./users');
var expect = require('expect');


describe('Users', () => {

    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Yoany',
            room: 'Node Course'
        }, {
            id: '2',
            name: 'Yeili',
            room: 'Designer Course'
        }, {
            id: '3',
            name: 'Cesar',
            room: 'Node Course'
        }];
    });

    it('should add new user', function () {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Armin',
            room: 'Java'
        };
        var resUser = users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
    });

    it('should remove a user', function () {
        var userId = '3';
        var user = users.removeUser(userId);
        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', function () {
        var userId = '4';
        var user = users.removeUser(userId);
        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);
    });

    it('should find a user', function () {
        var userId = '2';
        var user = users.getUser(userId);
        expect(user.id).toBe(userId);
    });

    it('should not find a user', function () {
        var userId = '4';
        var user = users.getUser(userId);
        expect(user).toBeFalsy();

    });

    it('should return names for Node course', function () {
        var userList = users.getUserList('Node Course');
        expect(userList).toEqual(['Yoany', 'Cesar']);

    });

    it('should return names for Designer course', function () {
        var userList = users.getUserList('Designer Course');
        expect(userList).toEqual(['Yeili']);

    });

});