import {axGet} from '../../common/HttpBean'
import axios from 'axios'

export function getRoomList(thisa){
	axGet('/api/hall/getRoomList',{},function(res){
			alert(res.data);
		},function(err){
			alert(err);
		});
};
