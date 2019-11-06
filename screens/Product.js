/*        STATELESS COMPONENT
*              Created By
*         Caio H. Silva Franco
* */
/* Core */
import React, {Component} from 'react';

/* Presentational */
import { StyleSheet, Text } from 'react-native';
import { Block } from '../components';

export default class Product extends Component {
    render() {
        return (
            <Block>
                <Text>Product</Text>
            </Block>
        )
    }
}

const styles = StyleSheet.create({
});
