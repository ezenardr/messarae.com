import ThemeSwitch from '@/components/elements/ThemeSwitch'
import Link from 'next/link'
import OffCanvas from '../OffCanvas'
import MobileMenu from '../MobileMenu'

export default function Header3({ scroll, isMobileMenu, handleMobileMenu,isOffCanvas, handleOffCanvas }: any) {
	return (
		<>
			<header>
				<nav className="navbar navbar-expand-lg navbar-home-3 flex-nowrap z-999 p-0">
					<div className="container py-3 px-0">
						<Link className="navbar-brand d-flex main-logo align-items-center ms-lg-0 ms-md-5 ms-3" href={"/"}>
							<h1 className="fs-28 mb-0 me-2">Messara</h1>
							<img src={"assets/imgs/home-page-3/template/favicon.svg"} alt="Messara" />
						</Link>
						<div className="d-none d-lg-flex">
							<div className="collapse navbar-collapse" id="navbarSupportedContent">
								<ul className="navbar-nav me-auto mb-2 mb-lg-0">
									<li className="nav-item">
										<Link className="nav-link active" href={"#about"}>A propos</Link>
									</li>
									{/*<li className="nav-item">*/}
									{/*	<Link className="nav-link" href="#resume">Resume</Link>*/}
									{/*</li>*/}
									<li className="nav-item">
										<Link className="nav-link" href={"#services"}>Services</Link>
									</li>
									{/*<li className="nav-item">*/}
									{/*	<Link className="nav-link" href="#portfolio">Portfolio</Link>*/}
									{/*</li>*/}
									<li className="nav-item">
										<Link className="nav-link" href={"#blog"}>Blog</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" href={"#contact"}>Contact</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="navbar-social d-flex align-items-center">
							<div className="d-md-flex d-none gap-3">
								<Link href="https://www.facebook.com/profile.php?id=100091865442401">
									<i className="ri-facebook-circle-fill fs-18" />
								</Link>
								{/*<Link href="https://twitter.com">*/}
								{/*	<i className="ri-twitter-x-fill fs-18" />*/}
								{/*</Link>*/}
								{/*<Link href="https://linkedin.com">*/}
								{/*	<i className="ri-linkedin-fill fs-18" />*/}
								{/*</Link>*/}
								<Link href="https://www.instagram.com/ezenardmessara/">
									<i className="ri-instagram-fill fs-18" />
								</Link>
							</div>
							<div className="burger-icon burger-icon-white border rounded-3" onClick={handleOffCanvas}>
								<span className="burger-icon-top" />
								<span className="burger-icon-mid" />
								<span className="burger-icon-bottom" />
							</div>
						</div>
					</div>
					<ThemeSwitch />
				</nav>
				{/* offCanvas-menu */}
				<OffCanvas isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} />
				<MobileMenu isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />
			</header>

		</>
	)
}
