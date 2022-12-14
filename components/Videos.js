import Image from "next/image";
import React from "react";
import styled from "styled-components";
import video1 from "../assets/image/video1.svg";
import video2 from "../assets/image/video2.svg";
const Videos = () => {
  return (
    <Wrappers>
      <div className="container">
        <div className="line-container">
          <h1 className="title">Videos</h1>
          <div className="green-line" style={{ width: "4rem" }}></div>
        </div>
        <div className="videos-container">
          <div className="video">
            <Image width={"700px"} height={"700px"} src={video1} />
          </div>
          <div className="video">
            <Image width={"700px"} height={"700px"} src={video1} />
          </div>
        </div>
      </div>
    </Wrappers>
  );
};

export default Videos;

const Wrappers = styled.div`
  margin-top: 1rem;
  .title {
    text-align: center;
  }
  .video {
    width: 40%;
    margin-right: 2rem;
    border-radius: 5rem;
  }

  .videos-container {
    margin-top: -3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
