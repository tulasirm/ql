"use client";
import { Fragment, useEffect } from "react";
import Navbar from "../../../../components/Common/Navbar";
import Loader from "../../../../components/Common/Loader";

const AiMlSolutionsPage = () => {
  useEffect(() => {
    document.title = "AI/ML Solutions - QuantaLeaps";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Advanced AI and Machine Learning solutions including predictive analytics, NLP, computer vision, and intelligent automation.');
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
                    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
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
                    <i className="ion-ios-analytics" style={{ fontSize: '32px', color: 'white' }}></i>
                  </div>
                </div>
                <h1 className="mb-20 color-font">AI/ML Solutions</h1>
                <p className="fw-300">
                  Harness the power of artificial intelligence and machine learning to transform your business. 
                  We deliver custom AI solutions that drive innovation, automate processes, and unlock data-driven insights.
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
                  <h3>Intelligent Solutions for Modern Business</h3>
                  <p className="fw-300">
                    Our AI/ML solutions are designed to solve real-world business challenges. From predictive analytics 
                    to natural language processing, we create intelligent systems that learn, adapt, and deliver 
                    measurable results for your organization.
                  </p>
                </div>

                <div className="service-features mb-50">
                  <h4 className="mb-30">Our AI/ML Capabilities</h4>
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="list-style-none">
                        <li className="mb-15">
                          <i className="fas fa-check-circle color-font mr-10"></i>
                          Custom ML model development
                        </li>
                        <li className="mb-15">
                          <i className="fas fa-check-circle color-font mr-10"></i>
                          Predictive analytics
                        </li>
                        <li className="mb-15">
                          <i className="fas fa-check-circle color-font mr-10"></i>
                          Natural Language Processing
                        </li>
                        <li className="mb-15">
                          <i className="fas fa-check-circle color-font mr-10"></i>
                          Computer vision solutions
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="list-style-none">
                        <li className="mb-15">
                          <i className="fas fa-check-circle color-font mr-10"></i>
                          Intelligent automation
                        </li>
                        <li className="mb-15">
                          <i className="fas fa-check-circle color-font mr-10"></i>
                          Data mining and analysis
                        </li>
                        <li className="mb-15">
                          <i className="fas fa-check-circle color-font mr-10"></i>
                          Recommendation systems
                        </li>
                        <li className="mb-15">
                          <i className="fas fa-check-circle color-font mr-10"></i>
                          AI model deployment & monitoring
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="ai-solutions mb-50">
                  <h4 className="mb-30">Solution Areas</h4>
                  <div className="row">
                    <div className="col-md-6 mb-30">
                      <div className="solution-card">
                        <div className="solution-icon">
                          <i className="fas fa-chart-line"></i>
                        </div>
                        <h5>Predictive Analytics</h5>
                        <p>Forecast trends, identify risks, and make data-driven decisions with advanced predictive models.</p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-30">
                      <div className="solution-card">
                        <div className="solution-icon">
                          <i className="fas fa-comments"></i>
                        </div>
                        <h5>Chatbots & NLP</h5>
                        <p>Intelligent conversational AI and natural language processing for enhanced customer experience.</p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-30">
                      <div className="solution-card">
                        <div className="solution-icon">
                          <i className="fas fa-eye"></i>
                        </div>
                        <h5>Computer Vision</h5>
                        <p>Image recognition, object detection, and visual analysis for automated quality control and monitoring.</p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-30">
                      <div className="solution-card">
                        <div className="solution-icon">
                          <i className="fas fa-robot"></i>
                        </div>
                        <h5>Process Automation</h5>
                        <p>Intelligent automation that learns and adapts to optimize business processes and workflows.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="process-steps mb-50">
                  <h4 className="mb-30">Our AI/ML Development Process</h4>
                  <div className="steps">
                    <div className="step-item mb-30">
                      <div className="step-number">01</div>
                      <div className="step-content">
                        <h5>Problem Definition</h5>
                        <p>Understand business challenges and define AI/ML objectives with clear success metrics.</p>
                      </div>
                    </div>
                    <div className="step-item mb-30">
                      <div className="step-number">02</div>
                      <div className="step-content">
                        <h5>Data Strategy</h5>
                        <p>Assess data quality, implement data pipeline, and prepare datasets for model training.</p>
                      </div>
                    </div>
                    <div className="step-item mb-30">
                      <div className="step-number">03</div>
                      <div className="step-content">
                        <h5>Model Development</h5>
                        <p>Design, train, and validate ML models using appropriate algorithms and techniques.</p>
                      </div>
                    </div>
                    <div className="step-item mb-30">
                      <div className="step-number">04</div>
                      <div className="step-content">
                        <h5>Deployment & Monitoring</h5>
                        <p>Deploy models to production with continuous monitoring and performance optimization.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="technologies">
                  <h4 className="mb-30">Technologies We Use</h4>
                  <div className="tech-grid">
                    <div className="tech-item">
                      <i className="fab fa-python"></i>
                      <span>Python</span>
                    </div>
                    <div className="tech-item">
                      <i className="fas fa-brain"></i>
                      <span>TensorFlow</span>
                    </div>
                    <div className="tech-item">
                      <i className="fas fa-fire"></i>
                      <span>PyTorch</span>
                    </div>
                    <div className="tech-item">
                      <i className="fas fa-database"></i>
                      <span>Spark</span>
                    </div>
                    <div className="tech-item">
                      <i className="fab fa-aws"></i>
                      <span>AWS ML</span>
                    </div>
                    <div className="tech-item">
                      <i className="fas fa-cloud"></i>
                      <span>MLOps</span>
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
                    <li className="active">
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
                    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                    padding: '30px',
                    borderRadius: '15px',
                    color: 'white',
                    textAlign: 'center'
                  }}>
                    <h5 className="mb-20">Ready for AI?</h5>
                    <p className="mb-20">Transform your business with intelligent AI/ML solutions tailored to your needs.</p>
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
                  about your <br /> <b className="back-color">AI transformation</b> project.
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
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
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
          color: #4facfe;
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
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        }

        .solution-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
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
          color: #4facfe;
        }

        .solution-card:hover h5 {
          color: white;
        }

        .solution-card:hover p {
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
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          transform: translateY(-5px);
        }
        
        .tech-item i {
          font-size: 24px;
          margin-bottom: 10px;
          display: block;
          color: #4facfe;
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
          color: #4facfe;
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
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          color: white;
        }
      `}</style>
    </Fragment>
  );
};

export default AiMlSolutionsPage;