import Head from "next/head";
import React from "react";


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




const singleblog = ({ posts, posts5, cats, postfeedback }) => {
console.log(posts)
  return (
    <>
      <Head>
      <title>cccccc</title>
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
        fgdfg
        
    </div>
    </>
  )
}

export default singleblog