'use client';
import React from "react";

const Header4 = ({ sliderRef, bannerImage, overlayOpacity = 0.6 }) => {
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
    <header ref={sliderRef} className="particles circle-bg valign" style={headerStyle}>
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
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="cont text-center">
              <h1>
                <span className="color-font" style={{ color: bannerImage ? '#ffffff' : undefined }}>
                  About US
                </span>
              </h1>
              <p style={{ 
                color: bannerImage ? 'rgba(255, 255, 255, 0.85)' : undefined,
                fontSize: '18px',
                marginTop: '20px',
                maxWidth: '600px',
                margin: '20px auto 0'
              }}>
                Innovating the future with technology excellence
              </p>
            </div>
          </div>
        </div>
      </div>

      {!bannerImage && (
        <>
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
          <div className="line bottom left"></div>
        </>
      )}
      
      <style jsx>{`
        .particles.circle-bg.valign {
          min-height: ${bannerImage ? '500px' : '100vh'};
          display: flex;
          align-items: center;
        }
        .banner-overlay {
          backdrop-filter: blur(1px);
        }
        @media (max-width: 768px) {
          .particles.circle-bg.valign {
            min-height: ${bannerImage ? '400px' : '60vh'};
          }
        }
      `}</style>
    </header>
  );
};

export default Header4;
