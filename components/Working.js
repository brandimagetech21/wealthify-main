import Image from "next/image";
import Wrapper from "../assets/wrappers/Strategy";
import tummy from "../assets/image/tummy.svg";
import starving from "../assets/image/starving.svg";
import apple from "../assets/image/apple.svg";
import doctor from "../assets/image/food.svg";
const Working = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="line-container">
          <h1 className="title">How Dr.Wealthify works?</h1>
          <div className="green-line"></div>
        </div>
        <div className="items-container">
          <div className="item">
            <div className="item-img">
              <Image src={tummy}></Image>
            </div>
            <h4 className="item-title">Attacks the causes of obesity</h4>
            <p className="item-subtitle">
              Dr.Wealthify targets root causes of obesity, making you to lose
              weight efficiently
            </p>
          </div>
          <div className="item">
            <div className="item-img">
              <Image src={starving}></Image>
            </div>
            <h4 className="item-title">No starving</h4>
            <p className="item-subtitle">
              Eat your way into normalize metabolic and hormonal disorder.
            </p>
          </div>
          <div className="item">
            <div className="item-img">
              <Image src={apple}></Image>
            </div>
            <h4 className="item-title">Designed By expert nutritionist</h4>
            <p className="item-subtitle">
              Our team has come up with innovative recipes that will help you to
              keep away from metabolic and hormonal disorder
            </p>
          </div>
          <div className="item">
            <div className="item-img">
              <Image src={doctor}></Image>
            </div>
            <h4 className="item-title">Consult Expert Doctors</h4>
            <p className="item-subtitle">
              A carefully selected team of nutritionists and doctors with
              aproven track record of helping customers to improve metabolic and
              hormonal disorder.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Working;
