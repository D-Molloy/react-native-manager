import React, { Component } from "react";
import { connect } from "react-redux";
// import { Card, CardSection, Input, Button } from "./common";
import { CardSection } from "./common/CardSection";
import { Card } from "./common/Card";
import { Input } from "./common/Input";
import { Button } from "./common/Button";
class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@email.com"
            onChange={() => null}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChange={() => null}
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
