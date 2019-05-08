// Import libraries for making a component
import React from "react";
import { Text, View } from "react-native";
// View - primitive element used to position/style/size elements - like a div
// Make the component

const Header = ({ headerText }) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{headerText}</Text>
    </View>
  );
};
// export it
export { Header };

const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: "relative"
  }
};
