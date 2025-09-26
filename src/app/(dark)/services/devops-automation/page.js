"use client";
import { Fragment, useEffect } from "react";
import Navbar from "../../../../components/Common/Navbar";
import Loader from "../../../../components/Common/Loader";

const DevOpsAutomationPage = () => {
  useEffect(() => {
    document.title = "DevOps Automation Services - QuantaLeaps";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional DevOps automation services including CI/CD pipelines, container orchestration, and infrastructure automation.');
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
                    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
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
                    <i className="ion-ios-cog" style={{ fontSize: '32px', color: 'white' }}></i>
                  </div>
                </div>
                <h1 className="mb-20 color-font">DevOps Automation Services</h1>
                <p className="fw-300">
                  Accelerate your software delivery with our comprehensive DevOps automation solutions. 
                  We implement robust CI/CD pipelines and infrastructure automation for faster, more reliable deployments.
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
                  <h3>DevOps Excellence</h3>
                  <p className="fw-300">
                    Transform your development and operations processes with our proven DevOps methodologies. 
                    We help organizations achieve faster time-to-market, improved quality, and enhanced collaboration 
                    between development and operations teams.
                  </p>
                </div>

                <div className="service-features mb-50">
                  <h4 className="mb-30">Key Features</h4>
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="list-style-none">
                        <li className="mb-15">
                          <i className="fas fa-check-circle color-font mr-10"></i>
                          Automated CI/CD pipelines
                        </li>
                        <li className="mb-15">
                          <i className="fas fa-check-circle color-font mr-10"></i>
                          Infrastructure as Code (IaC)
                        </li>
                        <li className="mb-15">
                          <i className="fas fa-check-circle color-font mr-10"></i>
                          Container orchestration
                        </li>
                        <li className="mb-15">
                          <i className="fas fa-check-circle color-font mr-10"></i>
                          Automated testing integration
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="list-style-none">
                        <li className="mb-15">
                          <i className="fas fa-check-circle color-font mr-10"></i>
                          Monitoring and observability
                        </li>
                        <li className="mb-15">
                          <i className="fas fa-check-circle color-font mr-10"></i>
                          Security automation (DevSecOps)
                        </li>
                        <li className="mb-15">
                          <i className="fas fa-check-circle color-font mr-10"></i>
                          Release management
                        </li>
                        <li className="mb-15">
                          <i className="fas fa-check-circle color-font mr-10"></i>
                          Configuration management
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="process-steps mb-50">
                  <h4 className="mb-30">Our DevOps Process</h4>
                  <div className="steps">
                    <div className="step-item mb-30">
                      <div className="step-number">01</div>
                      <div className="step-content">
                        <h5>Current State Assessment</h5>
                        <p>Analyze existing development and deployment processes to identify improvement opportunities.</p>
                      </div>
                    </div>
                    <div className="step-item mb-30">
                      <div className="step-number">02</div>
                      <div className="step-content">
                        <h5>Strategy & Roadmap</h5>
                        <p>Develop comprehensive DevOps strategy and implementation roadmap tailored to your needs.</p>
                      </div>
                    </div>
                    <div className="step-item mb-30">
                      <div className="step-number">03</div>
                      <div className="step-content">
                        <h5>Implementation</h5>
                        <p>Deploy CI/CD pipelines, automation tools, and monitoring solutions with proper training.</p>
                      </div>
                    </div>
                    <div className="step-item mb-30">
                      <div className="step-number">04</div>
                      <div className="step-content">
                        <h5>Optimization & Support</h5>
                        <p>Continuous improvement, performance optimization, and ongoing support for your DevOps processes.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="benefits mb-50">
                  <h4 className="mb-30">Benefits of Our DevOps Solutions</h4>
                  <div className="row">
                    <div className="col-md-6 mb-30">
                      <div className="benefit-card">
                        <div className="benefit-icon">
                          <i className="fas fa-rocket"></i>
                        </div>
                        <h5>Faster Deployment</h5>
                        <p>Reduce deployment time from hours to minutes with automated pipelines.</p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-30">
                      <div className="benefit-card">
                        <div className="benefit-icon">
                          <i className="fas fa-shield-alt"></i>
                        </div>
                        <h5>Improved Quality</h5>
                        <p>Automated testing and validation ensure higher code quality and fewer bugs.</p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-30">
                      <div className="benefit-card">
                        <div className="benefit-icon">
                          <i className="fas fa-users"></i>
                        </div>
                        <h5>Better Collaboration</h5>
                        <p>Break down silos between development and operations teams.</p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-30">
                      <div className="benefit-card">
                        <div className="benefit-icon">
                          <i className="fas fa-chart-line"></i>
                        </div>
                        <h5>Increased Efficiency</h5>
                        <p>Automate repetitive tasks and focus on innovation and value creation.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="technologies">
                  <h4 className="mb-30">Technologies We Use</h4>
                  <div className="tech-grid">
                    <div className="tech-item">
                      <i className="fab fa-jenkins"></i>
                      <span>Jenkins</span>
                    </div>
                    <div className="tech-item">
                      <i className="fab fa-gitlab"></i>
                      <span>GitLab CI</span>
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
                    <div className="tech-item">
                      <i className="fab fa-ansible"></i>
                      <span>Ansible</span>
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
                    <li className="active">
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
                    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                    padding: '30px',
                    borderRadius: '15px',
                    color: 'white',
                    textAlign: 'center'
                  }}>
                    <h5 className="mb-20">Ready to Automate?</h5>
                    <p className="mb-20">Transform your development process with our DevOps automation solutions.</p>
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
                  about your <br /> <b className="back-color">DevOps transformation</b> project.
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
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
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
          color: #f5576c;
        }

        .benefit-card {
          text-align: center;
          padding: 25px;
          border-radius: 15px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .benefit-card:hover {
          transform: translateY(-5px);
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        }

        .benefit-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 15px;
        }

        .benefit-icon i {
          font-size: 24px;
          color: white;
        }

        .benefit-card:hover .benefit-icon {
          background: rgba(255, 255, 255, 0.2);
        }

        .benefit-card h5 {
          margin-bottom: 10px;
          color: #f5576c;
        }

        .benefit-card:hover h5 {
          color: white;
        }

        .benefit-card:hover p {
          color: rgba(255, 255, 255, 0.9);
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
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          transform: translateY(-5px);
        }
        
        .tech-item i {
          font-size: 24px;
          margin-bottom: 10px;
          display: block;
          color: #f5576c;
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
          color: #f5576c;
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
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          color: white;
        }
      `}</style>
    </Fragment>
  );
};

export default DevOpsAutomationPage;