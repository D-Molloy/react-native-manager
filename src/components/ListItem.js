import React, { Component } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { CardSection } from "./common";
import { Actions } from "react-native-router-flux";

class ListItem extends Component {
  onRowPress = () => {
    // pass any object you want to pass onto the Actions component
    Actions.employeeEdit({ employee: this.props.employee });
  };

  render() {
    const { name } = this.props.employee;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress}>
        <View>
          <CardSection>
            <Text styles={styles.titleStyle}>{name}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListItem;
