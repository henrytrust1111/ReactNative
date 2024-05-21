import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Typography from "../Typography/Typography";

const CustomButton = ({ children, ms, type, onPress }) => {
  const styles = StyleSheet.create({
    downloadBtn: {
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      width: wp("55%"),
      height: hp("5.9%"),
      // backgroundColor: "blue",
      flexDirection: "row",
      borderRadius: 5,
      borderColor: "blue",
      borderWidth: 1,
      gap: wp("3%"),
      marginTop:hp("4%")
    },
    imageHolder: {
      width: 25,
      height: 25,
    },
    logo: {
      width: "100%",
      height: "100%",
      resizeMode: "cover",
    },
    default: {
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      width: wp("90%"),
      height: hp("6.9%"),
      borderRadius: 50,
    },
  });

  switch (type) {
    case "download":
      return (
        <TouchableOpacity
          onPress={onPress}
          style={{ ...styles.downloadBtn, ...ms }}
        >
          <View style={styles.imageHolder}>
            <Image
              source={require("../../assets/icons/arrow-down.png")}
              alt="arrow_down"
              style={styles.logo}
            />
          </View>
          <Typography type="text5">Download as PDF</Typography>
        </TouchableOpacity>
      );
    default:
      return (
        <TouchableOpacity
          onPress={onPress}
          style={{ ...styles.default, ...ms }}
        >
          {children}
        </TouchableOpacity>
      );
  }
};

export default CustomButton;
