import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import React from "react";
import Slider from "react-slick";
import Marquee from "react-fast-marquee";
import CountUp, { useCountUp } from 'react-countup';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {

	useCountUp({
		ref: 'counter',
		end: 1234567,
		enableScrollSpy: true,
		scrollSpyDelay: 1000,
	});

	var settings = {
		dots: true,

		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};

	var settings1 = {
		arrow: false,
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};

	var settings2 = {
		dots: false,
arrow:true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};

	return (
		<>
			<Head>
				<title>About Us - Curewith3D</title>
				<meta name="description" content="At Curewith3D, we're a team passionate about the transformative potential of 3D design and printing technology. We combine cutting-edge technology with"/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" />
			</Head>
			<div class="page-content">

				<div class="aboutusbgbredcum">
			<div class="container">
				<div class="pbmit-title-bar-content">
					<div class="pbmit-title-bar-content-inner">
						<div class="pbmit-tbar">
							<div class="pbmit-tbar-inner container">
								<h1 class="pbmit-tbar-title">
									<TypeAnimation
								
										sequence={[
										100,
										'About Us',		
										800,						
										]}
										speed={10}
										deletionSpeed={5}
										repeat={Infinity}										
									/>
									</h1>
							</div>
						</div>
						<div class="pbmit-breadcrumb">
							<div class="pbmit-breadcrumb-inner">
								<span>
									<a title="" href="/" class="home"><span>Curewith3D</span></a>
								</span>
															
								<span class="sep">
									<i class="pbmit-base-icon-angle-right"></i>
								</span>					
								<span><span class="post-root post post-post current-item">About Us</span></span>
							</div>
						</div>
					</div>
				</div> 
			</div> 
		</div>

				<section class="about-us-section-one fadeIn animated pt-60">
					<div class="container-fluid p-0">
						<div class="row g-0">
							<div class="col-md-12 col-xl-6">
								<div class="about-us-one-left-boxx">
									<div class="ihbox-style-area">
										
									</div>
								</div>
							</div>
							<div class="col-md-12 col-xl-6">
								<div class="about-us-one-right-box pbmit-bg-color-global bgskyblue pr-30 pb-50 pt-30 pl-40">
									<div class="pbmit-heading-subheading animation-style5">
										{/* <h4 class="pbmit-subtitle">Best Solutions For Laboratory</h4> */}
										{/* <h2 class="big-title">Transforming Healthcare with Precision 3D Medical Solutions</h2> */}
										<h4 class="small-title">Pioneering the Future of 3D Design and Medical Innovation</h4>
									</div>
									<p class="pbmit-text">At Curewith3D, we’re a team passionate about the transformative potential of 3D design and printing technology. We combine cutting-edge technology with medical expertise to deliver a comprehensive suite of 3D modeling, customized implant manufacturing, and design services.</p>
									<a class="pbmit-btn pbmit-btn-blackish pbmit-btn-blue" href="#">
										<span class="pbmit-button-content-wrapper">
											<span class="pbmit-button-icon">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
													<path d="m31 50.979c-.362.007-.727-.081-1.049-.28-.929-.572-1.212-1.814-.653-2.742.047-.082 5.886-9.826 17.032-15.958h-43.33c-1.103 0-2-.897-2-2s.897-2 2-2h43.33c-11.084-6.097-16.989-15.884-17.047-15.982-.547-.934-.244-2.177.689-2.73.946-.561 2.192-.236 2.757.715.909 1.45 9.433 14.449 24.722 18.046.915.225 1.549 1.026 1.549 1.952s-.63 1.729-1.532 1.948c-15.354 3.61-23.849 16.626-24.767 18.099-.36.577-1.025.919-1.7.932z"></path>
												</svg>
											</span>
											<span class="pbmit-button-text">Get Started</span>
										</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section class="about-three-bg section-lg pbmit-bg-color-white pt-50">
					<div class="container">
						<div class="pb-5">
							<div class="row g-0">
								<div class="col-md-12 col-xl-6">
									<div class="video-box pr-30">
										<video class="pbmit-video about-video" src="https://www.auxein.com/wp-content/uploads/2022/06/Auxein_intro.mov" autoplay="" loop muted="muted" playsinline=""></video>
									</div>
								</div>
								<div class="col-md-12 col-xl-6">
									<div class="about-three-content">
										<div class="pbmit-heading-subheading animation-style2 mb-10">										
											<h2 class="pbmit-title">Our Mission</h2>
											<div class="pbmit-heading-desc titlesubh">
												Our mission is to empower healthcare professionals and patients with personalized solutions through 3D technology. We strive to:
											</div>
											<ul class="list-group ajrt ajrx">
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Revolutionize medical care: By offering patient-specific implants and surgical guides, we aim to improve surgical outcomes, patient recovery times, and overall well-being.
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Foster collaboration: We bridge the gap between designers, engineers, and surgeons, fostering collaboration for innovative 3D solutions.
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Expand design possibilities: We push the boundaries of 3D design, creating intricate models and implants that were previously unimaginable.
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Surgeon-Friendly Utility
														</li>
                                                        <li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Prioritize patient care: At the heart of everything we do lies a commitment to improving patient outcomes and experiences.
														</li>
													</ul>
										</div>
									
									</div>
								</div>
							</div>
						</div>
						<div class="pb-md-5 pb-4">
							<div class="pbmit-devider-text">
								<span>Facts</span>
							</div>
						</div>
						<div class="row g-0">
							<div class="col-md-6 col-xl-3">
								<div class="pbminfotech-ele-fid-style-2">
									<div class="pbmit-fld-contents">
										<div class="pbmit-fld-wrap text-center">
											<h4 class="pbmit-fid-inner">
												<span class="pbmit-fid-before"></span>
												<span class="pbmit-number-rotate numinate"><CountUp end={500} enableScrollSpy /></span>
												<span class="pbmit-fid"><span>+</span></span>
											</h4>
											<span class="pbmit-fid-title">Surgical procedures supported <br></br>with custom 3D solutions </span>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-6 col-xl-3 mt-md-0 mt-4">
								<div class="pbminfotech-ele-fid-style-2">
									<div class="pbmit-fld-contents">
										<div class="pbmit-fld-wrap text-center">
											<h4 class="pbmit-fid-inner">
												<span class="pbmit-fid-before"></span>
												<span class="pbmit-number-rotate numinate"><CountUp end={98} enableScrollSpy /></span>
												<span class="pbmit-fid"><span>%</span></span>
											</h4>
											<span class="pbmit-fid-title">Accuracy rate in patient-specific <br></br>implant fitting  </span>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-6 col-xl-3 mt-xl-0 mt-4">
								<div class="pbminfotech-ele-fid-style-2">
									<div class="pbmit-fld-contents">
										<div class="pbmit-fld-wrap text-center">
											<h4 class="pbmit-fid-inner">
												<span class="pbmit-fid-before"></span>
												<span class="pbmit-number-rotate numinate"><CountUp end={100} enableScrollSpy /></span>
												<span class="pbmit-fid"><span>+</span></span>
											</h4>
											<span class="pbmit-fid-title">Healthcare facilities and surgeons <br></br>trust our technology</span>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-6 col-xl-3 mt-xl-0 mt-4">
								<div class="pbminfotech-ele-fid-style-2">
									<div class="pbmit-fld-contents">
										<div class="pbmit-fld-wrap text-center">
											<h4 class="pbmit-fid-inner">
												<span class="pbmit-fid-before"></span>
												<span class="pbmit-number-rotate numinate"><CountUp end={40} enableScrollSpy /></span>
												<span class="pbmit-fid"><span>%</span></span>
											</h4>
											<span class="pbmit-fid-title">Reduction in average surgery <br></br>time with pre-planning </span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>


				{/* <section class="section-mdb pb-50 pt-50">
					<div class="container-fluid">
						<div class="swiper-slider marquee">
							<Marquee>
								<div class="swiper-wrapper">
									<article class="pbmit-marquee-effect-style-1 swiper-slide">
										<div class="pbmit-tag-wrapper">
											<h2 class="pbmit-element-title" data-text="Consecte">
												Consecte
											</h2>
										</div>
									</article>
									<article class="pbmit-marquee-effect-style-1 swiper-slide">
										<div class="pbmit-tag-wrapper">
											<h2 class="pbmit-element-title" data-text="Immunology">
												Immunology
											</h2>
										</div>
									</article>
									<article class="pbmit-marquee-effect-style-1 swiper-slide">
										<div class="pbmit-tag-wrapper">
											<h2 class="pbmit-element-title" data-text="Equipment">
												Equipment
											</h2>
										</div>
									</article>
									<article class="pbmit-marquee-effect-style-1 swiper-slide">
										<div class="pbmit-tag-wrapper">
											<h2 class="pbmit-element-title" data-text="Medicine">
												Medicine
											</h2>
										</div>
									</article>
									<article class="pbmit-marquee-effect-style-1 swiper-slide">
										<div class="pbmit-tag-wrapper">
											<h2 class="pbmit-element-title" data-text="Scientific">
												Scientific
											</h2>
										</div>
									</article>
									<article class="pbmit-marquee-effect-style-1 swiper-slide">
										<div class="pbmit-tag-wrapper">
											<h2 class="pbmit-element-title" data-text="Research">
												Research
											</h2>
										</div>
									</article>
								</div>
							</Marquee>
						</div>
					</div>
				</section> */}
			


				<section class="section-lg pbmit-bg-color-blackish px-xl-4 px-2 homeservice pt-50 pb-50 mt-40">
					<div class="container">
						<div class="row g-0 align-items-center">
							<div class="col-md-12 col-768-12">
								<div class="pbmit-heading-subheading animation-style2 text-center">					
									<h2 class="pbmit-title">Our Services</h2>
									<p className="colorw">We offer a range of services to cater to your specific needs:</p>
								</div>
							</div>				
						</div>
					</div>
					<div class="container-fluid">
						<div class="swiper-slider">
							<div class="swiper-wrapper1">
								<Slider {...settings1}>
									<article class="pbmit-service-style-4 swiper-slide">
										<div class="pbminfotech-post-item">
											<div class="pbminfotech-box-content">
												<div class="pbmit-box-content-wrap">
													<div class="pbmit-service-image-wrapper">
														<div class="pbmit-featured-img-wrapper">
															<div class="pbmit-featured-wrapper">
																<img src="images/homepage-2/service/service-img-01.jpg" class="img-fluid" alt="" />
															</div>
														</div>
													</div>
													<div class="pbmit-box-content-inner">
														<div class="pbmit-contant-box">
															<h3 class="pbmit-service-title">
																<a href="service-details.html">3D Modeling</a>
															</h3>
															<div class="pbmit-service-description">
																 Our skilled designers create detailed 3D models for various applications, from educational models to complex structural designs.
															</div>
														</div>
													</div>
												</div>
												<div class="pbmit-shape-wraper">
													<div class="pbmit-shape-wraper-inner">
														<a class="pbmit-service-btn" href="service-details.html" title="Elemental Analysis">
															<span class="pbmit-button-icon-wrapper">
																<span class="pbmit-button-icon">
																	<i class="pbmit-base-icon-black-arrow-1"></i>
																</span>
															</span>
														</a>
													</div>
												</div>
											</div>
										</div>
									</article>

									<article class="pbmit-service-style-4 swiper-slide">
										<div class="pbminfotech-post-item">
											<div class="pbminfotech-box-content">
												<div class="pbmit-box-content-wrap">
													<div class="pbmit-service-image-wrapper">
														<div class="pbmit-featured-img-wrapper">
															<div class="pbmit-featured-wrapper">
																<img src="images/homepage-2/service/service-img-02.jpg" class="img-fluid" alt="" />
															</div>
														</div>
													</div>
													<div class="pbmit-box-content-inner">
														<div class="pbmit-contant-box">
															<h3 class="pbmit-service-title">
																<a href="service-details.html">Customized Surgical Implants</a>
															</h3>
															<div class="pbmit-service-description">
																We utilize biocompatible materials and advanced 3D printing techniques to manufacture patient-specific implants for optimal fit and function.
															</div>
														</div>
													</div>
												</div>
												<div class="pbmit-shape-wraper">
													<div class="pbmit-shape-wraper-inner">
														<a class="pbmit-service-btn" href="service-details.html" title="Elemental Analysis">
															<span class="pbmit-button-icon-wrapper">
																<span class="pbmit-button-icon">
																	<i class="pbmit-base-icon-black-arrow-1"></i>
																</span>
															</span>
														</a>
													</div>
												</div>
											</div>
										</div>
									</article>

									<article class="pbmit-service-style-4 swiper-slide">
										<div class="pbminfotech-post-item">
											<div class="pbminfotech-box-content">
												<div class="pbmit-box-content-wrap">
													<div class="pbmit-service-image-wrapper">
														<div class="pbmit-featured-img-wrapper">
															<div class="pbmit-featured-wrapper">
																<img src="images/homepage-2/service/service-img-03.jpg" class="img-fluid" alt="" />
															</div>
														</div>
													</div>
													<div class="pbmit-box-content-inner">
														<div class="pbmit-contant-box">
															<h3 class="pbmit-service-title">
																<a href="service-details.html">3D Surgical Guides & Jigs</a>
															</h3>
															<div class="pbmit-service-description">
																We design and create sterile, biocompatible surgical guides and jigs, enhancing surgical accuracy and minimizing complications.
															</div>
														</div>
													</div>
												</div>
												<div class="pbmit-shape-wraper">
													<div class="pbmit-shape-wraper-inner">
														<a class="pbmit-service-btn" href="service-details.html" title="Elemental Analysis">
															<span class="pbmit-button-icon-wrapper">
																<span class="pbmit-button-icon">
																	<i class="pbmit-base-icon-black-arrow-1"></i>
																</span>
															</span>
														</a>
													</div>
												</div>
											</div>
										</div>
									</article>

									<article class="pbmit-service-style-4 swiper-slide">
										<div class="pbminfotech-post-item">
											<div class="pbminfotech-box-content">
												<div class="pbmit-box-content-wrap">
													<div class="pbmit-service-image-wrapper">
														<div class="pbmit-featured-img-wrapper">
															<div class="pbmit-featured-wrapper">
																<img src="images/homepage-2/service/service-img-04.jpg" class="img-fluid" alt="" />
															</div>
														</div>
													</div>
													<div class="pbmit-box-content-inner">
														<div class="pbmit-contant-box">
															<h3 class="pbmit-service-title">
																<a href="service-details.html">3D Design Services</a>
															</h3>
															<div class="pbmit-service-description">
																Our team collaborates with surgeons and medical professionals, translating their ideas into accurate 3D models, implants, and surgical guides.
															</div>
														</div>
													</div>
												</div>
												<div class="pbmit-shape-wraper">
													<div class="pbmit-shape-wraper-inner">
														<a class="pbmit-service-btn" href="service-details.html" title="Elemental Analysis">
															<span class="pbmit-button-icon-wrapper">
																<span class="pbmit-button-icon">
																	<i class="pbmit-base-icon-black-arrow-1"></i>
																</span>
															</span>
														</a>
													</div>
												</div>
											</div>
										</div>
									</article>								
								</Slider>
							</div>
						</div>
					</div>
				</section>

					<section class="about-three-bg section-lg pbmit-bg-color-white pt-50 pb-10 mt-50 mb-40">
					<div class="container">
						<div class="pb-5 align-items-center">
							<div class="row g-0">
								<div class="col-md-12 col-xl-4">
									<div class="about-three-content pr-15">
										<div class="pbmit-heading-subheading animation-style2 mb-10">										
											<h2 class="pbmit-title">Our Expertise</h2>
											<div class="pbmit-heading-desc titlesubh">
												Our team consists of highly qualified 3D designers, engineers, and medical professionals with extensive experience in:
											</div>
											<ul class="list-group ajrt ajrx">
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															3D Design Software: We utilize industry-standard medical design software to ensure models comply with regulatory requirements.
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Biocompatible Materials: We prioritize biocompatible materials that are safe and function seamlessly within the body.
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Medical Device Manufacturing: We adhere to strict quality control procedures and collaborate with reputable manufacturers for implant production.
														</li>														
                                                       
													</ul>
										</div>
									
									</div>
								</div>
								<div class="col-md-12 col-xl-4">
									<div class="about-us-one-left-boxx2">
										<div class="ihbox-style-area"></div>
                                    </div>
								</div>
								<div class="col-md-12 col-xl-4">
									<div class="about-three-content pr-15">
										<div class="pbmit-heading-subheading animation-style2 mb-10">										
											<h2 class="pbmit-title">Why Choose Us?</h2>
											<div class="pbmit-heading-desc titlesubh">
												We are dedicated to providing exceptional service and innovative solutions. Here’s what sets us apart:
											</div>
											<ul class="list-group ajrt ajrx">
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Collaborative Approach: We work closely with you to understand your specific needs and deliver customized solutions.
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Unwavering Quality: We prioritize accuracy, biocompatibility, and quality control in every step of the process.
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Advanced Technology: We leverage cutting-edge 3D design and printing technology to create groundbreaking solutions.
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Commitment to Innovation: We continuously explore new possibilities in 3D technology to advance medical care.
														</li>
                                                       
													</ul>
										</div>
									
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>






			<section class="pbmit-bg-color-secondary testimonial-sec-two mb-40">
				<div class="container-fluid p-0">
					<div class="row g-0">
						<div class="col-md-12 col-xl-6">
							<div class="testimonial-two-bg">
								<div class="fid-style-box">
									<div class="pbminfotech-ele-fid-style-3">
										<div class="pbmit-fld-contents">
											<div class="pbmit-fld-wrap">
												<h4 class="pbmit-fid-inner">
													<span class="pbmit-fid-before"></span>
													<span class="pbmit-number-rotate numinate"><CountUp end={100} enableScrollSpy /></span>
													<span class="pbmit-fid"><span> +</span></span>
												</h4>
												<span class="pbmit-fid-title">Healthcare facilities and surgeons <br></br>trust our technology</span>
											</div>
										</div>
									 
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-12 col-xl-6">
							<div class="testimonial-two-box">
								<div class="pbmit-heading-subheading animation-style5">
									<h4 class="pbmit-subtitle">Testimonial </h4>
									<h2 class="pbmit-title">Trusted by Leading Surgeons </h2>
								</div>
								<div class="swiper-slider1">
									<div class="swiper-wrapper1">
										<Slider {...settings2}>
										<article class="pbmit-testimonial-style-2 swiper-slide">
											<div class="pbminfotech-post-item">
												<div class="pbmit-box-content-wrap">
													<div class="pbminfotech-box-desc">
														<blockquote class="pbminfotech-testimonial-text">
															<p>“Curewith3D's surgical guides have transformed my complex revision surgeries. The precision is remarkable, and my patients experience better outcomes with reduced surgical time.”</p>
														</blockquote>
													</div>
													<div class="pbminfotech-box-author d-flex align-items-center">
														<div class="pbminfotech-box-img">
															<div class="pbmit-featured-img-wrapper">
																<div class="pbmit-featured-wrapper">
																	<img src="images/homepage-2/testimonial/testimonial-img-02.jpg" class="img-fluid" alt=""/>
																</div>
															</div>
														</div>
														<div class="pbmit-auther-content">
															<h3 class="pbminfotech-box-title">Dr. Rajesh Sharma</h3>
															<div class="pbminfotech-testimonial-detail">Orthopedic Surgeon</div>
														</div>
													</div>
												</div>
											</div>
										</article>
										<article class="pbmit-testimonial-style-2 swiper-slide">
											<div class="pbminfotech-post-item">
												<div class="pbmit-box-content-wrap">
													<div class="pbminfotech-box-desc">
														<blockquote class="pbminfotech-testimonial-text">
															<p>“The patient-specific implants and planning models enable me to approach complex reconstructions with confidence. The quality and accuracy are consistently excellent.”</p>
														</blockquote>
													</div>
													<div class="pbminfotech-box-author d-flex align-items-center">
														<div class="pbminfotech-box-img">
															<div class="pbmit-featured-img-wrapper">
																<div class="pbmit-featured-wrapper">
																	<img src="images/homepage-2/testimonial/testimonial-img-06.jpg" class="img-fluid" alt=""/>
																</div>
															</div>
														</div>
														<div class="pbmit-auther-content">
															<h3 class="pbminfotech-box-title">Dr. Priya Menon</h3>
															<div class="pbminfotech-testimonial-detail">Maxillofacial Surgeon</div>
														</div>
													</div>
												</div>
											</div>
										</article>
										<article class="pbmit-testimonial-style-2 swiper-slide">
											<div class="pbminfotech-post-item">
												<div class="pbmit-box-content-wrap">
													<div class="pbminfotech-box-desc">
														<blockquote class="pbminfotech-testimonial-text">
															<p>“Digital workflow integration and precision guides have elevated my practice. Curewith3D delivers reliable solutions that improve predictability and patient satisfaction.”</p>
														</blockquote>
													</div>
													<div class="pbminfotech-box-author d-flex align-items-center">
														<div class="pbminfotech-box-img">
															<div class="pbmit-featured-img-wrapper">
																<div class="pbmit-featured-wrapper">
																	<img src="images/homepage-2/testimonial/testimonial-img-01.jpg" class="img-fluid" alt=""/>
																</div>
															</div>
														</div>
														<div class="pbmit-auther-content">
															<h3 class="pbminfotech-box-title">Dr. Amit Patel</h3>
															<div class="pbminfotech-testimonial-detail">Dental Implantologist</div>
														</div>
													</div>
												</div>
											</div>
										</article>
																	
										</Slider>
									</div>
								</div>
							
							</div>
						</div>
					</div>
				</div>
			</section>

 
			</div>
		</>
	);
}
