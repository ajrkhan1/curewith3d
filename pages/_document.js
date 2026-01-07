'use client';
import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script'

export default function Document() {


  return (
    <Html lang="en">
      <Head>
 
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="description" content=""/>
    <meta name="google-site-verification" content="Kpw1hVWizbKSNomY9ho3JeQRfLOM8OHq9Cb189nmtVg" />
    <link href="https://db.onlinewebfonts.com/c/53a3cef0c0ed585b6cad9aa75447cb2f?family=Kommon+Grotesk" rel="stylesheet"/>
    <link rel="stylesheet" href="/css/bootstrap.min.css"/>

		<link rel="stylesheet" href="/css/fontawesome.css"/>

		<link rel="stylesheet" href="/css/flaticon.css"/>

		<link rel="stylesheet" href="/css/pbminfotech-base-icons.css"/>
	
		<link rel="stylesheet" href="/css/themify-icons.css"/>
		
		<link rel="stylesheet" href="/css/swiper.min.css"/>
		
		<link rel="stylesheet" href="/css/magnific-popup.css"/>
	
		<link rel="stylesheet" href="/css/aos.css"/>

		<link rel="stylesheet" href="/css/shortcode.css"/>

		<link rel="stylesheet" href="/css/base.css"/>

		<link rel="stylesheet" href="/css/style.css"/>

		<link rel="stylesheet" href="/css/responsive.css"></link>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-ZJM43TJ6XX"></script>

<script
            dangerouslySetInnerHTML={{
              __html: `
               window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-ZJM43TJ6XX');
          `,
            }}
          />
    </Head>
      <body>
        <Main />
        <NextScript /> 
      </body>
    </Html>
  );
}
