import React from 'react';
//= Page components
import Loading from '@/components/Common/Loader';
import Navbar from '@/components/Common/Navbar';
import PageHeader from '@/components/Headers/PageHeader';
import Footer from '@/components/Common/Footer';

export const metadata = {
  title: 'QuantaLeaps - Our Technologies',
  description: 'Explore the cutting-edge technologies and frameworks we use to deliver exceptional software consulting services. From cloud platforms to AI/ML frameworks.'
}

function TechnologiesShowcase() {
  return (
    <>
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <Navbar />
      <PageHeader 
        title="Our Technology Stack" 
        paragraph="Cutting-edge technologies powering next-generation solutions." 
      />
      
      <section className="portfolio section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10">
              <div className="sec-head">
                <h6 className="wow fadeIn" data-wow-delay=".5s">
                  Technology Excellence
                </h6>
                <h3 className="wow color-font">
                  Modern Tech Stack for Enterprise Solutions
                </h3>
                <p>
                  We leverage the latest technologies and best practices to deliver scalable, 
                  secure, and high-performance solutions that drive business success.
                </p>
              </div>
            </div>
          </div>
          
          {/* Cloud Platforms */}
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <h4 className="mb-30">Cloud Platforms</h4>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="item-box">
                <div className="icon">
                  <i className="fab fa-aws"></i>
                </div>
                <div className="cont">
                  <h6>Amazon Web Services</h6>
                  <p>EC2, EKS, Lambda, RDS, S3, CloudFormation</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="item-box">
                <div className="icon">
                  <i className="fab fa-microsoft"></i>
                </div>
                <div className="cont">
                  <h6>Microsoft Azure</h6>
                  <p>AKS, App Service, Functions, Cosmos DB</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="item-box">
                <div className="icon">
                  <i className="fab fa-google"></i>
                </div>
                <div className="cont">
                  <h6>Google Cloud Platform</h6>
                  <p>GKE, Cloud Run, BigQuery, Pub/Sub</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Development Technologies */}
          <div className="row justify-content-center mt-80">
            <div className="col-lg-12">
              <h4 className="mb-30">Development Technologies</h4>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="item-box">
                <div className="icon">
                  <i className="fab fa-react"></i>
                </div>
                <div className="cont">
                  <h6>React & Next.js</h6>
                  <p>Modern web applications</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="item-box">
                <div className="icon">
                  <i className="fab fa-node-js"></i>
                </div>
                <div className="cont">
                  <h6>Node.js</h6>
                  <p>Scalable backend services</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="item-box">
                <div className="icon">
                  <i className="fab fa-python"></i>
                </div>
                <div className="cont">
                  <h6>Python</h6>
                  <p>AI/ML & data processing</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="item-box">
                <div className="icon">
                  <i className="fab fa-docker"></i>
                </div>
                <div className="cont">
                  <h6>Docker & Kubernetes</h6>
                  <p>Container orchestration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  )
}

export default TechnologiesShowcase