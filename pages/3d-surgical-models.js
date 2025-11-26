import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
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


	return (
		<>
			<Head>
				<title>3D Surgical Models - Curewith3D</title>
				<meta name="description" content="Your clarity guides you as you work through the various layers of the 3D human anatomy. With our 3D surgical models, the boundaries of radiology and reality" />
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
								<h1 class="pbmit-tbar-title">3D Surgical Models</h1>
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
								<span><span class="post-root post post-post current-item">3D Surgical Models</span></span>
							</div>
						</div>
					</div>
				</div> 
			</div> 
		</div>
 
        <div class="page-content" id="page">

            <section class="about-us-section-one fadeIn animated pb-10 pt-60">
					<div class="container">
						<div class="row g-0">
							<div class="col-md-12 col-xl-6">
								<div class="about-us-one-left-box">
									<div class="ihbox-style-area">
										 
									</div>
								</div>
							</div>
							<div class="col-md-12 col-xl-6">
								<div class="about-us-one-right-box pbmit-bg-color-global serviceboxm">
									<div class="pbmit-heading-subheading animation-style5">
										
										<h4 class="small-title">From Scan to Tangible Insight</h4>
									</div>
									<p class="pbmit-text">
                                        Your work demands clarity—every cut, every angle, and every decision depends on how well you understand the human body beneath the surface. Our 3D surgical models help you move beyond flat screens and complex slices so you can interact with anatomy in a hands-on, intuitive way. Using advanced segmentation and medical-grade 3D printing, we convert your CT/MRI scans into highly detailed, life-sized anatomical models. These models merge the precision of radiology with the realism of physical structures, making them an essential tool for surgeons, educators, and medical device innovators. Whether you're planning a surgery, conducting medical training, or designing implants, our models bring true-to-life texture, dimension, and orientation to the table.
                                    </p>
								</div>
							</div>
						</div>
					</div>
				</section>

            <section class="site-content service-details pb-10 pt-10">
				<div class="container">
					<div class="row">
						<div class="col-md-12 col-xl-12">						
							<div class="pbmit-entry-content">
								<div class="pbmit-service_content">									 
									<div class="my-5">
										<div class="row align-items-center servicepage">
											<div class="col-md-12 col-xl-12 text-center">
												<div class="pbmit-heading">
														<h3 class="pbmit-title">Explore Our Range of Anatomical Models </h3>
                                                        <p class="pbmit-text">We offer a comprehensive portfolio of 3D surgical models for key human systems:</p>
													</div>
											</div>

                                            <div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="images/main/service/3d-surgical-models/all/brain-anatomy-model.jpg" class="img-fluid w-100" alt="Brain Anatomy Model"/>
                                                    <h5>Brain Anatomy Model</h5>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="images/main/service/3d-surgical-models/all/anatomical-heart-model.jpg" class="img-fluid w-100" alt="Brain Anatomy Model"/>
                                                    <h5>Anatomical Heart Model</h5>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="images/main/service/3d-surgical-models/all/lung-anatomy-model.jpg" class="img-fluid w-100" alt="Brain Anatomy Model"/>
                                                    <h5>Lung Anatomy Model </h5>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="images/main/service/3d-surgical-models/all/eye-anatomy-model.jpg" class="img-fluid w-100" alt="Brain Anatomy Model"/>
                                                    <h5>Eye Anatomy Model</h5>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="images/main/service/3d-surgical-models/all/ear-anatomy-model.jpg" class="img-fluid w-100" alt="Brain Anatomy Model"/>
                                                    <h5>Ear Anatomy Model</h5>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="images/main/service/3d-surgical-models/all/hand-anatomy-model.jpg" class="img-fluid w-100" alt="Brain Anatomy Model"/>
                                                    <h5>Hand Anatomy Model</h5>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="images/main/service/3d-surgical-models/all/foot-anatomy-model.jpg" class="img-fluid w-100" alt="Brain Anatomy Model"/>
                                                    <h5>Foot Anatomy Model</h5>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="images/main/service/3d-surgical-models/all/anatomical-spine-model.jpg" class="img-fluid w-100" alt="Brain Anatomy Model"/>
                                                    <h5>Anatomical Spine Model</h5>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="images/main/service/3d-surgical-models/all/neck-anatomy-model.jpg" class="img-fluid w-100" alt="Brain Anatomy Model"/>
                                                    <h5>Neck Anatomy Model</h5>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="images/main/service/3d-surgical-models/all/pelvis-3d-model.jpg" class="img-fluid w-100" alt="Brain Anatomy Model"/>
                                                    <h5>Pelvis 3D Model</h5>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="images/main/service/3d-surgical-models/all/scapula-3d-model.jpg" class="img-fluid w-100" alt="Brain Anatomy Model"/>
                                                    <h5>Scapula 3D Model</h5>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/3d-surgical-models/all/3d-model-of-knee-joint.jpg" class="img-fluid w-100" alt="Brain Anatomy Model"/>
                                                    <h5>3D Model of Knee Joint</h5>
                                                </div>
                                            </div>
										
										</div>
									</div>
								</div>
							</div>
						</div>
					 
					</div>
				</div>
            </section>

            <section className="mb-30">
					<div class="container pbmit-bg-color-white borderradius">
						<div class="about-three-bg pt-30 pb-30">
							<div class="row g-0 align-items-center">
								<div class="col-md-12 col-xl-6">
									<div class="video-box pt-20 pb-20 pl-30 pr-60">
										<img src="images/main/service/3d-surgical-models/8449.jpg" class="img-fluid w-100 imgreduis20" alt="Brain Anatomy Model"/>
									</div>
								</div>
								<div class="col-md-12 col-xl-6">
									<div class="about-three-content">
										<div class="pbmit-heading-subheading animation-style2 mb-10">											
											<h2 class="pbmit-title">How Our 3D Printed Models Make a Difference? </h2>
											<ul class="list-group ajrt">
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Clinically Accurate
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Realistic mechanical & anatomical properties
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Made with advanced 3D printing technology
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
															Reliable for MedTech validation and R&D use 
														</li>
													</ul>
										</div>									
									 
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

                <section class="section-lgb">
				<div class="container">
					<div class="row g-0">
						
						<div class="col-md-7">
							<div class="contact-form-rightbox pbmit-bg-color-white">
								<div class="pbmit-heading animation-style2">
									<h2 class="pbmit-title">Send a message to staff</h2>
								</div>
								<p class="pb-4">Your email address will not be published. Required fields are marked *</p>
								<form class="contact-form" method="post" id="contact-form" action="https://xleb-demo.pbminfotech.com/html-demo/send-dummy.php">
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
								<div class="contact-one-bg ml-30 mr-0"></div>
							</div>
					</div>
				</div>
			</section>
          

        </div>
    
			
		</>
	);
}
