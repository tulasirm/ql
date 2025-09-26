'use client';
import React, { useEffect } from 'react';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
//= Scripts
import removeSlashFromBagination from '@/common/removeSlashpagination';

const swiperOptions = {
  modules: [Autoplay, Navigation],
  loop: true,
  navigation: {
    prevEl: ".arrows .prev",
    nextEl: ".arrows .next",
  },
  centeredSlides: true,
  autoplay: true,
  slidesPerView: 3,
  spaceBetween: 60,
  breakpoints: {
    1024: {
      slidesPerView: 3,
      centeredSlides: false,
    },
    767: {
      slidesPerView: 1,
      centeredSlides: false,
    },
    480: {
      slidesPerView: 1,
      centeredSlides: false,
    }
  },
}

function FullTestimonials({ withIMG, withCOLOR, noPadding, classText, showHead }) {
  useEffect(() => {
    removeSlashFromBagination();
  }, []);

  return (
    <section className={`testimonials ${withIMG ? 'section-padding bg-img' : withCOLOR ? 'section-padding back-color' : noPadding ? '' : 'section-padding'} ${classText ? classText : ''}`} style={{ backgroundImage: `${withIMG ? 'url(' + withIMG + ')' : 'none'}` }}>
      {
        //showHead &&
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="sec-head text-center">
                <h6 className="wow fadeOut" data-wow-delay="5s">Testing Solutions</h6>
                <h3 className="wow color-font">
                  Our quality platform services of manual and Automation.
                </h3>
              </div>
            </div>
          </div>
        </div>
      }

      <div className="container-fluid position-re">
        <div className="row wow fadeInUp" data-wow-delay=".5s">
          <div className="col-lg-12">
            <Swiper {...swiperOptions} className="slic-item" data-wow-delay=".5s">
              <SwiperSlide className="item">
                <div className="info valign">
                  <div className="cont">
                    <div className="author">
                      <div className="img">
                        <img src="/img/clients/qa.jpg" alt="" />
                      </div>
                      <h6 className="author-name color-font">Managed Testing Services</h6>
                      <span className="author-details"> Manual, Automation Testing </span>
                    </div>
                  </div>
                </div>
                <p>
                  We do complete testing services as a managed services, you can be peice of mind &amp; watch provided leader board, to monitor about quality product deliverable.
                </p>
              </SwiperSlide>
              <SwiperSlide className="item">
                <div className="info valign">
                  <div className="cont">
                    <div className="author">
                      <div className="img">
                        <img src="/img/clients/se.jpg" alt="" />
                      </div>
                      <h6 className="author-name color-font">Web Automation</h6>
                      <span className="author-details"> Opensource frameworks, Commertial tools </span>
                    </div>
                  </div>
                </div>
                <p>
                  I would do excellent and highly recommend opensource frameworks like Selenium, Cypress, PlayWright &amp; Commercial tools if you wish.
                </p>
              </SwiperSlide>
              <SwiperSlide className="item">
                <div className="info valign">
                  <div className="cont">
                    <div className="author">
                      <div className="img">
                        <img src="/img/clients/ra.jpg" alt="" />
                      </div>
                      <h6 className="author-name color-font">API Automation</h6>
                      <span className="author-details"> Opensource frameworks, Commertial tools </span>
                    </div>
                  </div>
                </div>
                <p>
                  I would highly recommend go with Rest-Assured, PlayWright &amp; Postman, Saucelabs, Lamda services.
                </p>
              </SwiperSlide>
              <SwiperSlide className="item">
                <div className="info valign">
                  <div className="cont">
                    <div className="author">
                      <div className="img">
                        <img src="/img/clients/ap.jpg" alt="" />
                      </div>
                      <h6 className="author-name color-font">Mobile Automation</h6>
                      <span className="author-details"> Opensource frameworks, Commertial tools </span>
                    </div>
                  </div>
                </div>
                <p>
                  I would highly recommend Appium, TestNG, Swift, Expresso &amp; Saucelabs, Lamda, Browser Stack services.
                </p>
              </SwiperSlide>
              <SwiperSlide className="item">
                <div className="info valign">
                  <div className="cont">
                    <div className="author">
                      <div className="img">
                        <img src="/img/clients/tdm.jpg" alt="" />
                      </div>
                      <h6 className="author-name color-font">TestData Services</h6>
                      <span className="author-details"> Opensource frameworks, Commertial tools </span>
                    </div>
                  </div>
                </div>
                <p>
                  We are specialists to understand your test data needs and generate/maintain using AI based frameworks &amp; We do develope custom solutions.
                </p>
              </SwiperSlide>
              <SwiperSlide className="item">
                <div className="info valign">
                  <div className="cont">
                    <div className="author">
                      <div className="img">
                        <img src="/img/clients/a11y.jpg" alt="" />
                      </div>
                      <h6 className="author-name color-font">Accessibility Testing</h6>
                      <span className="author-details"> Automation, Manual tools </span>
                    </div>
                  </div>
                </div>
                <p>
                  We are specialists in developing custom automation solutions for Accessibility testing using AI &amp; We do develope custom accessibility monitoring solutions.
                </p>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="arrows">
          <div className="container">
            <div className="next cursor-pointer">
              <span className="pe-7s-angle-right"></span>
            </div>
            <div className="prev cursor-pointer">
              <span className="pe-7s-angle-left"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FullTestimonials;