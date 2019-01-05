var list_of_users = require('../userList.json');

var login_check = function (username,callback) {
    console.log('jooooo')
    for (var i in list_of_users) {
        console.log(list_of_users[i]['username']);
        if(list_of_users[i] && list_of_users[i]['username'] == username.username
        && list_of_users[i]['password'] == username.password) {
            callback(null,list_of_users[i]);
        }
    }
    callback('usernotfound',null);
}

exports.login = login_check;