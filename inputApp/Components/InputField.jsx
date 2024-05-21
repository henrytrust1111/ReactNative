import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const InputField = ({ type, ms, onChange }) => {
  const [show, setShow] = useState(true);
  

  const styles = StyleSheet.create({
    inputContainer: {
      height: hp("6%"),
      borderWidth: 1,
      borderColor: "#222222",
      borderRadius: 7,
      flexDirection: "row",
      justifyContent: "center",
      alignContent: "center",
    },
    input: {
      height: "100%",
      width: "85%",
      //   backgroundColor: "#000",
    },
    iconContainer: {
      width: 15,
      height: 15,
      alignSelf: "center",
    },
    icon: {
      width: "100%",
      height: "100%",
      resizeMode: "contain",
    },
  });
  switch (type) {
    case "name":
      return (
        <View style={{ ...styles.inputContainer, ...ms }}>
          <TextInput
            style={{ ...styles.input, ...ms }}
            // value={fullName}
            placeholder="Input your full name"
            onChangeText={onChange}
          />
        </View>
      );
    case "password":
      return (
        <View style={{ ...styles.inputContainer, ...ms }}>
          <TextInput
            keyboardType="numeric"
            secureTextEntry={show}
            placeholder="password"
            style={{ ...styles.input, ...ms }}
            onChangeText={onChange}
          />
          <TouchableOpacity
            onPress={() => setShow(!show)}
            style={{ ...styles.iconContainer, ...ms }}
          >
            {show ? (
              <Image
                style={styles.icon}
                source={require("../assets/icons/eye.png")}
              />
            ) : (
              <Image
                style={styles.icon}
                source={require("../assets/icons/slashEye.png")}
              />
            )}
          </TouchableOpacity>
        </View>
      );
  
    default:
      return <></>;
  }
};

export default InputField;
