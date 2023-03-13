import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import styles from "../../../containers/header/Header.module.scss";
const Navigation = () => {
  return (
    <>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="p-10 my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link href="#home">
            <p className={styles.linkStyle}>Home</p>
          </Nav.Link>
          <Nav.Link href="#features">
            <p className={styles.linkStyle}>Series</p>
          </Nav.Link>
          <Nav.Link href="#pricing">
            <p className={styles.linkStyle}>Tv Show</p>
          </Nav.Link>
          <div className=" d-sm-none flex-grow-1" id="tiga"></div>
        </Nav>
      </Navbar.Collapse>
    </>
  );
};

export default Navigation;
