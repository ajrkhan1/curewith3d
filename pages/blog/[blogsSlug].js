import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import moment from "moment"

/* =========================
   SERVER SIDE PROPS
========================= */
export async function getServerSideProps(context) {
  try {
    const posturl = context.params.blogsSlug

    const [postRes, recentRes] = await Promise.all([
      fetch(
        `https://wordpress-1457894-6050110.cloudwaysapps.com/wp-json/wp/v2/posts?slug=${posturl}&_embed`
      ),
      fetch(
        "https://wordpress-1457894-6050110.cloudwaysapps.com/wp-json/wp/v2/posts?_embed&categories_exclude=8&per_page=10"
      ),
    ])

    const postData = await postRes.json()
    const recentData = await recentRes.json()

    if (!postData || postData.length === 0) {
      return {
        notFound: true,
      }
    }

    return {
      props: {
        posts: postData[0],
        posts5: recentData || [],
      },
    }
  } catch (error) {
    console.log("SERVER ERROR:", error)

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
        <title>
          {posts?.title?.rendered || "Blog"} - Curewith3D
        </title>

        <meta
          name="description"
          content={
            posts?.yoast_head_json?.og_description ||
            "Curewith3D Blog"
          }
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="page-content">
        <section className="site-content blog-details">
          <div className="container">
            <div className="row">
              {/* LEFT CONTENT */}
              <div className="col-md-12 col-xl-9 blog-left-col">
                <article>
                  <div className="post blog-classic">
                    {/* FEATURE IMAGE */}
                    <div className="pbmit-img-wrapper">
                      <div className="pbmit-featured-img-wrapper">
                        <div className="pbmit-featured-wrapper">
                          <Image
                            src={
                              posts?.yoast_head_json?.og_image?.[0]
                                ?.url || "/placeholder.jpg"
                            }
                            alt={
                              posts?.title?.rendered ||
                              "Blog Image"
                            }
                            width={1200}
                            height={630}
                            className="ajimgfull"
                            priority
                          />
                        </div>
                      </div>
                    </div>

                    {/* BLOG CONTENT */}
                    <div className="pbmit-blog-classic-inner">
                      {/* META */}
                      <div className="pbmit-blog-meta pbmit-blog-meta-top">
                        {/* AUTHOR */}
                        <span className="pbmit-meta pbmit-meta-author">
                          <i className="pbmit-base-icon-user-3"></i>

                          by{" "}
                          <Link
                            href="/"
                            className="pbmit-author-link"
                          >
                            {posts?.yoast_head_json?.author ||
                              "Admin"}
                          </Link>
                        </span>

                        {/* DATE */}
                        <span className="pbmit-meta pbmit-meta-date">
                          <i className="pbmit-base-icon-calendar-3"></i>

                          <time
                            className="entry-date published"
                            dateTime={posts?.date}
                          >
                            {moment(posts?.date).format(
                              "MMMM DD YYYY"
                            )}
                          </time>
                        </span>
                      </div>

                      {/* TITLE + CONTENT */}
                      <div className="pbmit-entry-content">
                        <h1 className="bloghhh">
                          {posts?.title?.rendered}
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

              {/* RIGHT SIDEBAR */}
              <div className="col-md-12 col-xl-3 blog-right-col">
                <aside className="sidebar">
                  {/* RECENT POSTS */}
                  <aside className="widget widget-recent-post">
                    <h2 className="widget-title">
                      Recent Blogs
                    </h2>

                    <ul className="recent-post-list">
                      {posts5?.map((post) => (
                        <li
                          key={post.id}
                          className="recent-post-list-li"
                        >
                          {/* IMAGE */}
                          <Link
                            href={`/blog/${post.slug}`}
                            className="recent-post-thum"
                          >
                            <Image
                              src={
                                post?.yoast_head_json?.og_image?.[0]
                                  ?.url || "/placeholder.jpg"
                              }
                              alt={
                                post?.title?.rendered ||
                                "Recent Blog"
                              }
                              width={150}
                              height={100}
                              className="img-fluid"
                              loading="lazy"
                            />
                          </Link>

                          {/* CONTENT */}
                          <div className="pbmit-rpw-content">
                            <span className="pbmit-rpw-title">
                              <Link
                                href={`/blog/${post.slug}`}
                              >
                                {post?.title?.rendered}
                              </Link>
                            </span>

                            <span className="pbmit-rpw-date">
                              {moment(post?.date).format(
                                "MMMM DD YYYY"
                              )}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </aside>

                  {/* CONTACT BOX */}
                  <aside className="widget pbmit-service-ad">
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
                        </a>
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