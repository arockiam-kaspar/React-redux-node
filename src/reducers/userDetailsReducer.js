export default function reducer(state={
	data:[],
	name:"Hello WhatsApp!",
	error:null
}, action){
	switch (action.type){
		case "FETCH_USER_PENDING":
			return {...state}
		break;
		case "FETCH_USER_REJECTED":
			return {...state, error:action.payload}
		break;
		/*case "FETCH_USER_FULFILLED":
			return {...state, name:action.payload.name, data:action.payload.data}
		break;*/
		case "FETCH_USER_FULFILLED":
			return {...state, name:action.payload.data}
		break;
	}
	return state;
}