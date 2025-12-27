import Head from "next/head";
import React from "react";
import { TypeAnimation } from 'react-type-animation';
import  moment from 'moment'


export async function getServerSideProps() {
 try {
    const res = await fetch(
      "https://wordpress-1457894-6050110.cloudwaysapps.com/wp-json/wp/v2/posts?_embed&categories=8",
      {
        headers: {
          "Accept": "application/json",
          "User-Agent": "Mozilla/5.0 (Next.js Server)"
        }
      }
    )

    if (!res.ok) {
      const text = await res.text()
      console.error("API Error:", text)

      return {
        props: { posts: [] }
      }
    }

    const posts = await res.json()

    return {
      props: { posts }
    }

  } catch (error) {
    console.error("Fetch failed:", error)

    return {
      props: { posts: [] }
    }
  }
}
 


export default function index({posts}) {
	return (
		<>
			<Head>
				<title>Clinical 3D Cases - Curewith3D</title>
				<meta name="description" content="At Curewith3D, we're a team passionate about the transformative potential of 3D design and printing technology. We combine cutting-edge technology with"/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />				
			</Head>
			<div class="page-content">

				<div class="aboutusbgbredcum">
						<div class="container">
							<div class="pbmit-title-bar-content">
								<div class="pbmit-title-bar-content-inner">
									<div class="pbmit-tbar">
										<div class="pbmit-tbar-inner container">
											<h1 class="pbmit-tbar-title">
												<TypeAnimation
											
													sequence={[
													100,
													'Clinical 3D Cases',		
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
											<span><span class="post-root post post-post current-item">Clinical 3D Cases</span></span>
										</div>
									</div>
								</div>
							</div> 
						</div> 
					</div>

					<section class="section-lgx pbmit-element-viewtype-masonry">
			<div class="container">
				<div class="row pbmit-element-posts-wrapper">



                    {/* <div className="col-sm-6">
                      <div className="blog-item">
                      <a href={`/resources/case-studies/${getpost.posturl}`}>
                      <img src={getpost.uagb_featured_image_src.large[0]} alt={getpost.ImageAlt}/>
                      </a>
                        <div className="content">
                        <span><i className='bx bx-time'></i>{moment(getpost.ModifiedDate).format('MMMM DD Y')}</span>
                        <h3><a href={`/resources/case-studies/${getpost.posturl}`}>{getpost.title.rendered}</a></h3>                        
                        </div>
                      </div>
                    </div>            */}
               
			{
             posts.map((getpost)=>{
                 return(
					<article class="pbmit-blog-style-1 col-md-4">
						<div class="post-item">
							<div class="pbminfotech-box-content">
								<div class="pbmit-featured-container">
									<div class="pbmit-featured-img-wrapper">
										<div class="pbmit-featured-wrapper">
											<a href={`/resources/case-studies/${getpost.slug}`}><img src={getpost.yoast_head_json.og_image[0].url} class="img-fluid" alt=""/></a>
										</div>
									</div>
								</div>
								<div class="pbmit-content-wrapper">
									<div class="pbmit-date-wraper d-flex align-items-center">
										<div class="pbmit-meta-date-wrapper pbmit-meta-line">
											<div class="pbmit-meta-date">
												<span class="pbmit-post-date">{moment(getpost.date).format('MMMM DD Y')}</span>
											</div>
										</div>
										<div class="pbmit-meta-category-wrapper pbmit-meta-line">
											<div class="pbmit-meta-category">
												<a href="/" rel="category tag"> Curewith3D</a>
											</div>
										</div>
									</div>
									<h3 class="pbmit-post-title">
										<a href={`/resources/case-studies/${getpost.slug}`}>{getpost.title.rendered}</a>
									</h3>
									<div class="pbminfotech-box-desc">
										Most laboratory is a facility that provides controlled conditions in which… 
									</div>
								</div>
								<div class="pbmit-shape-wraper">
									<div class="pbmit-shape-wraper-inner">
										<a class="pbmit-blog-btn" href={`/resources/case-studies/${getpost.slug}`} title="Hospital Labs Focused on Patients Begin Here.">
											<span class="pbmit-button-icon-wrapper">
												<span class="pbmit-button-icon">
													<i class="pbmit-base-icon-black-arrow-1"></i>
												</span>
											</span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</article>
					  );
                })
            }

				</div>
			</div>
		</section>
 
			</div>
		</>
	);
}
