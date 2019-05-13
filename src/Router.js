import React from "react";
import { Scene, Router } from "react-native-router-flux";
import LoginForm from "./components/LoginForm";
import EmployeeList from "./components/EmployeeList";

//Top level component in our app
const RouterComponent = () => {
  return (
    <Router>
      {/*Root Scene- Need to have a parent scene for react-native-router-flux*/}
      <Scene key="root">
        {/* initial - prop tells the Router to show this scene first */}
        <Scene key="login" component={LoginForm} title="Please Login" initial />
        <Scene key="employeeList" component={EmployeeList} title="Employees" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
