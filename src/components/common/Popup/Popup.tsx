
import * as React from 'react';

export interface IPopupProps {
	toggleVisibility: () => void;
	render: () => any;
}

class Popup extends React.Component<IPopupProps> {
	private popupNode: HTMLDivElement | null;

	constructor(props: IPopupProps) {
		super(props);
		this.popupNode = null;
		this.handleOutsideClick = this.handleOutsideClick.bind(this);
	}

	private handleOutsideClick(e: Event) {
		if (this.popupNode && this.popupNode.contains(e.target as HTMLDivElement)) {
			return;
		}
		this.props.toggleVisibility();
	}

	public componentWillUnmount() {
		document.removeEventListener('click', this.handleOutsideClick);
	}

	public componentDidMount() {
		document.addEventListener('click', this.handleOutsideClick);
	}

	public render() {
		return (
			<div ref={(node:HTMLDivElement) => { this.popupNode = node; }}>
				{this.props.render()}
			</div>
		);
	}
}

export default Popup;
