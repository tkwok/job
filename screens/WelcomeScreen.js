import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import Slides from '../components/Slides';

const SLIDE_DATA = [
    { text: 'Welcome to JobApp', color: '#03A9F4' },
    { text: 'Set your location then swipe', color: '#009688' },
    { text: 'Something else', color: '#03A9F4' }
];

class WelcomeScreen extends Component {
    state = { token: null };

    async componentWillMount() {
        let token = await AsyncStorage.getItem('fb_token');

        if (token) {
            this.props.navigation.navigate('map');
            this.setState({ token });
        } else {
            this.setState({ token: false });
        }
    }

    isNull = (obj) => {
        return obj && obj !== 'null' && obj !== 'undefined';
    }

    onSlidesComplete = () => {
        this.props.navigation.navigate('auth');  
    }

    render() {
        if (this.isNull(this.state.token)) {
            return <AppLoading />
        }
        return (
            <Slides 
                data={SLIDE_DATA} 
                onComplete={this.onSlidesComplete} />
        );
    }
}

export default WelcomeScreen;