import React from "react";
import Image from "../../assets/images/bannerImg.png";

function Banner() {
  return (
    <main className="main">
      <section className="banner">
        <img src={Image} alt="banner img" className="banner__image" />
        <div className="container">
          <div className="banner__container">
            <div className="banner__info">
              <h1 className="banner__title">
                Your Law College name Building a Centre of excellence in Legal
                Education
              </h1>
              <p className="banner__text">
                Programmes Approved by Bar Council of Your Country
              </p>
              <button className="banner__btn">Enroll Now</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Banner;
