import React from 'react';
import Loading from '@/components/Common/Loader';
import Navbar from '@/components/Common/Navbar';
import Footer from '@/components/Common/Footer';
import BlogGrid from '@/components/Blogs/BlogGrid';

export const metadata = {
  title: 'Quantaleaps-Insights',
  description: 'QuantaLeaps-IT Consulting and IT Services company with 20+ years of industry experince in identifying high quality resources for enterprise needs.'
};

export default function InsightsPage({ params }) {
  const page = params.page || '1';
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
              Our Insights
            </h6>
            <h3 className="wow color-font">
              Blogs & Insights
            </h3>
          </div>
        </div>
      </div>
      <BlogGrid page={page} />
      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  return [{ page: '1' }, { page: '2' }]; // Adjust based on total pages
}
