import axios from "axios";
import React, { useEffect } from "react";
import Wrappers from "../assets/wrappers/Membership";
import { useAppcontext } from "../context/appContext";
import MembershipCard from "./MembershipCard";
const Membership = () => {
  const { subscriptionPlan, planDetails, subscriptionPlanCount } =
    useAppcontext();
  if (!subscriptionPlanCount) {
    return (
      <Wrappers>
        <div className="container">
          <p className="title tac">Current Subscription</p>
          <p className="title tal">Membership Upgrade</p>
          <div className="plans basic">
            <p className="sub-title">BASIC PLAN</p>
            <div className="plans-container">
              <MembershipCard
                price={"2120"}
                planType={"basic_plan"}
                planId={"1"}
                month={"1 Months"}
                calls={"3 CALLS"}
                dietChart={"3 DIET CHART/ MONTH"}
                buttonType={"Buy"}
              />
              <MembershipCard
                price={"5,003.2"}
                planType={"basic_plan"}
                planId={"2"}
                month={"2 Months"}
                calls={"3 CALLS"}
                dietChart={"3 DIET CHART/ MONTH"}
                buttonType={"Buy"}
              />
              <MembershipCard
                price={"7,504.8"}
                planType={"basic_plan"}
                planId={"3"}
                month={"3 Months"}
                calls={"3 CALLS"}
                dietChart={"3 DIET CHART/ MONTH"}
                buttonType={"Buy"}
              />
            </div>
          </div>
          <div className="plans basic">
            <p className="sub-title">PREMIUM PLAN</p>
            <div className="plans-container">
              <MembershipCard
                price={"11,800"}
                planType={"premium_plan"}
                planId={"1"}
                month={"1 Months"}
                calls={"3 CALLS"}
                dietChart={"3 DIET CHART/ MONTH"}
                modification={"Personal Modification"}
                dietitian={"1 - Dietitian"}
                personalFitness={"1 - Personal Fitness Trainer"}
                buttonType={"Buy"}
              />
              <MembershipCard
                price={"23,600"}
                planType={"premium_plan"}
                planId={"2"}
                month={"2 Months"}
                calls={"3 CALLS"}
                dietChart={"3 DIET CHART/ MONTH"}
                modification={"Personal Modification"}
                dietitian={"1 - Dietitian"}
                personalFitness={"1 - Personal Fitness Trainer"}
                buttonType={"Buy"}
              />
              <MembershipCard
                price={"35,400"}
                planType={"premium_plan"}
                planId={"3"}
                month={"2 Months"}
                calls={"3 CALLS"}
                dietChart={"3 DIET CHART/ MONTH"}
                modification={"Personal Modification"}
                dietitian={"1 - Dietitian"}
                personalFitness={"1 - Personal Fitness Trainer"}
                buttonType={"Buy"}
              />
            </div>
          </div>
          <div className="plans basic">
            <p className="sub-title">GOLDEN PLAN</p>
            <div className="plans-container">
              <MembershipCard
                price={"5003.2"}
                planType={"golden_plan"}
                planId={"1"}
                month={"2 Months"}
                calls={"3 CALLS"}
                dietChart={"3 DIET CHART/ MONTH"}
                buttonType={"Buy"}
              />
              <MembershipCard
                price={"5003.2"}
                planType={"golden_plan"}
                month={"2 Months"}
                calls={"3 CALLS"}
                dietChart={"3 DIET CHART/ MONTH"}
                buttonType={"Buy"}
              />
            </div>
          </div>
        </div>
      </Wrappers>
    );
  }
  const obj = planDetails.plan_details[0];

  const { plan_id, period, calls, diet_chart, gst, price_with_gst } =
    planDetails.plan_details[0];
  // const { plan_type, s_no } = subscriptionPlan;
  return (
    <Wrappers>
      <div className="container">
        <p className="title tac">Current Subscription</p>
        {subscriptionPlanCount ? (
          <div className="first-container">
            <h1 className="weeks"> {subscriptionPlan.plan_type}</h1>
            <ul className="list">
              <li>Validate For {period} </li>
              <li>Include Personal Trainer</li>
              <li>
                Diet Chart {diet_chart}
                <br />
              </li>
              <li> calls : {calls} calls </li>
            </ul>
          </div>
        ) : null}
        <p className="title tal">Membership Upgrade</p>
        <div className="plans basic">
          <p className="sub-title">BASIC PLAN</p>
          <div className="plans-container">
            <MembershipCard
              price={"2120"}
              planType={"basic_plan"}
              planId={"1"}
              month={"1 Months"}
              calls={"3 CALLS"}
              dietChart={"3 DIET CHART/ MONTH"}
              buttonType={"Upgrade"}
            />
            <MembershipCard
              price={"5,003.2"}
              planType={"basic_plan"}
              planId={"2"}
              month={"2 Months"}
              calls={"3 CALLS"}
              dietChart={"3 DIET CHART/ MONTH"}
              buttonType={"Upgrade"}
            />
            <MembershipCard
              price={"7,504.8"}
              planType={"basic_plan"}
              planId={"3"}
              month={"3 Months"}
              calls={"3 CALLS"}
              dietChart={"3 DIET CHART/ MONTH"}
              buttonType={"Upgrade"}
            />
          </div>
        </div>
        <div className="plans basic">
          <p className="sub-title">PREMIUM PLAN</p>
          <div className="plans-container">
            <MembershipCard
              price={"11,800"}
              planType={"premium_plan"}
              planId={"1"}
              month={"1 Months"}
              calls={"3 CALLS"}
              dietChart={"3 DIET CHART/ MONTH"}
              modification={"Personal Modification"}
              dietitian={"1 - Dietitian"}
              personalFitness={"1 - Personal Fitness Trainer"}
              buttonType={"Upgrade"}
            />
            <MembershipCard
              price={"23,600"}
              planType={"premium_plan"}
              planId={"2"}
              month={"2 Months"}
              calls={"3 CALLS"}
              dietChart={"3 DIET CHART/ MONTH"}
              modification={"Personal Modification"}
              dietitian={"1 - Dietitian"}
              personalFitness={"1 - Personal Fitness Trainer"}
              buttonType={"Upgrade"}
            />
            <MembershipCard
              price={"35,400"}
              planType={"premium_plan"}
              planId={"3"}
              month={"2 Months"}
              calls={"3 CALLS"}
              dietChart={"3 DIET CHART/ MONTH"}
              modification={"Personal Modification"}
              dietitian={"1 - Dietitian"}
              personalFitness={"1 - Personal Fitness Trainer"}
              buttonType={"Upgrade"}
            />
          </div>
        </div>
        <div className="plans basic">
          <p className="sub-title">GOLDEN PLAN</p>
          <div className="plans-container">
            <MembershipCard
              price={"5003.2"}
              planType={"golden_plan"}
              planId={"1"}
              month={"2 Months"}
              calls={"3 CALLS"}
              dietChart={"3 DIET CHART/ MONTH"}
              buttonType={"Upgrade"}
            />
            <MembershipCard
              price={"5003.2"}
              planType={"golden_plan"}
              month={"2 Months"}
              calls={"3 CALLS"}
              dietChart={"3 DIET CHART/ MONTH"}
              buttonType={"Upgrade"}
            />
          </div>
        </div>
      </div>
    </Wrappers>
  );
};

export default Membership;
