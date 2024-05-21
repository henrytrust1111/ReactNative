import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
const styles = StyleSheet.create({
  heading: {
    width: "100%",
  },
  wrapper: {
    gap: 17,
  },
  LogoWrapper: {
    width: "50%",
    height: hp(20),
    // backgroundColor: "#000",
  },
  Logo: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  sectionWrapper: {
    gap: hp("3.3%"),
  },
  inputWrapper: {
    gap: hp("2.3%"),
  },
  buttonWrapper: {
    gap: hp("2.3%"),
  },
  text: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
