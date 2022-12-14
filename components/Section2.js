import Image from "next/image";

// images
import smileTick from "../assets/image/smileTick.svg";
import handTablets from "../assets/image/handTablets.svg";
import syringe from "../assets/image/syringe.svg";
import arms from "../assets/image/arms.svg";
import Wrapper from "../assets/wrappers/Section2.js";
const Section2 = () => {
  return (
    <Wrapper>
      <div className="section2">
        {/* <Image src={smileTick} />
      <Image src={handTablets} />
      <Image src={syringe} />
      <Image src={arms} /> */}
        <div className="title-container">
          <div className="line-container">
            <h1 className="title">Results For Itself</h1>
            <div className="green-line"></div>
          </div>
          <p className="subtitle">
            Free From Diabetes Join The Dr.Wealthify Family To Become
          </p>
        </div>
        <div className="item-container">
          <div className="items">
            <div className="item-img">
              <Image src={smileTick} width="100px" height="100px" />
            </div>
            <p className="item-text">
              {" "}
              <b>99%</b> Symptoms Free
            </p>
          </div>
          <div className="items">
            <div className="item-img">
              <Image src={handTablets} width="100px" height="100px" />
            </div>
            <p className="item-text">
              {" "}
              <b>100%</b> Stopped Medication
            </p>
          </div>
          <div className="items">
            <div className="item-img">
              <Image src={syringe} width="100px" height="100px" />
            </div>
            <p className="item-text">
              <b>100%</b> Eliminated <br /> Insulin Completly
            </p>
          </div>
          <div className="items">
            <div className="item-img">
              <Image src={arms} width="100px" height="100px" />
            </div>
            <p className="item-text">
              {" "}
              <b>100%</b> Improved <br />
              their Metabolic Health
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Section2;
