import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Menu from "./component/Menu";
import EmployeeList from "./component/EmployeeList";
import EmployeeDetail from "./component/EmployeeDetail";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Menu} />
          <Route path="/EmployeeList" exact component={EmployeeList} />
          <Route path="/EmployeeDetail" exact component={EmployeeDetail} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
