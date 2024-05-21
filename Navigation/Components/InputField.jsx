import { useFonts } from "expo-font";
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

const InputField = ({ type, ms, onChange, placeholder }) => {
  const [show, setShow] = useState(true);
  const [value1, setValue1] = useState("");
  const [loaded] = useFonts({
    "Montserrat-Bold": require("../assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Medium": require("../assets/fonts/Montserrat-Medium.ttf"),
    "Pattaya-Regular": require("../assets/fonts/Pattaya-Regular.ttf"),
  });

  const styles = StyleSheet.create({
    inputContainer: {
      height: hp("7.4%"),
      borderWidth: 0.5,
      borderColor: "#8E8E93",
      borderRadius: 6,
      flexDirection: "row",
      justifyContent: "center",
      alignContent: "center",
    },
    input: {
      height: "100%",
      width: "85%",
      fontSize: hp("1.8%"),
      fontFamily: "Montserrat-Regular",
      color: "#8E8E93",
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

  if (!loaded) {
    return null;
  }
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
            placeholderTextColor={"#8E8E93"}
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
    case "cancel":
      return (
        <View style={{ ...styles.inputContainer, ...ms }}>
          <TextInput
            placeholder={placeholder}
            placeholderTextColor={"#8E8E93"}
            style={{ ...styles.input, ...ms }}
            onChangeText={(Value)=>setValue1(Value)}
            value={value1}
          />
          {value1 && <TouchableOpacity
            onPress={() => setValue1("")}
            style={{ ...styles.iconContainer, ...ms }}
          >
            <Image
              style={styles.icon}
              source={require("../assets/icons/cancel.png")}
            />
          </TouchableOpacity>}
        </View>
      );
    case "done":
      return (
        <View style={{ ...styles.inputContainer, ...ms }}>
          <TextInput
            placeholder="3ciadgr"
            placeholderTextColor={"#8E8E93"}
            style={{ ...styles.input, ...ms }}
          />
          <TouchableOpacity
            onPress={() => setShow(!show)}
            style={{ ...styles.iconContainer, ...ms }}
          >
            <Image
              style={styles.icon}
              source={require("../assets/icons/done.png")}
            />
          </TouchableOpacity>
        </View>
      );

    default:
      return <></>;
  }
};

export default InputField;
