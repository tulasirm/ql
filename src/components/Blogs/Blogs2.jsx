import React from "react";
import Link from "next/link";

const Blogs2 = () => {
  return (
    <section className="blog-list section-padding sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="head md-mb50">
              <h6 className="back-color">Get The Latest Metrics</h6>
              <h3>Our Leader Board Solutions</h3>
              <p>We provide metrics, observability, monitoring solutions to keep-up your business.</p>
              <Link href="/blog/blog-dark">
                <span>See all our Services</span>
              </Link>
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1">
            <div className="item wow fadeInUp" data-wow-delay=".3s">
              <div className="img valign">
                <img src="/img/blog/1.webp" alt="kibana image" height={50} width={50}/>
              </div>
              <div className="cont valign">
                <div>
                  <div className="info">
                    <Link href="/blog/blog-dark" className="date">
                      <span>
                        <i>Infra</i> Monitoring
                      </span>
                    </Link>
                    <span>/</span>
                    <Link href="/blog/blog-dark" className="tag">
                      <span>Grafana/Kibana</span>
                    </Link>
                  </div>
                  <h5>
                    <Link href="/blog-details/blog-details-dark">
                      Observability solutions for monitoring production systems, infra uptime using Grafan, ELK.
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="item wow fadeInUp" data-wow-delay=".5s">
              <div className="img valign">
                <img src="/img/blog/2.webp" alt="splunk image" height={50} width={50}/>
              </div>
              <div className="cont valign">
                <div>
                  <div className="info">
                    <Link href="/blog/blog-dark" className="date">
                      <span>
                        <i>API</i> Monitoring
                      </span>
                    </Link>
                    <span>/</span>
                    <Link href="/blog/blog-dark" className="tag">
                      <span>Splunk/Datadog</span>
                    </Link>
                  </div>
                  <h5>
                    <Link href="/blog-details/blog-details-dark">
                      API monitoring, error monitoring solutions like Splunk, Datadog, APM, Appdynamics..etc.
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="item wow fadeInUp" data-wow-delay=".3s">
              <div className="img valign">
                <img src="/img/blog/3.webp" alt="powerbi image" height={50} width={50}/>
              </div>
              <div className="cont valign">
                <div>
                  <div className="info">
                    <Link href="/blog/blog-dark" className="date">
                      <span>
                        <i>Delivey</i> Metrics
                      </span>
                    </Link>
                    <span>/</span>
                    <Link href="/blog/blog-dark" className="tag">
                      <span>PowerBI</span>
                    </Link>
                  </div>
                  <h5>
                    <Link href="/blog-details/blog-details-dark">
                      We build Leader board solutions for leaders to monitor Delivery, Finance control/quality metrics..etc.
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs2;
