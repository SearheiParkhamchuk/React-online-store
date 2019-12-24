import * as React from 'react';
import logoSvg from './../../../logo.svg';
import lightLogoSvg from './../../../light-logo.svg';
import SocialNetworks from '../../common/SocialNetworks';

export interface IAppProps {
	isDark: boolean;
}

const Logo: React.FunctionComponent<IAppProps> = (props) => {
	return (
		<div className='logo'>
			<div className='logo-image'>
				<a href=''>
					<img src={props.isDark ? lightLogoSvg : logoSvg} alt='Furniture Kallyas Theme' title='Just another Kallyas Demo Sites site'/>
				</a>
			</div>
			<div className='logo-infocard'>
				<div className='logo-infocard__demo'>
					<img
						src='https://demo.kallyas.net/ares-furniture-interior-design/wp-content/uploads/sites/3/2016/11/kallyas_icon.png'
						alt='Kallyas theme'
					/>
					<p>
						Kallyas is an ultra-premium, responsive theme built for modern websites.
					</p>
				</div>
				<div className='logo-infocard__info contact-info'>
					<div className='contact-info__block'>
						<p className='contact-info__phone'>
							T <a href='tel:+375335555500'>+375 (33) 555-55-00</a>
						</p>
						<p className='contact-info__email'>
							Email: <a href='mailto:sales@yourwebsite.com'>sales@yourwebsite.com</a>
						</p>
					</div>
					<div className='contact-info__block'>
						<p>Your Company LTD</p>
						<p>Street nr 100, 4536534, Chicago, US</p>
					</div>
					<div className='contact-info__block'>
						<a className='contact-info__map map-icon' href='https://goo.gl/maps/1OhOu'>
							<span className='map-icon__icon fas fa-map-marker-alt'/>
							<span className='map-icon__text'>Open in Google Maps</span>
						</a>
					</div>
					<div className='contact-info__block'>
						<SocialNetworks isShort={true} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Logo;
