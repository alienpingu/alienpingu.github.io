import { CHANGE_SEARCH_FIELD } from './constants.js';

const intialState = {
	searchField: ''
}

export const searchRobots = (state=intialState, action={}) => {
	switch(action.type) {
		case CHANGE_SEARCH_FIELD:
			return Object.assign({}, state, {searcField:action.payload});
		default:
			return state;
	}
}