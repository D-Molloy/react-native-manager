import React from "react";
import { View } from "react-native";

const Card = ({ children }) => {
  return <View style={styles.containerStyle}>{children}</View>;
};

export { Card };

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    // dont want any shadows on the left and right
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    // matches the border radius
    shadowRadius: 2,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    elevations: 2
  }
};
