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
				<el-form ref="form" :model="form" label-width="80px" name='loginForm'>
				 <el-form-item style="margin-bottom: 5px;">
				  		登录
				  </el-form-item>
				  <el-form-item label="email:" style="margin-bottom: 5px;">
				    <el-input  placeholder="请输入email" name='email'></el-input>
				  </el-form-item>
				  <el-form-item label="密码:">
				    <el-input  placeholder="请输入密码" type='password' name='pwd'></el-input>
				  </el-form-item>
				  <el-form-item>
				    <el-button type="primary" @click='login'>登录</el-button>
				    <router-link to="/register">
					    <el-button>
					    	注册
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
	import {login} from '../vuex/actions/UserAction';
	
	export default {
		name: 'GameStart',
	  	data () {
	    	return {
	      		
	    	}
	  	},
		methods:{
			login:function(e){
				login(loginForm,this);
			}
		}
//		computed:{//监听
//			data:getLogin
//		}
	}
</script>

<style>
	body {
        margin: 0px;
        padding: 0px;
    }
</style>