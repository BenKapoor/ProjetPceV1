import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Image, Text } from "react-native";
import MaterialDisabledTextbox from "../Component/Login/MaterialDisabledTextbox";
import MaterialButtonGrey from "../Component/Login/MaterialButtonGrey";
import MaterialButtonSuccess from "../Component/Login/MaterialButtonSuccess";

function Untitled(props) {
  return (
    <View style={styles.root}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="rgba(0,0,0,0)"
      ></StatusBar>
      <MaterialDisabledTextbox
        style={styles.materialDisabledTextbox}
        placeholder="Nom"
      ></MaterialDisabledTextbox>
      <MaterialDisabledTextbox
        style={styles.materialDisabledTextbox1}
      ></MaterialDisabledTextbox>
      <View style={styles.imageStack}>
        <Image
          source={require("../assets/icon.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Text style={styles.connexion}>Connexion</Text>
      </View>
      <MaterialButtonGrey
        style={styles.materialButtonGrey}
      ></MaterialButtonGrey>
      <MaterialButtonSuccess
        style={styles.materialButtonSuccess}
      ></MaterialButtonSuccess>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)"
  },
  materialDisabledTextbox: {
    width: 287,
    height: 43,
    marginTop: 270,
    marginLeft: 37
  },
  materialDisabledTextbox1: {
    width: 287,
    height: 43,
    marginTop: 29,
    marginLeft: 37
  },
  image: {
    top: 0,
    left: 44,
    width: 200,
    height: 200,
    position: "absolute"
  },
  connexion: {
    top: 198,
    left: 0,
    width: 96,
    height: 12,
    color: "#121212",
    position: "absolute",
    // fontFamily: "roboto-regular"
  },
  imageStack: {
    width: 244,
    height: 210,
    marginTop: -359,
    marginLeft: 36
  },
  materialButtonGrey: {
    width: 100,
    height: 36,
    marginTop: 216,
    marginLeft: 132
  },
  materialButtonSuccess: {
    width: 100,
    height: 36,
    marginTop: 17,
    marginLeft: 133
  }
});

export default Untitled;
