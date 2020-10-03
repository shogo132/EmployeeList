import React from "react";
import { Link } from "react-router-dom";

import Layout from "../Flame/Layout";

const Menu = () => {
  return (
    <Layout header="Menu" title="Menu">
      <Link to="/EmployeeList">
        <p>◆EmployeeList</p>
      </Link>
    </Layout>
  );
};
export default Menu;
