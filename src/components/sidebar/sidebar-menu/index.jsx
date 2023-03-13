import React from "react";
import { IconContext } from "react-icons";
import { BsHouseDoor, BsPeople, BsPercent } from "react-icons/bs";
import { NavLink } from "react-router-dom";
const SidebarMenu = ({ styles }) => {
  return (
    <>
      <div className={styles.sidebarMenu}>
        <IconContext.Provider value={{ size: "20" }}>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? `${styles.nonPages} ${styles.activePages}`
                : styles.nonPages
            }
          >
            <BsHouseDoor /> <span className="ps-3">Home</span>
          </NavLink>
          <NavLink
            to={"/users"}
            className={({ isActive }) =>
              isActive
                ? `${styles.nonPages} ${styles.activePages}`
                : styles.nonPages
            }
          >
            <BsPeople /> <span className="ps-3">Users</span>
          </NavLink>
          <NavLink
            to={"/hitung-gaji"}
            className={({ isActive }) =>
              isActive
                ? `${styles.nonPages} ${styles.activePages}`
                : styles.nonPages
            }
          >
            <BsPercent /> <span className="ps-3">Hitung Gaji</span>
          </NavLink>
        </IconContext.Provider>
      </div>
    </>
  );
};

export default SidebarMenu;
