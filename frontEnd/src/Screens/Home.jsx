import React from 'react';
import Header from '../Components/Header.jsx';

const Home = () => {
  return (
    <div className="background_area">
      <div className="bg-box">
        <img src="src/assets/images/hero-bg.jpg" alt="" />
      </div>
      <Header />
      <div className="slider_section">
        <div className="container">
          <div className="col-md-7 col-lg-6">
            <div className="detail-box">
             
              <p className='font'>
              the app that turns your cravings into doorstep delights! With just a few taps, savor the magic of having your favorite flavors delivered right to you. No more waiting or wondering what's for dinner – Take away brings the best tastes straight to your doorstep. 🌮🚀📱
              </p>
              <div className="btn-box">
                <a href="/logIn" className="btn1">
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
