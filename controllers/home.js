var  qyService = require('../service/qyService');
module.exports=function(app,http){
	app.get('/',function(req,res){
		res.send('Hello world');
		console.log(qyService.getAccessToken());
		})

	app.get('/about',function(req,res){
		res.send('about');
		})

}
