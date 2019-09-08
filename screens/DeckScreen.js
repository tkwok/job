import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Swipe from '../components/Swipe';

class DeckScreen extends Component {
    renderCard(job) {
        return (
            <Card title={job.jobtitle}>
                <View style={StyleSheet.detailWrapper}>
                    <Text>{job.company}</Text>
                    <Text>{job.formattedRelativeTime}</Text>
                </View>
                <Text>
                    {job.snippet.replace()}
                </Text>
            </Card>
        )
    }

    render() {
        return (
            <View>
                <Swipe
                    data={this.props.jobs}
                    renderCard={this.renderCard}
                />
            </View>
        );
    }
}

const styles = {
    detailWrapper: {
        flexDirection: 'row',
        justifiedContent: 'space-around'
    }
}

function mapStateToProps({ jobs }) {
    return { jobs: jobs.results };
}

export default connect(mapStateToProps)(DeckScreen);