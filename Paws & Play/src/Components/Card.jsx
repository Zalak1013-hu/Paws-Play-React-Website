import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <>
      {/* Services section start */}
      <section className="service py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="service-content">
                <h2>Our Services</h2>
                <p>Everything your pet needs for a happy, healthy life</p>
              </div>
            </div>
          </div>

          <div className="row py-5 gap-1">
            <div className="col-4">
              <div className="card">
                <div className="card-img">
                  <img
                    src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=600&h=400&fit=crop"
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <h3>Full Grooming</h3>
                  <p>
                    Complete grooming package including
                    <br /> bath, haircut, nail trim, ear cleaning, and
                    <br /> teeth brushing.
                  </p>
                  <ul className="pt-3">
                    <li>
                      <span>
                        <i class="fa-solid fa-check"></i> Bath & blow dry
                      </span>
                    </li>
                    <li>
                      <span>
                        <i class="fa-solid fa-check"></i> Breed-specific haircut
                      </span>
                    </li>
                    <li>
                      <span>
                        <i class="fa-solid fa-check"></i> Nail trim
                      </span>
                    </li>
                  </ul>
                  <strong>Duration: 2-3 hours</strong>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="card">
                <div className="card-img">
                  <img
                    src="https://images.unsplash.com/photo-1581888227599-779811939961?w=600&h=400&fit=crop"
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <h3>Bath & Brush</h3>
                  <p>
                    Refreshing bath with premium shampoo, blow dry, and thorough
                    brushing to keep coat healthy.
                  </p>
                  <ul className="pt-3">
                    <li>
                      <span>
                        <i class="fa-solid fa-check"></i> Premium shampoo
                      </span>
                    </li>
                    <li>
                      <span>
                        <i class="fa-solid fa-check"></i> Conditioning treatment
                      </span>
                    </li>
                    <li>
                      <span>
                        <i class="fa-solid fa-check"></i> Blow dry
                      </span>
                    </li>
                  </ul>
                  <strong>Duration: 1 hour</strong>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="card">
                <div className="card-img">
                  <img
                    src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=400&fit=crop"
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <h3>Daycare</h3>
                  <p>
                    Safe, supervised playtime with other
                    <br /> dogs in our climate-controlled facility
                    <br /> with indoor/outdoor areas.
                  </p>
                  <ul className="pt-3">
                    <li>
                      <span>
                        <i class="fa-solid fa-check"></i> Supervised play groups
                      </span>
                    </li>
                    <li>
                      <span>
                        <i class="fa-solid fa-check"></i> Indoor/outdoor areas
                      </span>
                    </li>
                    <li>
                      <span>
                        <i class="fa-solid fa-check"></i> Naptime rest periods
                      </span>
                    </li>
                  </ul>
                  <strong>Duration: 1 hours</strong>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="card">
                <div className="card-img">
                  <img
                    src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop"
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <h3>Overnight Boarding</h3>
                  <p>
                    Comfortable overnight stays with cozy bedding, multiple play
                    sessions, and lots of love.
                  </p>
                  <ul className="pt-3">
                    <li>
                      <span>
                        <i class="fa-solid fa-check"></i> Private suites
                        available
                      </span>
                    </li>
                    <li>
                      <span>
                        <i class="fa-solid fa-check"></i> Evening cuddle time
                      </span>
                    </li>
                    <li>
                      <span>
                        <i class="fa-solid fa-check"></i> 3+ play sessions daily
                      </span>
                    </li>
                  </ul>
                  <strong>Duration: 2-3 hours</strong>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="card">
                <div className="card-img">
                  <img
                    src="https://images.unsplash.com/photo-1591946614720-90a587da4a36?w=600&h=400&fit=crop"
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <h3>Nail Trim</h3>
                  <p>
                    Quick and stress-free nail trimming by experienced groomers
                    using gentle handling techniques.
                  </p>
                  <ul className="pt-3">
                    <li>
                      <span>
                        <i class="fa-solid fa-check"></i> Gentle handling
                      </span>
                    </li>
                    <li>
                      <span>
                        <i class="fa-solid fa-check"></i> Dremel smoothing
                      </span>
                    </li>
                    <li>
                      <span>
                        <i class="fa-solid fa-check"></i> Paw pad check
                      </span>
                    </li>
                  </ul>
                  <strong>Duration: 15 min</strong>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="card">
                <div className="card-img">
                  <img
                    src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop"
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <h3>Puppy Package</h3>
                  <p>
                    Special first grooming experience<br/> designed to make puppies
                    comfortable<br/> with the grooming processg.
                  </p>
                  <ul className="pt-3">
                    <li>
                      <span>
                        <i class="fa-solid fa-check"></i> Gentle introduction
                      </span>
                    </li>
                    <li>
                      <span>
                        <i class="fa-solid fa-check"></i> Mini bath
                      </span>
                    </li>
                    <li>
                      <span>
                        <i class="fa-solid fa-check"></i> Face trim
                      </span>
                    </li>
                  </ul>
                  <strong>Duration: 1 hours</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services section end */}
    </>
  );
};

export default Card;
