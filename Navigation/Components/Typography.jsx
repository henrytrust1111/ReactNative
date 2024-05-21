import React, { Children } from "react";
import { StyleSheet, Text } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useFonts } from "expo-font";

const Typography = ({ children, ms, type }) => {
  const [loaded] = useFonts({
    "Montserrat-Bold": require("../assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Medium": require("../assets/fonts/Montserrat-Medium.ttf"),
    "Pattaya-Regular": require("../assets/fonts/Pattaya-Regular.ttf"),
  });

  const styles = StyleSheet.create({
    heading: {
      fontSize: hp("7%"),
      fontWeight: 600,
      fontFamily: "Pattaya-Regular",
      color: "gray",
      textAlign: "center",
    },
    text2: {
      fontSize: hp("4.2%"),
      fontWeight: 600,
      fontFamily: "Montserrat-Bold",
    },
    text3: {
      fontSize: hp("1.8%"),
      fontWeight: 400,
      fontFamily: "Montserrat-Regular",
    },
    text4: {
      fontSize: hp("1.65%"),
      fontWeight: 600,
      color: "#535353",
      textAlign: "right",
      fontFamily: "Montserrat-Bold",
    },
    label: {
      fontSize: hp("2%"),
      fontWeight: 500,
      color: "#222222",
      fontFamily: "Montserrat-Medium",
    },
  });

  if (!loaded) {
    return null;
  }
  switch (type) {
    case "heading":
      return <Text style={{ ...styles.heading, ...ms }}>{children}</Text>;
    case "text2":
      return <Text style={{ ...styles.text2, ...ms }}>{children}</Text>;
    case "text3":
      return <Text style={{ ...styles.text3, ...ms }}>{children}</Text>;
    case "text4":
      return <Text style={{ ...styles.text4, ...ms }}>{children}</Text>;
    case "label":
      return <Text style={{ ...styles.label, ...ms }}>{children}</Text>;
    default:
      return <></>;
  }
};

export default Typography;
