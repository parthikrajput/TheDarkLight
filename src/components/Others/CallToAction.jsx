import React from 'react';
import Link from 'next/link';
//= Components
import Split from '@/components/Common/Split';

function CallToAction({ img }) {
  return (
    <section className="call-action section-padding sub-bg bg-img" style={{ backgroundImage: `url(${img ? img : "/img/patrn.svg"})` }}>
      <div className="container">
        <div className="row">
          <div className="col-md-9 col-lg-9">
            <div className="content sm-mb30">
              <Split>
                <h6 className="wow words chars splitting" data-splitting>Get in Touch with Us!</h6>
                <h2 className="wow words chars splitting" data-splitting>Grow Your Business <br /> <b className="back-color">with Our Expert Solutions</b>.</h2>
              </Split>
            </div>
          </div>

          <div className="col-md-3 col-lg-3 valign">
            <Link href={`/contact`} className="butn bord curve wow fadeInUp" data-wow-delay=".5s">
              <span>Get In Touch</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction