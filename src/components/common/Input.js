import React from "react";
import { TextInput, View, Text } from "react-native";

const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry
}) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        // disable autocorrect on email
        autoCorrect={false}
        // hide password
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
        value={value}
        onChangeText={onChangeText}
        style={inputStyle}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = {
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    paddingBottom: 5,
    flex: 1
  },
  inputStyle: {
    color: "#000",
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 3,
    height: 40,
    width: 100
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  }
};

export { Input };
