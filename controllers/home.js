var  qyService = require('../service/qyService');
module.exports=function(app){
	app.get('/',function(req,res){
		//res.send('Hello world');
		console.log(new qyService().getAccessToken());
		})

	app.get('/about',function(req,res){
		res.send('about');
		})

}
