

import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const DivisorBar = ({ text, light }) => {
    return (
        <View style={[styles.bar, { backgroundColor: light ? '#FFFFFF' : '#F5F5F5' }]}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}

export default DivisorBar;