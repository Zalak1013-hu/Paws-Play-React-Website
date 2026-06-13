import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      {/* hero section start */}
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="hero-content">
                <h1>
                  Where Every Pet
                  <br /> Gets the Royal
                  <br /> Treatment
                </h1>
                <p>
                  Professional grooming, loving daycare, and comfortable
                  <br />
                  boarding for your furry family members. Because they deserve
                  <br />
                  the best.
                </p>
                <button className="btn1">
                  <a href="javascript:void(0)">Book an Appointment</a>
                </button>
                <button className="btn2">
                  <a href="javascript:void(0)">View Service</a>
                </button>
              </div>
            </div>
            <div className="col-6">
              <div className="hero-img">
                <img
                  src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=800&fit=crop"
                  alt
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* hero section end */}
    </>
  );
};

export default Hero;
