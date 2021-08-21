import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { createWhitelistFilter } from 'redux-persist-transform-filter';
import storage from 'redux-persist/lib/storage';

import palettesReducer from './palettes/palettes.reducer';
import editorReducer from './editor/editor.reducer';

const palettesFilter = createWhitelistFilter('palettes', ['palettes']);

export const reducer = combineReducers({
	palettes: palettesReducer,
	editor: editorReducer
});

const persistConfig = {	
	key: 'root',
	storage,
	transforms: [
		palettesFilter
	]
}

export default persistReducer(persistConfig, reducer);