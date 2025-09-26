import React from 'react';
//= Page components
import Loading from '@/components/Common/Loader';
import Navbar from '@/components/Common/Navbar';
import PageHeader from '@/components/Headers/PageHeader';
import BlogDetails from '@/components/Blogs/JobDetails';
import Footer from '@/components/Common/Footer';

export const metadata = {
  title: 'QuantaLeaps - Service details',
  description: 'QuantaLeaps-IT Consulting and IT Services company with 20+ years of industry experince in identifying high quality resources for enterprise needs.'
}

export default function BlogDetailsPage() {
  return (
    <>
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <Navbar />
      <PageHeader title="Service Details." paragraph="All the most current news and events of our creative team." />
      <BlogDetails />
      <Footer />
    </>
  )
}