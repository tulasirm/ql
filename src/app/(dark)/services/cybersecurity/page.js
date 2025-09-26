"use client";
import { Fragment, useEffect } from "react";
import Navbar from "../../../../components/Common/Navbar";
import Loader from "../../../../components/Common/Loader";

const CybersecurityPage = () => {
  useEffect(() => {
    document.title = "Cybersecurity Services - QuantaLeaps";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Enterprise cybersecurity solutions including threat assessment, compliance automation, zero-trust architecture, and comprehensive security monitoring.');
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
                    background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
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
                    <i className="ion-ios-locked" style={{ fontSize: '32px', color: 'white' }}></i>
                  </div>
                </div>
                <h1 className="mb-20 color-font">Cybersecurity Services</h1>
                <p className="fw-300">
                  Protect your enterprise with comprehensive cybersecurity solutions. We provide advanced threat 
                  protection, compliance management, and security architecture designed for modern businesses.
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
                  <h3>Enterprise Security Excellence</h3>
                  <p className="fw-300">
                    In today&apos;s digital landscape, cybersecurity is not optional. Our comprehensive security 
                    solutions protect your organization from evolving threats while ensuring compliance with 
                    industry standards and regulations.
                  </p>
                </div>

                <div className="service-features mb-50">
                  <h4 className="mb-30">Our Security Services</h4>
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="list-style-none">
                        <li className="mb-15">
                          <i className="fas fa-check-circle color-font mr-10"></i>
                          Threat assessment & penetration testing
                        </li>
                        <li className="mb-15">
                          <i className="fas fa-check-circle color-font mr-10"></i>
                          Zero-trust architecture implementation
                        </li>
                        <li className="mb-15">
                          <i className="fas fa-check-circle color-font mr-10"></i>
                          Security monitoring & incident response
                        </li>
                        <li className="mb-15">
                          <i className="fas fa-check-circle color-font mr-10"></i>
                          Vulnerability management
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="list-style-none">
                        <li className="mb-15">
                          <i className="fas fa-check-circle color-font mr-10"></i>
                          Compliance automation (SOX, GDPR, HIPAA)
                        </li>
                        <li className="mb-15">
                          <i className="fas fa-check-circle color-font mr-10"></i>
                          Identity & access management
                        </li>
                        <li className="mb-15">
                          <i className="fas fa-check-circle color-font mr-10"></i>
                          Data encryption & protection
                        </li>
                        <li className="mb-15">
                          <i className="fas fa-check-circle color-font mr-10"></i>
                          Security training & awareness
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="security-solutions mb-50">
                  <h4 className="mb-30">Security Solutions</h4>
                  <div className="row">
                    <div className="col-md-6 mb-30">
                      <div className="solution-card">
                        <div className="solution-icon">
                          <i className="fas fa-shield-alt"></i>
                        </div>
                        <h5>Threat Protection</h5>
                        <p>Advanced threat detection, prevention, and response capabilities to protect against sophisticated attacks.</p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-30">
                      <div className="solution-card">
                        <div className="solution-icon">
                          <i className="fas fa-check-double"></i>
                        </div>
                        <h5>Compliance Management</h5>
                        <p>Automated compliance monitoring and reporting for SOX, GDPR, HIPAA, and other regulations.</p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-30">
                      <div className="solution-card">
                        <div className="solution-icon">
                          <i className="fas fa-user-shield"></i>
                        </div>
                        <h5>Identity Management</h5>
                        <p>Comprehensive identity and access management with multi-factor authentication and role-based controls.</p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-30">
                      <div className="solution-card">
                        <div className="solution-icon">
                          <i className="fas fa-search"></i>
                        </div>
                        <h5>Security Monitoring</h5>
                        <p>24/7 security operations center (SOC) services with real-time threat monitoring and incident response.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="process-steps mb-50">
                  <h4 className="mb-30">Our Security Implementation Process</h4>
                  <div className="steps">
                    <div className="step-item mb-30">
                      <div className="step-number">01</div>
                      <div className="step-content">
                        <h5>Security Assessment</h5>
                        <p>Comprehensive evaluation of current security posture, vulnerabilities, and compliance gaps.</p>
                      </div>
                    </div>
                    <div className="step-item mb-30">
                      <div className="step-number">02</div>
                      <div className="step-content">
                        <h5>Strategy Development</h5>
                        <p>Create customized security strategy and roadmap aligned with business objectives and compliance requirements.</p>
                      </div>
                    </div>
                    <div className="step-item mb-30">
                      <div className="step-number">03</div>
                      <div className="step-content">
                        <h5>Implementation</h5>
                        <p>Deploy security controls, monitoring systems, and processes with minimal business disruption.</p>
                      </div>
                    </div>
                    <div className="step-item mb-30">
                      <div className="step-number">04</div>
                      <div className="step-content">
                        <h5>Continuous Monitoring</h5>
                        <p>Ongoing security monitoring, threat hunting, and continuous improvement of security posture.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="compliance-badges mb-50">
                  <h4 className="mb-30">Compliance Standards We Cover</h4>
                  <div className="compliance-grid">
                    <div className="compliance-item">
                      <i className="fas fa-certificate"></i>
                      <span>SOX</span>
                    </div>
                    <div className="compliance-item">
                      <i className="fas fa-globe-europe"></i>
                      <span>GDPR</span>
                    </div>
                    <div className="compliance-item">
                      <i className="fas fa-user-md"></i>
                      <span>HIPAA</span>
                    </div>
                    <div className="compliance-item">
                      <i className="fas fa-credit-card"></i>
                      <span>PCI DSS</span>
                    </div>
                    <div className="compliance-item">
                      <i className="fas fa-building"></i>
                      <span>SOC 2</span>
                    </div>
                    <div className="compliance-item">
                      <i className="fas fa-industry"></i>
                      <span>NIST</span>
                    </div>
                  </div>
                </div>

                <div className="technologies">
                  <h4 className="mb-30">Security Technologies</h4>
                  <div className="tech-grid">
                    <div className="tech-item">
                      <i className="fas fa-eye"></i>
                      <span>SIEM</span>
                    </div>
                    <div className="tech-item">
                      <i className="fas fa-network-wired"></i>
                      <span>Firewall</span>
                    </div>
                    <div className="tech-item">
                      <i className="fas fa-virus"></i>
                      <span>Endpoint Protection</span>
                    </div>
                    <div className="tech-item">
                      <i className="fas fa-key"></i>
                      <span>PKI/Encryption</span>
                    </div>
                    <div className="tech-item">
                      <i className="fas fa-cloud-download-alt"></i>
                      <span>Cloud Security</span>
                    </div>
                    <div className="tech-item">
                      <i className="fas fa-mobile-alt"></i>
                      <span>Mobile Security</span>
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
                    <li>
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
                    <li className="active">
                      <a href="/services/cybersecurity">
                        <i className="ion-ios-locked"></i>
                        Cybersecurity
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="widget contact-widget">
                  <div className="contact-card" style={{
                    background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                    padding: '30px',
                    borderRadius: '15px',
                    color: 'white',
                    textAlign: 'center'
                  }}>
                    <h5 className="mb-20">Secure Your Business</h5>
                    <p className="mb-20">Protect your organization with enterprise-grade cybersecurity solutions.</p>
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
                  about your <br /> <b className="back-color">security strategy</b> project.
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
          background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
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
          color: #fa709a;
        }

        .solution-card {
          text-align: center;
          padding: 25px;
          border-radius: 15px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          height: 100%;
        }

        .solution-card:hover {
          transform: translateY(-5px);
          background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
        }

        .solution-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 15px;
        }

        .solution-icon i {
          font-size: 24px;
          color: white;
        }

        .solution-card:hover .solution-icon {
          background: rgba(255, 255, 255, 0.2);
        }

        .solution-card h5 {
          margin-bottom: 15px;
          color: #fa709a;
        }

        .solution-card:hover h5 {
          color: white;
        }

        .solution-card:hover p {
          color: rgba(255, 255, 255, 0.9);
        }

        .compliance-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }

        .compliance-item {
          text-align: center;
          padding: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .compliance-item:hover {
          background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
          transform: translateY(-5px);
        }

        .compliance-item i {
          font-size: 24px;
          margin-bottom: 10px;
          display: block;
          color: #fa709a;
        }

        .compliance-item:hover i {
          color: white;
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
          background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
          transform: translateY(-5px);
        }
        
        .tech-item i {
          font-size: 24px;
          margin-bottom: 10px;
          display: block;
          color: #fa709a;
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
          color: #fa709a;
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
          background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
          color: white;
        }
      `}</style>
    </Fragment>
  );
};

export default CybersecurityPage;