var express = require('express');
var app = express();
//引入配置文件
var conf = require("./config/conf.js");
/**
 *
 * 引入controller文件
 *
 */

require('./controllers/home.js')(app);

/**
 *
 *引入 service文件
 *
 */

/**
 *
 *引入model文件
 *
 */


var server=app.listen(conf.server.port,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("server is running...url:"+host+":"+port);
});
