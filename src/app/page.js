import Script from "next/script";
//= Scripts
import generateStylesheetObject from '@/common/generateStylesheetsObject';
import ProgressScroll from "@/components/Common/ProgressScroll";
import Home2 from "./(dark)/homepage/page";

export const metadata = {
  title: 'QuantaLeaps-Landing page. IT Consulting and Services',
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    other: generateStylesheetObject([
      'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap',
      'https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&display=swap',
      'https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap',
      '/css/dark.css',
    ])
  }
}

export default function LandingPreview() {
  return (
    <>
      <ProgressScroll /> 
      <Home2/>
      <Script strategy="beforeInteractive" src="/js/wow.min.js"></Script>
      <Script strategy="beforeInteractive" src="/js/splitting.min.js"></Script>
      <Script strategy="beforeInteractive" src="/js/simpleParallax.min.js"></Script>
      <Script strategy="beforeInteractive" src="/js/isotope.pkgd.min.js"></Script>
      <Script strategy="lazyOnload" src="/js/pace.min.js"></Script>
      <Script strategy="lazyOnload" src="/js/wowInit.js"></Script>
    </>
  )
}
