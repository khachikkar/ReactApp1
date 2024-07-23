import Stat from "../Stats/Stat";
import "./Hero.css";
import fimage from "/Users/khachkarapetyan/Desktop/skills/src/img/fone.jpeg";
import React from "react";
import { memo } from "react";

export default memo( function Hero() {
  return (
    <section className="hero">

      <div className="heroCont">
      <div className="blurgrad" />
        {/* lefts side*/}
        <div className="hero-left">
          <div className="hero-title">
            <h1>
              <div className="circle" />
              Find Your <br />
              Dream Home here!
            </h1>
          </div>
          <div className="hero-desc">
            <span>Just find your dream and enjoy</span>
            <span>Configure and start uncover things</span>
          </div>
          <div className="search-bar">
            <input
              className="Input"
              type="text"
              placeholder="Find your dream..."
            />
            <button className="primaryButton">Search</button>
          </div>

          <div className="stats">
            <Stat start={300} end={470} name={"Home"} />
            <Stat start={4900} end={5000} name={"Images"} />
            <Stat start={500} end={580} name={"Daily Users"} />
          </div>
        </div>

        {/* Riught side*/}
        <div className="hero-right">
          <div className="imgCont">
            <img src={fimage} alt="img"></img>
          </div>
        </div>
      </div>
    </section>
  );
}
)
