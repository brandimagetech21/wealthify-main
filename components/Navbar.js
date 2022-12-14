import Image from "next/image";
import Link from "next/link";
import {} from "../styles/Navbar.module.css";
import WealthifyLogo from "../assets/image/WealthifyLogo.png";
import Wrappers from "../assets/wrappers/Navbar.js";
import { useRef, useState } from "react";
import Login from "./Login";
import { useRouter } from "next/router";
import ActiveLink from "./ActiveLink";
import MobileNavbar from "./MobileNavbar";
import MobileSidebar from "./MobileSidebar";
import rightArrow from "../assets/image/rightArrow.svg";
import DoctorLogin from "./DoctorLogin";
import { useEffect } from "react";

const Navbar = () => {
  let loggedIn;
  if (typeof window !== "undefined") {
    loggedIn = localStorage.getItem("loggedIn");
  }
  const [modal, setModal] = useState(false);
  const [menu, setMenu] = useState(false);
  const [singleDoctor, setSingleDoctor] = useState(false);
  const [menubar, setMenubar] = useState(false);
  const [mobileSidebar, setMobileSidebar] = useState(false);
  const [openDoctor, setOpenDoctor] = useState(false);
  let p_id;
  if (typeof window !== "undefined") {
    // Perform localStorage action
    p_id = localStorage.getItem("p_id");
  }
  const effectRan = useRef(false);
  useEffect(() => {
    if (effectRan.current === false) {
      console.log({ navBar: "1" });

      return () => {
        console.log("unmounted");
        effectRan.current = true;
      };
    }
  }, []);
  return (
    <Wrappers>
      {mobileSidebar ? (
        <MobileSidebar setMobileSidebar={setMobileSidebar} />
      ) : null}
      {menubar ? <MobileNavbar setMenubar={setMenubar} /> : null}
      <div className="navbar-container">
        {/* {modal
          ? ReactDOM.createPortal(
              <Login setModal={setModal} />,
              document.getElementById("modal-root")
            )
          : null} */}

        <div className="first-item">
          <Image
            className="logo"
            src={WealthifyLogo}
            width="200px"
            height="200px"
          />
          <div onClick={() => setMenubar(true)} className="hamburger-menu">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="right-icon" onClick={() => setMobileSidebar(true)}>
          <Image src={rightArrow} width="40px" height="40px" />
        </div>
        <div className="second-item">
          <li>
            <ul>
              {/* <Link href={"/homeLoggedOut"}>
                <a
                  href=""
                  style={{
                    color:
                      useRouter().route === "/homeLoggedOut" ? "red" : "black",
                  }}
                >
                  Before Login{" "}
                </a>
              </Link> */}
            </ul>
            <ul>
              {/* <Link href={"/"}>Home</Link> */}

              <ActiveLink route={p_id === null ? "homeLoggedOut" : "/"}>
                Home
              </ActiveLink>
            </ul>
            <ul>
              {/* <Link href={"/aboutus"}>
                <a href="">About us</a>
              </Link> */}

              <ActiveLink route={"/aboutus"}>About us</ActiveLink>
            </ul>
            <ul>
              <ActiveLink route={"/plans"}>Plans</ActiveLink>
            </ul>

            <ul>
              <ActiveLink route={"/recipe"}>Recipe</ActiveLink>
            </ul>
            <ul>
              <ActiveLink route={"/nutrition"}>Nutrition DataBase</ActiveLink>
            </ul>
            <ul onClick={() => setModal(!modal)}>
              <Link href={""}>
                <a href=""> Login</a>
              </Link>
            </ul>
            {/* {loggedIn === "true" ? (
              <ul></ul>
            ) : (
              <ul onClick={() => setModal(!modal)}>
                <Link href={""}>
                  <a href=""> Login</a>
                </Link>
              </ul>
            )} */}
          </li>
        </div>

        <Link href={"/adminHome"}>
          <div className="third-item">
            <button className="btn-primary">Admin Login</button>
          </div>
        </Link>
        <Link href={"/doctorHome"}>
          <div className="third-item">
            <button className="btn-primary">Doctor Login</button>
          </div>
        </Link>
      </div>
      {modal && <Login setModal={setModal} url={"portal"} />}
      {openDoctor && <DoctorLogin setModal={setOpenDoctor} url={"doctor"} />}

      {/* {menu && <Menu setMenu={setMenu} />} */}
    </Wrappers>
  );
};

export default Navbar;
