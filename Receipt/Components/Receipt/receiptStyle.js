import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    paddingHorizontal:hp("1.1%"),
    // backgroundColor: "blue",
    paddingVertical: hp("1.5%"),
  },
  IconContainer: {
    width: 15,
    height: 15,
    // backgroundColor:"red",
  },
  IconText: {
    width: "90%",
    // backgroundColor: "green",
  },
  logo: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  text: {
    color: "#222222",
    fontWeight: 600,
  },
  secondSection: {
    gap: 4,
    paddingVertical: 10,
    // backgroundColor: "green",
  },
  titleText: {
    color: "#4361EE",
    // fontWeight:700,
  },
  testing: {
    fontFamily: "Montserrat",
  },
  hr: {
    width: "100%",
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor:"#C5CEFA",
    // backgroundColor: "#E5E9FD",
    // borderBottomColor: "#4361EE",
  },
  thirdSectionContainer: {
    width: "100%",
    marginTop: hp("2.5%"),
    flexDirection: "column",
    // backgroundColor: "red",
    gap: hp("4%"),
    // paddingVertical: 10,
  },
  thirdSection: {
    width: "100%",
    flexDirection: "column",
    // backgroundColor: "red",
    gap: 8,
  },
  thirdSectionChildren: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  trick: {
    width: "50%",
  },
  trickf: {
    width: "50%",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  hr1: {
    width: "100%",
    marginTop:hp("5%"),
    borderStyle: 'dashed',
    borderBottomWidth: 1,
    borderColor: '#7A7A7A',
  },
  fourthSection:{
    paddingVertical:hp("5%"),
    // backgroundColor:"green",
  },
  hr2: {
    width: "100%",
    borderStyle: 'dashed',
    borderBottomWidth: 1,
    borderColor: '#7A7A7A',
  },
  fifthSection:{
    marginTop:hp("3%"),
  },
  sixthSection:{
    marginTop:hp("5%"),
    // backgroundColor:"red",
  }
});

export default styles;
