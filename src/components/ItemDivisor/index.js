

import React from 'react';
import { View } from 'react-native';
import { useTheme } from '@react-navigation/native';

import styles from './styles';

const ItemDivisor = () => {

    const { colors } = useTheme();

    return (
        <View style={[styles.content, { borderColor: colors.text }]} />
    );
}

export default ItemDivisor;