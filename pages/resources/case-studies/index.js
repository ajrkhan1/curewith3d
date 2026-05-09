import Head from "next/head"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"
import moment from "moment"

/* =========================
   SERVER SIDE PROPS
========================= */
export async function getServerSideProps() {
  try {
    const res = await fetch(
      "https://wordpress-1457894-6050110.cloudwaysapps.com/wp-json/wp/v2/posts?_embed&categories=8",
      {
        headers: {
          Accept: "application/json",
          "User-Agent": "Mozilla/5.0 (Next.js Server)",
        },
      }
    )

    if (!res.ok) {
      console.error("API Error:", res.status)

      return {
        props: {
          posts: [],
        },
      }
    }

    const posts = await res.json()

    return {
      props: {
        posts: posts || [],
      },
    }
  } catch (error) {
    console.error("Fetch failed:", error)

    return {
      props: {
        posts: [],
      },
    }
  }
}

/* =========================
   COMPONENT
========================= */
export default function Index({ posts }) {
  return (
    <>
      <Head>
        <title>
          Our Favorite Clinical 3D Cases - Curewith3D
        </title>

        <meta
          name="description"
          content="Explore Curewith3D’s clinical 3D cases showcasing patient-specific implants, surgical guides, and advanced medical 3D solutions across orthopaedic and maxillofacial surgeries."
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="page-content">
        {/* HERO */}
        <div className="aboutusbgbredcum">
          <div className="container">
            <div className="pbmit-title-bar-content">
              <div className="pbmit-title-bar-content-inner">
                <div className="pbmit-tbar">
                  <div className="pbmit-tbar-inner container">
                    <h1 className="pbmit-tbar-title">
                      <TypeAnimation
                        sequence={[
                          100,
                          "Clinical 3D Cases",
                          800,
                        ]}
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
                      <Link
                        title="Home"
                        href="/"
                        className="home"
                      >
                        <span>Curewith3D</span>
                      </Link>
                    </span>

                    <span className="sep">
                      <i className="pbmit-base-icon-angle-right"></i>
                    </span>

                    <span>
                      <span className="post-root post post-post current-item">
                        Clinical 3D Cases
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
              {posts?.map((getpost) => (
                <article
                  key={getpost.id}
                  className="pbmit-blog-style-1 col-md-4"
                >
                  <div className="post-item">
                    <div className="pbminfotech-box-content">
                      {/* IMAGE */}
                      <div className="pbmit-featured-container">
                        <div className="pbmit-featured-img-wrapper">
                          <div className="pbmit-featured-wrapper">
                            <Link
                              href={`/resources/case-studies/${getpost.slug}`}
                            >
                              <Image
                                src={
                                  getpost?.yoast_head_json
                                    ?.og_image?.[0]?.url ||
                                  "/placeholder.jpg"
                                }
                                width={500}
                                height={350}
                                className="img-fluid"
                                alt={
                                  getpost?.title?.rendered ||
                                  "Case Study"
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
                                {moment(
                                  getpost.date
                                ).format("MMMM DD YYYY")}
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
                            href={`/resources/case-studies/${getpost.slug}`}
                          >
                            {getpost?.title?.rendered}
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
                            href={`/resources/case-studies/${getpost.slug}`}
                            title={
                              getpost?.title?.rendered ||
                              "Read More"
                            }
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
        </section>
      </div>
    </>
  )
}