import React from 'react';
//= Page components
import Loading from '@/components/Common/Loader';
import Navbar from '@/components/Common/Navbar';
import WorksHeader from '@/components/Headers/WorksHeader';
import Works from '@/components/Works/WorksStyle1';
import Footer from '@/components/Common/Footer';

export const metadata = {
  title: 'QuantaLeaps - Our Work & Case Studies',
  description: 'Explore our portfolio of successful software consulting projects including cloud migrations, AI/ML implementations, cybersecurity solutions, and enterprise application development.'
}

export default function WorksPage() {
  return (
    <>
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <Navbar />
      <WorksHeader />
      <div className="main-content">
        <Works />
        <Footer />
      </div>
    </>
  )
}
