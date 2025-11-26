import Link from 'next/link'
import React from 'react'
import { GhostNavbar } from "react-hamburger-menus";
import "react-hamburger-menus/dist/style.css";

export default function Header() {
    
  return (
    <>


<header class="site-header header-style-1">

			<div class="">
				<div class="pbmit-bg-color-white">
					<div class="container-fluid">
						<div class="pbmit-header-content d-flex justify-content-between align-items-center">
							<div class="pbmit-logo-menuarea d-flex justify-content-between align-items-center">
								<div class="site-branding">
									<h1 class="site-title">
										<a href="/">
											<img class="logo-img" src="/images/logo.svg" alt="Curewith3d"/>
										</a>
									</h1>
								</div>
								<div class="site-navigation">
									<nav class="main-menu navbar-expand-xl navbar-light">
										<div class="navbar-header">
											{/* <!-- Toggle Button -->  */}
											<button class="navbar-toggler" type="button">
												<i class="pbmit-base-icon-menu-1"></i>
											</button>
										</div>
										<div class="pbmit-mobile-menu-bg"></div>
										<div class="collapse navbar-collapse clearfix show" id="pbmit-menu">
											<div class="pbmit-menu-wrap">
												<span class="closepanel">
													<svg class="qodef-svg--close qodef-m" xmlns="http://www.w3.org/2000/svg" width="20.163" height="20.163" viewBox="0 0 26.163 26.163">
														<rect width="36" height="1" transform="translate(0.707) rotate(45)"></rect>
														<rect width="36" height="1" transform="translate(0 25.456) rotate(-45)"></rect>
													</svg>
												</span>
												<ul class="navigation clearfix">
													<li class="dropdown active">
														<a href="/">Home</a>														
													</li>
													<li><a href="about-us">About Us</a></li>
													
													<li class="dropdown">
														<a href="#">Services</a>
														<ul>
															<li><a href="/3d-surgical-models">3D Surgical Models</a></li>
															<li><a href="/patient-specific-implants">Patient Specific Implants</a></li>
															<li><a href="/custom-3d-printed-surgical-guides">Custom 3D Printed Surgical Guides</a></li>
														</ul>
													</li>
													{/* <li class="dropdown">
														<a href="/healthcare-uses">Healthcare Uses</a>
														<ul>
															<li><a href="/3d-surgical-models">3D Surgical Models</a></li>
															<li><a href="/patient-specific-implants">Patient Specific Implants</a></li>
															<li><a href="/custom-3d-printed-surgical-guides">Custom 3D Printed Surgical Guides</a></li>
														</ul>
													</li> */}
													<li>
														<a href="/3d-designs">3D Designs</a>													
													</li>
													<li>
														<a href="/blog">Blog</a>													
													</li>
													<li><a href="/contact-us">Contact Us</a></li>
												</ul>
											</div>
										</div>
									</nav>
								</div>
							</div>
					
							<div class="pbmit-right-box d-flex align-items-center">
								<div class="pbmit-header-button">
									<a href="tel:+91-920-555-98-04">
										<span class="pbmit-header-button-text-1">+91-920-555-98-04</span>		
									</a>
								</div>
								<div class="pbmit-header-search-btn">
									{/* <a href="#" title="Search">
										<i class="pbmit-base-icon-search-1"></i>
									</a> */}
								</div>
								<div class="pbmit-header-button2">
									<a class="pbmit-btn" href="/contact-us">
										<span class="pbmit-button-content-wrapper">
											<span class="pbmit-button-icon">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
													<path d="m31 50.979c-.362.007-.727-.081-1.049-.28-.929-.572-1.212-1.814-.653-2.742.047-.082 5.886-9.826 17.032-15.958h-43.33c-1.103 0-2-.897-2-2s.897-2 2-2h43.33c-11.084-6.097-16.989-15.884-17.047-15.982-.547-.934-.244-2.177.689-2.73.946-.561 2.192-.236 2.757.715.909 1.45 9.433 14.449 24.722 18.046.915.225 1.549 1.026 1.549 1.952s-.63 1.729-1.532 1.948c-15.354 3.61-23.849 16.626-24.767 18.099-.36.577-1.025.919-1.7.932z"></path>
												</svg>
											</span>
											<span class="pbmit-button-text">Appointment</span>
										</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
		

     </>
  )
}