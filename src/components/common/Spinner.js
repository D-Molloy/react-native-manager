import React from "react";
import { View, ActivityIndicator } from "react-native";

const Spinner = ({ size }) => {
  return (
    // style the view to center the spinner
    <View style={styles.spinnerStyle}>
      {/* Native Spinner */}
      <ActivityIndicator size={size || "large"} />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
};

export { Spinner };
