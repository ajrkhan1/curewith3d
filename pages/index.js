import Head from "next/head";
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
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		autoplay:true,
		autoplaySpeed: 1600,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,				
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
				<title>Curewith3D | Medical 3D Printing Services for Healthcare</title>
				<meta name="description" content="Discover how medical 3D printing innovates patient care by creating precise physical models from digital designs." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" />
			</Head>
			<div class="page-content">

				<section className="bannercx pt-30 pb-30">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-sm-6">
								{/* <h2 className="h2bannerh">Get</h2> */}
								<h1 className="h1cba">Unmatched Accuracy. Unrivaled Confidence.</h1>
								<h2 class="bannetexth">
									<TypeAnimation
								
										sequence={[
									
										'With Customized Dental Implants',		
										800,	
										'With Customized Orthopedic Implants  ',		
										800,
										'With Customized Surgical Guides',		
										800,
													
										]}
										speed={10}
										deletionSpeed={5}
										repeat={Infinity}										
									/>
									</h2>
									<p>CureWith3D, a healthcare-innovation company focused on creating customized, patient-specific 3D-printed surgical guides, orthopedic & dental implants, and anatomical models.</p>
									{/* <h2 className="h2bannerh">with Custom Surgical Guides.</h2> */}
							</div>
							<div className="col-sm-1"></div>
							<div className="col-sm-5">
								<Slider {...settings}>
									<div className="bannersl">
								     	 <img src="/images/main/slider/1.png" class="img-fluid w-100" alt="Brain Anatomy Model"/> 
									</div>
									<div className="bannersl">
								     	 <img src="/images/main/slider/2.png" class="img-fluid w-100" alt="Brain Anatomy Model"/> 
									</div>
									<div className="bannersl">
								     	 <img src="/images/main/slider/3.png" class="img-fluid w-100" alt="Brain Anatomy Model"/> 
									</div>
									<div className="bannersl">
								     	 <img src="/images/main/slider/4.png" class="img-fluid w-100" alt="Brain Anatomy Model"/> 
									</div>
								</Slider>
							</div>
						</div>
					</div>
				</section>

				{/* <section class="about-us-section-one fadeIn animated">
					<div class="container-fluid p-0">
						<div class="row g-0">
							<div class="col-md-12 col-xl-6">
								<div class="about-us-one-left-box">
									<div class="ihbox-style-area">
										<div class="pbmit-ihbox-style-3">
											<div class="pbmit-ihbox-box d-flex">
												<a class="pbmin-lightbox-video" href="#">
													<div class="pbmit-ihbox-icon">
														<div class="pbmit-ihbox-icon-wrapper pbmit-icon-type-icon">
															<i class="fa fa-play"></i>
														</div>
													</div>
												</a>
												<div class="pbmit-ihbox-contents">
													<h2 class="pbmit-element-title">
														<a href="#">
															<span class="pbmit-button-text">Watch Video</span>
															<span class="pbmit-button-icon-wrapper">
																<span class="pbmit-button-icon">
																	<i class="pbmit-base-icon-black-arrow-1"></i>
																</span>
															</span>
														</a>
													</h2>
												</div>
											</div>
											<div class="pbmit-sticky-corner  pbmit-bottom-left-corner">
												<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
													<path d="M30 30V0C30 16 16 30 0 30H30Z"></path>
												</svg>
											</div>
											<div class="pbmit-sticky-corner pbmit-top-right-corner">
												<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
													<path d="M30 30V0C30 16 16 30 0 30H30Z"></path>
												</svg>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-12 col-xl-6">
								<div class="about-us-one-right-box pbmit-bg-color-global">
									<div class="pbmit-heading-subheading animation-style5">							
										<h4 class="small-title">Transforming Healthcare with Precision 3D Medical Solutions</h4>
									</div>
									<p class="pbmit-text">India's Leading 3D Medical Printing Innovation Hub for Patient-Specific Surgical Solutions</p>
									<a class="pbmit-btn pbmit-btn-blackish" href="#">
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
				</section> */}
<br/>
<br/>
				<section class="about-three-bg section-lg pbmit-bg-color-white">
					<div class="container">
						<div class="pb-5">
							<div class="row g-0">
								<div class="col-md-12 col-xl-6">
									<div class="video-box">
										<video class="pbmit-video" src="/images/main/video.mp4" autoplay="" loop muted="muted" playsinline=""></video>
									</div>
								</div>
								<div class="col-md-12 col-xl-6">
									<div class="about-three-content">
										<div class="pbmit-heading-subheading animation-style2 mb-10">
											<h4 class="pbmit-subtitle">Welcome to Curewith3D</h4>
											<h2 class="pbmit-title">We are</h2>
											<div class="pbmit-heading-desc">
												CureWith3D, a healthcare-innovation company focused on creating customized, patient-specific 3D-printed surgical guides, orthopedic & dental implants, and anatomical models. From segmentation and 3D modelling to surgical planning and follow-up support, we help patients understand their path and feel supported every step of the way. Based in India and connected globally, we deliver quality care and cost-effective solutions that make a difference.
											</div>
										</div>
										{/* <div class="d-flex list-group-style">
										<div>
											<ul class="list-group list-group-borderless">
												<li class="list-group-item">
													<span class="pbmit-icon-list-icon">
														<i aria-hidden="true" class="pbmit-xleb-icon pbmit-xleb-icon-check"></i>						
													</span>
													<span class="pbmit-icon-list-text">Cleanliness Ensured </span>
												</li>
												<li class="list-group-item">
													<span class="pbmit-icon-list-icon">
														<i aria-hidden="true" class="pbmit-xleb-icon pbmit-xleb-icon-check"></i>						
													</span>
													<span class="pbmit-icon-list-text">Fast Report Delivery</span>
												</li>
												<li class="list-group-item">
													<span class="pbmit-icon-list-icon">
														<i aria-hidden="true" class="pbmit-xleb-icon pbmit-xleb-icon-check"></i>						
													</span>
													<span class="pbmit-icon-list-text">Expert Phlebotomists</span>
												</li>
											</ul>
										</div>
										<div class="ps-5">
											<ul class="list-group list-group-borderless">
												<li class="list-group-item">
													<span class="pbmit-icon-list-icon">
														<i aria-hidden="true" class="pbmit-xleb-icon pbmit-xleb-icon-check"></i>						
													</span>
													<span class="pbmit-icon-list-text">Accuracy in Findings</span>
												</li>
												<li class="list-group-item">
													<span class="pbmit-icon-list-icon">
														<i aria-hidden="true" class="pbmit-xleb-icon pbmit-xleb-icon-check"></i>						
													</span>
													<span class="pbmit-icon-list-text">Microbiology Lab</span>
												</li>
												<li class="list-group-item">
													<span class="pbmit-icon-list-icon">
														<i aria-hidden="true" class="pbmit-xleb-icon pbmit-xleb-icon-check"></i>						
													</span>
													<span class="pbmit-icon-list-text">Easy Testing Procedure</span>
												</li>
											</ul>
										</div>
									</div> */}
										<div class="pt-4">
											<a class="pbmit-btn pbmit-btn-blackish" href="#">
												<span class="pbmit-button-content-wrapper">
													<span class="pbmit-button-icon">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
															<path d="m31 50.979c-.362.007-.727-.081-1.049-.28-.929-.572-1.212-1.814-.653-2.742.047-.082 5.886-9.826 17.032-15.958h-43.33c-1.103 0-2-.897-2-2s.897-2 2-2h43.33c-11.084-6.097-16.989-15.884-17.047-15.982-.547-.934-.244-2.177.689-2.73.946-.561 2.192-.236 2.757.715.909 1.45 9.433 14.449 24.722 18.046.915.225 1.549 1.026 1.549 1.952s-.63 1.729-1.532 1.948c-15.354 3.61-23.849 16.626-24.767 18.099-.36.577-1.025.919-1.7.932z"></path>
														</svg>
													</span>
													<span class="pbmit-button-text">Know More</span>
												</span>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="pb-md-5 pb-4">
							<div class="pbmit-devider-text">
								<span>fun and facts</span>
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


				<section class="section-mdb pb-50 pt-50">
					<div class="container-fluid">
						<div class="swiper-slider marquee">
							<Marquee>
								<div class="swiper-wrapper">
									<article class="pbmit-marquee-effect-style-1 swiper-slide">
										<div class="pbmit-tag-wrapper">
											<h2 class="pbmit-element-title" data-text="3D Surgical Models">
												3D Surgical Models
											</h2>
										</div>
									</article>
									<article class="pbmit-marquee-effect-style-1 swiper-slide">
										<div class="pbmit-tag-wrapper">
											<h2 class="pbmit-element-title" data-text="Patient Specific Implants">
												Patient Specific Implants
											</h2>
										</div>
									</article>
									<article class="pbmit-marquee-effect-style-1 swiper-slide">
										<div class="pbmit-tag-wrapper">
											<h2 class="pbmit-element-title" data-text="Custom 3D Printed Surgical Guides">
												Custom 3D Printed Surgical Guides
											</h2>
										</div>
									</article>
									
									
								</div>
							</Marquee>
						</div>
					</div>
				</section>
				{/* <!-- Marquee End -->

			<!-- Service Start -->  */}
				<section class="section-lg pbmit-bg-color-blackish px-xl-4 px-2 homeservice pt-50 pb-50">
					<div class="container">
						<div class="row g-0 align-items-center">
							<div class="col-md-6 col-768-12">
								<div class="pbmit-heading-subheading animation-style2">
									<h4 class="pbmit-subtitle">Our Services</h4>
									<h2 class="pbmit-title">3D Printing Services</h2>
								</div>
							</div>
							<div class="col-md-6 colorw">
								Get Precision In Your Practice/ Precision Tools for Smarter Surgical Decisions/ Advanced 3D Solutions Built for Clinical Precision
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
																<img src="/images/main/patient-specific-implants.jpg" class="img-fluid" alt="" />
															</div>
														</div>
													</div>
													<div class="pbmit-box-content-inner">
														<div class="pbmit-contant-box">
															<h3 class="pbmit-service-title">
																<a href="/patient-specific-implants">Patient-Specific Implants </a>
															</h3>
															<div class="pbmit-service-description">
																Biocompatible 3D-printed implants customized to individual patient anatomy.
															</div>
														</div>
													</div>
												</div>
												<div class="pbmit-shape-wraper">
													<div class="pbmit-shape-wraper-inner">
														<a class="pbmit-service-btn" href="/patient-specific-implants" title="Elemental Analysis">
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
																<img src="/images/main/custom-surgical-guides.jpg" class="img-fluid" alt="" />
															</div>
														</div>
													</div>
													<div class="pbmit-box-content-inner">
														<div class="pbmit-contant-box">
															<h3 class="pbmit-service-title">
																<a href="#">Custom Surgical Guides </a>
															</h3>
															<div class="pbmit-service-description">
																Patient-specific surgical guides with millimeter-perfect accuracy during complex orthopedic, dental, and maxillofacial procedures.
															</div>
														</div>
													</div>
												</div>
												<div class="pbmit-shape-wraper">
													<div class="pbmit-shape-wraper-inner">
														<a class="pbmit-service-btn" href="#" title="Elemental Analysis">
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
																<img src="/images/main/virtual-surgery planning.jpg" class="img-fluid" alt="" />
															</div>
														</div>
													</div>
													<div class="pbmit-box-content-inner">
														<div class="pbmit-contant-box">
															<h3 class="pbmit-service-title">
																<a href="#">Virtual Surgery Planning  </a>
															</h3>
															<div class="pbmit-service-description">
																Advanced digital simulations using patient-specific 3D models to rehearse surgeries.
															</div>
														</div>
													</div>
												</div>												
												<div class="pbmit-shape-wraper">
													<div class="pbmit-shape-wraper-inner">
														<a class="pbmit-service-btn" href="#" title="Elemental Analysis">
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
																<img src="/images/main/anatomical-models.jpg" class="img-fluid" alt="" />
															</div>
														</div>
													</div>
													<div class="pbmit-box-content-inner">
														<div class="pbmit-contant-box">
															<h3 class="pbmit-service-title">
																<a href="#">Anatomical Models  </a>
															</h3>
															<div class="pbmit-service-description">
																Detailed pre-surgical planning models that enable surgeons to visualize and practice complex cases.
															</div>
														</div>
													</div>
												</div>
												<div class="pbmit-shape-wraper">
													<div class="pbmit-shape-wraper-inner">
														<a class="pbmit-service-btn" href="#" title="Elemental Analysis">
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
																<img src="/images/main/medical-device-prototyping.jpg" class="img-fluid" alt="" />
															</div>
														</div>
													</div>
													<div class="pbmit-box-content-inner">
														<div class="pbmit-contant-box">
															<h3 class="pbmit-service-title">
																<a href="#">Medical Device Prototyping </a>
															</h3>
															<div class="pbmit-service-description">
																Rapid prototyping services for medical device manufacturers and innovators developing next-gen healthcare solutions.
															</div>
														</div>
													</div>
												</div>
												<div class="pbmit-shape-wraper">
													<div class="pbmit-shape-wraper-inner">
														<a class="pbmit-service-btn" href="#" title="Elemental Analysis">
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
																<img src="/images/main/medical-education-model.jpg" class="img-fluid" alt="" />
															</div>
														</div>
													</div>
													<div class="pbmit-box-content-inner">
														<div class="pbmit-contant-box">
															<h3 class="pbmit-service-title">
																<a href="#">Patient Education Models </a>
															</h3>
															<div class="pbmit-service-description">
																Visual anatomical models that help you communicate diagnoses & treatment plans effectively to patients.
															</div>
														</div>
													</div>
												</div>
												<div class="pbmit-shape-wraper">
													<div class="pbmit-shape-wraper-inner">
														<a class="pbmit-service-btn" href="#" title="Elemental Analysis">
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



				<section class="section-lgx pt-40 pb-40 about-three-bg pbmit-bg-color-white mt-50 mb-50">
					<div class="container">
						<div class="pbmit-heading-subheading text-center animation-style2">
							{/* <h4 class="pbmit-subtitle">Why Curewith3D?</h4> */}
							<h2 class="pbmit-title">Specialties We Serve </h2>
						</div>
						<Tabs>
							<div class="pbmit-tab maintabs">
								<ul class="nav nav-tabs" role="tablist">
									<TabList>
										<Tab>
											<span class="nav-item">
												<a class="nav-link" aria-selected="true" role="tab">
													<span>Orthopedics</span>
													<i class=" pbmit-base-icon-black-arrow-1"></i>
												</a>
											</span>
										</Tab>

										<Tab>
											<span class="nav-item">
												<a class="nav-link" aria-selected="true" role="tab">
													<span>Oral & Maxillofacial Surgery</span>
													<i class=" pbmit-base-icon-black-arrow-1"></i>
												</a>
											</span>
										</Tab>
										<Tab>
											<span class="nav-item">
												<a class="nav-link" aria-selected="true" role="tab">
													<span>Neurosurgery</span>
													<i class=" pbmit-base-icon-black-arrow-1"></i>
												</a>
											</span>
										</Tab>
										<Tab>
											<span class="nav-item">
												<a class="nav-link" aria-selected="true" role="tab">
													<span>Oncology & Reconstructive Surgery </span>
													<i class=" pbmit-base-icon-black-arrow-1"></i>
												</a>
											</span>
										</Tab>
									</TabList>
								</ul>
								<div class="tab-content">
									<TabPanel>
										<div class="tab-pane show active" id="tab-2-1" role="tabpanel">
											<div class="pbmit-column-inner">
												<div class="row g-0 align-items-center">
													<div class="col-md-12 col-xl-5 pbmit-tab-img">
														<img src="images/homepage-1/tab/tab-img-01.jpg" class="img-fluid" alt="" />
													</div>
													<div class="col-md-12 col-xl-7 pbmit-tab-list">
														<h2>Orthopedics</h2>
														<div>Precision and predictability are critical in orthopedic surgery, where millimeters can determine long-term patient outcomes. Our advanced 3D planning solutions support surgeons in trauma management, joint replacement, limb reconstruction, and complex deformity correction surgeries. </div>
														<ul>
															<li class="list-group-item">
																Custom orthopedic surgical cutting guides or "jigs"
															</li>
															<li class="list-group-item">
																Osteotomy, drill, and screw guides
															</li>
															<li class="list-group-item">
																Patient specific orthopedic implants
															</li>
															<li class="list-group-item">
																Customized anatomical models
															</li>
															<li class="list-group-item">
																Bespoke pelvic implants
															</li>
															<li class="list-group-item">
																Virtual Surgery Planning (VSP)
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</TabPanel>
									<TabPanel>
										<div class="tab-pane" id="tab-2-2" role="tabpanel">
											<div class="pbmit-column-inner">
												<div class="row g-0 align-items-center">
													<div class="col-md-12 col-xl-5 pbmit-tab-img">
														<img src="images/homepage-1/tab/tab-img-02.jpg" class="img-fluid" alt="" />
													</div>
													<div class="col-md-12 col-xl-7 pbmit-tab-list">
														<h2>Oral & Maxillofacial Surgery </h2>
														<div>Craniofacial cases require exact anatomical restoration to protect aesthetics and function. Our advanced custom 3D-printed solutions elevate surgical precision in facial trauma repair, congenital corrections, corrective jaw surgery, & craniofacial reconstructions.</div>
														<ul>
															<li class="list-group-item">
																Patient-specific implants 
															</li>
															<li class="list-group-item">
																Cutting guides for Fibula free flap reconstruction 
															</li>
															<li class="list-group-item">
																Custom mandibular and maxillary splints 
															</li>
															<li class="list-group-item">
																Ankylosis release cutting guides 
															</li>
															<li class="list-group-item">
																Custom surgical guides for Bilateral Sagittal Split Osteotomy (BSSO) 
															</li>
															<li class="list-group-item">
																Custom subperiosteal mplants 
															</li>
															<li class="list-group-item">
																Bespoke Anatomical models 
															</li>
															<li class="list-group-item">
																Virtual surgery planning (VSP) 
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</TabPanel>
									<TabPanel>
										<div class="tab-pane" id="tab-2-3" role="tabpanel">
											<div class="pbmit-column-inner">
												<div class="row g-0 align-items-center">
													<div class="col-md-12 col-xl-5 pbmit-tab-img">
														<img src="images/homepage-1/tab/tab-img-03.jpg" class="img-fluid" alt="" />
													</div>
													<div class="col-md-12 col-xl-7 pbmit-tab-list">
														<h2>Neurosurgery  </h2>
														<div>Advanced 3D-printed, custom-fit spinal and cranial solutions engineered to achieve precise anatomical reconstruction and biomechanical stability. Developed to restore cranial and spinal defects while minimizing intraoperative complication risk. </div>
														<ul>
															<li class="list-group-item">
																Patient-specific anatomical models of brain & spine
															</li>
															<li class="list-group-item">
																Custom PEEK Cranial Plates 
															</li>
															<li class="list-group-item">
																3D printed custom titanium cranial plates
															</li>
															<li class="list-group-item">
																Custom Spinal Cages
															</li>
															<li class="list-group-item">
																Bespoke Spinal Jigs
															</li>
															<li class="list-group-item">
																Virtual Surgery Planning (VSP)
															</li>															
														</ul>
													</div>
												</div>
											</div>
										</div>
									</TabPanel>
									<TabPanel>
										<div class="tab-pane" id="tab-2-4" role="tabpanel">
											<div class="pbmit-column-inner">
												<div class="row g-0 align-items-center">
													<div class="col-md-12 col-xl-5 pbmit-tab-img">
														<img src="images/homepage-1/tab/tab-img-04.jpg" class="img-fluid" alt="" />
													</div>
													<div class="col-md-12 col-xl-7 pbmit-tab-list">
														<h2>Oncology & Reconstructive Surgery</h2>
														<div>Integrated solutions supporting precise tumor resection with safe surgical margins, followed by high-fidelity reconstructive outcomes that promote optimal post-resection restoration & faster recovery.</div>
														<ul>
															<li class="list-group-item">
																Tumor resection guides
															</li>
															<li class="list-group-item">
																Virtual Surgery Planning (VSP)
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</TabPanel>
							
								</div>
							</div>
						</Tabs>
					</div>
				</section>


				<section class="px-xl-4 px-2 weserve">
					<div class="container-fluid">
						<div class="row">
							<div className="col-sm-12">
								<div class="pbmit-heading-subheading text-center animation-style2">							
									<h2 class="pbmit-title">Why Curewith3D?</h2>
									<p>Because precision begins before the incision.</p>
								</div>
							</div>
							<div className="col-sm-3">
								<article class="pbmit-miconheading-style-7 swiper-slide">
									<div class="pbmit-ihbox-style-7">
										<div class="pbmit-ihbox-box">
											<div class="pbmit-icon-wrapper">
												<img src="/images/main/we-serve-orthopedics.jpg" class="img-fluid" alt=""/>
												<h2 class="pbmit-element-title">
													Proven Accuracy 
												</h2>
											</div>
											<div class="pbmit-content-wrapper">
												<div class="pbmit-heading-desc">Surgical guides with sub-millimeter precision.</div>
											</div>
										</div>
									</div>
								</article>
							</div>
							<div className="col-sm-3">
								<article class="pbmit-miconheading-style-7 swiper-slide">
									<div class="pbmit-ihbox-style-7">
										<div class="pbmit-ihbox-box">
											<div class="pbmit-icon-wrapper">
												<img src="/images/main/we-serve-oral.jpg" class="img-fluid" alt=""/>
												<h2 class="pbmit-element-title">
													Faster Turnaround 
												</h2>
											</div>
											<div class="pbmit-content-wrapper">
												<div class="pbmit-heading-desc">Digital workflow enables rapid production.</div>
											</div>
										</div>

									</div>
								</article>
							</div>
							<div className="col-sm-3">
								<article class="pbmit-miconheading-style-7 swiper-slide">
									<div class="pbmit-ihbox-style-7">
										<div class="pbmit-ihbox-box">
											<div class="pbmit-icon-wrapper">
											<img src="/images/main/we-serve-neurosurgery.jpg" class="img-fluid" alt=""/>
												<h2 class="pbmit-element-title">
													Regulatory Compliance 
												</h2>
											</div>
											<div class="pbmit-content-wrapper">
												<div class="pbmit-heading-desc">Full compliance with medical device regulations, quality management standards, and sterilization protocols.</div>
											</div>
										</div>

									</div>
								</article>
							</div>
							<div className="col-sm-3">
								<article class="pbmit-miconheading-style-7 swiper-slide">
									<div class="pbmit-ihbox-style-7">
										<div class="pbmit-ihbox-box">
											<div class="pbmit-icon-wrapper">
												<img src="/images/main/we-serve-oncology.jpg" class="img-fluid" alt=""/>
												<h2 class="pbmit-element-title">
													Dedicated Support
												</h2>
											</div>
											<div class="pbmit-content-wrapper">
												<div class="pbmit-heading-desc">24/7 support team available throughout the design, production, and implementation process.</div>
											</div>
										</div>

									</div>
								</article>
							</div>

						</div>
					</div>
				</section>


				<section class="px-xl-4 px-2 mt-50">
					<div class="container-fluid">
						<div class="row g-0">
							<div class="col-md-12 col-xl-6 fadeInLeft animated">
								<div class="contact-one-bg"></div>
							</div>
							<div class="col-md-12 col-xl-6 fadeInRight animated">
								<div class="contact-one-form-area pbmit-bg-color-blackish">
									<div class="pbmit-heading-subheading animation-style2">
										<h4 class="pbmit-subtitle">Contact Us</h4>
										<h2 class="pbmit-title">Transform Your Surgical Precision Today</h2>
									</div>
									<form className="formsc">
										<div class="row">											
											<div class="col-md-6">
												<input type="text" class="form-control" placeholder="Your Name" name="your-name" required />
											</div>
											<div class="col-md-6">
												<input name="emial-address" class="form-control" placeholder="Email Address" required />
											</div>
											<div class="col-md-6">											
												<input type="text" class="form-control" name="phone" maxlength="13" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
											</div>
											<div class="col-md-6">
												<select class="form-select" name="services" required>
													<option value="">Choose a Service</option>
													<option value="3D Surgical Models">3D Surgical Models</option>
													<option value="Patient Specific Implants">Patient Specific Implants</option>
													<option value="Custom 3D Printed Surgical Guides">Custom 3D Printed Surgical Guides</option>
												</select>
											</div>
											<div class="col-md-12">
												<div class="input-text-group">
													<textarea name="message" cols="40" rows="10" class="form-control" placeholder="Message" required></textarea>
												</div>
											</div>
										</div>
										<div>
											<div class="pbmit-button-wrapper">
												<button class="pbmit-btn pbmit-btn-white">
													<span class="pbmit-button-content-wrapper">
														<span class="pbmit-button-icon">
															<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
																<path d="m31 50.979c-.362.007-.727-.081-1.049-.28-.929-.572-1.212-1.814-.653-2.742.047-.082 5.886-9.826 17.032-15.958h-43.33c-1.103 0-2-.897-2-2s.897-2 2-2h43.33c-11.084-6.097-16.989-15.884-17.047-15.982-.547-.934-.244-2.177.689-2.73.946-.561 2.192-.236 2.757.715.909 1.45 9.433 14.449 24.722 18.046.915.225 1.549 1.026 1.549 1.952s-.63 1.729-1.532 1.948c-15.354 3.61-23.849 16.626-24.767 18.099-.36.577-1.025.919-1.7.932z"></path>
															</svg>
														</span>
														<span class="pbmit-button-text">Get Cost Estimate</span>
													</span>
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</section>
				
				<section class="section-lgt">
				<div class="container">
					<div class="pbmit-heading-subheading text-center animation-style2">
						<h4 class="pbmit-subtitle">How We Do It?</h4>
						<h2 class="pbmit-title">Simplifying Precision in Every Step </h2>
					</div>
					<div class="pt-4 ihbox-style-2-area">
						<article class="pbmit-miconheading-style-2">
							<div class="pbmit-ihbox-style-2">
								<div class="pbmit-ihbox-box">
									<div class="pbmit-ihbox-icon">
										<div class="pbmit-ihbox-icon-wrapper pbmit-ihbox-icon-type-text">01.</div>
									</div>
									<h2 class="pbmit-element-title">
										Submit Medical Imaging
									</h2>
									<div class="pbmit-heading-desc">
										Upload CT or MRI scans through our secure portal or coordinate directly with our clinical team.
									</div>
									<div class="pbmit-ihbox-btn">
										<a href="#">
											<span class="pbmit-button-text">Read More</span>
											<span class="pbmit-button-icon-wrapper">
												<span class="pbmit-button-icon">
													<i class="pbmit-base-icon-black-arrow-1"></i>
												</span>
											</span>
										</a>
									</div>
								</div>
							</div>
						</article>
						<article class="pbmit-miconheading-style-2">
							<div class="pbmit-ihbox-style-2">
								<div class="pbmit-ihbox-box">
									<div class="pbmit-ihbox-icon">
										<div class="pbmit-ihbox-icon-wrapper pbmit-ihbox-icon-type-text">02.</div>
									</div>
									<h2 class="pbmit-element-title">
										Virtual Planning
									</h2>
									<div class="pbmit-heading-desc">
										Our engineers create 3D anatomical reconstructions and design patient-specific solutions in consultation with your surgical team.
									</div>
									<div class="pbmit-ihbox-btn">
										<a href="#">
											<span class="pbmit-button-text">Read More</span>
											<span class="pbmit-button-icon-wrapper">
												<span class="pbmit-button-icon">
													<i class="pbmit-base-icon-black-arrow-1"></i>
												</span>
											</span>
										</a>
									</div>
								</div>
							</div>
						</article>
						<article class="pbmit-miconheading-style-2">
							<div class="pbmit-ihbox-style-2">
								<div class="pbmit-ihbox-box">
									<div class="pbmit-ihbox-icon">
										<div class="pbmit-ihbox-icon-wrapper pbmit-ihbox-icon-type-text">03.</div>
									</div>
									<h2 class="pbmit-element-title">
										Approval & Production
									</h2>
									<div class="pbmit-heading-desc">
										Review digital designs, provide feedback, and approve before we proceed with medical-grade 3D printing.
									</div>
									<div class="pbmit-ihbox-btn">
										<a href="#">
											<span class="pbmit-button-text">Read More</span>
											<span class="pbmit-button-icon-wrapper">
												<span class="pbmit-button-icon">
													<i class="pbmit-base-icon-black-arrow-1"></i>
												</span>
											</span>
										</a>
									</div>
								</div>
							</div>
						</article>
						<article class="pbmit-miconheading-style-2">
							<div class="pbmit-ihbox-style-2">
								<div class="pbmit-ihbox-box">
									<div class="pbmit-ihbox-icon">
										<div class="pbmit-ihbox-icon-wrapper pbmit-ihbox-icon-type-text">04.</div>
									</div>
									<h2 class="pbmit-element-title">
										Quality Verification
									</h2>
									<div class="pbmit-heading-desc">
										Every product undergoes dimensional inspection, biocompatibility validation, and sterilization before delivery.
									</div>
									<div class="pbmit-ihbox-btn">
										<a href="#">
											<span class="pbmit-button-text">Read More</span>
											<span class="pbmit-button-icon-wrapper">
												<span class="pbmit-button-icon">
													<i class="pbmit-base-icon-black-arrow-1"></i>
												</span>
											</span>
										</a>
									</div>
								</div>
							</div>
						</article>
						<article class="pbmit-miconheading-style-2">
							<div class="pbmit-ihbox-style-2">
								<div class="pbmit-ihbox-box">
									<div class="pbmit-ihbox-icon">
										<div class="pbmit-ihbox-icon-wrapper pbmit-ihbox-icon-type-text">05.</div>
									</div>
									<h2 class="pbmit-element-title">
										Clinical Application
									</h2>
									<div class="pbmit-heading-desc">
										Receive your custom solution with comprehensive documentation and clinical support for surgical implementation.  
									</div>
									<div class="pbmit-ihbox-btn">
										<a href="#">
											<span class="pbmit-button-text">Read More</span>
											<span class="pbmit-button-icon-wrapper">
												<span class="pbmit-button-icon">
													<i class="pbmit-base-icon-black-arrow-1"></i>
												</span>
											</span>
										</a>
									</div>
								</div>
							</div>
						</article>
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
																	<img src="images/homepage-2/testimonial/m1.jpg" class="img-fluid" alt=""/>
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
																	<img src="images/homepage-2/testimonial/f1.jpg" class="img-fluid" alt=""/>
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
																	<img src="images/homepage-2/testimonial/m2.jpg" class="img-fluid" alt=""/>
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
