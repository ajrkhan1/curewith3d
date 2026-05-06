import Head from "next/head"
import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"

/* =======================
   SERVER SIDE (FAST)
======================= */
export async function getServerSideProps() {
  const perPage = 6

  const res = await fetch(
    "https://wordpress-1457894-6050110.cloudwaysapps.com/wp-json/wp/v2/posts?_embed&categories_exclude=8&per_page=6&page=1",
    {
      headers: {
        Accept: "application/json",
        "User-Agent": "Next.js Server",
      },
    }
  )

  
  const posts = await res.json()
  const totalPages = Number(res.headers.get("X-WP-TotalPages"))

  return {
    props: {
      initialPosts: posts,
      totalPages,
    },
  }
}

/* =======================
   COMPONENT
======================= */
export default function Index({ initialPosts, totalPages }) {
  const [posts, setPosts] = useState(initialPosts)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const loadMoreRef = useRef(null)

  /* =======================
     LOAD MORE POSTS
  ======================= */
  const loadMorePosts = async () => {
    if (loading || page >= totalPages) return

    setLoading(true)
    const nextPage = page + 1

    const res = await fetch(
      `https://wordpress-1457894-6050110.cloudwaysapps.com/wp-json/wp/v2/posts?_embed&categories_exclude=8&per_page=6&page=${nextPage}`
    )

    const newPosts = await res.json()
    setPosts((prev) => [...prev, ...newPosts])
    setPage(nextPage)
    setLoading(false)
  }

  /* =======================
     INTERSECTION OBSERVER
  ======================= */
  useEffect(() => {
    if (!loadMoreRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMorePosts()
        }
      },
      { rootMargin: "300px" }
    )

    observer.observe(loadMoreRef.current)
    return () => observer.disconnect()
  }, [page, loading])

  return (
    <>
      <Head>
        <title>Blog - Curewith3D</title>
        <meta
          name="description"
          content="At Curewith3D, we're a team passionate about the transformative potential of 3D design and printing technology."
        />
      </Head>

      <div className="page-content">
   

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
															'Blogs',		
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
													<span><span class="post-root post post-post current-item">Blogs</span></span>
												</div>
											</div>
										</div>
									</div> 
								</div> 
							</div>

        {/* POSTS */}
        <section className="section-lgx pbmit-element-viewtype-masonry">
			<div class="container">
          <div className="row pbmit-element-posts-wrapper">
            {posts.map((post) => (
               

			  	  <article class="pbmit-blog-style-1 col-md-4">
									<div class="post-item">
										<div class="pbminfotech-box-content">
											<div class="pbmit-featured-container">
												<div class="pbmit-featured-img-wrapper">
													<div class="pbmit-featured-wrapper">
														<a href={`/resources/blog/${post.slug}`}><img src={post.yoast_head_json.og_image[0].url} class="img-fluid" alt=""/></a>
													</div>
												</div>
											</div>
											<div class="pbmit-content-wrapper">
												<div class="pbmit-date-wraper d-flex align-items-center">
													<div class="pbmit-meta-date-wrapper pbmit-meta-line">
														<div class="pbmit-meta-date">
															<span class="pbmit-post-date">{new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "2-digit",
                    year: "numeric",
                  })}</span>
														</div>
													</div>
													<div class="pbmit-meta-category-wrapper pbmit-meta-line">
														<div class="pbmit-meta-category">
															<a href="/" rel="category tag"> Curewith3D</a>
														</div>
													</div>
												</div>
												<h3 class="pbmit-post-title">
													<a href={`/resources/blog/${post.slug}`}>{post.title.rendered}</a>
												</h3>
												<div class="pbminfotech-box-desc">
													Most laboratory is a facility that provides controlled conditions in which… 
												</div>
											</div>
											<div class="pbmit-shape-wraper">
												<div class="pbmit-shape-wraper-inner">
													<a class="pbmit-blog-btn" href={`/resources/blog/${post.slug}`} title="Hospital Labs Focused on Patients Begin Here.">
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

		
            ))}
          </div>
</div>
          {/* OBSERVER TARGET */}
          <div ref={loadMoreRef} />

          {loading && <p className="text-center"><img src="https://icons8.com/preloaders/preloaders/1494/Spinner-2.gif" class="img-fluid" alt=""/></p>}
          {page >= totalPages && (
            <p className="text-center">No more posts</p>
          )}
        </section>
      </div>
    </>
  )
}
