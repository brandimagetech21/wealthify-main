import React from "react";
import Wrappers from "../assets/wrappers/ReversalQuestion";

const ReversalQuestion = () => {
  return (
    <Wrappers>
      <div className="container">
        <h1 className="heading">Predict My Reversal Data</h1>
        <div className="qa">
          <div className="question">How do you identify</div>
          <p className="answer">Male/Female</p>
        </div>
        <div className="qa">
          <div className="question"> How old are you? </div>
          <p className="answer">
            18-29 years, 30-39 years, 40-49 years, 50-59 years, 60 years +.
          </p>
        </div>
        <div className="qa">
          <div className="question">3. How much do you weigh?</div>
          <p className="answer">
            Less than 60 kgs, 61-70 kg, 71-80 kgs, 81-90 kgs, 90+ kgs.
          </p>
        </div>
        <div className="qa">
          <div className="question">
            4. How many diabetes medicines do you take daily?
          </div>
          <p className="answer">None, 1-2, 3-4, 5-6, 7+.</p>
        </div>
        <div className="qa">
          <div className="question">
            5. How many hours do you sleep in night?
          </div>
          <p className="answer">
            Less than 5 hrs, 5-6 hrs, 6-7 hrs, 7-8 hrs, 8 plus hrs.
          </p>
        </div>
        <div className="qa">
          <div className="question">6. Do you know your latest HbA1c?</div>
          <p className="answer">
            {" "}
            I don’t remember, less than 5.5, 5.5-6.5, 7.0-8.5, 8.5- 10.5, 10.5
            plus.
          </p>
        </div>
      </div>
    </Wrappers>
  );
};

export default ReversalQuestion;
