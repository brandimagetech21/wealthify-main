import styled from "styled-components";

const Wrappers = styled.div`
  /*  */
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: center;
  background-color: rgba(0, 0, 0, 0.7);
  input {
    outline: none;
  }
  .container {
    position: relative;
    background-color: white;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.161);
    border-radius: 2rem;
    width: 300px;
    height: 100%;
    padding: 1rem;
    z-index: 100;
    margin: 0 auto;
  }
  .name {
    color: var(--primary-700);
  }
  .number {
    border: none;
    border-bottom: 1px solid black;
  }
  .referal {
    position: relative;
    height: 4rem;
  }
  .referal label {
    position: absolute;
    top: 1rem;
  }
  .referal input {
    position: absolute;
    top: 3rem;
  }

  h4 {
    margin-top: -0.5rem;
  }
  .close-btn {
    position: absolute;
    right: 1rem;
    top: 1rem;
    cursor: pointer;
  }
  .signup {
    display: flex;
  }
  .enter-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .login-btn {
    margin-right: 2rem;
    cursor: pointer;
  }
`;

export default Wrappers;
