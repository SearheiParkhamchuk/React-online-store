import * as React from 'react';
import { ILangItem } from '../../entities/App';

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
		<div className='lang-item' onClick={itemHandler}>
			<span className={`lang-item__icon flag-icon flag-icon-${props.icon}`}/>
			<span className='lang-item__lang'>{props.lang}</span>
		</div>
	);
};

export default LanguageItem;
