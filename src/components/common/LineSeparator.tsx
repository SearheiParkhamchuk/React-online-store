import * as React from 'react';

interface ILineSeparatorProps {
	isColoring: boolean;
}

const LineSeparator: React.FC<ILineSeparatorProps> = (props) => {
	return (
		<span className={`line-separator ${props.isColoring ? 'line-separator_colored' : ''}`}/>
	);
};

export default LineSeparator;
