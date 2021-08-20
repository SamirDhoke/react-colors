import { combineReducers } from 'redux';

import palettesReducer from './palettes/palettes.reducer';
import editorReducer from './editor/editor.reducer';

const reducer = combineReducers({
	palettes: palettesReducer,	
	editor: editorReducer
});

export default reducer;