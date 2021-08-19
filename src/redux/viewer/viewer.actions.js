import TYPES from './viewer.types';

export const setActivePalette = palette => ({
	type: TYPES.SET_ACTIVE_PALETTE,
	payload: palette
})
