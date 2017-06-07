const router = require('koa-router')()
var UserModel = require('../models/UserModel');

router.prefix('/users')


router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.post('/zhuce', async function (ctx, next) {
	
	var user = new UserModel({});
	user.email = ctx.request.body['email'];
	user.pwd = ctx.request.body['pwd'];
	user.nicheng = ctx.request.body['nicheng'];
	user.createtime=new Date();
	user.role=1;
	var loginbean = user;
  try{
	  	let rs = await user.save();
	  	ctx.status=307;
	  	ctx.redirect('login');
	  	return;
	  	//console.log(rs);
	  }catch(err){
	  	//console.log(err);
	  	let errMsg = err.message;
	  	if(errMsg.indexOf('$emailuiq')>-1){
		      ctx.body = 2;		//{type:0,msg:'email重复'};
		    }else if(errMsg.indexOf('$nichenguiq')>-1){
		      ctx.body = 3;		//{type:0,msg:'昵称重复'};
		    }else{
		      ctx.body = 0;		//{type:0,msg:'数据库错误'};
		    }
		return;
  }
  	ctx.body = '注册成功'//loginbean //res.send();
})

router.post('/login', async function (ctx, next) {
			await UserModel.findOne({email:ctx.request.body['email'],pwd:ctx.request.body['pwd']},function(err,rs){    
		    if(rs!=null){
		    	//var loginbean = rs;
		    	let loginbean = {};
			    loginbean.id=rs._id;
			    loginbean.nicheng=rs.nicheng;
			    loginbean.role = rs.role;
			    ctx.session.loginbean = loginbean;
		  		ctx.body = 1//'登录成功'
		  	}else{
		  		ctx.body = 0//'邮箱或密码不相同'
		  	}
			}) 
		//let a = await UserModel.findOne({email:ctx.request.body['email'],pwd:ctx.request.body['pwd']});
  	//res.send();
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
