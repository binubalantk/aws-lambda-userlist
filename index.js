const UserModel = require('./UserModel');

exports.handler = (event, context, callback) => {
    // TODO implement
    UserModel.getUsers(function(d){
        const response = {
            statusCode: 200,
            body: d
        };
        callback(null,response);
    })
    
};