import Link from "next/link";
import React from "react";

const NavLink = ({ url, name }) => {
  return (
    <Link href={url}>
      <li>{name}</li>
    </Link>
  );
};

export default NavLink;
