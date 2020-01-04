import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialDisabledTextbox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.inputStyleRow}>
        <TextInput
          style={styles.inputStyle}
        ></TextInput>
        <Icon name="information-outline" style={styles.iconStyle}></Icon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    borderColor: "#D9D5DC",
    borderBottomWidth: 1,
    flexDirection: "row"
  },
  inputStyle: {
    width: 328,
    height: 42,
    flex: 1,
    color: "#000",
    alignSelf: "stretch",
    fontSize: 16,
    // fontFamily: "roboto-regular",
    lineHeight: 16
  },
  iconStyle: {
    color: "#384850",
    fontFamily: "Roboto",
    fontSize: 24,
    opacity: 0.7,
    height: 24,
    width: 32,
    marginTop: 9
  },
  inputStyleRow: {
    height: 42,
    flexDirection: "row",
    flex: 1
  }
});

export default MaterialDisabledTextbox;
