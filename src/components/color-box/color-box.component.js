import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './color-box.styles.scss';

const ColorBox = props => {
	const { color, mode='color', singleColor=false } = props;
	
	const [ copied, updateCopied ] = React.useState(false);
	
	const goToColor = e => {
		props.push(`/colors/${color.name}`);
	}
	
	React.useEffect(() => {
		if (copied) {
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
						!singleColor && <span 
							className='view'
							onClick={ goToColor }
						>view</span>
					}
					{
						!singleColor && <span 
							className='delete'
							onClick={ e => {} }
						>delete</span>
					}
				</div>				
				{ copied && <div className='copied-overlay'><span className='copied-text'>copied</span></div> }
			</div>			
		</CopyToClipboard>
	)
}

export default ColorBox;