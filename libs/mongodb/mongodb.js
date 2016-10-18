var MongoClient = require('mongodb').MongoClient;

exports.connect=function(callback){
    MongoClient.connect('mongodb://localhost:27017/test',function(err,db){
          callback(db);
    })
};
