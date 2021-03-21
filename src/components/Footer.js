import React from "react";
import {animateScroll} from "react-scroll";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowAltCircleUp} from "@fortawesome/free-solid-svg-icons";
import "../styles/Footer.css";

const Footer = () => {
  const handleScrollToTop = () => {
    animateScroll.scrollToTop();
  };
  return (
    <div className="footer">
      <p className="footer-p">
        Created by{" "}
        <a href="https://github.com/jbram-js" target="_blank" className="bram">
          Bram
        </a>
      </p>

      <span className="scroll-button" onClick={() => handleScrollToTop()}>
        <FontAwesomeIcon icon={faArrowAltCircleUp} />
      </span>
    </div>
  );
};

export default Footer;
