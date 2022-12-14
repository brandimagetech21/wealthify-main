import Image from "next/image";
import React from "react";
import Wrappers from "../assets/wrappers/Blog";
import blogImg from "../assets/image/blogImg.jpg";
const Blog = () => {
  return (
    <Wrappers>
      <h1 className="heading">Blogs</h1>
      <div className="container">
        <div className="main-container">
          <div className="left-side">
            <div className="left-side-top">
              <div className="img">
                <Image src={blogImg} />
              </div>
              <div className="content">
                <h1 className="blog-title">Binge Eating Disorder</h1>
                <p className="blog-content">
                  Binge eating disorder is a serious eating disorder where you
                  frequently eat large amounts of food, and the temptation to
                  eat more never stops. It is characterized by a condition where
                  one overeats at every occasion, and may even feel guilty of
                  overeating.
                </p>
                <div className="footer">
                  <div className="author">by. DR.JOHN</div>
                  <div className="readmore">Read More</div>
                </div>
              </div>
            </div>
            <div className="left-side-bottom">
              <div className="">
                <div className="bottom-img">
                  <Image src={blogImg} />
                </div>
                <h4 className="blog-title">
                  A Small guide to understanding obesity{" "}
                </h4>
                <div className="footer">
                  <div className="author">by. DR.JOHN</div>
                  <div className="readmore">Read More</div>
                </div>
              </div>
              <div className="">
                <div className="bottom-img">
                  <Image src={blogImg} />
                </div>
                <h4 className="blog-title">
                  A Small guide to understanding obesity{" "}
                </h4>
                <div className="footer">
                  <div className="author">by. DR.JOHN</div>
                  <div className="readmore">Read More</div>
                </div>
              </div>
              <div className="">
                <div className="bottom-img">
                  <Image src={blogImg} />
                </div>
                <h4 className="blog-title">
                  A Small guide to understanding obesity{" "}
                </h4>
                <div className="footer">
                  <div className="author">by. DR.JOHN</div>
                  <div className="readmore">Read More</div>
                </div>
              </div>
            </div>
          </div>
          <div className="vertical-line"></div>
          <div className="right-side">
            <div className="topics">
              <p style={{ color: "green" }}>Trending Topic</p>
              <p>Latest Topic</p>
            </div>
            <div className="topic-items">
              <h4 className="topic-heading">
                White House on defensive as Manchin raises concerns about new
                spending
              </h4>
              <div className="topic-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                mollitia! Eos ad quisquam neque! Reprehenderit maxime
              </div>
              <div className="footer">
                <div className="author">by. DR.JOHN</div>
                <div className="readmore">Read More</div>
              </div>
            </div>
            <div className="topic-items">
              <h4 className="topic-heading">
                White House on defensive as Manchin raises concerns about new
                spending
              </h4>
              <div className="topic-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                mollitia! Eos ad quisquam neque! Reprehenderit maxime
              </div>
              <div className="footer">
                <div className="author">by. DR.JOHN</div>
                <div className="readmore">Read More</div>
              </div>
            </div>
            <div className="topic-items">
              <h4 className="topic-heading">
                White House on defensive as Manchin raises concerns about new
                spending
              </h4>
              <div className="topic-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                mollitia! Eos ad quisquam neque! Reprehenderit maxime
              </div>
              <div className="footer">
                <div className="author">by DR.JOHN</div>
                <div className="readmore">Read More</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrappers>
  );
};

export default Blog;
