import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';

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
    })
    }
}));

export default class App extends React.Component {
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


