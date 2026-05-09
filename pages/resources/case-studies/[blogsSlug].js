import Head from "next/head"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import moment from "moment"

/* =========================
   SERVER SIDE PROPS
========================= */
export async function getServerSideProps(context) {
  try {
    const posturl = context.params.blogsSlug

    const [post5, res] = await Promise.all([
      fetch(
        "https://wordpress-1457894-6050110.cloudwaysapps.com/wp-json/wp/v2/posts?_embed&categories=8"
      ),
      fetch(
        `https://wordpress-1457894-6050110.cloudwaysapps.com/wp-json/wp/v2/posts?slug=${posturl}&_embed`
      ),
    ])

    const posts5 = await post5.json()
    const postsData = await res.json()

    if (!postsData || postsData.length === 0) {
      return {
        notFound: true,
      }
    }

    return {
      props: {
        posts: postsData[0],
        posts5,
      },
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}

/* =========================
   COMPONENT
========================= */
const SingleBlog = ({ posts, posts5 }) => {
  return (
    <>
      <Head>
        <title>{posts.title.rendered}</title>

        <meta
          name="description"
          content={posts?.yoast_head_json?.og_description || ""}
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="page-content">
        <section className="site-content blog-details">
          <div className="container">
            <div className="row">
              {/* LEFT CONTENT */}
              <div className="col-md-12 col-xl-9 blog-left-col">
                <div className="row">
                  <div className="col-md-12">
                    <article>
                      <div className="post blog-classic">
                        {/* FEATURE IMAGE */}
                        <div className="pbmit-img-wrapper">
                          <div className="pbmit-featured-img-wrapper">
                            <div className="pbmit-featured-wrapper">
                              <Image
                                className="ajimgfull"
                                src={
                                  posts?.yoast_head_json?.og_image?.[0]
                                    ?.url || "/placeholder.jpg"
                                }
                                alt={
                                  posts?.title?.rendered || "Blog Image"
                                }
                                width={1200}
                                height={700}
                                priority
                              />
                            </div>
                          </div>
                        </div>

                        {/* CONTENT */}
                        <div className="pbmit-blog-classic-inner">
                          {/* META */}
                          <div className="pbmit-blog-meta pbmit-blog-meta-top">
                            {/* AUTHOR */}
                            <span className="pbmit-meta pbmit-meta-author">
                              <i className="pbmit-base-icon-user-3"></i>

                              by{" "}
                              <Link
                                className="pbmit-author-link"
                                href="/"
                              >
                                CureWith3D
                              </Link>
                            </span>

                            {/* DATE */}
                            <span className="pbmit-meta pbmit-meta-date">
                              <i className="pbmit-base-icon-calendar-3"></i>

                              <time
                                className="entry-date published"
                                dateTime={posts.date}
                              >
                                {moment(posts.date).format(
                                  "MMMM DD YYYY"
                                )}
                              </time>
                            </span>
                          </div>

                          {/* BLOG CONTENT */}
                          <div className="pbmit-entry-content">
                            <h1 className="bloghhh">
                              {posts.title.rendered}
                            </h1>

                            <div
                              dangerouslySetInnerHTML={{
                                __html:
                                  posts?.content?.rendered || "",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDEBAR */}
              <div className="col-md-12 col-xl-3 blog-right-col">
                <aside className="sidebar">
                  {/* RECENT POSTS */}
                  <aside className="widget widget-recent-post">
                    <h2 className="widget-title">
                      Recent Case Studies
                    </h2>

                    <ul className="recent-post-list">
                      {posts5?.slice(0, 10).map((getpost) => (
                        <li
                          key={getpost.id}
                          className="recent-post-list-li"
                        >
                          {/* IMAGE */}
                          <Link
                            className="recent-post-thum"
                            href={`/resources/case-studies/${getpost.slug}`}
                          >
                            <Image
                              src={
                                getpost?.yoast_head_json?.og_image?.[0]
                                  ?.url || "/placeholder.jpg"
                              }
                              width={150}
                              height={100}
                              className="img-fluid"
                              alt={
                                getpost?.title?.rendered ||
                                "Recent Post"
                              }
                              loading="lazy"
                            />
                          </Link>

                          {/* CONTENT */}
                          <div className="pbmit-rpw-content">
                            <span className="pbmit-rpw-title">
                              <Link
                                href={`/resources/case-studies/${getpost.slug}`}
                              >
                                {getpost.title.rendered}
                              </Link>
                            </span>

                            <span className="pbmit-rpw-date">
                              <Link
                                href={`/resources/case-studies/${getpost.slug}`}
                              >
                                {moment(getpost.date).format(
                                  "MMMM DD YYYY"
                                )}
                              </Link>
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </aside>

                  {/* CONTACT BOX */}
                  <aside className="widget pbmit-service-ad">
                    <div className="textwidget">
                      <div className="pbmit-service-ads">
                        <div className="pbmit-ads-call">
                          Call +91-920-555-98-04
                        </div>

                        <h4 className="pbmit-ads-subtitle">
                          How We Can
                        </h4>

                        <h3 className="pbmit-ads-title">
                          Help You
                        </h3>

                        <div className="pbmit-ads-btn">
                          <a href="tel:+919205559804">
                            <span className="pbmit-button-text">
                              Contact us Now
                            </span>

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

export default SingleBlog