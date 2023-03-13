import React from "react";
import TableUI from "../components/UI/table";
import Users from "../containers/users";
import FragmentLayout from "../layout/fragment-layout";
import Sidebar from "../layout/sidebar-layout";

const UsersPage = () => {
  return (
    <>
      <Sidebar>
        <FragmentLayout>
          <Users />
        </FragmentLayout>
      </Sidebar>
    </>
  );
};

export default UsersPage;
