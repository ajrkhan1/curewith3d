import Head from "next/head";
import React from "react";
import  moment from 'moment'


// export async function getStaticPaths() {
//     const res = await fetch('https://kenblanchardcompanies.in/kenblanchard/wp-json/wp/v2/posts?_embed&per_page=30')
//     const detailposts = await res.json()
//     const paths = detailposts.map((post) => ({
//       params: {
//            blogsSlug: post.slug,
//            leftsidebar: detailposts
//         },
//     }))
//     return { paths, fallback: false }
//   }

  

export async function getServerSideProps(context) {
   const post5 = await fetch('https://kbblogs.vercel.app/api/posts')
   const posts5 = await post5.json()

   const cat = await fetch('https://kbblogs.vercel.app/api/categories')
   const cats = await cat.json()


   const posturl = context.params.blogsSlug;
   const res = await fetch(`https://wordpress-1457894-6050110.cloudwaysapps.com/wp-json/wp/v2/posts?slug=${posturl}`)
   const posts = await res.json()

   const getfeedback = await fetch(`https://kbblogs.vercel.app/api/posts/feed/${posturl}`)
   console.log(getfeedback)
   const postfeedback = await getfeedback.json()

   return {
       props: {
           posts:posts[0],
           posts5,
           cats,
           postfeedback
       },
   }
}


const singleblog = ({ posts, posts5, cats, postfeedback }) => {
console.log(posts)
  return (
    <>
      <Head>
      <title>{posts.title.rendered}</title>
      <meta name="description" content="Blanchard Research and Training LLP is the leading training provider in South Asia, with expertise in leadership development across hierarchies. Having a global establishment of over 35 years and operational in India since 2008 by Mr Yogesh Sood who is a veteran in business operations and leadership development."/>
      <link rel="icon" href="/favicon.ico" />
      
      {/* Twitter */}
      {/* <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@blanchard_india" />
      <meta name="twitter:creator" content="@blanchard_india" />
      <meta name="twitter:title" content={posts.Title} />
      <meta name="twitter:description" content="" />
      <meta name="twitter:image" content={posts.ImageURL} />
      <meta property="twitter:url" content={posts.posturl} /> */}
    
      {/* Open Graph / Facebook */}
      {/* <meta property="og:locale" content="en-in" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Blanchard International" />
      <meta property="og:title" content={posts.Title} />
      <meta property="og:description" content="" />
      <meta property="og:image" name="image" content={posts.ImageURL} />
      <meta property="og:url" content={posts.posturl} /> */}

      </Head>
     <div className="page-content"> 
		<section className="site-content blog-details">
			<div className="container">
				<div className="row">
					<div className="col-md-12 col-xl-9 blog-left-col">
						<div className="row">
							<div className="col-md-12">
								<article>
									<div className="post blog-classic"> 
																			<div className="pbmit-img-wrapper">
																				<div className="pbmit-featured-img-wrapper">
																					<div className="pbmit-featured-wrapper">
																						<a href="#">
																							<img className="ajimgfull" src={posts.yoast_head_json.og_image[0].url} alt={posts.ImageAlt} />
																						</a>
																					</div>
																				</div>  
																			
																			</div>
																			<div className="pbmit-blog-classic-inner">
																				<div className="pbmit-blog-meta pbmit-blog-meta-top">												
																					<span className="pbmit-meta pbmit-meta-author">
																						<i className="pbmit-base-icon-user-3"></i>by<a className="pbmit-author-link" href="/">CureWith3d</a>
																					</span>	
																					<span className="pbmit-meta pbmit-meta-date">
																						<i className="pbmit-base-icon-calendar-3"></i>
																						<a href="blog-single-details.html" rel="bookmark">
																							<time className="entry-date published" datetime="2023-08-29T09:05:54+00:00">{moment(posts.date).format('MMMM DD Y')}</time>
																							<time className="updated pbmit-hide" datetime="2023-10-19T05:42:54+00:00"> 22 Nov 2025 </time>
																						</a>
																					</span>												
																				</div>
																				<div className="pbmit-entry-content">
																					<div dangerouslySetInnerHTML={{ __html: posts.content.rendered }} />
																				</div>
																				{/* <div className="pbmit-blog-meta-bottom">
																					<div className="pbmit-blog-meta-bottom-left">
																						<span className="pbmit-meta-tags">
																							<a href="#" rel="tag">equipment</a>
																							<a href="#" rel="tag">Forensic</a>
																							<a href="#" rel="tag">Gemological</a>
																						</span>
																					</div>
																				</div> */}
																			</div>   
																		</div>
									{/* <nav className="navigation post-navigation" aria-label="Posts">
										<div className="nav-links">
											<div className="nav-previous">
												<a href="blog-single-details.html" rel="prev">
													<span className="pbmit-post-nav-icon">
														<i className="pbmit-base-icon-left-arrow-1"></i>
														<span className="pbmit-post-nav-head">Previous Post</span>
													</span>
													<span className="pbmit-post-nav-wrapper">
														<span className="pbmit-post-nav nav-title">A Guide for Remote Patient Monitoring in a Lab.</span> 
													</span>
												</a>
											</div>
											<div className="nav-next">
												<a href="#" rel="next">
													<span className="pbmit-post-nav-icon">
														<span className="pbmit-post-nav-head">Next Post</span>
														<i className="pbmit-base-icon-next"></i>
													</span>
													<span className="pbmit-post-nav-wrapper">
														<span className="pbmit-post-nav nav-title">Exploring Anatomy Methods  in the Lab</span> 
													</span>
												</a>
											</div>
										</div>
									</nav> */}
									{/* <div className="pbmit-author-box">
										<div className="pbmit-author-image">
										   <img alt="" src="images/author-img.png" className="img-fluid"/>			
										</div>
										<div className="pbmit-author-content">
										   <span className="pbmit-author-name">
										  	 <a href="#" title="Posted by admin" rel="author">xlebpbm</a>
										   </span>
										   <p className="pbmit-text pbmit-author-bio">Medical laboratory technicians use specialized medical instruments and technology to conduct a variety of testing and analysis on specimens taken from patients. The testing results provide information that physicians.</p>
										</div>
									</div> */}
								</article>
								
							</div> 
						</div>
					</div>
					<div className="col-md- col-xl-3 blog-right-col">
						<aside className="sidebar">
							
							<aside className="widget widget-categories">
								<h2 className="widget-title">Categories</h2>
								<ul>
									<li>
										<span className="pbmit-cat-li">
											<a href="#">Medical 3D Printing</a>
											<span className="pbmit-brackets">( 10 )</span>
										</span>
									</li>
									<li>
										<span className="pbmit-cat-li">
											<a href="#">Innovation</a>
											<span className="pbmit-brackets">( 02 )</span>
										</span>
									</li>
									<li>
										<span className="pbmit-cat-li">
											<a href="#">Case Study</a>
											<span className="pbmit-brackets">( 07 )</span>
										</span>
									</li>
									<li>
										<span className="pbmit-cat-li">
											<a href="#">3D Trends</a>
											<span className="pbmit-brackets">( 02 )</span>
										</span>
									</li>
                                    <li>
										<span className="pbmit-cat-li">
											<a href="#">3D Models</a>
											<span className="pbmit-brackets">( 004 )</span>
										</span>
									</li>
                                    <li>
										<span className="pbmit-cat-li">
											<a href="#">3D Design</a>
											<span className="pbmit-brackets">( 03 )</span>
										</span>
									</li>
								</ul>
							</aside>
							<aside className="widget widget-recent-post">
								<h2 className="widget-title">Recent Blogs</h2>
								<ul className="recent-post-list">
									<li className="recent-post-list-li"> 
										<a className="recent-post-thum" href="#">
											<img src="https://wordpress-1457894-6050110.cloudwaysapps.com/wp-content/uploads/2025/11/Everything-You-Didnt-Know-You-Needed-to-Know-About-3D-Printing.webp" className="img-fluid" alt=""/>
										</a>
										<div className="pbmit-rpw-content">
											<span className="pbmit-rpw-title">
												<a href="#">Patient-Specific, Printed and Precise: 3D Printing, a New Dawn in Medicine</a>
											</span>
											<span className="pbmit-rpw-date">
												<a href="#">04 Nov 2025</a>
											</span>
										</div> 
									</li>
                                    <li className="recent-post-list-li"> 
										<a className="recent-post-thum" href="#">
											<img src="https://wordpress-1457894-6050110.cloudwaysapps.com/wp-content/uploads/2025/11/How-3D-anatomical-models-have-changed-the-medical-field-1.webp" className="img-fluid" alt=""/>
										</a>
										<div className="pbmit-rpw-content">
											<span className="pbmit-rpw-title">
												<a href="#">How 3D anatomical models have changed the medical field?</a>
											</span>
											<span className="pbmit-rpw-date">
												<a href="#">04 Nov 2025</a>
											</span>
										</div> 
									</li>
                                    <li className="recent-post-list-li"> 
										<a className="recent-post-thum" href="#">
											<img src="https://wordpress-1457894-6050110.cloudwaysapps.com/wp-content/uploads/2025/11/5-Ways-3D-Printing-is-Quietly-Reshaping-Healthcare-1.webp" className="img-fluid" alt=""/>
										</a>
										<div className="pbmit-rpw-content">
											<span className="pbmit-rpw-title">
												<a href="#">5 Ways 3D Printing is Quietly Reshaping Healthcare</a>
											</span>
											<span className="pbmit-rpw-date">
												<a href="#">04 Nov 2025</a>
											</span>
										</div> 
									</li>
                                    <li className="recent-post-list-li"> 
										<a className="recent-post-thum" href="#">
											<img src="https://wordpress-1457894-6050110.cloudwaysapps.com/wp-content/uploads/2025/11/98566.webp" className="img-fluid" alt=""/>
										</a>
										<div className="pbmit-rpw-content">
											<span className="pbmit-rpw-title">
												<a href="#">Which One is the Best Technology for Orthopedic Surgical Guides – FDM, SLA, or SLS</a>
											</span>
											<span className="pbmit-rpw-date">
												<a href="#">04 Nov 2025</a>
											</span>
										</div> 
									</li>
								</ul>
							</aside> 
							<aside className="widget pbmit-service-ad">
								<div className="textwidget">
									<div className="pbmit-service-ads">
										<div className="pbmit-ads-call">Call +91-920-555-98-04</div>
										<h4 className="pbmit-ads-subtitle">How We Can</h4>
										<h3 className="pbmit-ads-title">Help You</h3>
										<div className="pbmit-ads-btn">
											<a href="tel:+91-920-555-98-04">
												<span className="pbmit-button-text">Contact us Now</span>
												<span className="pbmit-button-icon-wrapper">
													<span className="pbmit-button-icon">
														<i className="pbmit-base-icon-black-arrow-1"></i>
													</span>
												</span>
											</a>
										</div>
									</div>
								</div>
							</aside>
						
						</aside>
					</div>
				</div>
			</div>
		</section>
	
		
	</div>
    </>
  )
}

export default singleblog