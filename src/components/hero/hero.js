import HeaderNav from "../header/header";
import "./hero.css";

import Hero_image_back from '../../assets/hero_image_back.png'
import Hero_image from '../../assets/hero_image.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'


function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        {/* hero nav */}
        <HeaderNav />
        {/* hero best add */}
        <div className="the-best-ad">
          <div></div>
          <span>The best fitness club in the town</span>
        </div>
        {/* hero heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>ideal body</span>
          </div>

          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live on your life to fullest
            </span>
          </div>
        </div>
        {/* figures */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>with expert coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started </button>
          <button className="btn">Learn more</button>
        </div>
      </div>
      {/* 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 */}
      {/* hero right */}
      <div className="hero-right">


        <button className="btn"> Join Now</button>
        <div className="heart-rate">
            <img src={Heart}/>
            <span>Heart rate</span>
            <span>116 bpm</span>
        </div>
        {/* <img src={Hero_image}/> */}
         {/* <img src={Hero_image_back}/> */}
      </div>
    </div>
  );
}

export default Hero;
