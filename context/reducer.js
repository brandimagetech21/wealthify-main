import {
  GETDATA_SUCCESS,
  GET_DOCTOR_ID_SUCCESS,
  GET_RECIPE_SUCESS,
  GET_SUBCRIPTION_BEGIN,
  POST_OTP_LOGIN_SUCCESS,
  SUBSCRIPTION_SUCCESS,
} from "./action";

const reducer = (state, action) => {
  if (action.type === POST_OTP_LOGIN_SUCCESS) {
    const { ph_num, referal_id, p_id, number_exist, doctorId, userType, otp } =
      action.payload;
    return {
      ...state,
      phoneNumber: ph_num,
      referalId: referal_id,
      patientId: p_id,
      numberExist: number_exist,
      otpValue: otp,
      doctorId: doctorId,
      userType,
      alertType: "success",
      alertText: "Enter your otp",
    };
  }

  if (action.type === GET_SUBCRIPTION_BEGIN) {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === SUBSCRIPTION_SUCCESS) {
    const { plan, planCount, planDetails } = action.payload;
    return {
      ...state,
      loading: false,
      planDetails,
      subscriptionPlanCount: planCount,
      subscriptionPlan: plan,
    };
  }
  if (action.type === GETDATA_SUCCESS) {
    const {
      sex,
      first_name,
      last_name,
      phone_number,
      dob,
      blood_group,
      age,
      height,
      current_weight,
      normal_weight,
      weight_6_month_ago,
    } = action.payload.data;
    return {
      ...state,
      sex: sex,
      firstName: first_name,
      lastName: last_name,
      phoneNumber: phone_number,
      dob: dob,
      bloodGroup: blood_group,
      age: age,
      height: height,
      currentWeight: current_weight,
      normalWeight: normal_weight,
      weight_6_month_ago,
    };
  }
  if (action.type === GET_DOCTOR_ID_SUCCESS) {
    console.log(action.payload);
    return {
      ...state,
      uniqueDoctorId: action.payload,
    };
  }
  if (action.type === "SET_AGREE") {
    return {
      ...state,
      agree: action.payload,
    };
  }
  if (action.type === "GET_TEST_REPORTS_SUCCESS") {
    return {
      ...state,
      imageData: action.payload.url,
    };
  }
  if (action.type === "GET_ARRAY_OF_OBJECT_SUCCESS") {
    return {
      ...state,
      details: action.payload,
    };
  }
  if (action.type === "GET_ADMIN_HOME_SUCCESS") {
    return {
      ...state,
      adminDetails: action.payload,
    };
  }
  if (action.type === "GET_RECIPE_SUCCESS") {
    return {
      ...state,
      recipeData: action.payload,
    };
  }
  // if ((action.type = "SET_QUERY_ID")) {
  //   return {
  //     ...state,
  //     queryId: action.payload,
  //   };
  // }
  if ((action.type = "GET_COMMON_DATA_SUCCESS")) {
    return {
      ...state,
      commonData: action.payload,
    };
  }
  //  code merge nutrition and recipe

  if (action.type === "GET_NUTRITION_SUCESS") {
    return {
      ...state,
      nutritionData: action.payload,
    };
  }
};
export default reducer;
