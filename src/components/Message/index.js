

import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Message = ({ text }) => {
    return (
        <View style={styles.content}>
            <Text style={styles.text}>
                {text}
            </Text>
        </View>
    );
}

export default Message;