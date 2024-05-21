import React from "react";
import Container, { Wrapper } from "../Container";
import Typography from "../Typography";
import { StatusBar } from "expo-status-bar";

const SettingsScreen = () => {
  return (
    <Container>
      <StatusBar backgroundColor="" barStyle="light-content" style="dark" />
      <Wrapper>
        <Typography type="heading">Setting Screen</Typography>
      </Wrapper>
    </Container>
  );
};

export default SettingsScreen;
