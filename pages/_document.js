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
    </Head>
      <body>
        <Main />
        <NextScript /> 
      </body>
    </Html>
  );
}
