import * as React from 'react';
import Popup from '../../common/Popup/Popup';
import LanguageItem from '../../common/LanguageItem';
import { ILangItem } from '../../../entities/App';
import styles from './styles.module.css';

interface ILocalizationProps {
	lang: ILangItem;
	langs: ILangItem[];
	setLang: (id: number) => void;
}

interface ILocalizationState {
	popupVisible: boolean;
}

class Localization extends React.Component<ILocalizationProps, ILocalizationState> {
	constructor(props: ILocalizationProps) {
		super(props);
		this.togglePopupVisible = this.togglePopupVisible.bind(this);
		this.chooseLanguage = this.chooseLanguage.bind(this);
		this.getPopupBody = this.getPopupBody.bind(this);

		this.state = {
			popupVisible: false,
		};
	}

	private togglePopupVisible() {
		this.setState((prevState: ILocalizationState) => ({ popupVisible: !prevState.popupVisible }));
	}

	private chooseLanguage(id: number) {
		this.togglePopupVisible();
		this.props.setLang(id);
	}

	private getLanguagesItemsJSX(items: ILangItem[]) {
		return items
			.filter((item: ILangItem) => item.id !== this.props.lang.id)
			.map((item: ILangItem) =>
				(<li key={item.id}><LanguageItem {...item} itemHandler={this.chooseLanguage}/></li>));
	}

	private getPopupBody() {
		return (
			<ul className={`clear-list-styles ${styles.innerPopupContent}`}>
				{this.getLanguagesItemsJSX(this.props.langs)}
			</ul>
		);
	}

	public render() {
		return (
			<div className={styles.langWrapper}>
				<div className='lang-item-wrapper'>
					<LanguageItem
						{...this.props.lang}
						itemHandler={this.togglePopupVisible}
					/>
				</div>
				{
					this.state.popupVisible &&
					(
						<div className={styles.langPopupWrapper}>
							<Popup
								toggleVisibility={this.togglePopupVisible}
								render={this.getPopupBody}
							/>
						</div>
					)
				}
			</div>
		);
	}
}

export default Localization;
