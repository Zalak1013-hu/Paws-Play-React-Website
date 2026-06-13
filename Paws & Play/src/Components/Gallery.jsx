import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <>
      {/* Gallery section start */}
      <section className="gallery">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Happy Pets Gallery</h3>
              <p>See our furry friends looking their best</p>
            </div>
          </div>

          <div className="row">
            <div className="col-3">
              <div className="gallery-img">
                <img
                  src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=600&fit=crop"
                  alt=""
                />
              </div>
            </div>

             <div className="col-3">
              <div className="gallery-img">
                <img
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=600&fit=crop"
                  alt=""
                />
              </div>
            </div>

            <div className="col-3">
              <div className="gallery-img">
                <img
                  src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&h=600&fit=crop"
                  alt=""
                />
              </div>
            </div>

            <div className="col-3">
              <div className="gallery-img">
                <img
                  src="https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=600&h=600&fit=crop"
                  alt=""
                />
              </div>
            </div>

            <div className="col-3">
              <div className="gallery-img">
                <img
                  src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=600&fit=crop"
                  alt=""
                />
              </div>
            </div>

            <div className="col-3">
              <div className="gallery-img">
                <img
                  src="https://images.unsplash.com/photo-1534361960057-19889db9621e?w=600&h=600&fit=crop"
                  alt=""
                />
              </div>
            </div>

            <div className="col-3">
              <div className="gallery-img">
                <img
                  src="https://images.unsplash.com/photo-1544568100-847a948585b9?w=600&h=600&fit=crop"
                  alt=""
                />
              </div>
            </div>

            <div className="col-3">
              <div className="gallery-img">
                <img
                  src="https://images.unsplash.com/photo-1560807707-8cc77767d783?w=600&h=600&fit=crop"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Gallery section end */}
    </>
  );
};

export default Gallery;
