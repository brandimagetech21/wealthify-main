import React, { useState } from "react";
import { faqData } from "../utils/faqData";
import Wrappers from "../assets/wrappers/Faqs.js";
import Image from "next/image";
import RightCheveron from "./RightCheveron";

const Faqs = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };
  return (
    <Wrappers>
      <div className="line-container">
        <h1 className="heading">Frequently Asked Questions</h1>
        <div className="green-line"></div>
      </div>
      {faqData.map((item, index) => {
        return (
          <div className="container" key={index}>
            <div className="question-container" onClick={() => toggle(index)}>
              <h4 className="question" key={index}>
                {item.question}
              </h4>
              {clicked !== index ? <RightCheveron /> : null}
            </div>
            {clicked === index ? (
              <div className="answer-container">
                <p className="answer">{item.answer}</p>
                <div className="downCheveron">
                  <RightCheveron />
                </div>
              </div>
            ) : null}
          </div>
        );
      })}
    </Wrappers>
  );
};

export default Faqs;
