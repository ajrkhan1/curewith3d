import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import React from "react";
import Slider from "react-slick";
import Marquee from "react-fast-marquee";
import CountUp, { useCountUp } from 'react-countup';



export default function Home() {
	

	useCountUp({
		ref: 'counter',
		end: 1234567,
		enableScrollSpy: true,
		scrollSpyDelay: 1000,
	});


	return (
		<>
			<Head>
				<title>3D Designs - Curewith3D</title>
				<meta name="description" content="Your clarity guides you as you work through the various layers of the 3D human anatomy. With our 3D surgical models, the boundaries of radiology and reality" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			

		<div class="surgicalmodelbg">
			<div class="container">
				<div class="pbmit-title-bar-content">
					<div class="pbmit-title-bar-content-inner">
						<div class="pbmit-tbar">
							<div class="pbmit-tbar-inner container">
								<h1 class="pbmit-tbar-title">3D Designs</h1>
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
								<span><span class="post-root post post-post current-item">3D Designs</span></span>
							</div>
						</div>
					</div>
				</div> 
			</div> 
		</div>



        <div class="page-content" id="page">

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
														<h3 class="pbmit-title">3D Designs Images</h3>
														<br></br>
													</div>
											</div>

                                            <div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="/images/main/3ddesign/01.webp" class="img-fluid w-100" alt="Brain Anatomy Model"/>
                                                    <h5>Shree Ganesha</h5>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="/images/main/3ddesign/02.webp" class="img-fluid w-100" alt="Brain Anatomy Model"/>
                                                    <h5>Blood Vessels</h5>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="/images/main/3ddesign/03.webp" class="img-fluid w-100" alt="Brain Anatomy Model"/>
                                                    <h5>Bone Deformity</h5>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="/images/main/3ddesign/04.webp" class="img-fluid w-100" alt="Brain Anatomy Model"/>
                                                    <h5>Bone Fracture side view</h5>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="/images/main/3ddesign/05.webp" class="img-fluid w-100" alt="Brain Anatomy Model"/>
                                                    <h5>Bone View</h5>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="/images/main/3ddesign/06.webp" class="img-fluid w-100" alt="Brain Anatomy Model"/>
                                                    <h5>Brain</h5>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="/images/main/3ddesign/07.webp" class="img-fluid w-100" alt="Brain Anatomy Model"/>
                                                    <h5>Fractured Bone</h5>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="/images/main/3ddesign/08.webp" class="img-fluid w-100" alt="Brain Anatomy Model"/>
                                                    <h5>Fracture bone color variation</h5>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="/images/main/3ddesign/09.webp" class="img-fluid w-100" alt="Brain Anatomy Model"/>
                                                    <h5>Hand Deformity</h5>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="/images/main/3ddesign/10.webp" class="img-fluid w-100" alt="Brain Anatomy Model"/>
                                                    <h5>Hand color Variation</h5>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="/images/main/3ddesign/11.webp" class="img-fluid w-100" alt="Brain Anatomy Model"/>
                                                    <h5>Hand Color Variation 2</h5>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div class="innerbox">
                                                    <img src="/images/main/3ddesign/12.webp" class="img-fluid w-100" alt="Brain Anatomy Model"/>
                                                    <h5>Mandible</h5>
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
          

        </div>
    
			
		</>
	);
}
