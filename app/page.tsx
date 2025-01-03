'use client'
import Layout from "@/components/layout/Layout"
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import {FormEvent, useState} from "react";
import {toast} from "sonner";

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 2,
	spaceBetween: 20,
	slidesPerGroup: 1,
	centeredSlides: false,
	loop: true,
	autoplay: {
		delay: 4000,
	},
	breakpoints: {
		1200: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 2,
		},
		576: {
			slidesPerView: 1,
		},
		0: {
			slidesPerView: 1,
		},
	},
}

const swiperOptions2 = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 1,
            // spaceBetween: 20,
            slidesPerGroup: 1,
            centeredSlides: false,
            loop: true,
            autoplay: {
                delay: 4000,
            },
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
}


export default function Home3() {
	const [isLoading, setIsLoading] = useState(false)

	async function submitHandler(e: FormEvent<HTMLFormElement>){
		e.preventDefault();
		setIsLoading(true)
		const form = e.target as HTMLFormElement
		const name = form[0] as HTMLInputElement
		const phone = form[1] as HTMLInputElement
		const email = form[2] as HTMLInputElement
		const subject = form[3] as HTMLInputElement
		const message = form[4] as HTMLInputElement
		const res = await fetch('/api/contact', {
			method: 'POST',
			body: JSON.stringify({
				name : name.value,
				phone : phone.value,
				email : email.value,
				subject : subject.value,
				message : message.value,
			})
		})
		console.log(res)
		const data = await res.json()
		if(data.message === 'Message Envoyé'){
			toast.success(data.message)
		}
		if(data.message === 'Failed'){
			toast.error(data.message)
		}
		setIsLoading(false)
	}

	return (
		<>
			<Layout headerStyle={3} footerStyle={3}>
				<section className="section-home-3 bg-1000 pb-130 pt-96 section-work">
					<div className="container">
						<div className="row">
							<div className="col-lg-4 offset-lg-1">
								<div className="position-relative d-inline-block">
									<img className="rounded-5" src={"assets/imgs/home-page-3/hero/hero.jpg"} alt="Messara" />
									{/*<img className="position-absolute top-100 start-50 translate-middle pt-8 z-0" src={"assets/imgs/home-page-3/hero/signature.png"} alt="Messara" />*/}
								</div>
								<div className="d-flex flex-column gap-2 mt-9 position-relative z-1">
									<Link href="mailto:ezenardmessara98@gmail.com">
										<i className="ri-mail-fill text-primary-3 fs-7" />
										<span className="text-300 fs-6 ms-2">ezenardmessara98@gmail.com</span>
									</Link>
									<Link href="https://www.instagram.com/ezenardmessara/">
										<i className="ri-instagram-fill text-primary-3 fs-7" />
										<span className="text-300 fs-6 ms-2">ezenardmessara</span>
									</Link>
								</div>
							</div>
							<div className="col-lg-7 pt-lg-0 pt-8">
								<div id="about" className="hero-3 pe-lg-5 border-bottom pb-7">
									<span className="text-primary-3">Façonner des récits, éveiller les esprits.</span>
									<h2 className="text-300 my-3">Façonner des histoires  <span className="text-dark"> avec passion : Découvrez le travail</span> de Messara</h2>
									<p className="mb-8">Bienvenue dans l'univers créatif de Messara Ezenard, où les mots se transforment en récits captivants et en contenus enrichissants. Découvrez son parcours en tant qu'écrivaine et explorez comment elle donne vie à l'imagination grâce à sa voix unique et ses récits passionnants.</p>
									<Link href={"#contact"} className="btn btn-secondary-3 me-2" >
										Get in touch
										<i className="ri-arrow-right-line ms-2" />
									</Link>
									{/*<Link href="#contact" className="btn btn-secondary-3 me-2" >*/}
									{/*	Download CV*/}
									{/*	<i className="ri-download-line ms-2" />*/}
									{/*</Link>*/}
									{/*<Link href="#contact" className="btn btn-outline-secondary-3 d-inline-flex align-items-center">*/}
									{/*	<span>Hire me</span>*/}
									{/*	<i className="ri-arrow-right-line ms-2" />*/}
									{/*</Link>*/}
								</div>
								<div className="typical pt-70">
									<h3>Typical Works</h3>
									<div className="container px-0 pt-4">
										<div className="row">
											<div className="card-scroll">
												<div className="cards">
													<div className="card-custom pt-0" data-index={0}>
														<div className="card__inner rounded-4 border border-secondary-3 bg-white p-lg-5 p-md-4 p-3">
															<div className="card__image-container rounded-0 zoom-img position-relative">
																<img className="card__image" src={"assets/imgs/home-page-3/typical/1.png"} alt="zelio" />
																<Link href="https://www.amazon.com/vie-derri%C3%A8re-rideaux-French/dp/B0CMMSM424/ref=sr_1_1?crid=1Y5HH01GOQ2SB&dib=eyJ2IjoiMSJ9.4ab_C7lzkcJFPH0AiDy0HnfTh6sQM5T__mBZnzovD5K0b5f8zjFCfylD_FKSP7V1yy0qtwYntr_RlXpcUPBa10Yp_PSPVC28ieIon3Fo35g.pDj5V6spMEkhVBNUB7N8kzlNEMVeiCoRh6ZO7f3ZTNs&dib_tag=se&keywords=la+vie+derriere+les+rideaux&qid=1735209172&sprefix=la+vie+derriere+les+rideaux%2Caps%2C162&sr=8-1" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
															</div>
															<div className="card__content px-md-4 px-3 pt-lg-0 pb-lg-8 pb-5">
																<div className="card__title mb-0 mb-lg-2">
																	<p className="text-300 fs-5 mb-0">2023</p>
																	<Link href="#">
																		<p className="fs-3 text-dark">La vie derrière les rideaux (French Edition)</p>
																	</Link>
																</div>
																<p className="text-300 mb-lg-auto mb-md-4 mb-3">En mettant à nue la vie de ses personnages, elle énonce des faits vécus par plusieurs d'entre nous. Des réalités qui prouvent que dans nos vies nous sommes toujours en quête de quelque chose, de liberté, d'amour, d'une vie meilleur.</p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div id="services" className="my-services pt-70">
									<h3>Mes Services</h3>
									<div className="card-services mb-3">
										<div className="card__inner rounded-4 border border-secondary-3 bg-white p-lg-4 p-md-4 p-3 d-flex">
											<div className="d-block">
												<div className="card__icon icon-shape icon-lg rounded-circle">
													<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
														<g clipPath="url(#clip0_184_1754)">
															<path className="fill-primary-3" d="M21.1875 7.03125V4.21875H16.8421C15.3434 4.21875 13.9009 4.61381 12.6297 5.36667C12.1617 2.33194 9.51408 0 6.32812 0H5.625V2.8125H2.8125V5.625H0V22.5938H7.15191C9.12042 22.5938 10.1521 23.9276 10.2556 24H13.7444C13.8499 23.9261 14.8715 22.5938 16.8481 22.5938H24V7.03125H21.1875ZM16.8421 5.625H19.7812V18.375H16.8421C15.3722 18.375 13.9563 18.7552 12.7031 19.48V7.00472C12.8124 6.9488 14.3378 5.625 16.8421 5.625ZM7.03125 1.45537C9.43927 1.7947 11.2969 3.85055 11.2969 6.32812V16.5239C10.2659 15.2518 8.75058 14.3825 7.03125 14.1945V1.45537ZM4.21875 4.21875H5.625V15.5625H6.32812C8.69639 15.5625 10.6826 17.2124 11.1779 19.4126C9.95433 18.7316 8.58145 18.375 7.15786 18.375H4.21875V4.21875ZM22.5938 21.1875H16.8481C15.478 21.1875 14.1843 21.6847 13.1731 22.5938H10.8269C9.81567 21.6847 8.52202 21.1875 7.15186 21.1875H1.40625V7.03125H2.8125V19.7812H7.15786C9.69675 19.7812 11.2132 21.1253 11.334 21.1875H12.666C12.7859 21.1258 14.3071 19.7812 16.8421 19.7812H21.1875V8.4375H22.5938V21.1875Z" fill="#FCC6E2" />
														</g>
													</svg>
												</div>
											</div>
											<div className="card__content px-md-4 px-3">
												<div className="card__title mb-0 mb-lg-2">
													<Link href="#">
														<p className="fs-4 text-dark">Articles, blog posts et contenu web.</p>
													</Link>
												</div>
												<p className="text-300 mb-lg-auto mb-md-4 mb-3">À l'ère numérique actuelle, un contenu engageant est essentiel pour capter l'attention de votre audience. Je suis spécialisée dans la création de contenu de haute qualité qui s'aligne avec la voix et les objectifs de votre marque.</p>
											</div>
										</div>
									</div>
								</div>
								{/*<div id="resume" className="education pt-70">*/}
								{/*	<div className="row">*/}
								{/*		<div className="col-6">*/}
								{/*			<h3>Education</h3>*/}
								{/*		</div>*/}
								{/*		<div className="col-6">*/}
								{/*			<h3 className="d-none d-md-block">Awards</h3>*/}
								{/*		</div>*/}
								{/*	</div>*/}
								{/*	<div className="row pt-4">*/}
								{/*		<div className="col-md-6 align-self-stretch h-100">*/}
								{/*			<div className="card-services rounded-4 border border-secondary-3 bg-white p-lg-5 p-md-4 p-3 h-100">*/}
								{/*				<div className="icon rounded-circle overflow-hidden d-inline-block">*/}
								{/*					<img src="assets/imgs/home-page-3/education/icon-1.png" alt="Education" />*/}
								{/*				</div>*/}
								{/*				<p className="text-dark fs-5 mt-1 mb-2">Certificates in Digital Content and SEO Writing</p>*/}
								{/*				<ul className="d-flex gap-4 ps-3 border-bottom pb-2 mb-4">*/}
								{/*					<li>*/}
								{/*						<p>2023-2024:</p>*/}
								{/*					</li>*/}
								{/*					<li>*/}
								{/*						<p className="text-primary-3">CM Institute</p>*/}
								{/*					</li>*/}
								{/*				</ul>*/}
								{/*				<div className="icon rounded-circle overflow-hidden d-inline-block">*/}
								{/*					<img src="assets/imgs/home-page-3/education/icon-2.png" alt="Education" />*/}
								{/*				</div>*/}
								{/*				<p className="text-dark fs-5 mt-1 mb-2">Writing Workshops and Continuing Education</p>*/}
								{/*				<ul className="d-flex gap-4 ps-3 border-bottom pb-2 mb-4">*/}
								{/*					<li>*/}
								{/*						<p className="mb-2">2019-2021:</p>*/}
								{/*					</li>*/}
								{/*					<li>*/}
								{/*						<p className="text-primary-3">University of Iowa</p>*/}
								{/*					</li>*/}
								{/*				</ul>*/}
								{/*				<div className="icon rounded-circle overflow-hidden d-inline-block">*/}
								{/*					<img src="assets/imgs/home-page-3/education/icon-3.png" alt="Education" />*/}
								{/*				</div>*/}
								{/*				<p className="text-dark fs-5 mt-1 mb-2">Bachelor of Arts in English Literature</p>*/}
								{/*				<ul className="d-flex gap-4 ps-3 mb-0">*/}
								{/*					<li>*/}
								{/*						<p className="mb-2">2016-2018:</p>*/}
								{/*					</li>*/}
								{/*					<li>*/}
								{/*						<p className="text-primary-3">Bachelor of Arts</p>*/}
								{/*					</li>*/}
								{/*				</ul>*/}
								{/*			</div>*/}
								{/*		</div>*/}
								{/*		<div className="col-md-6 align-self-stretch mt-md-0 mt-5">*/}
								{/*			<h3 className="d-block d-md-none">Awards</h3>*/}
								{/*			<div className="card-award rounded-4 border border-secondary-3 bg-white p-lg-5 p-md-4 p-3 align-self-stretch h-100 overflow-hidden">*/}
								{/*				<div className="position-relative h-100 align-self-stretch align-items-center">*/}
								{/*					<ul className="list-style-1 d-flex ps-3 flex-column mb-0">*/}
								{/*						<li className="position-relative z-1">*/}
								{/*							<p className="fs-5 text-dark mb-2">Columnist for The New Yorker</p>*/}
								{/*							<ul className="list-style-2 d-flex gap-4 ps-3">*/}
								{/*								<li>*/}
								{/*									<p className="text-primary-3 mb-0">NY Times</p>*/}
								{/*								</li>*/}
								{/*								<li>*/}
								{/*									<p className="mb-2">2018 - 2020</p>*/}
								{/*								</li>*/}
								{/*							</ul>*/}
								{/*							<p className="mb-4">Worked with various clients, including magazines, websites, and publishing houses, to produce high-quality content across multiple genres.</p>*/}
								{/*						</li>*/}
								{/*						<li className="position-relative z-1">*/}
								{/*							<p className="fs-5 text-dark mb-2">Content Writer at LitHub</p>*/}
								{/*							<ul className="list-style-2 d-flex gap-4 ps-3">*/}
								{/*								<li>*/}
								{/*									<p className="text-primary-3 mb-0">GitHub</p>*/}
								{/*								</li>*/}
								{/*								<li>*/}
								{/*									<p className="mb-2">2018 - 2020</p>*/}
								{/*								</li>*/}
								{/*							</ul>*/}
								{/*							<p className="mb-6">Created engaging articles, blog posts, and features for one of the leading literary websites.</p>*/}
								{/*						</li>*/}
								{/*						<li className="position-relative z-1">*/}
								{/*							<p className="fs-5 text-dark mb-2">Editor at The Write Stuff</p>*/}
								{/*							<ul className="list-style-2 d-flex gap-4 ps-3">*/}
								{/*								<li>*/}
								{/*									<p className="text-primary-3 mb-0">A.Lecturer</p>*/}
								{/*								</li>*/}
								{/*								<li>*/}
								{/*									<p className="mb-2">2018 - 2020</p>*/}
								{/*								</li>*/}
								{/*							</ul>*/}
								{/*							<p>Overseeing the editorial process, providing guidance, and ensuring the highest standards of content.</p>*/}
								{/*						</li>*/}
								{/*					</ul>*/}
								{/*					<div className="line-left position-absolute top-0 border-start h-md-100 z-0" />*/}
								{/*				</div>*/}
								{/*			</div>*/}
								{/*		</div>*/}
								{/*	</div>*/}
								{/*</div>*/}
								<div id="blog" className="blog pt-70">
									<h3>From Blog</h3>
									<div className="position-relative pt-4">
										<Swiper {...swiperOptions2} className="swiper slider-two pb-6 position-relative">
											<div className="swiper-wrapper">
												<SwiperSlide>
													<div className="card-services rounded-4 border border-secondary-3 bg-white p-lg-4 p-md-4 p-3 mb-3">
														<p className="fs-18 text-primary-3">Style de Vie</p>
														<div className="d-flex align-items-center gap-5">
															<Link href={'https://lecahier.com/que-faire-quand-le-changement-simpose-a-nous/'} target={'_blank'}>
																<p  className="fs-26 text-dark">Que faire quand le changement s'impose à nous?</p>
																<p className="mb-0">Nous y pensons souvent, nous en rêvons souvent, nous le verbalisons souvent. Cependant, quand il s'agit de faire le grand saut, nous procrastinons et hésitons à franchir le pas.</p>
															</Link>
															<div className="image-right">
																<img className="rounded-3 w-100 h-100" src={"assets/imgs/home-page-3/blog/1.png"} alt="blog 1" />
															</div>
														</div>
													</div>

												</SwiperSlide>
												<SwiperSlide>
													<div className="card-services rounded-4 border border-secondary-3 bg-white p-lg-4 p-md-4 p-3">
														<p className="fs-18 text-primary-3">Style de vie</p>
														<div className="d-flex align-items-center gap-5">
															<Link href={'https://lecahier.com/de-chaos-a-serenite-lart-de-dompter-mon-studio/'} target={'_blank'}>
																<p className="fs-26 text-dark">De chaos à sérénité : l'art de dompter mon studio</p>
																<p className="mb-0">Nous sommes le 15 juillet 2021 quand j'emménage dans mon tout
																	premier studio. La vie est belle! Plus de colocation, je peux enfin disposer des lieux
																	à ma guise. Je savoure les premières journées avec frénésie ...</p>
															</Link>
															<div className="image-right">
																<img className="rounded-3 w-100 h-100" src={"assets/imgs/home-page-3/blog/2.png"}
																		 alt="blog 2"/>
															</div>
														</div>
													</div>
												</SwiperSlide>
												<SwiperSlide>
													<div className="card-services rounded-4 border border-secondary-3 bg-white p-lg-4 p-md-4 p-3">
														<p className="fs-18 text-primary-3">Style de vie</p>
														<div className="d-flex align-items-center gap-5">
															<Link href={'https://lecahier.com/de-chaos-a-serenite-lart-de-dompter-mon-studio/'} target={'_blank'}>
																<p className="fs-26 text-dark">Toujours pressés : pourquoi tant d'impatience?</p>
																<p className="mb-0">M. Bélanger, un client de la pharmacie Jean Coutu, est furieux d’attendre 15 minutes de plus pour ses médicaments, pour lesquels il a appelé 15 minutes après l’ouverture et qui ne sont miraculeusement pas préparés.</p>
															</Link>
															<div className="image-right">
																<img className="rounded-3 w-100 h-100" src={"assets/imgs/home-page-3/blog/3.png"}
																		 alt="blog 3"/>
															</div>
														</div>
													</div>
												</SwiperSlide>
											</div>
										</Swiper>
										<div className="swiper-pagination"/>
									</div>
								</div>
								{/*<div id="portfolio" className="testimonials pt-60 border-bottom pb-80">*/}
								{/*	<h3>Testimonials</h3>*/}
								{/*	<div className="position-relative pt-4">*/}
								{/*		<Swiper {...swiperOptions} className="swiper slider-one pb-3 position-relative">*/}
								{/*			<div className="swiper-wrapper">*/}
								{/*				<SwiperSlide>*/}
								{/*					<div className="testimonials-block pe-5">*/}
								{/*						<img className="rounded-circle mb-2" src="assets/imgs/home-page-3/testimonials/author-1.png" alt="avatar" />*/}
								{/*						<p className="fs-5 text-dark">"Meisa's writing is simply magical. She has the ability to capture the essence of a story and preset it in the most captivating way."</p>*/}
								{/*						<div className="information ">*/}
								{/*							<p className="fs-6 text-primary-3">John Doe, <span className="text-300">Author</span></p>*/}
								{/*						</div>*/}
								{/*					</div>*/}
								{/*				</SwiperSlide>*/}
								{/*				<SwiperSlide>*/}
								{/*					<div className="testimonials-block pe-5">*/}
								{/*						<img className="rounded-circle mb-2" src="assets/imgs/home-page-3/testimonials/author-2.png" alt="avatar" />*/}
								{/*						<p className="fs-5 text-dark">"Working with Meisa was a fantastic experience. Her attention to detail and commitment to quality are unparalleled."</p>*/}
								{/*						<div className="information ">*/}
								{/*							<p className="fs-6 text-primary-3">Jane Smith, <span className="text-300">Editor</span></p>*/}
								{/*						</div>*/}
								{/*					</div>*/}
								{/*				</SwiperSlide>*/}
								{/*				<SwiperSlide>*/}
								{/*					<div className="testimonials-block pe-5">*/}
								{/*						<img className="rounded-circle mb-2" src="assets/imgs/home-page-3/testimonials/author-1.png" alt="avatar" />*/}
								{/*						<p className="fs-5 text-dark">"Meisa's writing is simply magical. She has the ability to capture the essence of a story and preset it in the most captivating way."</p>*/}
								{/*						<div className="information ">*/}
								{/*							<p className="fs-6 text-primary-3">John Doe, <span className="text-300">Author</span></p>*/}
								{/*						</div>*/}
								{/*					</div>*/}
								{/*				</SwiperSlide>*/}
								{/*				<SwiperSlide>*/}
								{/*					<div className="testimonials-block pe-5">*/}
								{/*						<img className="rounded-circle mb-2" src="assets/imgs/home-page-3/testimonials/author-2.png" alt="avatar" />*/}
								{/*						<p className="fs-5 text-dark">"Working with Meisa was a fantastic experience. Her attention to detail and commitment to quality are unparalleled."</p>*/}
								{/*						<div className="information ">*/}
								{/*							<p className="fs-6 text-primary-3">Jane Smith, <span className="text-300">Editor</span></p>*/}
								{/*						</div>*/}
								{/*					</div>*/}
								{/*				</SwiperSlide>*/}
								{/*			</div>*/}
								{/*		</Swiper>*/}
								{/*	</div>*/}
								{/*</div>*/}
								<div id="contact" className="contact pt-70">
									<h3>Contact me</h3>
									<div className="d-flex align-items-center gap-5 mt-4">
										<div className="d-flex flex-column gap-2 position-relative z-1">
											<Link href="mailto:ezenardmessara98@gmail.com">
												<i className="ri-mail-fill text-primary-3 h6 fw-medium" />
												<span className="text-300 fs-6 ms-2">ezenardmessara98@gmail.com</span>
											</Link>
											<Link href="https://www.instagram.com/ezenardmessara/">
												<i className="ri-instagram-fill text-primary-3 h6 fw-medium" />
												<span className="text-300 fs-6"> ezenardmessara</span>
											</Link>
										</div>
										{/*<div className="d-flex flex-column gap-2 position-relative z-1">*/}
										{/*	<Link href="https://www.instagram.com/ezenardmessara/">*/}
										{/*		<i className="ri-instagram-fill text-primary-3 h6 fw-medium" />*/}
										{/*		<span className="text-300 fs-6"> ezenardmessara</span>*/}
										{/*	</Link>*/}
										{/*</div>*/}
									</div>
									<div className="position-relative z-2 mt-4">
										<h5 className="text-dark mb-3">Let’s connect</h5>
										<form onSubmit={e => submitHandler(e)}>
											<div className="row g-3">
												<div className="col-md-6 ">
													<input type="text" className="form-control bg-3 border border-secondary-3 rounded-3" id="name" required name="name" placeholder="Your name" aria-label="username" />
												</div>
												<div className="col-md-6">
													<input type="text" className="form-control bg-3 border border-secondary-3 rounded-3" id="phone" required name="phone" placeholder="Phone" aria-label="phone" />
												</div>
												<div className="col-md-6">
													<input type="text" className="form-control bg-3 border border-secondary-3 rounded-3" id="email" required name="email" placeholder="Emaill" aria-label="email" />
												</div>
												<div className="col-md-6">
													<input type="text" className="form-control bg-3 border border-secondary-3 rounded-3" id="subject" required name="subject" placeholder="Subject" aria-label="subject" />
												</div>
												<div className="col-12">
													<textarea className="form-control bg-3 border border-secondary-3 rounded-3" id="message" name="message" required placeholder="Message" aria-label="With textarea" defaultValue={""} />
												</div>
												<div className="col-12">
													<button type="submit" disabled={isLoading} className="btn btn-secondary-3 fw-medium">
														Send Message
														<i className="ri-arrow-right-up-line fw-medium" />
													</button>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</>
	)
}