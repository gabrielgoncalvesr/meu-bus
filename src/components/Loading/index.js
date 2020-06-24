

import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { getThemeColors } from '../../util/themeContext';

import styles from './styles';

const Loading = ({ loading }) => {

    const colors = getThemeColors();

    return (
        loading &&
        <View style={[styles.content, { backgroundColor: colors.background }]}>
            <ActivityIndicator
                size="large"
                color={colors.text}
            />
        </View>
    );
}

export default Loading;