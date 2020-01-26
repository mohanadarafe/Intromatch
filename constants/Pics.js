import shuffleArray from '../utils/shuffleArray'
import user from '../constants/Users'

//Here add the images from the json
export const HomeScreenPics = shuffleArray([
  {
    pic: require('../assets/images/blurred/user3_blurred.png'),
    title: user.first_name.user3 + ', ' + user.age.user3,
    caption: user.bio.user3,
    likes: user.likes.user3
  },
  {
    pic: require('../assets/images/blurred/user4_blurred.png'),
    title: user.first_name.user4 + ', ' + user.age.user4,
    caption: user.bio.user4,
    likes: user.likes.user4
  },
])