import React from "react";
import './Header.css'

const Header = () => {
  const header = document.querySelector('header');

const handrescroll = () =>{
    let data = scrollY

    if(data >= 400)
    {
        header.style.position = 'fixed';
        header.style.top = 0;
    }
    else if(data == 0)
    {
        header.style.position = 'static';
    }
}

window.onscroll = handrescroll
  return (
    <>
      {/* header section start */}
      <header>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <a href="javascript:void(0)" className="logo">Paws & Play</a>
            <nav>
              <ul className="d-flex">
                <li>
                  <a href="javascript:void(0)">Service</a>
                </li>
                <li>
                  <a href="javascript:void(0)">About</a>
                </li>
                <li>
                  <a href="javascrip:void(0)">Gallery</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Team</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Contact</a>
                </li>
              </ul>
            </nav>
            <div>
              <a className="icon">
                <i className="fa-regular fa-moon" />
              </a>
              <a href="javascript:void(0)">
                <button className="btn">Book Now</button>
              </a>
            </div>
          </div>
        </div>
      </header>
      {/* header section end */}
    </>
  );
};

export default Header;
