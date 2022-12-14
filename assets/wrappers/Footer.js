import styled from "styled-components";

const Wrappers = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=poppins&display=swap");

  margin-top: 4rem;
  // body {
  //   line-height: 2;
  //   font-family: "poppins";
  // }
  * {
    padding: 0;
    box-sizing: border-box;
    /* border: 2px solid red; */
  }

  /* oct 14 */
  .quick {
    margin-top: -1rem;
  }
  .location2 {
    margin-top: -0.5rem;
  }

  .container {
    max-width: 1870px;
    height: 366px;
    /* margin: auto; */
    background-color: #404040;
  }
  .row {
    display: flex;
    /* flex-wrap: initial; */
    flex-direction: row;

    justify-content: center;
  }
  ul {
    list-style: none;
  }
  .footer {
    /* background-color: #404040; */
    padding: 0;
    height: 350px;
    max-width: 100%;
  }
  .footerLogo {
    margin: 10px;
  }
  .footer-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 25%;
    padding: 0 15px;
  }

  .footer-col-div {
    margin-top: -3.5rem;
  }
  .location {
    margin-top: -2.2rem;
  }
  .contact-us {
    margin-top: -3.6rem;
  }

  .footer-col span {
    font-size: 30px;
    color: #ffffff;
    text-transform: capitalize;
    margin-bottom: 30px;
    font-weight: 300;
    position: relative;
    /* background-color: red; */
    width: 150px;
    height: 40px;
    line-height: 3;
    padding-left: 30px;
  }

  .footer-col-div ul {
    padding: 0 0 0 10px;
  }

  .quicklinks {
    padding: 0 0 0 30px;
    flex-wrap: wrap;
    align-items: stretch;
  }

  .footer-col ul ul:not(:last-child) {
    margin-bottom: 10px;
  }

  .footer-col ul a {
    font-size: 16px;
    text-transform: capitalize;

    text-decoration: none;
    font-weight: 200;
    color: #ffffff;
    display: block;
    /* transition: all 0.3s ease; */
  }

  .footer-col ul ul {
    color: white;
  }
  .footer-col2 ul {
    flex-direction: column;
    background-color: red;
  }
  .rectangle {
    height: 303px;
    width: 3px;
    margin-top: 2rem;
    /* margin: 1px; */
    background-color: #707070;
    border-radius: 3px;
    /* align-items: center; */
  }

  .a {
    color: revert;
  }
  #follow {
    padding: 20 20 0 0;
    margin: 10 10 0 10;
    font-size: 22px;
    color: #ffffff;
  }

  .socialLinks {
    margin-top: 1rem;
  }
  .socialLinks a {
    margin-right: 0.5rem;
  }
  .quick-links {
    color: white;
    font-size: 2rem;
  }

  .socialLinks a i {
    border-radius: 60%;
    border: 4px solid white;
    width: 43px;
    height: 43;
    color: white;
    padding: 20 7 20;
    justify-content: space-between;
    margin: 0 0 0 3;
  }

  .socialLinks a:link {
    color: black;
  }
  .weight {
    font-weight: 600;
  }

  .common {
    display: flex;
    flex-direction: row;
    margin-top: 0rem;
    justify-content: center;
  }

  .quicklinks2 {
    justify-content: space-around;
    margin-left: 47px;
  }

  .cc {
    background-color: #1e1e1e;
    max-width: 1870px;
    height: 72px;
  }

  .cc-content {
    color: #ffffff;
    margin-top: 0px;
    margin-bottom: 0px;
    padding-top: 16px;
    text-align: center;
  }
  @media all and (max-width: 500px) {
    * {
      box-sizing: initial;
      /* line-height: 1; */
    }
    .container {
      background-color: #404040;
      max-width: 435px;
      height: auto;
    }
    .footer-col {
      width: auto;
      height: auto;
    }
    .footer-col span {
      padding: 0 0 0 0;
      justify-content: center;

      text-align: center;
      font-size: 24px;
      padding-left: 5em;
    }
    .quicklinks {
      justify-content: center;
      /* margin-left: 25%; */
      padding-left: 0%;
      margin: 0% 0%;
      font-size: 20px;
      margin-top: 10px;
    }
    .quicklinks2 {
      justify-content: center;
      padding-left: inherit;
      font-size: 20px;
      margin-left: 0%;
      /* padding-left: 6rem; */
    }
    .footer-col-div ul {
      justify-content: center;
      font-size: 20px;
      padding-left: 2em;
    }

    .footerLogo {
      display: none;
    }
    .footer-rec {
      position: relative;
      padding: 0 0 0 0;
      justify-content: space-evenly;
    }
    .none {
      display: none;
    }
    .rectangle {
      justify-self: center;
      height: 3.43px;
      width: 90%;
      margin-left: 25px;
      background-color: #707070;
      border-radius: 3px;
      /* padding-left: 3em; */
    }
    #follow {
      display: none;
    }
    .socialLinks {
      display: none;
    }

    .row {
      flex-direction: column;
      flex-wrap: wrap;
    }

    .common {
      display: block;
      flex-direction: column;
      justify-content: center;
    }

    .location {
      margin-top: 0rem;
    }

    .contact-us {
      margin-top: -1rem;
    }
    .cc {
      max-width: 100%;
      max-height: fit-content;
      display: 100%;
    }

    .cc-content {
      text-align: center;
      position: relative;
      padding-top: 25px;
    }
  }
`;

export default Wrappers;
