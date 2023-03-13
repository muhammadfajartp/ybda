import React from "react";
import Header from "../../containers/header";
const FragmentLayout = ({ children, search }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default FragmentLayout;
