import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../../redux/store';
import { setLangAction } from '../../../redux/reducers/app-reducer';
import { ILangItem } from '../../../entities/App';
import Localization from './Localization';

export interface ILocalizationContainerProps {
	langId: number;
	langs: ILangItem[];
	setLang: (id: number) => void;
}

class LocalizationContainer extends React.Component<ILocalizationContainerProps> {
	constructor(props: ILocalizationContainerProps) {
		super(props);
		this.getLangById = this.getLangById.bind(this);
	}

	private getLangById(id: number): ILangItem {
		return this.props.langs.find((lang: ILangItem) => lang.id === id) || this.props.langs[0];
	}

	public render() {
		return (
			<Localization
				lang={this.getLangById(this.props.langId)}
				langs={this.props.langs}
				setLang={this.props.setLang}
			/>
		);
	}
}

const mapState2Props = (state: AppState) => {
	return {
		langId: state.app.langId,
		langs: state.app.langs,
	};
};

const mapDispatch2Props = {
	setLang: setLangAction,
};

export default connect(mapState2Props, mapDispatch2Props)(LocalizationContainer);
