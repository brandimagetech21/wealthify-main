import styled from "styled-components";

const Wrappers = styled.div`
  margin-top: 5rem;
  @import url("https://fonts.googleapis.com/css2?family=poppins&display=swap");

  body {
    font-family: "poppins";
    background-color: #fafafa;
  }
  .weekRecipe {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-left: 100px;
    margin-right: 80px;
  }

  .weekRecipe .tag {
    color: green;
    font-size: 20px;
  }

  .weekRecipe span,
  .trendingRecipe span {
    font-size: 30;
  }
  .weekRecipe .details,
  .trendingRecipe .details {
    font-size: 20;
    color: gray;
  }

  .weekRecipe button,
  .trendingRecipe button {
    text-align: center;
    justify-content: center;
    background-color: green;
    border: none;
    border-radius: 8px;
    width: 230px;
    height: 59px;
    color: white;
    margin-top: 1.3rem;
    font-size: 18px;
  }

  .weekRecipe img {
    width: 739px;
    height: 600px;
    margin-bottom: 20px;
  }

  .trendingRecipe {
    display: flex;
    flex-direction: row;
    background-color: #ffffff;
    border: 2px none;
    /* width: 1242px; */
    height: 422px;
    margin-left: 40px;
    margin-right: 70px;
  }

  .trendingRecipe img {
    width: 709px;
    height: 441;
  }

  .trendingRecipe .tag {
    color: green;
    font-size: 20px;
  }

  @media only screen and (max-width: 600px) {
    .weekRecipe {
      display: flex;
      flex-direction: column-reverse;
      justify-content: space-evenly;
      margin-left: 20px;
      margin-right: 20px;
    }
    .weekRecipe img {
      width: 280px;
      height: 292px;
      margin-bottom: 20px;
      margin-top: 20px;
    }

    .trendingRecipe {
      display: flex;
      flex-direction: column;
      background-color: #ffffff;
      border: 2px none;
      width: 100%;
      height: 422px;
      margin-left: 10px;
      margin-right: 10px;
    }
    .trendingRecipe img {
      width: 100%;
      height: 441px;
    }
  }
`;

export default Wrappers;
