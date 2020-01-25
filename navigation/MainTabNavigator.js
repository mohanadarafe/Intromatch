import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import ProfileScreen from '../screens/ProfileScreen';
import MatchScreen from '../screens/MatchScreen';
import MessageScreen from '../screens/MessageScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

ProfileStack.path = '';

const MatchStack = createStackNavigator(
  {
    Match: MatchScreen,
  },
  config
);

MatchStack.navigationOptions = {
  tabBarLabel: 'Match',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

MatchStack.path = '';

const MessageStack = createStackNavigator(
  {
    Message: MessageScreen,
  },
  config
);

MessageStack.navigationOptions = {
  tabBarLabel: 'Message',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

MessageStack.path = '';

const tabNavigator = createBottomTabNavigator({
  ProfileStack,
  MatchStack,
  MessageStack,
});

tabNavigator.path = '';

export default tabNavigator;
