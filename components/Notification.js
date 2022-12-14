import Image from "next/image.js";
import React from "react";
import Wrappers from "../assets/wrappers/Notification.js";
import notificationIcon from "../assets/image/notificationIcon.svg";
import ToggleSwitch from "./customComponents.js/ToggleSwitch.js";
const Notification = () => {
  return (
    <Wrappers>
      <div className="container">
        <div className="notification">
          <div className="first-row">
            <h1 className="name">Push Notification</h1>
            <div className="img">
              <ToggleSwitch/>
              {/* checknotification Start 
             <label class="switch">
        <input type="checkbox" />
        <span class="slider round"></span>
    </label>
               checknotification End */}
              
              {/*<Image src={notificationIcon} />*/}
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            libero, et nulla iusto aperiam odit fugiat facere, consequatur
            necessitatibus voluptates sint. Optio, beatae repellendus? Tempore
            autem iure ipsum sunt cumque.
          </p>
        </div>

        <div className="underline"></div>
        <div className="notification">
          <div className="first-row">
            <h1 className="name">Notification</h1>
            <div className="img">
             <ToggleSwitch />
            </div>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            libero, et nulla iusto aperiam odit fugiat facere, consequatur
            necessitatibus voluptates sint. Optio, beatae repellendus? Tempore
            autem iure ipsum sunt cumque.
          </p>
        </div>
      </div>
    </Wrappers>
  );
};

export default Notification;
