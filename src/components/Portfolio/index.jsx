'use client';
import React, { useEffect } from 'react';
import Link from "next/link";
//= Scripts
import initIsotope from "@/common/initIsotope";

function Portfolio({ grid, filterPosition }) {
  useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 500)
  }, []);

  return (
    <section className="portfolio section-padding pb-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">Portfolio</h6>
              <h3 className="wow color-font">
                Our Technology Expertise Covers All your needs
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className={`${grid == 3 ? 'container-fluid' : 'container'}`}>
        <div className="row">
          <div className={`filtering ${filterPosition === 'center'
            ? 'text-center'
            : filterPosition === 'left'
              ? 'text-left'
              : 'text-right'
            } col-12`}>
            <div className="filter">
              <span data-filter="*" className="active"> All </span>
              <span data-filter=".brand">Web Applications</span>
              <span data-filter=".web">Mobile Apps</span>
              <span data-filter=".graphic">Testing Services</span>
            </div>
          </div>

          <div className="gallery full-width">
            <div className={`${grid == 3
              ? 'col-lg-4 col-md-6'
              : grid == 2
                ? 'col-md-6 lg-mr'
                : 'col-12'
              } items graphic wow fadeInUp`} data-wow-delay=".4s">
              <div className="item-img">
                <Link className="imago wow" href="/project-details2/project-details2-dark">
                  <img src="/img/portfolio/ql/1.webp" alt="Java-image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6>Java Full Stack</h6>
                <span>
                  <Link href="#0">Design</Link>,
                  <Link href="#0">Java</Link>
                </span>
              </div>
            </div>

            <div className={`${grid == 3
              ? 'col-lg-4 col-md-6'
              : grid == 2
                ? 'col-md-6'
                : 'col-12'
              } items web wow fadeInUp`} data-wow-delay=".4s">
              <div className="item-img">
                <Link className="imago wow" href="/project-details2/project-details2-dark">
                  <img src="/img/portfolio/ql/2.webp" alt="dotnet-image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6>DotNet Full Stack</h6>
                <span>
                  <Link href="#0">Design</Link>,
                  <Link href="#0">DotNet</Link>
                </span>
              </div>
            </div>

            <div className={`${grid == 3
              ? 'col-lg-4 col-md-6'
              : grid == 2
                ? 'col-md-6'
                : 'col-12'
              } items brand wow fadeInUp`} data-wow-delay=".4s">
              <div className="item-img">
                <Link className="imago wow" href="/project-details2/project-details2-dark">
                  <img src="/img/portfolio/ql/3.webp" alt="Nodejs-image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6>NodeJS Full Stack</h6>
                <span>
                  <Link href="#0">Node</Link>,
                  <Link href="#0">JS</Link>
                </span>
              </div>
            </div>

            <div className={`${grid == 3
              ? 'col-lg-4 col-md-6'
              : grid == 2
                ? 'col-md-6'
                : 'col-12'
              } items graphic wow fadeInUp`} data-wow-delay=".4s">
              <div className="item-img">
                <Link className="imago wow" href="/project-details2/project-details2-dark">
                  <img src="/img/portfolio/ql/4.webp" alt="Data science image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6>Data science Solutions</h6 >
                <span>
                  <Link href="#">Python</Link>,
                  <Link href="#">Data Science</Link>
                </span>
              </div>
            </div>

            <div className={`${grid == 3
              ? 'col-lg-4 col-md-6'
              : grid == 2
                ? 'col-md-6'
                : 'col-12'
              } items web wow fadeInUp`} data-wow-delay=".4s">
              <div className="item-img">
                <Link className="imago wow" href="/project-details2/project-details2-dark">
                  <img src="/img/portfolio/ql/5.webp" alt="aws image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6>AWS Solutions</h6>
                <span>
                  <Link href="#0">AWS</Link>,
                  <Link href="#0">Platform</Link>
                </span>
              </div>
            </div>

            <div className={`${grid == 3
              ? 'col-lg-4 col-md-6'
              : grid == 2
                ? 'col-md-6'
                : 'col-12'
              } items brand wow fadeInUp`} data-wow-delay=".4s">
              <div className="item-img">
                <Link className="imago wow" href="/project-details2/project-details2-dark">
                  <img src="/img/portfolio/ql/6.webp" alt="azure image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6>Azure Solutions</h6>
                <span>
                  <a href="#0">Design</a>,
                  <a href="#0">Microsoft</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio