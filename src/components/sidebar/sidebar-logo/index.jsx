import React from "react";
import { BsPlayFill } from "react-icons/bs";
import ybdalogo from "../../../assets/image/ybdalogo.png";
const SidebarLogo = ({ styles }) => {
  return (
    <>
      <div className={`${styles.sidebarLogo} `}>
        <img src={ybdalogo} />
      </div>
    </>
  );
};

export default SidebarLogo;
