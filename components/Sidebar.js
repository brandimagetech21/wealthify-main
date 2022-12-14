import React from "react";
import Link from "next/link";
import Wrappers from "../assets/wrappers/Sidebar";
import Image from "next/image";
import RightCheveron from "../components/RightCheveron.js";
import profile from "../assets/image/profile.svg";
import rupees from "../assets/image/rupees.svg";
import address from "../assets/image/address.svg";
import notification from "../assets/image/notification.svg";
import needHelp from "../assets/image/needHelp.svg";
import ManageProfile from "../components/ManageProfile";
import ActiveLink from "./ActiveLink";
import { useRouter } from "next/router";
import { useState } from "react";
import { useAppcontext } from "../context/appContext";
import { useEffect } from "react";

export default function Sidebar() {
  const { subscriptionPlanCount } = useAppcontext();
  const router = useRouter();
  const queryId = router.asPath.split("?")[1];
  let doctorId;
  if (typeof window !== "undefined") {
    doctorId = localStorage.getItem("doctorId");
  }
  let patientId;
  if (typeof window !== "undefined") {
    patientId = localStorage.getItem("p_id");
  }
  useEffect(() => {
    // getSubscription("subscription", { api_key: "get", p_id: patientId });
  }, []);
  const logoutUser = () => {
    localStorage.clear();
    router.reload(window.location.pathnames);
  };
  console.log(patientId);
  return (
    <Wrappers>
      <div className="container">
        <li>
          {/*   ------------- */}

          {
            (doctorId = "undefined" ? (
              <ul className={`item ${subscriptionPlanCount ? "" : "disable"} `}>
                <div className="img">
                  <Image src={profile} />
                </div>

                <div className="text">
                  <ActiveLink route={"/managedProfile"}>
                    Managed Profile
                  </ActiveLink>
                </div>
                <div className="rightCheveron">
                  <RightCheveron />
                </div>
              </ul>
            ) : (
              <ul className={`item disable `}>
                <div className="img">
                  <Image src={profile} />
                </div>
                {/* <Link href={"/managedProfile"}>
              <a className="text" href="">
                Managed Profile
              </a>
            </Link> */}
                <div className="text">
                  <ActiveLink route={"/managedProfile"}>
                    Managed Profile
                  </ActiveLink>
                </div>
                <div className="rightCheveron">
                  <RightCheveron />
                </div>
              </ul>
            ))
          }
          {/* ------- */}
          {
            (doctorId = "undefined" ? (
              <ul className={`item ${subscriptionPlanCount ? "" : "disable"}`}>
                <div className="img">
                  <Image src={rupees} />
                </div>
                <Link href={"/payments"}>
                  <a className="text" href="">
                    My Payments
                  </a>
                </Link>
                <div className="rightCheveron">
                  <RightCheveron />
                </div>
              </ul>
            ) : (
              <ul className={`item disable`}>
                <div className="img">
                  <Image src={rupees} />
                </div>
                <Link href={"/payments"}>
                  <a className="text" href="">
                    My Payments
                  </a>
                </Link>
                <div className="rightCheveron">
                  <RightCheveron />
                </div>
              </ul>
            ))
          }

          {/* ---------- */}
          {
            (doctorId = "undefined" ? (
              <ul
                className={`item ${
                  subscriptionPlanCount ? "" : "disable activeHealthRecords"
                }`}
              >
                <div className="img">
                  <Image src={profile} />
                </div>
                <Link href={"/healthRecords"}>
                  <a className="text" href="">
                    Health Records
                  </a>
                </Link>
                <div className="rightCheveron">
                  <RightCheveron />
                </div>
              </ul>
            ) : (
              <ul className={`item disable`} id="activeHealthRecords">
                <div className="img">
                  <Image src={profile} />
                </div>
                <Link href={"/healthRecords"}>
                  <a className="text" href="">
                    Health Records
                  </a>
                </Link>
                <div className="rightCheveron">
                  <RightCheveron />
                </div>
              </ul>
            ))
          }

          {/* ---------subscription */}
          {
            (doctorId = "undefined" ? (
              <ul className={`item ${subscriptionPlanCount ? "" : "disable"}`}>
                <div className="img">
                  <Image src={profile} />
                </div>
                <Link href={"/membership"}>
                  <a className="text" href="">
                    Subscription
                  </a>
                </Link>
                <div className="rightCheveron">
                  <RightCheveron />
                </div>
              </ul>
            ) : (
              <ul className={`item disable `}>
                <div className="img">
                  <Image src={profile} />
                </div>
                <Link href={"/membership"}>
                  <a className="text" href="">
                    Subscription
                  </a>
                </Link>
                <div className="rightCheveron">
                  <RightCheveron />
                </div>
              </ul>
            ))
          }

          {/* ------address book */}

          {
            (doctorId = "undefined" ? (
              <ul className={`item  ${subscriptionPlanCount ? "" : "disable"}`}>
                <div className="img">
                  <Image src={address} />
                </div>
                <Link href={"/addressBook"}>
                  <a className="text" href="">
                    Address Book
                  </a>
                </Link>
                <div className="rightCheveron">
                  <RightCheveron />
                </div>
              </ul>
            ) : (
              <ul className={`item disable`}>
                <div className="img">
                  <Image src={address} />
                </div>
                <Link href={"/addressBook"}>
                  <a className="text" href="">
                    Address Book
                  </a>
                </Link>
                <div className="rightCheveron">
                  <RightCheveron />
                </div>
              </ul>
            ))
          }

          {/* ----need help   */}

          {
            (doctorId = "undefined" ? (
              <ul className={`item ${subscriptionPlanCount ? "" : "disable"}`}>
                <div className="img">
                  <Image src={needHelp} />
                </div>
                <Link href={"/needHelp"}>
                  <a className="text" href="">
                    Need Help
                  </a>
                </Link>
                <div className="rightCheveron">
                  <RightCheveron />
                </div>
              </ul>
            ) : (
              <ul className={`item disable`}>
                <div className="img">
                  <Image src={needHelp} />
                </div>
                <Link href={"/needHelp"}>
                  <a className="text" href="">
                    Need Help
                  </a>
                </Link>
                <div className="rightCheveron">
                  <RightCheveron />
                </div>
              </ul>
            ))
          }
          {/* notification */}
          {
            (doctorId = "undefined" ? (
              <ul
                className={`item ${subscriptionPlanCount ? "" : "disable"}
            `}
              >
                <div className="img">
                  <Image src={notification} />
                </div>
                <Link href={"/notification"}>
                  <a className="text" href="">
                    Notification Preference
                  </a>
                </Link>
                <div className="rightCheveron">
                  <RightCheveron />
                </div>
              </ul>
            ) : (
              <ul className={`item disable`}>
                <div className="img">
                  <Image src={notification} />
                </div>
                <div
                  className=""
                  onClick={() => {
                    logoutUser();
                  }}
                >
                  <p className="text">Logout</p>
                </div>
                <div className="rightCheveron">
                  <RightCheveron />
                </div>
              </ul>
            ))
          }

          {/* logout */}
          {
            (doctorId = "undefined" ? (
              <ul className={`item`}>
                <div className="img">
                  <Image src={notification} />
                </div>
                <div
                  className=""
                  onClick={() => {
                    logoutUser();
                  }}
                >
                  <p className="text">Logout</p>
                </div>
                <div className="rightCheveron">
                  <RightCheveron />
                </div>
              </ul>
            ) : (
              <ul className={`item disable`}>
                <div className="img">
                  <Image src={notification} />
                </div>
                <div
                  className=""
                  onClick={() => {
                    logoutUser();
                  }}
                >
                  <p className="text">Logout</p>
                </div>
                <div className="rightCheveron">
                  <RightCheveron />
                </div>
              </ul>
            ))
          }
        </li>
      </div>
    </Wrappers>
  );
}

// Sidebar.Layout = ManageProfile;
