const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region:'us-east-1'});
const config = require('./config');


module.exports = {
    getUsers:function(callback){

        var params = {
            TableName:config.DB.TBL_NAME        
        };
        
        docClient.scan(param,function(err, data){
            if(err)
            {
                callback(err);
            }
            else
            {
                //create jwt token
                callback({status:true, message:"Success load", data:data});
            }
        });
    }
};