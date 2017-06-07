import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);	

let user = new Vuex.Store({
	state:{
		loginbean:null
	},
	mutations:{
		zhuce:function(state,data){
	      state.loginbean = data;
	      alert("store接受的："+data);
	   },
	   login:function(state,data){
	      state.loginbean = data;
	      alert("store接受的："+data);
	    }
	}
})

export default user;