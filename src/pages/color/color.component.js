import React from 'react';
import SelectInput from '../../components/select-input/select-input.component';
import ColorBox from '../../components/color-box/color-box.component';
import { generatePalette, convertColorsMapToArray } from '../../utils';
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
	}, [props.colors, props.match.params.id]);	

	return (
		<div className='color'>
			<div className='head'>
				<span className='title'>{palette.name}</span>			
				<div className='config'>				
					<SelectInput
						className='config-item'					
						label='mode'
						value={mode}
						onChange={ ({target}) => updateMode(target.value) }
						name='mode'
						options={{
							hex: 'hex',
							rgb: 'rgb',
							rgba: 'rgba'
						}}					
					/>
				</div>			
			</div>
			<div className='palette'>
				{
					palette.colors.map(
						color => (
							<ColorBox 
								key={color.color} 
								color={color} 
								singleColor={true} 
								mode={mode}
								/>
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