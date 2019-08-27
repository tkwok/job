import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import * as Permissions from 'expo-permissions';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
 
import * as actions from '../actions';

class MapScreen extends Component {
    state = {
        region: {
            longitude: -122,
            latitude: 37,
            longitudeDelta: 0.04,
            latitudeDelta: 0.09
        }
    };

    async componentDidMount() {
        await Permissions.askAsync(Permissions.LOCATION);
    }

    onRegionChangeComplete = (region) => {
        this.setState({ region });
    };

    onButtonPress = () => {
        this.props.fetchJobs(this.state.region);
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <MapView
                    region={this.state.region} 
                    style={{ flex: 1 }}
                    onRegionChangeComplete={this.onRegionChangeComplete}
                />
                <View style={styles.buttonContainer}>
                    <Button 
                        large
                        title="Search This Area"
                        backgroundColor="#009688"
                        icon={{ name: 'search' }}
                        onPress={this.onButtonPress}
                    />
                </View>
            </View>
        );
    }
}

const styles = {
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0
    }
}

export default connect(null, actions)(MapScreen);