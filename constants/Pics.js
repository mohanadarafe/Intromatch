import shuffleArray from '../utils/shuffleArray'
import User from '../constants/Users'

//Here add the images from the json
export const HomeScreenPics = shuffleArray([
  {
    pic: require('../assets/images/blurred/user3_blurred.png'),
    title: User.first_name.user3 + ', ' + User.age.user3,
    caption: User.bio.user3
  },
  {
    pic: require('../assets/images/blurred/user4_blurred.png'),
    title: User.first_name.user4 + ', ' + User.age.user4,
    caption: User.bio.user4
  },
])