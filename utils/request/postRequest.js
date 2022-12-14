import axios from "axios";
const headers = {
  "Content-Type": "application/json;charset=UTF-8",
  "Access-Control-Allow-Origin": "*",
};
export const postRequest = async (url, obj) => {
  console.log(obj);
  try {
    const { data } = await axios.post(
      `http://doctor.brandimagetech.com/${url}.php`,
      obj,
      headers
    );
  } catch (error) {
    console.log(error);
  }
};

export const getRequest = async (url, obj) => {
  try {
    const { data } = await axios.post(
      `http://doctor.brandimagetech.com/${url}.php`,
      obj,
      headers
    );
  } catch (error) {
    console.log(error);
  }
};
