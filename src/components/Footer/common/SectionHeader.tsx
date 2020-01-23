import * as React from 'react';

interface ISectionHeaderProps {
	header: string;
}

export const SectionHeader: React.FC<ISectionHeaderProps> = (props) => {
	return (
		<header className='footer-section__header'>
			<h4>{props.header}</h4>
		</header>
	);
};
