import React, { useEffect } from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import styles from "./splashScreenStyles";
import { StatusBar } from "expo-status-bar";
import Typography from "../Typography";
import Button from "../Button";

const SplashScreen = ({ navigation }) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.replace('Login');
  //   }, 5000);
  // }, []);

  return (
    <SafeAreaView style={styles.body}>
      <StatusBar
        backgroundColor="#EF5A5A"
        barStyle="light-content"
        style="light"
      />
      <View style={styles.wrapper}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={require("../../assets/images/bro.png")}
          />
        </View>
        <View style={styles.title}>
          <Typography type="text2" ms={styles.text3}>
            Welcome
          </Typography>
          <Typography type="text3" ms={styles.text3}>
            Read without limits
          </Typography>
        </View>
        <View style={styles.nav}>
        <Button
        type="CreateAcc"
          title="Create Account"
          onPress={() => navigation.navigate("SignUp")}
        />
        <Button
        type="GuestLogin"
          title="Log in as Guest"
          onPress={() => navigation.navigate("Login")}
        />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
