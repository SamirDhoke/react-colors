export const addColorToPalette = (palette, color) => {
	return {
		...palette,
		colors: palette.colors.concat(color)
	}
}

export const removeColorFromPalette = (palette, color) => {
	return {
		...palette,
		colors: palette.colors.filter(c => c.name !== color.name)
	}
}