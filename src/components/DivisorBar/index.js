

import React from 'react';
import { useTheme } from '@react-navigation/native';
import {
    View,
    Text
} from 'react-native';

import styles from './styles';

const DivisorBar = ({ text }) => {

    const { colors } = useTheme();

    return (
        <View style={[styles.bar, {
            shadowColor: colors.basic,
            backgroundColor: colors.thirdy,
        }]}>
            <Text style={[styles.text, { color: colors.text }]}>
                {text.toUpperCase()}
            </Text>
        </View>
    );
}

export default DivisorBar;