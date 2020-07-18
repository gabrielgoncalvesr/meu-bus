

import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const ButtonBar = ({ text, iconType, callback }) => {

    const { colors } = useTheme();

    const handleBarPress = () => {
        callback();
    }

    return (
        <>
            <TouchableOpacity
                style={styles.content}
                onPress={() => handleBarPress()}
            >
                <View style={styles.iconContent}>
                    <FontAwesome5
                        name={iconType}
                        style={[styles.icon, { color: colors.text }]}
                    />
                </View>

                <Text style={[styles.text, { color: colors.text }]}>
                    {text}
                </Text>
            </TouchableOpacity>
        </>
    );
}

export default ButtonBar;