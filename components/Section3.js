import Wrapper from "../assets/wrappers/Section3";

const Section3 = () => {
  return (
    <Wrapper>
      <div className="section2">
        <div className="title-container">
          <div className="line-container">
            <h1 className="title">Our Dr.Wealthify Precision Treatment</h1>
            <div className="green-line"></div>
          </div>
          <p className="subtitle">
            Everyone’s metabolism is different. What’s most impactful for you is
            different from others.(what’s most impactful for someone else). Your
            whole-body personalized guidance about nutrition, activity, sleep,
            motivation etc.
          </p>
        </div>

        <h2 className="dark-title">
          Dr. Wealthify most recommended pack is 1-year golden plan with 3
          levels
        </h2>
        <div className="item-container">
          <div className="items">
            <h1 className="item-img">
              <p>Level 1</p>1
            </h1>
            <div className="item-text">
              <b>Normalize in </b> <br /> 3-4 months
            </div>
          </div>
          <div className="items">
            <h1 className="item-img">
              <p>Level 2</p>2
            </h1>
            <div className="item-text">
              <b>Heal in </b> <br /> 3-4 months
            </div>
          </div>
          <div className="items">
            <h1 className="item-img">
              <p>Level 3</p>3
            </h1>
            <div className="item-text">
              <b>Sustain in the next </b> <br /> 4-6 months
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Section3;
