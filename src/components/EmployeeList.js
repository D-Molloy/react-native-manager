import React, { Component } from "react";
import { ListView } from "react-native";
import ListItem from "./ListItem";
import { connect } from "react-redux";
import { employeesFetch } from "../actions/";
import _ from "lodash";

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();

    // createDataSource is called twice to ensure we always have an up to date list of emps
    this.createDataSource(this.props);
  }

  // move setting the datasource to componentWillReceiveProps as a workaround to getting the employee data
  // fetch data -> props update -> components rerender
  // call with the new props
  // great for updating to change and asynchronous behavior
  componentWillReceiveProps(nextProps) {
    //nextProps are the next set of props that this component will be rendered with
    // this.props is still the old set of props
    this.createDataSource(nextProps);
  }

  createDataSource = ({ employees }) => {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    // cloneWithRows must be fed an array (employees)
    this.dataSource = ds.cloneWithRows(employees);
  };

  renderRow(employee) {
    return <ListItem employee={employee} />;
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  // convert the employees object (due to firebase) into an array

  // uid: key, val: model for each employee (name/shift/phone)
  // state.employees is an object with many key/value pairs
  // for each employee
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });

  return { employees };
};

export default connect(
  mapStateToProps,
  { employeesFetch }
)(EmployeeList);
