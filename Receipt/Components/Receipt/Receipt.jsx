import React from "react";
import Container, { Wrapper } from "../Container";
import { Image, Text, View } from "react-native";
import styles from "./receiptStyle";
import Typography from "../Typography/Typography";
import CustomButton from "../button/Button";

const Receipt = () => {
  return (
    <Container ms={{ backgroundColor: "white" }}>
      <Wrapper ms={{ backgroundColor: "white" }}>
        <View style={styles.header}>
          <View style={styles.IconContainer}>
            <Image
              style={styles.logo}
              source={require("../../assets/icons/caret.png")}
            />
          </View>
          <Typography type="text1" ms={styles.text}>
            Receipt
          </Typography>
        </View>
        <View style={styles.secondSection}>
          <Typography type="text2" ms={styles.titleText}>
            Lisa’s Weekly Supply Receipt{" "}
          </Typography>
          <Typography type="text3">November 22, 2024</Typography>
        </View>
        <View style={styles.hr}></View>
        <View style={styles.thirdSectionContainer}>
          <View style={styles.thirdSection}>
            <View style={styles.thirdSectionChildren}>
              <Typography type="text3">Shopping Service</Typography>
              <Typography type="text4">List 1</Typography>
            </View>
            <View style={styles.thirdSectionChildren}>
              <Typography type="text3">Service Cost</Typography>
              <Typography type="text4">N1,000</Typography>
            </View>
          </View>
          <View style={styles.thirdSection}>
            <View style={styles.thirdSectionChildren}>
              <View style={styles.trick}>
                <Typography type="text3">Shipping Address</Typography>
              </View>
              <View style={styles.trickf}>
                <Typography type="text4">8, Makinde Lawanson</Typography>
                <Typography type="text4">Street, Ikeja, Lagos.</Typography>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.hr1}></View>

        <View style={styles.fourthSection}>
          <View style={styles.thirdSection}>
            <View style={styles.thirdSectionChildren}>
              <Typography type="text3">Payment Type</Typography>
              <Typography type="text4">Weekly</Typography>
            </View>
            <View style={styles.thirdSectionChildren}>
              <Typography type="text3">Payment Method</Typography>
              <Typography type="text4">Debit card (5011)</Typography>
            </View>
          </View>
        </View>

        <View style={styles.hr2}></View>

        <View style={styles.fifthSection}>
          <View style={styles.thirdSection}>
            <View style={styles.thirdSectionChildren}>
              <Typography type="text3">Plan State Date</Typography>
              <Typography type="text4">22-1-2020</Typography>
            </View>
            <View style={styles.thirdSectionChildren}>
              <Typography type="text3">Plan Start Time</Typography>
              <Typography type="text4">8:45AM</Typography>
            </View>
            <View style={styles.thirdSectionChildren}>
              <Typography type="text3">Plan Start Day</Typography>
              <Typography type="text4">2nd day of every month</Typography>
            </View>
          </View>
        </View>
        <View
          style={{ ...styles.thirdSectionChildren, ...styles.sixthSection }}
        >
          <Typography type="text3">Plan Start Day</Typography>
          <Typography type="text4" ms={{ color: "#4361EE" }}>
            Pending
          </Typography>
        </View>
        <CustomButton type="download">
        </CustomButton>
      </Wrapper>
    </Container>
  );
};

export default Receipt;
