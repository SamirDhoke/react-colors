import React from 'react';
import ColorBox from '../../components/color-box/color-box.component';
import SliderInput from '../../components/slider-input/slider-input.component';
import SelectInput from '../../components/select-input/select-input.component';
import { selectActivePalette } from '../../redux/palettes/palettes.selectors';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './palette.styles.scss';

const Palette = props => {
	const { palette } = props;	

	const [ config, updateConfig ] = React.useState({
		level: 50,
		mode: 'rgb'
	});	

	const handleLevelChange = ({target}) => handleChange('level', Number(target.value) <= 0 ? 50 : Number(target.value));
	const handleModeChange = ({target}) => handleChange('mode', target.value);
	const handleChange = (name, value) => updateConfig({ ...config, [name] : value });

	if (!palette) {
		return null;
	}

	const {
		title,
		colors
	} = palette;

	return (		
		<div className='palette'>
			<div className='config'>
				<SliderInput
					classname='config-item'
					value={config.level}
					onChange={handleLevelChange}
					min={0}
					max={900}
					step={100}
					label='Level'
					name='level'
					/>
				<SelectInput
					className='config-item'
					name='mode'
					value={config.mode}
					onChange={handleModeChange}
					options={{
						rgb: 'rgb',
						rgba: 'rgba',
						hex: 'hex'
					}}
					/>
			</div>
			<h2 className='title'>{title}</h2>			
			<div className='colors'>
				{ 
					colors[config.level].map( color => (
						<ColorBox 
							key={color.name} 
							color={color} 
							mode={config.mode} 
							push={props.history.push}
							/> ) 
					)
				}
			</div>
		</div>
	);
}

const mapStateToProps = state => ({
	palette: selectActivePalette(state)
});

export default connect(mapStateToProps)(Palette);