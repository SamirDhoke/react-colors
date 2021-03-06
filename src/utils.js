import chroma from 'chroma-js';

const values = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

export const intersect = (first, second, matcher=null) => {
	// matcher should be 
	/*
		matcher(item):
			return i => i.someattribute === item.someattribute
	*/
	return second.filter( item => !first.find(matcher(item)) )
}

export const selectRandomColor = (superset, subset) => {
	/*
		SUPERSET: set of all colors
		SUBSET: set of colors of current palette
	*/
	const isPresentInSubset = item => subset.find( subsetItem => subsetItem.name === item.name );

	let counter = 0; // to prevent infinite loop
	let index = Math.floor( Math.random() * superset.length );
	let random =  superset[index];
	let exists = isPresentInSubset(random);
	
	while ( exists && counter < 100 ) {
		index = Math.floor( Math.random() * superset.length );
		random =  superset[index];
		exists = isPresentInSubset(random);
		counter = counter + 1;
	}
	
	if (exists && counter >= 100) {
		throw new Error('iteration count reached upper limit.');
	}

	return random;
}

export const convertColorsMapToArray = (colors, color) => {
	// convert the COLORS map to an array that contains only the COLOR objects.
	return Object.keys(colors).map(key => {
		return colors[key].find(c => c.name === color.name);
	})
}

export const generateShades = color => {
	const shades = chroma.scale([
		color,
		'#fff'
	]).colors(11);
	return shades.slice(0, 10);
}

export const generatePalette = basePalette => {
	const palette = {};
	// console.log(basePalette);

	const colors = basePalette.colors;
	for (let i=0; i<colors.length; i++) {
		const shades = generateShades(colors[i].color);
		for (let j=0; j<values.length; j++) {
			const value = values[j];
			if (! palette[value] ) {
				palette[value] = [];
			}
			palette[value].push({
				name: colors[i].name,
				id: colors[i].id,
				color: shades[j],
				hex: chroma(shades[j]).hex().toString(),
				rgb: `rgb(${chroma(shades[j]).rgb().toString()})`,
				rgba: `rgba(${chroma(shades[j]).rgb().toString()},1)`
			});
		}
	}

	return {
		...basePalette,
		colors: palette
	};
}