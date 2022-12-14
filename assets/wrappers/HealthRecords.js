import styled from "styled-components";

const Wrappers = styled.div`
  .container {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.161);
    min-width: 200px;
    border-radius: 1rem;
    padding: 1rem 3rem;
    margin-top: 1rem;
    margin-right: 5rem;
    margin-left: 3rem;
    display: flex;
    flex-direction: column;
  }

  .top {
    display: flex;
    width: max(100%, 300px);
    align-items: center;
    justify-content: space-between;
  }

  .line {
    content: "";
    width: 100%;
    height: 1px;
    background-color: var(--line-color-gray);
    margin-top: 1rem;
  }
  .name {
    color: var(--primary-700);
  }
  .physical-details {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .height,
  .weight,
  .blood {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90px;
  }
  .img {
  }

  .contents {
    display: flex;
  }
  .underline {
    width: 100%;
    height: 3px;
    text-align: center;
    background-color: gray;
  }

  .name {
    cursor: pointer;
    margin-right: 1.6rem;
  }
  .payment-history {
  }
  .btn-green {
    background-color: var(--primary-700);
    padding: 1rem 7rem;
    border-radius: 2rem;
    text-decoration: none;
    border: none;
    color: white;
    margin-top: 3rem;
    margin-left: 15rem;
  }
  .contents > p {
    color: black;
  }
  @media (max-width: 480px) {
    width: 380px;
    margin-left: -6rem;
    .container {
      margin-left: -6rem;
      width: 400px;
    }
    .contents {
      width: 300px;
      overflow-x: scroll;
    }
    .physical-details {
      width: 300px;
    }
    .underline {
      width: 300px;
    }
    .btn-green {
      display: none;
    }
  }
`;

export default Wrappers;
