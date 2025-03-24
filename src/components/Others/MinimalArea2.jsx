"use client";
import React, { useEffect } from "react";
import Link from "next/link";
//= Scripts
import thumparallaxDown from "@/common/thumparallaxDown";

function MinimalArea1() {
  useEffect(() => {
    thumparallaxDown();
  }, []);

  return (
    <section className="min-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/min-area.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <h4 className="color-font">Envision. Create. Achieve.</h4>
              <p className="wow txt words chars splitting" data-splitting>
                Our innovative creative agency is recognized among the best in
                the US. We craft intelligent solutions for both emerging
                start-ups and established brands. By following industry
                standards, we build impressive portfolios that redefine company
                branding.
              </p>
              <ul>
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  We provide free initial consultation and support.
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  Proudly collaborating with some of the most successful
                  businesses.
                </li>
              </ul>
              <Link
                href="/service"
                className="butn bord curve mt-40 wow fadeInUp"
                data-wow-delay=".8s"
              >
                <span>Discover</span>
              </Link>
              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MinimalArea1;
