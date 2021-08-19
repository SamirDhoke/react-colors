import TYPES from './editor.types';

export const clearPalette = () => ({
	type: TYPES.CLEAR_PALETTE
});

export const resetEditingPalette = () => ({
	type: TYPES.RESET_EDITING_PALETTE
});

export const addColorToPalette = color => ({
	type: TYPES.ADD_COLOR_TO_PALETTE,
	payload: color
});

export const removeColorFromPalette = color => ({
	type: TYPES.REMOVE_COLOR_FROM_PALETTE,
	payload: color
});

export const setEditingPalette = palette => ({
	type: TYPES.SET_EDITING_PALETTE,
	payload: palette
})

export const toggleSaveModal = () => ({
	type: TYPES.TOGGLE_SAVE_MODAL
});