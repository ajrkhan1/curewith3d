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
		{ q: "What is a patient-specific implant?", a: "A patient-specific implant is a custom-designed 3D printed implant created using a patient's imaging data to ensure an exact anatomical fit." },
		{ q: "How long does it take to design a PSI?", a: "Design approval typically takes 10 to 15 working days after receiving high-quality imaging data." },
		{ q: "Are 3D printed medical implants safe?", a: "Yes. When manufactured under regulated standards using biocompatible materials, 3D printed medical implants are safe and widely used in advanced surgical centers." },
		{ q: "What materials are used?", a: "Patient-specific implants are commonly made from medical-grade titanium (Ti-6Al-4V) and PEEK (Polyether Ether Ketone). Titanium offers exceptional strength, durability, and promotes osseointegration, making it ideal for load-bearing applications. PEEK is lightweight, biocompatible, and radiolucent, allowing clear postoperative imaging while providing mechanical properties closer to natural bone." },
		{ q: "Are patient-specific implants durable?", a: "Yes. Titanium implants offer long-term durability and excellent osseointegration." },
		{ q: "When are custom implants recommended?", a: "They are recommended in complex trauma, oncology resections, congenital deformities, and revision surgeries." },
		{ q: "Which surgical specialties commonly use patient-specific implants?", a: "Patient-specific implants are widely used in orthopedics, neurosurgery, cranio-maxillofacial (CMF) surgery, oncology, trauma, plastic and reconstructive surgery, and revision procedures where precise anatomical reconstruction is essential." },
		{ q: "What imaging is required to design a patient-specific implant?", a: "High-resolution CT scans are most commonly used to design patient-specific implants. In selected cases, MRI data may also be incorporated to assist with surgical planning and anatomical assessment." },
		{ q: "Can patient-specific implants be used together with surgical guides?", a: "Yes. Patient-specific implants are often designed alongside patient-specific surgical guides and Virtual Surgical Planning (VSP) to improve implant positioning, surgical accuracy, and overall workflow efficiency." },
	];

	const clinicalApplications = [
		{
			title: "Trauma Reconstruction",
			desc: "Complex fractures and high-energy injuries often result in significant bone loss, deformity, or irregular anatomy that cannot be adequately addressed with standard implants. Patient-Specific Implants enable precise anatomical reconstruction, helping restore alignment, stability, and function.",
			items: ["Complex pelvic and acetabular fractures", "Periarticular fractures", "Malunion and nonunion reconstruction", "Segmental bone loss", "Complex limb trauma", "Post-traumatic deformity correction"],
		},
		{
			title: "Orthopedic Oncology",
			desc: "Bone tumor resection frequently creates large skeletal defects that require customized reconstruction. Patient-specific implants are designed to replace the exact volume of resected bone while preserving limb function and restoring biomechanics.",
			items: ["Pelvic tumor reconstruction", "Distal femur reconstruction", "Proximal tibia reconstruction", "Humeral reconstruction", "Limb salvage surgery", "Bone sarcoma reconstruction"],
		},
		{
			title: "Congenital Deformities",
			desc: "Congenital skeletal abnormalities often present with unique anatomical variations that standard implants cannot accommodate. Customized implants provide a precise fit tailored to the patient's anatomy, supporting accurate correction and improved functional outcomes.",
			items: ["Congenital pseudarthrosis", "Craniofacial deformities", "Mandibular deformities", "Hemifacial microsomia", "Congenital bone deficiencies", "Developmental skeletal abnormalities"],
		},
		{
			title: "Revision Surgery",
			desc: "Revision procedures are often complicated by previous implants, altered anatomy, bone loss, and scar tissue. Patient-specific implants are designed around the patient's existing anatomy and defects, simplifying reconstruction and improving implant fit.",
			items: ["Revision hip reconstruction", "Revision knee reconstruction", "Failed fracture fixation", "Failed joint replacement", "Complex revision cranial reconstruction", "Revision maxillofacial surgery"],
		},
		{
			title: "Reconstructive Surgery",
			desc: "Patient-specific implants play a critical role in restoring both function and appearance following trauma, tumor resection, infection, or congenital abnormalities. Digital planning enables highly accurate reconstruction of complex anatomical structures.",
			items: ["Cranial reconstruction", "Maxillofacial reconstruction", "Mandibular reconstruction", "Orbital reconstruction", "Zygomatic reconstruction", "Facial asymmetry correction"],
		},
		{
			title: "Complex Bone Defects",
			desc: "Large or irregular bone defects require individualized solutions that restore anatomy while providing long-term structural support. Customized implants are engineered to match the defect precisely, reducing the need for intraoperative modifications.",
			items: ["Massive bone loss following trauma", "Segmental bone defects", "Infected nonunion reconstruction", "Bone defects after tumor excision", "Periprosthetic bone defects", "Large acetabular defects"],
		},
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
				<title>Patient-Specific Implants for 3D-Printed Orthopedic Surgery | Curewith3D</title>
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
										'Patient Specific Implants',		
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
									<p class="pbmit-text text-justify">
                                        Cure with 3D designs and manufactures patient-specific implants (PSIs) using advanced CT/MRI-based planning, Virtual Surgical Planning (VSP), and medical-grade additive manufacturing. Our custom implants are engineered to deliver precise anatomical fit, improved surgical accuracy, and predictable clinical outcomes across orthopedic, cranio-maxillofacial, neurosurgical, oncological, and reconstructive procedures.
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
											
											<h2 class="pbmit-title">What You Gain with CureWith3D Implants:</h2>
											<ul class="list-group ajrt">
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Exact anatomical fit based on patient imaging
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Improved implant alignment and positioning
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Reduced intraoperative adjustments
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Greater surgical clarity and predictability
														</li>
                                                        <li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Streamlined workflow from planning to closure
														</li>
																											
													</ul>
													<p>We combine engineering excellence with medical expertise to deliver implants that are not just replacements but anatomical restorations.</p>
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
											<h2>Why Choose Patient-Specific Implants Over Standard Implants?</h2>
											<p className="text-justify">
												No two patients have the same anatomy, which is why a one-size-fits-all implant may not always provide the best clinical solution. Patient-specific implants are designed using the patient's CT or MRI data, ensuring a precise anatomical fit that supports better surgical planning, improved implant positioning, and more predictable outcomes.
											</p>
											<p className="text-justify">
												Unlike conventional implants that often require intraoperative modifications, custom implants are engineered to match the patient's unique bone structure. This reduces surgical complexity, enhances procedural efficiency, and helps surgeons achieve optimal functional and aesthetic results.
											</p>
											<p className="text-justify">
												At Curewith3D, every patient-specific implant is developed through a collaborative process involving surgeons and biomedical engineers. By combining advanced imaging, digital design, and medical 3D printing, we deliver personalized implant solutions that help improve surgical efficiency, clinical confidence, and patient outcomes.
											</p>
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
											<h2>What are Patient-Specific Implants?</h2>
											<p>
												Patient-specific implants are custom-designed 3D printed medical implants created using a patient's CT or MRI scan data. Unlike standard off-the-shelf implants, these are engineered to fit the patient's unique anatomy precisely.
											</p>
											<h4>The process involves:</h4>

											<ul class="list-group ajrt">
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Converting DICOM imaging data into 3D anatomical models
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Virtual surgical planning
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Patient-specific implant design
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															3D printing using medical-grade materials
														</li>
														<h4>Key advantages of patient-specific implants:</h4>

                                                        <li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Exact anatomical fit
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Improved functional and aesthetic outcomes
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Lower risk of implant-related complications
														</li>
														
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Faster patient recovery and rehabilitation
														</li>
														</ul>
										</div>									
									 
									</div>
								</div>
							</div>
						</div>
					</div>
			</section>

			<section class="px-xl-4 px-2 pb-40 background2">
				<div class="container-fluid">
					<div>
						<div class="row colspacex">

							<div class="pbmit-heading-subheading pt-40 mb-10 animation-style2 text-center">						
								<h2 class="pbmit-title">Simple Workflow. Clear Output</h2>
								<p>Our streamlined digital workflow ensures accuracy, transparency, and collaboration.</p>
							</div>

							<div className="col-sm-3">
								<article class="pbmit-miconheading-style-7 swiper-slide">
									<div class="pbmit-ihbox-style-7">
										<div class="pbmit-ihbox-box">
											<div class="pbmit-icon-wrapper d-flex align-items-center">
												<div class="pbmit-ihbox-icon">
													<div class="pbmit-ihbox-icon-wrapper pbmit-icon-type-icon">
														<img src="/images/icon/acquisition.png" alt="icon" style={{ width: "50px" }} />													
													</div>
												</div>
												<h2 class="pbmit-element-title">
													Image Acquisition
												</h2>
											</div>
											<div class="pbmit-content-wrapper">
												<div class="pbmit-heading-desc">We receive high-resolution CT or MRI scans in DICOM format.</div>
											</div>
										</div>									
									</div>
								</article>
							</div>

							<div className="col-sm-3">
								<article class="pbmit-miconheading-style-7 swiper-slide">
									<div class="pbmit-ihbox-style-7">
										<div class="pbmit-ihbox-box">
											<div class="pbmit-icon-wrapper d-flex align-items-center">
												<div class="pbmit-ihbox-icon">
													<div class="pbmit-ihbox-icon-wrapper pbmit-icon-type-icon">
														<img src="/images/icon/acquisition.png" alt="icon" style={{ width: "50px" }} />													
													</div>
												</div>
												<h2 class="pbmit-element-title">
													3D Anatomical Segmentation
												</h2>
											</div>
											<div class="pbmit-content-wrapper">
												<div class="pbmit-heading-desc">Our engineers convert scan data into a detailed 3D anatomical model of the region of interest.</div>
											</div>
										</div>									
									</div>
								</article>
							</div>
							
							<div className="col-sm-3">
								<article class="pbmit-miconheading-style-7 swiper-slide">
									<div class="pbmit-ihbox-style-7">
										<div class="pbmit-ihbox-box">
											<div class="pbmit-icon-wrapper d-flex align-items-center">
												<div class="pbmit-ihbox-icon">
													<div class="pbmit-ihbox-icon-wrapper pbmit-icon-type-icon">
														<img src="/images/icon/acquisition.png" alt="icon" style={{ width: "50px" }} />													
													</div>
												</div>
												<h2 class="pbmit-element-title">
													Virtual Surgical Planning
												</h2>
											</div>
											<div class="pbmit-content-wrapper">
												<div class="pbmit-heading-desc">We collaborate with the surgeon to plan resections, alignments, and reconstruction goals.</div>
											</div>
										</div>									
									</div>
								</article>
							</div>
							
							<div className="col-sm-3">
								<article class="pbmit-miconheading-style-7 swiper-slide">
									<div class="pbmit-ihbox-style-7">
										<div class="pbmit-ihbox-box">
											<div class="pbmit-icon-wrapper d-flex align-items-center">
												<div class="pbmit-ihbox-icon">
													<div class="pbmit-ihbox-icon-wrapper pbmit-icon-type-icon">
														<img src="/images/icon/acquisition.png" alt="icon" style={{ width: "50px" }} />													
													</div>
												</div>
												<h2 class="pbmit-element-title">
													Patient-Specific Guides & Implant Design
												</h2>
											</div>
											<div class="pbmit-content-wrapper">
												<div class="pbmit-heading-desc">Using advanced CAD software, we design patient-specific guides and implant designs for precise osteotomy and mimic natural anatomy.</div>
											</div>
										</div>									
									</div>
								</article>
							</div>
							<div className="col-sm-3">
								<article class="pbmit-miconheading-style-7 swiper-slide">
									<div class="pbmit-ihbox-style-7">
										<div class="pbmit-ihbox-box">
											<div class="pbmit-icon-wrapper d-flex align-items-center">
												<div class="pbmit-ihbox-icon">
													<div class="pbmit-ihbox-icon-wrapper pbmit-icon-type-icon">
														<img src="/images/icon/acquisition.png" alt="icon" style={{ width: "50px" }} />													
													</div>
												</div>
												<h2 class="pbmit-element-title">
													Surgeon Approval
												</h2>
											</div>
											<div class="pbmit-content-wrapper">
												<div class="pbmit-heading-desc">The surgeon reviews and approves the design before manufacturing.</div>
											</div>
										</div>									
									</div>
								</article>
							</div>
							<div className="col-sm-3">
								<article class="pbmit-miconheading-style-7 swiper-slide">
									<div class="pbmit-ihbox-style-7">
										<div class="pbmit-ihbox-box">
											<div class="pbmit-icon-wrapper d-flex align-items-center">
												<div class="pbmit-ihbox-icon">
													<div class="pbmit-ihbox-icon-wrapper pbmit-icon-type-icon">
														<img src="/images/icon/acquisition.png" alt="icon" style={{ width: "50px" }} />													
													</div>
												</div>
												<h2 class="pbmit-element-title">
													Additive Manufacturing
												</h2>
											</div>
											<div class="pbmit-content-wrapper">
												<div class="pbmit-heading-desc">We manufacture the model, guides, and implant using precision 3D printing technologies.</div>
											</div>
										</div>									
									</div>
								</article>
							</div>
							<div className="col-sm-3">
								<article class="pbmit-miconheading-style-7 swiper-slide">
									<div class="pbmit-ihbox-style-7">
										<div class="pbmit-ihbox-box">
											<div class="pbmit-icon-wrapper d-flex align-items-center">
												<div class="pbmit-ihbox-icon">
													<div class="pbmit-ihbox-icon-wrapper pbmit-icon-type-icon">
														<img src="/images/icon/acquisition.png" alt="icon" style={{ width: "50px" }} />													
													</div>
												</div>
												<h2 class="pbmit-element-title">
													Post-Processing
												</h2>
											</div>
											<div class="pbmit-content-wrapper">
												<div class="pbmit-heading-desc">Implants undergo surface finishing and quality checks.</div>
											</div>
										</div>									
									</div>
								</article>
							</div>
							<div className="col-sm-3">
								<article class="pbmit-miconheading-style-7 swiper-slide">
									<div class="pbmit-ihbox-style-7">
										<div class="pbmit-ihbox-box">
											<div class="pbmit-icon-wrapper d-flex align-items-center">
												<div class="pbmit-ihbox-icon">
													<div class="pbmit-ihbox-icon-wrapper pbmit-icon-type-icon">
														<img src="/images/icon/acquisition.png" alt="icon" style={{ width: "50px" }} />													
													</div>
												</div>
												<h2 class="pbmit-element-title">
													Delivery & Surgical Support
												</h2>
											</div>
											<div class="pbmit-content-wrapper">
												<div class="pbmit-heading-desc">The implant is delivered ready for sterilization, along with surgical guides and models, if required.</div>
											</div>
										</div>									
									</div>
								</article>
							</div>
							<div className="col-sm-12 text-center">This collaborative digital ecosystem reduces uncertainty and enhances surgical confidence.</div>

						</div>
					</div>
				</div>
			</section>

			<section class="site-content service-details pb-10 pt-10 background">
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
														<h3 class="pbmit-title">When Are Patient-Specific Implants Recommended?</h3>
														<p>Patient-Specific Implants (PSIs) are recommended when standard implants cannot provide the precision, fit, or stability required for complex surgical cases. Designed from the patient's CT or MRI data, they help restore anatomy more accurately and support predictable surgical outcomes.</p>
													
														<h4>Common Clinical Indications</h4>											
													</div>
											</div>

                                            <div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/patient-specific-implants/Pelvic-Implant.jpg" class="img-fluid w-100" alt="Brain Anatomy Model"/>
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
                                                    <img src="images/main/service/patient-specific-implants/BSSO.jpg" class="img-fluid w-100" alt="Brain Anatomy Model"/>
                                                    <h5>SSO / BSSO implant</h5>
                                                </div>
                                            </div>
                                          <div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/patient-specific-implants/Spinal-Cage.jpg" class="img-fluid w-100" alt="Brain Anatomy Model"/>
                                                    <h5>Spinal Cage</h5>
                                                </div>
                                            </div>

											
                                            <div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/patient-specific-implants/Tibia.jpg" class="img-fluid w-100" alt="Brain Anatomy Model"/>
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
					<br></br>
            </section>

	

	 

			

			<section className="background2">
					<div class="container borderradius">
						<div class="about-three-bg pt-30 pb-30">
							<div class="row g-0 align-items-center">
								<div class="col-md-12 col-xl-6">
									<div class="about-three-content">
										<div class="pbmit-heading-subheading animation-style2 mb-10">
											<h2>Advanced Technology & Materials</h2>
											<p className="text-justify">
												The performance of a patient-specific implant depends on two critical factors; its design and the material from which it is manufactured. At Curewith3D, we combine advanced engineering with clinically proven Biocompatible Materials to develop implants that deliver exceptional strength, precision, and long-term reliability.
											</p>
											<p className="text-justify">
												Based on the clinical indication, anatomical location, and surgeon's requirements, our patient-specific implants are manufactured using Medical grade titanium (Ti-6Al-4V) and PEEK Implants (Polyether Ether Ketone). Each material offers unique mechanical and biological advantages, enabling personalized solutions for a wide range of reconstructive procedures.
											</p>
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
									<div class="about-three-content">
										<div class="pbmit-heading-subheading animation-style2 mb-10">
											<h2>Medical Grade Titanium (Ti-6Al-4V)</h2>
											<p className="text-justify">
												Medical grade titanium (Ti-6Al-4V) is the gold standard for patient-specific implants used in orthopedic, craniofacial, and spinal reconstruction. This high-performance titanium alloy offers an excellent balance of strength, durability, corrosion resistance, and biocompatibility, making it ideal for complex, load-bearing applications.
											</p>
											<p className="text-justify">
												One of its most significant advantages is its ability to promote osseointegration—the natural process in which bone cells grow onto the implant surface. Strong osseointegration enhances implant stability, supports long-term fixation, and contributes to successful clinical outcomes.
											</p>
									

											<h2 class="pbmit-title">Material Properties</h2>
											<ul class="list-group ajrt">
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															High strength-to-weight ratio
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Excellent fatigue and corrosion resistance
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Superior osseointegration with surrounding bone
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Outstanding long-term biocompatibility
														</li>
                                                        <li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Compatible with advanced medical 3D printing technologies
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Designed for permanent implantation
														</li>														
													</ul>													
										</div>									
									 
									</div>
								</div>

								<div class="col-md-12 col-xl-6">
									<div class="about-three-content">
										<div class="pbmit-heading-subheading animation-style2 mb-10">											
											<h2 class="pbmit-title">Clinical Indications</h2>
											<ul class="list-group ajrt">
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Pelvic and acetabular reconstruction
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Orthopedic oncology and limb salvage surgery
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Complex trauma reconstruction
														</li>													
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Cranial reconstruction
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Maxillofacial reconstruction
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Mandibular and facial implants
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Spinal reconstruction
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Revision orthopedic surgeries
														</li>
													</ul>

													<h2 class="pbmit-title">Advantages</h2>
											<ul class="list-group ajrt">
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Excellent mechanical strength for high-load applications
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Promotes strong bone integration through osseointegration
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Highly resistant to corrosion and wear
														</li>													
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Long clinical history with proven safety
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Ideal for complex patient-specific implant designs
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Supports long-term implant stability
														</li>
														
													</ul>

													<h2 class="pbmit-title">Limitations</h2>
											<ul class="list-group ajrt">
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Metallic implants may produce artifacts on CT and MRI imaging.
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Higher stiffness compared to natural bone may not be ideal for certain low-load clinical situations.
														</li>
														<li class="list-group-item">
															<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
															Material selection should always be based on the patient's anatomy and surgical objectives.
														</li>														
													</ul>

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
											<h2>Selecting the Right Material for Every Patient</h2>
											<p className="text-justify">
												Every surgical case presents unique anatomical and biomechanical challenges. At Curewith3D, our biomedical engineers work closely with surgeons to determine whether Medical grade titanium (Ti-6Al-4V) or PEEK Implants provide the most suitable solution based on the clinical indication, reconstruction goals, and patient-specific anatomy.
											</p>
											<p className="text-justify">
												Whether the priority is the exceptional osseointegration and strength of titanium for load-bearing reconstruction or the radiolucency and bone-like mechanical properties of PEEK for imaging-sensitive procedures, our team develops personalized implant solutions that optimize surgical precision and long-term performance.
											</p>
											<p className="text-justify">
												Every patient-specific implant undergoes comprehensive digital design verification, structural validation, dimensional accuracy checks, and stringent quality assurance before manufacturing and clinical use, ensuring the highest standards of safety, precision, and reliability.
											</p>
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
                                                    <h3 class="pbmit-title">Patient Specific Implants</h3>
													<p className="text-center">
														Our patient-specific implants are designed using precise CT/MRI-based 3D planning to match each individual's anatomy with exceptional accuracy. We deliver implants engineered for optimal fit, stability, and long-term performance.
													</p>
												</div>
											</div>

                                            <div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/vsp/Osteotomies.jpg" class="img-fluid w-100" alt="Virtual Surgery Planning (VSP)"/>
                                                    <h5>Cranial Implant</h5>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/vsp/Osteotomies.jpg" class="img-fluid w-100" alt="Virtual Surgery Planning (VSP)"/>
                                                    <h5>Orbital Implant</h5>
                                                </div>
                                            </div>
											<div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/vsp/Osteotomies.jpg" class="img-fluid w-100" alt="Virtual Surgery Planning (VSP)"/>
                                                    <h5>Facial Augment</h5>
                                                </div>
                                            </div>
											<div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/vsp/Osteotomies.jpg" class="img-fluid w-100" alt="Virtual Surgery Planning (VSP)"/>
                                                    <h5>Maxilla Implant</h5>
                                                </div>
                                            </div>
											<div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/vsp/Osteotomies.jpg" class="img-fluid w-100" alt="Virtual Surgery Planning (VSP)"/>
                                                    <h5>Mandible Implant</h5>
                                                </div>
                                            </div>
											<div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/vsp/Osteotomies.jpg" class="img-fluid w-100" alt="Virtual Surgery Planning (VSP)"/>
                                                    <h5>Subperiosteal Implant</h5>
                                                </div>
                                            </div>
											<div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/vsp/Osteotomies.jpg" class="img-fluid w-100" alt="Virtual Surgery Planning (VSP)"/>
                                                    <h5>TMJ Implant</h5>
                                                </div>
                                            </div>
											<div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/vsp/Osteotomies.jpg" class="img-fluid w-100" alt="Virtual Surgery Planning (VSP)"/>
                                                    <h5>PSI Plates</h5>
                                                </div>
                                            </div>
											<div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/vsp/Osteotomies.jpg" class="img-fluid w-100" alt="Virtual Surgery Planning (VSP)"/>
                                                    <h5>Spinal Cage Implant</h5>
                                                </div>
                                            </div>
											<div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/vsp/Osteotomies.jpg" class="img-fluid w-100" alt="Virtual Surgery Planning (VSP)"/>
                                                    <h5>Sternum Implant</h5>
                                                </div>
                                            </div>
											<div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/vsp/Osteotomies.jpg" class="img-fluid w-100" alt="Virtual Surgery Planning (VSP)"/>
                                                    <h5>Scapula Implant</h5>
                                                </div>
                                            </div>
											<div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/vsp/Osteotomies.jpg" class="img-fluid w-100" alt="Virtual Surgery Planning (VSP)"/>
                                                    <h5>Finger Implant</h5>
                                                </div>
                                            </div>
											<div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/vsp/Osteotomies.jpg" class="img-fluid w-100" alt="Virtual Surgery Planning (VSP)"/>
                                                    <h5>Pelvis Implant</h5>
                                                </div>
                                            </div>
											<div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/vsp/Osteotomies.jpg" class="img-fluid w-100" alt="Virtual Surgery Planning (VSP)"/>
                                                    <h5>Tibia Implant</h5>
                                                </div>
                                            </div>
											<div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/vsp/Osteotomies.jpg" class="img-fluid w-100" alt="Virtual Surgery Planning (VSP)"/>
                                                    <h5>Talus Implant</h5>
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

{/* ================= CLINICAL APPLICATIONS ================= */}
				<section className="section-lg pt-50 pb-40">
					<div className="container">
						<div className="pbmit-heading-subheading text-center animation-style2 mb-10">
							<h2 className="pbmit-title">Clinical Applications of Patient-Specific Implants</h2>
						</div>
						<p className="cx-body-text text-center mb-40" style={{ margin: "0 auto 40px" }}>Patient-specific implants (PSIs) are transforming the management of complex surgical cases where conventional implants may not provide the required anatomical fit or biomechanical support. Designed using patient-specific CT or MRI data, these customized implants restore anatomy with greater precision, improve implant stability, and support predictable surgical outcomes across a wide range of specialties.</p>

						<div className="row g-4">
							{clinicalApplications.map((app, i) => (
								<div className="col-md-6" key={i}>
									<div className="cx-clinical-block h-100">
										<h5>{app.title}</h5>
										<p>{app.desc}</p>
										<h6 className="cx-clinical-sub">Common Applications:</h6>
										<ul className="cx-bullet-list">
											{app.items.map((item, j) => (
												<li key={j}><i className="pbmit-base-icon-checked"></i>{item}</li>
											))}
										</ul>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* ================= WHY PSI PREFERRED ================= */}
				<section className="section-lg pt-40 pb-50 pbmit-bg-color-light">
					<div className="container">
						<div className="pbmit-heading-subheading animation-style2 mb-20">
							<h2 className="pbmit-title">Why Patient-Specific Implants Are the Preferred Choice for Complex Cases</h2>
						</div>
						<p className="cx-body-text">When anatomy is severely altered by trauma, disease, congenital conditions, or previous surgery, conventional implants may not provide an optimal solution. Patient-specific implants are engineered to match the patient&apos;s unique anatomy, enabling precise reconstruction, improved implant stability, and more predictable outcomes.</p>
						<p className="cx-body-text">At Curewith3D, every implant is developed through a collaborative workflow involving advanced imaging, Virtual Surgical Planning (VSP), biomedical engineering, and precision manufacturing. This integrated approach empowers surgeons to tackle the most challenging reconstructive procedures with greater confidence, efficiency, and accuracy.</p>
					</div>
				</section>

			

			 <section className="section-lg pt-50 pb-50">
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
