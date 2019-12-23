import * as React from 'react';
import styles from './styles.module.css';

interface ILineSeparatorProps {
	isColoring: boolean;
}

const LineSeparator: React.FC<ILineSeparatorProps> = (props) => {
	return (
		<span className={`${styles.line} ${props.isColoring ? styles.color : ''}`}/>
	);
};

export default LineSeparator;
