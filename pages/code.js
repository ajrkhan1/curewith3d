import Head from "next/head";
import React, { useState } from "react";

export default function PatientSpecificImplants() {

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

	const psiGains = [
		"Exact anatomical fit based on patient imaging",
		"Improved implant alignment and positioning",
		"Reduced intraoperative adjustments",
		"Greater surgical clarity and predictability",
		"Streamlined workflow from planning to closure",
	];

	const psiProcess = [
		"Converting DICOM imaging data into 3D anatomical models",
		"Virtual surgical planning",
		"Patient-specific implant design",
		"3D printing using medical-grade materials",
	];

	const psiKeyAdvantages = [
		"Exact anatomical fit",
		"Improved functional and aesthetic outcomes",
		"Lower risk of implant-related complications",
		"Faster patient recovery and rehabilitation",
	];

	const workflowSteps = [
		{ title: "Image Acquisition", desc: "We receive high-resolution CT or MRI scans in DICOM format." },
		{ title: "3D Anatomical Segmentation", desc: "Our engineers convert scan data into a detailed 3D anatomical model of the region of interest." },
		{ title: "Virtual Surgical Planning", desc: "We collaborate with the surgeon to plan resections, alignments, and reconstruction goals." },
		{ title: "Patient-Specific Guides & Implant Design", desc: "Using advanced CAD software, we design patient-specific guides and implant designs for precise osteotomy and mimic natural anatomy." },
		{ title: "Surgeon Approval", desc: "The surgeon reviews and approves the design before manufacturing." },
		{ title: "Additive Manufacturing", desc: "We manufacture the model, guides, and implant using precision 3D printing technologies." },
		{ title: "Post-Processing", desc: "Implants undergo surface finishing and quality checks." },
		{ title: "Delivery & Surgical Support", desc: "The implant is delivered ready for sterilization, along with surgical guides and models, if required." },
	];

	const clinicalIndications = [
		{ title: "Complex Trauma", desc: "Reconstruction of severe fractures, malunions, nonunions, and post-traumatic bone loss." },
		{ title: "Bone Tumors", desc: "Customized reconstruction following tumor resection, including limb salvage procedures." },
		{ title: "Cranio-Maxillofacial Reconstruction", desc: "Restoration of cranial, mandibular, orbital, and facial defects after trauma, tumor resection, or congenital conditions." },
		{ title: "Revision Surgeries", desc: "Management of failed implants, previous reconstructions, bone loss, and altered anatomy." },
		{ title: "Congenital Deformities", desc: "Correction of complex skeletal abnormalities requiring individualized implant solutions." },
		{ title: "Large Bone Defects", desc: "Reconstruction of segmental bone loss caused by trauma, infection, or tumor excision." },
		{ title: "Pelvic Reconstruction", desc: "Patient-specific solutions for complex pelvic defects, acetabular reconstruction, and oncologic resections." },
		{ title: "Limb Salvage Procedures", desc: "Personalized implants designed to preserve limb function following extensive bone resection." },
	];

	// Titanium
	const tiProperties = ["High strength-to-weight ratio", "Excellent fatigue and corrosion resistance", "Superior osseointegration with surrounding bone", "Outstanding long-term biocompatibility", "Compatible with advanced medical 3D printing technologies", "Designed for permanent implantation"];
	const tiIndications = ["Pelvic and acetabular reconstruction", "Orthopedic oncology and limb salvage surgery", "Complex trauma reconstruction", "Cranial reconstruction", "Maxillofacial reconstruction", "Mandibular and facial implants", "Spinal reconstruction", "Revision orthopedic surgeries"];
	const tiAdvantages = ["Excellent mechanical strength for high-load applications", "Promotes strong bone integration through osseointegration", "Highly resistant to corrosion and wear", "Long clinical history with proven safety", "Ideal for complex patient-specific implant designs", "Supports long-term implant stability"];
	const tiLimitations = ["Metallic implants may produce artifacts on CT and MRI imaging.", "Higher stiffness compared to natural bone may not be ideal for certain low-load clinical situations.", "Material selection should always be based on the patient's anatomy and surgical objectives."];

	// PEEK
	const peekProperties = ["Lightweight yet mechanically durable", "Excellent Biocompatible Material", "Radiolucent for artifact-free postoperative imaging", "Elastic modulus similar to cortical bone", "Chemically stable and corrosion resistant", "High dimensional accuracy for customized implant manufacturing"];
	const peekIndications = ["Cranial implants", "Cranial defect reconstruction", "Maxillofacial reconstruction", "Spinal interbody fusion cages", "Cervical and lumbar spine procedures", "Selected orthopedic reconstructions", "Patient-specific craniofacial implants"];
	const peekAdvantages = ["Excellent compatibility with CT and MRI imaging", "Reduced implant weight for improved patient comfort", "Mechanical properties closer to natural bone", "Excellent chemical stability and biocompatibility", "Suitable for highly customized patient-specific implant designs", "Supports precise anatomical restoration"];
	const peekLimitations = ["Standard PEEK does not naturally achieve the same degree of osseointegration as Medical Grade Titanium, although advanced surface technologies continue to improve bone integration.", "Material selection depends on the anatomical location, biomechanical requirements, and surgeon preference."];

	// Implant gallery — 15 items, sequence as specified.
	// NOTE items marked TODO reuse a placeholder / old photo and should be
	// swapped once the correct product photo is available.
	const implantGallery = [
		{ img: "/images/main/service/psi/cranial-implant.jpg", title: "Cranial Implant" },
		{ img: "/images/main/service/psi/orbital-implant.jpg", title: "Orbital Implant" },
		{ img: "/images/main/service/psi/facial-augment.jpg", title: "Facial Augment" },
		{ img: "/images/main/service/psi/maxilla-implant.jpg", title: "Maxilla Implant" }, // TODO: new photo needed (was "Patient-specific dental implant")
		{ img: "/images/main/service/psi/mandible-implant.jpg", title: "Mandible Implant" },
		{ img: "/images/main/service/psi/subperiosteal-implant.jpg", title: "Subperiosteal Implant" }, // TODO: new photo needed (was "SSO/BSSO implant")
		{ img: "/images/main/service/psi/tmj-implant.jpg", title: "TMJ Implant" }, // TODO: confirm photo (currently reusing old "Chin Implant" image)
		{ img: "/images/main/service/psi/psi-plates.jpg", title: "PSI Plates" },
		{ img: "/images/main/service/psi/spinal-cage-implant.jpg", title: "Spinal Cage Implant" },
		{ img: "/images/main/service/psi/sternum-implant.jpg", title: "Sternum Implant" },
		{ img: "/images/main/service/psi/scapula-implant.jpg", title: "Scapula Implant" },
		{ img: "/images/main/service/psi/finger-implant.jpg", title: "Finger Implant" },
		{ img: "/images/main/service/psi/pelvis-implant.jpg", title: "Pelvis Implant" },
		{ img: "/images/main/service/psi/tibia-implant.jpg", title: "Tibia Implant" },
		{ img: "/images/main/service/psi/talus-implant.jpg", title: "Talus Implant" },
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

	const comparisonRows = [
		{ feature: "Anatomical Fit", psi: "Custom-designed to match the patient's unique anatomy with exceptional precision.", standard: "Manufactured in standard sizes, often requiring adjustments during surgery." },
		{ feature: "Surgical Accuracy", psi: "Supports highly accurate implant positioning and reconstruction through personalized design.", standard: "Accuracy depends on intraoperative modifications and surgeon adaptation." },
		{ feature: "Operating Time", psi: "Reduces surgical time by minimizing implant adjustments and simplifying placement.", standard: "May increase operating time due to contouring, bending, or resizing of implants." },
		{ feature: "Implant Stability", psi: "Provides improved contact with bone surfaces, enhancing fit and stability.", standard: "Stability may be affected if the implant does not conform perfectly to the patient's anatomy." },
		{ feature: "Revision Rates", psi: "Personalized fit may help reduce complications associated with poor implant fit, potentially lowering the need for revision procedures.", standard: "Higher likelihood of revisions in complex cases where anatomical mismatch affects long-term outcomes." },
		{ feature: "Patient Outcomes", psi: "Promotes improved functional restoration, aesthetics, comfort, and overall surgical predictability.", standard: "Clinical outcomes may vary depending on implant fit and intraoperative adjustments." },
	];

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

	return (
		<>
			<Head>
				<title>Patient-Specific Implants — Personalized Precision, Better Outcomes | Curewith3D</title>
				<meta name="description" content="Curewith3D designs and manufactures patient-specific implants (PSIs) using advanced CT/MRI-based planning, Virtual Surgical Planning (VSP), and medical-grade additive manufacturing." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="canonical" href="https://www.curewith3d.com/patient-specific-implants" />
			</Head>

			<div className="page-content cx-scope">

				{/* ================= HERO ================= */}
				<section className="cx-hero vsp-hero pt-60 pb-50">
					<div className="container">
						<div className="row">
							<div className="col-lg-10">
								<h1 className="h1cba">Personalized Precision. Better Outcomes.</h1>
								<p className="hero-desc mb-3" style={{ maxWidth: "100%" }}>
									Cure with 3D designs and manufactures patient-specific implants (PSIs) using advanced CT/MRI-based planning, Virtual Surgical Planning (VSP), and medical-grade additive manufacturing. Our custom implants are engineered to deliver precise anatomical fit, improved surgical accuracy, and predictable clinical outcomes across orthopedic, cranio-maxillofacial, neurosurgical, oncological, and reconstructive procedures.
								</p>

								<h4 className="cx-sub-heading">What You Gain with CureWith3D Implants:</h4>
								<ul className="cx-bullet-list">
									{psiGains.map((item, i) => (
										<li key={i}><i className="pbmit-base-icon-checked"></i>{item}</li>
									))}
								</ul>
								<p className="cx-body-text cx-emphasis" style={{ maxWidth: "100%" }}>We combine engineering excellence with medical expertise to deliver implants that are not just replacements but anatomical restorations.</p>
							</div>
						</div>
					</div>
				</section>

				{/* ================= WHY CHOOSE PSI OVER STANDARD ================= */}
				<section className="section-lg pt-50 pb-30 pbmit-bg-color-light">
					<div className="container">
						<div className="pbmit-heading-subheading animation-style2 mb-20">
							<h2 className="pbmit-title">Why Choose Patient-Specific Implants Over Standard Implants?</h2>
						</div>
						<p className="cx-body-text">No two patients have the same anatomy, which is why a one-size-fits-all implant may not always provide the best clinical solution. Patient-specific implants are designed using the patient&apos;s CT or MRI data, ensuring a precise anatomical fit that supports better surgical planning, improved implant positioning, and more predictable outcomes.</p>
						<p className="cx-body-text">Unlike conventional implants that often require intraoperative modifications, custom implants are engineered to match the patient&apos;s unique bone structure. This reduces surgical complexity, enhances procedural efficiency, and helps surgeons achieve optimal functional and aesthetic results.</p>
					</div>
				</section>

				{/* ================= WHAT ARE PSI ================= */}
				<section className="section-lg pt-30 pb-40 pbmit-bg-color-light">
					<div className="container">
						<p className="cx-body-text mb-30">At Curewith3D, every patient-specific implant is developed through a collaborative process involving surgeons and biomedical engineers. By combining advanced imaging, digital design, and medical 3D printing, we deliver personalized implant solutions that help improve surgical efficiency, clinical confidence, and patient outcomes.</p>

						<div className="pbmit-heading-subheading animation-style2 mb-20">
							<h2 className="pbmit-title">What are Patient-Specific Implants?</h2>
						</div>
						<p className="cx-body-text">Patient-specific implants are custom-designed 3D printed medical implants created using a patient&apos;s CT or MRI scan data. Unlike standard off-the-shelf implants, these are engineered to fit the patient&apos;s unique anatomy precisely.</p>

						<h4 className="cx-sub-heading">The process involves:</h4>
						<ul className="cx-bullet-list">
							{psiProcess.map((item, i) => (
								<li key={i}><i className="pbmit-base-icon-checked"></i>{item}</li>
							))}
						</ul>

						<h4 className="cx-sub-heading">Key advantages of patient-specific implants:</h4>
						<ul className="cx-bullet-list">
							{psiKeyAdvantages.map((item, i) => (
								<li key={i}><i className="pbmit-base-icon-checked"></i>{item}</li>
							))}
						</ul>
					</div>
				</section>

				{/* ================= WORKFLOW ================= */}
				<section className="section-lg pt-50 pb-50">
					<div className="container">
						<div className="pbmit-heading-subheading text-center animation-style2 mb-10">
							<h2 className="pbmit-title">Curewith3D&apos;s Workflow: From Imaging to Implantation</h2>
						</div>
						<p className="cx-body-text text-center mb-40">Our streamlined digital workflow ensures accuracy, transparency, and collaboration.</p>

						<div className="row g-4">
							{workflowSteps.map((step, i) => (
								<div className="col-md-6 col-lg-3" key={i}>
									<div className="cx-workflow-step">
										<div className="cx-workflow-num">{String(i + 1).padStart(2, "0")}</div>
										<h5>{step.title}</h5>
										<p>{step.desc}</p>
									</div>
								</div>
							))}
						</div>
						<p className="cx-body-text cx-emphasis text-center mt-30">This collaborative digital ecosystem reduces uncertainty and enhances surgical confidence.</p>
					</div>
				</section>

				{/* ================= WHEN ARE PSI RECOMMENDED ================= */}
				<section className="section-lg pt-40 pb-40 pbmit-bg-color-light">
					<div className="container">
						<div className="pbmit-heading-subheading animation-style2 mb-20">
							<h2 className="pbmit-title">When Are Patient-Specific Implants Recommended?</h2>
						</div>
						<p className="cx-body-text mb-20">Patient-Specific Implants (PSIs) are recommended when standard implants cannot provide the precision, fit, or stability required for complex surgical cases. Designed from the patient&apos;s CT or MRI data, they help restore anatomy more accurately and support predictable surgical outcomes.</p>

						<h4 className="cx-sub-heading">Common Clinical Indications</h4>
						<div className="row g-3">
							{clinicalIndications.map((c, i) => (
								<div className="col-md-6" key={i}>
									<div className="cx-clinical-block">
										<h5>{c.title}</h5>
										<p>{c.desc}</p>
									</div>
								</div>
							))}
						</div>
						<p className="cx-body-text cx-emphasis mt-20">When conventional implants are unable to address unique anatomical challenges, Patient-Specific Implants provide a personalized solution that enhances surgical precision, implant stability, and long-term functional outcomes.</p>
					</div>
				</section>

				{/* ================= ADVANCED TECHNOLOGY & MATERIALS ================= */}
				<section className="section-lg pt-40 pb-40">
					<div className="container">
						<div className="pbmit-heading-subheading animation-style2 mb-20">
							<h2 className="pbmit-title">Advanced Technology &amp; Materials</h2>
						</div>
						<p className="cx-body-text">The performance of a patient-specific implant depends on two critical factors; its design and the material from which it is manufactured. At Curewith3D, we combine advanced engineering with clinically proven Biocompatible Materials to develop implants that deliver exceptional strength, precision, and long-term reliability.</p>
						<p className="cx-body-text mb-30">Based on the clinical indication, anatomical location, and surgeon&apos;s requirements, our patient-specific implants are manufactured using Medical grade titanium (Ti-6Al-4V) and PEEK Implants (Polyether Ether Ketone). Each material offers unique mechanical and biological advantages, enabling personalized solutions for a wide range of reconstructive procedures.</p>

						{/* Titanium */}
						<h3 className="cx-material-title">Medical Grade Titanium (Ti-6Al-4V)</h3>
						<p className="cx-body-text">Medical grade titanium (Ti-6Al-4V) is the gold standard for patient-specific implants used in orthopedic, craniofacial, and spinal reconstruction. This high-performance titanium alloy offers an excellent balance of strength, durability, corrosion resistance, and biocompatibility, making it ideal for complex, load-bearing applications.</p>
						<p className="cx-body-text mb-20">One of its most significant advantages is its ability to promote osseointegration—the natural process in which bone cells grow onto the implant surface. Strong osseointegration enhances implant stability, supports long-term fixation, and contributes to successful clinical outcomes.</p>

						<div className="row g-4">
							<div className="col-md-6">
								<h5 className="cx-sub-heading">Material Properties</h5>
								<ul className="cx-bullet-list">{tiProperties.map((item, i) => (<li key={i}><i className="pbmit-base-icon-checked"></i>{item}</li>))}</ul>
								<h5 className="cx-sub-heading">Clinical Indications</h5>
								<ul className="cx-bullet-list">{tiIndications.map((item, i) => (<li key={i}><i className="pbmit-base-icon-checked"></i>{item}</li>))}</ul>
							</div>
							<div className="col-md-6">
								<h5 className="cx-sub-heading">Advantages</h5>
								<ul className="cx-bullet-list">{tiAdvantages.map((item, i) => (<li key={i}><i className="pbmit-base-icon-checked"></i>{item}</li>))}</ul>
								<h5 className="cx-sub-heading">Limitations</h5>
								<ul className="cx-bullet-list">{tiLimitations.map((item, i) => (<li key={i}><i className="pbmit-base-icon-checked"></i>{item}</li>))}</ul>
							</div>
						</div>

						{/* PEEK */}
						<h3 className="cx-material-title mt-40">PEEK Implants (Polyether Ether Ketone)</h3>
						<p className="cx-body-text">PEEK Implants (Polyether Ether Ketone) have become an increasingly popular alternative to metallic implants for selected reconstructive procedures. This advanced polymer combines excellent mechanical performance with lightweight construction and outstanding imaging compatibility.</p>
						<p className="cx-body-text mb-20">Unlike metallic implants, PEEK is radiolucent, allowing surgeons to clearly assess healing on CT and MRI scans without imaging artifacts. Its elastic modulus is closer to that of cortical bone, helping distribute mechanical loads more naturally.</p>

						<div className="row g-4">
							<div className="col-md-6">
								<h5 className="cx-sub-heading">Material Properties</h5>
								<ul className="cx-bullet-list">{peekProperties.map((item, i) => (<li key={i}><i className="pbmit-base-icon-checked"></i>{item}</li>))}</ul>
								<h5 className="cx-sub-heading">Clinical Indications</h5>
								<ul className="cx-bullet-list">{peekIndications.map((item, i) => (<li key={i}><i className="pbmit-base-icon-checked"></i>{item}</li>))}</ul>
							</div>
							<div className="col-md-6">
								<h5 className="cx-sub-heading">Advantages</h5>
								<ul className="cx-bullet-list">{peekAdvantages.map((item, i) => (<li key={i}><i className="pbmit-base-icon-checked"></i>{item}</li>))}</ul>
								<h5 className="cx-sub-heading">Limitations</h5>
								<ul className="cx-bullet-list">{peekLimitations.map((item, i) => (<li key={i}><i className="pbmit-base-icon-checked"></i>{item}</li>))}</ul>
							</div>
						</div>

						{/* Selecting the right material */}
						<h3 className="cx-material-title mt-40">Selecting the Right Material for Every Patient</h3>
						<p className="cx-body-text">Every surgical case presents unique anatomical and biomechanical challenges. At Curewith3D, our biomedical engineers work closely with surgeons to determine whether Medical grade titanium (Ti-6Al-4V) or PEEK Implants provide the most suitable solution based on the clinical indication, reconstruction goals, and patient-specific anatomy.</p>
						<p className="cx-body-text">Whether the priority is the exceptional osseointegration and strength of titanium for load-bearing reconstruction or the radiolucency and bone-like mechanical properties of PEEK for imaging-sensitive procedures, our team develops personalized implant solutions that optimize surgical precision and long-term performance.</p>

						<p className="cx-body-text cx-emphasis mt-20">Every patient-specific implant undergoes comprehensive digital design verification, structural validation, dimensional accuracy checks, and stringent quality assurance before manufacturing and clinical use, ensuring the highest standards of safety, precision, and reliability.</p>
					</div>
				</section>

				{/* ================= IMPLANT GALLERY ================= */}
				<section className="section-lg pt-50 pb-40 pbmit-bg-color-light">
					<div className="container">
						<div className="pbmit-heading-subheading animation-style2 mb-10">
							<h2 className="pbmit-title">Patient Specific Implants</h2>
						</div>
						<p className="cx-body-text mb-30">Our patient-specific implants are designed using precise CT/MRI-based 3D planning to match each individual&apos;s anatomy with exceptional accuracy. We deliver implants engineered for optimal fit, stability, and long-term performance.</p>

						<div className="row g-4">
							{implantGallery.map((item, i) => (
								<div className="col-6 col-md-3" key={i}>
									<div className="cx-vsp-item">
										<img src={item.img} className="img-fluid w-100" alt={item.title} />
										<h5>{item.title}</h5>
									</div>
								</div>
							))}
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

				{/* ================= COMPARISON TABLE ================= */}
				<section className="section-lg pt-50 pb-50 pbmit-bg-color-light">
					<div className="container">
						<div className="pbmit-heading-subheading text-center animation-style2 mb-20">
							<h2 className="pbmit-title">Patient-Specific Implants vs. Standard Implants</h2>
						</div>
						<div className="table-responsive">
							<table className="cx-compare-table">
								<thead>
									<tr>
										<th>Feature</th>
										<th>Patient-Specific Implants (PSI)</th>
										<th>Standard Implants</th>
									</tr>
								</thead>
								<tbody>
									{comparisonRows.map((row, i) => (
										<tr key={i}>
											<td className="cx-compare-feature">{row.feature}</td>
											<td>{row.psi}</td>
											<td>{row.standard}</td>
										</tr>
									))}
								</tbody>
							</table>
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
										<h2 className="pbmit-title">Let&apos;s Design Better Surgeries with 3D Precision.</h2>
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
												<select className="form-select" name="service" defaultValue="Patient Specific Implants" required>
													<option value="">Choose a Service</option>
													<option value="Patient Specific Implants">Patient Specific Implants</option>
													<option value="Custom 3D Printed Surgical Guides">Custom 3D Printed Surgical Guides</option>
													<option value="Virtual Surgical Planning">Virtual Surgical Planning</option>
													<option value="3D Surgical Models">3D Surgical Models</option>
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