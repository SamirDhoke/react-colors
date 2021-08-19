import { combineReducers } from 'redux';

import palettesReducer from './palettes/palettes.reducer';
import viewerReducer from './viewer/viewer.reducer';
import editorReducer from './editor/editor.reducer';

const reducer = combineReducers({
	palettes: palettesReducer,
	viewer: viewerReducer,
	editor: editorReducer
});

export default reducer;