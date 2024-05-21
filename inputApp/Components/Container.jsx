import React, { Children } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { SafeAreaView, StyleSheet, View } from "react-native";

export default function Container({ children }) {
  const styles = StyleSheet.create({
    body: {
      width: wp("100%"),
      height: hp("100%"),
      alignItems: "center",
      paddingTop: 34,
    },
  });

  return <SafeAreaView style={styles.body}>{children}</SafeAreaView>;
}

export function Wrapper({ children, ms }) {
  const styles = StyleSheet.create({
    body: {
      width: "90%",
      height: "100%",
      justifyContent: "center",
      gap:hp("10%")
    },
  });

  return <View style={{ ...styles.body, ...ms }}>{children}</View>;
}
