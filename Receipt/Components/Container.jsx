import React from "react";
import { StyleSheet, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default function Container({ children }){
  styles = StyleSheet.create({
    body: {
      with: wp("100%"),
      height: hp("100%"),
      display:"flex",
      alignItems: "center",
      justifyContent: "center",
      paddingTop:40,
    },
  });
  return <View style={styles.body}>{children}</View>;
}

export const Wrapper = ({ children, ms }) => {
  styles = StyleSheet.create({
    body: {
      width: "90%",
      height: "100%",
    },
  });

  return <View style={{ ...styles.body, ...ms }}>{children}</View>;
};
