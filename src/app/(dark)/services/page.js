import React from 'react';
//= Page components
import Loading from '@/components/Common/Loader';
import Navbar from '@/components/Common/Navbar';
import PageHeader from '@/components/Headers/PageHeader';
import Services from '@/components/Services/Services1';
import ServicesDetails from '@/components/Services/Services3';
import CallToAction from '@/components/Others/CallToAction';
import Footer from '@/components/Common/Footer';
import { bannerImages } from '@/config/bannerImages';

export const metadata = {
  title: 'QuantaLeaps - Our Services',
  description: 'Comprehensive software consulting services including cloud architecture, DevOps automation, AI/ML solutions, cybersecurity, and enterprise application development.'
}

export default function ServicesPage() {
  return (
    <>
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <Navbar />
      {/* PageHeader removed as per request to remove banner */}
      <div className="main-content">
        <Services style="4item" />
        <ServicesDetails />
        <CallToAction />
        <Footer />
      </div>
    </>
  )
}
