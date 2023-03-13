import React from "react";
import FragmentLayout from "../layout/fragment-layout";
import Sidebar from "../layout/sidebar-layout";

const Home = () => {
  return (
    <>
      <Sidebar>
        <FragmentLayout></FragmentLayout>
      </Sidebar>
    </>
  );
};

export default Home;
