import { intersect } from '../../utils';

const selectPalettesStore = state => state.palettes;

export const selectPalettes = state => selectPalettesStore(state).palettes;
export const selectIsModalOpen = state => selectPalettesStore(state).isModalOpen;
export const selectAllColors = state => {
	const palettes = selectPalettes(state);
	const colors = palettes.reduce((acc, item) => {
		const distinct = intersect(acc, item.colors, color => i => i.name === color.name)
		return acc.concat(distinct);
	}, []);
	return colors;
}
export const selectDeletingPalette = state => selectPalettesStore(state).deletingPalette;
export const selectNewPaletteTemplate = state => selectPalettes(state)[0];
export const selectActivePalette = state => selectPalettesStore(state).activePalette;