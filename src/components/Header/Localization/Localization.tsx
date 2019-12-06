import * as React from 'react';
import Popup from '../../common/Popup/Popup';
import LanguageItem from '../../common/Language/LanguageItem';
import { ILangItem } from '../../../entities/App';

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
		this.handleClick = this.handleClick.bind(this);
		this.chooseLanguage = this.chooseLanguage.bind(this);
		this.getPopupBody = this.getPopupBody.bind(this);

		this.state = {
			popupVisible: false,
		};
	}

	private handleClick() {
		this.setState((prevState: ILocalizationState) => ({ popupVisible: !prevState.popupVisible }));
	}

	private chooseLanguage(id: number) {
		this.handleClick();
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
			<ul className={'clear-list-styles'}>
				{this.getLanguagesItemsJSX(this.props.langs)}
			</ul>
		);
	}

	public render() {
		return (
			<>
				<LanguageItem
					{...this.props.lang}
					itemHandler={this.handleClick}
				/>
				{
					this.state.popupVisible &&
					(
						<Popup
							toggleVisibility={this.handleClick}
							render={this.getPopupBody}
						/>
					)
				}
			</>
		);
	}
}

export default Localization;
