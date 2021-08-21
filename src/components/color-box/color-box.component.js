import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
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
					{ !singleColor && <span className='name'>{ color.name }</span> }	
					<span className='code'>{ color[mode] }</span>						
				</div>				
				<div className='color-actions'>
					{
						editable && <span 
							className='view'
							onClick={ goToColor }
						>view</span>
					}
					{
						deletable && <span 
							className='delete'
							onClick={ deleteColor }
						>delete</span>
					}
				</div>				
				{ copied && <div className='copied-overlay'><span className='copied-text'>copied</span></div> }
			</div>			
		</CopyToClipboard>
	)
}

export default ColorBox;