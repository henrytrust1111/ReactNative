import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
const styles = StyleSheet.create({
  heading: {
    width: "100%",
  },
  wrapper: {
    gap: 17,
  },
  inputWrapper: {
    gap: hp("1.4%"),
  },
  footer: {
    width: "100%",
    alignItems: "center",
  },
});

export default styles;
