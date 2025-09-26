'use client';
import React from 'react';

function PageHeader({ title, paragraph, classText, bannerImage, overlayOpacity = 0.7 }) {
  const headerStyle = bannerImage ? {
    backgroundImage: `url(${bannerImage}), url('/img/patrn.svg')`,
    backgroundSize: 'cover, auto',
    backgroundPosition: 'center, center',
    backgroundRepeat: 'no-repeat, repeat',
    position: 'relative',
    minHeight: classText === 'insights-banner-short' ? '100px' : '200px'
  } : {
    backgroundImage: `url('/img/patrn.svg')`,
    backgroundRepeat: 'repeat',
    position: 'relative',
    minHeight: classText === 'insights-banner-short' ? '100px' : '200px'
  };

  return (
    <section className={`page-header ${classText && classText}`} style={headerStyle}>
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
  <div className="row justify-content-center align-items-center" style={{ minHeight: bannerImage ? '200px' : 'auto' }}>
          <div className="col-lg-7 col-md-9">
            <div className="cont text-center">
              <h1 className="mb-10 color-font" style={{ color: bannerImage ? '#ffffff' : undefined }}>{title}</h1>
              <p style={{ color: bannerImage ? 'rgba(255, 255, 255, 0.9)' : undefined }}>{paragraph}</p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .page-header {
          padding: 80px 0;
        }
        .banner-overlay {
          backdrop-filter: blur(1px);
        }
        @media (max-width: 768px) {
          .page-header {
            padding: 40px 0;
            min-height: 400px !important;
          }
          .row {
            min-height: 200px !important;
          }
        }
      `}</style>
    </section>
  )
}

export default PageHeader