import TYPES from './palettes.types';
import { v4 as uuid } from 'uuid';

export const setActivePalette = palette => ({
	type: TYPES.SET_ACTIVE_PALETTE,
	payload: palette
})

export const setDeletingPalette = palette => ({
	type: TYPES.SET_DELETING_PALETTE,
	payload: palette
})

export const resetDeletingPalette = palette => ({
	type: TYPES.RESET_DELETING_PALETTE
})

export const createPalette = palette => ({
	type: TYPES.CREATE_PALETTE,
	payload: { ...palette, id: uuid() }
});

export const updatePalette = palette => ({
	type: TYPES.UPDATE_PALETTE,
	payload: palette
});

export const deletePalette = palette => ({
	type: TYPES.DELETE_PALETTE,
	payload: palette
});

export const toggleDeleteModal = () => ({
	type: TYPES.TOGGLE_DELETE_MODAL
})