import Head from "next/head";
import React from "react";
import Marquee from "react-fast-marquee";
import CountUp, { useCountUp } from 'react-countup';
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
				<title>Patient Specific Implants - Curewith3D</title>
				<meta name="description" content="Your clarity guides you as you work through the various layers of the 3D human anatomy. With our 3D surgical models, the boundaries of radiology and reality" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" />
			</Head>

		<div class="patient-specific-implants">
			<div class="container">
				<div class="pbmit-title-bar-content">
					<div class="pbmit-title-bar-content-inner">
						<div class="pbmit-tbar">
							<div class="pbmit-tbar-inner container">
								<h1 class="pbmit-tbar-title">
									<TypeAnimation
								
										sequence={[
										100,
										'Patient Specific Implants',		
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
								<span><span class="post-root post post-post current-item">Patient Specific Implants</span></span>
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
										
										<h4 class="small-title">Personalized Precision. Better Outcomes.</h4>
									</div>
									<p class="pbmit-text">
                                        You want every procedure to feel well-planned, accurate, and predictable. With patient-specific implants, you move closer to that level of precision. At CureWith3D, you get implants that are engineered to fit your patient’s exact anatomy, without any compromise. Every curve, angle, and contour is crafted based on high-resolution CT/MRI data, giving you an implant that feels as natural as the body it supports. Using advanced medical imaging combined with next-gen 3D printing, we design and manufacture customized surgical implants that elevate your workflow. You gain improved alignment, better intraoperative clarity, and a smoother surgical process, helping you operate with confidence from incision to closure. From 3D dental implants and spine reconstruction systems, our implant solutions are designed to meet the most complex clinical demands, with confidence and clarity.
                                    </p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="mb-30 mt-50">
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
											<h2 class="pbmit-title">What Are Patient-Specific Surgical Implants? </h2>
											<p>
												3D surgical implants are custom-designed medical devices created using patient-specific CT/MRI scans. These implants are digitally modeled and 3D printed using biocompatible materials such as titanium and PEEK. Compared to traditional options, 3D printed medical implants offer: 
											</p>
											<ul class="list-group ajrt">
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Perfect anatomical fit 
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Shorter surgery times 
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Fewer complications 
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Faster healing 
														</li>                                                        
													</ul>
										</div>									
									 
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class="section-mdb pb-30 pt-30">
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

            <section class="site-content service-details pb-10 pt-10">
				<div class="container">
					<div class="row">
						<div class="col-md-12 col-xl-12">						
							<div class="pbmit-entry-content">
								<div class="pbmit-service_content">									 
									<div class="">
										<div class="row align-items-center servicepage">
											<div class="col-md-12 col-xl-12 text-center">
												<div class="pbmit-heading">
														<h3 class="pbmit-title">Patient Specific Implants</h3>
														<br></br>
													</div>
											</div>

                                            <div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/patient-specific-implants/knee-replacement-implants.jpg" class="img-fluid w-100" alt="Brain Anatomy Model"/>
                                                    <h5>Pelvis Implant</h5>
                                                </div>
                                            </div>
											<div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/patient-specific-implants/cranial-implant.jpg" class="img-fluid w-100" alt="Brain Anatomy Model"/>
                                                    <h5>Cranial implant </h5>
                                                </div>
                                            </div>
											  <div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/patient-specific-implants/3D-joint-replacement-Implants.jpg" class="img-fluid w-100" alt="Brain Anatomy Model"/>
                                                    <h5>Custom Talus Implant</h5>
                                                </div>
                                            </div>
                                           
                                          
                                   
											
											<div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="images/main/service/3d-surgical-models/brain-anatomy-model.jpg" class="img-fluid w-100" alt="Brain Anatomy Model"/>
                                                    <h5>SSO / BSSO implant</h5>
                                                </div>
                                            </div>
                                          <div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/patient-specific-implants/hip-replacement-implants.jpg" class="img-fluid w-100" alt="Brain Anatomy Model"/>
                                                    <h5>Spinal Cage</h5>
                                                </div>
                                            </div>

											
                                            <div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/patient-specific-implants/vertebral-implants.jpg" class="img-fluid w-100" alt="Brain Anatomy Model"/>
                                                    <h5>Custom Tibia Implant</h5>
                                                </div>
                                            </div>
                                  

										 
                                            <div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/patient-specific-implants/chin-implants.jpg" class="img-fluid w-100" alt="Brain Anatomy Model"/>
                                                    <h5>Chin Implant</h5>
                                                </div>
                                            </div>
                                          
                                            <div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/patient-specific-implants/patient-specific-dental-implant.jpg" class="img-fluid w-100" alt="Brain Anatomy Model"/>
                                                    <h5>Patient-specific dental implant</h5>
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
         <br></br>

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
          

        </div>
    
			
		</>
	);
}
