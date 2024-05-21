import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './homeStyle';
import Container, { Wrapper } from '../Container';
import { StatusBar } from 'expo-status-bar';
import Typography from '../Typography';

const HomeScreen = ({ navigation }) => {
  return (
    <Container>
    <StatusBar backgroundColor="" barStyle="light-content" style="dark" />
    <Wrapper>
      <Typography type="heading">Home Screen</Typography>
      <Button title="Logout" onPress={() => navigation.navigate('Login')} color={"gray"} />
    </Wrapper>
  </Container>
  );
};

export default HomeScreen;
