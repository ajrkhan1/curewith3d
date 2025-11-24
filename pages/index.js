import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import React from "react";
import Slider from "react-slick";
import Marquee from "react-fast-marquee";
import CountUp, { useCountUp } from 'react-countup';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


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
				<title>Curewith3D | Medical 3D Printing Services for Healthcare</title>
				<meta name="description" content="Discover how medical 3D printing innovates patient care by creating precise physical models from digital designs." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" />
			</Head>
			<div class="page-content">

				<section class="about-us-section-one fadeIn animated">
					<div class="container-fluid p-0">
						<div class="row g-0">
							<div class="col-md-12 col-xl-6">
								<div class="about-us-one-left-box">
									<div class="ihbox-style-area">
										<div class="pbmit-ihbox-style-3">
											<div class="pbmit-ihbox-box d-flex">
												<a class="pbmin-lightbox-video" href="https://www.youtube.com/watch?v=iCbE6lRf2PU">
													<div class="pbmit-ihbox-icon">
														<div class="pbmit-ihbox-icon-wrapper pbmit-icon-type-icon">
															<i class="fa fa-play"></i>
														</div>
													</div>
												</a>
												<div class="pbmit-ihbox-contents">
													<h2 class="pbmit-element-title">
														<a href="https://www.youtube.com/watch?v=iCbE6lRf2PU">
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
										{/* <h4 class="pbmit-subtitle">Best Solutions For Laboratory</h4> */}
										{/* <h2 class="big-title">Transforming Healthcare with Precision 3D Medical Solutions</h2> */}
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
				</section>

				<section class="about-three-bg section-lg pbmit-bg-color-white">
					<div class="container">
						<div class="pb-5">
							<div class="row g-0">
								<div class="col-md-12 col-xl-6">
									<div class="video-box">
										<video class="pbmit-video" src="https://www.medcad.com/wp-content/uploads/2025/05/medcad-home-v3.mp4" autoplay="" loop muted="muted" playsinline=""></video>
									</div>
								</div>
								<div class="col-md-12 col-xl-6">
									<div class="about-three-content">
										<div class="pbmit-heading-subheading animation-style2 mb-10">
											<h4 class="pbmit-subtitle">We are</h4>
											<h2 class="pbmit-title">Welcome to Curewith3D</h2>
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
																<img src="images/homepage-2/service/service-img-01.jpg" class="img-fluid" alt="" />
															</div>
														</div>
													</div>
													<div class="pbmit-box-content-inner">
														<div class="pbmit-contant-box">
															<h3 class="pbmit-service-title">
																<a href="service-details.html">Patient-Specific Implants </a>
															</h3>
															<div class="pbmit-service-description">
																Biocompatible 3D-printed implants customized to individual patient anatomy.
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
																<a href="service-details.html">Anatomical Models  </a>
															</h3>
															<div class="pbmit-service-description">
																Detailed pre-surgical planning models that enable surgeons to visualize and practice complex cases.
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
																<a href="service-details.html">Virtual Surgery Planning  </a>
															</h3>
															<div class="pbmit-service-description">
																Advanced digital simulations using patient-specific 3D models to rehearse surgeries.
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
																<a href="service-details.html">Custom Surgical Guides </a>
															</h3>
															<div class="pbmit-service-description">
																Patient-specific surgical guides with millimeter-perfect accuracy during complex orthopedic, dental, and maxillofacial procedures.
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
																<img src="images/homepage-2/service/service-img-05.jpg" class="img-fluid" alt="" />
															</div>
														</div>
													</div>
													<div class="pbmit-box-content-inner">
														<div class="pbmit-contant-box">
															<h3 class="pbmit-service-title">
																<a href="service-details.html">Medical Device Prototyping </a>
															</h3>
															<div class="pbmit-service-description">
																Rapid prototyping services for medical device manufacturers and innovators developing next-gen healthcare solutions.
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
																<img src="images/homepage-2/service/service-img-06.jpg" class="img-fluid" alt="" />
															</div>
														</div>
													</div>
													<div class="pbmit-box-content-inner">
														<div class="pbmit-contant-box">
															<h3 class="pbmit-service-title">
																<a href="service-details.html">Patient Education Models </a>
															</h3>
															<div class="pbmit-service-description">
																Visual anatomical models that help you communicate diagnoses & treatment plans effectively to patients.
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



				<section class="section-lgx pt-40 pb-40 about-three-bg pbmit-bg-color-white mt-50 mb-50">
					<div class="container">
						<div class="pbmit-heading-subheading text-center animation-style2">
							<h4 class="pbmit-subtitle">Why Curewith3D?</h4>
							<h2 class="pbmit-title">Because precision begins before the incision.</h2>
						</div>
						<Tabs>
							<div class="pbmit-tab maintabs">
								<ul class="nav nav-tabs" role="tablist">
									<TabList>
										<Tab>
											<span class="nav-item">
												<a class="nav-link" aria-selected="true" role="tab">
													<span>Proven Accuracy</span>
													<i class=" pbmit-base-icon-black-arrow-1"></i>
												</a>
											</span>
										</Tab>

										<Tab>
											<span class="nav-item">
												<a class="nav-link" aria-selected="true" role="tab">
													<span>Faster Turnaround</span>
													<i class=" pbmit-base-icon-black-arrow-1"></i>
												</a>
											</span>
										</Tab>
										<Tab>
											<span class="nav-item">
												<a class="nav-link" aria-selected="true" role="tab">
													<span>Cost-Effective Solutions </span>
													<i class=" pbmit-base-icon-black-arrow-1"></i>
												</a>
											</span>
										</Tab>
										<Tab>
											<span class="nav-item">
												<a class="nav-link" aria-selected="true" role="tab">
													<span>Regulatory Compliance </span>
													<i class=" pbmit-base-icon-black-arrow-1"></i>
												</a>
											</span>
										</Tab>
										<Tab>
											<span class="nav-item">
												<a class="nav-link" aria-selected="true" role="tab">
													<span>Dedicated Support</span>
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
														<h2>Well Ensure You Always Covid 19 Vaccine.</h2>
														<div>We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers, and growing overall sales. Give us a call.</div>
														<ul>
															<li class="list-group-item">
																Access Expert Advice For A Thriving Life
															</li>
															<li class="list-group-item">
																Benefits Of Health Conscious Living
															</li>
															<li class="list-group-item">
																Benefits Of Proactive Health Management
															</li>
															<li class="list-group-item">
																Countless Benefits Of Prioritizing Health
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
														<h2>Coronavirus disease (COVID-19): Vaccines,</h2>
														<div>There are many variations of passages of Lorem Ipsumbut the majority have suffered alteration in some form, by injected humour, or words which dont look even.</div>
														<ul>
															<li class="list-group-item">
																Access Expert Advice For A Thriving Life
															</li>
															<li class="list-group-item">
																Benefits Of Health Conscious Living
															</li>
															<li class="list-group-item">
																Benefits Of Proactive Health Management
															</li>
															<li class="list-group-item">
																Countless Benefits Of Prioritizing Health
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
														<h2>Genetics research is the scientific discipline.</h2>
														<div>We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers, and growing overall sales. Give us a call.</div>
														<ul>
															<li class="list-group-item">
																Access Expert Advice For A Thriving Life
															</li>
															<li class="list-group-item">
																Benefits Of Health Conscious Living
															</li>
															<li class="list-group-item">
																Benefits Of Proactive Health Management
															</li>
															<li class="list-group-item">
																Countless Benefits Of Prioritizing Health
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
														<h2>Traditional approaches to laboratory diagnosis.</h2>
														<div>There are many variations of passages of Lorem Ipsumbut the majority have suffered alteration in some form, by injected humour, or words which dont look even.</div>
														<ul>
															<li class="list-group-item">
																Access Expert Advice For A Thriving Life
															</li>
															<li class="list-group-item">
																Benefits Of Health Conscious Living
															</li>
															<li class="list-group-item">
																Benefits Of Proactive Health Management
															</li>
															<li class="list-group-item">
																Countless Benefits Of Prioritizing Health
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</TabPanel>
									<TabPanel>
										<div class="tab-pane" id="tab-2-5" role="tabpanel">
											<div class="pbmit-column-inner">
												<div class="row g-0 align-items-center">
													<div class="col-md-12 col-xl-5 pbmit-tab-img">
														<img src="images/homepage-1/tab/tab-img-05.jpg" class="img-fluid" alt="" />
													</div>
													<div class="col-md-12 col-xl-7 pbmit-tab-list">
														<h2>Blood stem cells and blood cell development.</h2>
														<div>We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers, and growing overall sales. Give us a call.</div>
														<ul>
															<li class="list-group-item">
																Access Expert Advice For A Thriving Life
															</li>
															<li class="list-group-item">
																Benefits Of Health Conscious Living
															</li>
															<li class="list-group-item">
																Benefits Of Proactive Health Management
															</li>
															<li class="list-group-item">
																Countless Benefits Of Prioritizing Health
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
									<h2 class="pbmit-title">Specialties We Serve </h2>
								</div>
							</div>
							<div className="col-sm-3">
								<article class="pbmit-miconheading-style-7 swiper-slide">
									<div class="pbmit-ihbox-style-7">
										<div class="pbmit-ihbox-box">
											<div class="pbmit-icon-wrapper">
												<img src="/images/main/we-serve-orthopedics.jpg" class="img-fluid" alt=""/>
												<h2 class="pbmit-element-title">
													Orthopedics
												</h2>
											</div>
											<div class="pbmit-content-wrapper">
												<div class="pbmit-heading-desc">Custom guides, implants, and anatomical models for trauma, joint replacement, and deformity correction surgeries. </div>
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
													Oral & Maxillofacial Surgery
												</h2>
											</div>
											<div class="pbmit-content-wrapper">
												<div class="pbmit-heading-desc">3D-planned osteotomy guides and anatomical reconstructions that enhance precision in facial reconstruction and trauma repair. </div>
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
													Neurosurgery
												</h2>
											</div>
											<div class="pbmit-content-wrapper">
												<div class="pbmit-heading-desc">Pateint specific implants, cutting guides, 3D printed pedicle screws, and models designed for predictable implant placement and prosthetic planning.</div>
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
													Oncology & Reconstructive Surgery
												</h2>
											</div>
											<div class="pbmit-content-wrapper">
												<div class="pbmit-heading-desc">Tumor resection guides and reconstruction planning tools supporting safe margins and optimal post-resection restoration.</div>
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
									<form>
										<div class="row">
											<div class="col-md-6">
												<select class="form-select">
													<option value="Choose a Service">Choose a Service</option>
													<option value="Residential Cleaning">Residential Cleaning</option>
													<option value="Office Cleaning">Office Cleaning</option>
													<option value="Domestic Cleaning">Domestic Cleaning</option>
													<option value="Carpet 6Cleaning">Carpet 6Cleaning</option>
												</select>
											</div>
											<div class="col-md-6">
												<select class="form-select">
													<option value="Type of Clean">Type of Clean</option>
													<option value="Domestic">Domestic</option>
													<option value="Sweeping">Sweeping</option>
													<option value="Custodian">Custodian</option>
													<option value="Vacuum">Vacuum</option>
												</select>
											</div>
											<div class="col-md-6">
												<input type="text" class="form-control" placeholder="Total Floor Area (sq ft)" name="Total" required />
											</div>
											<div class="col-md-6">
												<input type="text" class="form-control" placeholder="Your Name" name="your-name" required />
											</div>
											<div class="col-md-6">
												<input name="emial-address" class="form-control" placeholder="Email Address" required />
											</div>
											<div class="col-md-6">
												<div class="input-text-group">
													<p>Submit this information and we will send you the cost for the service.</p>
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
