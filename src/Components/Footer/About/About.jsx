import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="glass-card">
        <h1 className="title">Welcome to Reblify</h1>
        <p className="description">
          At <strong>Reblify</strong>, we redefine your shopping experience with trendsetting styles,
          unbeatable deals, and seamless service. Whether it's fashion, tech, or lifestyle —
          Reblify brings quality and affordability right to your doorstep.
        </p>
        <p className="description">
          Our mission is simple — to deliver joy with every product and earn your trust with every transaction.
          We believe in innovation, design, and delight — for everyone, everywhere.
        </p>
        <p className="signature">— Team Reblify</p>
      </div>
    </div>
  );
};

export default About;
