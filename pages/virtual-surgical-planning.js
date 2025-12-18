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
				<title>Virtual Surgical Planning - Curewith3D</title>
				<meta name="description" content="Your clarity guides you as you work through the various layers of the 3D human anatomy. With our 3D surgical models, the boundaries of radiology and reality" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" />
			</Head>

		<div class="vsp-models-banne">
			<div class="container">
				<div class="pbmit-title-bar-content">
					<div class="pbmit-title-bar-content-inner">
						<div class="pbmit-tbar">
							<div class="pbmit-tbar-inner container">
								<h1 class="pbmit-tbar-title">
									<TypeAnimation
								
										sequence={[
										100,
										'Virtual Surgery Planning (VSP)',		
										800,						
										]}
										speed={10}
										deletionSpeed={5}
										repeat={Infinity}										
									/></h1>
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
								<span><span class="post-root post post-post current-item">Virtual Surgical Planning (VSP)</span></span>
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
										
										<h4 class="small-title">Precision That Starts Before the First Cut</h4>
									</div>
									<p class="pbmit-text">
                                        At CureWith3D, you get a planning workflow built to match the way you operate. Whether you’re reconstructing a jaw, preparing a fibula flap, resecting a tumour, or working around soft-tissue structures like the kidney, liver, or urinary bladder — your plan is shaped around real anatomy, real margins, and real surgical steps. Working in partnership with 3D Systems, we bring you a digital planning solution that expands beyond the traditional VSP model. You’re not limited to bony structures. You can now visualise and plan with soft tissues and organ-level detail, giving you a clearer understanding of the structures you need to protect, preserve, or remove. This means you walk into the OT with a plan that mirrors your patient’s anatomy more closely and a workflow that gives you better clarity in complex cases.
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
									<div class="">
										<div class="row align-items-center servicepage">
											<div class="col-md-12 col-xl-12 text-center">
												<div class="pbmit-heading">
                                                    <h3 class="pbmit-title">Orthopedic Planning</h3>                                                       
												</div>
											</div>

                                            <div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/vsp/Osteotomies.jpg" class="img-fluid w-100" alt="Virtual Surgery Planning (VSP)"/>
                                                    <h5>Osteotomies</h5>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/vsp/Custom fibula flap planning.jpg" class="img-fluid w-100" alt="Virtual Surgery Planning (VSP)"/>
                                                    <h5>Custom fibula flap planning</h5>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/vsp/Alignment corrections.jpg" class="img-fluid w-100" alt="Virtual Surgery Planning (VSP)"/>
                                                    <h5>Alignment corrections</h5>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/vsp/Osteotomies.jpg" class="img-fluid w-100" alt="Virtual Surgery Planning (VSP)"/>
                                                    <h5>Trauma reconstruction</h5>
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
                                                    <h3 class="pbmit-title">Maxillofacial Planning</h3>                                                       
												</div>
											</div>

                                            <div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/vsp/Mandible and maxilla reconstruction.jpg" class="img-fluid w-100" alt="Virtual Surgery Planning (VSP)"/>
                                                    <h5>Mandible and maxilla reconstruction </h5>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/vsp/Facial trauma.jpg" class="img-fluid w-100" alt="Virtual Surgery Planning (VSP)"/>
                                                    <h5>Facial trauma</h5>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/vsp/Distraction planning.jpg" class="img-fluid w-100" alt="Virtual Surgery Planning (VSP)"/>
                                                    <h5>Distraction planning</h5>
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
                                                    <h3 class="pbmit-title">Soft Tissue & Organ-Based VSP </h3>                                                       
												</div>
											</div>

                                             <div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/vsp/Renal resections.jpg" class="img-fluid w-100" alt="Virtual Surgery Planning (VSP)"/>
                                                    <h5>Renal resections</h5>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/vsp/Liver lesion planning.jpg" class="img-fluid w-100" alt="Virtual Surgery Planning (VSP)"/>
                                                    <h5>Liver lesion planning</h5>
                                                </div>
                                            </div>
											<div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/vsp/pelvis tumor VSP.jpg" class="img-fluid w-100" alt="Virtual Surgery Planning (VSP)"/>
                                                    <h5>Pelvic tumor planning</h5>
                                                </div>
                                            </div>
											<div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/vsp/Tumors adjacent to vessels or ducts.jpg" class="img-fluid w-100" alt="Virtual Surgery Planning (VSP)"/>
                                                    <h5>Tumors adjacent to vessels or ducts</h5>
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
											<h2 class="pbmit-title">Simple Workflow. Clear Output</h2>
											<ul class="list-group ajrt">
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Upload CT/MRI or DICOM files. 
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Our biomedical engineers prepare segmented anatomy. 
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Join the online planning session. 
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Approve the final plan. 
														</li>
                                                        <li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Receive 3D visualization, guides, and a case report. 
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
