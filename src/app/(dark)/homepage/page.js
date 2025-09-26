import React from 'react';
//= Page components
import Loading from '@/components/Common/Loader';
import Navbar from '@/components/Common/Navbar';
import Header from '@/components/Headers/Header2';
import Services from '@/components/Services/Services1';
import Video from '@/components/Others/Video';
import Portfolio from '@/components/Portfolio';
import FullTestimonials from '@/components/Testimonials/FullTestimonials';
import Team from '@/components/Team/Team2';
import Blogs from '@/components/Blogs/Blogs2';
import CallToAction from '@/components/Others/CallToAction';
import Footer from '@/components/Common/Footer';


export const metadata = {
  title: 'QuantaLeaps-Basepage, IT Consulting and IT Services',
  description: 'QuantaLeaps-IT Consulting and IT Services company with 20+ years of industry experince in identifying high quality resources for enterprise needs.',
  
}

export default function Home2() {
  return (
    <>
      <Navbar />
      <Header />
      <Services style="4item" />
      
      {/* <Video /> */}
      <Portfolio grid={3} filterPosition="center" />
      {/* <FullTestimonials /> */}
      <Team />
      <Blogs />
      <CallToAction />
      <Footer />
    </>
  )
}