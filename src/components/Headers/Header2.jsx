'use client';
import React, { useRef, useEffect } from 'react';
import Link from 'next/link';


function Header2() {
  const fixedSlider = useRef();

  useEffect(() => {
    if (fixedSlider.current) {
      const MainContent = document.querySelector('.main-content');
      const slideHeight = fixedSlider.current.offsetHeight;
      if (MainContent) MainContent.style.marginTop = slideHeight + "px";
    }
  }, []);

  const headerStyle = {
    backgroundImage: `url('/img/patrn.svg')`,
    backgroundRepeat: 'repeat',
    position: 'relative',
    minHeight: '500px'
  };

  return (
    <header ref={fixedSlider} className="slider-st valign position-re" style={headerStyle}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="cont md-mb50">
              <div className="sub-title mb-5">
                <h6>Your Trusted IT Consulting Partner</h6>
              </div>
              <h1 className="mb-10 fw-600"> QuantaLeaps</h1>
              <p>
              At QuantaLeaps, we specialize in delivering cutting-edge IT solutions tailored to meet your unique business needs. With a team of seasoned experts, we bring a wealth of experience to every project, ensuring your success in the rapidly evolving digital landscape.
              </p>
              <Link href={`/about`} className="butn bord curve mt-30">
                <span>About Us</span>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img">
              <img src="/img/slid/002.webp" alt="Header image-dev in work" />
            </div>
          </div>
        </div>
      </div>
      <div className="line bottom left"></div>
    </header>
  );
}

export default Header2