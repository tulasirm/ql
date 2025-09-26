import React from 'react';
//= Page components
import Loading from '@/components/Common/Loader';
import Navbar from '@/components/Common/Navbar';
import PageHeader from '@/components/Headers/PageHeader';
import JobList from '@/components/Blogs/JobList';
import Footer from '@/components/Common/Footer';

export const metadata = {
  title: 'QuantaLeaps - Current job openings',
  description: 'QuantaLeaps-IT Consulting and IT Services company with 20+ years of industry experince in identifying high quality resources for enterprise needs.'

}

export default function JobListPage() {
  return (
    <>
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <Navbar />
      <div style={{ height: '150px' }}></div>
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <div className="sec-head  text-center">
            <h6 className="wow fadeIn" data-wow-delay=".5s">
              Build Your Career With Us
            </h6>
            <h3 className="wow color-font">
              Our Job Openings
            </h3>
          </div>
        </div>
      </div>
      {/* <PageHeader classText="sub-bg" title="We are Hiring"
        paragraph="QuantaLeaps facilitates opportunities for growth where you can excel in your career. If you're looking for a trusted partner in your professional journey, we're here for you." /> */}
      <JobList />
      <Footer />
    </>
  )
}
