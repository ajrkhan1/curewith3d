import Head from "next/head";
import React, { useState } from "react";
import { TypeAnimation } from 'react-type-animation';
import Marquee from "react-fast-marquee";

export default function CustomSurgicalGuides() {

	const [openFaq, setOpenFaq] = useState(0);

	const registerUser = async event => {
		event.preventDefault()
		document.getElementById("submitbuttonform").value = "Submitting form...."
		const xhttp = new XMLHttpRequest();
		xhttp.onload = function () { }
		xhttp.open("Post", 'https://wordpress-1457894-6050110.cloudwaysapps.com/wp-json/contact-form-7/v1/contact-forms/437/feedback');
		xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
		xhttp.onreadystatechange = function () {
			if (xhttp.readyState == 4) {
				var res = JSON.parse(xhttp.responseText);
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

	const keyAdvantages = [
		"Patient-specific design based on the individual patient's unique anatomy",
		"Accurate bone cuts and alignment correction",
		"Controlled drill depth and angulation",
		"Stable anatomical fit during surgery",
	];

	const guideBenefits = [
		"High surgical accuracy",
		"Guides ensure precise osteotomy or drilling location",
		"Shorter surgical time",
		"Improved implant placement",
		"Accurate screw trajectory and implant positioning",
		"Avoids nerves, vessels, and the spinal cord",
		"Minimally invasive surgery support",
		"Useful for complex anatomy",
	];

 

	const surgeonBenefits = [
		"Accurate bone resections",
		"Precise screw and drill trajectories",
		"Improved implant fit",
		"Reduced surgical fatigue",
		"Decreased intraoperative stress",
		"Enhanced teaching and training support",
	];

	const commonClinicalApplications = [
		"Deformity correction surgeries",
		"Tumor resections and limb salvage procedures",
		"Primary and revision joint replacement surgeries",
		"Craniofacial and maxillofacial reconstruction",
		"Complex trauma reconstruction",
		"Corrective osteotomies",
		"Bone realignment procedures",
		"Patient-specific implant placement",
		"Limb lengthening and reconstruction",
		"Revision surgeries requiring precise anatomical restoration",
	];

	const orthopedicExamples = [
		"Cubitus varus corrective osteotomy",
		"High tibial osteotomy (HTO)",
		"Distal femoral osteotomy (DFO)",
		"Tibial malunion correction",
		"Forearm deformity correction",
		"Genu valgum correction",
		"Genu varum correction",
		"Blount disease surgery",
		"Complex angular deformity correction",
		"Rotational deformity correction",
		"Corrective osteotomies for post-traumatic deformities",
		"Periacetabular and pelvic osteotomies",
		"Bone tumor resection with patient-specific reconstruction",
		"Complex fracture reconstruction and malunion correction",
		"Revision osteotomy procedures",
	];

	const spineMaxfacApplications = [
		"Pedicle screw placement for spinal deformity correction",
		"Scoliosis, kyphosis, and lordosis surgery",
		"Complex spinal reconstruction",
		"Orthognathic surgery",
		"Mandibular and maxillary reconstruction",
		"Fibula free flap reconstruction",
		"Orbital floor and zygomatic reconstruction",
		"TMJ reconstruction",
	];

	// NOTE: source content says "Only the 1st and 3rd will remain" — the middle
	// item ("Custom spinal jigs") was removed. Exact original titles/photos for
	// items 1 and 3 weren't included in the content provided — swap in the
	// correct photos and captions once available.
	const guideGallery = [
		{ img: "/images/main/service/guides/osteotomy-guide.jpg", title: "Osteotomy Guide" },
		{ img: "/images/main/service/guides/drill-guide.jpg", title: "Drill Guide" },
	];

	const faqs = [
		{ q: "What are custom 3D-printed surgical guides?", a: "They are patient-specific tools designed using imaging data to guide bone cuts, drilling, and implant placement during surgery." },
		{ q: "How accurate are custom 3D-printed surgical guides?", a: "They are designed using precise 3D modeling, often achieving sub-millimeter accuracy when properly positioned." },
		{ q: "Are these custom 3D-printed surgical guides safe?", a: "Yes, these guides are manufactured from medical-grade materials in accordance with regulatory standards." },
		{ q: "How long does it take to produce a custom 3D-printed surgical guide?", a: "Typically, 10-15 working days after design approval, depending on complexity." },
		{ q: "Can custom 3D-printed surgical guides be used in revision surgeries?", a: "Yes, custom 3D-printed surgical guides are particularly valuable in complex revision and deformity cases." },
	];

	return (
		<>
			<Head>
				<title>Patient-Specific Surgical Guides — Custom 3D Printed Surgical Guides | Curewith3D</title>
				<meta name="description" content="Curewith3D designs and manufactures patient-specific surgical guides that transform preoperative planning into intraoperative precision — greater accuracy, shorter operating time, and improved predictability." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="canonical" href="https://www.curewith3d.com/custom-3d-printed-surgical-guides" />
			</Head>

			<div class="custom-3D-printed-surgical-guides-banner">
						<div class="container">
							<div class="pbmit-title-bar-content">
								<div class="pbmit-title-bar-content-inner">
									<div class="pbmit-tbar">
										<div class="pbmit-tbar-inner container">
											<h1 class="pbmit-tbar-title">
												<TypeAnimation								
													sequence={[
													100,
													'Custom 3D Printed Surgical Guides',		
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
											<span><span class="post-root post post-post current-item">Custom 3D Printed Surgical Guides</span></span>
										</div>
									</div>
								</div>
							</div> 
						</div> 
					</div>

			<div className="page-content cx-scope">

				<section class="about-us-section-one fadeIn animated pb-10 pt-60">
						<div class="container">
							<div class="row g-0">
								<div class="col-md-12 col-xl-6">
									<div class="about-us-one-left-box custom-3d-printed-surgical-guides1">
										<div class="ihbox-style-area">
												
										</div>
									</div>
								</div>
								<div class="col-md-12 col-xl-6">
									<div class="about-us-one-right-box pbmit-bg-color-global serviceboxm">
										<div class="pbmit-heading-subheading animation-style5">
											
											<h4 class="small-title">Patient-Specific Surgical Guides</h4>
										</div>
										<p class="pbmit-text">
											At Curewith3D, we design and manufacture patient-specific surgical guides that transform preoperative planning into intraoperative precision. Our patient-specific guides help surgeons perform complex procedures with greater accuracy, shorter operating time, and improved predictability.
										</p>

										<h4 className="cx-sub-heading whitecc">Key Advantages of Our Patient-Specific Surgical Guides:</h4>
										<ul className="cx-bullet-list">
											{keyAdvantages.map((item, i) => (
												<li className="whitecc" key={i}><i className="pbmit-base-icon-checked"></i>{item}</li>
											))}
										</ul>
									</div>
								</div>
							</div>
						</div>
						<br></br><br></br>
				</section>

				<section className="background">
					<br></br>
					<div class="container borderradius">
						<div class="about-three-bg pt-30 pb-30">
							<div class="row g-0 align-items-center">
								<div className="col-md-12 text-center">
									<h2 class="pbmit-title">What is a Patient-Specific Surgical Guide?</h2>
                                    <p className="cx-body-text">Patient-specific surgical guides are designed from CT or MRI scan data. Patient-specific surgical guides enable surgeons to perform procedures with greater precision and efficiency. By matching the patient&apos;s unique anatomy, they improve implant placement, reduce surgical time, and enhance safety, making them especially valuable in complex surgical cases.</p>
								</div>
								<div class="col-md-12 col-xl-6">
									<div class="video-box pr-30">
										<img src="/images/main/service/simple-workflow.jpg" class="img-fluid w-100 imgreduis20" alt="Brain Anatomy Model"/>
									</div>
								</div>
								<div class="col-md-12 col-xl-6">
									<div class="about-three-content">
										<div class="pbmit-heading-subheading animation-style2 mb-10">											
											<h4 className="cx-sub-heading">Benefits of a patient-specific surgical guide:</h4>
											<ul class="list-group ajrt">
												{guideBenefits.map((item, i) => (
													<li class="list-group-item" key={i}>
														<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
															</span>
													{item}</li>
												))}
											</ul>
											<p className="cx-body-text cx-emphasis">Patient-specific surgical guides improve implant placement, reduce surgical time, and enhance overall safety by protecting critical structures such as nerves and blood vessels.</p>
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
											<h2>Benefits of Custom 3D-Printed Surgical Guides for Surgeons</h2>
											<p className="cx-body-text">Custom 3D-printed surgical guides enable surgeons to operate with greater predictability.</p>
											<h4>The process involves:</h4>

											<ul class="list-group ajrt">
												{surgeonBenefits.map((item, i) => (
													<li className="list-group-item" key={i}>
														<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
														</span>
													{item}</li>
												))}
											</ul>
											<p className="cx-body-text cx-emphasis">With Curewith3D, surgeons can focus on execution rather than estimation.</p>
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
								<div className="col-sm-12 text-center">
									<div className="pbmit-heading-subheading animation-style2 mb-20">
										<h2 className="pbmit-title">Clinical Applications of Custom 3D-Printed Surgical Guides</h2>
									</div>
									<p className="cx-body-text mb-20">Custom 3D-printed surgical guides are designed to improve precision across a wide range of orthopedic, maxillofacial, trauma, and reconstructive procedures. By translating virtual surgical planning into accurate intraoperative execution, these patient-specific guides help surgeons achieve predictable alignment, accurate osteotomies, and optimal implant positioning.</p>
								</div>
								<div class="col-md-12 col-xl-6">
									<div class="video-box pr-30">
										<img src="/images/main/service/simple-workflow.jpg" class="img-fluid w-100 imgreduis20" alt="Brain Anatomy Model"/>
									</div>
								</div>
								<div class="col-md-12 col-xl-6">
									<div class="about-three-content">
										<div class="pbmit-heading-subheading animation-style2 mb-10">
											<h2>Common Clinical Applications</h2>
											<ul class="list-group ajrt">
												{commonClinicalApplications.map((item, i) => (
													<li className="list-group-item" key={i}>
														<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
														</span>
													{item}</li>
												))}
											</ul>											
										</div>									
									 
									</div>
								</div>
							</div>
						</div>
					</div>
			</section>
  
			  

				{/* ================= ORTHOPEDIC EXAMPLES ================= */}
				<section className="section-lg pt-40 pb-40 pbmit-bg-color-light">
					<div className="container">
						<div className="pbmit-heading-subheading animation-style2 mb-20">
							<h2 className="pbmit-title">Examples of Orthopedic Procedures Where Surgical Guides Are Used</h2>
						</div>
						<p className="cx-body-text mb-20">Our custom surgical guides support precision in several complex orthopedic procedures, including:</p>
						<ul className="cx-bullet-list cx-bullet-list-2col">
							{orthopedicExamples.map((item, i) => (
								<li key={i}><i className="pbmit-base-icon-checked"></i>{item}</li>
							))}
						</ul>
					</div>
				</section>

				{/* ================= SPINE & MAXILLOFACIAL APPLICATIONS ================= */}
				<section className="section-lg pt-40 pb-40">
					<div className="container">
						<div className="pbmit-heading-subheading animation-style2 mb-20">
							<h2 className="pbmit-title">Spine &amp; Maxillofacial Applications</h2>
						</div>
						<p className="cx-body-text mb-20">Patient-specific surgical guides are also widely used in:</p>
						<ul className="cx-bullet-list cx-bullet-list-2col">
							{spineMaxfacApplications.map((item, i) => (
								<li key={i}><i className="pbmit-base-icon-checked"></i>{item}</li>
							))}
						</ul>
						<p className="cx-body-text cx-emphasis mt-10">When every millimeter influences alignment, biomechanics, and long-term outcomes, patient-specific surgical guides provide surgeons with greater control and confidence. Designed from the patient&apos;s CT or MRI data, these guides facilitate precise bone cuts, controlled drilling, and accurate implant placement—reducing intraoperative guesswork and improving surgical efficiency in even the most challenging cases.</p>
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
														<h3 class="pbmit-title">Orthopedic Surgical Guides & Jigs </h3>                                                       
													</div>
											</div>

                                            <div className="col">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/custom-3d-printed-surgical-guides/Custom orthopedic jigs.jpg" class="img-fluid w-100" alt="Custom orthopedic jigs"/>
                                                    <h5>Custom orthopedic jigs</h5>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/custom-3d-printed-surgical-guides/Bone alignment surgical jigs.jpg" class="img-fluid w-100" alt="Bone alignment surgical jigs"/>
                                                    <h5>Bone alignment surgical jigs</h5>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/custom-3d-printed-surgical-guides/Joint-specific cutting guides.jpg" class="img-fluid w-100" alt="Joint-specific cutting guides"/>
                                                    <h5>Joint-specific cutting guides</h5>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/custom-3d-printed-surgical-guides/Distal tibia osteotomy guides.jpg" class="img-fluid w-100" alt="Distal tibia osteotomy guides"/>
                                                    <h5>Distal tibia osteotomy guides </h5>
                                                </div>
                                            </div>
											<div className="col">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/custom-3d-printed-surgical-guides/Tumor resection guide.jpg" class="img-fluid w-100" alt="Tumor resection guide"/>
                                                    <h5>Tumor resection guides </h5>
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
														<h3 class="pbmit-title">Dental & Maxillofacial Surgical Guides</h3>                                                        
													</div>
											</div>

                                            <div className="col">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/custom-3d-printed-surgical-guides/Custom dental guides.jpg" class="img-fluid w-100" alt="Custom dental guides"/>
                                                    <h5>Custom dental guides</h5>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/custom-3d-printed-surgical-guides/Cutting guides for Fibula free flap reconstruction.jpg" class="img-fluid w-100" alt="Cutting guides for Fibula free flap reconstruction"/>
                                                    <h5>Cutting guides for Fibula free flap reconstruction</h5>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/custom-3d-printed-surgical-guides/Custom mandibular and maxillary splints.jpg" class="img-fluid w-100" alt="Custom mandibular and maxillary splints"/>
                                                    <h5>Custom mandibular and maxillary splints</h5>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/custom-3d-printed-surgical-guides/Ankylosis release cutting guides.jpg" class="img-fluid w-100" alt="Ankylosis release cutting guides"/>
                                                    <h5>Ankylosis release cutting guides</h5>
                                                </div>
                                            </div> 
											<div className="col">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/custom-3d-printed-surgical-guides/BSSO.jpg" class="img-fluid w-100" alt="BSSO"/>
                                                    <h5>Custom surgical guides for BSSO</h5>
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
														<h3 class="pbmit-title">Cranial & Spinal Surgical Guides </h3>                                                        
													</div>
											</div>

                                            <div className="col-sm-4">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/custom-3d-printed-surgical-guides/Cranial Cutting Guide.jpg" class="img-fluid w-100" alt="Cranial Cutting Guide"/>
                                                    <h5>Cranial surgical guides</h5>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/custom-3d-printed-surgical-guides/Spinal-Jigs.jpg" class="img-fluid w-100" alt="Spinal-Jigs"/>
                                                    <h5>Custom spinal jigs</h5>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div class="innerbox">
                                                    <img src="/images/main/service/custom-3d-printed-surgical-guides/Pedicle screw placement.jpg" class="img-fluid w-100" alt="Pedicle screw placement"/>
                                                    <h5>Pedicle screw placement</h5>
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

				{/* ================= FAQ ================= */}
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

				<section class="section-lgb">
				<div class="container">
					<div class="row g-0">
						
						<div class="col-md-7">
							<div class="contact-form-rightbox pbmit-bg-color-white">
								<div class="pbmit-heading animation-style2">
									<h2 class="pbmit-title">Let’s 3D Design Better Surgeries Together </h2>
								</div>
								<p class="pb-4">Contact us today to discuss your next case or request a demo.</p>
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
											<option value="Custom 3D Printed Surgical Guides" selected>Custom 3D Printed Surgical Guides</option>
											<option value="Virtual Surgical Planning">Virtual Surgical Planning</option>
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
								<div class="contact-one-bg mr-0 leatstogether"></div>
							</div>
					</div>
				</div>
			    </section>

			</div>
		</>
	);
}