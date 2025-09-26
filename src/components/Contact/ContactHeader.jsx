'use client';
import React, { useEffect } from 'react';
//= Static Data
import contentHeaderData from "@/data/contact-header.json";

function ContactHeader({ bannerImage, overlayOpacity = 0.6 }) {
  useEffect(() => {
    setTimeout(() => {
      if (document.querySelector("#particles-js canvas")) {
        document.querySelector("#particles-js canvas").style.position = "unset";
      }
    }, 500);
  }, []);

  const headerStyle = bannerImage ? {
    backgroundImage: `url(${bannerImage}), url('/img/patrn.svg')`,
    backgroundSize: 'cover, auto',
    backgroundPosition: 'center, center',
    backgroundRepeat: 'no-repeat, repeat',
    position: 'relative',
    minHeight: '500px'
  } : {
    backgroundImage: `url('/img/patrn.svg')`,
    backgroundRepeat: 'repeat',
    position: 'relative',
    minHeight: '500px'
  };

  return (
    <header className="pages-header circle-bg valign position-re" style={headerStyle}>
      {bannerImage && (
        <div 
          className="banner-overlay" 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
            zIndex: 1
          }}
        />
      )}
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
  <div className="row justify-content-center align-items-center" style={{ minHeight: bannerImage ? '500px' : 'auto' }}>
          <div className="col-lg-9 col-md-11">
            <div className="capt">
              <div className="text-center">
                <h1 className="color-font mb-10 fw-700" style={{ color: bannerImage ? '#ffffff' : undefined }}>
                  Contact Us
                </h1>
                <p style={{ 
                  color: bannerImage ? 'rgba(255, 255, 255, 0.9)' : undefined,
                  fontSize: '18px',
                  maxWidth: '500px',
                  margin: '0 auto'
                }}>
                  Let&apos;s build something amazing together
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {!bannerImage && (
        <div className="circle-color">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      )}
      
      <style jsx>{`
        .pages-header.circle-bg.valign.position-re {
          min-height: 500px;
          display: flex;
          align-items: center;
          padding: 120px 0;
        }
        .banner-overlay {
          backdrop-filter: blur(1px);
        }
        @media (max-width: 768px) {
          .pages-header.circle-bg.valign.position-re {
            min-height: 400px;
            padding: 80px 0;
          }
        }
      `}</style>
    </header>
  )
}

export default ContactHeader