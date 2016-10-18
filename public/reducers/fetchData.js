

export const listData = (state = { page: 1, list: [] }, action) => {
	switch(action.type) {
		case 'RECEIVE_DATA':
		  	return {
		        page: action.page,
				list: [...state.list, ...action.data]
			}
			break;

		default:
		  	return state
	}
}
