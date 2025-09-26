import React from 'react';

function Footer({ hideBGCOLOR }) {
  return (
    <footer className={`${!hideBGCOLOR ? 'sub-bg' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Registered in</h6>
                    <p>Seattle, WA.</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>contact@quantaleaps.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <p>+1 253-486-7125</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Quick Links</h5>
              </div>
              <ul>
                <li>
                  {/* <div className="img">
                    <a href="#">
                      <img src="/img/blog/1.jpg" alt="" />
                    </a>
                  </div> */}
                  <div className="sm-post">
                    <a href="https://quantaleaps.com/about">
                      <span className="nav-item">
                        About Us
                      </span>
                      {/* <span className="date">14 sep 2023</span> */}
                    </a>
                  </div>
                </li>
                <li>
                  {/* <div className="img">
                    <a href="#">
                      <img src="/img/blog/1.jpg" alt="" />
                    </a>
                  </div> */}
                  <div className="sm-post">
                    <a href="https://quantaleaps.com/about">
                      <span className="nav-item">
                        Services
                      </span>
                      {/* <span className="date">14 sep 2023</span> */}
                    </a>
                  </div>
                </li>
                <li>
                  {/* <div className="img">
                    <a href="#">
                      <img src="/img/blog/2.jpg" alt="" />
                    </a>
                  </div> */}
                  <div className="sm-post">
                    <a href="https://quantaleaps.com/works">
                      <span className="nav-item">
                        Insights
                      </span>
                      {/* <span className="date">14 sep 2023</span> */}
                    </a>
                  </div>
                </li>
                <li>
                  <div className="subscribe">
                    <input type="text" placeholder="Type Your Email" />
                    <span className="subs pe-7s-paper-plane"></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src="/img/logo-light.png" alt="logo" />
                QuantaLeaps
              </div>
              <div className="social">
                <a href="https://www.quantaleaps.com">
                  <i className="fab fa-facebook-f"></i>
                  <span aria-label="facebook"></span>
                </a>
                <a href="https://www.quantaleaps.com">
                  <i className="fab fa-twitter"></i>
                  <span aria-label="twitter"></span>
                </a>
                <a href="https://www.quantaleaps.com">
                  <i className="fab fa-instagram"></i>
                  <span aria-label="instagram"></span>
                </a>
                <a href="https://www.quantaleaps.com">
                  <i className="fab fa-youtube"></i>
                  <span aria-label="youtube"></span>
                </a>
              </div>
              <div className="copy-right">
                <p>
                  © 2023, <a href="https://quantaleaps.com">Quantaleaps LLC</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer