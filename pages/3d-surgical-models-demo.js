import Head from "next/head";
import React, { useState } from "react";
import { TypeAnimation } from 'react-type-animation';

export default function ThreeDSurgicalModels() {

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

	const benefits = [
		"Enhanced visualization of complex anatomy",
		"Improved surgical planning accuracy",
		"Pre-operative surgical rehearsal",
		"Better implant and fixation strategy planning",
		"Complex pathology evaluation",
		"Improved patient communication and consent discussions",
		"Useful for resident training and surgical teaching",
	];

	// Clinical applications by specialty
	const clinicalApplications = [
		{
			title: "Orthopedics",
			desc: "Our 3D surgical models help orthopedic surgeons evaluate bone deformities, fractures, joint anatomy, and complex reconstructions before surgery. These models support accurate implant selection, osteotomy planning, and pre-contouring of fixation plates.",
			items: ["High tibial osteotomy (HTO)", "Distal femoral osteotomy (DFO)", "Cubitus varus corrective osteotomy", "Tibial malunion correction", "Pelvic and acetabular reconstruction", "Bone tumor surgery", "Limb deformity correction", "Joint replacement planning"],
		},
		{
			title: "Neurosurgery",
			desc: "Patient-specific brain and skull models provide neurosurgeons with a detailed understanding of complex cranial anatomy, enabling safer surgical planning and improved intraoperative orientation.",
			items: ["Skull defect reconstruction", "Brain tumor surgery", "Cranial reconstruction", "Vascular malformation planning", "Complex cranial procedures"],
		},
		{
			title: "CMF/Maxillofacial Surgery",
			desc: "Our patient-specific anatomical models allow surgeons to visualize facial structures in three dimensions, facilitating precise planning for reconstructive and corrective procedures.",
			items: ["Orthognathic surgery", "Mandibular reconstruction", "Maxillary reconstruction", "Fibula free flap planning", "Facial trauma reconstruction", "Orbital floor reconstruction", "TMJ surgery"],
		},
		{
			title: "Spine Surgery",
			desc: "For complex spinal procedures, 3D anatomical models provide a comprehensive understanding of vertebral anatomy and deformities, helping surgeons improve surgical accuracy and implant placement.",
			items: ["Scoliosis correction", "Kyphosis surgery", "Lordosis correction", "Pedicle screw planning", "Spinal deformity reconstruction", "Complex revision spine surgery"],
		},
		{
			title: "ENT (Ear, Nose & Throat)",
			desc: "Detailed anatomical models support ENT surgeons in understanding delicate craniofacial structures, improving procedural planning and minimizing surgical risks.",
			items: ["Temporal bone surgery", "Cochlear implant planning", "Skull base surgery", "Ear reconstruction", "Sinonasal tumor surgery"],
		},
		{
			title: "Oncology",
			desc: "In oncological surgery, medical 3D printing enables the creation of patient-specific models that clearly define tumor location and its relationship to surrounding anatomy, supporting safer resections and reconstruction planning.",
			items: ["Bone tumor resections", "Pelvic oncology surgery", "Mandibular tumor reconstruction", "Cranial tumor surgery", "Limb salvage procedures", "Soft tissue tumor planning"],
		},
		{
			title: "Pediatric Surgery",
			desc: "Congenital anomalies often present unique anatomical challenges. Our 3D surgical models help pediatric surgeons plan complex procedures with greater confidence while improving communication with families.",
			items: ["Congenital skeletal deformities", "Craniofacial anomalies", "Congenital heart defects", "Pediatric orthopedic corrections", "Complex congenital reconstructions"],
		},
		{
			title: "Trauma Reconstruction",
			desc: "Trauma cases frequently involve complex fractures and anatomical disruption. Patient-specific models allow surgeons to evaluate injuries in detail, rehearse procedures, and optimize reconstruction strategies before surgery.",
			items: ["Complex pelvic fractures", "Acetabular fractures", "Facial trauma reconstruction", "Multi-fragmentary fractures", "Limb reconstruction", "Post-traumatic deformity correction"],
		},
	];

	// Applications beyond surgery — narrative blocks, no bullet lists
	const beyondSurgery = [
		{ title: "Medical Education", desc: "Our 3D surgical models provide medical students with a hands-on understanding of complex anatomy that cannot be achieved through textbooks or 2D imaging alone. They enable interactive learning and improve the comprehension of anatomical structures and pathological conditions." },
		{ title: "Resident & Fellow Training", desc: "Patient-specific anatomical models allow residents and fellows to gain practical experience before participating in live surgeries. These realistic models help build surgical confidence, improve anatomical orientation, and develop procedural skills in a controlled learning environment." },
		{ title: "Surgical Simulation", desc: "Surgeons can use 3D anatomical models to rehearse complex procedures, evaluate different surgical approaches, and practice critical steps before the actual operation. This simulation-based planning improves procedural accuracy, enhances team coordination, and reduces intraoperative uncertainty." },
		{ title: "Medical Device Development & Testing", desc: "Medical device manufacturers and research teams use medical 3D printing to evaluate new implants, fixation systems, surgical instruments, and prototype designs on anatomically accurate models. This supports product validation, design optimization, and usability testing before clinical application." },
		{ title: "Clinical Research", desc: "Researchers utilize patient-specific models to study anatomical variations, evaluate new surgical techniques, validate treatment strategies, and support clinical innovation. These models facilitate reproducible research while advancing evidence-based surgical practices." },
		{ title: "Patient Counselling & Shared Decision-Making", desc: "Explaining a complex surgical procedure becomes significantly easier when patients can see and hold a physical model of their own anatomy. Patient-specific anatomical models improve doctor-patient communication, help patients better understand their condition and treatment plan, and support informed consent." },
		{ title: "Conference Demonstrations & Surgical Workshops", desc: "Our 3D surgical models are valuable educational tools for medical conferences, workshops, and continuing medical education (CME) programs. They enable live demonstrations of surgical techniques, implant systems, and procedural workflows, creating engaging, hands-on learning experiences for healthcare professionals." },
	];

	// Technology pipeline — with "How it contributes to accuracy" bullets
	const technologies = [
		{
			title: "CT Segmentation",
			desc: "CT Segmentation is the process of isolating specific anatomical structures from high-resolution CT scan data. Our engineers carefully segment bones, joints, and other relevant structures to create an accurate digital representation of the patient's anatomy.",
			items: ["Captures intricate bony anatomy with high precision", "Defines fracture patterns and deformities clearly", "Supports accurate measurement and surgical planning", "Forms the foundation for patient-specific 3D models"],
		},
		{
			title: "MRI Segmentation",
			desc: "For procedures involving soft tissues, nerves, blood vessels, and internal organs, MRI Segmentation provides detailed visualization that complements CT imaging. This allows us to create comprehensive anatomical models for complex surgical cases.",
			items: ["Clearly visualizes soft tissue structures", "Improves planning for organ and tumor surgeries", "Enhances understanding of anatomical relationships", "Supports multi-tissue patient-specific models"],
		},
		{
			title: "Medical CAD (Computer-Aided Design)",
			desc: "Once the anatomy has been segmented, our biomedical engineers use advanced Medical CAD software to refine the digital model. This stage allows for detailed anatomical reconstruction, model optimization, and preparation for manufacturing.",
			items: ["Refines anatomical geometry", "Corrects imaging artifacts where necessary", "Enables precise digital measurements", "Produces clinically accurate anatomical reconstructions"],
		},
		{
			title: "STL Generation",
			desc: "After the CAD model is finalized, it is converted into an STL (Standard Tessellation Language) file—the industry-standard format for Medical 3D Printing. This digital file accurately represents every anatomical surface and contour required for fabrication.",
			items: ["Preserves complex anatomical details", "Converts imaging data into a printable format", "Ensures dimensional consistency throughout manufacturing", "Enables seamless integration with 3D printing systems"],
		},
		{
			title: "Additive Manufacturing",
			desc: "Using advanced Additive Manufacturing technologies, our 3D Anatomical Models are built layer by layer directly from the validated STL file. This manufacturing process reproduces complex anatomical geometries that are difficult or impossible to achieve using conventional methods.",
			items: ["Reproduces intricate anatomical structures with exceptional detail", "Supports patient-specific customization", "Minimizes material waste while maximizing precision", "Delivers consistent, repeatable manufacturing quality"],
		},
		{
			title: "Precision 3D Printing",
			desc: "Our high-resolution Precision 3D Printing systems ensure that every anatomical landmark, contour, cavity, and surface detail is accurately replicated. Depending on the clinical application, we use specialized printing technologies and materials to achieve the desired level of detail and durability.",
			items: ["Produces highly detailed anatomical replicas", "Maintains dimensional accuracy and structural integrity", "Accurately reproduces fine anatomical features", "Creates realistic models for surgical planning, education, and simulation"],
		},
	];

	const faqs = [
		{ q: "What are 3D surgical models used for?", a: "3D surgical models are used for preoperative planning, surgical rehearsal, medical training, and patient education. They help surgeons visualize complex anatomy in a tangible format before performing the actual procedure." },
		{ q: "How are 3D surgical models created?", a: "We create 3D surgical models using high-resolution CT or MRI scan data. The images are converted into detailed 3D reconstructions, segmented anatomically, and manufactured using advanced 3D printing technology for precise replication." },
		{ q: "Are your 3D surgical models patient-specific?", a: "Yes. We offer patient-specific 3D surgical models designed from individual imaging data, ensuring accurate representation of unique anatomical structures and pathology." },
		{ q: "Which specialties benefit from 3D surgical models?", a: "Specialties such as orthopedics, neurosurgery, cardiothoracic surgery, maxillofacial surgery, ENT, and trauma reconstruction benefit significantly from 3D surgical models for improved surgical planning and precision." },
		{ q: "Do 3D surgical models reduce operating time?", a: "Yes. By allowing surgeons to plan and rehearse procedures in advance, 3D surgical models help reduce intraoperative uncertainty, streamline workflow, and potentially shorten operating room time." },
	];

	return (
		<>
			<Head>
				<title>3D Surgical Models — Patient-Specific Anatomical Models | Curewith3D</title>
				<meta name="description" content="Curewith3D's 3D Surgical Models transform CT/MRI imaging into highly accurate patient-specific anatomical models for surgical planning, rehearsal, education, and patient communication." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="canonical" href="https://www.curewith3d.com/3d-surgical-models" />
			</Head>

			<div class="surgical-models-banne">
			<div class="container">
				<div class="pbmit-title-bar-content">
					<div class="pbmit-title-bar-content-inner">
						<div class="pbmit-tbar">
							<div class="pbmit-tbar-inner container">
								<h1 class="pbmit-tbar-title">
									<TypeAnimation
								
										sequence={[
										100,
										'3D Surgical Models',		
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
								<span><span class="post-root post post-post current-item">3D Surgical Models</span></span>
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
								<div class="about-us-one-left-box from-scan-to">
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
                                        At Curewith3D, our 3D Surgical Models transform complex medical imaging data into highly accurate Patient-Specific Anatomical Models, enabling surgeons to better understand patient anatomy before entering the operating room. These highly detailed 3D Anatomical Models bridge the gap between digital imaging and real-world surgical execution, helping surgeons visualize, plan, rehearse, and refine complex procedures with greater confidence.
                                    </p>
									<p class="pbmit-text">
                                        Powered by advanced Medical 3D Printing, high-resolution imaging segmentation, and precision manufacturing technologies, we produce realistic anatomical replicas that enhance Surgical Planning, preoperative simulation, medical education, patient communication, and hands-on training. From complex orthopedic and craniofacial cases to cardiovascular and oncological procedures, our patient-specific models support informed decision-making and improve surgical precision.
                                    </p>
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
											
											<h2 class="pbmit-title">What are 3D Anatomical Models?</h2>
											<p className="cx-body-text">3D anatomical models are physical representations of anatomical structures created from CT or MRI scan data. Unlike generic educational replicas, our models are patient-specific and anatomically accurate.</p>
						                    <p className="cx-body-text">These models merge the precision of radiology with the realism of physical structures, making them an essential tool for surgeons, educators, and medical device innovators. Whether you are planning a surgery, conducting medical training, or designing implants, our models bring true-to-life texture, dimension, and orientation to the table.</p>
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
									<div class="video-box pr-30">
										<img src="/images/main/service/simple-workflow.jpg" class="img-fluid w-100 imgreduis20" alt="Brain Anatomy Model"/>
									</div>
								</div>
								<div class="col-md-12 col-xl-6">
									<div class="about-three-content">
										<div class="pbmit-heading-subheading animation-style2 mb-10">
											
											<h2 class="pbmit-title">Benefits of 3D Surgical Models</h2>
											<p>Our models provide tangible clinical advantages, including:</p>
											<ul class="list-group ajrt">
												{benefits.map((item, i) => (
													<li key={i} className="list-group-item">
														<span class="pbmit-icon-list-icon">
																<i aria-hidden="true" class="pbmit-base-icon-checked"></i>						
														</span>
														{item}
													</li>
												))}
											</ul>
											<p>When surgeons hold the anatomy in their hands before surgery, they operate with greater clarity and confidence.</p>
											
										</div>									
									 
									</div>
								</div>
							</div>
						</div>
					</div>
			</section>

			


				{/* ================= CLINICAL APPLICATIONS BY SPECIALTY ================= */}
				<section className="section-lg pt-50 pb-40">
					<div className="container">
						<div className="pbmit-heading-subheading text-center animation-style2 mb-10">
							<h2 className="pbmit-title">Clinical Applications of 3D Anatomical Models</h2>
						</div>
						<p className="cx-body-text text-center mb-40" style={{ margin: "0 auto 40px" }}>3D anatomical models have become an essential tool in modern healthcare, enabling surgeons to visualize complex anatomy, plan intricate procedures, and improve surgical precision before entering the operating room. At Curewith3D, we create Patient-Specific Anatomical Models that support clinical decision-making across multiple specialties by transforming CT and MRI data into accurate physical replicas.</p>

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
						{/* NOTE: source content flagged a broken/placeholder image near this
						    section — add a relevant trauma-reconstruction photo here when available. */}
					</div>
				</section>

				{/* ================= APPLICATIONS BEYOND SURGERY ================= */}
				<section className="section-lg pt-50 pb-40 pbmit-bg-color-light">
					<div className="container">
						<div className="pbmit-heading-subheading text-center animation-style2 mb-10">
							<h2 className="pbmit-title">Applications Beyond Surgery</h2>
						</div>
						<p className="cx-body-text text-center mb-40" style={{ margin: "0 auto 40px" }}>While 3D anatomical models are widely used for preoperative planning, their value extends far beyond the operating room. At Curewith3D, our patient-specific anatomical models support education, innovation, research, and communication, making them indispensable tools across the healthcare ecosystem.</p>

						<div className="row g-4">
							{beyondSurgery.map((item, i) => (
								<div className="col-md-6 col-lg-4" key={i}>
									<div className="cx-clinical-block h-100">
										<h5>{item.title}</h5>
										<p>{item.desc}</p>
									</div>
								</div>
							))}
						</div>
						<p className="cx-body-text cx-emphasis text-center mt-30">From education and training to research and innovation, medical 3D printing has expanded the role of anatomical models far beyond surgical planning.</p>
					</div>
				</section>

				{/* ================= TECHNOLOGIES ================= */}
				<section className="section-lg pt-50 pb-50">
					<div className="container">
						<div className="pbmit-heading-subheading text-center animation-style2 mb-10">
							<h2 className="pbmit-title">Technologies Behind Our 3D Anatomical Models</h2>
						</div>
						<p className="cx-body-text text-center mb-40" style={{ margin: "0 auto 40px" }}>At Curewith3D, every 3D Anatomical Model is built through a meticulous digital workflow that combines advanced medical imaging, engineering expertise, and precision manufacturing. Each technology plays a critical role in ensuring that the final model accurately represents the patient&apos;s anatomy, enabling confident surgical planning and improved clinical decision-making.</p>

						<div className="row g-4">
							{technologies.map((tech, i) => (
								<div className="col-md-6" key={i}>
									<div className="cx-clinical-block h-100">
										<h5>{tech.title}</h5>
										<p>{tech.desc}</p>
										<h6 className="cx-clinical-sub">How it contributes to accuracy:</h6>
										<ul className="cx-bullet-list">
											{tech.items.map((item, j) => (
												<li key={j}><i className="pbmit-base-icon-checked"></i>{item}</li>
											))}
										</ul>
									</div>
								</div>
							))}
						</div>
						<p className="cx-body-text cx-emphasis text-center mt-30">This end-to-end digital workflow ensures every model faithfully represents the patient&apos;s unique anatomy, empowering better surgical planning, enhanced surgical simulation, improved education, and greater confidence in complex clinical cases.</p>
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

				<section class="section-lgb">
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
											<option value="Virtual Surgical Planning">Virtual Surgical Planning</option>
											<option value="3D Surgical Models" selected>3D Surgical Models</option>
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