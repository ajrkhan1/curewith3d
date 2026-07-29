import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Slider from "react-slick";
import Marquee from "react-fast-marquee";
import CountUp, { useCountUp } from 'react-countup';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { TypeAnimation } from 'react-type-animation';
import React, { useState } from "react";

export default function Home() {
	const [openFaq, setOpenFaq] = useState(0);

	const faqs = [
		{ q: "What is virtual surgery planning?", a: "Virtual surgery planning is a digital preoperative simulation process that uses 3D imaging to plan surgical procedures before entering the operating room." },
		{ q: "How does orthognathic surgery planning benefit from virtual tools?", a: "It improves accuracy in jaw positioning, occlusal alignment, and facial symmetry, reducing intraoperative uncertainty." },
		{ q: "Does virtual planning reduce operating time?", a: "Yes. By predefining surgical steps, surgeons can execute procedures more efficiently." },
		{ q: "Can virtual planning be combined with custom implants?", a: "Absolutely. Digital plans can directly guide the design of patient-specific implants and surgical guides." },
	];

		const registerUser = async event => {
      event.preventDefault()

      document.getElementById("submitbuttonform").value = "Submitting form...."

      const xhttp = new XMLHttpRequest();
      xhttp.onload = function () {
         // console.log(this.responseText.status);
      }
      xhttp.open("Post", 'https://wordpress-1457894-6050110.cloudwaysapps.com/wp-json/contact-form-7/v1/contact-forms/437/feedback');
      xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
      xhttp.onreadystatechange = function () {
         if (xhttp.readyState == 4) {
            var res = JSON.parse(xhttp.responseText);
            console.log(res)
            if (res.status == "mail_sent") {
               document.getElementById("contactForm").reset();

               document.getElementById("showlabel").innerHTML = "Your submission has been received and we will contact you soon";

               document.getElementById("showlabel").style.display = "block";
               window.setTimeout(function () {
                   window.location.href = "/thankyou"
               }, 10);

            } else {
               document.getElementById("showlabel").innerHTML = "There was a problem with the request.";
               document.getElementById("showlabel").style.display = "block";

            }
         }
      };
      xhttp.send("your-name=" + event.target.name.value +
            "&your-email=" + event.target.email.value +
            "&phoneno=" + event.target.phone.value +
            "&service=" + event.target.service.value +
            "&your-message=" + event.target.message.value)

   }

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
				<title>Advanced Virtual Surgical Planning for Oral and Maxillofacial Surgery</title>
				<meta name="description" content="Curewith3D offers advanced virtual surgical planning (VSP) for oral and maxillofacial surgery, enabling precise preoperative analysis and patient-specific treatment solutions." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" />
				<script type="application/ld+json"
						dangerouslySetInnerHTML={
							{__html:`
							{
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "Service",
      "@id": "https://www.curewith3d.com/virtual-surgical-planning#service",
      "name": "Virtual Surgical Planning",
      "url": "https://www.curewith3d.com/virtual-surgical-planning",
      "serviceType": "Virtual Surgical Planning (VSP)",
      "description": "Curewith3D offers advanced virtual surgical planning (VSP) for oral and maxillofacial surgery, enabling precise preoperative analysis and patient-specific treatment solutions.",
      "provider": {
        "@id": "https://www.curewith3d.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://www.curewith3d.com/virtual-surgical-planning"
      }
    },

    {
      "@type": "MedicalProcedure",
      "@id": "https://www.curewith3d.com/virtual-surgical-planning#procedure",
      "name": "Virtual Surgical Planning for Patient-Specific Surgery",
      "description": "Curewith3D offers advanced virtual surgical planning (VSP) for oral and maxillofacial surgery, enabling precise preoperative analysis and patient-specific treatment solutions.",
      "howPerformed": "Patient CT or MRI imaging data is converted into a 3D anatomical model. Surgeons and biomedical engineers collaboratively perform virtual osteotomies, reconstruction planning, implant positioning, and surgical simulations. The finalized surgical plan is then used to manufacture patient-specific implants and surgical guides for precise execution during surgery.",
      "bodyLocation": "Cranium, Maxilla, Mandible, Orbit, Spine, Pelvis, Orthopedic, Dental and other patient-specific anatomical structures"
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.curewith3d.com/virtual-surgical-planning#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.curewith3d.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Virtual Surgical Planning",
          "item": "https://www.curewith3d.com/virtual-surgical-planning"
        }
      ]
    }

  ]
}

							`}
						}
                />
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
										
										<h4 class="small-title">Precision that Starts Before the First Cut</h4>
									</div>
									<p class="pbmit-text text-justify">
                                        Modern surgery demands accuracy long before the first incision. At Curewith3D, our Virtual Surgical Planning (VSP) solutions combine 3D surgical planning, digital surgical planning, and medical 3D-printing technologies to transform complex cases into structured, predictable procedures. By leveraging high-resolution imaging, advanced 3D modeling, and collaborative digital workflows, we enable patient-specific surgery that is tailored to each patient's unique anatomy, helping surgeons achieve superior clinical outcomes.
                                    </p>
									<p class="pbmit-text text-justify">
										By integrating digital simulation into your surgical planning workflow, we help clinicians visualize, refine, and validate every surgical step before entering the operating room. From personalized treatment planning and surgical rehearsals to the design of patient-specific surgical guides and implants through medical 3D-printing, our virtual surgical planning platform enhances precision, minimizes intraoperative uncertainty, and supports better surgical efficiency across multiple specialties.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section><br/><br/>

		    <section className="background">
					<div class="container borderradius">
						<div class="about-three-bg pt-30 pb-30">
							<div class="row g-0 align-items-center">
								<div class="col-md-12 col-xl-6">
									<div class="video-box pr-30">
										<img src="/images/main/service/simple-workflow.jpg" class="img-fluid w-100 imgreduis20" alt="Brain Anatomy Model"/>
									</div>
								</div>
								<div class="col-md-12 col-xl-6">
									<div class="about-three-content">
										<div class="pbmit-heading-subheading animation-style2 mb-10">
											<h2>What is Virtual Surgery Planning?</h2>
											<p>Virtual surgery planning (VSP) is a digital preoperative process that uses CT/MRI scan data to create a 3D anatomical model of the patient. Using VSP, surgeons can simulate osteotomies, resections, implant positioning, and reconstructions.</p>
											<h2 class="pbmit-title">What VSP Enables:</h2>
											<ul class="list-group ajrt">
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Helps visualize complex anatomy in an accurate 3D environment before surgery
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Simulates surgical resections, osteotomies, and reconstructions
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Evaluates multiple surgical approaches before entering the operating room
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Optimizes implant positioning and fixation strategies
														</li>
                                                        <li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Verifies anatomical alignment and surgical feasibility
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Identifies potential challenges and plan for them proactively
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Improves communication across the multidisciplinary surgical team
														</li>														
													</ul>
													<p>This approach enhances both surgical confidence and patient safety.</p>
										</div>									
									 
									</div>
								</div>
							</div>
						</div>
					</div>
			</section>


			<section className="background2">
					<div class="container borderradius">
						<div class="about-three-bg pt-30 pb-30">
							<div class="row g-0 align-items-center">
								<div class="col-md-12 col-xl-6">
									<div class="about-three-content">
										<div class="pbmit-heading-subheading animation-style2 mb-10">
											<h2>Why Virtual Surgery Planning Matters</h2>
											<p>Traditionally, planning for surgery often relies on 2D imaging and manual measurements. In complex cases, this can introduce variability. Virtual surgery planning reduces uncertainty and supports evidence-based execution.</p>
											<h2 class="pbmit-title">Key Advantages:</h2>
											<ul class="list-group ajrt">
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Improved surgical accuracy
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Better anatomical alignment
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Enhanced communication between surgical teams
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Lower risk of intraoperative surprises
														</li>
                                                        <li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Predictable aesthetic and functional outcomes
														</li>																												
													</ul>
													<p>When your planning is precise, your execution becomes controlled and efficient.</p>
										</div>									
									 
									</div>
								</div>

								<div class="col-md-12 col-xl-6">
									<div class="video-box pr-30">
										<img src="/images/main/service/simple-workflow.jpg" class="img-fluid w-100 imgreduis20" alt="Brain Anatomy Model"/>
									</div>
								</div>								
							</div>
						</div>
					</div>
			</section>

			<section className="background">
					<div class="container borderradius">
						<div class="about-three-bg pt-30 pb-30">
							<div class="row g-0 align-items-center">
								<div class="col-md-12 col-xl-6">
									<div class="video-box pr-30">
										<img src="/images/main/service/simple-workflow.jpg" class="img-fluid w-100 imgreduis20" alt="Brain Anatomy Model"/>
									</div>
								</div>
								<div class="col-md-12 col-xl-6">
									<div class="about-three-content">
										<div class="pbmit-heading-subheading animation-style2 mb-10">
											<h2>Benefits of Virtual Surgical Planning (VSP)</h2>
											<p>VSP brings clarity, precision, and consistency to both surgeons and healthcare institutions by enabling a more structured and proactive approach to surgery.</p>

											<ul class="list-group ajrt">
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Visualize complex anatomy in detailed 3D
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Predefine surgical movements and steps
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Improve implant fit and positioning
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Increase overall surgical precision
														</li>
                                                        <li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Enable proactive decision-making instead of intraoperative adjustments
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Standardize surgical protocols across teams
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Improve consistency of clinical outcomes
														</li>
														
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Strengthen institutional reputation for advanced, technology-driven care
														</li>

														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Enhance interdisciplinary coordination and collaboration
														</li>
														
													</ul>
													<p>Overall, VSP transforms surgical workflows by improving planning, communication, and execution at every level.</p>
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
													<br></br>
                                                    <h3 class="pbmit-title">Orthopedic Planning</h3>
													<p className="text-center">
														VSP plays a vital role in modern orthopedic surgery by enabling surgeons to visualize patient-specific anatomy in three dimensions before entering the operating room. Our orthopedic planning solutions integrate CT-based 3D reconstruction, digital surgical simulation, and implant planning to support trauma reconstruction, deformity correction, joint reconstruction, tumor surgery, and revision procedures. This approach improves surgical precision, optimizes implant positioning, and contributes to more predictable clinical outcomes.
													</p>
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
                                                    <h3 class="pbmit-title">Oral Maxillofacial VSP</h3>                                                       
												</div>
											</div>
                                         
                                            <div className="col-sm-4">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/vsp/Mandible and maxilla reconstruction.jpg" class="img-fluid w-100" alt="Virtual Surgery Planning (VSP)"/>
                                                    <h5>Mandible and maxilla reconstruction </h5>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/vsp/Facial trauma.jpg" class="img-fluid w-100" alt="Virtual Surgery Planning (VSP)"/>
                                                    <h5>Facial trauma</h5>
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
                                                    <h3 class="pbmit-title">Soft Tissue & Organ-Based VSP</h3>
													<p>
														Our Organ-Based Virtual Surgical Planning (VSP) solutions enable surgeons to accurately visualize patient-specific anatomy and simulate complex procedures involving organs and surrounding critical structures. Using advanced 3D reconstruction, digital surgical simulation and collaborative planning, we support precise preoperative decision-making for complex oncological and reconstructive procedures involving the kidneys, liver, lungs, pancreas, and other anatomically challenging regions. This approach enhances surgical precision, preserves critical structures, and improves procedural predictability.
													</p>
												</div>
											</div>
												<div className="col-sm-4">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/vsp/Tumors adjacent to vessels or ducts.jpg" class="img-fluid w-100" alt="Virtual Surgery Planning (VSP)"/>
                                                    <h5>Kidney Tumor Planning</h5>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/vsp/Liver lesion planning.jpg" class="img-fluid w-100" alt="Virtual Surgery Planning (VSP)"/>
                                                    <h5>Liver Lesion Planning</h5>
                                                </div>
                                            </div>
											<div className="col-sm-4">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/vsp/pelvis tumor VSP.jpg" class="img-fluid w-100" alt="Virtual Surgery Planning (VSP)"/>
                                                    <h5>Pelvic Tumor Planning</h5>
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

			 <section class="background">
				<br></br><br></br>
				<div class="container">
					<div class="pbmit-heading-subheading animation-style2 text-center">						
						<h2 class="pbmit-title">Simple Workflow. Clear Output</h2>
						<p>Our streamlined digital workflow ensures accuracy, transparency, and collaboration.</p>
					</div>
					<div class="row pbmit-element-posts-wrapper">
						<article class="pbmit-service-style-3 col-md-6 col-lg-3">
							<div class="pbminfotech-post-item">
								<div class="pbminfotech-box-content">									
									<h3 class="pbmit-service-title">
										<a href="#">Image Acquisition</a>
									</h3>
									<div class="pbmit-service-description">
										We receive high-resolution CT or MRI scans in DICOM format.
									</div>
								</div>
							</div>
							<a class="pbmit-link" href="#"></a>
						</article>
						<article class="pbmit-service-style-3 col-md-6 col-lg-3">
							<div class="pbminfotech-post-item">
								<div class="pbminfotech-box-content">
									<h3 class="pbmit-service-title">
										<a href="#">3D Anatomical Segmentation</a>
									</h3>
									<div class="pbmit-service-description">
										Our engineers convert scan data into a detailed 3D anatomical model of the region of interest.
									</div>
								</div>
							</div>
							<a class="pbmit-link" href="#"></a>
						</article>
						<article class="pbmit-service-style-3 col-md-6 col-lg-3">
							<div class="pbminfotech-post-item">
								<div class="pbminfotech-box-content">
									<h3 class="pbmit-service-title">
										<a href="#">Virtual Surgical Planning</a>
									</h3>
									<div class="pbmit-service-description">
										We collaborate with the surgeon to plan resections, alignments, and reconstruction goals.
									</div>
								</div>
							</div>
							<a class="pbmit-link" href="#"></a>
						</article>
						<article class="pbmit-service-style-3 col-md-6 col-lg-3">
							<div class="pbminfotech-post-item">
								<div class="pbminfotech-box-content">								
									<h3 class="pbmit-service-title">
										<a href="#">Patient-Specific Guides & Implant Design</a>
									</h3>
									<div class="pbmit-service-description">
										Using advanced CAD software, we design patient-specific guides and implant designs for precise osteotomy and mimic natural anatomy.
									</div>
								</div>
							</div>
							<a class="pbmit-link" href="#"></a>
						</article>
						<article class="pbmit-service-style-3 col-md-6 col-lg-3">
							<div class="pbminfotech-post-item">
								<div class="pbminfotech-box-content">
									<h3 class="pbmit-service-title">
										<a href="#">Surgeon Approval</a>
									</h3>
									<div class="pbmit-service-description">
										The surgeon reviews and approves the design before manufacturing.
									</div>
								</div>
							</div>
							<a class="pbmit-link" href="#"></a>
						</article>
						<article class="pbmit-service-style-3 col-md-6 col-lg-3">
							<div class="pbminfotech-post-item">
								<div class="pbminfotech-box-content">
									<h3 class="pbmit-service-title">
										<a href="#">Additive Manufacturing</a>
									</h3>
									<div class="pbmit-service-description">
										We manufacture the model, guides, and implant using precision 3D printing technologies.
									</div>
								</div>
							</div>
							<a class="pbmit-link" href="#"></a>
						</article>
						<article class="pbmit-service-style-3 col-md-6 col-lg-3">
							<div class="pbminfotech-post-item">
								<div class="pbminfotech-box-content">
									<h3 class="pbmit-service-title">
										<a href="#">Post-Processing</a>
									</h3>
									<div class="pbmit-service-description">
										Implants undergo surface finishing and quality checks.
									</div>
								</div>
							</div>
							<a class="pbmit-link" href="#"></a>
						</article>
						<article class="pbmit-service-style-3 col-md-6 col-lg-3">
							<div class="pbminfotech-post-item">
								<div class="pbminfotech-box-content">
									<h3 class="pbmit-service-title">
										<a href="#">Delivery & Surgical Support</a>
									</h3>
									<div class="pbmit-service-description">
										The implant is delivered ready for sterilization, along with surgical guides and models, if required.
									</div>
								</div>
							</div>
							<a class="pbmit-link" href="#"></a>
						</article>
					</div>
				</div>
            </section><br/><br/>

			 <section className="section-lg pt-50 pb-50 pbmit-bg-color-light">
					<div className="container">
						<div className="pbmit-heading-subheading text-center animation-style2 mb-30">
							<h4 className="pbmit-subtitle">Frequently Asked Questions</h4>
						</div>
						<div className="row g-3">
							{faqs.map((f, i) => (
								<div className="col-md-6" key={i}>
									<div className={`cx-faq-item ${openFaq === i ? "active" : ""}`} onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
										<div className="cx-faq-question">
											<span>{f.q}</span>
											<span className="cx-faq-toggle">{openFaq === i ? "−" : "+"}</span>
										</div>
										{openFaq === i && <div className="cx-faq-answer">{f.a}</div>}
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
 

                <section class="background">
					<br/><br/>
				<div class="container">
					<div class="row g-0">
						
						<div class="col-md-7">
							<div class="contact-form-rightbox pbmit-bg-color-white">
								<div class="pbmit-heading animation-style2">
									<h2 class="pbmit-title">Send a message to staff</h2>
								</div>
								<p class="pb-4">Your email address will not be published. Required fields are marked *</p>
								<form class="contact-form" id="contactForm" onSubmit={registerUser}>
									<div className="row">
										<div className="col-md-6">
										<input type="text" className="form-control" placeholder="Your Name" name="name" />
										</div>
										<div className="col-md-6">
										<input type="email" name="email" className="form-control" placeholder="Email Address" />
										{/* ✅ "emial" → "email" fix kiya */}
										</div>
										<div className="col-md-6">
										<input type="text" className="form-control" name="phone" maxLength="13" minLength="10" pattern="[0-9]*" placeholder="Phone No.*" />
										</div>
										<div className="col-md-6">
										<select className="form-select" name="service" required>
											<option value="">Choose a Service</option>
											<option value="Patient Specific Implants">Patient Specific Implants</option>											
											<option value="Custom 3D Printed Surgical Guides">Custom 3D Printed Surgical Guides</option>
											<option value="Virtual Surgical Planning" selected>Virtual Surgical Planning</option>
											<option value="3D Surgical Models">3D Surgical Models</option>
										</select>
										</div>
										<div className="col-md-12">
										<textarea name="message" cols="40" rows="10" className="form-control" placeholder="Message" required></textarea>
										</div>
									</div>
									<div class="pbmit-button-wrapper">
										<button type="submit" className="pbmit-btn pbmit-btn-white" id="submitbuttonform">
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
										<p id="showlabel" style={{ display: "none" }}></p>
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
