
import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
// import styles from "./signUpStyle";
import styles from "../SignUpScreen/signUpStyle";
import Container, { Wrapper } from "../Container";
import InputField from "../InputField";
import Button from "../Button";
import Typography from "../Typography";
import { StatusBar } from "expo-status-bar";

const LoginScreen = ({ navigation }) => {
  return (
    <Container>
      <StatusBar backgroundColor="" barStyle="light-content" style="dark" />
      <Wrapper>
        <TouchableOpacity style={styles.LogoWrapper} onPress={() => navigation.navigate("Splash")}>
            <Image
              style={styles.Logo}
              source={require("../../assets/images/Logo.png")}
            />
      
        </TouchableOpacity>
        <View style={styles.sectionWrapper}>
          <View style={styles.inputWrapper}>
            <InputField type="cancel" placeholder="Username" />
            <InputField type="password" />
          </View>
          <View style={styles.buttonWrapper}>
            <Button
              type="GuestLogin"
              title="Log in"
              onPress={() => navigation.navigate("Main")}
            />
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <View style={styles.text}>
                <Typography type="text3" ms={{ color: "#828282" }}>
                  Don’t have an account yet?
                </Typography>
                <Typography type="text4" ms={{ color: "#828282" }}>
                  {" "}
                  Sign up here
                </Typography>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Wrapper>
    </Container>
  );
};

export default LoginScreen;

