import React from "react";
import { Container } from "react-bootstrap";
import SidebarLogo from "../../components/sidebar/sidebar-logo";
import SidebarMenu from "../../components/sidebar/sidebar-menu";
import styles from "./Sidebar.module.scss";

const Sidebar = ({ children }) => {
  return (
    <Container fluid className={`${styles.sidebarLayout} p-0 m-0 fixed-top `}>
      <div className={`${styles.sidebarStyle}`}>
        <SidebarLogo styles={styles} />
        <SidebarMenu styles={styles} />
      </div>
      <div className="offcanvas-body">{children}</div>
    </Container>
  );
};

export default Sidebar;
