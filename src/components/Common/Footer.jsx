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
                    <h6>Officeal Address</h6>
                    <p>302, Sai Vihar Jayesh colony, fategunj, Vadodara -390002</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>support@thedarklight.in</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <p>+91 70160 86077</p>
                    <p>+91 75673 16171</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 mobile-map">
            <div className="item md-mb50">
              <div className="title ">
                <h5>Location</h5>
              </div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14763.428668364373!2d73.188177!3d22.321241!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcf49f53eaaab%3A0x8d34a6d97e828f09!2sSai%20Vihar!5e0!3m2!1sen!2sin!4v1742639387134!5m2!1sen!2sin" width="100%" height="100%" loading="lazy" ></iframe>
              {/* <ul>
                <li>
                  <div className="img">
                    <a href="#">
                      <img src="/img/blog/1.jpg" alt="" />
                    </a>
                  </div>
                  <div className="sm-post">
                    <a href="#">
                      <p>
                        The Start-Up Ultimate Guide to Make Your WordPress
                        Journal.
                      </p>
                      <span className="date">14 sep 2023</span>
                    </a>
                  </div>
                </li> 
                <li>
                  <a className="nav-link" href={`/`}>
                    Home
                  </a>
                </li>
                <li>
                  <div className="subscribe">
                    <input type="text" placeholder="Type Your Email" />
                    <span className="subs pe-7s-paper-plane"></span>
                  </div>
                </li>
              </ul> */}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src="/img/logo.png" alt="logo" />
              </div>
              <div className="social">
                {/* <a href="#0" target='_blank' >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#0" target='_blank'>
                  <i className="fab fa-twitter"></i>
                </a> */}
                <a href="https://www.instagram.com/_the.darklight/?igsh=bzI2cXRhbmt2bGJ2&utm_source=qr" target='_blank'>
                  <i className="fab fa-instagram"></i>
                </a>
                {/* <a href="#0" target='_blank'>
                  <i className="fab fa-youtube"></i>
                </a> */}
                <a href="https://in.linkedin.com/company/the-darklight?trk=public_post_feed-actor-name" target='_blank'>
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
              <div className="copy-right">
                <p>
                  © 2025, The Dark Light.
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