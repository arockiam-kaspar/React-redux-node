import axios from 'axios';

export function fetcUser(){
	return {
		type:"FETCH_USER",
		/*payload:{
			name: "Hello Google",
			data:["0","1"]
		}*/
		payload: axios.get("http://localhost:4000/")
	}
}