import React, { Children } from "react";
import { StyleSheet, Text } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useFonts } from "expo-font";

const Typography = ({ children, ms, type }) => {
  const [loaded] = useFonts({
    "Montserrat-Bold": require("../../assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Regular": require("../../assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Medium": require("../../assets/fonts/Montserrat-Medium.ttf"),
  });

  const styles = StyleSheet.create({
    text1: {
      fontSize: hp("2.2%"),
      fontWeight:600,
      fontFamily: "Montserrat-Bold",
    },
    text2: {
      fontSize: hp("2.2%"),
      fontWeight: 600,
      fontFamily: "Montserrat-Bold",
    },
    text3: {
      fontSize: hp("1.65%"),
      //   fontWeight: 400,
      fontFamily: "Montserrat-Regular",
    },
    text4: {
      fontSize: hp("1.65%"),
      fontWeight: 600,
      color: "#535353",
      textAlign: "right",
      fontFamily: "Montserrat-Bold",
    },
    text5: {
      fontSize: hp("1.75%"),
      fontWeight: 500,
      color: "#4361EE",
      fontFamily: "Montserrat-Medium",
    },
  });

  if (!loaded) {
    return null;
  }
  switch (type) {
    case "text1":
      return <Text style={{ ...styles.text1, ...ms }}>{children}</Text>;
    case "text2":
      return <Text style={{ ...styles.text2, ...ms }}>{children}</Text>;
    case "text3":
      return <Text style={{ ...styles.text3, ...ms }}>{children}</Text>;
    case "text4":
      return <Text style={{ ...styles.text4, ...ms }}>{children}</Text>;
    case "text5":
      return <Text style={{ ...styles.text5, ...ms }}>{children}</Text>;
    default:
      return <></>;
  }
};

export default Typography;
