var  API = require('../libs/qyh/qyh').API;
var conf = require("../config/conf.js");
module.exports=function(app){
	app.get('/',function(req,res){
			 res.end('123');
		})
	app.get('/about',function(req,res){
			console.log('/about');
			var pool=require('../libs/mysql/mysql-pool').createMysqlPool();
			pool.getConnection(function(err,client){
				client.query('select * from member limit 10',null,function(err,res){
							pool.releaseConnection(client);
					   console.log(err,res);
				})
			})
			res.end('123');
		});
		app.get('/m',function(req,res){
				// var Test = require('../models/TestSchema');
				// var test = new Test({
				// 	name: 'abc',
				// 	age :20
				// });
				// test.save(function(err){
				// 	console.log(err);
				// })
				var MongoClient = require('../libs/mongodb/mongodb');
				MongoClient.connect(function(db){
					var collection=db.collection('cbd');
					var data = {"name":"abc","age":20};
					collection.insert(data,function(err,result){
						console.log(result);
					})
					collection.find().toArray(function(err,result){
						console.log(result);
					})
				})
				res.end('123');
		});
}
