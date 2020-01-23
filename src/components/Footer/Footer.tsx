import * as React from 'react';
import Subscribe from './common/Subscribe';
import { SectionHeader } from './common/SectionHeader';
import { NavLink } from 'react-router-dom';

interface IFooterProps {
}

interface IFooterState {
}

export class Footer extends React.Component<IFooterProps, IFooterState> {
	public readonly state: IFooterState;

	constructor(props: IFooterProps) {
		super(props);
		this.state = {};
	}

	public render() {
		return (
			<footer className='footer-container'>
				<section className='footer-inner'>
					<div className='footer-info'>
						<section className='footer-section footer-info__item'>
							<SectionHeader header={'Newsletter'} />
							<p className='footer-section__desc'>
								Stau updated with our latest offers.
							</p>
							<Subscribe />
						</section>
						<section className='footer-info__item'>
							<SectionHeader header={'Customer'} />
							<ul>
								<li>
									<NavLink to={''}>Shipping</NavLink>
								</li>
								<li>
									<NavLink to={''}>30-Day Returns</NavLink>
								</li>
								<li>
									<NavLink to={''}>Free Gift Packaging</NavLink>
								</li>
								<li>
									<NavLink to={''}>Furniture Insuarence</NavLink>
								</li>
								<li>
								</li>
							</ul>
						</section>
						<section className='footer-info__item'>
							<SectionHeader header={'Company'} />
						</section>
						<section className='footer-info__item'>
							<SectionHeader header={'Feedback'} />
						</section>
						<div className='footer-info__item'>
							<SectionHeader header={'Follow us'} />
						</div>
					</div>
					<div className='footer-rights'>
						rights
					</div>
				</section>
			</footer>
		);
	}
}
