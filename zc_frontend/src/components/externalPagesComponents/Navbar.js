import { Link, withRouter } from 'react-router-dom';
import '../../styles/nav.css';
import navStyles from '../../styles/Navbar.module.css';
import navlogo from '../../assets/hngLogo.png';

const Navbar = () => {
	return (
		<nav
			className={`${navStyles.navbar} navbar-expand-lg navbar-light bg-light`}>
			<div className='container-fluid'>
				<Link to='/' className={`${navStyles.navbarBrand}`}>
					<img
						src={navlogo}
						alt='zuri-logo'
						width='20'
						height='20'
						className={`d-inline-block align-text-top ${navStyles.image}`}
					/>
					<span className={`${navStyles.zuriChat}`}>Zuri Chat</span>
				</Link>

				<button
					className={`navbar-toggler ${navStyles.navButton}`}
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNavDropdown'
					aria-controls='navbarNavDropdown'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div
					className={`${navStyles.collapse} navbar-collapse`}
					id='navbarNavDropdown'>
					<ul className={`navbar-nav ${navStyles.navbarNav}`}>
						<li className='nav-item'>
							<Link
								to='/features'
								className={`nav-link active ${navStyles.navLink}`}
								aria-current='page'>
								<span className={`${navStyles.features}`}>
									Features
								</span>
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								to='/pricing'
								className={`nav-link dropdown-toggle ${navStyles.navLink}`}
								role='button'
								data-bs-toggle='dropdown'
								aria-expanded='false'>
								<span className={`${navStyles.pricing}`}>
									Pricing
								</span>
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								to='/community'
								className={`nav-link ${navStyles.navLink}`}>
								<span className={`${navStyles.comms}`}>
									Community
								</span>
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								to='/downloads'
								className={`nav-link dropdown-toggle ${navStyles.navLink}`}
								role='button'
								data-bs-toggle='dropdown'
								aria-expanded='false'>
								<span className={`${navStyles.download}`}>
									Downloads
								</span>
							</Link>
						</li>
						<li className='nav-item'>
							<span className={`${navStyles.searchLogo}`}>
								<i className='fas fa-search'></i>
							</span>
						</li>
						<li className='nav-item'>
							<Link
								to='/signup'
								className={`nav-link ${navStyles.navLink}`}>
								<span className={`${navStyles.signU}`}>
									Sign Up
								</span>
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								to='/signin'
								className={`btn ${navStyles.signIn}`}
								role='button'>
								<span className={`${navStyles.signI}`}>
									Sign In
								</span>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default withRouter(Navbar);
