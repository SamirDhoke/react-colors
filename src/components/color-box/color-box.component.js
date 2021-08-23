import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ColorName, ColorCode, ViewButton, DeleteButton } from './color-box.styled';
import './color-box.styles.scss';

const ColorBox = props => {
	const { color, mode='color', singleColor=false, editable=false, deletable=false } = props;
	
	const [ copied, updateCopied ] = React.useState(false);
	
	const goToColor = e => {
		e.stopPropagation();
		props.push(`/colors/${color.name}`);
	}

	const deleteColor = e => {
		e.stopPropagation();
		props.deleteColor(color);
	}
	
	React.useEffect(() => {
		if (copied) {
			console.log('copied')
			setTimeout(() => updateCopied(false), 1500);
		}
	}, [copied]);

	// console.log(copied);

	return (
		<CopyToClipboard 
			text={ color[mode] }
			onCopy={ () => updateCopied(true) }
			>
			<div 
				className={`color-box ${singleColor ? 'single-color' : ''}`}				
				>
				<div 
					className='color-bg'
					style={{ backgroundColor: color.color }}
				/>
				<div className='color-info'>
					{ !singleColor && <ColorName className='name' color={color.color}>{ color.name }</ColorName> }	
					<ColorCode className='code' color={color.color}>{ color[mode] }</ColorCode>
				</div>				
				<div className='color-actions'>
					{
						editable && <ViewButton 
							className='view'
							color={color.color}
							onClick={ goToColor }
						>view</ViewButton>
					}
					{
						deletable && <DeleteButton
							className='delete'
							color={color.color}
							onClick={ deleteColor }
						>delete</DeleteButton>
					}
				</div>				
				{ copied && <div className='copied-overlay'><span className='copied-text'>copied</span></div> }
			</div>			
		</CopyToClipboard>
	)
}

export default ColorBox;