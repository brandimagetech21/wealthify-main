import Wrappers from "../assets/wrappers/Reversal";
import Image from "next/image";
import Link from "next/link";
const Reversal = () => {
  return (
    <Wrappers>
      <div className="title-container">
        <div className="line-container">
          <h2 className="title">Welcome To Our Reversal Journey</h2>
          <div className="green-line"></div>
        </div>
        <p className="subtitle">Answer this 6 question to Dr.Wealthify</p>
        <p className="dark-title">
          To Craft your personalized reversal plan to heal your damaged
          metabolism
        </p>
        <Link href={"/assessment"}>
          <p className="sub-dark-title">PREDECIT MY REVERSAL DATA</p>
        </Link>
      </div>
    </Wrappers>
  );
};

export default Reversal;
