"use client";
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
                We craft innovative strategies, exceptional designs, &amp;
                high-quality development solutions.
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 items md-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-monitor"></i>
              </span>
              <h5>UI/UX & Brand Identity</h5>
              <p>
                Designs that pop, engage & convert Sleek, modern & intuitive
                digital experiences
              </p>
              <Link href="javascript:void(0)" className="more-stroke">
                <span></span>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 items active md-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-bolt-outline"></i>
              </span>
              <h5>Mobile App Magic (iOS & Android)</h5>
              <p>
                High-performance native & hybrid apps Custom integrations for
                seamless user experience
              </p>
              <Link href="javascript:void(0)" className="more-stroke">
                <span></span>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 items sm-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-cube"></i>
              </span>
              <h5>Web Development & Design</h5>
              <p>
                Pixel-perfect, high-speed, and mobile-optimized websites From
                custom builds to Shopify, WordPress & beyond.
              </p>
              <Link href="javascript:void(0)" className="more-stroke">
                <span></span>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 items">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-color-wand"></i>
              </span>
              <h5>Tech & AI Solutions</h5>
              <p>
                Future-proof custom software & AI-driven automation Data-powered
                analytics & cloud-based innovations.
              </p>
              <Link href="javascript:void(0)" className="more-stroke">
                <span></span>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 items">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-bolt-outline"></i>
              </span>
              <h5>E-Commerce Excellence</h5>
              <p>
                Conversion-driven online stores Smooth, secure, and scalable
                platforms.
              </p>
              <Link href="javascript:void(0)" className="more-stroke">
                <span></span>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 items">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-monitor"></i>
              </span>
              <h5>Social Media & Digital Marketing</h5>
              <p>
                High-impact SEO, PPC & viral content strategies Growth hacking
                for max engagement & brand domination.
              </p>
              <Link href="javascript:void(0)" className="more-stroke">
                <span></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services3;
