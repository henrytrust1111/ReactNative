import React from 'react'
import Container, { Wrapper } from '../Container'
import { StatusBar } from 'expo-status-bar'
import Typography from '../Typography'

const DetailsScreen = () => {
  return (
    <Container>
    <StatusBar backgroundColor="" barStyle="light-content" style="dark" />
    <Wrapper>
      <Typography type="heading">Detail Screen</Typography>
    </Wrapper>
  </Container>
  )
}

export default DetailsScreen