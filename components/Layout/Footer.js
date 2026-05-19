import React from 'react'

export default function Footer() { 
  return (
    <>
<footer class="site-footer pbmit-bg-color-blackish">
			<div class="pbmit-footer-big-area">
				<div class="container">
					<div class="row align-items-center">
						<div class="col-md-12 col-xl-4">
							<div class="pbmit-footer-logo">
								<img src="/images/curewith3dfooter.png" alt=""/>
							</div>	
						</div>
						<div class="col-md-12 col-xl-8">
							<form>
								<div class="pbmit-footer-newsletter">
									<h3 class="pbmit-footer-news-title">Subscribe to Our <br/>Newsletter</h3>
									<div class="pbmit-news-wrap">
										<input type="email" class="form-control" name="EMAIL" placeholder="Enter Your Email Address"/>
										<button class="pbmit-btn">
											<span class="pbmit-button-content-wrapper">
												<span class="pbmit-button-icon">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
														<path d="m31 50.979c-.362.007-.727-.081-1.049-.28-.929-.572-1.212-1.814-.653-2.742.047-.082 5.886-9.826 17.032-15.958h-43.33c-1.103 0-2-.897-2-2s.897-2 2-2h43.33c-11.084-6.097-16.989-15.884-17.047-15.982-.547-.934-.244-2.177.689-2.73.946-.561 2.192-.236 2.757.715.909 1.45 9.433 14.449 24.722 18.046.915.225 1.549 1.026 1.549 1.952s-.63 1.729-1.532 1.948c-15.354 3.61-23.849 16.626-24.767 18.099-.36.577-1.025.919-1.7.932z"></path>
													</svg>
												</span>
												<span class="pbmit-button-text">Subscribe Now</span>
											</span>
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div class="pbmit-footer-widget-area">
				<div class="container">
					<div class="row">
						<div class="pbmit-footer-widget-col-1 col-md-3">
							<div class="widget widget_text">
								<div class="textwidget">
									<ul class="pbmit-social-links">
										<li class="pbmit-social-li pbmit-social-facebook">
											<a title="Facebook" href="https://www.facebook.com/Curewith3D/" target="_blank">
												<span><i class="pbmit-base-icon-facebook-f"></i></span>
											</a>
										</li>
									
										<li class="pbmit-social-li pbmit-social-linkedin">
											<a title="LinkedIn" href="https://www.linkedin.com/company/curewith3d" target="_blank">
												<span><i class="pbmit-base-icon-linkedin-in"></i></span>
											</a>
										</li>
										<li class="pbmit-social-li pbmit-social-instagram">
											<a title="Instagram" href="https://www.instagram.com/curewith3d/" target="_blank">
												<span><i class="pbmit-base-icon-instagram"></i></span>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="pbmit-footer-widget-col-2 col-md-3">
							<div class="widget pbmit-two-column-menu">
								<h2 class="widget-title">Useful Links</h2>
								<ul>
									<li><a href="/">Home</a></li>
									<li><a href="/about-us">About Us</a></li>
									<li><a href="/resources/case-studies">Case Studies</a></li>
									<li><a href="/blog">Blogs</a></li>
									<li><a href="/contact-us">Contact Us</a></li>
								</ul>
							</div>
						</div>
						<div class="pbmit-footer-widget-col-2 col-md-3">
							<div class="widget pbmit-two-column-menu">
								<h2 class="widget-title">Services</h2>
								<ul>
									<li><a href="/patient-specific-implants">Patient Specific Implants</a></li>
									<li><a href="/custom-3d-printed-surgical-guides">Custom 3D Printed Surgical Guides</a></li>
									<li><a href="/virtual-surgical-planning">Virtual Surgery Planning (VSP)</a></li>
									<li><a href="/3d-surgical-models">3D Surgical Models</a></li>
								</ul>
							</div>
						</div>
				 
						<div class="pbmit-footer-widget-col-4 col-md-3">
							<aside class="widget">
								<h2 class="widget-title">Say Hello</h2>
								<div class="pbmit-contact-widget-lines">
									<div class="pbmit-contact-widget-line pbmit-base-icon-phone">
										<a href="tel:+91-920-555-98-04">+91-920-555-98-04</a>
									</div>
									<div class="pbmit-contact-widget-line pbmit-base-icon-email">
										<a href="mailto:curewith3d@anvka.com">curewith3d@anvka.com</a>
									</div>
								</div>
							</aside>
						</div>
					</div>
				</div>
			</div>
			<div class="pbmit-footer-text-area">
				<div class="container">
					<div class="pbmit-footer-text-inner">
						<div class="row">
							<div class="col-md-12">
							   <div class="pbmit-footer-copyright-text-area text-center"> Copyright © 2026 <a href="#">Curewith3D</a> All Rights Reserved.</div>
							</div>
							<div class="col-md-6">
								<div class="pbmit-footer-menu-area">
									<div class="menu-footer-menu-container">
										<ul class="pbmit-footer-menu">
											{/* <li><a href="#">Privacy Policy</a></li>
											<li><a href="#">Term And Condition</a></li> */}
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
        </footer>
    </>
  )
}