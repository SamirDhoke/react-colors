import styled from 'styled-components';
import chroma from 'chroma-js';

export const ColorName = styled('span')`
	color: ${ props => chroma(props.color).luminance() < 0.5 ? '#ffffff' : '#000000' };
`;

export const ColorCode = styled('span')`
	color: ${ props => chroma(props.color).luminance() < 0.5 ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.3)' };
`;

export const ViewButton = styled('span')`
	color: ${ props => chroma(props.color).luminance() < 0.5 ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.2)' };
`

export const DeleteButton = styled('span')`
	color: ${ props => chroma.contrast(props.color, 'tomato') < 4.5 ? '#520000' : 'tomato' };
`