import TYPES from './viewer.types';

const INITIAL_STATE = {
	palette: null
}

const reducer = (state=INITIAL_STATE, action) => {
	switch (action.type) {
		case TYPES.SET_ACTIVE_PALETTE: return { ...state, palette: action.payload };
		default: return state;
	}
}

export default reducer;