import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const ActiveLink = ({ children, route }) => {
  const urlRoute = useRouter().route;
  return (
    <>
      <Link href={route}>
        <a
          href=""
          style={{
            color: urlRoute === route ? "red" : "black",
          }}
        >
          {children}
        </a>
      </Link>
      {/* <div
        className="green-line "
        style={{ width: "4rem", margin: "0 auto", marginTop: ".6rem" }}
      ></div> */}
    </>
  );
};

export default ActiveLink;
