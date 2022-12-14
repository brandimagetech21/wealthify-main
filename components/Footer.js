import Image from "next/image";
import React from "react";
import footerLogo from "../assets/image/footerLogo.svg";
import Wrappers from "../assets/wrappers/Footer.js";
import facebook from "../assets/image/facebook.svg";
import twitter from "../assets/image/twitter.svg";
import instagram from "../assets/image/instagram.svg";
import youtube from "../assets/image/youtube.png";
const Footer = () => {
  return (
    <Wrappers>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <div className="footerLogo">
                <Image src={footerLogo} />
              </div>
              <div id="follow">Follow Us</div>

              <div className="socialLinks">
                <a href="#">
                  <Image src={facebook} />
                </a>

                <a href="#">
                  <Image src={twitter} />
                </a>

                <a href="#">
                  <Image src={instagram} />
                </a>
                <a href="#">
                  <Image src={youtube} />
                </a>
              </div>
            </div>
            {/* <!-- <div className="algin-rectangle"> --> */}
            <div className="footer-rec">
              <div className="none rectangle"></div>
            </div>
            {/* <!-- </div> --> */}

            {/* <!--next col--> */}
            <div className="footer-col quick">
              {/* <!-- style="padding-left: 50px; padding-right: 50px" --> */}

              <p className="quick-links">Quick links</p>
              <div className="common">
                <div className="quicklinks">
                  <ul>
                    <a href="#">Home</a>
                  </ul>
                  <ul>
                    <a href="#">About Us</a>
                  </ul>
                  <ul>
                    <a href="#">Plan's</a>
                  </ul>
                </div>
                <div className="quicklinks2">
                  <ul>
                    <a href="#">Enroll Us</a>
                  </ul>
                  <ul>
                    <a href="#">Blog</a>
                  </ul>
                  <ul>
                    <a href="#">FAQ</a>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- rectangle--> */}
            <div className="footer-rec">
              <div className="rectangle"></div>
            </div>
            {/* <!--next col--> */}
            <div className="footer-col">
              <div className="footer-col-div contact-us">
                <span>Contact Us</span>
                <ul>
                  <ul>
                    Email: dr.wealthify@gmail.com<a href="#"></a>
                  </ul>

                  <ul>
                    Phone: +91 6383 6465 41<a href="#"></a>
                  </ul>
                </ul>
              </div>
            </div>
            {/* <!-- rectangle--> */}
            <div className="footer-rec">
              <div className="rectangle"></div>
            </div>
            {/* <!--next col--> */}
            <div className="footer-col location2">
              <div className="footer-col-div location">
                <span>Location</span>
                <ul>
                  <ul className="weight">HeadQuaters Address</ul>

                  <ul>
                    637/2 Vallalar Nagar, Pachal,
                    <br />
                    Tiruppatur District.
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="cc">
          <p className="cc-content">
            © 2022 &nbsp; | &nbsp; Privacy Policy &nbsp; | &nbsp; Terms of
            Service
          </p>
        </div>
      </footer>
    </Wrappers>
  );
};

export default Footer;
