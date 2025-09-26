"use client";
import { Fragment, useEffect } from "react";
import Navbar from "../../../../components/Common/Navbar";
import Loader from "../../../../components/Common/Loader";

const CloudMigrationPage = () => {
  useEffect(() => {
    document.title = "Cloud Migration Services - QuantaLeaps";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Comprehensive cloud transformation services including AWS, Azure, and multi-cloud architectures with zero-downtime migration strategies.');
    }
  }, []);

  return (
    <Fragment>
      <Loader />
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>

      <Navbar />

      <section className="page-header section-padding sub-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="cont text-center">
                <div className="service-icon mb-30">
                  <div className="icon-container" style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}>
                    <i className="ion-ios-cloud" style={{ fontSize: '32px', color: 'white' }}></i>
                  </div>
                </div>
                <h1 className="mb-20 color-font">Cloud Migration Services</h1>
                <p className="fw-300">
                  Transform your infrastructure with our comprehensive cloud migration and modernization services. 
                  We help enterprises migrate to AWS, Azure, and multi-cloud environments with zero downtime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-details section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="content">
                <div className="section-head mb-50">
                  <h3>Cloud Migration Excellence</h3>
                  <p className="fw-300">
                    Our cloud migration services are designed to minimize risk, reduce downtime, and maximize 
                    the benefits of cloud adoption. We follow industry best practices and proven methodologies 
                    to ensure successful cloud transformations.
                  </p>
                </div>

                <div className="service-features mb-50">
                  <h4 className="mb-30">Key Features</h4>
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="list-style-none">
                        <li className="mb-15">
                          <i className="fas fa-check-circle color-font mr-10"></i>
                          Zero-downtime migration strategies
                        </li>
                        <li className="mb-15">
                          <i className="fas fa-check-circle color-font mr-10"></i>
                          Multi-cloud architecture design
                        </li>
                        <li className="mb-15">
                          <i className="fas fa-check-circle color-font mr-10"></i>
                          Infrastructure as Code (IaC)
                        </li>
                        <li className="mb-15">
                          <i className="fas fa-check-circle color-font mr-10"></i>
                          Automated CI/CD pipelines
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="list-style-none">
                        <li className="mb-15">
                          <i className="fas fa-check-circle color-font mr-10"></i>
                          Cost optimization strategies
                        </li>
                        <li className="mb-15">
                          <i className="fas fa-check-circle color-font mr-10"></i>
                          Security and compliance
                        </li>
                        <li className="mb-15">
                          <i className="fas fa-check-circle color-font mr-10"></i>
                          Performance monitoring
                        </li>
                        <li className="mb-15">
                          <i className="fas fa-check-circle color-font mr-10"></i>
                          24/7 support and maintenance
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="process-steps mb-50">
                  <h4 className="mb-30">Our Migration Process</h4>
                  <div className="steps">
                    <div className="step-item mb-30">
                      <div className="step-number">01</div>
                      <div className="step-content">
                        <h5>Assessment & Planning</h5>
                        <p>Comprehensive analysis of your current infrastructure, applications, and requirements.</p>
                      </div>
                    </div>
                    <div className="step-item mb-30">
                      <div className="step-number">02</div>
                      <div className="step-content">
                        <h5>Architecture Design</h5>
                        <p>Design cloud-native architecture optimized for performance, security, and cost.</p>
                      </div>
                    </div>
                    <div className="step-item mb-30">
                      <div className="step-number">03</div>
                      <div className="step-content">
                        <h5>Migration Execution</h5>
                        <p>Phased migration approach with continuous testing and validation.</p>
                      </div>
                    </div>
                    <div className="step-item mb-30">
                      <div className="step-number">04</div>
                      <div className="step-content">
                        <h5>Optimization & Support</h5>
                        <p>Post-migration optimization, monitoring, and ongoing support.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="technologies">
                  <h4 className="mb-30">Technologies We Use</h4>
                  <div className="tech-grid">
                    <div className="tech-item">
                      <i className="fab fa-aws"></i>
                      <span>AWS</span>
                    </div>
                    <div className="tech-item">
                      <i className="fab fa-microsoft"></i>
                      <span>Azure</span>
                    </div>
                    <div className="tech-item">
                      <i className="fab fa-google"></i>
                      <span>Google Cloud</span>
                    </div>
                    <div className="tech-item">
                      <i className="fab fa-docker"></i>
                      <span>Docker</span>
                    </div>
                    <div className="tech-item">
                      <i className="fas fa-dharmachakra"></i>
                      <span>Kubernetes</span>
                    </div>
                    <div className="tech-item">
                      <i className="fas fa-code-branch"></i>
                      <span>Terraform</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="sidebar">
                <div className="widget services-list">
                  <h5 className="widget-title">Our Services</h5>
                  <ul>
                    <li className="active">
                      <a href="/services/cloud-migration">
                        <i className="ion-ios-cloud"></i>
                        Cloud Migration
                      </a>
                    </li>
                    <li>
                      <a href="/services/devops-automation">
                        <i className="ion-ios-cog"></i>
                        DevOps Automation
                      </a>
                    </li>
                    <li>
                      <a href="/services/ai-ml-solutions">
                        <i className="ion-ios-analytics"></i>
                        AI/ML Solutions
                      </a>
                    </li>
                    <li>
                      <a href="/services/cybersecurity">
                        <i className="ion-ios-locked"></i>
                        Cybersecurity
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="widget contact-widget">
                  <div className="contact-card" style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    padding: '30px',
                    borderRadius: '15px',
                    color: 'white',
                    textAlign: 'center'
                  }}>
                    <h5 className="mb-20">Ready to Migrate?</h5>
                    <p className="mb-20">Let&apos;s discuss your cloud migration strategy and create a customized plan for your business.</p>
                    <a href="/contact" className="butn bord curve light">
                      <span>Get Started</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="call-action section-padding sub-bg bg-img" style={{backgroundImage: "url(/img/patrn.svg)"}}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-9">
              <div className="content sm-mb30">
                <h6 className="wow words chars splitting" data-splitting>Let&apos;s Talk</h6>
                <h2 className="wow words chars splitting" data-splitting>
                  about your <br /> <b className="back-color">cloud migration</b> project.
                </h2>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 valign">
              <a href="/contact" className="butn bord curve wow fadeInUp" data-wow-delay=".5s">
                <span>Get In Touch</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .step-item {
          display: flex;
          align-items: flex-start;
          gap: 20px;
        }
        
        .step-number {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          flex-shrink: 0;
        }
        
        .step-content h5 {
          margin-bottom: 10px;
          color: #667eea;
        }
        
        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }
        
        .tech-item {
          text-align: center;
          padding: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          transition: all 0.3s ease;
        }
        
        .tech-item:hover {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          transform: translateY(-5px);
        }
        
        .tech-item i {
          font-size: 24px;
          margin-bottom: 10px;
          display: block;
          color: #667eea;
        }
        
        .tech-item:hover i {
          color: white;
        }
        
        .widget {
          background: rgba(255, 255, 255, 0.05);
          padding: 30px;
          border-radius: 15px;
          margin-bottom: 30px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .widget-title {
          margin-bottom: 20px;
          color: #667eea;
        }
        
        .services-list ul {
          list-style: none;
          padding: 0;
        }
        
        .services-list li {
          margin-bottom: 15px;
        }
        
        .services-list a {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 15px;
          border-radius: 8px;
          transition: all 0.3s ease;
          color: rgba(255, 255, 255, 0.8);
        }
        
        .services-list li.active a,
        .services-list a:hover {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
      `}</style>
    </Fragment>
  );
};

export default CloudMigrationPage;