import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import { Card } from '../components/Card'
import { HomeScreenPics } from '../constants/Pics'
import { Badge } from 'react-native-elements'

class MatchScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Swiper
          cards={HomeScreenPics}
          renderCard={Card}
          infinite // keep looping cards infinitely
          backgroundColor="white"
          cardHorizontalMargin={0}
          verticalSwipe={false}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
})

export default MatchScreen