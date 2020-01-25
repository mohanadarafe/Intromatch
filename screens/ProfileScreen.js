import React from 'react'
import { Image, SafeAreaView, StyleSheet, View } from 'react-native'
import { Divider, Icon, Text, Button } from 'react-native-elements'
import Layout from '../constants/Layout'
import User from '../constants/Users'

const Social = ({ name }) => (
  <Icon
    name={name}
    type="font-awesome"
    containerStyle={styles.iconContainer}
    size={32}
  />
)

class ProfileScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/images/non-blurred/user2.jpg')} style={styles.image} />
        </View>
        <Text h4 style={styles.name}>
          {User.first_name.user2}, {User.age.user3}
        </Text>
        <Text style={styles.desc}>
          {User.work.user2}
        </Text>
        <Text style={styles.desc}>
          {User.bio.user3}
        </Text>
        <Divider style={styles.divider} />
        <Text h4 style={styles.thingsLike}>
          Three things I like
        </Text>
        <View style={{flexDirection:'row'}}>
          <Button
            style={{paddingRight: 20}}
            title={User.liked_things.user1.like_1}
          />
          <Button
            style={{paddingRight: 20}}
            title={User.liked_things.user1.like_2}
          />
          <Button
            title={User.liked_things.user1.like_3}
          />
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    margin: 20,
  },
  image: {
    width: Layout.window.width - 60, // device width - some margin
    height: Layout.window.height / 2 - 60, // device height / 2 - some margin
    borderRadius: 20,
  },
  name: {
    color: '#5E5E5E',
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
  thingsLike: {
    color: '#5E5E5E',
    alignSelf: 'flex-start',
    marginLeft: 30,
    paddingBottom: 10,
  },
  desc: {
    color: '#5E5E5E',
    alignSelf: 'flex-start',
    marginTop: 5,
    marginHorizontal: 30,
    fontSize: 14,
    paddingBottom: 10
  },
  divider: {
    backgroundColor: '#C0C0C0',
    width: Layout.window.width - 60,
    margin: 20,
  },
  socialLinks: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: Layout.window.width,
    marginLeft: 40,
  },
  iconContainer: {
    paddingHorizontal: 8,
    paddingVertical: 15,
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: '#81ecec'
  }
})

export default ProfileScreen