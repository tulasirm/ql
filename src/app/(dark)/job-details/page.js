import React from 'react';
//= Page components
import Loading from '@/components/Common/Loader';
import Navbar from '@/components/Common/Navbar';
import ApplyForJob from '@/components/Blogs/JobDetails';
import Footer from '@/components/Common/Footer';
//= Static Data
//import ProjectDate from "@/data/project-details2.json";

export const metadata = {
  title: 'Quantaleaps - Job details',
  description: 'QuantaLeaps-IT Consulting and IT Services company with 20+ years of industry experince in identifying high quality resources for enterprise needs.'
}

export default function ProjectDetailsPage() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <ApplyForJob/>
        <Footer />
      </div>
    </>
  )
}