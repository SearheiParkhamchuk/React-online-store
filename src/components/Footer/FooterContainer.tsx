import * as React from 'react';
import { Footer } from './Footer';

interface IFooterContainerProps {
}

interface IFooterContainerState {
}

export class FooterContainer extends React.Component<IFooterContainerProps, IFooterContainerState> {
	public readonly state: IFooterContainerState;

	constructor(props: IFooterContainerProps) {
		super(props);
		this.state = {};
	}

	public render() {
		return (<Footer />);
	}
}
