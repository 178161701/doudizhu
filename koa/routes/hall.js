const router = require('koa-router')()

router.prefix('/hall')

router.get('/getRoomList', async function (ctx, next) {
	let loginbean = ctx.session.loginbean;
	console.log(loginbean);
	if(!loginbean){
		ctx.body='登录过期';
		return;
	}
  	ctx.body=[];
  
})

router.get('/newroom', async function (ctx, next) {
	let loginbean = ctx.session.loginbean;
	console.log(loginbean);
	if(!loginbean){
		ctx.body='登录过期';
		return;
	}
	let pwd = ctx.query.roompwd;
	
  
})

module.exports = router
