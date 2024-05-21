import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
  });

  if (!fontsLoaded){
    return null
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.ContainerTop}>
        <View style={styles.IconContainer}>
          <Image style={styles.logo} source={require('./assets/Caret.png')}/>
        </View>
      </View>
      <View style={styles.ContainerBody}>
        <Text style={styles.bigText}>Check Your Mail</Text>
        <Text style={styles.smallText}>
          We have sent a password reset instructions to your email.
        </Text>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Open Email App</Text>
        </View>
        <Text style={styles.smallText1}>
          <Text style={styles.skip}>Skip </Text>I'll confirm later
        </Text>
        <Text style={{fontFamily:"Montserrat-Bold"}}>Hello Bold 2014</Text>
        <Text style={{fontFamily:"Montserrat-Regular"}}>Hello Regular ggg</Text>
      </View>
      <View style={styles.footer1}>
        <Text style={styles.smallText}>
          Did not recieve the email? Check your spam folder again
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "max-content",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    // backgroundColor: "red",
    alignItems: "center",
    marginTop: StatusBar.currentHeight || 30,
    // marginTop: "20px",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  ContainerTop: {
    width: "90%",
    height: "10%",
    // backgroundColor: "green",
    display: "flex",
    justifyContent: "center",
  },
  IconContainer: {
    width: 15,
    height: 15,
    // backgroundColor: "yellow",
  },
  logo: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  ContainerBody: {
    width: "90%",
    height: "80%",
    // backgroundColor:"purple",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // fontFamily: "poppins",
  },
  bigText: {
    color: "#4460EF",
    fontSize: 25,
    // fontFamily:"Roboto",
    fontWeight: "bold",
    lineHeight: 40,
  },
  smallText: {
    textAlign: "center",
    color:"#2c2c2c"
  },
  button: {
    width: 230,
    height: 40,
    backgroundColor: "#4460EF",
    borderRadius: 7,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
  },
  smallText1: {
    textAlign: "center",
    marginTop: 10,
    color:"#2c2c2c"
  },
  skip: {
    color: "#4460EF",
  },
  footer1: {
    width: "90%",
    height: "10%",
    color:"#2c2c2c"
    // backgroundColor: "green",
    // marginBottom: 20,
  },
});
