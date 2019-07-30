import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Button } from 'react-native-elements';

class ReviewScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
          headerRight: (
            <Button
                title="Settings"
                onPress={() => navigation.navigate('settings')}
                backgroundColor="rgba(0,0,0,0)"
                color="rgba(0, 122,255, 1)"
            />
          ),
          style: {
                marginTop: Platform.OS === 'android'? 24: 0
          }
        };
      };

    // static navigationOptions = {
    //     title: 'Review Jobs',
    //     header: ({ navigate }) => {
    //         return (
    //             right: (
    //                 <Button 
    //                     title="Settings" 
    //                     onPress={() => navigate('settings')}
    //                     backgroundColor="rgba(0,0,0,0)"
    //                     color="rgba(0, 122,255, 1)"
    //                 />
    //             ),
    //             style: {
    //                 marginTop: Platform.OS === 'android'? 24: 0
    //             }
    //         );
    //     }
    // };

    render() {
        return (
            <View>
                <Text>ReviewScreen</Text>
                <Text>WelcomeScreen</Text>
                <Text>WelcomeScreen</Text>
                <Text>WelcomeScreen</Text>
                <Text>WelcomeScreen</Text>
                <Text>WelcomeScreen</Text>
                <Text>WelcomeScreen</Text>
            </View>
        );
    }
}

export default ReviewScreen;