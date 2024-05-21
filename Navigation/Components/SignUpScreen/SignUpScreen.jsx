import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import styles from "./signUpStyle";
import Container, { Wrapper } from "../Container";
import InputField from "../InputField";
import Button from "../Button";
import Typography from "../Typography";
import { StatusBar } from "expo-status-bar";

const SignUpScreen = ({ navigation }) => {
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
            <InputField type="cancel" placeholder="Tricia Relox" />
            <InputField type="done" />
            <InputField type="cancel" placeholder="tdgrelox@gmail.com" />
            <InputField type="password" />
          </View>
          <View style={styles.buttonWrapper}>
            <Button
              type="GuestLogin"
              title="Create Account"
              onPress={() => navigation.navigate("Login")}
            />
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <View style={styles.text}>
                <Typography type="text3" ms={{ color: "#828282" }}>
                  Already have an account?
                </Typography>
                <Typography type="text4" ms={{ color: "#828282" }}>
                  {" "}
                  Log in here
                </Typography>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Wrapper>
    </Container>
  );
};

export default SignUpScreen;
