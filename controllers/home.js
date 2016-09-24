var  qyh = require('../libs/qyh.js');
module.exports=function(app,http){
	app.get('/',function(req,res){
		res.send('Hello world');
		//qyh.getAccessToken(function(res){
		//	console.log(123);
		//	console.log(res);
		//});
		qyh.departmentList(1,function(res){
			console.log(res);
		
		});
		})

	app.get('/about',function(req,res){
		res.send('about');
		})

}
