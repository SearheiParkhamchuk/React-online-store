import * as React from 'react';
import styles from './styles.module.css';
import { ILangItem } from '../../../entities/App';

interface ILanguageItem extends ILangItem {
	itemHandler?: (id: number) => void;
}

const LanguageItem: React.FunctionComponent<ILanguageItem> = (props) => {
	const itemHandler = () => {
		if (props.itemHandler) {
			props.itemHandler(props.id);
		}
	};

	return (
		<div onClick={itemHandler}>
			<span className={`flag-icon flag-icon-${props.icon}`}/>
			<span className={styles.lang}>{props.lang}</span>
		</div>
	);
};

export default LanguageItem;
