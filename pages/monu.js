import Head from "next/head";
import React, { useState } from "react";
import Slider from "react-slick";
import CountUp from 'react-countup';


export default function Home() {

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

	// testimonial slider settings
	var testimonialSettings = {
		dots: true,
		arrow: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
	};

	const coreServices = [
		{ img: "/images/main/patient-specific-implants.webp", title: "Patient Specific Implants", desc: "Custom-designed implants using CT/MRI data for orthopedic, cranial, maxillofacial and reconstructive surgeries.", link: "/patient-specific-implants" },
		{ img: "/images/main/custom-3d-surgical-guides.webp", title: "Custom 3D Printed Surgical Guides", desc: "Patient-specific surgical guides that improve accuracy, reduce operative time and ensure better outcomes.", link: "/custom-3d-printed-surgical-guides" },
		{ img: "/images/main/virtual-surgical-planning-modeling.webp", title: "Virtual Surgical Planning", desc: "Advanced digital planning to simulate surgeries, optimize implant design and reduce intraoperative uncertainties.", link: "/virtual-surgical-planning" },
		{ img: "/images/main/custom-3d-anatomical-models.webp", title: "3D Surgical Models", desc: "High accuracy anatomical models for surgical planning, patient communication and medical education.", link: "/3d-surgical-models" },
	];

	const howWeWork = [
		{ img: "/images/home/HowWeWork/Upload CT  MRI.svg", title: "Upload CT/MRI" },
		{ img: "/images/home/HowWeWork/Image Segmentation.svg", title: "Image Segmentation" },
		{ img: "/images/home/HowWeWork/Virtual Surgical Planning.svg", title: "Virtual Surgical Planning" },
		{ img: "/images/home/HowWeWork/Surgeon Review.svg", title: "Surgeon Consultation" },
		{ img: "/images/home/HowWeWork/Implant  Guide Design.svg", title: "Implant / Guide Design" },
		{ img: "/images/home/HowWeWork/3D Printing.svg", title: "3D Printing" },
		{ img: "/images/home/HowWeWork/Quality Verification.svg", title: "Quality Verification" },
		{ img: "/images/home/HowWeWork/Delivered Ready For Surgery.svg", title: "Delivered Ready For Surgery" },
	];

	const whyChoose = [
		{ title: "Proven Accuracy", desc: "High precision designs for complex surgeries." },
		{ title: "Fast Turnaround", desc: "Quick delivery to support time-sensitive cases." },
		{ title: "Regulatory Compliance", desc: "ISO certified with strict quality standards." },
		{ title: "Dedicated Support", desc: "Expert support from planning to surgery." },
		{ title: "Advanced Technology", desc: "State-of-the-art 3D printing and software." },
		{ title: "Surgeon Collaboration", desc: "We work closely with surgeons at every step." },
	];

	const testimonials = [
		{ text: "Curewith3D's surgical guides have significantly reduced our surgery time and improved patient outcomes.", name: "Dr. Ashish Chaudhry", role: "Orthopedic Surgeon", img: "/images/main/testimonial/m1.jpg" },
		{ text: "The accuracy of surgical guides and virtual planning has transformed the way we plan complex surgeries.", name: "Dr. Manish Kumar", role: "Neurosurgeon", img: "/images/main/testimonial/m2.jpg" },
		{ text: "Excellent quality, timely delivery and great support throughout the surgical journey.", name: "Dr. Richa Singh", role: "Maxillofacial Surgeon", img: "/images/main/testimonial/f1.jpg" },
	];

	const newsItems = [
		{ img: "/images/news/news33.webp", title: "Complexed Joints help Uzbek woman use her fingers again", date: "July 28, 2022", link: "/news" },
		{ img: "/images/news/news22.webp", title: "Girl with rare condition undergoes surgery in Delhi to fix spine curvature", date: "July 20, 2022", link: "/news" },
		{ img: "/images/news/news44.webp", title: "किर्गिस्तान की 12 वर्षीय बच्ची को मिला नया जीवन", date: "July 18, 2022", link: "/news" },
	];

	const faqs = [
		{ q: "What are Patient Specific Implants?", a: "Patient Specific Implants are 3D-printed implants custom designed from a patient's own CT/MRI scan data to match their unique anatomy precisely." },
		{ q: "Which surgeries use Patient Specific Implants?", a: "They are used in orthopedic, cranial, maxillofacial, spinal and reconstructive surgeries where standard implants are not sufficient." },
		{ q: "How does Virtual Surgical Planning work?", a: "Our engineers build a 3D reconstruction from your imaging data, simulate the surgery digitally and finalize the plan with your surgical team before production." },
		{ q: "How long does implant manufacturing take?", a: "Turnaround time depends on case complexity, but most patient-specific solutions are delivered within a few days of design approval." },
		{ q: "What are Custom 3D Printed Surgical Guides?", a: "These are patient-specific cutting, drilling or osteotomy guides that help surgeons achieve millimeter-accurate results during surgery." },
		{ q: "Do you provide services across India?", a: "Yes, we support hospitals and surgeons pan India with a secure imaging upload portal and dedicated clinical coordination." },
		{ q: "Which imaging files are required?", a: "We typically require DICOM format CT or MRI scans, which can be uploaded securely through our portal." },
		{ q: "What materials are used?", a: "We use medical-grade, biocompatible materials such as titanium and PEEK, depending on the clinical requirement." },
	];

	return (
		<>
			<Head>
				<title>Patient-Specific Implants & Virtual Surgical Planning | Curewith3D</title>
				<meta name="description" content="Curewith3D delivers patient-specific implants, customised orthopedic implants, virtual surgical planning, and 3D surgical solutions for orthopedic, CMF, neuro, and reconstructive procedures, helping surgeons achieve greater precision and improved patient outcomes." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" />
			</Head>

			<div className="page-content">

				{/* ================= HERO ================= */}
				<section className="bannercx pt-60 pb-60">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-7">
								<h1 className="h1cba">Patient Specific Implants, Custom 3D Printed Surgical Guides &amp; Virtual Surgical Planning</h1>
								<p className="hero-desc">Curewith3D designs patient specific implants, custom 3D printed surgical guides, virtual surgical planning and 3D surgical models for orthopedic, cranial, maxillofacial and reconstructive surgeries across India.</p>

								<div className="row hero-feature-row g-3">
									<div className="col-6 col-md-3 hero-feature-item">
										<img src="/images/home/hero-Icons/Patient-Specific Implant Design.svg" alt="Faster Surgical Planning" />
										<span>Patient-Specific Design</span>
									</div>
									<div className="col-6 col-md-3 hero-feature-item">
										<img src="/images/home/hero-Icons/Faster-Surgical-Planning.svg" alt="Faster Surgical Planning" />
										<span>Faster Surgical Planning</span>
									</div>
									<div className="col-6 col-md-3 hero-feature-item">
										<img src="/images/home/hero-Icons/Surgeon Collaboration.svg" alt="Faster Surgical Planning" />
										<span>Surgeon Collaboration</span>
									</div>
									<div className="col-6 col-md-3 hero-feature-item">
										<img src="/images/home/hero-Icons/Pan India Support.svg" alt="Faster Surgical Planning" />
										<span>Pan India Support</span>
									</div>
								</div>

								<div className="hero-btn-row mt-4">
									<a href="/upload-scan" className="pbmit-btn pbmit-btn-red">Upload CT / MRI Scan</a>
									<a href="/contact-us" className="pbmit-btn pbmit-btn-outline">Request Consultation</a>
								</div>
							</div>

							<div className="col-lg-5">
								<div className="row align-items-center">
									<div className="col-8">
										<img src="/images/main/slider/cranial-reconstruction-implant.webp" className="img-fluid" alt="3D printed cranial implant patient specific" />
									</div>
									<div className="col-4">
										<ul className="hero-trust-list list-unstyled">
											<li><img src="/images/home/trust-bar/Trusted by 100+ Hospitals.svg" alt="Faster Surgical Planning" />Trusted by 100+ Hospitals</li>
											<li><img src="/images/home/trust-bar/ISO 90012015 Certified.svg" alt="Faster Surgical Planning" />ISO 9001:2015 Certified</li>
											<li><img src="/images/home/trust-bar/Medical Grade Manufacturing.svg" alt="Faster Surgical Planning" />Medical Grade Manufacturing</li>
											<li><img src="/images/home/trust-bar/Fast Turnaround Time.svg" alt="Faster Surgical Planning" />Fast Turnaround Time</li>
											<li><img src="/images/home/trust-bar/Dedicated Clinical Support.svg" alt="Faster Surgical Planning" />Dedicated Clinical Support</li>
											<li><img src="/images/home/trust-bar/Pan India Delivery.svg" alt="Faster Surgical Planning" />Pan India Delivery</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* ================= WHO WE ARE ================= */}
				<section className="background"><br/><br/>
					<div className="container">
						<div className="row  align-items-center">
							<div className="col-md-12 col-xl-6">
								<div className="video-box">
									<img className="pbmit-video img-fluid rediubbod" src="/images/main/curewith3d-medical-3d-printing-solutions.webp" alt="Advanced medical 3D printing solutions and patient-specific implants by Curewith3D" />
								</div>
							</div>
							<div className="col-md-12 col-xl-6">
								<div className="about-three-content">
									<div className="pbmit-heading-subheading animation-style2 mb-10">
										<h4 className="pbmit-subtitle">Who We Are</h4>
										<h2 className="pbmit-title">India's Trusted Partner for Patient Specific Implants &amp; Digital Surgical Solutions</h2>
										<div className="pbmit-heading-desc">
											Curewith3D brings innovation in healthcare with specialized and advanced, patient-specific 3D implants for Orthopaedic, Oral &amp; Maxillofacial, and Neurosurgical surgeries. It delivers fully customized implants, precision-engineered surgical guides, and anatomically accurate 3D-printed models that enhance accuracy from preoperative planning to the final procedure.
										</div>
									</div>
									<div className="pt-4">
										<a className="pbmit-btn pbmit-btn-blackish" href="/about-us">
											<span className="pbmit-button-content-wrapper">
												<span className="pbmit-button-icon">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
														<path d="m31 50.979c-.362.007-.727-.081-1.049-.28-.929-.572-1.212-1.814-.653-2.742.047-.082 5.886-9.826 17.032-15.958h-43.33c-1.103 0-2-.897-2-2s.897-2 2-2h43.33c-11.084-6.097-16.989-15.884-17.047-15.982-.547-.934-.244-2.177.689-2.73.946-.561 2.192-.236 2.757.715.909 1.45 9.433 14.449 24.722 18.046.915.225 1.549 1.026 1.549 1.952s-.63 1.729-1.532 1.948c-15.354 3.61-23.849 16.626-24.767 18.099-.36.577-1.025.919-1.7.932z"></path>
													</svg>
												</span>
												<span className="pbmit-button-text">Know More About Us</span>
											</span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div><br/><br/>
				</section>

				{/* ================= STATS BAR ================= */}
				<section className="cx-stats-bar">
					<div className="container">
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

				{/* ================= CORE SERVICES ================= */}
				<section className="background pt-50 pb-50">
					<div className="container">
						<div className="pbmit-heading-subheading text-center animation-style2 mb-30">
							<h4 className="pbmit-subtitle">Our Core Services</h4>
						</div>
						<div className="row g-4">
							{coreServices.map((s, i) => (
								<div className="col-md-6 col-xl-3" key={i}>
									<div className="cx-service-card h-100">
										<div className="cx-service-img">
											<img src={s.img} className="img-fluid w-100" alt={s.title} />
										</div>
										<div className="cx-service-body">
											<h3 className="pbmit-service-title"><a href={s.link}>{s.title}</a></h3>
											<p>{s.desc}</p>
											<a className="cx-learnmore" href={s.link}>Learn More <i className="pbmit-base-icon-black-arrow-1"></i></a>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* ================= HOW WE WORK ================= */}
				<section className="section-lg pt-50 pb-50 pbmit-bg-color-light">
					<div className="container">
						<div className="pbmit-heading-subheading text-center animation-style2 mb-30">
							<h4 className="pbmit-subtitle">How We Work</h4>
						</div>
						<div className="cx-process-row d-flex flex-wrap justify-content-center align-items-start">
							{howWeWork.map((step, i) => (
								<React.Fragment key={i}>
									<div className="cx-process-step text-center">
										<div className="cx-process-icon">
											<img src={step.img} className="img-fluid" alt={step.title} />
										</div>
										<p>{step.title}</p>
									</div>
									{i < howWeWork.length - 1 && <span className="cx-process-arrow">&gt;</span>}
								</React.Fragment>
							))}
						</div>
					</div>
				</section>

				{/* ================= SPECIALTIES WE SERVE ================= */}
				<section className="background pt-50 pb-50">
					<div className="container">
						<div className="pbmit-heading-subheading text-center animation-style2 mb-30">
							<h4 className="pbmit-subtitle">Specialties We Serve</h4>
						</div>
						<div className="row g-4 text-center">
							 
								<div className="col-6 col-md-3 col-lg-3">
									<div className="cx-specialty-item">
										<div className="cx-specialty-icon">
											<img src="/images/home/SpecialtiesWeServe/Orthopedic Surgery.svg" alt="dadss"/>
										</div>
										<span>Orthopedic Surgery</span>
									</div>
								</div>
								<div className="col-6 col-md-3 col-lg-3">
									<div className="cx-specialty-item">
										<div className="cx-specialty-icon">
											<img src="/images/home/SpecialtiesWeServe/Neurosurgery.svg" alt="dadss"/>
										</div>
										<span>Neurosurgery</span>
									</div>
								</div>
								<div className="col-6 col-md-3 col-lg-3">
									<div className="cx-specialty-item">
										<div className="cx-specialty-icon">
											<img src="/images/home/SpecialtiesWeServe/Maxillofacial Surgery.svg" alt="dadss"/>
										</div>
										<span>Maxillofacial Surgery</span>
									</div>
								</div>
								<div className="col-6 col-md-3 col-lg-3">
									<div className="cx-specialty-item">
										<div className="cx-specialty-icon">
											<img src="/images/home/SpecialtiesWeServe/Pelvic Reconstruction.svg" alt="dadss"/>
										</div>
										<span>Pelvic Reconstruction</span>
									</div>
								</div>
								<div className="col-6 col-md-3 col-lg-3">
									<div className="cx-specialty-item">
										<div className="cx-specialty-icon">
											<img src="/images/home/SpecialtiesWeServe/Oncology Reconstruction.svg" alt="dadss"/>
										</div>
										<span>Oncology Reconstruction</span>
									</div>
								</div>
								<div className="col-6 col-md-3 col-lg-3">
									<div className="cx-specialty-item">
										<div className="cx-specialty-icon">
											<img src="/images/home/SpecialtiesWeServe/Trauma Surgery.svg" alt="dadss"/>
										</div>
										<span>Trauma Surgery</span>
									</div>
								</div>
								<div className="col-6 col-md-3 col-lg-3">
									<div className="cx-specialty-item">
										<div className="cx-specialty-icon">
											<img src="/images/home/SpecialtiesWeServe/Spine Surgery.svg" alt="dadss"/>
										</div>
										<span>Spine Surgery</span>
									</div>
								</div>
								<div className="col-6 col-md-3 col-lg-3">
									<div className="cx-specialty-item">
										<div className="cx-specialty-icon">
											<img src="/images/home/SpecialtiesWeServe/Joint Reconstruction.svg" alt="dadss"/>
										</div>
										<span>Joint Reconstruction</span>
									</div>
								</div>							 
						</div>
					</div>
				</section>

				{/* ================= WHY CHOOSE CUREWITH3D ================= */}
				<section className="cx-why-choose pbmit-bg-color-blackish">
					<div className="container">
						<div className="pbmit-heading-subheading text-center animation-style2 mb-20">
							<h4 className="pbmit-subtitle colorw">Why Choose Curewith3D?</h4>
						</div>
						<div className="row g-4">
							{whyChoose.map((w, i) => (
								<div className="col-6 col-md-4 col-lg-2 text-center" key={i}>
									<div className="cx-why-item">
										<img src={`/images/main/whychoose/icon-${i + 1}.svg`} className="img-fluid" alt={w.title} />
										<h5>{w.title}</h5>
										<p>{w.desc}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* ================= TESTIMONIALS ================= */}
				<section className="pbmit-bg-color-secondary testimonial-sec-two mb-40">
					<div className="container-fluid p-0">
						<div className="row g-0">
							<div className="col-md-12 col-xl-6">
								<div className="testimonial-two-bg" />
							</div>
							<div className="col-md-12 col-xl-6">
								<div className="testimonial-two-box">
									<div className="pbmit-heading-subheading animation-style5">
										<h4 className="pbmit-subtitle">Testimonial</h4>
										<h2 className="pbmit-title">Trusted by Leading Surgeons</h2>
									</div>
									<div className="swiper-slider1">
										<Slider {...testimonialSettings}>
											{testimonials.map((t, i) => (
												<article className="pbmit-testimonial-style-2 swiper-slide" key={i}>
													<div className="pbminfotech-post-item">
														<div className="pbmit-box-content-wrap">
															<div className="pbminfotech-box-desc">
																<blockquote className="pbminfotech-testimonial-text">
																	<p>&ldquo;{t.text}&rdquo;</p>
																</blockquote>
															</div>
															<div className="pbminfotech-box-author d-flex align-items-center">
																<div className="pbminfotech-box-img">
																	<div className="pbmit-featured-img-wrapper">
																		<div className="pbmit-featured-wrapper">
																			<img src={t.img} className="img-fluid rounded-circle" alt={t.name} />
																		</div>
																	</div>
																</div>
																<div className="pbmit-auther-content">
																	<h3 className="pbminfotech-box-title">{t.name}</h3>
																	<div className="pbminfotech-testimonial-detail">{t.role}</div>
																</div>
															</div>
														</div>
													</div>
												</article>
											))}
										</Slider>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* ================= LATEST NEWS ================= */}
				<section className="section-lg pt-50 pb-50">
					<div className="container">
						<div className="pbmit-heading-subheading text-center animation-style2 mb-30">
							<h4 className="pbmit-subtitle">Latest News &amp; Articles</h4>
						</div>
						<div className="row g-4">
							{newsItems.map((n, i) => (
								<div className="col-md-4" key={i}>
									<div className="cx-news-card">
										<a href={n.link}><img src={n.img} className="img-fluid w-100" alt={n.title} /></a>
										<div className="cx-news-body">
											<h5><a href={n.link}>{n.title}</a></h5>
											<span className="cx-news-date">{n.date}</span>
											<a className="cx-learnmore d-block mt-2" href={n.link}>Read More <i className="pbmit-base-icon-black-arrow-1"></i></a>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* ================= FAQ ================= */}
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

				{/* ================= CTA + CONTACT FORM ================= */}
				<section className="px-xl-4 px-2 mt-50">
					<div className="container-fluid">
						<div className="row g-0">
							<div className="col-md-12 col-xl-6 fadeInLeft animated">
								<div className="contact-one-bg transform-your-surgical" />
							</div>
							<div className="col-md-12 col-xl-6 fadeInRight animated">
								<div className="contact-one-form-area pbmit-bg-color-blackish">
									<div className="pbmit-heading-subheading animation-style2">
										<h4 className="pbmit-subtitle">Contact Us</h4>
										<h2 className="pbmit-title">Ready to Plan Your Next Complex Surgery?</h2>
										<p className="colorw">Partner with Curewith3D for Patient Specific Implants, Custom 3D Printed Surgical Guides, Virtual Surgical Planning and 3D Surgical Models tailored to your clinical needs.</p>
									</div>
									<form className="formsc" id="contactForm" onSubmit={registerUser}>
										<div className="row">
											<div className="col-md-6">
												<input type="text" className="form-control" placeholder="Your Name" name="name" />
											</div>
											<div className="col-md-6">
												<input type="email" name="email" className="form-control" placeholder="Email Address" />
											</div>
											<div className="col-md-6">
												<input type="text" className="form-control" name="phone" maxLength="13" minLength="10" pattern="[0-9]*" placeholder="Phone No.*" />
											</div>
											<div className="col-md-6">
												<select className="form-select" name="service" required>
													<option value="">Choose a Service</option>
													<option value="3D Surgical Models">3D Surgical Models</option>
													<option value="Patient Specific Implants">Patient Specific Implants</option>
													<option value="Custom 3D Printed Surgical Guides">Custom 3D Printed Surgical Guides</option>
												</select>
											</div>
											<div className="col-md-12">
												<textarea name="message" cols="40" rows="6" className="form-control" placeholder="Message" required></textarea>
											</div>
										</div>
										<div className="pbmit-button-wrapper">
											<button type="submit" className="pbmit-btn pbmit-btn-red" id="submitbuttonform">
												<span className="pbmit-button-content-wrapper">
													<span className="pbmit-button-icon">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
															<path d="m31 50.979c-.362.007-.727-.081-1.049-.28-.929-.572-1.212-1.814-.653-2.742.047-.082 5.886-9.826 17.032-15.958h-43.33c-1.103 0-2-.897-2-2s.897-2 2-2h43.33c-11.084-6.097-16.989-15.884-17.047-15.982-.547-.934-.244-2.177.689-2.73.946-.561 2.192-.236 2.757.715.909 1.45 9.433 14.449 24.722 18.046.915.225 1.549 1.026 1.549 1.952s-.63 1.729-1.532 1.948c-15.354 3.61-23.849 16.626-24.767 18.099-.36.577-1.025.919-1.7.932z"></path>
														</svg>
													</span>
													<span className="pbmit-button-text">Get Cost Estimate</span>
												</span>
											</button>
											<p id="showlabel" style={{ display: "none" }}></p>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</section>

			</div>
		</>
	);
}