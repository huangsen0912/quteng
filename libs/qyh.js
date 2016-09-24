var https = require('https');
var qs 	= require('querystring');
var conf  = require('../config/conf.js');

module.exports=(function(https,conf,qs){
		 //request,内部方法 
	var _request=function(method,path,params_data,cb){
	       var options={
		  hostname:'qyapi.weixin.qq.com',
		  path:'/cgi-bin',
		  method:'GET',
		};
	        method==='post' ? params_data=qs.stringify(params_data) : options.path=options.path+path+'?'+qs.stringify(params_data); 
	        options.method=method;
		//用来存放字符流数据，然后转成字符串
		var dataArr=[],len=0,data;
		var req=https.request(options,function(res){
			res.on('data',function(chunk){
				dataArr.push(chunk);
				len+=chunk.length;
			}).on('end',function(){
				data=Buffer.concat(dataArr,len).toString();
			        cb(data);//回调返回数据	
			})
		}).on('error',function(e){
		          console.log(e);
			  return false;
		})

		//post方法写入数据
		if(method==='post'){
		    res.write(params_data);
		}
		//请求结束
		req.end();
	};
	//获取accesstoken
	var getAccessToken=function(cb){
		var params = {	
	                corpid:conf.qy.corpid,
			corpsecret:conf.qy.corpsecret,
                    };
               _request('get','/gettoken',params,function(res){
	       		cb(JSON.parse(res)); 
	       });
	};
	//获取部门列表
	var departmentList =function(id,cb){
	    getAccessToken(function(res){
	    var params ={
	    	access_token:res.access_token,	  
		id:id,
		};
		_request('get','/department/list',params,function(res){
			cb(res);
		})
	    
	    });
	};

	return {
	    getAccessToken:getAccessToken,
	    departmentList:departmentList,
	}


	
})(https,conf,qs);

