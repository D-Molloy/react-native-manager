import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardSection, Button } from "./common";
import EmployeeForm from "./EmployeeForm";
import { employeeUpdate } from "../actions";

class EmployeeEdit extends Component {
  componentWillMount() {
    _.each(this.props.employee, (val, prop) => {
      this.props.employeeUpdate({ prop, val });
    });
  }

  onButtonPress = () => {
    const { name, phone, shift } = this.props;
    console.log(name, phone, shift);
  };

  render() {
    console.log(this.props);
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(
  mapStateToProps,
  { employeeUpdate }
)(EmployeeEdit);
