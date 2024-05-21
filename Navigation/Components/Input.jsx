import React from "react";
import { Text, View } from "react-native";
import styles from "./inputStyle";
import Container, { Wrapper } from "./Container";
import InputField from "./InputField";
import { useState } from "react";
import Typography from "./Typography";

const Input = () => {
  const [fullName, setFullName] = useState(null);
  const [password, setPassword] = useState(null);
  return (
    <Container>
      <Wrapper>
        <View style={styles.heading}>
          <Typography type="heading">Login</Typography>
        </View>
        <View style={styles.wrapper}>
          <View style={styles.inputWrapper}>
            <Typography type="label">Full Name :</Typography>
            <InputField type="name" onChange={(value) => setFullName(value)} />
          </View>
          <View style={styles.inputWrapper}>
            <Typography type="label">Password :</Typography>
            <InputField
              type="password"
              onChange={(value) => setPassword(value)}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <Text>{fullName}</Text>
        </View>
      </Wrapper>
    </Container>
  );
};

export default Input;
