'use client';
import React, { useEffect } from 'react';
//= Scripts
import thumparallaxDown from '@/common/thumparallaxDown';


function MinimalArea1() {
  useEffect(() => {
    thumparallaxDown()
  }, [])

  return (
    <section className="min-area sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <div className="modern-office-bg" style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '20px',
                padding: '60px 40px',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="rgba(255,255,255,0.1)" fill-opacity="1" fill-rule="evenodd"%3E%3Cpath d="m0 40l40-40h-40v40zm40 0v-40h-40l40 40z"/%3E%3C/g%3E%3C/svg%3E")',
                  opacity: 0.3
                }}></div>
                <div className="text-center" style={{ position: 'relative', zIndex: 2 }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: 'rgba(255,255,255,0.2)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <svg width="40" height="40" fill="white" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <h3 style={{ color: 'white', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '10px' }}>20+</h3>
                  <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', margin: 0 }}>Years of Excellence<br/>in Software Consulting</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content pt-0">
              <h4 className="wow color-font">About QuantaLeaps</h4>
              <p className="wow txt" data-splitting>
                QuantaLeaps is a premier software consulting firm specializing in digital transformation, 
                cloud-native solutions, and enterprise-grade technology implementations. We empower businesses 
                to achieve scalable, secure, and innovative software solutions.
              </p>
              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6><span>1</span> Our Mission</h6>
                  <p>
                    To accelerate business growth through cutting-edge technology solutions, 
                    enabling enterprises to stay competitive in the digital-first economy while 
                    maintaining the highest standards of security and scalability.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6><span>2</span> Our Goals</h6>
                  <p>
                    Deliver measurable business outcomes through cloud architecture, AI/ML integration, 
                    DevOps automation, and modern application development, while building long-term 
                    strategic partnerships with our clients.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <h6><span>3</span> Why Choose Us?</h6>
                  <p>
                    Proven expertise across 500+ enterprise projects, certified professionals in 
                    leading cloud platforms (AWS, Azure, GCP), 99.9% uptime guarantee, and a 
                    track record of reducing operational costs by up to 40%.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MinimalArea1