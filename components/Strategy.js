import Image from "next/image";
import Wrapper from "../assets/wrappers/Strategy";
import physician from "../assets/image/physician.svg";
import coach from "../assets/image/coach.svg";
import phone from "../assets/image/phone.svg";
import food from "../assets/image/food.svg";
const Strategy = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="line-container">
          <h1 className="title">Our Strategy</h1>
          <div className="green-line" style={{ width: "100px" }}></div>
        </div>
        <div className="items-container">
          <div className="item">
            <div className="item-img">
              <Image src={physician}></Image>
            </div>
            <h4 className="item-title">Physician Supervision</h4>
            <p className="item-subtitle">
              An Allopathy doctor will diagnose your issues through blood
              reports and counsel you throughout the duration of the program.
            </p>
          </div>
          <div className="item">
            <div className="item-img">
              <Image src={coach}></Image>
            </div>
            <h4 className="item-title">Personal Health Coach</h4>
            <p className="item-subtitle">
              An expert nutritionist will personally guide you in making gradual
              but sustainable changes in your lifestyle and dietary habits
            </p>
          </div>
          <div className="item">
            <div className="item-img">
              <Image src={phone}></Image>
            </div>
            <h4 className="item-title">Pocket Clinic</h4>
            <p className="item-subtitle">
              Get on-the-spot advice anytime you want through our easy-to-use
              web application
            </p>
          </div>
          <div className="item">
            <div className="item-img">
              <Image src={food}></Image>
            </div>
            <h4 className="item-title">Nutrient Dense Foods</h4>
            <p className="item-subtitle">
              An exciting range of protein and fibre rich food products that
              will help you in your fitness journey
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Strategy;
