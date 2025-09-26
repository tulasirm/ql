'use client';
import React, { useState } from 'react';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
//= Components
import ModalVideo from "@/components/Common/ModalVideo";

const swiperOptions = {
  loop: true,
  speed: 500,
  slidesPerView: 1,
}

function TestimonialsWithVideo() {
  const [isOpen, setOpen] = useState(false);

  function openVideo(e) {
    e.preventDefault();
    setOpen(true);
  }

  return (
    <section className="block-sec">
      <div className="background bg-img pt-100 pb-0 parallaxie" style={{ backgroundImage: "url('/img/bg-vid.jpg')" }}
        data-overlay-dark="5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {/* <div className="vid-area">
                <span className="text">Watch Video</span>
                <div className=" cursor-pointer" onClick={''}>
                  <a className="vid">
                    <div className="vid-butn">
                      <span className="icon">
                        <i className="fas fa-play"></i>
                      </span>
                    </div>
                  </a>
                </div>
              </div> */}
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="testim-box">
                <div className="head-box">
                  <h6 className="wow fadeIn" data-wow-delay=".5s">Our Commitment</h6>
                  <h4 className="wow fadeInLeft" data-wow-delay=".5s">
                    To the Client?
                  </h4>
                </div>
                <Swiper {...swiperOptions} className="slic-item wow fadeInUp" data-wow-delay=".5s">
                  <SwiperSlide className="item">
                    <p>
                    We have the experience and ability to do everything we&apos;ve promised you and we&apos;ll do it all in a professional and timely manner. 
                    We&apos;ll endeavor to meet every deadline and milestone that&apos;s set. You&apos;ll have plenty of opportunities to review our work and provide feedback. We&apos;ll have regular, possibly daily contact.
                    </p>
                    <div className="info">
                      <div className="img">
                        <div className="img-box">
                          <img src="/img/clients/1.jpg" alt="" />
                        </div>
                      </div>
                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name">Shveta Kumari</h6>
                          <span className="author-details">
                            Co-founder, CEO
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="item">
                    <p>
                      Nulla metus metus ullamcorper vel tincidunt sed euismod nibh
                      volutpat velit className aptent taciti sociosqu ad litora.
                    </p>
                    <div className="info">
                      <div className="img">
                        <div className="img-box">
                          <img src="/img/clients/2.jpg" alt="" />
                        </div>
                      </div>
                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name">Alex Regelman</h6>
                          <span className="author-details">
                            Co-founder, Colabrio
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="item">
                    <p>
                      Nulla metus metus ullamcorper vel tincidunt sed euismod nibh
                      volutpat velit className aptent taciti sociosqu ad litora.
                    </p>
                    <div className="info">
                      <div className="img">
                        <div className="img-box">
                          <img src="/img/clients/3.jpg" alt="" />
                        </div>
                      </div>
                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name">Alex Regelman</h6>
                          <span className="author-details">
                            Co-founder, Colabrio
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="vimeo"
        autoplay
        isOpen={isOpen}
        videoId="127203262"
        onClose={() => setOpen(false)}
      />
    </section>
  )
}

export default TestimonialsWithVideo;