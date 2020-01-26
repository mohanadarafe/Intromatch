import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import { Card } from '../components/Card'
import { HomeScreenPics } from '../constants/Pics'
import Toast from 'react-native-easy-toast'

class MatchScreen extends React.Component {
  checkForMatch = (val) => {
    const likes = HomeScreenPics[val].likes
    if (likes.user2 == true){
      this.refs.toast.show('New Match!', 2000)
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Swiper
          cards={HomeScreenPics}
          renderCard={Card}
          infinite // keep looping cards infinitely
          backgroundColor="white"
          cardHorizontalMargin={0}
          stackSize={2} // number of cards shown in background
          onSwipedRight={(cardIndex) => this.checkForMatch(cardIndex)}
        />
        <Toast
            ref="toast"
            style = {styles.notification}
            fadeInDuration={250}
            fadeOutDuration={500}
            opacity={0.8}
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
  notification: {
    backgroundColor: '#44bd32'
  }
})

export default MatchScreen