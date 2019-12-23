import * as React from 'react';
import styles from './styles.module.css';
import logoSvg from './../../../logo.svg';
import SocialNetworks from '../../common/SocialNetworks/SocialNetworks';

export interface IAppProps {
}

const Logo: React.FunctionComponent = () => {
	return (
		<div className={styles.logoContainer}>
			<div className={styles.logoWrapper}>
				<a className={styles.logo} href=''>
					<img src={logoSvg} alt='Furniture Kallyas Theme' title='Just another Kallyas Demo Sites site'/>
				</a>
			</div>
			<div className={styles.logoInfocard}>
				<div className={styles.demoLogo}>
					<img
						src='https://demo.kallyas.net/ares-furniture-interior-design/wp-content/uploads/sites/3/2016/11/kallyas_icon.png'
						alt='Kallyas theme'
					/>
					<p >
						Kallyas is an ultra-premium, responsive theme built for modern websites.
					</p>
				</div>
				<div className={styles.info}>
					<div>
						<p className={styles.infoPhone}>
							T (212) 555 55 00
						</p>
						<p className={styles.infoEmail}>
							Email: <a href='mailto:sales@yourwebsite.com'>sales@yourwebsite.com</a>
						</p>
					</div>
					<div>
						<p>Your Company LTD</p>
						<p>Street nr 100, 4536534, Chicago, US</p>
					</div>
					<div>
						<a className={styles.infoMap} href='https://goo.gl/maps/1OhOu'>
							<span className={`${styles.infoMapIcon} fas fa-map-marker-alt`}/>
							<span className={styles.infoMapText}>Open in Google Maps</span>
						</a>
					</div>
					<div>
						<SocialNetworks isShort={true} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Logo;
