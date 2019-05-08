import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardSection, Input, Button } from "./common";

class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  };

  onEmailChange = text => {};

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@email.com"
            value={this.state.email}
            onChangeText={this.onEmailChange}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            value={this.state.password}
          />
        </CardSection>
        <CardSection>
          <Button onPress={() => null}>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
