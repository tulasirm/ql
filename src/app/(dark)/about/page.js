import React from 'react';
//= Page components
import Loading from '@/components/Common/Loader';
import Navbar from '@/components/Common/Navbar';
import TestimonialsWithVideo from '@/components/Testimonials/TestimonialsWithVideo';
import SkillsCircle from '@/components/Skills/SkillsCircle';
import MinimalArea from '@/components/Others/MinimalArea1';
import CallToAction from '@/components/Others/CallToAction';
import Footer from '@/components/Common/Footer';
import Header4 from '@/components/Headers/Header4';
import { bannerImages } from '@/config/bannerImages';

export const metadata = {
  title: 'Quantaleaps - About',
  description: 'QuantaLeaps-IT Consulting and IT Services company with 20+ years of industry experince in identifying high quality resources for enterprise needs.'
}

function AboutDark() {
  return (
    <>
      <Navbar />
      {/* <PagesHeader imageLink="/img/slid/about.webp">About Us</PagesHeader> */}
      <Header4 bannerImage={bannerImages.aboutUs} overlayOpacity={0.5}/>
  {/* AboutIntro (Who We Are) section removed as per request */}
      {/* <Services style="4item" /> */}
      <TestimonialsWithVideo />
      <SkillsCircle from="aboutPage" />
      <MinimalArea />
      <CallToAction />
      <Footer />
    </>
  )
}

export default AboutDark