import React, { Component } from "react";
import { Card, CardSection, Input, Button, Spinner } from "./common";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { emailChanged, passwordChanged, loginUser } from "../actions";
import { whileStatement } from "@babel/types";

class LoginForm extends Component {
  onEmailChange = text => {
    this.props.emailChanged(text);
  };

  onPasswordChange = text => {
    this.props.passwordChanged(text);
  };

  onButtonPress = () => {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
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

        {this.props.error ? (
          <CardSection>
            <View style={styles.errorViewStyle}>
              <Text style={styles.errorTextStyle}>{this.props.error}</Text>
            </View>
          </CardSection>
        ) : null}

        {this.props.loading === true ? (
          <CardSection>
            <Spinner />
          </CardSection>
        ) : (
          <CardSection>
            <Button onPress={this.onButtonPress}>Login</Button>
          </CardSection>
        )}
      </Card>
    );
  }
}

const styles = {
  errorViewStyle: {
    border: "1px solid black",
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  errorTextStyle: {
    padding: 5,
    height: 35,
    fontSize: 20,
    color: "red"
  }
};

const mapStateToProps = state => ({
  email: state.auth.email,
  password: state.auth.password,
  error: state.auth.error,
  loading: state.auth.loading
});

export default connect(
  mapStateToProps,
  { emailChanged, passwordChanged, loginUser }
)(LoginForm);
