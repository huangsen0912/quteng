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
		})
}
