import React from "react";
import Gaji from "../containers/gaji";
import FragmentLayout from "../layout/fragment-layout";
import Sidebar from "../layout/sidebar-layout";

const GajiPage = () => {
  return (
    <>
      <Sidebar>
        <FragmentLayout>
          <Gaji />
        </FragmentLayout>
      </Sidebar>
    </>
  );
};

export default GajiPage;
