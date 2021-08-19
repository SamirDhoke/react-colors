import { generatePalette, convertColorsMapToArray } from '../../utils';
import React from 'react';
import { selectAllColors } from '../../redux/palettes/palettes.selectors';
import { connect } from 'react-redux';
import './color.styles.scss';

const Color = props => {	
	const [palette, setPalette] = React.useState({
		name: '',
		colors: []
	});
	const [mode, updateMode] = React.useState('rgb');	

	React.useEffect(() => {		
		const color = props.colors.find( c => c.name === props.match.params.id );
		if (!color) {
			return;
		}		
		const palette = generatePalette({
			name: color.name,
			colors: [color]
		})
		setPalette({
			...palette,
			colors: convertColorsMapToArray(palette.colors, color)
		});		
	}, [props.colors]);	

	return (
		<div className='color'>
			<div className='config'>
				<div className='config-item'>
					<h3 className='title'>{palette.name}</h3>
				</div>
				<div className='config-item'>
					<span>display mode</span>
					<select name='mode' onChange={ ({target}) => updateMode(target.value) }>
						<option value='rgb'>rgb</option>
						<option value='rgba'>rgba</option>
						<option value='hex'>hex</option>
					</select>
				</div>
			</div>			
			<div className='palette'>
				{
					palette.colors.map(
						color => (
							<div key={color.color} className='color-shade'>
								<div className='bg' style={{ backgroundColor: `${color.color}` }}/>								
								<span className='code'>{ color[mode] }</span>
							</div>
						)
					)
				}
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	colors: selectAllColors(state)
});

export default connect(mapStateToProps)(Color);