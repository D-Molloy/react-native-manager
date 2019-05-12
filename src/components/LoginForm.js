import React, { Component } from "react";
import { Card, CardSection, Input, Button } from "./common";

import { connect } from "react-redux";
import { emailChanged, passwordChanged } from "../actions";

class LoginForm extends Component {
  onEmailChange = text => {
    this.props.emailChanged(text);
  };

  onPasswordChange = text => {
    this.props.passwordChanged(text);
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@email.com"
            value={this.props.email}
            onChangeText={this.onEmailChange}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            value={this.props.password}
            onChangeText={this.onPasswordChange}
          />
        </CardSection>
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  email: state.auth.email,
  password: state.auth.password
});

export default connect(
  mapStateToProps,
  { emailChanged, passwordChanged }
)(LoginForm);
