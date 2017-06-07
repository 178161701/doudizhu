<template>
	<div>
		<el-row style="margin-bottom: 20px;">
			<el-col :span="24">欢迎来到斗地主</el-col>
		</el-row>
		<el-row>
			<el-col :span="9">
				&nbsp;
			</el-col>
			<el-col :span="6" style="margin-left: -32px;">
				<el-form ref="form" :model="form" label-width="80px" name='zhuceForm'>
				  <el-form-item style="margin-bottom: 5px;">
				  		注册<!--{{data}}-->
				  </el-form-item>
				  <el-form-item label="email:" style="margin-bottom: 5px;">
				    <el-input  placeholder="请输入email" name='email'></el-input>
				  </el-form-item>
				  <el-form-item label="密码:" style="margin-bottom: 5px;">
				    <el-input  placeholder="请输入密码" type='password' name='pwd'></el-input>
				  </el-form-item>
				  <el-form-item label="验证密码:" style="margin-bottom: 5px;">
				    <el-input  placeholder="请再次输入密码" type='password' name='repwd'></el-input>
				  </el-form-item>
				  <el-form-item label="昵称:">
				    <el-input  placeholder="请输入昵称" name='nicheng'></el-input>
				  </el-form-item>
				  <el-form-item>
				    <el-button type="primary" @click='register'>注册</el-button>
				    <router-link to="/">
					    <el-button>
					    	返回登录
					    </el-button>
				    </router-link>
				  </el-form-item>
				</el-form>
			</el-col>
			<el-col :span="9">
				&nbsp;
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import {zhuce} from '../../vuex/actions/UserAction';
	
	export default {
		name: 'Register',
		data () {
	    	return {
	    		
	    	}
	  	},
		methods:{
			register:function(e){
				zhuce(zhuceForm,this);
			}
		}
	}
		/*
			let formObj={};
			formObj.email = zhuceForm.email.value;
			formObj.pwd = zhuceForm.pwd.value;
			formObj.nicheng = zhuceForm.nicheng.value;
			//192.168.1.105:3000
			axios.post('http://localhost:3000/users/zhuce',$(zhuceForm).serialize())
			.then(function(res){
				alert(res.data);
				for(var key in res){
					document.write(key+'</br>');
					document.write(res[key]+'</br>');
				}
			}).catch(function(err){
				alert(err);
			})
		*/
</script>

<style>
</style>