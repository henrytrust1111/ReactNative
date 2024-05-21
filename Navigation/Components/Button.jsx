import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Typography from "./Typography";

const Button = ({ type, ms, title, onPress }) => {
  const styles = StyleSheet.create({
    button1: {
      width: "100%",
      height: hp("7%"),
      backgroundColor: "#fff",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 7,
    },
    buttonText: {
      color: "#EF5A5A",
    },
    buttonText2: {
      color: "#fff",
    },
    button2: {
      backgroundColor: "#EF5A5A",
      borderWidth: 1,
      borderColor: "#fff",
      borderRadius: 12,
    },
  });
  switch (type) {
    case "CreateAcc":
      return (
        <TouchableOpacity style={[styles.button1, ms]} onPress={onPress}>
          <Typography type="text3" ms={styles.buttonText}>
            {" "}
            {title}{" "}
          </Typography>
        </TouchableOpacity>
      );
    case "GuestLogin":
      return (
        <TouchableOpacity
          style={{ ...styles.button1, ...styles.button2, ...ms }}
          onPress={onPress}
        >
          <Typography type="text3" ms={styles.buttonText2}>
            {title}
          </Typography>
        </TouchableOpacity>
      );
    default:
      return <></>;
  }
};

export default Button;
