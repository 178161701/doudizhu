import {axPost} from '../../common/HttpBean'
import userStore from '../stores/UserStore'

export function zhuce(form,thisa){
	axPost('api/users/zhuce',$(form).serialize(),
		function(res){
			//userStore.commit('zhuce',res.data)//调用存储的时候用commit
			
				if(res.data==1){
					thisa.$router.push('gamehill');
					//alert("欢迎"+res.data.nicheng+"登录成功！");
					//window.location.href = '/#/hello'
					//this.$router.push('http://localhost:3000/');
				}else{
					if(res.data==2){
						alert("email已经注册");
					}else if(res.data==3){
						alert("昵称已经注册");
					}else{
						alert("数据库错误")
					}
				}
			},function(err){
				alert(err);
		});
};

export function login(form,thisa){
	axPost('api/users/login',$(loginForm).serialize(),
		function(res){
			//userStore.commit('login',res.data)
			if(res.data==1){
				alert("登录成功！");
				thisa.$router.push('gamehill');
//				window.location.href = '/#/gamehill'
			}else{
				alert("邮箱或密码不相同")
			}
		},function(err){
			alert(err);
		});
};