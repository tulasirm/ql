'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
//= Scripts
import thumparallaxDown from '@/common/thumparallaxDown';


function MinimalArea1() {
  useEffect(() => {
    thumparallaxDown();
  }, []);

  return (
    <section className="min-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <div className="tech-illustration" style={{
                background: 'linear-gradient(135deg, #2196F3 0%, #21CBF3 100%)',
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
                  background: 'url("data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"%3E%3Cg fill-opacity="0.1"%3E%3Cpolygon fill="white" points="50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40"/%3E%3C/g%3E%3C/svg%3E")',
                  opacity: 0.3
                }}></div>
                <div className="text-center" style={{ position: 'relative', zIndex: 2, color: 'white' }}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '20px',
                    marginBottom: '20px'
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      background: 'rgba(255,255,255,0.2)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backdropFilter: 'blur(10px)'
                    }}>
                      <svg width="30" height="30" fill="white" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                      </svg>
                    </div>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      background: 'rgba(255,255,255,0.2)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backdropFilter: 'blur(10px)'
                    }}>
                      <svg width="30" height="30" fill="white" viewBox="0 0 24 24">
                        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                      </svg>
                    </div>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      background: 'rgba(255,255,255,0.2)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backdropFilter: 'blur(10px)'
                    }}>
                      <svg width="30" height="30" fill="white" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      background: 'rgba(255,255,255,0.2)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backdropFilter: 'blur(10px)'
                    }}>
                      <svg width="30" height="30" fill="white" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                  </div>
                  <h5 style={{ margin: 0, fontSize: '1.1rem' }}>Enterprise Solutions</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <h4 className="color-font">Innovate. Architect. Transform.</h4>
              <p className="wow txt words chars splitting" data-splitting>
                QuantaLeaps stands among the premier software consulting firms globally. We 
                architect enterprise-grade solutions for Fortune 500 companies and innovative 
                startups. Through cutting-edge cloud technologies, AI/ML implementations, and 
                robust DevOps practices, we redefine digital transformation.
              </p>
              <ul>
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  Comprehensive cloud migration and modernization services.
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  24/7 enterprise support with 99.9% uptime guarantee.
                </li>
              </ul>
              <Link href="/about/about-dark" className="butn bord curve mt-40 wow fadeInUp" data-wow-delay=".8s">
                <span>Discover</span>
              </Link>
              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MinimalArea1