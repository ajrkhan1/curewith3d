import Head from "next/head"
import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"

/* =========================
   SERVER SIDE PROPS
========================= */
export async function getServerSideProps() {
  try {
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

    return {
      props: {
        initialPosts: posts || [],
        totalPages:
          Number(res.headers.get("X-WP-TotalPages")) || 1,
      },
    }
  } catch (error) {
    return {
      props: {
        initialPosts: [],
        totalPages: 1,
      },
    }
  }
}

/* =========================
   COMPONENT
========================= */
export default function Index({
  initialPosts,
  totalPages,
}) {
  const [posts, setPosts] = useState(initialPosts)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const loadMoreRef = useRef(null)

  /* =========================
     LOAD MORE POSTS
  ========================= */
  const loadMorePosts = async () => {
    if (loading || page >= totalPages) return

    try {
      setLoading(true)

      const nextPage = page + 1

      const res = await fetch(
        `https://wordpress-1457894-6050110.cloudwaysapps.com/wp-json/wp/v2/posts?_embed&categories_exclude=8&per_page=6&page=${nextPage}`
      )

      const newPosts = await res.json()

      setPosts((prev) => [...prev, ...newPosts])

      setPage(nextPage)
    } catch (error) {
      console.log("Load More Error:", error)
    } finally {
      setLoading(false)
    }
  }

  /* =========================
     INTERSECTION OBSERVER
  ========================= */
  useEffect(() => {
    if (!loadMoreRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMorePosts()
        }
      },
      {
        rootMargin: "300px",
      }
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
        {/* HERO SECTION */}
        <div className="aboutusbgbredcum">
          <div className="container">
            <div className="pbmit-title-bar-content">
              <div className="pbmit-title-bar-content-inner">
                <div className="pbmit-tbar">
                  <div className="pbmit-tbar-inner container">
                    <h1 className="pbmit-tbar-title">
                      <TypeAnimation
                        sequence={[100, "Blogs", 800]}
                        speed={10}
                        deletionSpeed={5}
                        repeat={Infinity}
                      />
                    </h1>
                  </div>
                </div>

                {/* BREADCRUMB */}
                <div className="pbmit-breadcrumb">
                  <div className="pbmit-breadcrumb-inner">
                    <span>
                      <Link title="Home" href="/" className="home">
                        <span>Curewith3D</span>
                      </Link>
                    </span>

                    <span className="sep">
                      <i className="pbmit-base-icon-angle-right"></i>
                    </span>

                    <span>
                      <span className="post-root post post-post current-item">
                        Blogs
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* POSTS */}
        <section className="section-lgx pbmit-element-viewtype-masonry">
          <div className="container">
            <div className="row pbmit-element-posts-wrapper">
              {posts?.map((post) => (
                <article
                  key={post.id}
                  className="pbmit-blog-style-1 col-md-4"
                >
                  <div className="post-item">
                    <div className="pbminfotech-box-content">
                      {/* IMAGE */}
                      <div className="pbmit-featured-container">
                        <div className="pbmit-featured-img-wrapper">
                          <div className="pbmit-featured-wrapper">
                            <Link
                              href={`/blog/${post.slug}`}
                            >
                              <Image
                                src={
                                  post?.yoast_head_json?.og_image?.[0]
                                    ?.url || "/placeholder.jpg"
                                }
                                width={500}
                                height={350}
                                className="img-fluid"
                                alt={
                                  post?.title?.rendered ||
                                  "Blog Image"
                                }
                              />
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* CONTENT */}
                      <div className="pbmit-content-wrapper">
                        {/* DATE */}
                        <div className="pbmit-date-wraper d-flex align-items-center">
                          <div className="pbmit-meta-date-wrapper pbmit-meta-line">
                            <div className="pbmit-meta-date">
                              <span className="pbmit-post-date">
                                {new Date(
                                  post.date
                                ).toLocaleDateString("en-US", {
                                  month: "long",
                                  day: "2-digit",
                                  year: "numeric",
                                })}
                              </span>
                            </div>
                          </div>

                          {/* CATEGORY */}
                          <div className="pbmit-meta-category-wrapper pbmit-meta-line">
                            <div className="pbmit-meta-category">
                              <Link
                                href="/"
                                rel="category tag"
                              >
                                Curewith3D
                              </Link>
                            </div>
                          </div>
                        </div>

                        {/* TITLE */}
                        <h3 className="pbmit-post-title">
                          <Link
                            href={`/blog/${post.slug}`}
                          >
                            {post.title.rendered}
                          </Link>
                        </h3>

                        {/* DESC */}
                        <div className="pbminfotech-box-desc">
                          Most laboratory is a facility that
                          provides controlled conditions in
                          which…
                        </div>
                      </div>

                      {/* BUTTON */}
                      <div className="pbmit-shape-wraper">
                        <div className="pbmit-shape-wraper-inner">
                          <Link
                            className="pbmit-blog-btn"
                            href={`/blog/${post.slug}`}
                            title={post.title.rendered}
                          >
                            <span className="pbmit-button-icon-wrapper">
                              <span className="pbmit-button-icon">
                                <i className="pbmit-base-icon-black-arrow-1"></i>
                              </span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* OBSERVER */}
          <div ref={loadMoreRef}></div>

          {/* LOADING */}
          {loading && (
            <p className="text-center">
              Loading...
            </p>
          )}

          {/* END */}
          {page >= totalPages && (
            <p className="text-center">
              No more posts
            </p>
          )}
        </section>
      </div>
    </>
  )
}

