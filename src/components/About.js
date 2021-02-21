import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about">
      <p>
        Bury Bump Buddies is a new service that helps those that are pregnant
        and recently new mums make sense of pregnancy and being a first-time
        mum. The covid-19 pandemic has changed daily life as we know it,
        especially for those that are pregnant for the first time. Bury Bump
        Buddies are here to offer help and support and bring back some normality
        to the pregnancy journey.
        <br></br>
      </p>
      <p>
        We also offer little boxes of hope to all mums. A little box of hope is
        a gift from Bury Bump Buddies to you to say hi and reassure you that we
        are here to help throughout the journey. Each box will contain a letter
        of hope from another mum to you and a few little treats. Boxes are
        available on a referral or self-referral basis. Please fill out the
        referral form through our contact page.
      </p>
      <ul className="about-list">
        <li className="about-list-item">
          Information on pregnancy, labour and the journey of becoming a
          first-time mum
        </li>
        <li className="about-list-item">Breast feeding advice</li>
        <li className="about-list-item">
          Support you at antenatal appointments*
        </li>
        <li className="about-list-item">
          We can help set up a buddy to ensure someone is there for you
        </li>
        <li className="about-list-item">
          Offer advice on benefits and housing
        </li>
        <li className="about-list-item">
          Ensure you know what available support and organistions there are in
          the local community
        </li>
        <li className="about-list-item">
          A friendly ear if things get too much
        </li>
      </ul>
      <p>*Covid-19 restrictions dependant</p>
    </div>
  );
};

export default About;
