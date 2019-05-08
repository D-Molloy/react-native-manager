import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

export { Button };

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#ffd782",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#f4bc42",
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    alignSelf: "center",
    color: "#996700",
    fontSize: 16,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10
  }
};
