/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Navigation from './navigation';
import {Block} from './components';

// import all used Images
const images = [
    require('./assets/icons/plants.png'),
    require('./assets/icons/seeds.png'),
    require('./assets/icons/flowers.png'),
    require('./assets/icons/sprayers.png'),
    require('./assets/icons/pots.png'),
    require('./assets/icons/fertilizers.png'),
    require('./assets/images/plants_1.png'),
    require('./assets/images/plants_2.png'),
    require('./assets/images/plants_3.png'),
    require('./assets/images/explore_1.png'),
    require('./assets/images/explore_2.png'),
    require('./assets/images/explore_3.png'),
    require('./assets/images/explore_4.png'),
    require('./assets/images/explore_5.png'),
    require('./assets/images/explore_6.png'),
    require('./assets/images/avatar.png'),
];

export default class App extends React.Component {
    state = {
        isLoadingComplete: false,
    };

    handleResourcesAsync = async () => {
        // We're caching all the images
        // for better performance on the app

        const cacheImages = images.map(img => {
            return Asset.fromModule(image).downloadAsync();
        });
        return Promise.all(cacheImages);
    };


    render() {
        if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
            return (
                <Block>
                    < Navigation/>
                </Block>
            )
        }
    }
};

const styles = StyleSheet.create({
});
