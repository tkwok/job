import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

class ReviewScreen extends Component {
    static navigationOptions = {
        title: 'Review Jobs',
        header: () => {
            return {
                right: <Button title="Settings" onPress={() => {}} />
            };
        }
    };

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

export default AuthScreen;