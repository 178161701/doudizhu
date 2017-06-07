import userStore from '../stores/UserStore'
//没有default的时候使用{}
//有的话是默认的不使用{}
export function getZhuce(vuea){
	//默认传入所在的vue对象
	//alert(note.state.name);
	
	return userStore.state.loginbean;
}
export function getLogin(vuea){
	//默认传入所在的vue对象
	//alert(note.state.name);
	
	return userStore.state.loginbean;
}