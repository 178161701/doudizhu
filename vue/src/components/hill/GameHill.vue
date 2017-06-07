<template>
	<el-row style="margin-bottom: 20px;">
			<el-col :span="4">&nbsp;</el-col>
			<el-col :span="4"><leveLnav/></el-col>
			<el-col :span="12"><roomList/></el-col>
			<el-col :span="4">&nbsp;</el-col>
	</el-row>
		
</template>

<script>
	import {getRoomList} from '../../vuex/actions/HallAction'
	import LeveLnav from './LeveLnav';
	import RoomList from './RoomList';
	
	export default {
		
		mounted:function(){ 
       		//axios向服务器发请求,获取房间列表
       		
       		getRoomList(this);
  		},
  		components:{
  			leveLnav:LeveLnav,
  			roomList:RoomList
  		}
	}
</script>

<style>
</style>