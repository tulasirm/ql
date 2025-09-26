'use client';
import React, { useEffect } from "react";
import Link from "next/link";
//= Scripts
import cardMouseEffect from "@/common/cardMouseEffect";

function Services3() {
  useEffect(() => {
    cardMouseEffect(document.querySelectorAll(".feat .items"));
  }, []);

  return (
    <section className="feat sub-bg section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Best Services
              </h6>
              <h3 className="wow color-font">
                We help to create strategies, design &amp; development.
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 items md-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-cloud"></i>
              </span>
              <h5>Cloud Migration</h5>
              <p>
                Comprehensive cloud transformation services including AWS, Azure, and multi-cloud architectures with zero-downtime migration.
              </p>
              <Link href="/services/cloud-migration" className="more-stroke">
                <span></span>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items active md-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-cog"></i>
              </span>
              <h5>DevOps Automation</h5>
              <p>
                End-to-end CI/CD pipeline implementation, infrastructure as code, and automated deployment solutions for faster releases.
              </p>
              <Link href="/services/devops-automation" className="more-stroke">
                <span></span>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items sm-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-analytics"></i>
              </span>
              <h5>AI/ML Solutions</h5>
              <p>
                Custom machine learning models, AI-powered analytics, and intelligent automation solutions for data-driven insights.
              </p>
              <Link href="/services/ai-ml-solutions" className="more-stroke">
                <span></span>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-locked"></i>
              </span>
              <h5>Cybersecurity</h5>
              <p>
                Enterprise security solutions including threat assessment, compliance automation, and zero-trust architecture implementation.
              </p>
              <Link href="/services/cybersecurity" className="more-stroke">
                <span></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services3;
