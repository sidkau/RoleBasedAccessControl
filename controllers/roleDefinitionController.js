var roles = {
    admin: {
        can: ['read', 'write', 'delete']
    },
    writer: {
        can: ['read', 'write']
    },
    guest: {
        can: ['read']
    }
}

var role_define = function can(role,callback) {
    // return roles[role] && roles[role].can.indexOf(operation) !== -1;
    // console.log(roles[role])
    console.log(role)
    if(roles[role] && roles[role].can) {
        callback(roles[role].can);
    } 
}
exports.role_define = role_define;