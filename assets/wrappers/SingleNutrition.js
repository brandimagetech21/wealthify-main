import styled from "styled-components";

const Wrappers = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 7rem;
  @import url("https://fonts.googleapis.com/css2?family=poppins&display=swap");

  body {
    font-family: "poppins";
    background-color: #fafafa;
  }

  .search-icon {
    margin-left: 25rem;
    margin-bottom: -3rem;
  }
  .Nutrition {
    background-image: url(../images/Group26.svg);
    position: relative;
    height: 477px;
    width: 100%;
    background-size: cover;
    margin-bottom: 50px;
    background-repeat: no-repeat;
  }

  .Nutrition h3 {
    display: block;
    position: relative;
    text-align: center;
    font-size: 60px;
    margin-top: 0px;
    font-weight: 300;
    padding-top: 194px;
  }

  .searchbar input {
    border: 2px solid grey;

    border-radius: 20px;
    margin-left: 0px;
    width: 450px;
    height: 38px;
    /* background-color: red; */
    font-size: 24px;
  }

  .searchbar input::placeholder {
    font-size: 20px;
    padding-left: 20px;
    color: #e0e0e0;
  }

  .searchbar i {
    position: absolute;
    width: 100px;
    margin-top: 25px;
  }

  .icon {
    padding: 10;
    padding-left: 372px;
    padding-top: 1px;
    color: #787878;
    min-width: 50px;
    text-align: center;
    justify-items: center;
  }

  .searchrec {
    position: absolute;
    border-left: 2px solid #b2b2b2;
    height: 26px;
    /* width: 100%; */
    max-width: 50px;
    padding: 7px;
    margin-top: 8px;
    margin-left: 390px;
  }

  .searchbar .button {
    width: 150px;
    height: 50px;
    background-color: yellow;
    border-radius: 50px;
    margin-left: 12px;
    font-family: Arial, Helvetica, sans-serif;
    border: 2px white;
    /* padding-top: 10px; */
    justify-content: space-between;
    color: green;
    font-weight: 200;
    text-align: center;
    cursor: pointer;
  }

  div h1 {
    font-size: 100;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 1000;
    margin-bottom: 0px;
  }

  .flex {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
  .fruitImg {
    border: 50px solid #fafafa;
    border-top: 0px;
    /* text-align: left; */
    /* display: inline-flex; */
    justify-content: flex-end;
    width: 50%;
  }
  .fruitImg img {
    height: 281px;
    width: 495px;
  }

  .content {
    font-size: x-large;
  }

  .list {
    display: flex;
    flex-direction: row;
  }

  .top {
    margin-top: 30px;
  }

  @media only screen and (max-width: 600px) {
    body {
      font-family: "poppins";
      background-color: #fafafa;
    }
    .searchbar input {
      border: 2px solid grey;

      border-radius: 20px;
      margin-left: 0px;
      width: 250px;
      height: 42px;
      /* background-color: red; */
      font-size: 24px;
      display: flex;
    }

    .searchrec {
      position: absolute;
      border-left: 2px solid #b2b2b2;
      height: 14px;
      /* width: 100%; */
      max-width: 50px;
      padding: 7px;
      margin-top: 12px;
      margin-left: 220px;
    }

    .icon {
      padding: 10;
      padding-left: 200px;
      padding-top: 1px;
      color: #787878;
      min-width: 50px;
      text-align: center;
      justify-items: center;
    }

    .list {
      display: flex;
      flex-direction: column;
    }

    .content {
      font-size: x-large;
    }

    .flex {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
    }

    .Nutrition {
      background-image: url(../images/Group26.svg);
      position: relative;
      height: 477px;
      width: 100%;
      background-size: cover;
      margin-bottom: 50px;
      background-repeat: no-repeat;
    }

    .fruitImg {
      border: 0px solid #fafafa;
      border-top: 0px;
      /* text-align: left; */
      /* display: inline-flex; */
      justify-content: flex-end;
      width: 50%;
    }
    .content {
      font-size: x-large;
    }
  }
`;
export default Wrappers;
