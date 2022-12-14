import styled from "styled-components";

const Wrappers = styled.div`
  margin-bottom: 10rem;
  .heading {
    text-align: center;
  }
  .container {
  }
  .main-container {
    display: flex;
    flex-wrap: wrap;
  }
  .left-side {
    width: max(600px, 69%);
  }

  .left-side-top {
    display: flex;
  }

  .img,
  .content {
    width: 48%;
    margin-right: 1rem;
  }
  .footer {
    display: flex;
    justify-content: space-between;
    margin-right: 1rem;
  }
  .left-side-bottom {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
    overflow-x: auto;
    margin-bottom: 2rem;
  }
  .left-side-bottom > div {
    width: 30%;
    /* width: 80vw; */
  }
  .right-side {
    width: 29%;
    margin-left: 1rem;
  }
  .topics {
    width: 70%;
    display: flex;
    justify-content: space-between;
  }

  .left-side {
    position: relative;
  }
  .left-side-top {
    position: relative;
  }
  .left-side-top::after {
    position: absolute;
    content: "";
    display: block;
    width: 98%;
    height: 2px;
    background-color: gray;
    bottom: -0.5rem;
  }

  .left-side::after {
    content: "";
    display: block;
    width: 2px;
    height: 630px;
    background-color: gray;
    position: absolute;
    top: 0;
    right: 0.1rem;
  }
  .footer {
    margin-top: 2rem;
  }
  .topic-items,
  .topics {
    position: relative;
  }
  .topic-items::after {
    position: absolute;
    content: "";
    display: block;
    height: 2px;
    width: 98%;
    background-color: gray;
    margin-top: 0.5rem;
  }
  .topics::after {
    position: absolute;
    content: "";
    display: block;
    height: 2px;
    width: 138%;
    background-color: gray;
    margin-top: 0.5rem;
    bottom: 0;
  }
  .readmore {
    color: green;
    text-decoration: underline;
  }
  @media (max-width: 900px) {
    .left-side-top {
      display: none;
    }
    .left-side-bottom div {
      width: 300px;
    }
  }
  @media (max-width: 900px) {
    .left-side::after {
      display: none;
    }
    .left-side-bottom {
      width: 100vw;
    }
    .left-side-bottom div {
      width: 300px;
    }
    .right-side {
      width: 100%;
    }
  }
`;
export default Wrappers;
