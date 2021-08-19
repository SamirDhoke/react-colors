import TYPES from './editor.types';
import { addColorToPalette, removeColorFromPalette } from './editor.utils';

const INITIAL_STATE = {
	palette: null,
	isModalOpen: false
}

const reducer = (state=INITIAL_STATE, action) => {
	switch (action.type) {
		case TYPES.SET_EDITING_PALETTE: return { ...state, palette: action.payload };
		case TYPES.ADD_COLOR_TO_PALETTE: return { ...state, palette: addColorToPalette(state.palette, action.payload) };
		case TYPES.REMOVE_COLOR_FROM_PALETTE: return { ...state, palette: removeColorFromPalette(state.palette, action.payload) };
		case TYPES.CLEAR_PALETTE: return { 
			...state, 
			palette: {
				...state.palette, 
				colors: [] 
			} 
		};
		case TYPES.TOGGLE_SAVE_MODAL: return { ...state, isModalOpen: !state.isModalOpen };
		case TYPES.RESET_EDITING_PALETTE: return { ...state, isModalOpen: false, palette: null };
		default : return state;
	}
}

export default reducer;