import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
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


	return (
		<>
			<Head>
				<title>Contact Us - Curewith3D</title>
				<meta name="description" content="For sending DICOM Data Online" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" />
			</Head>

		<div class="surgicalmodelbg">
			<div class="container">
				<div class="pbmit-title-bar-content">
					<div class="pbmit-title-bar-content-inner">
						<div class="pbmit-tbar">
							<div class="pbmit-tbar-inner container">
								<h1 class="pbmit-tbar-title">
									<TypeAnimation
								
										sequence={[
										100,
										'Contact Us',		
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
								<span>
									<a title="" href="#" class="home"><span>Services</span></a>
								</span>
								<span class="sep">
									<i class="pbmit-base-icon-angle-right"></i>
								</span>					
								<span><span class="post-root post post-post current-item">Contact Us</span></span>
							</div>
						</div>
					</div>
				</div> 
			</div> 
		</div>
 
        <div class="page-content" id="page">

			<section class="section-lgx">
				<div class="container p-0">
					<div class="row g-0 pbminfotech-gap-40px">
						<article class="pbmit-miconheading-style-5 col-md-6 col-lg-3">
							<div class="pbmit-ihbox-style-5">
								<div class="pbmit-ihbox-headingicon">
									<div class="pbmit-ihbox-wrap">
										<div class="pbmit-ihbox-contents">
											<h2 class="pbmit-element-title">
												Mail Us 24/7
											</h2>
											<div class="pbmit-heading-desc">
												<a href="mailto:curewith3d@anvka.com">curewith3d@anvka.com</a><br/>												
											</div>
										</div>
										<div class="pbmit-ihbox-icon">
											<div class="pbmit-ihbox-icon-wrapper pbmit-icon-type-icon">
												<i class="fa fa-envelope-o" aria-hidden="true"></i>
											</div>
										</div>
									</div>
									<div class="pbmit-btn-wrap">
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
							</div>
						</article>


						
						<article class="pbmit-miconheading-style-5 col-md-6 col-lg-3">
							<div class="pbmit-ihbox-style-5">
								<div class="pbmit-ihbox-headingicon">
									<div class="pbmit-ihbox-wrap">
										<div class="pbmit-ihbox-contents">
											<h2 class="pbmit-element-title">
												Corporate Address
											</h2>
											<div class="pbmit-heading-des">
												 Plot No. 231, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122001
											</div>
										</div>
										<div class="pbmit-ihbox-icon">
											<div class="pbmit-ihbox-icon-wrapper pbmit-icon-type-icon">
												<i class="fa fa-street-view" aria-hidden="true"></i>
											</div>
										</div>
									</div>
									<div class="pbmit-btn-wrap">
										<div class="pbmit-ihbox-btn">
											<a target="_blank" href="https://www.google.com/maps/place/Curewith3D/data=!4m2!3m1!1s0x0:0x244061915c35ecd0?sa=X&ved=1t:2428&ictx=111">
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
							</div>
						</article>
						<article class="pbmit-miconheading-style-5 col-md-6 col-lg-3">
							<div class="pbmit-ihbox-style-5">
								<div class="pbmit-ihbox-headingicon">
									<div class="pbmit-ihbox-wrap">
										<div class="pbmit-ihbox-contents">
											<h2 class="pbmit-element-title">
												Call US 24/7
											</h2>
											<div class="pbmit-heading-desc">
												+91-920-555-98-04
											</div>
										</div>
										<div class="pbmit-ihbox-icon">
											<div class="pbmit-ihbox-icon-wrapper pbmit-icon-type-icon">
												<i class="fa fa-phone" aria-hidden="true"></i>
											</div>
										</div>
									</div>
									<div class="pbmit-btn-wrap">
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
							</div>
						</article>
						<article class="pbmit-miconheading-style-5 col-md-6 col-lg-3">
							<div class="pbmit-ihbox-style-5">
								<div class="pbmit-ihbox-headingicon">
									<div class="pbmit-ihbox-wrap">
										<div class="pbmit-ihbox-contents">
											<h2 class="pbmit-element-title">
												Working Days
											</h2>
											<div class="pbmit-heading-desc">
												Mon to Sat - 09:00am To 06:00pm
											</div>
										</div>
										<div class="pbmit-ihbox-icon">
											<div class="pbmit-ihbox-icon-wrapper pbmit-icon-type-icon">
												<i class="fa fa-clock-o" aria-hidden="true"></i>
											</div>
										</div>
									</div>
									<div class="pbmit-btn-wrap">
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
							</div>
						</article>
					</div>
				</div>
            </section>


 
		

                <section class="section-lgb">
				<div class="container">
					<div class="row g-0">
						
						<div class="col-md-7">
							<div class="contact-form-rightbox pbmit-bg-color-white">
								<div class="pbmit-heading animation-style2">
									<h2 class="pbmit-title">Let’s 3D Design Better Surgeries Together </h2>
								</div>
								<p class="pb-4">Contact us today to discuss your next case or request a demo.</p>
								<form class="contact-form" method="post" id="contact-form" action="">
									<div class="row">
										<div class="col-md-6">
											<input type="text" class="form-control" placeholder="Your Name" name="name" required/>
										</div>
										<div class="col-md-6">
											<input type="email" class="form-control" placeholder="Your Email" name="email" required/>
										</div>
										<div class="col-md-6">
											<input type="tel" class="form-control" placeholder="Your Phone" name="phone" required/>
										</div>
										<div class="col-md-6">
											<input type="text" class="form-control" placeholder="Subject" name="subject" required/>
										</div>
										<div class="col-md-12">
											<textarea name="message" cols="40" rows="10" class="form-control" placeholder="Message" required></textarea>
										</div>
									
									</div>
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
											<span class="form-btn-loader d-none">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100"><circle fill="#0036FF" stroke="#0036FF" stroke-width="15" r="15" cx="40" cy="50"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle><circle fill="#0036FF" stroke="#0036FF" stroke-width="15" r="15" cx="100" cy="50"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle><circle fill="#0036FF" stroke="#0036FF" stroke-width="15" r="15" cx="160" cy="50"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle></svg>
											</span>
										</button>
									</div>
									<div class="col-md-12 col-lg-12 message-status"></div>
								</form>
							</div>
						</div>
                        <div class="col-md-12 col-xl-5 fadeInLeft animated">
								<div class="contact-one-bg mr-0"></div>
							</div>
					</div>
				</div>
			</section>

			<section class="contact-iframe-section">
				<div class="container-fluid p-0">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.8404664807867!2d77.055184!3d28.6045624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1bf6d9193893%3A0x244061915c35ecd0!2sCurewith3D!5e0!3m2!1sen!2sin!4v1764068912573!5m2!1sen!2sin" width="100%" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
				</div>
			</section>
          

        </div>
    
			
		</>
	);
}
