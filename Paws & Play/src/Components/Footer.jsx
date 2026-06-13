import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      {/* Footer section start */}
      <footer>
        <section className="footer py-5">
          <div className="container">
            <div className="row">
              <div className="col-3">
                <div className="footer-content">
                  <a href="">Paws & Play</a>
                  <p>
                    Premium pet grooming, daycare, and boarding services in
                    Austin, TX. Loving care for your furry family members since
                    2015.
                  </p>
                </div>
                <div className="footer-icon">
                  <a href="" className="icon1">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                  <a href="" className="icon2">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                  <a href="" className="icon3">
                    <i class="fa-brands fa-tiktok"></i>
                  </a>
                </div>
              </div>

              <div className="col-3">
                <h2>Services</h2>
                <ul>
                  <li>
                    <a href="">Grooming</a>
                  </li>
                  <li>
                    <a href="">Daycare</a>
                  </li>
                  <li>
                    <a href="">Boarding</a>
                  </li>
                  <li>
                    <a href="">Pricing</a>
                  </li>
                </ul>
              </div>

              <div className="col-3">
                <h2>Company</h2>
                <ul>
                  <li>
                    <a href="">About Us</a>
                  </li>
                  <li>
                    <a href="">Our Team</a>
                  </li>
                  <li>
                    <a href="">Gallery</a>
                  </li>
                  <li>
                    <a href="">Contact</a>
                  </li>
                </ul>
              </div>

              <div className="col-3">
                <h2>Support</h2>
                <ul>
                  <li>
                    <a href="">FAQs</a>
                  </li>
                  <li>
                    <a href="">New Client Info</a>
                  </li>
                  <li>
                    <a href="">Vaccination Policy</a>
                  </li>
                  <li>
                    <a href="">Cancellation Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <hr />

            <div className="row">
              <div className="col-4">
                <h4>Hours</h4>
                <p>Mon-Fri: 7:00 AM - 7:00 PM</p>
                <p>Saturday: 8:00 AM - 6:00 PM</p>
                <p>Sunday: 9:00 AM - 5:00 PM</p>
              </div>

              <div className="col-4">
                <h4>Contact</h4>
                <p>hello@pawsandplay.com</p>
                <p>(555) 728-7529</p>
              </div>

              <div className="col-4">
                <h4>Location</h4>
                <p>456 Pet Paradise Lane</p>
                <p>Austin, TX 78701</p>
              </div>
            </div>
          </div>
        </section>
      </footer>
      {/* Footer section end */}
    </>
  );
};

export default Footer;
