import React from "react";
import Header from "./Header";
function Hero() {
  return (
    <>
      <Header />
      <section className="hero">
        <div className="hero-container">
          <div className="flex padding">
            <div className="hero-col-1 margin">
              <h2>
                Trello lets you work more collaboratively and get more done.
              </h2>
              <p>
                Trello’s boards, lists, and cards enable you to organize and
                prioritize your projects in a fun, flexible, and rewarding way.
              </p>
            </div>
            <div className="hero-col-2 margin">
              <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/308998dcb3ed5ab3d01217a4d24ffa03/hero-a.svg" />
            </div>
          </div>
          <div className="subscribe_letter padding">
            <input className="email" type="email" placeholder="Email"></input>
            <button className="btn"> sign-up its free</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
