import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
const styles = StyleSheet.create({
  body: {
    width: "100%",
    height: hp("100%"),
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EF5A5A",
  },
  wrapper: {
    width: "90%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  imageWrapper: {
    width: wp("90%"),
    height: hp("50%"),
    backgroundColor: "#EF5A5A",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  text3: {
    color: "#fff",
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  nav: {
    width: wp("90%"),
    justifyContent: "center",
    alignItems: "center",
    gap:hp(2.5),
  },
});

export default styles;
