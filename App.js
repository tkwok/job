import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './store';

import Expo, { Notifications } from 'expo';
import registerForNotifications from './services/push_notification';

import AuthScreen from "./screens/AuthScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import MapScreen from "./screens/MapScreen";
import DeckScreen from "./screens/DeckScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ReviewScreen from "./screens/ReviewScreen";

const MainNavigator = createAppContainer(createBottomTabNavigator({  // set createAppContainer here
    welcome: WelcomeScreen,
    auth: AuthScreen,
    main: {
    screen: createBottomTabNavigator({
        map: MapScreen,
        deck: DeckScreen,
        review: {
        screen: createStackNavigator({
          review: ReviewScreen,
          settings: SettingsScreen
         })
        }
      }, {
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        tabBarOptions: {
          labelStyle: { fontSize: 12 }
        }
      })
    }
}, {
  navigationOptions: {
    tabBar: { visible: false }
  },
  lazyLoad: true
}));

export default class App extends React.Component {

  componentDidMount() {
    registerForNotifications();
    Notifications.addListener((notification) => {
      const { data: { text }, origin } = notification;
      if (origin === 'received' && text) {
        Alert.alert(
          'New Push Notification',
          text,
          [{ text: 'OK' }]
        );
      }
    });
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  }
});


