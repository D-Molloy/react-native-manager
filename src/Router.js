import React from "react";
import { Scene, Router, Actions } from "react-native-router-flux";
import LoginForm from "./components/LoginForm";
import EmployeeList from "./components/EmployeeList";
import EmployeeCreate from "./components/EmployeeCreate";
import EmployeeEdit from "./components/EmployeeEdit";

//Top level component in our app
const RouterComponent = () => {
  return (
    <Router>
      {/*Root Scene- Need to have a parent scene for react-native-router-flux*/}
      {/* hideNavBar hides the extra nav due to nesting scenes into buckets */}
      <Scene key="root" hideNavBar>
        {/* Then splitting the scenes into buckets (auth/main) to prevent login button from appearing in nav*/}
        <Scene key="auth">
          {/* initial - prop tells the Router to show this scene first */}
          <Scene
            key="login"
            component={LoginForm}
            title="Please Login"
            initial
          />
        </Scene>
        <Scene key="main">
          <Scene
            key="employeeList"
            component={EmployeeList}
            title="Employees"
            rightTitle="Add"
            onRight={() => {
              Actions.employeeCreate();
            }}
            initial
          />
          <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="Create Employee"
          />
          <Scene
            key="employeeEdit"
            component={EmployeeEdit}
            title="Edit Employee"
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
