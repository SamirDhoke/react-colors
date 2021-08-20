import TYPES from './palettes.types';
import data from './palettes.data';

const INITIAL_STATE = {
	palettes : data,
	isModalOpen: false,
  deletingPalette: null,
  activePalette: null
};

const reducer = (state=INITIAL_STATE, action) => {
	switch (action.type) {
    case TYPES.CREATE_PALETTE: return { ...state, palettes: state.palettes.concat( action.payload ) };
    case TYPES.UPDATE_PALETTE: return { ...state, palettes: state.palettes.map( p => p.id === action.payload.id ? action.payload : p ) };
    case TYPES.DELETE_PALETTE: return { ...state, palettes: state.palettes.filter( p => p.id !== action.payload.id ) };
    case TYPES.SET_DELETING_PALETTE: return { ...state, deletingPalette: action.payload };
    case TYPES.RESET_DELETING_PALETTE: return { ...state, deletingPalette: null };
    case TYPES.TOGGLE_DELETE_MODAL: return { ...state, isModalOpen: !state.isModalOpen };
    case TYPES.SET_ACTIVE_PALETTE: return { ...state, activePalette: action.payload };
		default : return state;
	}
}

export default reducer;