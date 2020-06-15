

import React from 'react';
import {
    View,
    ActivityIndicator
} from 'react-native';

import styles from './styles';

const Loading = ({ loading }) => {
    return (
        loading &&
        <View style={styles.content}>
            <ActivityIndicator
                size="large"
                color="#828282"
            />
        </View>
    );
}

export default Loading;